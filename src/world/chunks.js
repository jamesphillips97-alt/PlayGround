import * as THREE from 'three';
import { hashCell } from '../rng.js';
import { GeoBuilder, col, mulColor } from './geo.js';
import { SEA_LEVEL, STEP, CELL, CHUNK_CELLS, CHUNK_SIZE, biomeColors } from './height.js';

const TREE_DENSITY = {
  forest: 0.24,
  plains: 0.045,
  snow: 0.055,
  desert: 0.022,
  rock: 0.012,
  beach: 0.006,
  ocean: 0,
  city: 0,
};

export class TerrainChunks {
  constructor(scene, seed, height, city, material) {
    this.scene = scene;
    this.seed = seed;
    this.height = height;
    this.city = city;
    this.material = material;
    this.radius = 6;
    this.chunks = new Map();
    this.group = new THREE.Group();
    this.group.name = 'terrain';
    scene.add(this.group);
    this.seedNum = (hashCell(1, 2, 3) * 4294967296) >>> 0;
    this.pending = [];
  }

  key(ix, iz) { return ix + ',' + iz; }

  initial(pos) {
    const cx = Math.floor(pos.x / CHUNK_SIZE);
    const cz = Math.floor(pos.z / CHUNK_SIZE);
    const list = [];
    for (let dz = -this.radius; dz <= this.radius; dz++) {
      for (let dx = -this.radius; dx <= this.radius; dx++) {
        list.push([cx + dx, cz + dz, dx * dx + dz * dz]);
      }
    }
    list.sort((a, b) => a[2] - b[2]);
    for (const [ix, iz] of list) this.ensure(ix, iz);
  }

  update(pos) {
    const cx = Math.floor(pos.x / CHUNK_SIZE);
    const cz = Math.floor(pos.z / CHUNK_SIZE);
    if (this.centerX === cx && this.centerZ === cz) {
      // finish queued work
      for (let i = 0; i < 2 && this.pending.length; i++) {
        const [ix, iz] = this.pending.shift();
        this.ensure(ix, iz);
      }
      return;
    }
    this.centerX = cx;
    this.centerZ = cz;
    this.pending = [];
    for (let dz = -this.radius; dz <= this.radius; dz++) {
      for (let dx = -this.radius; dx <= this.radius; dx++) {
        const ix = cx + dx, iz = cz + dz;
        if (!this.chunks.has(this.key(ix, iz))) this.pending.push([ix, iz]);
      }
    }
    this.pending.sort((a, b) => {
      const da = (a[0] - cx) ** 2 + (a[1] - cz) ** 2;
      const db = (b[0] - cx) ** 2 + (b[1] - cz) ** 2;
      return da - db;
    });
    // Build a handufl immediately so the player never sees a hole underfoot.
    let count = 0;
    while (this.pending.length && count < 6) {
      const [ix, iz] = this.pending.shift();
      this.ensure(ix, iz);
      count++;
    }
    // unload far chunks
    for (const [k, chunk] of this.chunks) {
      if (Math.abs(chunk.ix - cx) > this.radius + 1 || Math.abs(chunk.iz - cz) > this.radius + 1) {
        this.group.remove(chunk.mesh);
        chunk.mesh.geometry.dispose();
        this.chunks.delete(k);
      }
    }
  }

  ensure(ix, iz) {
    const k = this.key(ix, iz);
    if (this.chunks.has(k)) return;
    const mesh = this.build(ix, iz);
    if (!mesh) return;
    const chunk = { ix, iz, mesh };
    this.chunks.set(k, chunk);
    this.group.add(mesh);
  }

