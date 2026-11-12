import * as THREE from 'three';
import { GeoBuilder, col } from './world/geo.js';
import { stream, clamp } from './rng.js';

const TYPES = {
  sedan: { len: 4.2, width: 1.9, bodyH: 0.55, cabLen: 1.75, cabZ: -0.25, cabH: 0.52, roofH: 0.12 },
  coupe: { len: 3.85, width: 1.86, bodyH: 0.5, cabLen: 1.5, cabZ: -0.3, cabH: 0.45, roofH: 0.1 },
  van: { len: 4.75, width: 2.0, bodyH: 0.72, cabLen: 2.7, cabZ: -0.25, cabH: 0.95, roofH: 0.12 },
};

const geomCache = new Map();

function buildCar(type, police = false) {
  const p = TYPES[type] || TYPES.sedan;
  const body = new GeoBuilder(false);
  const detail = new GeoBuilder(false);
  const hw = p.width / 2;
  const hl = p.len / 2;
  const bodyY = 0.36;
  const white = col(0xffffff);
  const off = col(0xdedede);
  const glass = col(0x1b2a35);
  const glassLight = col(0x35505f);
  const black = col(0x171a1e);
  const trim = col(0x2b2f34);
  const chrome = col(0xaeb6ba);
  const head = col(0xffe9a6);
  const tail = col(0xd83a2f);

  // lower body
  body.box(0, bodyY, 0, p.width, p.bodyH, p.len, white, 2);
  // hood / trunk caps
  body.box(0, bodyY + p.bodyH, hl - 0.7, p.width * 0.94, 0.12, 1.25, off, 2);
  body.box(0, bodyY + p.bodyH, -hl + 0.65, p.width * 0.94, 0.12, 1.0, off, 2);
  // cabin frame (white pillars) + roof
  const cabY = bodyY + p.bodyH;
  body.box(0, cabY + p.cabH, p.cabZ, p.width * 0.86, p.roofH, p.cabLen * 0.92, white, 2);
  // roof rack on van
  if (type === 'van') {
    body.box(0, cabY + p.cabH + p.roofH, p.cabZ, p.width * 0.7, 0.08, p.cabLen * 0.6, trim, 2);
  }
  // details: glass band
  detail.box(0, cabY + 0.06, p.cabZ, p.width * 0.84, p.cabH - 0.07, p.cabLen, glass, 2);
  // windshield / rear slant hint
  detail.box(0, cabY + 0.07, p.cabZ + p.cabLen / 2 - 0.06, p.width * 0.72, p.cabH - 0.1, 0.06, glassLight, 2);
  // bumpers
  detail.box(0, bodyY + 0.08, hl + 0.06, p.width * 0.98, 0.24, 0.16, trim, 2);
  detail.box(0, bodyY + 0.08, -hl - 0.06, p.width * 0.98, 0.24, 0.16, trim, 2);
  // grille
  detail.box(0, bodyY + 0.28, hl + 0.08, p.width * 0.45, 0.18, 0.06, black, 1);
  // lights
  for (const sx of [-1, 1]) {
    detail.box(sx * p.width * 0.34, bodyY + 0.3, hl + 0.09, 0.34, 0.17, 0.05, head, 1);
    detail.box(sx * p.width * 0.34, bodyY + 0.3, -hl - 0.09, 0.34, 0.17, 0.05, tail, 1);
  }
  // side mirrors
  detail.box(hw + 0.08, cabY + 0.2, p.cabZ + p.cabLen / 2 - 0.1, 0.18, 0.16, 0.24, trim, 1);
  detail.box(-hw - 0.08, cabY + 0.2, p.cabZ + p.cabLen / 2 - 0.1, 0.18, 0.16, 0.24, trim, 1);
  // wheels
  const wheelY = 0.33;
  const wx = hw - 0.03;
  for (const sx of [-1, 1]) {
    for (const sz of [1.3, -1.3]) {
      detail.box(sx * wx, wheelY, sz, 0.3, 0.66, 0.78, black, 1);
      detail.box(sx * (wx + 0.02), wheelY, sz, 0.08, 0.34, 0.36, chrome, 1);
    }
  }
  // police livery
  if (police) {
    detail.box(hw + 0.01, bodyY + 0.4, 0, 0.02, 0.3, 1.5, black, 1);
    detail.box(-hw - 0.01, bodyY + 0.4, 0, 0.02, 0.3, 1.5, black, 1);
    detail.box(0, bodyY + p.bodyH + 0.03, p.cabZ, p.width * 0.5, 0.06, 0.8, black, 1);
  }
  return { body: body.build(), detail: detail.build(), bodyMat: null };
}

