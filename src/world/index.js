import * as THREE from 'three';
import { clamp, hashString } from '../rng.js';
import { createHeightSampler, STEP, SEA_LEVEL } from './height.js';
import { City } from './city.js';
import { TerrainChunks, makeTerrainMaterial } from './chunks.js';
import { Environment } from './sky.js';
import { makeNoiseTexture } from '../textures.js';

const MAP_SIZE = 1200;
const MAP_SPAN = 1200;

const BIOME_CSS = {
  ocean: [36, 84, 122],
  beach: [196, 178, 118],
  plains: [100, 148, 63],
  forest: [58, 111, 49],
  desert: [190, 166, 102],
  snow: [219, 228, 232],
  rock: [125, 125, 117],
  city: [139, 141, 136],
};

export class World {
  constructor(scene, seed, renderer) {
    this.scene = scene;
    this.seed = seed;
    this.renderer = renderer;

    this.height = createHeightSampler(seed);
    this.city = new City(seed, this.height);
    this.noiseTex = makeNoiseTexture();
    this.terrainMat = makeTerrainMaterial(this.noiseTex);

    const cityBuild = this.city.build(this.noiseTex);
    scene.add(cityBuild.group);

    this.chunks = new TerrainChunks(scene, seed, this.height, this.city, this.terrainMat);
    this.chunks.initial(this.city.spawn);

    this.env = new Environment(scene, seed, this.city, this.noiseTex, renderer);
    this.env.setCityMaterials(this.city.facadeMats, this.city.lampMat);

    // fountain water disc
    const plaza = this.city.lots.find(l => l.type === 'plaza');
    this.fountainMat = new THREE.MeshPhongMaterial({
      color: 0x3d92b8, transparent: true, opacity: 0.82, shininess: 110, specular: 0xd8f4ff,
    });
    if (plaza) {
      const disc = new THREE.Mesh(new THREE.CircleGeometry(3.35, 20), this.fountainMat);
      disc.rotation.x = -Math.PI / 2;
      disc.position.set(plaza.x, this.city.groundY + 0.95, plaza.z);
      disc.renderOrder = 1;
      scene.add(disc);
      this.fountain = disc;
    }

    this.buildColliderGrid();
    this.buildMap();
    this._roots = [cityBuild.group, this.chunks.group, this.env.sky, this.env.stars, this.env.moon, this.env.clouds, this.env.water, this.fountain].filter(Boolean);

    this._raycaster = new THREE.Raycaster();
    this._tmpV = new THREE.Vector3();
  }

  get groundY() { return this.city.groundY; }

  buildColliderGrid() {
    this.cell = 24;
    this.colliderGrid = new Map();
    for (const c of this.city.colliders) {
      const x0 = Math.floor(c.x0 / this.cell), x1 = Math.floor(c.x1 / this.cell);
      const z0 = Math.floor(c.z0 / this.cell), z1 = Math.floor(c.z1 / this.cell);
      for (let gz = z0; gz <= z1; gz++) {
        for (let gx = x0; gx <= x1; gx++) {
          const k = gx + ':' + gz;
          let arr = this.colliderGrid.get(k);
          if (!arr) { arr = []; this.colliderGrid.set(k, arr); }
          arr.push(c);
        }
      }
    }
  }

  queryColliders(x, z, r = 1) {
    const gx = Math.floor(x / this.cell), gz = Math.floor(z / this.cell);
    const span = Math.max(1, Math.ceil(r / this.cell));
    const out = [];
    const seen = new Set();
    for (let j = -span; j <= span; j++) {
      for (let i = -span; i <= span; i++) {
        const arr = this.colliderGrid.get((gx + i) + ':' + (gz + j));
        if (!arr) continue;
        for (const c of arr) {
          if (seen.has(c)) continue;
          seen.add(c);
          out.push(c);
        }
      }
    }
    return out;
  }

  /**
   * Push a circle out of any building it overlaps. Returns corrected x/z.
   */
  resolveCircle(x, z, r) {
    const cols = this.queryColliders(x, z, r + 2);
    let px = x, pz = z;
    for (let pass = 0; pass < 2; pass++) {
      let moved = false;
      for (const c of cols) {
        if (px + r > c.x0 && px - r < c.x1 && pz + r > c.z0 && pz - r < c.z1) {
          const left = px + r - c.x0;
          const right = c.x1 - (px - r);
          const top = pz + r - c.z0;
          const bottom = c.z1 - (pz - r);
          const m = Math.min(left, right, top, bottom);
          if (m === left) px -= left;
          else if (m === right) px += right;
          else if (m === top) pz -= top;
          else pz += bottom;
          moved = true;
        }
      }
      if (!moved) break;
    }
    return { x: px, z: pz };
  }

