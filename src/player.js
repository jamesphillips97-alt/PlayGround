import * as THREE from 'three';
import { createHuman, animateHuman } from './characters.js';
import { clamp } from './rng.js';
import { wrapAngle } from './vehicles.js';

export class Player {
  constructor(game, spawn) {
    this.game = game;
    this.pos = new THREE.Vector3(spawn.x, game.world.groundAt(spawn.x, spawn.z), spawn.z);
    this.vel = new THREE.Vector3();
    this.yaw = spawn.yaw;
    this.cameraYaw = spawn.yaw;
    this.cameraPitch = -0.13;
    this.cameraZoom = 1;
    this.mode = 'foot';
    this.vehicle = null;
    this.onGround = true;
    this.swimming = false;
    this.stepHeight = 0.65;

    this.hp = 100;
    this.maxHp = 100;
    this.armor = 0;
    this.cash = 750;
    this.wanted = 0;
    this.heat = 0;
    this.lastCrime = -999;
    this.ammo = 12;
    this.magSize = 12;
    this.reserve = 96;
    this.weaponName = 'PISTOL';
    this.fireCooldown = 0;
    this.reloadTimer = 0;
    this.aiming = false;
    this.aimBlend = 0;
    this.lastDamage = -999;
    this.invuln = -1;
    this.dead = false;
    this.sprinting = false;
    this.speed = 0;
    this.walkPhase = 0;
    this.shotFlash = 0;

    this.mesh = createHuman({
      armed: true, shirt: 0x2d333f, pants: 0x3b4350, skin: 0xd8a06f, hair: 0x241a13,
    });
    const rig = this.mesh.userData.rig;
    rig.shirtMat.color.setHex(0x2c323d);
    this.mesh.position.copy(this.pos);
    this.mesh.rotation.y = this.yaw;
    game.scene.add(this.mesh);
    this.muzzle = new THREE.Vector3();
  }

  processLook(look, game) {
    const sens = 0.0026;
    if (this.mode === 'vehicle') {
      if (Math.abs(look.x) > 0.01 || Math.abs(look.y) > 0.01) {
        this.cameraYaw -= look.x * sens * 0.9;
        this.cameraPitch -= look.y * 0.0021;
        this.lookHold = 1.1;
      }
    } else {
      this.cameraYaw -= look.x * sens;
      this.cameraPitch -= look.y * 0.0021;
    }
    this.cameraPitch = clamp(this.cameraPitch, -1.05, 0.92);
    if (game.cameraZoomDelta) {
      this.cameraZoom = clamp(this.cameraZoom + game.cameraZoomDelta * 0.1, 0.55, 1.7);
      game.cameraZoomDelta = 0;
    }
  }