  build(ix, iz) {
    const b = new GeoBuilder(true);
    const ox = ix * CHUNK_SIZE;
    const oz = iz * CHUNK_SIZE;
    const G = CHUNK_CELLS + 2;
    const grid = new Float32Array(G * G);
    const biomes = [];
    for (let gz = 0; gz < G; gz++) {
      for (let gx = 0; gx < G; gx++) {
        const x = gx - 1, z = gz - 1;
        const wx = ox + (x + 0.5) * CELL;
        const wz = oz + (z + 0.5) * CELL;
        grid[gz * G + gx] = this.height.heightAt(wx, wz, this.city);
        biomes.push(this.height.biomeAt(wx, wz, this.city));
      }
    }

    const topC = {};
    const sideC = {};
    const getTop = (biome, variation) => {
      if (!topC[biome]) topC[biome] = col(biomeColors(biome).top);
      return mulColor(topC[biome], variation);
    };
    const getSide = (biome, variation) => {
      if (!sideC[biome]) sideC[biome] = col(biomeColors(biome).side);
      return mulColor(sideC[biome], variation);
    };
    const stone = col(0x777b76);

    for (let z = 0; z < CHUNK_CELLS; z++) {
      for (let x = 0; x < CHUNK_CELLS; x++) {
        const gx = x + 1, gz = z + 1;
        const h = grid[gz * G + gx];
        const wx = ox + (x + 0.5) * CELL;
        const wz = oz + (z + 0.5) * CELL;
        const biome = biomes[gz * G + gx];
        const hv = hashCell(x + ix * 97, z + iz * 97, this.height.seed);
        const variation = 0.82 + hv * 0.28;
        const underwater = h < SEA_LEVEL;
        const top = underwater ? mulColor(getTop(biome, variation), 0.55) : getTop(biome, variation);
        const x0 = ox + x * CELL, x1 = x0 + CELL;
        const z0 = oz + z * CELL, z1 = z0 + CELL;

        // top
        b.addQuad(
          [x0, h, z0], [x0, h, z1], [x1, h, z1], [x1, h, z0], top,
          [[x0 / 3, z0 / 3], [x0 / 3, z1 / 3], [x1 / 3, z1 / 3], [x1 / 3, z0 / 3]],
          [0, 1, 0]
        );

        const sides = [
          { dx: 1, dz: 0, nh: grid[gz * G + gx + 1] },
          { dx: -1, dz: 0, nh: grid[gz * G + gx - 1] },
          { dx: 0, dz: 1, nh: grid[(gz + 1) * G + gx] },
          { dx: 0, dz: -1, nh: grid[(gz - 1) * G + gx] },
        ];
        for (const s of sides) {
          if (s.nh >= h - 0.01) continue;
          const nbiome = biome;
          const sc = getSide(nbiome, variation);
          const lower = Math.max(s.nh, h - STEP * 2.2);
          // upper band
          this.addSide(b, s.dx, s.dz, x0, x1, z0, z1, lower, h, sc, ix, iz);
          // cliff rock below
          if (s.nh < lower - 0.01) {
            this.addSide(b, s.dx, s.dz, x0, x1, z0, z1, s.nh, lower, mulColor(stone, 0.82 + hv * 0.2), ix, iz);
          }
        }
      }
    }

    // trees, cacti, boulders
    for (let z = 2; z < CHUNK_CELLS - 1; z++) {
      for (let x = 2; x < CHUNK_CELLS - 1; x++) {
        const idx = (z + 1) * G + (x + 1);
        const biome = biomes[idx];
        if (biome === 'city' || biome === 'ocean') continue;
        const h = grid[idx];
        if (h < SEA_LEVEL + 0.4) continue;
        const density = TREE_DENSITY[biome] ?? 0.03;
        const r = hashCell(ox + x * 31, oz + z * 31, this.seedNum);
        if (r > density) continue;
        const wx = ox + x * CELL + 1;
        const wz = oz + z * CELL + 1;
        // don't put trees in roads (city edge)
        if (Math.abs(wx - this.city.cx) < 151 && Math.abs(wz - this.city.cz) < 151) continue;
        const tr = hashCell(ox + x * 57, oz + z * 131, this.seedNum + 9);
        const y = h;
        if (biome === 'desert') this.addCactus(b, wx, wz, y, tr);
        else if (biome === 'snow') this.addPine(b, wx, wz, y, tr);
        else if (biome === 'rock') this.addBoulder(b, wx, wz, y, tr);
        else this.addTree(b, wx, wz, y, tr);
      }
    }

    const geo = b.build();
    if (!geo.attributes.position.count) { geo.dispose(); return null; }
    const mesh = new THREE.Mesh(geo, this.material);
    mesh.position.set(0, 0, 0);
    mesh.receiveShadow = true;
    mesh.castShadow = false;
    mesh.frustumCulled = true;
    return mesh;
  }

