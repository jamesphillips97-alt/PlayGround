import * as THREE from 'three';
import { stream, clamp } from '../rng.js';
import { GeoBuilder, col } from './geo.js';
import { makeFacadeMaps } from '../textures.js';
import { STEP } from './height.js';

const ROOF_COLORS = [0x4b4f52, 0x56504a, 0x3f464b, 0x5d5850, 0x43474b];
const AWNING_COLORS = [0xb23b3b, 0x2f6e8f, 0x3c7a4a, 0xb98a2e, 0x6b4a86, 0x30343a];
const CAR_COLORS = [0xd8d8d2, 0x2c3038, 0x8f2c2c, 0x2e5c8a, 0x3e7a4a, 0xc9a33a, 0x6b6f78, 0x9f5a2c, 0xdce4e8, 0x4b3d6b];

const STYLES = [
  { wall: '#b8b4a7', frame: '#34383e', glassTop: '#557485', glassMid: '#38505f', glassBot: '#22323c', cols: 4, rows: 4, litChance: 0.44, band: 'rgba(255,255,255,0.05)' },
  { wall: '#8f5a43', frame: '#3a2f2b', glassTop: '#5d7484', glassMid: '#405667', glassBot: '#253a46', brick: true, cols: 3, rows: 4, litChance: 0.38, band: 'rgba(0,0,0,0.08)' },
  { wall: '#6f8288', frame: '#242c31', glassTop: '#a7c7d6', glassMid: '#6f99ad', glassBot: '#3f6475', glass: true, cols: 5, rows: 5, litChance: 0.32 },
  { wall: '#5c6168', frame: '#20252a', glassTop: '#7d98a6', glassMid: '#4a6371', glassBot: '#2b3c45', dark: true, cols: 4, rows: 5, litChance: 0.5, band: 'rgba(255,255,255,0.04)' },
  { wall: '#c9b895', frame: '#413b32', glassTop: '#597485', glassMid: '#3d5665', glassBot: '#263944', cols: 4, rows: 4, litChance: 0.4, band: 'rgba(90,60,20,0.08)' },
  { wall: '#98a0a2', frame: '#30363a', glassTop: '#92b8c9', glassMid: '#648a9c', glassBot: '#3e5e6d', cols: 5, rows: 4, litChance: 0.36, band: 'rgba(255,255,255,0.06)' },
];

function districtName(dx, dz, d) {
  if (d < 46) return 'DOWNTOWN';
  if (d < 100) {
    if (dz < -46) return 'NORTH HEIGHTS';
    if (dz > 46) return 'SOUTH DOCKS';
    if (dx < -46) return 'WEST END';
    return 'EAST VICE';
  }
  if (d < 160) {
    const a = Math.atan2(dz, dx);
    if (a > Math.PI * 0.25 && a < Math.PI * 0.75) return 'THE STRIP';
    if (a < -Math.PI * 0.25 && a > -Math.PI * 0.75) return 'PALM ROW';
    if (a >= Math.PI * 0.75 || a <= -Math.PI * 0.75) return 'OLD TOWN';
    return 'HARBOR LINE';
  }
  return 'SAN VOXEL COUNTY';
}

export class City {
  constructor(seed, height) {
    this.seed = String(seed);
    this.height = height;
    this.half = 135;
    this.pitch = 30;
    this.roadWidth = 9;
    this.blocks = 9;
    this.tile = 7.2;

    const site = stream(seed, 'city-site');
    this.cx = Math.round(site.range(-70, 70));
    this.cz = Math.round(site.range(-70, 70));

    // Pick a believable plateau height from the surrounding land.
    let sum = 0, n = 0;
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      const r = i === 0 ? 0 : 90;
      sum += height.naturalHeight(this.cx + Math.cos(a) * r, this.cz + Math.sin(a) * r);
      n++;
    }
    const avg = sum / n;
    this.groundY = clamp(Math.round((avg + 4.5) / STEP) * STEP, 4.5, 16.5);

    this.xLines = [];
    this.zLines = [];
    for (let i = 0; i <= this.blocks; i++) {
      this.xLines.push(this.cx - this.half + i * this.pitch);
      this.zLines.push(this.cz - this.half + i * this.pitch);
    }

    this.lots = [];
    this.buildings = [];
    this.segments = [];
    this.parkedSpots = [];
    this.walkPoints = [];
    this.jobPoints = [];
    this.colliders = [];

    this.generateLayout();