function getGeom(type, police) {
  const k = type + (police ? ':p' : '');
  if (!geomCache.has(k)) geomCache.set(k, buildCar(type, police));
  return geomCache.get(k);
}

const detailMaterial = new THREE.MeshLambertMaterial({ vertexColors: true });
const wreckMaterial = new THREE.MeshLambertMaterial({ color: 0x1c1d1e });

let carId = 0;

export class Vehicle {
  constructor(game, opts = {}) {
    this.game = game;
    this.id = carId++;
    this.type = opts.type || 'sedan';
    this.police = !!opts.police;
    this.color = opts.color ?? 0xa52f2f;
    const dims = TYPES[this.type] || TYPES.sedan;
    this.dims = { w: dims.width, l: dims.len };
    this.pos = new THREE.Vector3(opts.x || 0, 0, opts.z || 0);
    this.yaw = opts.yaw || 0;
    this.speed = 0;
    this.steer = 0;
    this.health = opts.health ?? 100;
    this.maxHealth = 100;
    this.driver = opts.driver ?? null; // 'player' | 'ai' | null
    this.destroyed = false;
    this.ai = null;
    this.pitch = 0;
    this.roll = 0;
    this.stuckTime = 0;
    this.smokeTimer = 0;
    this.explosionTimer = -1;
    this.aiType = opts.aiType || 'traffic';
    this.colorName = opts.colorName;

    const geom = getGeom(this.type, this.police);
    this.bodyMat = new THREE.MeshLambertMaterial({ vertexColors: true, color: this.color });
    this.group = new THREE.Group();
    this.bodyMesh = new THREE.Mesh(geom.body, this.bodyMat);
    this.bodyMesh.castShadow = true;
    this.bodyMesh.receiveShadow = true;
    this.group.add(this.bodyMesh);
    this.detailMesh = new THREE.Mesh(geom.detail, detailMaterial);
    this.detailMesh.castShadow = true;
    this.group.add(this.detailMesh);

    if (this.police) {
      this.lightRed = new THREE.MeshBasicMaterial({ color: 0x550b0b });
      this.lightBlue = new THREE.MeshBasicMaterial({ color: 0x0a1e55 });
      const lbBase = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.12, 0.3), new THREE.MeshLambertMaterial({ color: 0x15181c }));
      lbBase.position.set(0, 1.62, -0.2);
      this.group.add(lbBase);
      const red = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.16, 0.26), this.lightRed);
      red.position.set(-0.25, 1.73, -0.2);
      const blue = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.16, 0.26), this.lightBlue);
      blue.position.set(0.25, 1.73, -0.2);
      this.group.add(red, blue);
      this.lightbar = { red, blue, base: lbBase };
    }

    this.syncMesh(0);
    game.scene.add(this.group);

    if (this.driver === 'ai') {
      if (this.police) this.initPoliceAI();
      else this.initTrafficAI(game);
    }
    this.y = game.world.groundAt(this.pos.x, this.pos.z);
    this.syncMesh(0);
  }

  get forwardX() { return Math.sin(this.yaw); }
  get forwardZ() { return Math.cos(this.yaw); }

  syncMesh() {
    const w = this.game.world;
    const gy = w.groundAt(this.pos.x, this.pos.z);
    this.pos.y += (gy - this.pos.y) * 0.35;
    if (Math.abs(this.pos.y - gy) > 2) this.pos.y = gy;
    const fx = this.pos.x + Math.sin(this.yaw) * 1.4;
    const fz = this.pos.z + Math.cos(this.yaw) * 1.4;
    const bx = this.pos.x - Math.sin(this.yaw) * 1.4;
    const bz = this.pos.z - Math.cos(this.yaw) * 1.4;
    const hf = w.groundAt(fx, fz);
    const hb = w.groundAt(bx, bz);
    this.pitch = -Math.atan2(hf - hb, 2.8);
    const rx = this.pos.x + Math.cos(this.yaw) * 0.9;
    const rz = this.pos.z - Math.sin(this.yaw) * 0.9;
    const lx = this.pos.x - Math.cos(this.yaw) * 0.9;
    const lz = this.pos.z + Math.sin(this.yaw) * 0.9;
    const hr = w.groundAt(rx, rz);
    const hl2 = w.groundAt(lx, lz);
    const targetRoll = Math.atan2(hr - hl2, 1.8);
    this.roll += (targetRoll - this.roll) * 0.2;
    this.group.position.set(this.pos.x, this.pos.y + 0.02, this.pos.z);
    this.group.rotation.set(this.pitch, this.yaw, this.roll, 'YXZ');
  }

  initTrafficAI(game) {
    const city = game.world.city;
    const rng = game.trafficRng;
    const ix = nearestIndex(city.xLines, this.pos.x);
    const iz = nearestIndex(city.zLines, this.pos.z);
    let dirX = 0, dirZ = 0;
    const a = Math.abs(Math.sin(this.yaw));
    if (a > 0.7) dirX = Math.sin(this.yaw) > 0 ? 1 : -1;
    else dirZ = Math.cos(this.yaw) > 0 ? 1 : -1;
    this.ai = {
      type: 'traffic', ix, iz, dirX, dirZ,
      target: null, cruise: 8.5 + (rng ? rng() : Math.random()) * 4.5,
      lane: 2.1, reverseTimer: 0, blocked: 0,
    };
    this.pickTrafficTarget(game);
  }

  pickTrafficTarget(game) {
    const city = game.world.city;
    const ai = this.ai;
    let nx = ai.ix, nz = ai.iz;
    if (ai.dirX !== 0) nx = clamp(nx + ai.dirX, 0, city.xLines.length - 1);
    if (ai.dirZ !== 0) nz = clamp(nz + ai.dirZ, 0, city.zLines.length - 1);
    ai.targetIx = nx;
    ai.targetIz = nz;
    const fx = ai.dirX, fz = ai.dirZ;
    const rx = -fz, rz = fx; // right-hand lane
    ai.target = {
      x: city.xLines[nx] + rx * ai.lane,
      z: city.zLines[nz] + rz * ai.lane,
    };
  }

  advanceTrafficTarget(game) {
    const city = game.world.city;
    const ai = this.ai;
    ai.ix = ai.targetIx;
    ai.iz = ai.targetIz;
    const options = [];
    if (ai.dirX !== 0) {
      if (ai.ix + ai.dirX >= 0 && ai.ix + ai.dirX < city.xLines.length) options.push({ x: ai.dirX, z: 0, w: 0.55 });
      if (ai.iz + 1 < city.zLines.length) options.push({ x: 0, z: 1, w: 0.225 });
      if (ai.iz - 1 >= 0) options.push({ x: 0, z: -1, w: 0.225 });
    } else {
      if (ai.iz + ai.dirZ >= 0 && ai.iz + ai.dirZ < city.zLines.length) options.push({ x: 0, z: ai.dirZ, w: 0.55 });
      if (ai.ix + 1 < city.xLines.length) options.push({ x: 1, z: 0, w: 0.225 });
      if (ai.ix - 1 >= 0) options.push({ x: -1, z: 0, w: 0.225 });
    }
    if (!options.length) {
      ai.dirX *= -1; ai.dirZ *= -1;
    } else {
      let r = Math.random();
      let pick = options[0];
      for (const o of options) { if (r < o.w) { pick = o; break; } r -= o.w; }
      ai.dirX = pick.x; ai.dirZ = pick.z;
    }
    this.pickTrafficTarget(game);
  }

  initPoliceAI() {
    this.ai = { type: 'police', stuck: 0, reverse: 0 };
  }

  update(dt, game) {
    if (this.destroyed) return;
    const player = game.player;
    let throttle = 0, steerInput = 0, handbrake = false;

    if (this.driver === 'player') {
      const inp = game.input;
      throttle = inp.forward;
      steerInput = -inp.strafe * 0.9;
      handbrake = inp.jump;
      // aim the car camera heading if no throttle? no
    } else if (this.driver === 'ai') {
      if (this.ai?.type === 'traffic') {
        const ai = this.ai;
        if (!ai.target) this.pickTrafficTarget(game);
        const dx = ai.target.x - this.pos.x;
        const dz = ai.target.z - this.pos.z;
        const dist = Math.hypot(dx, dz);
        if (dist < 3.2) {
          if (ai.reverseTimer > 0) { ai.reverseTimer -= dt; }
          else this.advanceTrafficTarget(game);
        }
        const desired = Math.atan2(dx, dz);
        let diff = wrapAngle(desired - this.yaw);
        steerInput = clamp(diff * 2.2, -1, 1);
        throttle = 0.46;
        // slow for the player / other cars ahead
        let blocked = false;
        const fx = Math.sin(this.yaw), fz = Math.cos(this.yaw);
        const checkAhead = (x, z, rad) => {
          const ox = x - this.pos.x, oz = z - this.pos.z;
          if (ox * ox + oz * oz > 90) return false;
          const dot = (ox * fx + oz * fz) / Math.max(0.001, Math.hypot(ox, oz));
          return dot > 0.65;
        };
        if (player && player.mesh.visible && checkAhead(player.pos.x, player.pos.z)) blocked = true;
        for (const v of game.vehicles.list) {
          if (v === this || v.destroyed) continue;
          if (checkAhead(v.pos.x, v.pos.z)) { blocked = true; break; }
        }
        if (blocked) throttle = -0.35;
        if (Math.abs(this.speed) < 1.2) {
          ai.blocked += dt;
          if (ai.blocked > 2.5) { ai.reverseTimer = 1.2; ai.blocked = 0; ai.dirX *= -1; ai.dirZ *= -1; this.pickTrafficTarget(game); }
        } else ai.blocked = 0;
        if (ai.reverseTimer > 0) { throttle = -1; steerInput *= -0.5; }
      } else {
        // police pursuit
        const ai = this.ai;
        const target = player.pos;
        const dx = target.x - this.pos.x;
        const dz = target.z - this.pos.z;
        const dist = Math.hypot(dx, dz);
        const desired = Math.atan2(dx, dz);
        const diff = wrapAngle(desired - this.yaw);
        steerInput = clamp(diff * 2.4, -1, 1);
        if (dist > 7) throttle = 1;
        else throttle = 0.1;
        if (ai.reverse > 0) {
          ai.reverse -= dt;
          throttle = -1;
          steerInput *= -1;
        }
        if (Math.abs(this.speed) < 1.4) ai.stuck += dt; else ai.stuck = 0;
        if (ai.stuck > 1.6) { ai.reverse = 1.1; ai.stuck = 0; }
        if (dist < 22 && player.mode === 'vehicle' && Math.random() < dt * 0.6) {
          game.spawnCopFromCar(this);
        }
      }
    }

    this.drive(dt, throttle, steerInput, handbrake, game);
    this.syncMesh(dt);

    if (this.police) {
      const t = game.time;
      const on = this.driver === 'ai' && game.player.wanted > 0;
      const flash = on ? (Math.sin(t * 12 + this.id) > 0) : false;
      this.lightRed.color.setHex(flash ? 0xff2222 : 0x550b0b);
      this.lightBlue.color.setHex(!flash ? 0x2277ff : 0x0a1e55);
    }

    // damage smoke / fire
    if (this.health < 38) {
      this.smokeTimer -= dt;
      if (this.smokeTimer <= 0) {
        this.smokeTimer = this.health < 15 ? 0.12 : 0.28;
        game.particles.smoke(new THREE.Vector3(this.pos.x, this.pos.y + 1.0, this.pos.z), this.health < 15 ? 0x3b3b3b : 0x8b8b8b, this.health < 15 ? 2 : 1, this.health < 15 ? 1.2 : 0.9);
      }
    }
  }

  drive(dt, throttleInput, steerInput, handbrake, game) {
    const playerDriver = this.driver === 'player';
    const throttle = clamp(throttleInput, -1, 1);
    const accel = this.type === 'van' ? 16 : this.police ? 22 : 20;
    const maxFwd = this.type === 'van' ? 29 : this.police ? 35 : 33;

    if (throttle > 0.03) {
      this.speed += accel * throttle * dt;
    } else if (throttle < -0.03) {
      if (this.speed > 0.4) this.speed += 32 * throttle * dt;
      else this.speed += accel * 0.55 * throttle * dt;
    } else {
      this.speed -= this.speed * 0.7 * dt;
    }
    if (handbrake) {
      this.speed *= Math.max(0, 1 - 3.2 * dt);
      if (playerDriver && Math.abs(this.speed) > 12) {
        game.particles.smoke(new THREE.Vector3(this.pos.x, this.pos.y + 0.3, this.pos.z), 0xbfbfbf, 1, 1.2);
      }
    }
    // drag + rolling resistance
    this.speed *= Math.max(0, 1 - 0.22 * dt);
    this.speed = clamp(this.speed, -12, maxFwd);

    // bicycle-ish steering, reduced at speed
    const steerTarget = clamp(steerInput, -1, 1);
    this.steer += (steerTarget - this.steer) * Math.min(1, dt * 9);
    const maxSteer = 0.58 / (1 + Math.abs(this.speed) * 0.085);
    const wheelbase = 2.7;
    if (Math.abs(this.speed) > 0.15) {
      const yawRate = (this.speed / wheelbase) * Math.tan(this.steer * maxSteer);
      this.yaw += yawRate * dt * (this.speed < 0 ? -1 : 1);
    }

    const fx = Math.sin(this.yaw), fz = Math.cos(this.yaw);
    let nx = this.pos.x + fx * this.speed * dt;
    let nz = this.pos.z + fz * this.speed * dt;

    // oriented collision with buildings - three sample circles along hull
    let hit = false;
    const world = game.world;
    for (const off of [-1.35, 0, 1.35]) {
      const sx = nx + fx * off, sz = nz + fz * off;
      const fixed = world.resolveCircle(sx, sz, 0.92);
      if (Math.abs(fixed.x - sx) > 0.001 || Math.abs(fixed.z - sz) > 0.001) {
        nx += fixed.x - sx;
        nz += fixed.z - sz;
        hit = true;
      }
    }
    const gy = world.groundAt(nx, nz);
    if (gy < -0.55) {
      // deep water: stall
      this.speed *= 0.82;
      if (playerDriver) game.notify('TOO DEEP', 'Your car will not swim. Find a road.', 'bad', 1600, true);
    }
    if (hit) {
      const impact = Math.abs(this.speed);
      if (impact > 4) {
        game.particles.sparks(new THREE.Vector3(nx + fx * 1.5, this.pos.y + 0.8, nz + fz * 1.5));
        game.audio.crash(impact / 12);
        this.health -= impact * 0.5;
        if (playerDriver) game.player.takeDamage(impact * 0.28, game, true);
      }
      this.speed *= -0.22;
    }
    this.pos.x = nx;
    this.pos.z = nz;

    // keep the car from clipping into the city's low walls on handbrake
    if (Math.abs(this.speed) < 0.05) this.speed = 0;
    if (this.health <= 0) this.explode(game);
  }

  explode(game) {
    if (this.destroyed) return;
    this.destroyed = true;
    const p = new THREE.Vector3(this.pos.x, this.pos.y + 0.8, this.pos.z);
    game.particles.explosion(p);
    game.audio.explosion();
    if (this.driver === 'player') {
      game.player.takeDamage(75, game);
      game.exitVehicle(true);
    } else if (this.game.player.pos.distanceTo(p) < 9) {
      game.player.takeDamage(40, game);
    }
    game.missions?.onVehicleDestroyed(this);
    game.vehicles.remove(this);
    game.cameraShake = Math.max(game.cameraShake, 0.8);
    // charred wreck
    const wreck = new THREE.Mesh(getGeom(this.type, this.police).body, wreckMaterial);
    wreck.position.copy(this.group.position);
    wreck.rotation.copy(this.group.rotation);
    wreck.castShadow = true;
    game.scene.add(wreck);
    setTimeout(() => { game.scene.remove(wreck); }, 20000);
    void this.lightbar;
  }

  enter() {
    this.driver = 'player';
    this.ai = null;
    this.speed = 0;
    this.group.visible = true;
  }

  exit() {
    this.driver = null;
    this.ai = null;
  }

  damage(amount, game) {
    if (this.destroyed) return;
    this.health -= amount;
    if (this.health <= 0) this.explode(game);
  }
}