  isBlocked(x, z, pad = 0.3) {
    for (const c of this.queryColliders(x, z, pad + 1)) {
      if (x > c.x0 - pad && x < c.x1 + pad && z > c.z0 - pad && z < c.z1 + pad) return true;
    }
    return false;
  }

  groundAt(x, z) {
    return this.height.heightAt(x, z, this.city);
  }

  slopeAt(x, z) {
    return this.height.slopeAt(x, z, this.city);
  }

  isWater(x, z) {
    return this.groundAt(x, z) < SEA_LEVEL - 0.2;
  }

  /** Ray vs. buildings + stepped terrain. Used for bullets and third-person camera. */
  raycastStatic(origin, dir, maxDist = 80, includeGround = true) {
    let best = maxDist;
    for (const c of this.city.colliders) {
      const t = rayBox(origin, dir, c, best);
      if (t !== null) best = t;
    }
    if (includeGround) {
      const step = 1.25;
      for (let t = step; t < best; t += step) {
        const x = origin.x + dir.x * t;
        const y = origin.y + dir.y * t;
        const z = origin.z + dir.z * t;
        if (y < this.groundAt(x, z) + 0.15) { best = t; break; }
      }
    }
    return {
      dist: best,
      point: new THREE.Vector3(origin.x + dir.x * best, origin.y + dir.y * best, origin.z + dir.z * best),
    };
  }

  update(dt, camera, playerPos) {
    this.env.update(dt, camera, playerPos);
    this.chunks.update(playerPos);
  }

  // ---------------------------------------------------------------- map
  buildMap() {
    const canvas = document.createElement('canvas');
    canvas.width = MAP_SIZE;
    canvas.height = MAP_SIZE;
    const ctx = canvas.getContext('2d');
    const span = MAP_SPAN;
    const ox = this.city.cx - span / 2;
    const oz = this.city.cz - span / 2;
    const step = 5;
    const px = MAP_SIZE / span;

    ctx.fillStyle = '#17435f';
    ctx.fillRect(0, 0, MAP_SIZE, MAP_SIZE);

    for (let wz = 0; wz < span; wz += step) {
      for (let wx = 0; wx < span; wx += step) {
        const x = ox + wx, z = oz + wz;
        const h = this.height.heightAt(x, z, this.city);
        const biome = this.height.biomeAt(x, z, this.city);
        let c = BIOME_CSS[biome] || BIOME_CSS.plains;
        let shade = 1;
        if (h < SEA_LEVEL - 0.2) {
          const depth = clamp((SEA_LEVEL - h) / 20, 0, 1);
          c = [28 + (1 - depth) * 18, 70 + (1 - depth) * 34, 100 + (1 - depth) * 32];
        } else {
          shade = 0.82 + clamp(h / 90, 0, 1) * 0.34;
          // cheap banded shading
          shade *= 0.94 + ((Math.sin(x * 0.11) + Math.sin(z * 0.13)) * 0.5 + 0.5) * 0.12;
        }
        ctx.fillStyle = `rgb(${(c[0] * shade) | 0},${(c[1] * shade) | 0},${(c[2] * shade) | 0})`;
        ctx.fillRect(wx * px, wz * px, step * px + 0.6, step * px + 0.6);
      }
    }

    // City overlay
    const s = px;
    const toX = (x) => (x - ox) * px;
    const toY = (z) => (z - oz) * px;
    const city = this.city;
    // base block area
    ctx.fillStyle = '#71736e';
    ctx.fillRect(toX(city.cx - city.half), toY(city.cz - city.half), city.half * 2 * px, city.half * 2 * px);

    // lots
    for (const lot of city.lots) {
      let fill = '#8c8a80';
      if (lot.type === 'park' || lot.type === 'plaza') fill = '#4c833b';
      else if (lot.type === 'parking') fill = '#42464b';
      else if (lot.type === 'construction') fill = '#8a744c';
      ctx.fillStyle = fill;
      ctx.fillRect(toX(lot.x - lot.w / 2), toY(lot.z - lot.d / 2), lot.w * px, lot.d * px);
    }
    // roads
    ctx.strokeStyle = '#34383d';
    ctx.lineWidth = city.roadWidth * px;
    for (const x of city.xLines) {
      ctx.beginPath();
      ctx.moveTo(toX(x), toY(city.cz - 140));
      ctx.lineTo(toX(x), toY(city.cz + 140));
      ctx.stroke();
    }
    for (const z of city.zLines) {
      ctx.beginPath();
      ctx.moveTo(toX(city.cx - 140), toY(z));
      ctx.lineTo(toX(city.cx + 140), toY(z));
      ctx.stroke();
    }
    // buildings (roofs)
    for (const b of city.buildings) {
      ctx.fillStyle = b.h > 28 ? '#2e333a' : '#4a4e52';
      ctx.fillRect(toX(b.x - b.baseW / 2), toY(b.z - b.baseD / 2), b.baseW * px, b.baseD * px);
      if (b.h > 22) {
        ctx.fillStyle = 'rgba(255,255,255,0.1)';
        ctx.fillRect(toX(b.x - b.baseW / 2) + 1, toY(b.z - b.baseD / 2) + 1, Math.max(1, b.baseW * px - 2), 1);
      }
    }
    // job markers will be drawn dynamically.

    this.mapCanvas = canvas;
    this.mapOrigin = { x: ox, z: oz };
    this.mapScale = px;
  }