  update(dt, game, input) {
    this.aiming = input.aim && this.mode === 'foot';
    this.aimBlend += ((this.aiming ? 1 : 0) - this.aimBlend) * Math.min(1, dt * 12);
    this.fireCooldown = Math.max(0, this.fireCooldown - dt);
    this.shotFlash = Math.max(0, this.shotFlash - dt);
    if (this.invuln > 0) this.invuln -= dt;

    if (this.mode === 'vehicle' && this.vehicle) {
      this.pos.copy(this.vehicle.pos);
      this.mesh.visible = false;
      this.speed = Math.abs(this.vehicle.speed);
      this.sprinting = false;
      if (this.lookHold > 0) this.lookHold -= dt;
      else {
        const diff = wrapAngle(this.vehicle.yaw - this.cameraYaw);
        if (!this.aiming) this.cameraYaw += diff * Math.min(1, dt * 2.0);
      }
      // reload while driving still works
      this.updateReload(dt, game);
      this.updateHealth(dt, game);
      return;
    }

    this.mesh.visible = true;
    const fwd = input.forward;
    const str = input.strafe;
    const mag = Math.min(1, Math.hypot(fwd, str));
    const cy = this.cameraYaw;
    const fx = Math.sin(cy), fz = Math.cos(cy);
    const rx = -Math.cos(cy), rz = Math.sin(cy);
    let dx = fx * fwd + rx * str;
    let dz = fz * fwd + rz * str;
    const dl = Math.hypot(dx, dz);
    if (dl > 1e-4) { dx /= dl; dz /= dl; }

    const wantSprint = input.sprinting && mag > 0.3 && !this.aiming;
    this.sprinting = wantSprint;
    let targetSpeed = this.aiming ? 3.2 : wantSprint ? 9.2 : 5.6;
    if (this.swimming) targetSpeed = 3.2;
    targetSpeed *= mag;
    if (this.invuln > 0) targetSpeed *= 0.6;

    if (mag > 0.02) {
      this.vel.x += (dx * targetSpeed - this.vel.x) * Math.min(1, dt * (this.onGround ? 12 : 3.5));
      this.vel.z += (dz * targetSpeed - this.vel.z) * Math.min(1, dt * (this.onGround ? 12 : 3.5));
      const face = this.aiming ? this.cameraYaw : Math.atan2(dx, dz);
      this.yaw += wrapAngle(face - this.yaw) * Math.min(1, dt * 14);
    } else {
      const fr = Math.max(0, 1 - dt * (this.onGround ? 12 : 1.4));
      this.vel.x *= fr;
      this.vel.z *= fr;
    }
    this.speed = Math.hypot(this.vel.x, this.vel.z);

    const oldX = this.pos.x, oldZ = this.pos.z;
    const oldGround = game.world.groundAt(oldX, oldZ);
    let nx = this.pos.x + this.vel.x * dt;
    let nz = this.pos.z + this.vel.z * dt;

    const ng = game.world.groundAt(nx, nz);
    if (!this.swimming && ng - oldGround > 1.1 && this.pos.y < ng - 0.4) {
      // treat steep risers as walls when walking
      nx = oldX;
      nz = oldZ;
    }
    const fixed = game.world.resolveCircle(nx, nz, 0.42);
    this.pos.x = fixed.x;
    this.pos.z = fixed.z;

    const ground = game.world.groundAt(this.pos.x, this.pos.z);
    this.swimming = ground < -1.1 && this.pos.y < 0.55;
    const inWater = ground < -0.55;

    if (this.swimming) {
      this.onGround = false;
      this.vel.y = 0;
      const bob = Math.sin(game.time * 3.2) * 0.06;
      this.pos.y += (0.25 + bob - this.pos.y) * Math.min(1, dt * 6);
      if (input.jump) this.pos.y += dt * 3.2;
      if (this.pos.y < -0.8) this.takeDamage(6 * dt, game, true);
    } else {
      if (input.jump && this.onGround) {
        this.vel.y = 10.4;
        this.onGround = false;
      }
      this.vel.y -= 27 * dt;
      this.pos.y += this.vel.y * dt;
      if (this.pos.y <= ground + 0.02) {
        this.pos.y = ground + 0.02;
        this.vel.y = 0;
        this.onGround = true;
      } else {
        this.onGround = false;
      }
      if (inWater && this.pos.y < 0.35) {
        // wading
        this.vel.x *= 0.86;
        this.vel.z *= 0.86;
      }
    }

    this.mesh.position.set(this.pos.x, this.pos.y, this.pos.z);
    this.mesh.rotation.y = this.yaw;
    animateHuman(this.mesh, dt, this.speed, { aiming: this.aiming, baseY: this.pos.y });

    this.updateReload(dt, game);
    this.updateHealth(dt, game);
  }

  updateReload(dt, game) {
    if (this.reloadTimer > 0) {
      this.reloadTimer -= dt;
      if (this.reloadTimer <= 0) {
        const need = this.magSize - this.ammo;
        const take = Math.min(need, this.reserve);
        this.ammo += take;
        this.reserve -= take;
        game.audio.reload();
      }
    }
  }

  updateHealth(dt, game) {
    if (this.hp < this.maxHp && game.time - this.lastDamage > 5.5) {
      this.hp = Math.min(this.maxHp, this.hp + 2.2 * dt);
    }
    if (this.hp <= 0 && !this.dead) game.killPlayer();
  }

  reload(game) {
    if (this.reloadTimer > 0) return;
    if (this.ammo >= this.magSize || this.reserve <= 0) return;
    this.reloadTimer = 1.15;
    game.audio.reload();
    game.notify('RELOADING', 'Pistol magazine swap', '', 900, true);
  }

  canShoot() {
    return this.mode === 'foot' && !this.dead && this.reloadTimer <= 0 && this.ammo > 0 && this.fireCooldown <= 0;
  }

  consumeShot(game) {
    this.ammo--;
    this.fireCooldown = this.aiming ? 0.2 : 0.26;
    this.shotFlash = 0.06;
    game.audio.gunshot();
    this.mesh.userData.rig.gunTip.getWorldPosition(this.muzzle);
    game.particles.muzzle(this.muzzle);
    game.cameraShake = Math.max(game.cameraShake, 0.18);
    if (this.ammo <= 0 && this.reserve > 0) this.reload(game);
  }

  takeDamage(amount, game, ignoreArmor = false) {
    if (this.dead || this.invuln > 0) return;
    let a = amount;
    if (!ignoreArmor && this.armor > 0) {
      const absorbed = Math.min(this.armor, a * 0.75);
      this.armor -= absorbed;
      a -= absorbed;
    }
    this.hp -= a;
    this.lastDamage = game.time;
    game.hud.damageFlash();
    game.audio.hit();
    if (this.hp <= 0 && !this.dead) game.killPlayer();
  }

  addCash(amount, game) {
    this.cash += amount;
    game.hud.popCash(amount);
  }