export class VehicleManager {
  constructor(game) {
    this.game = game;
    this.list = [];
    this.trafficRng = stream(game.seed, 'traffic');
    this.spawnTimer = 0;
    this.policeTimer = 0;
  }

  add(v) {
    this.list.push(v);
    return v;
  }

  remove(v) {
    const i = this.list.indexOf(v);
    if (i >= 0) this.list.splice(i, 1);
    this.game.scene.remove(v.group);
    v.bodyMat.dispose();
    if (v.lightRed) { v.lightRed.dispose(); v.lightBlue.dispose(); }
  }

  spawn(opts) {
    const v = new Vehicle(this.game, opts);
    this.add(v);
    return v;
  }

  populate() {
    const city = this.game.world.city;
    const rng = this.trafficRng;
    // parked cars in parking lots
    for (const spot of city.parkedSpots) {
      if (rng() < 0.35) continue;
      const type = rng() < 0.2 ? 'van' : rng() < 0.4 ? 'coupe' : 'sedan';
      this.spawn({
        x: spot.x, z: spot.z, yaw: spot.yaw + (rng() < 0.5 ? 0 : Math.PI),
        color: spot.color, type, driver: null,
      });
    }
    // street traffic
    for (let i = 0; i < 9; i++) {
      const s = city.randomRoadSpawn(rng);
      this.spawn({
        x: s.x, z: s.z, yaw: s.yaw,
        color: randomColor(rng), type: rng() < 0.18 ? 'van' : rng() < 0.32 ? 'coupe' : 'sedan',
        driver: 'ai', aiType: 'traffic',
      });
    }
    // a couple of hero parked cars near the plaza
    const spawn = city.spawn;
    for (let i = 0; i < 3; i++) {
      const x = spawn.x + 8 + i * 3.1;
      const z = spawn.z - 14 + i * 1.4;
      if (this.game.world.isBlocked(x, z, 1.2)) continue;
      this.spawn({
        x, z, yaw: Math.PI / 2, color: randomColor(rng),
        type: i === 0 ? 'coupe' : 'sedan', driver: null,
      });
    }
  }

