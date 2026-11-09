import * as THREE from 'three';
import { createHuman, animateHuman } from './characters.js';
import { stream, clamp } from './rng.js';
import { wrapAngle } from './vehicles.js';

let pedId = 0;

export class Ped {
  constructor(game, opts = {}) {
    this.game = game;
    this.id = pedId++;
    this.isCop = !!opts.isCop;
    this.pos = new THREE.Vector3(opts.x, game.world.groundAt(opts.x, opts.z), opts.z);
    this.yaw = opts.yaw ?? Math.random() * Math.PI * 2;
    this.hp = 100;
    this.dead = false;
    this.deathTimer = 0;
    this.state = this.isCop ? 'chase' : 'wander';
    this.speed = 0;
    this.target = null;
    this.walkTimer = 0;
    this.shootTimer = Math.random() * 1.2;
    this.stuckTime = 0;
    this.alertTimer = 0;
    this.threat = new THREE.Vector3();
    this.phase = 0;

    this.mesh = createHuman({
      armed: this.isCop,
      cop: this.isCop,
      shirt: this.isCop ? 0x2a3b61 : undefined,
      pants: this.isCop ? 0x202a3d : undefined,
      skin: opts.skin,
      hair: opts.hair,
      shirtColor: opts.shirt,
    });
    if (!this.isCop && opts.shirtColor != null) {
      this.mesh.userData.rig.shirtMat.color.setHex(opts.shirtColor);
    }
    this.mesh.position.copy(this.pos);
    this.mesh.rotation.y = this.yaw;
    game.scene.add(this.mesh);

    this.pickTarget(game);
  }

  get rig() { return this.mesh.userData.rig; }

  pickTarget(game) {
    const city = game.world.city;
    if (this.isCop) {
      this.target = { x: game.player.pos.x, z: game.player.pos.z };
      return;
    }
    let best = null, bd = Infinity;
    for (let i = 0; i < 16; i++) {
      const p = city.walkPoints[Math.floor(Math.random() * city.walkPoints.length)];
      if (!p) continue;
      const d = Math.hypot(p.x - this.pos.x, p.z - this.pos.z);
      if (d > 8 && d < 75 && d < bd) { bd = d; best = p; }
    }
    this.target = best || { x: this.pos.x + 10, z: this.pos.z };
  }

  flee(from, game) {
    const dx = this.pos.x - from.x;
    const dz = this.pos.z - from.z;
    const len = Math.max(1, Math.hypot(dx, dz));
    this.state = 'flee';
    this.alertTimer = 4 + Math.random() * 3;
    this.target = {
      x: this.pos.x + (dx / len) * 32 + (Math.random() - 0.5) * 10,
      z: this.pos.z + (dz / len) * 32 + (Math.random() - 0.5) * 10,
    };
  }

  update(dt, game) {
    if (this.dead) {
      this.deathTimer += dt;
      if (this.deathTimer < 1.2) {
        animateHuman(this.mesh, dt, 0, { dead: true, baseY: game.world.groundAt(this.pos.x, this.pos.z), deadSign: 1 });
      }
      return;
    }

    const player = game.player;
    const distToPlayer = Math.hypot(player.pos.x - this.pos.x, player.pos.z - this.pos.z);

    if (this.isCop) {
      if (game.player.wanted <= 0) {
        this.state = 'leave';
        if (!this.target) this.pickTarget(game);
      } else {
        this.state = 'chase';
      }
    } else if (this.alertTimer > 0) {
      this.alertTimer -= dt;
      if (this.alertTimer <= 0) { this.state = 'wander'; this.pickTarget(game); }
    } else if (player.wanted >= 2 && distToPlayer < 26) {
      if (this.state !== 'flee') this.flee(player.pos, game);
    }

    let targetSpeed = 0;
    if (this.state === 'flee') {
      targetSpeed = 4.8;
    } else if (this.state === 'chase' && this.isCop) {
      const dx = player.pos.x - this.pos.x;
      const dz = player.pos.z - this.pos.z;
      const d = Math.hypot(dx, dz);
      if (d > 13) {
        this.target = { x: player.pos.x, z: player.pos.z };
        targetSpeed = 4.9;
      } else {
        targetSpeed = 0.5;
        this.target = { x: player.pos.x, z: player.pos.z };
        this.tryShoot(dt, game, d);
      }
      // if very far, run
      if (distToPlayer > 100) { this.state = 'leave'; }
    } else if (this.state === 'leave') {
      targetSpeed = 2.4;
      if (!this.target) this.pickTarget(game);
    } else {
      targetSpeed = 1.5 + (this.id % 3) * 0.2;
      if (!this.target) this.pickTarget(game);
    }

    let dx = 0, dz = 0;
    if (this.target) {
      dx = this.target.x - this.pos.x;
      dz = this.target.z - this.pos.z;
      const d = Math.hypot(dx, dz);
      if (d < 1.4 && !this.isCop) {
        this.pickTarget(game);
        this.walkTimer = Math.random() * 3;
      }
    }
    const d = Math.hypot(dx, dz);
    if (d > 0.01) {
      dx /= d; dz /= d;
      const desiredYaw = Math.atan2(dx, dz);
      this.yaw += wrapAngle(desiredYaw - this.yaw) * Math.min(1, dt * 8);
      this.pos.x += dx * targetSpeed * dt;
      this.pos.z += dz * targetSpeed * dt;
      this.speed = targetSpeed;
    } else {
      this.speed = 0;
    }

    // collisions and ground
    const fixed = game.world.resolveCircle(this.pos.x, this.pos.z, 0.36);
    if (Math.abs(fixed.x - this.pos.x) > 0.001 || Math.abs(fixed.z - this.pos.z) > 0.001) {
      this.pos.x = fixed.x;
      this.pos.z = fixed.z;
      this.stuckTime += dt;
      if (this.stuckTime > 0.8) {
        this.pickTarget(game);
        this.stuckTime = 0;
      }
    } else this.stuckTime = 0;
    this.pos.y = game.world.groundAt(this.pos.x, this.pos.z) + 0.02;

    this.mesh.position.set(this.pos.x, this.pos.y, this.pos.z);
    this.mesh.rotation.y = this.yaw;
    const aiming = this.isCop && this.state === 'chase' && this.shootTimer < 0.5;
    animateHuman(this.mesh, dt, this.speed, { aiming, baseY: this.pos.y });

    if (this.isCop && game.player.wanted <= 0 && distToPlayer > 90) {
      this.remove(game);
    }
  }