    this.spawn = { x: this.cx + 9, z: this.cz + 5, yaw: -Math.PI / 2 };
    this.hospital = { x: this.cx - 9, z: this.cz + 9 };
    this.center = { x: this.cx, z: this.cz, y: this.groundY };
  }

  get city() { return this; }

  generateLayout() {
    const { seed } = this;
    for (let j = 0; j < this.blocks; j++) {
      for (let i = 0; i < this.blocks; i++) {
        const x = this.cx - this.half + (i + 0.5) * this.pitch;
        const z = this.cz - this.half + (j + 0.5) * this.pitch;
        const dx = x - this.cx, dz = z - this.cz;
        const d = Math.hypot(dx, dz);
        const cheb = Math.max(Math.abs(i - 4), Math.abs(j - 4)) / 4.5;
        const core = Math.max(0, 1 - cheb);
        const rng = stream(seed, `lot:${i}:${j}`);
        const district = districtName(dx, dz, d);

        let type = 'build';
        if (i === 4 && j === 4) type = 'plaza';
        else if (core < 0.7 && rng() < 0.085) type = 'park';
        else if (core < 0.9 && rng() < 0.075) type = 'parking';
        else if (rng() < 0.032) type = 'construction';

        const lot = { i, j, x, z, w: this.pitch - this.roadWidth, d: this.pitch - this.roadWidth, type, core, district };
        this.lots.push(lot);

        if (type === 'build') {
          this.generateBuildings(lot, rng);
        } else if (type === 'parking') {
          this.generateParking(lot, rng);
        } else if (type === 'park' || type === 'plaza') {
          this.generateParkSpots(lot, rng);
        }
      }
    }

    // Pedestrian spawn points along sidewalks.
    const walkRng = stream(seed, 'walk-points');
    for (let k = 0; k < 140; k++) {
      const lot = walkRng.pick(this.lots);
      const side = walkRng.int(0, 3);
      let x = lot.x, z = lot.z;
      const off = lot.w / 2 - walkRng.range(0.6, 2.2);
      if (side === 0) { x += off; z += walkRng.range(-9, 9); }
      else if (side === 1) { x -= off; z += walkRng.range(-9, 9); }
      else if (side === 2) { z += off; x += walkRng.range(-9, 9); }
      else { z -= off; x += walkRng.range(-9, 9); }
      this.walkPoints.push({ x, z, district: lot.district });
    }

    // Job boards: plaza + two other open lots, spread out.
    const candidates = this.lots.filter(l => l.type === 'park' || l.type === 'plaza' || l.type === 'parking');
    const chosen = [this.lots.find(l => l.type === 'plaza')];
    const jobRng = stream(seed, 'job-points');
    const shuffled = candidates.filter(l => l.type !== 'plaza').sort(() => jobRng() - 0.5);
    for (const l of shuffled) {
      if (chosen.length >= 3) break;
      if (chosen.every(c => !c || Math.hypot(c.x - l.x, c.z - l.z) > 70)) chosen.push(l);
    }
    while (chosen.length < 3) chosen.push(shuffled[chosen.length] || candidates[0]);
    const names = ['THE HANDOFF', 'SIDEWALK CONTRACT', 'NIGHT SHIFT'];
    chosen.forEach((lot, idx) => {
      if (!lot) return;
      this.jobPoints.push({
        x: lot.x + (idx === 0 ? 6.5 : 0),
        z: lot.z + (idx === 0 ? -6.5 : 0),
        y: this.groundY + 0.15,
        district: lot.district,
        name: names[idx] || 'STREET JOB',
      });
    });
  }

  generateBuildings(lot, rng) {
    const maxCore = lot.core;
    const split = maxCore < 0.78 && rng() < 0.34;
    const inner = lot.w - 5.2; // usable footprint (sidewalk kept clear)
    if (split) {
      const alongX = rng() < 0.5;
      const gap = 1.2;
      const w = (inner - gap) / 2;
      const d = inner;
      const h1 = 7 + rng() * (8 + maxCore * 20);
      const h2 = 7 + rng() * (8 + maxCore * 20);
      for (let k = 0; k < 2; k++) {
        const off = (w + gap) / 2 * (k === 0 ? -1 : 1);
        const bx = lot.x + (alongX ? off : 0);
        const bz = lot.z + (alongX ? 0 : off);
        const bw = alongX ? w : d;
        const bd = alongX ? d : w;
        this.addBuilding(bx, bz, bw, bd, Math.max(6, h1), rng, lot);
      }
    } else {
      const tall = maxCore > 0.35 ? rng() < 0.36 + maxCore * 0.55 : rng() < 0.12;
      let w = tall ? Math.min(inner, 12 + rng() * 3.5) : Math.min(inner, 13 + rng() * 2.5);
      let d = tall ? Math.min(inner, 12 + rng() * 3.5) : Math.min(inner, 13 + rng() * 2.5);
      let h;
      if (tall) h = 22 + Math.pow(maxCore, 1.35) * 58 * (0.55 + rng() * 0.75);
      else h = 6 + maxCore * 17 * (0.55 + rng() * 0.9);
      h = Math.max(5.5, h);
      this.addBuilding(lot.x, lot.z, w, d, h, rng, lot);
    }
  }

  addBuilding(x, z, w, d, h, rng, lot) {
    const style = rng.int(0, STYLES.length - 1);
    const roofColor = ROOF_COLORS[rng.int(0, ROOF_COLORS.length - 1)];
    const tall = h > 26;
    const segments = [];
    let y = this.groundY;
    let remaining = h;
    let sw = w, sd = d;
    let tier = 0;
    do {
      const tierH = tier === 0
        ? (tall ? h * (0.5 + rng() * 0.18) : h)
        : remaining;
      const segH = Math.min(remaining, Math.max(2.4, tierH));
      segments.push({ x, z, w: sw, d: sd, y, h: segH, style, uvSeed: rng.int(0, 9999) });
      y += segH;
      remaining -= segH;
      if (remaining < 2.2) break;
      const shrink = 0.68 + rng() * 0.16;
      sw = Math.max(6, sw * shrink);
      sd = Math.max(6, sd * shrink);
      x += (rng() - 0.5) * 1.2;
      z += (rng() - 0.5) * 1.2;
      tier++;
    } while (tier < 3);

    const building = {
      x, z, w, d, baseW: w, baseD: d, h: y - this.groundY, style, roofColor,
      district: lot.district, segments,
    };
    this.buildings.push(building);
    this.segments.push(...segments);
    this.colliders.push({
      x0: x - w / 2, x1: x + w / 2,
      z0: z - d / 2, z1: z + d / 2,
      y0: this.groundY, y1: y + 1.2,
    });
  }

  generateParking(lot, rng) {
    const stalls = 3 + rng.int(0, 2);
    const alongX = rng() < 0.5;
    for (let i = 0; i < stalls; i++) {
      const off = (i - (stalls - 1) / 2) * 4.2;
      this.parkedSpots.push({
        x: lot.x + (alongX ? off : 0),
        z: lot.z + (alongX ? 0 : off),
        yaw: alongX ? 0 : Math.PI / 2,
        y: this.groundY,
        color: CAR_COLORS[rng.int(0, CAR_COLORS.length - 1)],
        district: lot.district,
      });
    }
    lot.stalls = stalls;
    lot.stallAxis = alongX ? 'x' : 'z';
  }

  generateParkSpots(lot, rng) {
    lot.treeCount = lot.type === 'plaza' ? 3 : rng.int(4, 8);
    lot.trees = [];
    for (let i = 0; i < lot.treeCount; i++) {
      const a = rng() * Math.PI * 2;
      const r = rng() * (lot.w / 2 - 2.5);
      lot.trees.push({
        x: lot.x + Math.cos(a) * r,
        z: lot.z + Math.sin(a) * r,
        rng: rng.int(0, 9999),
        pine: rng() < 0.22,
      });
    }
  }

  /** Build every static city mesh. */
  build(noiseTex) {
    const group = new THREE.Group();
    group.name = 'city';

    const ground = new GeoBuilder(true);
    const props = new GeoBuilder(true);
    const lamps = new GeoBuilder(false);
    const facadeBuilders = STYLES.map(() => new GeoBuilder(true));
    const facadeMats = STYLES.map((style, i) => {
      const maps = makeFacadeMaps(style, i);
      const mat = new THREE.MeshLambertMaterial({
        map: maps.map,
        emissiveMap: maps.emissiveMap,
        emissive: 0xffffff,
        emissiveIntensity: 0,
        vertexColors: false,
      });
      mat.userData.tileWorld = maps.tileWorld;
      return mat;
    });

    const groundMat = new THREE.MeshLambertMaterial({ map: noiseTex, vertexColors: true });
    const propsMat = new THREE.MeshLambertMaterial({ map: noiseTex, vertexColors: true });
    this.groundMat = groundMat;
    this.propsMat = propsMat;

    this.buildGround(ground);
    this.buildBuildings(facadeBuilders, props);
    this.buildStreetProps(props, lamps);
    this.buildLotContents(props, ground);

    const groundMesh = new THREE.Mesh(ground.build(), groundMat);
    groundMesh.receiveShadow = true;
    groundMesh.name = 'city-ground';
    group.add(groundMesh);

    const propsMesh = new THREE.Mesh(props.build(), propsMat);
    propsMesh.receiveShadow = true;
    propsMesh.castShadow = false;
    propsMesh.name = 'city-props';
    group.add(propsMesh);

    facadeBuilders.forEach((b, i) => {
      if (b.empty) return;
      const mesh = new THREE.Mesh(b.build(), facadeMats[i]);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.name = 'buildings-' + i;
      group.add(mesh);
    });

    const lampMat = new THREE.MeshBasicMaterial({ color: 0x5a6068 });
    if (!lamps.empty) {
      const lampMesh = new THREE.Mesh(lamps.build(), lampMat);
      lampMesh.name = 'street-lamps';
      group.add(lampMesh);
    }
    this.lampMat = lampMat;
    this.facadeMats = facadeMats;
    this.group = group;
    return { group, facadeMats, lampMat };
  }

  buildGround(g) {
    const y0 = this.groundY + 0.02;
    const asphalt = col(0x33363a);
    const asphalt2 = col(0x2e3135);
    const sidewalk = col(0xa9a49a);
    const sidewalkDark = col(0x8f8b82);

    // base asphalt pad
    g.flat(this.cx, this.cz, 292, 292, y0, asphalt, 8);

    // roads (two overlapping orientations)
    const rw = this.roadWidth;
    for (const x of this.xLines) {
      g.flat(x, this.cz, rw, 280, this.groundY + 0.05, asphalt2, 6);
    }
    for (const z of this.zLines) {
      g.flat(this.cx, z, 280, rw, this.groundY + 0.055, asphalt2, 6);
    }

    // dotted centre lines
    const yellow = col(0xd8ad39);
    for (const x of this.xLines) {
      for (let z = this.cz - 132; z <= this.cz + 132; z += 5.4) {
        if (this.nearIntersection(z, this.zLines, 5.5)) continue;
        g.flat(x, z, 0.32, 2.4, this.groundY + 0.075, yellow, 1);
      }
    }
    for (const z of this.zLines) {
      for (let x = this.cx - 132; x <= this.cx + 132; x += 5.4) {
        if (this.nearIntersection(x, this.xLines, 5.5)) continue;
        g.flat(x, z, 2.4, 0.32, this.groundY + 0.075, yellow, 1);
      }
    }

    // crosswalks downtown
    const white = col(0xd8d8d0);
    for (let ix = 2; ix <= 7; ix++) {
      for (let iz = 2; iz <= 7; iz++) {
        const x = this.xLines[ix], z = this.zLines[iz];
        for (const s of [-1, 1]) {
          for (let k = -2; k <= 2; k++) {
            g.flat(x + k * 1.7, z + s * (rw / 2 + 1.7), 1.05, 2.2, this.groundY + 0.08, white, 1);
            g.flat(x + s * (rw / 2 + 1.7), z + k * 1.7, 2.2, 1.05, this.groundY + 0.08, white, 1);
          }
        }
      }
    }

    // sidewalks + lot surfaces
    for (const lot of this.lots) {
      g.flat(lot.x, lot.z, lot.w, lot.d, this.groundY + 0.09, sidewalk, 3);
      // curb effect: darker inner border
      const bw = lot.w - 0.9, bd = lot.d - 0.9;
      g.flat(lot.x, lot.z - bd / 2, bw, 0.32, this.groundY + 0.1, sidewalkDark, 2);
      g.flat(lot.x, lot.z + bd / 2, bw, 0.32, this.groundY + 0.1, sidewalkDark, 2);
      g.flat(lot.x - bw / 2, lot.z, 0.32, bd, this.groundY + 0.1, sidewalkDark, 2);
      g.flat(lot.x + bw / 2, lot.z, 0.32, bd, this.groundY + 0.1, sidewalkDark, 2);

      if (lot.type === 'park' || lot.type === 'plaza') {
        g.flat(lot.x, lot.z, lot.w - 4.2, lot.d - 4.2, this.groundY + 0.115, col(0x54893b, 0.02), 3);
        // paths
        g.flat(lot.x, lot.z, lot.w - 4.2, 1.9, this.groundY + 0.125, col(0x9b917d), 2);
        g.flat(lot.x, lot.z, 1.9, lot.d - 4.2, this.groundY + 0.126, col(0x9b917d), 2);
      } else if (lot.type === 'parking') {
        g.flat(lot.x, lot.z, lot.w - 4.2, lot.d - 4.2, this.groundY + 0.115, col(0x303338), 4);
        const stalls = lot.stalls || 4;
        for (let i = 0; i < stalls; i++) {
          const off = (i - (stalls - 1) / 2) * 4.2;
          if (lot.stallAxis === 'x') {
            g.flat(lot.x + off - 2.1, lot.z, 0.12, 12, this.groundY + 0.13, col(0xcfcfc4), 1);
          } else {
            g.flat(lot.x, lot.z + off - 2.1, 12, 0.12, this.groundY + 0.13, col(0xcfcfc4), 1);
          }
        }
      } else if (lot.type === 'construction') {
        g.flat(lot.x, lot.z, lot.w - 4.2, lot.d - 4.2, this.groundY + 0.115, col(0x7b6846), 3);
      } else {
        g.flat(lot.x, lot.z, lot.w - 4.2, lot.d - 4.2, this.groundY + 0.112, col(0x8e8a80, 0.01), 4);
      }
    }
  }

  nearIntersection(v, lines, dist) {
    for (const l of lines) if (Math.abs(v - l) < dist) return true;
    return false;
  }

  buildBuildings(builders, props) {
    for (const b of this.buildings) {
      const rng = stream(this.seed, `facade:${b.x.toFixed(1)}:${b.z.toFixed(1)}`);
      for (const seg of b.segments) {
        this.addFacade(builders[seg.style], seg, rng);
      }
      const topSeg = b.segments[b.segments.length - 1];
      const roofY = topSeg.y + topSeg.h;
      const roofCol = col(b.roofColor);
      props.flat(topSeg.x, topSeg.z, topSeg.w, topSeg.d, roofY + 0.02, roofCol, 3);
      // parapet
      const ph = 0.55, t = 0.35;
      const pc = col(0x5b5e5e);
      props.box(topSeg.x, roofY, topSeg.z - topSeg.d / 2 + t / 2, topSeg.w, ph, t, pc, 2);
      props.box(topSeg.x, roofY, topSeg.z + topSeg.d / 2 - t / 2, topSeg.w, ph, t, pc, 2);
      props.box(topSeg.x - topSeg.w / 2 + t / 2, roofY, topSeg.z, t, ph, topSeg.d, pc, 2);
      props.box(topSeg.x + topSeg.w / 2 - t / 2, roofY, topSeg.z, t, ph, topSeg.d, pc, 2);

      // rooftop clutter
      if (rng() < 0.62) {
        const n = rng.int(1, 3);
        for (let i = 0; i < n; i++) {
          const ax = topSeg.x + (rng() - 0.5) * (topSeg.w - 4);
          const az = topSeg.z + (rng() - 0.5) * (topSeg.d - 4);
          if (rng() < 0.5) {
            props.box(ax, roofY, az, 1.8, 0.9, 1.4, col(0x7d8285), 2);
            props.box(ax, roofY + 0.9, az, 1.4, 0.18, 1.0, col(0x555b5f), 2);
          } else {
            props.cylinder(ax, roofY, az, 1.15, 2.0, 8, col(0x6d6255), 2);
            props.box(ax, roofY + 2.0, az, 0.5, 0.6, 0.5, col(0x4c443b), 1);
          }
        }
      }
      if (b.h > 32 && rng() < 0.6) {
        const ah = rng.range(3, 8);
        props.box(topSeg.x, roofY, topSeg.z, 0.18, ah, 0.18, col(0x33383c), 1);
        props.box(topSeg.x, roofY + ah, topSeg.z, 0.55, 0.28, 0.55, col(0xc23b3b), 1);
      }
      // storefront awnings on shorter buildings
      if (b.h < 24 && b.segments.length === 1 && rng() < 0.6) {
        const ac = col(AWNING_COLORS[rng.int(0, AWNING_COLORS.length - 1)]);
        const side = rng.int(0, 3);
        const ay = this.groundY + 3.2;
        const seg = b.segments[0];
        if (side === 0) props.box(seg.x, ay, seg.z - seg.d / 2 - 0.55, Math.min(seg.w - 2, 7), 0.32, 1.1, ac, 2);
        else if (side === 1) props.box(seg.x, ay, seg.z + seg.d / 2 + 0.55, Math.min(seg.w - 2, 7), 0.32, 1.1, ac, 2);
        else if (side === 2) props.box(seg.x - seg.w / 2 - 0.55, ay, seg.z, 1.1, 0.32, Math.min(seg.d - 2, 7), ac, 2);
        else props.box(seg.x + seg.w / 2 + 0.55, ay, seg.z, 1.1, 0.32, Math.min(seg.d - 2, 7), ac, 2);
      }
    }
  }

  addFacade(builder, seg, rng) {
    const tile = 7.2;
    const x0 = seg.x - seg.w / 2, x1 = seg.x + seg.w / 2;
    const z0 = seg.z - seg.d / 2, z1 = seg.z + seg.d / 2;
    const y0 = seg.y, y1 = seg.y + seg.h;
    const uo = rng.int(0, 3) + rng.int(0, 2) * 0.25;
    const vo = rng.int(0, 3);
    const uw = seg.w / tile, ud = seg.d / tile, vh = seg.h / tile;

    // +z
    builder.addQuad(
      [x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], [1, 1, 1],
      [[uo, vo], [uo + uw, vo], [uo + uw, vo + vh], [uo, vo + vh]], [0, 0, 1]
    );
    // -z
    builder.addQuad(
      [x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], [1, 1, 1],
      [[uo + 1.3, vo + 0.7], [uo + 1.3 + uw, vo + 0.7], [uo + 1.3 + uw, vo + 0.7 + vh], [uo + 1.3, vo + 0.7 + vh]], [0, 0, -1]
    );
    // +x
    builder.addQuad(
      [x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [1, 1, 1],
      [[uo + 0.4, vo + 1.1], [uo + 0.4 + ud, vo + 1.1], [uo + 0.4 + ud, vo + 1.1 + vh], [uo + 0.4, vo + 1.1 + vh]], [1, 0, 0]
    );
    // -x
    builder.addQuad(
      [x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0], [1, 1, 1],
      [[uo + 2.1, vo + 0.3], [uo + 2.1 + ud, vo + 0.3], [uo + 2.1 + ud, vo + 0.3 + vh], [uo + 2.1, vo + 0.3 + vh]], [-1, 0, 0]
    );
  }

  buildStreetProps(props, lamps) {
    const rng = stream(this.seed, 'street-props');
    const poleCol = col(0x2d3136);
    const poles = [];
    // street lights at every other intersection corner
    for (let ix = 0; ix < this.xLines.length; ix++) {
      for (let iz = 0; iz < this.zLines.length; iz++) {
        if (rng() < 0.28) continue;
        const x = this.xLines[ix] + 5.75;
        const z = this.zLines[iz] + 5.75;
        if (this.insideBuilding(x, z, 0.5)) continue;
        const gy = this.groundY;
        props.box(x, gy, z, 0.24, 5.4, 0.24, poleCol, 2);
        props.box(x - 1.15, gy + 5.15, z, 2.3, 0.15, 0.15, poleCol, 2);
        lamps.box(x - 2.15, gy + 4.95, z, 0.8, 0.28, 0.36, [1, 0.87, 0.55], 1);
        poles.push({ x, z });
      }
    }

    // traffic lights on the core grid (static, coloured bulbs)
    const red = col(0xd64b3f), green = col(0x54c96b), yellow = col(0xd8b33c);
    for (let ix = 2; ix <= 7; ix += 2) {
      for (let iz = 2; iz <= 7; iz += 2) {
        const x = this.xLines[ix] + 5.7, z = this.zLines[iz] - 5.7;
        if (this.insideBuilding(x, z, 0.4)) continue;
        const gy = this.groundY;
        props.box(x, gy, z, 0.18, 4.2, 0.18, poleCol, 2);
        props.box(x, gy + 4.2, z + 1.2, 0.34, 0.2, 2.4, poleCol, 2);
        props.box(x, gy + 3.85, z + 2.4, 0.4, 1.0, 0.4, col(0x22262a), 1);
        const lit = (ix + iz) % 3;
        props.box(x + 0.21, gy + 4.55, z + 2.4, 0.1, 0.22, 0.22, lit === 0 ? red : col(0x3a2323), 1);
        props.box(x + 0.21, gy + 4.3, z + 2.4, 0.1, 0.22, 0.22, lit === 1 ? yellow : col(0x3a3523), 1);
        props.box(x + 0.21, gy + 4.05, z + 2.4, 0.1, 0.22, 0.22, lit === 2 ? green : col(0x233a27), 1);
      }
    }

    // street trees / palms + bins on the sidewalk
    for (const lot of this.lots) {
      if (lot.type === 'park' || lot.type === 'plaza') {
        for (const t of lot.trees) {
          const tr = stream(this.seed, `tree:${lot.i}:${lot.j}:${t.rng}`);
          if (t.pine) this.addPine(props, t.x, t.z, this.groundY + 0.12, tr);
          else this.addPalm(props, t.x, t.z, this.groundY + 0.12, tr);
        }
      }
    }

    // benches / bins in open lots
    for (const lot of this.lots) {
      if (lot.type !== 'park' && lot.type !== 'plaza') continue;
      const br = stream(this.seed, `bench:${lot.i}:${lot.j}`);
      for (let i = 0; i < 3; i++) {
        const a = br() * Math.PI * 2;
        const r = br.range(2, lot.w / 2 - 2);
        const bx = lot.x + Math.cos(a) * r;
        const bz = lot.z + Math.sin(a) * r;
        const wood = col(0x6b4c2e);
        props.box(bx, this.groundY + 0.12, bz, 1.8, 0.35, 0.55, wood, 1);
        props.box(bx, this.groundY + 0.45, bz - 0.2, 1.8, 0.55, 0.16, wood, 1);
      }
    }

    // plaza fountain
    const plaza = this.lots.find(l => l.type === 'plaza');
    if (plaza) {
      props.cylinder(plaza.x, this.groundY + 0.12, plaza.z, 3.9, 0.8, 8, col(0x8c887e), 2);
      props.cylinder(plaza.x, this.groundY + 0.92, plaza.z, 1.1, 1.5, 8, col(0x9b968a), 2);
      props.box(plaza.x, this.groundY + 2.42, plaza.z, 1.1, 1.6, 0.7, col(0x7f7a6f), 1);
      props.box(plaza.x, this.groundY + 4.02, plaza.z, 0.9, 0.3, 0.55, col(0x6e695f), 1);
    }

    // construction sites
    for (const lot of this.lots) {
      if (lot.type !== 'construction') continue;
      const cr = stream(this.seed, `construction:${lot.i}:${lot.j}`);
      const dirt = col(0x7d6944);
      // barriers
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        props.box(lot.x + Math.cos(a) * (lot.w / 2 - 0.8), this.groundY + 0.12, lot.z + Math.sin(a) * (lot.d / 2 - 0.8), 2.0, 0.8, 0.24, col(0xd9772b), 1);
      }
      // unfinished concrete frame
      const bw = 9, bd = 9, floors = 3;
      for (let f = 0; f < floors; f++) {
        const fy = this.groundY + 0.12 + f * 3.0;
        props.box(lot.x, fy + 2.7, lot.z, bw, 0.3, bd, col(0x8f8b80), 2);
        for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
          props.box(lot.x + sx * bw / 2, fy, lot.z + sz * bd / 2, 0.45, 2.7, 0.45, col(0x8a867b), 2);
        }
      }
      // crane
      const cx = lot.x + lot.w / 2 - 2.5, cz = lot.z - lot.d / 2 + 2.5;
      props.box(cx, this.groundY + 0.12, cz, 1.0, 24, 1.0, col(0xd9a520), 2);
      props.box(cx + 4.5, this.groundY + 23.2, cz, 13, 0.55, 0.55, col(0xd9a520), 2);
      props.box(cx - 3.2, this.groundY + 22.6, cz, 3.4, 1.6, 0.9, col(0x6e6a62), 2);
      props.box(cx + 8.6, this.groundY + 16.5, cz, 0.12, 6.7, 0.12, col(0x3c3c3c), 1);
      props.box(cx + 8.6, this.groundY + 16.2, cz, 1.2, 0.8, 0.9, col(0xb8b0a0), 1);
    }

    // hydrants / bins scattered along sidewalks
    for (let i = 0; i < 46; i++) {
      const p = rng.pick(this.walkPoints);
      if (!p || this.insideBuilding(p.x, p.z, 0.5)) continue;
      if (rng() < 0.5) {
        props.box(p.x, this.groundY + 0.12, p.z, 0.36, 0.55, 0.36, col(0xb53a30), 1);
        props.box(p.x, this.groundY + 0.67, p.z, 0.2, 0.18, 0.2, col(0x8f2f28), 1);
      } else {
        props.box(p.x, this.groundY + 0.12, p.z, 0.6, 0.9, 0.6, col(0x3f5c46), 1);
      }
    }
  }

  buildLotContents(props, ground) {
    // extra lot details merged into props/ground
    for (const lot of this.lots) {
      if (lot.type === 'plaza') {
        // benches around fountain already added
      }
      if (lot.type === 'parking') {
        // bollards at entrance
        const bollard = col(0x494d52);
        props.box(lot.x - lot.w / 2 + 3, this.groundY + 0.12, lot.z, 0.25, 0.8, 0.25, bollard, 1);
        props.box(lot.x + lot.w / 2 - 3, this.groundY + 0.12, lot.z, 0.25, 0.8, 0.25, bollard, 1);
      }
    }
    // grass tufts / small rocks in parks
    const rng = stream(this.seed, 'lot-tufts');
    for (const lot of this.lots) {
      if (lot.type !== 'park' && lot.type !== 'plaza') continue;
      for (let i = 0; i < 6; i++) {
        const x = lot.x + (rng() - 0.5) * (lot.w - 5);
        const z = lot.z + (rng() - 0.5) * (lot.d - 5);
        if (rng() < 0.5) {
          props.box(x, this.groundY + 0.12, z, 0.45, 0.3, 0.45, col(0x6ea344), 1);
        } else {
          props.box(x, this.groundY + 0.12, z, 0.5, 0.35, 0.4, col(0x6d6a60), 1);
        }
      }
    }
    // small tree line on the city edge for a green belt
    for (let i = 0; i < 24; i++) {
      const a = rng() * Math.PI * 2;
      const r = 146 + rng() * 7;
      this.addPalm(props, this.cx + Math.cos(a) * r, this.cz + Math.sin(a) * r, this.groundY + 0.02, rng);
    }
    void ground;
  }

  addPalm(b, x, z, y, rng) {
    const h = 4.5 + rng() * 3;
    const trunk = col(0x7a5a37);
    const leaf = col(0x4f8a37);
    b.cylinder(x, y, z, 0.26, h, 6, trunk, 2);
    const ly = y + h;
    b.box(x, ly, z, 4.6, 0.22, 0.7, leaf, 2);
    b.box(x, ly, z, 0.7, 0.22, 4.6, leaf, 2);
    b.box(x, ly + 0.18, z, 3.1, 0.2, 1.4, col(0x5a9c3f), 2);
    b.box(x, ly + 0.18, z, 1.4, 0.2, 3.1, col(0x5a9c3f), 2);
    b.box(x, ly + 0.35, z, 1.1, 0.7, 1.1, col(0x3f722e), 1);
  }

  addPine(b, x, z, y, rng) {
    const h = 5 + rng() * 5;
    b.box(x, y, z, 0.6, h, 0.6, col(0x5b422c), 2);
    for (let i = 0; i < 3; i++) {
      const w = 4.2 - i * 1.0;
      b.box(x, y + h - 1.2 + i * 1.5, z, w, 1.1, w, col(0x2f6b36, i * 0.015), 2);
    }
    b.box(x, y + h + 3.1, z, 1.0, 1.0, 1.0, col(0x3b7c40), 1);
  }

  addTree(b, x, z, y, rng) {
    const h = 3 + rng() * 2.5;
    b.box(x, y, z, 0.65, h, 0.65, col(0x6a4c2f), 2);
    b.box(x, y + h - 0.4, z, 3.2, 1.9, 3.2, col(0x3f7d36, 0.01), 2);
    b.box(x, y + h + 1.0, z, 2.0, 1.2, 2.0, col(0x4a8c3d), 2);
  }

  insideBuilding(x, z, pad = 0) {
    for (const c of this.colliders) {
      if (x > c.x0 - pad && x < c.x1 + pad && z > c.z0 - pad && z < c.z1 + pad) return true;
    }
    return false;
  }

  /** sidewalk point nearest to a position, used by peds + cops. */
  nearestWalkPoint(x, z) {
    let best = null, bd = Infinity;
    for (const p of this.walkPoints) {
      const d = (p.x - x) * (p.x - x) + (p.z - z) * (p.z - z);
      if (d < bd) { bd = d; best = p; }
    }
    return best;
  }

  randomRoadSpawn(rng) {
    const axis = rng() < 0.5 ? 'x' : 'z';
    const sign = rng() < 0.5 ? 1 : -1;
    if (axis === 'x') {
      const z = this.zLines[rng.int(1, this.zLines.length - 2)];
      return { x: this.cx + rng.range(-110, 110), z, yaw: sign > 0 ? 0 : Math.PI, axis, sign, district: 'DOWNTOWN' };
    }
    const x = this.xLines[rng.int(1, this.xLines.length - 2)];
    return { x, z: this.cz + rng.range(-110, 110), yaw: sign > 0 ? Math.PI / 2 : -Math.PI / 2, axis, sign, district: 'DOWNTOWN' };
  }

  districtAt(x, z) {
    const dx = x - this.cx, dz = z - this.cz;
    return districtName(dx, dz, Math.hypot(dx, dz));
  }
}