  update(dt) {
    const game = this.game;
    for (const v of [...this.list]) v.update(dt, game);

    // keep ambient traffic populated
    const p = game.player.pos;
    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this.spawnTimer = 1.5;
      let traffic = 0;
      for (const v of this.list) {
        if (v.driver === 'ai' && !v.police && !v.destroyed) traffic++;
      }
      if (traffic < 10) {
        for (let tries = 0; tries < 8; tries++) {
          const s = game.world.city.randomRoadSpawn(this.trafficRng);
          const d = Math.hypot(s.x - p.x, s.z - p.z);
          if (d > 70 && d < 210) {
            this.spawn({
              x: s.x, z: s.z, yaw: s.yaw,
              color: randomColor(this.trafficRng),
              type: this.trafficRng() < 0.2 ? 'van' : this.trafficRng() < 0.35 ? 'coupe' : 'sedan',
              driver: 'ai', aiType: 'traffic',
            });
            break;
          }
        }
      }
      // despawn distant AI
      for (const v of [...this.list]) {
        if (v.driver === 'ai' && !v.police) {
          const d = Math.hypot(v.pos.x - p.x, v.pos.z - p.z);
          if (d > 320) this.remove(v);
        }
      }
    }
  }

  nearest(pos, maxDist = 4.5) {
    let best = null, bd = maxDist;
    for (const v of this.list) {
      if (v.destroyed) continue;
      const d = Math.hypot(v.pos.x - pos.x, v.pos.z - pos.z);
      if (d < bd) { bd = d; best = v; }
    }
    return best;
  }

  /** Bullet ray vs. the oriented body box of every live car. */
  raycast(origin, dir, maxDist = 120) {
    let best = null;
    for (const v of this.list) {
      if (v.destroyed) continue;
      const c = Math.cos(v.yaw), s = Math.sin(v.yaw);
      const dx = origin.x - v.pos.x;
      const dz = origin.z - v.pos.z;
      const ox = dx * c - dz * s;
      const oz = dx * s + dz * c;
      const oy = origin.y - (v.pos.y + 0.86);
      const lx = dir.x * c - dir.z * s;
      const lz = dir.x * s + dir.z * c;
      const hw = v.dims.w * 0.5 + 0.08;
      const hl = v.dims.l * 0.5 + 0.08;
      const t = rayAABB(ox, oy, oz, lx, dir.y, lz, -hw, hw, -0.9, 1.0, -hl, hl, maxDist);
      if (t !== null && (!best || t < best.dist)) {
        best = { vehicle: v, dist: t, point: origin.clone().addScaledVector(dir, t) };
      }
    }
    return best;
  }

  spawnPoliceCar(pos, rng = Math.random) {
    const world = this.game.world;
    for (let tries = 0; tries < 25; tries++) {
      const s = world.city.randomRoadSpawn(rng);
      const d = Math.hypot(s.x - pos.x, s.z - pos.z);
      if (d > 55 && d < 130) {
        return this.spawn({
          x: s.x, z: s.z, yaw: s.yaw, type: 'sedan', police: true,
          color: 0xe9ecef, driver: 'ai', aiType: 'police',
        });
      }
    }
    return null;
  }
}

function rayAABB(ox, oy, oz, dx, dy, dz, x0, x1, y0, y1, z0, z1, maxDist) {
  let tmin = 0, tmax = maxDist;
  const axes = [
    [ox, dx, x0, x1],
    [oy, dy, y0, y1],
    [oz, dz, z0, z1],
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

function nearestIndex(lines, v) {
  let best = 0, bd = Infinity;
  for (let i = 0; i < lines.length; i++) {
    const d = Math.abs(lines[i] - v);
    if (d < bd) { bd = d; best = i; }
  }
  return best;
}

export function wrapAngle(a) {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
}

export function randomColor(rng = Math.random) {
  const palette = [0xd8d8d2, 0x2c3038, 0x8f2c2c, 0x2e5c8a, 0x3e7a4a, 0xc9a33a, 0x6b6f78, 0x9f5a2c, 0xdce4e8, 0x4b3d6b, 0x7a2f4f, 0xbfc6cc];
  return palette[Math.floor(rng() * palette.length)];
}