  tryShoot(dt, game, dist) {
    if (this.state !== 'chase') return;
    this.shootTimer -= dt;
    if (this.shootTimer > 0) return;
    this.shootTimer = 1.4 + Math.random() * 0.7;
    const player = game.player;
    const origin = new THREE.Vector3(this.pos.x, this.pos.y + 1.42, this.pos.z);
    const target = new THREE.Vector3(player.pos.x, player.pos.y + 1.2, player.pos.z);
    const dir = target.clone().sub(origin);
    const len = dir.length();
    dir.normalize();
    const hit = game.world.raycastStatic(origin, dir, len, true);
    if (hit.dist < len - 1.0) return;
    this.rig.gunTip.getWorldPosition(origin);
    game.particles.muzzle(origin);
    game.audio.copShot();
    const hitChance = clamp(0.72 - len / 80, 0.28, 0.7);
    if (Math.random() < hitChance) {
      game.particles.tracer(origin, target, 0xffb0a0);
      player.takeDamage(9 + Math.random() * 7, game);
    } else {
      const miss = target.clone().add(new THREE.Vector3((Math.random() - 0.5) * 3, Math.random() * 2 - 0.5, (Math.random() - 0.5) * 3));
      game.particles.tracer(origin, miss, 0xffb0a0);
    }
    void dist;
  }

  hit(amount, game) {
    if (this.dead) return false;
    this.hp -= amount;
    if (this.hp <= 0) {
      this.die(game);
      return true;
    }
    this.flee(game.player.pos, game);
    if (this.isCop) this.shootTimer = Math.min(this.shootTimer, 0.4);
    return false;
  }

  die(game) {
    this.dead = true;
    this.state = 'dead';
    this.deathTimer = 0;
    this.speed = 0;
    game.particles.blood(new THREE.Vector3(this.pos.x, this.pos.y + 1.0, this.pos.z));
    // drop a few bucks
    if (!this.isCop) {
      const drop = 5 + Math.floor(Math.random() * 35);
      game.spawnCashPickup(this.pos.x, this.pos.z, drop);
    }
    this.mesh.userData.rig.legs.forEach(l => { l.rotation.x = 0; });
    game.missions?.onPedKilled(this);
  }

  remove(game) {
    game.scene.remove(this.mesh);
    this.removed = true;
  }
}

export class PedManager {
  constructor(game) {
    this.game = game;
    this.list = [];
    this.rng = stream(game.seed, 'peds');
    this.spawnTimer = 0;
    this.copTimer = 0;
    this.copSpawnCooldown = 0;
  }

  spawnCivilian(pos) {
    const city = this.game.world.city;
    let p = pos;
    if (!p) {
      for (let i = 0; i < 20; i++) {
        const c = city.walkPoints[Math.floor(this.rng() * city.walkPoints.length)];
        const d = Math.hypot(c.x - this.game.player.pos.x, c.z - this.game.player.pos.z);
        if (d > 18 && d < 130) { p = c; break; }
      }
    }
    if (!p) return null;
    const ped = new Ped(this.game, {
      x: p.x, z: p.z, yaw: this.rng() * Math.PI * 2,
    });
    this.list.push(ped);
    return ped;
  }

  spawnTarget(pos) {
    const ped = new Ped(this.game, {
      x: pos.x, z: pos.z, yaw: Math.random() * Math.PI * 2,
      shirtColor: 0xa32222, skin: 0xb9825a,
    });
    ped.isTarget = true;
    this.list.push(ped);
    return ped;
  }

