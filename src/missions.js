import * as THREE from 'three';
import { stream, clamp } from './rng.js';

const JOB_COLORS = [0xffc72c, 0x62e08a, 0x5ab8ff];
const TYPE_NAMES = ['HOT WHEELS', 'LOOSE ENDS', 'CIRCUIT RUN'];

function makeBeam(color, height = 9, radius = 0.75) {
  const g = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({
    color, transparent: true, opacity: 0.3, side: THREE.DoubleSide, depthWrite: false,
  });
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius * 1.15, height, 12, 1, true), mat);
  beam.position.y = height / 2;
  g.add(beam);
  const ringMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9, depthWrite: false });
  const ring = new THREE.Mesh(new THREE.TorusGeometry(radius * 1.5, 0.08, 6, 24), ringMat);
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.18;
  g.add(ring);
  const iconMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95 });
  const icon = new THREE.Mesh(new THREE.OctahedronGeometry(0.55, 0), iconMat);
  icon.position.y = height + 0.7;
  g.add(icon);
  g.userData = { beam, ring, icon, mat, ringMat, iconMat, phase: Math.random() * 6 };
  g.renderOrder = 3;
  return g;
}

export class MissionSystem {
  constructor(game) {
    this.game = game;
    this.scene = game.scene;
    this.rng = stream(game.seed, 'missions');
    this.active = null;
    this.jobMarkers = [];
    this.activeMarkers = [];
    this.completed = 0;
    this.jobs = game.world.city.jobPoints.map((pt, i) => ({
      index: i, point: pt, status: 'available', cooldown: 0,
      name: pt.name || TYPE_NAMES[i % TYPE_NAMES.length],
      type: ['delivery', 'hit', 'checkpoints'][i % 3],
      marker: null,
    }));
    for (const job of this.jobs) {
      const m = makeBeam(JOB_COLORS[job.index % JOB_COLORS.length], 7.5, 0.65);
      m.position.set(job.point.x, job.point.y - 0.1, job.point.z);
      this.scene.add(m);
      job.marker = m;
    }
    this.hudDirty = true;
  }

  marker(color, height = 8) {
    const m = makeBeam(color, height, 0.7);
    this.scene.add(m);
    this.activeMarkers.push(m);
    return m;
  }

  clearActiveMarkers() {
    for (const m of this.activeMarkers) this.scene.remove(m);
    this.activeMarkers = [];
  }

  removeMarker(m) {
    if (!m) return;
    this.scene.remove(m);
    const i = this.activeMarkers.indexOf(m);
    if (i >= 0) this.activeMarkers.splice(i, 1);
  }

  update(dt) {
    const game = this.game;
    const t = game.time;    for (const job of this.jobs) {
      if (job.marker) {
        job.marker.visible = job.status === 'available';
        if (job.marker.visible) {
          job.marker.userData.phase += dt;
          job.marker.userData.icon.rotation.y += dt * 1.8;
          job.marker.userData.ring.rotation.z += dt * 1.2;
          const p = 1 + Math.sin(job.marker.userData.phase * 2.2) * 0.05;
          job.marker.userData.ring.scale.set(p, p, p);
        }
      }
      if (job.status === 'cooldown') {
        job.cooldown -= dt;
        if (job.cooldown <= 0) { job.status = 'available'; this.hudDirty = true; }
      }
    }
    for (const m of this.activeMarkers) {
      const u = m.userData;
      u.phase += dt;
      u.icon.rotation.y += dt * 2.2;
      u.ring.rotation.z -= dt * 1.1;
      const p = 1 + Math.sin(u.phase * 3) * 0.08;
      u.ring.scale.set(p, p, p);
      u.mat.opacity = 0.22 + Math.sin(u.phase * 3) * 0.08;
    }

    const a = this.active;
    if (!a) return;

    // target markers follow their subjects
    if (a.targetVehicle && a.vehicleMarker) {
      if (a.targetVehicle.destroyed) {
        this.fail('TARGET VEHICLE DESTROYED');
        return;
      }
      a.vehicleMarker.position.set(a.targetVehicle.pos.x, a.targetVehicle.pos.y, a.targetVehicle.pos.z);
    }
    if (a.targetPed && a.pedMarker) {
      if (a.targetPed.dead) {
        // completed via onPedKilled normally; this is a safety net
        this.complete();
        return;
      }
      a.pedMarker.position.set(a.targetPed.pos.x, a.targetPed.pos.y, a.targetPed.pos.z);
    }

    a.timer -= dt;
    if (a.timer <= 0) {
      this.fail('OUT OF TIME');
      return;
    }

    if (a.type === 'delivery') {
      if (a.stage === 0) {
        if (game.player.mode === 'vehicle' && game.player.vehicle === a.targetVehicle) {
          a.stage = 1;
          a.objective = 'Deliver the car to the drop-off.';
          this.createDropoff();
          game.notify('JOB UPDATED', 'Delivery point marked', '', 2200);
          this.hudDirty = true;
        }
      } else {
        const p = game.player;
        const d = Math.hypot(p.pos.x - a.dropoff.x, p.pos.z - a.dropoff.z);
        if (p.mode === 'vehicle' && p.vehicle === a.targetVehicle && d < 7) {
          this.complete();
        }
      }
    } else if (a.type === 'hit') {
      if (a.targetPed.dead) this.complete();
    } else if (a.type === 'checkpoints') {
      const cp = a.checkpoints[a.cpIndex];
      if (!cp) { this.complete(); return; }
      if (a.checkpointMarker) {
        a.checkpointMarker.position.set(cp.x, cp.y, cp.z);
      }
      const p = game.player;
      const d = Math.hypot(p.pos.x - cp.x, p.pos.z - cp.z);
      if (d < 7.5) {
        a.cpIndex++;
        game.audio.beep(880, 0.1, 0.12);
        if (a.cpIndex >= a.checkpoints.length) {
          this.complete();
        } else {
          game.notify('CHECKPOINT', `${a.cpIndex}/${a.checkpoints.length}`, 'good', 1400, true);
          this.moveCheckpointMarker();
          this.hudDirty = true;
        }
      }
    }
  }

