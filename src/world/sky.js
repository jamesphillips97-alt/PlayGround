import * as THREE from 'three';
import { stream, clamp, smoothstep } from '../rng.js';
import { SEA_LEVEL } from './height.js';

const DAY_LENGTH = 600; // seconds for a full 24h cycle

const C = {
  dayTop: new THREE.Color(0x3f7fbe),
  dayBot: new THREE.Color(0xc9e0ea),
  duskTop: new THREE.Color(0x3a2f5e),
  duskBot: new THREE.Color(0xf08b4a),
  nightTop: new THREE.Color(0x04060d),
  nightBot: new THREE.Color(0x111a2a),
  fogDay: new THREE.Color(0xb9d4e2),
  fogDusk: new THREE.Color(0xd98b62),
  fogNight: new THREE.Color(0x0a101c),
};

export class Environment {
  constructor(scene, seed, city, noiseTex, renderer) {
    this.scene = scene;
    this.seed = seed;
    this.city = city;
    this.renderer = renderer;
    this.dayTime = 0.335;
    this.nightFactor = 0;
    this.sunDir = new THREE.Vector3();
    this.moonDir = new THREE.Vector3();
    this.lightDir = new THREE.Vector3();
    this.time = 0;

    scene.background = new THREE.Color(0x9fc6da);
    scene.fog = new THREE.Fog(0xb9d4e2, 150, 430);

    // ---------------- sky dome ----------------
    this.skyUniforms = {
      topColor: { value: C.dayTop.clone() },
      bottomColor: { value: C.dayBot.clone() },
      sunColor: { value: new THREE.Color(0xfff1c4) },
      sunDir: { value: new THREE.Vector3(0.5, 0.5, 0.3) },
      nightMix: { value: 0 },
    };
    const skyMat = new THREE.ShaderMaterial({
      uniforms: this.skyUniforms,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      vertexShader: `
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform vec3 sunColor;
        uniform vec3 sunDir;
        uniform float nightMix;
        varying vec3 vDir;
        void main() {
          float h = clamp(vDir.y, -0.08, 1.0);
          vec3 col = mix(bottomColor, topColor, smoothstep(-0.02, 0.62, h));
          float sunAmt = max(dot(vDir, normalize(sunDir)), 0.0);
          float disc = pow(sunAmt, 1500.0) * 2.0;
          float glow = pow(sunAmt, 18.0) * 0.32;
          col += sunColor * (disc + glow) * (1.0 - nightMix * 0.75);
          float horizon = exp(-abs(h) * 12.0);
          col += bottomColor * horizon * 0.16;
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(900, 32, 20), skyMat);
    this.sky.frustumCulled = false;
    this.sky.renderOrder = -100;
    scene.add(this.sky);

    // ---------------- stars ----------------
    const starGeo = new THREE.BufferGeometry();
    const starPos = [];
    const srng = stream(seed, 'stars');
    for (let i = 0; i < 700; i++) {
      const a = srng() * Math.PI * 2;
      const y = srng();
      const r = 820;
      const rr = Math.sqrt(1 - y * y);
      starPos.push(Math.cos(a) * rr * r, y * r * 0.9 + 40, Math.sin(a) * rr * r);
    }
    starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
    this.starMat = new THREE.PointsMaterial({
      color: 0xdfe8ff, size: 2.4, sizeAttenuation: false,
      transparent: true, opacity: 0, depthWrite: false, fog: false,
    });
    this.stars = new THREE.Points(starGeo, this.starMat);
    this.stars.frustumCulled = false;
    this.stars.renderOrder = -90;
    scene.add(this.stars);

    // ---------------- moon ----------------
    this.moonMat = new THREE.MeshBasicMaterial({ color: 0xe6ecff, fog: false });
    this.moon = new THREE.Mesh(new THREE.SphereGeometry(13, 16, 12), this.moonMat);
    this.moon.frustumCulled = false;
    this.moon.renderOrder = -85;
    scene.add(this.moon);

    // ---------------- clouds ----------------
    this.cloudMat = new THREE.MeshLambertMaterial({
      color: 0xffffff, transparent: true, opacity: 0.86,
      fog: false, depthWrite: false,
    });
    const cloudGeo = new THREE.BoxGeometry(1, 1, 1);
    const crng = stream(seed, 'clouds');
    const count = 110;
    this.clouds = new THREE.InstancedMesh(cloudGeo, this.cloudMat, count);
    this.clouds.frustumCulled = false;
    this.cloudData = [];
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const s = new THREE.Vector3();
    const p = new THREE.Vector3();
    for (let i = 0; i < count; i++) {
      const w = crng.range(10, 44);
      const d = crng.range(8, 30);
      const h = crng.range(2.5, 7);
      p.set(crng.range(-700, 700), crng.range(105, 155), crng.range(-700, 700));
      s.set(w, h, d);
      m.compose(p, q, s);
      this.clouds.setMatrixAt(i, m);
      this.cloudData.push({ x: p.x, y: p.y, z: p.z, s: s.clone() });
    }
    this.clouds.instanceMatrix.needsUpdate = true;
    this.clouds.renderOrder = -80;
    scene.add(this.clouds);

    // ---------------- ocean ----------------
    this.waterTex = noiseTex.clone();
    this.waterTex.needsUpdate = true;
    this.waterTex.wrapS = this.waterTex.wrapT = THREE.RepeatWrapping;
    this.waterTex.repeat.set(48, 48);
    this.waterMat = new THREE.MeshPhongMaterial({
      color: 0x2f7da5,
      map: this.waterTex,
      transparent: true,
      opacity: 0.8,
      shininess: 90,
      specular: 0xbfe6ff,
      depthWrite: false,
    });
    const waterGeo = new THREE.PlaneGeometry(3600, 3600, 1, 1);
    this.water = new THREE.Mesh(waterGeo, this.waterMat);
    this.water.rotation.x = -Math.PI / 2;
    this.water.position.y = SEA_LEVEL + 0.02;
    this.water.renderOrder = 2;
    this.water.receiveShadow = false;
    scene.add(this.water);

    // ---------------- lights ----------------
    this.hemi = new THREE.HemisphereLight(0xbfd9ea, 0x4a463d, 0.85);
    scene.add(this.hemi);
    this.ambient = new THREE.AmbientLight(0xffffff, 0.17);
    scene.add(this.ambient);

    this.sun = new THREE.DirectionalLight(0xfff2d8, 2.0);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(1024, 1024);
    this.sun.shadow.camera.left = -95;
    this.sun.shadow.camera.right = 95;
    this.sun.shadow.camera.top = 95;
    this.sun.shadow.camera.bottom = -95;
    this.sun.shadow.camera.near = 1;
    this.sun.shadow.camera.far = 320;
    this.sun.shadow.bias = -0.0005;
    this.sun.shadow.normalBias = 0.035;
    scene.add(this.sun);
    this.sunTarget = new THREE.Object3D();
    scene.add(this.sunTarget);
    this.sun.target = this.sunTarget;

    this._facadeMats = [];
    this._lampMat = null;
    this._fountainMats = [];
    this.shadowsEnabled = true;
  }

  setCityMaterials(facadeMats, lampMat) {
    this._facadeMats = facadeMats || [];
    this._lampMat = lampMat;
  }

  setShadows(enabled) {
    this.shadowsEnabled = enabled;
    this.sun.castShadow = enabled;
  }

  update(dt, camera, playerPos) {
    this.time += dt;
    this.dayTime = (this.dayTime + dt / DAY_LENGTH) % 1;

    const ang = (this.dayTime - 0.25) * Math.PI * 2;
    this.sunDir.set(Math.cos(ang), Math.sin(ang), 0.34).normalize();
    this.moonDir.set(-Math.cos(ang), -Math.sin(ang), -0.28).normalize();

    const sy = this.sunDir.y;
    const dayF = smoothstep(-0.06, 0.24, sy);
    const duskF = Math.max(0, 1 - Math.abs(sy) / 0.32) * (sy > -0.35 ? 1 : 0);
    const nightF = 1 - smoothstep(-0.16, 0.10, sy);
    this.nightFactor = nightF;

    this.skyUniforms.topColor.value.copy(C.nightTop).lerp(C.dayTop, dayF);
    this.skyUniforms.topColor.value.lerp(C.duskTop, duskF * 0.62);
    this.skyUniforms.bottomColor.value.copy(C.nightBot).lerp(C.dayBot, dayF);
    this.skyUniforms.bottomColor.value.lerp(C.duskBot, duskF * 0.78);
    this.skyUniforms.sunDir.value.copy(this.sunDir);
    this.skyUniforms.nightMix.value = nightF;

    const fogCol = C.fogNight.clone().lerp(C.fogDay, dayF).lerp(C.fogDusk, duskF * 0.72);
    this.scene.fog.color.copy(fogCol);
    this.scene.fog.near = 120 + dayF * 55;
    this.scene.fog.far = 330 + dayF * 210;
    this.scene.background.copy(fogCol);

    this.hemi.intensity = 0.18 + dayF * 0.8;
    this.hemi.color.set(0x9fc6e8).lerp(new THREE.Color(0x1c2540), nightF);
    this.ambient.intensity = 0.08 + dayF * 0.16;
    this.sun.intensity = 0.12 + dayF * 2.05;
    this.sun.color.set(0xffcb8a).lerp(new THREE.Color(0xfff2d8), smoothstep(0.0, 0.35, sy));
    if (duskF > 0.2) this.sun.color.lerp(new THREE.Color(0xff9757), duskF * 0.5);

    // lights follow the action, camera never leaves the shadow box
    const lightDir = sy > -0.03 ? this.sunDir : this.moonDir;
    this.lightDir.copy(lightDir);
    const px = playerPos ? playerPos.x : 0;
    const pz = playerPos ? playerPos.z : 0;
    const py = playerPos ? playerPos.y : 0;
    this.sun.position.set(px + lightDir.x * 120, py + Math.max(0.1, lightDir.y) * 120, pz + lightDir.z * 120);
    this.sunTarget.position.set(px, py, pz);
    this.sun.castShadow = this.shadowsEnabled && dayF > 0.02;

    if (camera) {
      this.sky.position.copy(camera.position);
      this.stars.position.copy(camera.position);
      this.moon.position.copy(camera.position).addScaledVector(this.moonDir, 720);
      this.clouds.position.x = ((this.time * 2.2) % 500) - 250;
    }
    this.starMat.opacity = Math.pow(nightF, 1.3) * 0.95;
    this.moonMat.opacity = 1;
    this.moon.visible = nightF > 0.08;

    // clouds tint with the sun
    this.cloudMat.color.set(0xffffff).lerp(new THREE.Color(0x222a3c), nightF * 0.85);
    this.cloudMat.opacity = 0.8 - nightF * 0.24;

    this.waterTex.offset.x = this.time * 0.0025;
    this.waterTex.offset.y = this.time * 0.0015;
    this.waterMat.color.set(0x2f7da5).lerp(new THREE.Color(0x07121e), nightF * 0.78);
    this.waterMat.opacity = 0.78 - nightF * 0.08;

    for (const mat of this._facadeMats) {
      if (mat) mat.emissiveIntensity = nightF * 1.35;
    }
    if (this._lampMat) {
      this._lampMat.color.set(0x5a6068).lerp(new THREE.Color(0xffe2a0), nightF);
    }
  }

  getClock() {
    const totalMinutes = Math.floor(this.dayTime * 24 * 60);
    const h = Math.floor(totalMinutes / 60) % 24;
    const m = totalMinutes % 60;
    return { h, m, text: `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}` };
  }

  getDayLabel() {
    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    return days[Math.floor(this.dayTime * 7) % 7];
  }
}