  spawnCop(pos) {
    const city = this.game.world.city;
    let p = pos;
    if (!p) {
      for (let i = 0; i < 30; i++) {
        const c = city.walkPoints[Math.floor(Math.random() * city.walkPoints.length)];
        const d = Math.hypot(c.x - this.game.player.pos.x, c.z - this.game.player.pos.z);
        if (d > 24 && d < 90) { p = c; break; }
      }
    }
    if (!p) {
      const a = Math.random() * Math.PI * 2;
      p = { x: this.game.player.pos.x + Math.cos(a) * 34, z: this.game.player.pos.z + Math.sin(a) * 34 };
    }
    const ped = new Ped(this.game, { x: p.x, z: p.z, isCop: true, yaw: Math.random() * 6.28 });
    this.list.push(ped);
    return ped;
  }

  populate() {
    for (let i = 0; i < 18; i++) this.spawnCivilian();
  }

  update(dt) {
    const game = this.game;
    for (const ped of this.list) {
      if (!ped.removed) ped.update(dt, game);
    }

    // despawn dead / far away peds
    for (const ped of [...this.list]) {
      const far = Math.hypot(ped.pos.x - game.player.pos.x, ped.pos.z - game.player.pos.z) > 260;
      if (ped.removed || (ped.dead && ped.deathTimer > 24) || (far && !ped.isCop)) {
        ped.remove(game);
      }
    }
    this.list = this.list.filter(p => !p.removed);

    // maintain ambient civilians
    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this.spawnTimer = 0.7;
      let civilians = 0;
      let cops = 0;
      for (const p of this.list) {
        if (p.dead) continue;
        if (p.isCop) cops++;
        else civilians++;
      }
      if (civilians < 18) this.spawnCivilian();
      const wantCops = game.player.wanted > 0 ? Math.min(8, 1 + game.player.wanted * 2) : 0;
      this.copSpawnCooldown -= dt;
      if (cops < wantCops && this.copSpawnCooldown <= 0) {
        this.copSpawnCooldown = 1.5;
        this.spawnCop();
      }
    }
  }

  alert(pos, radius) {
    for (const p of this.list) {
      if (p.dead || p.isCop) continue;
      if (Math.hypot(p.pos.x - pos.x, p.pos.z - pos.z) < radius) p.flee(pos, this.game);
    }
  }

  raycast(origin, dir, maxDist) {
    let best = null;
    for (const ped of this.list) {
      if (ped.dead) continue;
      // body capsule approximated with two spheres
      const body = new THREE.Vector3(ped.pos.x, ped.pos.y + 1.02, ped.pos.z);
      const head = new THREE.Vector3(ped.pos.x, ped.pos.y + 1.72, ped.pos.z);
      const b = raySphere(origin, dir, body, 0.48, maxDist);
      const h = raySphere(origin, dir, head, 0.3, maxDist);
      let t = null, headshot = false;
      if (b !== null && h !== null) { if (h < b) { t = h; headshot = true; } else t = b; }
      else if (b !== null) t = b;
      else if (h !== null) { t = h; headshot = true; }
      if (t !== null && (!best || t < best.dist)) {
        best = { ped, dist: t, headshot, point: origin.clone().addScaledVector(dir, t) };
      }
    }
    return best;
  }

  nearestCop(pos) {
    let best = null, bd = Infinity;
    for (const p of this.list) {
      if (!p.isCop || p.dead) continue;
      const d = Math.hypot(p.pos.x - pos.x, p.pos.z - pos.z);
      if (d < bd) { bd = d; best = p; }
    }
    return best;
  }

  killFromVehicle(vehicle) {
    if (vehicle.speed < 6) return;
    for (const ped of this.list) {
      if (ped.dead) continue;
      if (Math.hypot(ped.pos.x - vehicle.pos.x, ped.pos.z - vehicle.pos.z) < 2.4) {
        ped.die(this.game);
        this.game.particles.blood(new THREE.Vector3(ped.pos.x, ped.pos.y + 1, ped.pos.z));
        vehicle.speed *= 0.88;
        this.game.registerCrime(ped.isCop ? 3 : 2, 'HIT AND RUN');
        this.game.audio.crash(0.8);
      }
    }
  }

  clear() {
    for (const p of this.list) if (!p.removed) p.remove(this.game);
    this.list = [];
  }
}

function raySphere(origin, dir, center, radius, maxDist) {
  const ox = origin.x - center.x, oy = origin.y - center.y, oz = origin.z - center.z;
  const b = ox * dir.x + oy * dir.y + oz * dir.z;
  const c = ox * ox + oy * oy + oz * oz - radius * radius;
  const disc = b * b - c;
  if (disc < 0) return null;
  const sq = Math.sqrt(disc);
  let t = -b - sq;
  if (t < 0) t = -b + sq;
  if (t < 0 || t > maxDist) return null;
  return t;
}