  heal(amount, armor = false) {
    if (armor) this.armor = Math.min(100, this.armor + amount);
    else this.hp = Math.min(this.maxHp, this.hp + amount);
  }

  enterVehicle(v, game) {
    this.mode = 'vehicle';
    this.vehicle = v;
    this.mesh.visible = false;
    this.cameraYaw = v.yaw;
    this.cameraPitch = -0.12;
    this.cameraZoom = 1;
    this.pos.copy(v.pos);
    v.enter();
    game.hud.setInVehicle(true);
    game.audio.beep(330, 0.08, 0.1);
  }

  exitVehicle(game) {
    if (!this.vehicle) return;
    const v = this.vehicle;
    const side = new THREE.Vector3(Math.cos(v.yaw), 0, -Math.sin(v.yaw));
    let px = v.pos.x + side.x * 2.2;
    let pz = v.pos.z + side.z * 2.2;
    if (game.world.isBlocked(px, pz, 0.6) || game.world.isWater(px, pz)) {
      px = v.pos.x - side.x * 2.2;
      pz = v.pos.z - side.z * 2.2;
    }
    const fixed = game.world.resolveCircle(px, pz, 0.42);
    this.pos.set(fixed.x, game.world.groundAt(fixed.x, fixed.z) + 0.02, fixed.z);
    this.vel.set(0, 0, 0);
    this.yaw = v.yaw + Math.PI / 2;
    this.cameraYaw = this.yaw;
    this.mode = 'foot';
    this.vehicle = null;
    this.mesh.visible = true;
    this.mesh.position.copy(this.pos);
    v.exit();
    game.hud.setInVehicle(false);
    game.audio.beep(240, 0.08, 0.1);
  }
}

export class CameraRig {
  constructor(game, camera) {
    this.game = game;
    this.camera = camera;
    this.pos = new THREE.Vector3();
    this.lookDir = new THREE.Vector3();
    this.target = new THREE.Vector3();
    this.initialized = false;
    this.fov = 64;
    this._tmp = new THREE.Vector3();
    this._desired = new THREE.Vector3();
    this._shake = new THREE.Vector3();
  }

  update(dt, player) {
    const p = player;
    const cosP = Math.cos(p.cameraPitch);
    this.lookDir.set(
      Math.sin(p.cameraYaw) * cosP,
      Math.sin(p.cameraPitch),
      Math.cos(p.cameraYaw) * cosP
    ).normalize();

    const right = this._tmp.set(-Math.cos(p.cameraYaw), 0, Math.sin(p.cameraYaw));
    const aiming = p.aiming && p.mode === 'foot';
    const shoulder = aiming ? 0.72 : p.mode === 'vehicle' ? 0 : 0.5;
    const baseDist = p.mode === 'vehicle' ? (7.8 + Math.abs(p.vehicle ? p.vehicle.speed : 0) * 0.075) : (aiming ? 2.15 : 4.7);
    const dist = baseDist * p.cameraZoom;
    const targetY = p.mode === 'vehicle' ? 1.65 : 1.55;
    this.target.set(p.pos.x, p.pos.y + targetY, p.pos.z);
    this.target.addScaledVector(right, shoulder);

    this._desired.copy(this.target).addScaledVector(this.lookDir, -dist);
    // Camera obstruction
    if (this.game.world) {
      const dir = this._desired.clone().sub(this.target);
      const len = dir.length();
      if (len > 0.01) {
        dir.normalize();
        const hit = this.game.world.raycastStatic(this.target, dir, len, true);
        const allowed = Math.max(1.0, hit.dist - 0.35);
        if (hit.dist < len) {
          this._desired.copy(this.target).addScaledVector(dir, allowed);
        }
      }
    }

    if (!this.initialized) {
      this.pos.copy(this._desired);
      this.initialized = true;
    } else {
      const k = 1 - Math.exp(-dt * (p.mode === 'vehicle' ? 10 : 15));
      this.pos.lerp(this._desired, k);
    }

    // shake
    const shake = this.game.cameraShake;
    if (shake > 0.001) {
      const s = shake * 0.28;
      this._shake.set((Math.random() - 0.5) * s, (Math.random() - 0.5) * s, (Math.random() - 0.5) * s);
      this.pos.add(this._shake);
      this.game.cameraShake = Math.max(0, shake - dt * 2.4);
    }

    this.camera.position.copy(this.pos);
    const lookTarget = this._tmp.copy(this.target).addScaledVector(this.lookDir, 12);
    this.camera.lookAt(lookTarget);

    const targetFov = p.mode === 'vehicle' ? 70 : aiming ? 52 : 64;
    this.fov += (targetFov - this.fov) * Math.min(1, dt * 8);
    if (Math.abs(this.camera.fov - this.fov) > 0.01) {
      this.camera.fov = this.fov;
      this.camera.updateProjectionMatrix();
    }
  }
}