  updateAvailablePrompt() {
    const game = this.game;
    const p = game.player;
    if (p.mode !== 'foot') return;
    for (const job of this.jobs) {
      if (job.status !== 'available') continue;
      const d = Math.hypot(p.pos.x - job.point.x, p.pos.z - job.point.z);
      if (d < 3.6) {
        game.hud.setPrompt(`<span class="key">E</span> START JOB — ${job.name}`);
        game.hud.setMission(null);
        return;
      }
    }
  }

  canInteract() {
    const game = this.game;
    if (this.active || game.player.mode !== 'foot') return null;
    for (const job of this.jobs) {
      if (job.status !== 'available') continue;
      const d = Math.hypot(game.player.pos.x - job.point.x, game.player.pos.z - job.point.z);
      if (d < 3.6) return job;
    }
    return null;
  }

  interact(job) {
    if (!job) return false;
    const point = job.point;
    if (job.type === 'delivery') this.startDelivery(job);
    else if (job.type === 'hit') this.startHit(job);
    else this.startCheckpoints(job);
    this.game.audio.beep(660, 0.1, 0.12);
    this.hudDirty = true;
    return true;
  }

  pickDropoff(minDist = 70, maxDist = 180) {
    const city = this.game.world.city;
    for (let i = 0; i < 40; i++) {
      const x = city.xLines[2 + Math.floor(this.rng() * 6)];
      const z = city.zLines[2 + Math.floor(this.rng() * 6)];
      const d = Math.hypot(x - this.game.player.pos.x, z - this.game.player.pos.z);
      if (d > minDist && d < maxDist) {
        return { x, z, y: city.groundY + 0.15 };
      }
    }
    return { x: city.cx + 45, z: city.cz - 45, y: city.groundY + 0.15 };
  }

  startDelivery(job) {
    job.status = 'active';
    const city = this.game.world.city;
    let spot = null;
    for (let i = 0; i < 40; i++) {
      const s = city.randomRoadSpawn(this.rng);
      const d = Math.hypot(s.x - job.point.x, s.z - job.point.z);
      if (d > 16 && d < 55) { spot = s; break; }
    }
    if (!spot) spot = { x: city.cx + 45, z: city.cz + 15, yaw: 0 };
    const car = this.game.vehicles.spawn({
      x: spot.x, z: spot.z, yaw: spot.yaw,
      type: 'coupe', color: 0xe8b62a, driver: null,
    });
    car.missionTag = 'target';
    const marker = this.marker(0xffc72c, 10);
    const drop = this.pickDropoff(80, 190);
    this.active = {
      type: 'delivery', job, title: 'HOT WHEELS',
      objective: 'Steal the marked yellow car.', timer: 165, maxTimer: 165,
      reward: 1400, stage: 0, targetVehicle: car, vehicleMarker: marker,
      dropoff: drop, dropoffMarker: null,
    };
    this.game.hud.setMission({ kind: 'DELIVERY', title: 'HOT WHEELS', objective: this.active.objective, timer: 165 });
    this.game.notify('JOB ACCEPTED', 'Steal the marked car', '', 2400);
    this.hudDirty = true;
  }

  createDropoff() {
    const a = this.active;
    a.dropoffMarker = this.marker(0x62e08a, 8);
    a.dropoffMarker.position.set(a.dropoff.x, a.dropoff.y - 0.1, a.dropoff.z);
  }