  worldToMap(x, z) {
    return {
      x: (x - this.mapOrigin.x) * this.mapScale,
      y: (z - this.mapOrigin.z) * this.mapScale,
    };
  }

  biomeLabel(x, z) {
    const b = this.height.biomeAt(x, z, this.city);
    const labels = {
      ocean: 'OPEN WATER', beach: 'SANDY COAST', plains: 'GRAND PLAINS', forest: 'PINE RIDGE',
      desert: 'RED MESA', snow: 'FROSTPEAK', rock: 'IRON HILLS', city: 'SAN VOXEL',
    };
    return labels[b] || 'THE WILDS';
  }

  locationName(x, z) {
    const d = Math.max(Math.abs(x - this.city.cx), Math.abs(z - this.city.cz));
    if (d < 205) return this.city.districtAt(x, z);
    return this.biomeLabel(x, z) + ' COUNTY';
  }

  randomRoadSpawn(rng) {
    return this.city.randomRoadSpawn(rng);
  }

  dispose() {
    for (const root of this._roots) {
      if (!root) continue;
      this.scene.remove(root);
    }
    this.scene.remove(this.env.sun);
    this.scene.remove(this.env.hemi);
    this.scene.remove(this.env.ambient);
    this.scene.remove(this.env.sunTarget);
    this.env.sun.dispose?.();
    this.env.hemi.dispose?.();
    this.chunks.chunks.forEach(c => c.mesh.geometry.dispose());
    this.city.group.traverse(o => {
      if (o.isMesh) {
        o.geometry.dispose();
        const mats = Array.isArray(o.material) ? o.material : [o.material];
        for (const m of mats) {
          if (!m) continue;
          for (const k of ['map', 'emissiveMap']) if (m[k]) m[k].dispose();
          m.dispose();
        }
      }
    });
    if (this.fountainMat) this.fountainMat.dispose();
    this.noiseTex.dispose();
    this.env.waterTex.dispose();
  }
}

function rayBox(origin, dir, c, maxDist) {
  let tmin = 0, tmax = maxDist;
  const axes = [
    [origin.x, dir.x, c.x0, c.x1],
    [origin.y, dir.y, c.y0, c.y1],
    [origin.z, dir.z, c.z0, c.z1],
  ];
  for (const [o, d, min, max] of axes) {
    if (Math.abs(d) < 1e-7) {
      if (o < min || o > max) return null;
    } else {
      let t1 = (min - o) / d;
      let t2 = (max - o) / d;
      if (t1 > t2) { const t = t1; t1 = t2; t2 = t; }
      tmin = Math.max(tmin, t1);
      tmax = Math.min(tmax, t2);
      if (tmin > tmax) return null;
    }
  }
  return tmin >= 0 ? tmin : (tmax >= 0 ? tmax : null);
}