  addSide(b, dx, dz, x0, x1, z0, z1, y0, y1, color, ix, iz) {
    if (y1 - y0 < 0.01) return;
    if (dx === 1) {
      b.addQuad([x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1], color,
        [[z1 / 3, y0 / 3], [z0 / 3, y0 / 3], [z0 / 3, y1 / 3], [z1 / 3, y1 / 3]], [1, 0, 0]);
    } else if (dx === -1) {
      b.addQuad([x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0], color,
        [[z0 / 3, y0 / 3], [z1 / 3, y0 / 3], [z1 / 3, y1 / 3], [z0 / 3, y1 / 3]], [-1, 0, 0]);
    } else if (dz === 1) {
      b.addQuad([x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], color,
        [[x0 / 3, y0 / 3], [x1 / 3, y0 / 3], [x1 / 3, y1 / 3], [x0 / 3, y1 / 3]], [0, 0, 1]);
    } else {
      b.addQuad([x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], color,
        [[x1 / 3, y0 / 3], [x0 / 3, y0 / 3], [x0 / 3, y1 / 3], [x1 / 3, y1 / 3]], [0, 0, -1]);
    }
    void ix; void iz;
  }

  addTree(b, x, z, y, r) {
    const h = 3.2 + r * 3.2;
    const trunk = col(0x6a4b2e, r * 0.03);
    const leaf = col(0x3f7d36, (r - 0.5) * 0.06);
    b.box(x, y, z, 0.72, h, 0.72, trunk, 2);
    b.box(x, y + h - 0.5, z, 3.4, 1.8, 3.4, leaf, 2);
    b.box(x, y + h + 0.8, z, 2.2, 1.2, 2.2, mulColor(leaf, 1.08), 2);
    if (r > 0.55) b.box(x + 1.4, y + h - 0.9, z - 1.1, 1.6, 1.1, 1.6, mulColor(leaf, 0.94), 2);
  }

  addPine(b, x, z, y, r) {
    const h = 5 + r * 4;
    b.box(x, y, z, 0.6, h, 0.6, col(0x54402b), 2);
    for (let i = 0; i < 3; i++) {
      const w = 4.4 - i * 1.1;
      b.box(x, y + h - 1.4 + i * 1.4, z, w, 1.2, w, col(0x2f6b36, i * 0.02), 2);
    }
    b.box(x, y + h + 2.7, z, 1.1, 1.1, 1.1, col(0x3b7c40), 2);
  }

  addCactus(b, x, z, y, r) {
    const h = 2.2 + r * 2.8;
    const c = col(0x4c8a45, r * 0.03);
    b.box(x, y, z, 0.85, h, 0.85, c, 2);
    if (r > 0.45) {
      b.box(x - 0.75, y + h * 0.45, z, 0.7, 0.6, 0.5, c, 2);
      b.box(x - 1.15, y + h * 0.45, z, 0.5, 1.5, 0.5, c, 2);
    }
    if (r > 0.7) {
      b.box(x + 0.75, y + h * 0.6, z, 0.65, 0.5, 0.45, c, 2);
      b.box(x + 1.1, y + h * 0.6, z, 0.45, 1.2, 0.45, c, 2);
    }
  }

  addBoulder(b, x, z, y, r) {
    const s = 1.2 + r * 2.2;
    b.box(x, y, z, s, s * 0.7, s, col(0x7b7d78, r * 0.04), 2);
    if (r > 0.5) b.box(x + s * 0.6, y, z + s * 0.2, s * 0.7, s * 0.5, s * 0.8, col(0x6f716c), 2);
  }
}

export function makeTerrainMaterial(noiseTex) {
  return new THREE.MeshLambertMaterial({ map: noiseTex, vertexColors: true });
}
