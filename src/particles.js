import * as THREE from 'three';

const MAX = 420;
const MAX_TRACERS = 14;

export class Particles {
  constructor(scene) {
    this.scene = scene;
    this.count = MAX;
    this.pool = [];
    this.cursor = 0;
    const geo = new THREE.BoxGeometry(1, 1, 1);
    const mat = new THREE.MeshLambertMaterial({ color: 0xffffff });
    this.mesh = new THREE.InstancedMesh(geo, mat, MAX);
    this.mesh.frustumCulled = false;
    this.mesh.castShadow = false;
    this.mesh.receiveShadow = false;
    this.mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 3), 3);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    scene.add(this.mesh);

    const m = new THREE.Matrix4();
    m.makeScale(0, 0, 0);
    for (let i = 0; i < MAX; i++) {
      this.mesh.setMatrixAt(i, m);
      this.mesh.setColorAt(i, new THREE.Color(1, 1, 1));
      this.pool.push({ life: 0, maxLife: 1, pos: new THREE.Vector3(), vel: new THREE.Vector3(), size: 0.1, grow: 0, gravity: 0, drag: 0, spin: 0, rot: 0, color: new THREE.Color() });
    }
    this.mesh.instanceMatrix.needsUpdate = true;
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;

    // tracers
    this.tracerPos = new Float32Array(MAX_TRACERS * 6);
    this.tracerCol = new Float32Array(MAX_TRACERS * 6);
    this.tracerLife = new Float32Array(MAX_TRACERS);
    this.tracerIdx = 0;
    const tgeo = new THREE.BufferGeometry();
    tgeo.setAttribute('position', new THREE.BufferAttribute(this.tracerPos, 3));
    tgeo.setAttribute('color', new THREE.BufferAttribute(this.tracerCol, 3));
    this.tracerMat = new THREE.LineBasicMaterial({
      vertexColors: true, transparent: true, opacity: 0.9,
      blending: THREE.AdditiveBlending, depthWrite: false,
    });
    this.tracers = new THREE.LineSegments(tgeo, this.tracerMat);
    this.tracers.frustumCulled = false;
    scene.add(this.tracers);

    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._e = new THREE.Euler();
    this._s = new THREE.Vector3();
    this._p = new THREE.Vector3();
    this._c = new THREE.Color();
    this.time = 0;
  }

  spawn(pos, color, opts = {}) {
    const p = this.pool[this.cursor];
    this.cursor = (this.cursor + 1) % MAX;
    p.life = opts.life ?? 0.6;
    p.maxLife = p.life;
    p.pos.copy(pos);
    p.vel.set(opts.vx ?? 0, opts.vy ?? 0, opts.vz ?? 0);
    p.vel.x += (Math.random() - 0.5) * (opts.spread ?? 0);
    p.vel.y += (Math.random() - 0.3) * (opts.spreadY ?? 0);
    p.vel.z += (Math.random() - 0.5) * (opts.spread ?? 0);
    p.size = opts.size ?? 0.12;
    p.grow = opts.grow ?? 0;
    p.gravity = opts.gravity ?? 18;
    p.drag = opts.drag ?? 0.98;
    p.color.set(color);
    p.rot = Math.random() * 6;
    p.spin = (Math.random() - 0.5) * 8;
    this.mesh.setColorAt(this.cursor, p.color);
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
    return p;
  }

  burst(pos, color, count = 10, speed = 6, opts = {}) {
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const up = Math.random() * speed * 0.8 + (opts.up ?? 1.5);
      this.spawn(pos, color, {
        life: (opts.life ?? 0.7) * (0.55 + Math.random() * 0.8),
        vx: Math.cos(a) * speed * (0.4 + Math.random() * 0.7),
        vz: Math.sin(a) * speed * (0.4 + Math.random() * 0.7),
        vy: up,
        spread: speed * 0.4,
        spreadY: speed * 0.3,
        size: (opts.size ?? 0.13) * (0.6 + Math.random()),
        gravity: opts.gravity ?? 20,
        drag: opts.drag ?? 0.985,
        grow: opts.grow ?? 0,
      });
    }
  }

  muzzle(pos) {
    this.burst(pos, 0xffd66b, 5, 4.2, { life: 0.12, size: 0.08, gravity: 0, up: 0.6 });
    this.burst(pos, 0xff8a2a, 3, 2.5, { life: 0.1, size: 0.07, gravity: 0 });
    this.spawn(pos, 0xfff2b0, { life: 0.05, size: 0.5, gravity: 0, grow: 0 });
  }

  impact(pos, normal, color = 0xffd070) {
    this.burst(pos, color, 6, 3.4, { life: 0.3, size: 0.07, gravity: 14 });
    this.burst(pos, 0x9b968a, 3, 1.6, { life: 0.45, size: 0.1, gravity: 2, drag: 0.94 });
  }

  blood(pos) {
    this.burst(pos, 0xaa2626, 9, 3.8, { life: 0.8, size: 0.11, gravity: 24 });
    this.burst(pos, 0x641414, 4, 2.2, { life: 0.5, size: 0.09, gravity: 20 });
  }

  sparks(pos) {
    this.burst(pos, 0xffc35a, 7, 5, { life: 0.22, size: 0.055, gravity: 18, up: 1 });
  }

  smoke(pos, color = 0x6b6b6b, count = 2, scale = 1) {
    for (let i = 0; i < count; i++) {
      this.spawn(pos, color, {
        life: 0.9 + Math.random() * 0.8, size: 0.28 * scale, grow: 1.1 * scale,
        vx: (Math.random() - 0.5) * 0.7, vy: 1.0 + Math.random() * 0.7, vz: (Math.random() - 0.5) * 0.7,
        gravity: -0.4, drag: 0.97,
      });
    }
  }

  explosion(pos) {
    this.burst(pos, 0xffb23c, 26, 13, { life: 0.8, size: 0.4, gravity: 8, up: 5, drag: 0.97 });
    this.burst(pos, 0xff5a20, 20, 10, { life: 0.65, size: 0.32, gravity: 6, up: 4 });
    this.burst(pos, 0x2a2a2a, 18, 6, { life: 1.8, size: 0.6, gravity: -1.5, up: 3, drag: 0.95, grow: 1.4 });
    this.burst(pos, 0xfff2a0, 10, 8, { life: 0.25, size: 0.2, gravity: 4 });
  }

  splash(pos) {
    this.burst(pos, 0x9fd4ee, 8, 3.2, { life: 0.5, size: 0.09, gravity: 22, up: 2 });
  }

  tracer(a, b, color = 0xffe39a) {
    const i = this.tracerIdx;
    this.tracerIdx = (this.tracerIdx + 1) % MAX_TRACERS;
    this.tracerPos[i * 6] = a.x;
    this.tracerPos[i * 6 + 1] = a.y;
    this.tracerPos[i * 6 + 2] = a.z;
    this.tracerPos[i * 6 + 3] = b.x;
    this.tracerPos[i * 6 + 4] = b.y;
    this.tracerPos[i * 6 + 5] = b.z;
    const c = new THREE.Color(color);
    for (let k = 0; k < 2; k++) {
      this.tracerCol[i * 6 + k * 3] = c.r;
      this.tracerCol[i * 6 + k * 3 + 1] = c.g;
      this.tracerCol[i * 6 + k * 3 + 2] = c.b;
    }
    this.tracerLife[i] = 0.105;
    this.tracers.geometry.attributes.position.needsUpdate = true;
    this.tracers.geometry.attributes.color.needsUpdate = true;
  }

  update(dt) {
    this.time += dt;
    for (let i = 0; i < MAX; i++) {
      const p = this.pool[i];
      if (p.life <= 0) {
        this._m.makeScale(0, 0, 0);
        this.mesh.setMatrixAt(i, this._m);
        continue;
      }
      p.life -= dt;
      if (p.life <= 0) {
        this._m.makeScale(0, 0, 0);
        this.mesh.setMatrixAt(i, this._m);
        continue;
      }
      p.vel.y -= p.gravity * dt;
      p.vel.x *= p.drag;
      p.vel.z *= p.drag;
      p.vel.y *= p.drag === 0.98 ? 1 : 1;
      p.pos.addScaledVector(p.vel, dt);
      p.rot += p.spin * dt;
      p.size += p.grow * dt;
      const t = p.life / p.maxLife;
      const size = Math.max(0.001, p.size * (0.4 + t * 0.6));
      this._e.set(p.rot, p.rot * 0.7, 0);
      this._q.setFromEuler(this._e);
      this._s.set(size, size, size);
      this._m.compose(p.pos, this._q, this._s);
      this.mesh.setMatrixAt(i, this._m);
      this._c.copy(p.color);
      const dim = 0.45 + t * 0.55;
      this._c.multiplyScalar(dim);
      this.mesh.setColorAt(i, this._c);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;

    for (let i = 0; i < MAX_TRACERS; i++) {
      if (this.tracerLife[i] > 0) {
        this.tracerLife[i] -= dt;
        const t = Math.max(0, this.tracerLife[i] / 0.105);
        for (let k = 0; k < 6; k++) {
          this.tracerCol[i * 6 + k] *= (0.7 + t * 0.3);
        }
        if (this.tracerLife[i] <= 0) {
          for (let k = 0; k < 6; k++) this.tracerCol[i * 6 + k] = 0;
        }
      }
    }
    this.tracers.geometry.attributes.color.needsUpdate = true;
  }

  clear() {
    for (const p of this.pool) p.life = 0;
    for (let i = 0; i < MAX_TRACERS; i++) {
      this.tracerLife[i] = 0;
      for (let k = 0; k < 6; k++) this.tracerCol[i * 6 + k] = 0;
    }
    this.tracers.geometry.attributes.color.needsUpdate = true;
  }
}