  startHit(job) {
    job.status = 'active';
    const city = this.game.world.city;
    let p = null;
    for (let i = 0; i < 30; i++) {
      const c = city.walkPoints[Math.floor(this.rng() * city.walkPoints.length)];
      const d = Math.hypot(c.x - job.point.x, c.z - job.point.z);
      if (d > 55 && d < 145) { p = c; break; }
    }
    if (!p) p = { x: job.point.x + 60, z: job.point.z };
    const ped = this.game.peds.spawnTarget(p);
    if (!ped) { this.game.notify('JOB FAILED', 'No target available', 'bad', 2500); return; }
    const marker = this.marker(0xff4b4b, 8);
    marker.position.set(ped.pos.x, ped.pos.y, ped.pos.z);
    this.active = {
      type: 'hit', job, title: 'LOOSE ENDS',
      objective: 'Eliminate the marked target.', timer: 190, maxTimer: 190,
      reward: 1250, targetPed: ped, pedMarker: marker,
    };
    this.game.hud.setMission({ kind: 'HIT', title: 'LOOSE ENDS', objective: this.active.objective, timer: 190 });
    this.game.notify('CONTRACT', 'Target marked in red', '', 2400);
    this.hudDirty = true;
  }

  startCheckpoints(job) {
    job.status = 'active';
    const city = this.game.world.city;
    const pts = [];
    const used = new Set();
    let guard = 0;
    let last = job.point;
    while (pts.length < 4 && guard++ < 100) {
      const ix = 1 + Math.floor(this.rng() * 8);
      const iz = 1 + Math.floor(this.rng() * 8);
      const k = ix + ':' + iz;
      if (used.has(k)) continue;
      used.add(k);
      const x = city.xLines[ix], z = city.zLines[iz];
      if (Math.hypot(x - last.x, z - last.z) < 26) continue;
      pts.push({ x, z, y: city.groundY + 0.15 });
      last = { x, z };
    }
    this.active = {
      type: 'checkpoints', job, title: 'CIRCUIT RUN',
      objective: `Hit checkpoint 1 of ${pts.length}.`, timer: 95, maxTimer: 95,
      reward: 1600, checkpoints: pts, cpIndex: 0, checkpointMarker: null,
    };
    this.moveCheckpointMarker();
    this.game.hud.setMission({ kind: 'RACE', title: 'CIRCUIT RUN', objective: this.active.objective, timer: 95 });
    this.game.notify('RACE STARTED', 'Follow the blue markers', '', 2400);
    this.hudDirty = true;
  }

  moveCheckpointMarker() {
    const a = this.active;
    this.removeMarker(a.checkpointMarker);
    const cp = a.checkpoints[a.cpIndex];
    if (!cp) return;
    a.checkpointMarker = this.marker(0x5ab8ff, 11);
    a.checkpointMarker.position.set(cp.x, cp.y - 0.1, cp.z);
    a.objective = `Hit checkpoint ${a.cpIndex + 1} of ${a.checkpoints.length}.`;
    this.game.hud.setMission({ kind: 'RACE', title: 'CIRCUIT RUN', objective: a.objective, timer: a.timer });
  }

  onVehicleEntered(v) {
    const a = this.active;
    if (!a) return;
    if (a.type === 'delivery' && v === a.targetVehicle && a.stage === 0) {
      a.stage = 1;
      a.objective = 'Deliver the car to the drop-off.';
      this.createDropoff();
      this.game.notify('JOB UPDATED', 'Drop-off marked in green', '', 2400);
      this.hudDirty = true;
    }
  }

  onPedKilled(ped) {
    const a = this.active;
    if (!a || a.type !== 'hit') return;
    if (ped === a.targetPed) this.complete();
  }

  onVehicleDestroyed(v) {
    const a = this.active;
    if (!a) return;
    if (v === a.targetVehicle) this.fail('TARGET VEHICLE DESTROYED');
  }

  complete() {
    const a = this.active;
    if (!a) return;
    const game = this.game;
    this.active = null;
    this.clearActiveMarkers();
    a.job.status = 'cooldown';
    a.job.cooldown = 22;
    a.job.marker.visible = false;
    game.player.addCash(a.reward, game);
    game.audio.missionDone();
    game.notify('JOB COMPLETE', `+$${a.reward.toLocaleString()}`, 'good', 4200);
    game.hud.showBanner('JOB COMPLETE', `+$${a.reward.toLocaleString()}`);
    game.hud.setMission(null);
    game.hud.setPrompt('');
    this.completed++;
    if (a.targetVehicle) a.targetVehicle.missionTag = null;
    if (a.targetPed) a.targetPed.missionTag = null;
    this.hudDirty = true;
  }

  fail(reason = 'JOB FAILED') {
    const a = this.active;
    if (!a) return;
    const game = this.game;
    this.active = null;
    this.clearActiveMarkers();
    a.job.status = 'cooldown';
    a.job.cooldown = 14;
    a.job.marker.visible = false;
    if (a.targetVehicle) a.targetVehicle.missionTag = null;
    if (a.targetPed) a.targetPed.missionTag = null;
    game.audio.fail();
    game.notify('JOB FAILED', reason, 'bad', 4200);
    game.hud.setMission(null);
    game.hud.setPrompt('');
    this.hudDirty = true;
  }

  getMissionInfo() {
    const a = this.active;
    if (!a) return null;
    return { kind: a.type.toUpperCase(), title: a.title, objective: a.objective, timer: a.timer };
  }

  clear() {
    this.clearActiveMarkers();
    for (const j of this.jobs) if (j.marker) this.scene.remove(j.marker);
    this.jobs = [];
    this.active = null;
  }
}
