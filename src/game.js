import * as THREE from 'three';
import { World } from './world/index.js';
import { Player, CameraRig } from './player.js';
import { VehicleManager } from './vehicles.js';
import { PedManager } from './peds.js';
import { ItemManager } from './items.js';
import { MissionSystem } from './missions.js';
import { HUD } from './hud.js';
import { Input } from './input.js';
import { Particles } from './particles.js';
import { audio } from './audio.js';
import { stream, clamp, formatSeed, randomSeed } from './rng.js';

const $ = (id) => document.getElementById(id);
const SAVE_SEED = 'gtb.seed';
const SETTINGS_MUTE = 'gtb.muted';

function nextFrame() {
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * GRAND THEFT BLOCK — central game orchestrator.
 *
 * Owns the renderer, scene, session state and the menu/playing/paused/map/dead
 * state machine. Every runtime system is created against a seeded World, so
 * replacing the seed rebuilds the whole county deterministically.
 */
export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.state = 'boot';
    this.seed = this.readSeed();
    this.menuTime = 0;
    this.time = 0;
    this.lastTime = 0;
    this.cameraShake = 0;
    this.cameraZoomDelta = 0;
    this.respawnTimer = 0;
    this._deathTick = 0;
    this._deathLoss = 0;
    this._busy = false;
    this._building = false;
    this._promptKey = null;
    this._decayTimer = 0;
    this._policeTimer = 3;
    this._policeClearTimer = 0;
    this._lastDistrict = null;
    this._districtBannerAt = -99;
    this._fadeTimer = null;
    this._mapReturn = 'playing';

    this.isMobile = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    document.body.classList.toggle('mobile', this.isMobile);

    this.muted = localStorage.getItem(SETTINGS_MUTE) === '1';
    this.audio = audio;
    this.audio.setMuted(this.muted);

    // ------------------------------------------------------------------ renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, this.isMobile ? 1.6 : 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight, false);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.camera = new THREE.PerspectiveCamera(
      64,
      window.innerWidth / Math.max(1, window.innerHeight),
      0.1,
      1500
    );
    this.camera.position.set(0, 60, 120);

    this.scene = null;
    this.world = null;
    this.player = null;
    this.vehicles = null;
    this.peds = null;
    this.items = null;
    this.missions = null;
    this.particles = null;

    this.hud = new HUD(this);
    this.input = new Input(canvas, this);
    this.cameraRig = new CameraRig(this, this.camera);

    this.seedInput = $('seed-input');
    this.seedPreview = $('seed-preview');
    this.seedWorldTag = $('seed-world-tag');
    this.startScreen = $('start-screen');
    this.loading = $('loading');
    this.hudEl = $('hud');
    this.mobileControls = $('mobile-controls');
    this.pauseScreen = $('pause-screen');
    this.mapScreen = $('map-screen');
    this.deathScreen = $('death-screen');
    this.fadeEl = $('fade');

    this.seedInput.value = this.seed;
    this.refreshSeedUI();
    this.bindUI();
    this.bindResize();

    this.loop = this.loop.bind(this);
  }

  // =================================================================== boot
  readSeed() {
    let fromHash = null;
    let fromQuery = null;
    try {
      fromHash = new URLSearchParams(location.hash.replace(/^#/, '')).get('seed');
      fromQuery = new URLSearchParams(location.search).get('seed');
    } catch {
      /* ignore malformed URL */
    }
    const saved = localStorage.getItem(SAVE_SEED);
    return formatSeed(fromHash || fromQuery || saved || 'san-voxel-01');
  }

  async init() {
    try {
      this.showLoading(true);
      this.setLoading(0.03, 'CARVING THE COASTLINE…');
      await this.buildSession(this.seed);
      this.setLoading(1, 'READY');
      await sleep(180);
      this.showLoading(false);
      this.state = 'menu';
      this.startScreen.classList.remove('hidden', 'closing');
      this.hudEl.classList.add('hidden');
      this.mobileControls.classList.add('hidden');
      this.player.mesh.visible = false;
      this.setMenuCamera(0);
      this.refreshSeedUI();
      this.lastTime = performance.now();
      window.__gameReady = true;
      requestAnimationFrame(this.loop);

      const q = new URLSearchParams(location.search);
      if (q.get('play') === '1' || new URLSearchParams(location.hash.replace(/^#/, '')).get('play') === '1') {
        await this.startGame();
      }
    } catch (err) {
      console.error('[GRAND THEFT BLOCK] boot failed', err);
      this.setLoading(1, 'GENERATION FAILED — CHECK THE CONSOLE');
      window.__gameError = String(err && err.stack ? err.stack : err);
      this.state = 'error';
    }
  }

  // =============================================================== session
  async buildSession(seed) {
    if (this._building) return;
    this._building = true;
    this.state = 'loading';
    this.showLoading(true);
    this.setLoading(0.06, 'READING THE SEED…');
    await nextFrame();

    this.disposeSession();
    this.scene = new THREE.Scene();
    this.seed = formatSeed(seed);
    this.seedInput.value = this.seed;

    this.setLoading(0.16, 'CARVING THE COASTLINE…');
    await nextFrame();
    this.world = new World(this.scene, this.seed, this.renderer);

    this.setLoading(0.52, 'RAISING THE SKYLINE…');
    await nextFrame();
    this.particles = new Particles(this.scene);
    this.player = new Player(this, this.world.city.spawn);
    this.player.mesh.visible = false;
    this.trafficRng = stream(this.seed, 'traffic-ai');
    this._policeRng = stream(this.seed, 'police');

    this.vehicles = new VehicleManager(this);
    this.peds = new PedManager(this);
    this.items = new ItemManager(this);
    this.missions = new MissionSystem(this);

    this.setLoading(0.74, 'SPAWNING TRAFFIC…');
    await nextFrame();
    this.vehicles.populate();
    this.peds.populate();

    this.time = 0;
    this.menuTime = 0;
    this.cameraShake = 0;
    this.cameraZoomDelta = 0;
    this.respawnTimer = 0;
    this._deathTick = 0;
    this._decayTimer = 0;
    this._policeTimer = 3;
    this._policeClearTimer = 0;
    this._lastDistrict = null;
    this._districtBannerAt = -99;
    this._promptKey = null;
    this.cameraRig.initialized = false;
    this.hud._started = false;
    this.hud.cache.location = null;
    this.hud.cache.prompt = null;
    this.hud.cache.inVehicle = null;
    this.hud.cache.missionKey = null;
    this.hud.setPrompt('');

    this.setLoading(0.94, 'PAVING THE STREETS…');
    await nextFrame();
    this.setLoading(1, 'READY');
    this.refreshSeedUI();
    this._building = false;
  }

  disposeSession() {
    if (this.vehicles) {
      while (this.vehicles.list.length) this.vehicles.remove(this.vehicles.list[0]);
    }
    if (this.peds) this.peds.clear();
    if (this.items) this.items.clear();
    if (this.missions) this.missions.clear();
    if (this.player && this.scene) this.scene.remove(this.player.mesh);

    if (this.particles && this.scene) {
      const p = this.particles;
      this.scene.remove(p.mesh);
      this.scene.remove(p.tracers);
      p.mesh.geometry.dispose();
      p.mesh.material.dispose();
      p.tracers.geometry.dispose();
      p.tracerMat.dispose();
    }

    if (this.world) this.world.dispose();

    this.world = null;
    this.player = null;
    this.vehicles = null;
    this.peds = null;
    this.items = null;
    this.missions = null;
    this.particles = null;
    this.trafficRng = null;
    this._policeRng = null;
    this.scene = null;
  }

  // ================================================================== menu
  setMenuCamera(dt) {
    if (!this.world) return;
    const city = this.world.city;
    this.menuTime += dt;
    const a = this.menuTime * 0.055 + 0.72;
    const radius = 205;
    const height = this.world.city.groundY + 72 + Math.sin(this.menuTime * 0.33) * 5;
    this.camera.position.set(
      city.cx + Math.cos(a) * radius,
      height,
      city.cz + Math.sin(a) * radius
    );
    this.camera.up.set(0, 1, 0);
    this.camera.lookAt(city.cx, city.groundY + 20, city.cz);
    if (Math.abs(this.camera.fov - 54) > 0.01) {
      this.camera.fov = 54;
      this.camera.updateProjectionMatrix();
    }
    this.camera.updateMatrixWorld();
  }

  async startGame() {
    if (this._busy || this.state === 'error') return;
    this._busy = true;
    this.playButton?.classList.add('busy');
    try {
      this.audio.init();
      const requested = formatSeed(this.seedInput.value || this.seed);
      this.seedInput.value = requested;
      if (!this.world || requested !== this.seed) {
        await this.buildSession(requested);
      }
      this.enterGame();
      this.refreshSeedUI();
    } catch (err) {
      console.error('[GRAND THEFT BLOCK] start failed', err);
      this.setLoading(1, 'GENERATION FAILED — CHECK THE CONSOLE');
      window.__gameError = String(err && err.stack ? err.stack : err);
    } finally {
      this._busy = false;
      this.playButton?.classList.remove('busy');
    }
  }

  enterGame() {
    if (!this.world) return;
    this.state = 'playing';
    this.showLoading(false);
    this.startScreen.classList.add('closing');
    this.hudEl.classList.remove('hidden');
    this.hud.showDeath(false);
    this.hud.showMap(false);
    this.pauseScreen.classList.add('hidden');
    this.mapScreen.classList.add('hidden');
    this.deathScreen.classList.add('hidden');
    this.mobileControls.classList.toggle('hidden', !this.isMobile);
    this.player.mesh.visible = this.player.mode === 'foot';
    this.hud.setInVehicle(this.player.mode === 'vehicle');
    this.hud.el.hint.style.opacity = '1';
    this.hud._started = true;
    this.hud.cache.location = null;
    this.hud.cache.inVehicle = null;
    this.hud.cache.prompt = null;
    this.hud.setPrompt('');
    this.cameraRig.initialized = false;
    this.input.clearFrame();
    this.input.pressed.pause = false;

    this.audio.init();
    this.audio.setMuted(this.muted);
    this._updateSoundButton();
    this.updateUrlSeed();
    localStorage.setItem(SAVE_SEED, this.seed);

    this.notify('WELCOME TO SAN VOXEL', `WORLD SEED // ${this.seed.toUpperCase()}`, '', 4200);
    const district = this.world.city.districtAt(this.player.pos.x, this.player.pos.z);
    this._lastDistrict = district;
    this.hud.showBanner(district, 'SAN VOXEL COUNTY');
    this.flashFade();
    document.body.dataset.state = 'playing';
  }

  async quitToMenu() {
    if (this._busy) return;
    this._busy = true;
    this.state = 'menu';
    this.hideGameUI();
    this.startScreen.classList.remove('closing', 'hidden');
    this.audio.updateEngine(0, 0, false);
    this.audio.updateSiren(false, this.time);
    if (document.exitPointerLock) document.exitPointerLock();

    this.seedInput.value = this.seed;
    this.refreshSeedUI();
    this.showLoading(true);
    try {
      await this.buildSession(this.seed);
      this.state = 'menu';
      this.setLoading(1, 'READY');
      await sleep(140);
      this.showLoading(false);
      this.player.mesh.visible = false;
      this.setMenuCamera(0);
    } catch (err) {
      console.error('[GRAND THEFT BLOCK] rebuild failed', err);
      this.showLoading(false);
    }
    this._busy = false;
    document.body.dataset.state = 'menu';
  }

  hideGameUI() {
    this.hudEl.classList.add('hidden');
    this.mobileControls.classList.add('hidden');
    this.pauseScreen.classList.add('hidden');
    this.mapScreen.classList.add('hidden');
    this.deathScreen.classList.add('hidden');
    this.hud.showMap(false);
    this.hud.showDeath(false);
    this.hud.setPrompt('');
  }

  // ================================================================= pause
  openPause() {
    if (this.state !== 'playing') return;
    this.state = 'paused';
    this.pauseScreen.classList.remove('hidden');
    this.mobileControls.classList.add('hidden');
    this.hud.setPauseStats(this.player, this.seed, this.player.wanted);
    this.hud.setPrompt('');
    this.input.shoot = false;
    this.input.aim = false;
    this.audio.updateEngine(0, 0, false);
    this.audio.updateSiren(false, this.time);
    if (document.exitPointerLock) document.exitPointerLock();
    document.body.dataset.state = 'paused';
  }

  resumeGame() {
    if (this.state !== 'paused') return;
    this.state = 'playing';
    this.pauseScreen.classList.add('hidden');
    this.mobileControls.classList.toggle('hidden', !this.isMobile);
    this.input.clearFrame();
    this.input.pressed.pause = false;
    document.body.dataset.state = 'playing';
  }

  openMap(returnState = 'playing') {
    if (!this.world) return;
    this._mapReturn = returnState === 'paused' ? 'paused' : 'playing';
    this.state = 'map';
    this.pauseScreen.classList.add('hidden');
    this.mapScreen.classList.remove('hidden');
    this.mobileControls.classList.add('hidden');
    this.hud.setPrompt('');
    this.hud.showMap(true);
    this.input.shoot = false;
    this.input.aim = false;
    if (document.exitPointerLock) document.exitPointerLock();
    document.body.dataset.state = 'map';
  }

  closeMap() {
    if (this.state !== 'map') return;
    this.hud.showMap(false);
    if (this._mapReturn === 'paused') {
      this.state = 'paused';
      this.pauseScreen.classList.remove('hidden');
      this.hud.setPauseStats(this.player, this.seed, this.player.wanted);
    } else {
      this.state = 'playing';
      this.mobileControls.classList.toggle('hidden', !this.isMobile);
      this.input.clearFrame();
    }
    document.body.dataset.state = this.state;
  }

  toggleSound() {
    this.muted = !this.muted;
    this.audio.setMuted(this.muted);
    localStorage.setItem(SETTINGS_MUTE, this.muted ? '1' : '0');
    this._updateSoundButton();
    if (!this.muted) {
      this.audio.init();
      this.audio.beep(720, 0.08, 0.1);
    }
  }

  _updateSoundButton() {
    const b = $('sound-btn');
    if (b) b.textContent = `SOUND: ${this.muted ? 'OFF' : 'ON'}`;
  }

  // ================================================================= death
  killPlayer() {
    if (!this.player || this.player.dead || this.state === 'dead') return;
    this.player.dead = true;
    this.player.hp = 0;
    this.exitVehicle(true);
    this.state = 'dead';
    this.respawnTimer = 4.2;
    this._deathTick = 0;
    const loss = Math.min(this.player.cash, 100 + Math.floor(this.player.cash * 0.08));
    this.player.cash = Math.max(0, this.player.cash - loss);
    this._deathLoss = loss;
    this.hud.showDeath(true, loss, 'RESPAWNING…');
    this.hud.setPrompt('');
    this.mobileControls.classList.add('hidden');
    this.input.shoot = false;
    this.input.aim = false;
    this.audio.updateEngine(0, 0, false);
    this.audio.updateSiren(false, this.time);
    this.audio.fail();
    if (document.exitPointerLock) document.exitPointerLock();
    document.body.dataset.state = 'dead';
  }

  respawn() {
    const p = this.player;
    if (!p) return;
    const hospital = this.world.city.hospital;
    const fixed = this.world.resolveCircle(hospital.x, hospital.z, 0.5);
    p.dead = false;
    p.hp = p.maxHp;
    p.armor = 0;
    p.wanted = 0;
    p.heat = 0;
    p.lastCrime = -999;
    p.invuln = 3;
    p.vel.set(0, 0, 0);
    p.pos.set(fixed.x, this.world.groundAt(fixed.x, fixed.z) + 0.02, fixed.z);
    p.yaw = 0;
    p.cameraYaw = 0;
    p.cameraPitch = -0.13;
    p.mode = 'foot';
    p.vehicle = null;
    p.mesh.visible = true;
    p.mesh.position.copy(p.pos);
    p.mesh.rotation.set(0, 0, 0);
    p.mesh.userData.rig.legs.forEach((l) => { l.rotation.x = 0; });
    p.mesh.userData.rig.arms.forEach((a) => { a.rotation.x = 0; });
    this.cameraRig.initialized = false;
    this.hud.showDeath(false);
    this.hud.setInVehicle(false);
    this.hud.cache.inVehicle = null;
    this.hud.cache.location = null;
    this.hud.setPrompt('');
    this.hud.showBanner('HOSPITAL', 'PATCHED UP — WANTED CLEARED');
    this.peds.alert(p.pos, 0);
    this.state = 'playing';
    this.respawnTimer = 0;
    this._policeTimer = 5;
    this._decayTimer = 0;
    this._policeClearTimer = 0;
    this.mobileControls.classList.toggle('hidden', !this.isMobile);
    this._lastDistrict = this.world.city.districtAt(p.pos.x, p.pos.z);
    this.input.clearFrame();
    document.body.dataset.state = 'playing';
  }

  // ================================================================ combat
  handleShooting() {
    const p = this.player;
    if (!this.input.shoot || p.mode !== 'foot' || p.dead) return;
    if (p.reloadTimer > 0) return;
    if (p.ammo <= 0) {
      if (p.reserve > 0) p.reload(this);
      return;
    }
    if (!p.canShoot()) return;

    const origin = this.camera.position.clone();
    const dir = new THREE.Vector3();
    this.camera.getWorldDirection(dir);

    const maxDist = 145;
    const stat = this.world.raycastStatic(origin, dir, maxDist, true);
    let hit = { type: 'static', dist: stat.dist, point: stat.point };

    const pedHit = this.peds.raycast(origin, dir, Math.min(maxDist, hit.dist));
    if (pedHit && pedHit.dist < hit.dist) {
      hit = { type: 'ped', dist: pedHit.dist, point: pedHit.point, ped: pedHit.ped, headshot: pedHit.headshot };
    }
    const carHit = this.vehicles.raycast(origin, dir, Math.min(maxDist, hit.dist));
    if (carHit && carHit.dist < hit.dist) {
      hit = { type: 'vehicle', dist: carHit.dist, point: carHit.point, vehicle: carHit.vehicle };
    }

    p.consumeShot(this);
    const start = p.muzzle.clone();
    this.particles.tracer(start, hit.point, 0xffe6a3);

    if (hit.type === 'ped') {
      const damage = hit.headshot ? 88 : 44;
      const killed = hit.ped.hit(damage, this);
      if (killed) {
        this.particles.blood(hit.point);
        this.registerCrime(hit.ped.isCop ? 4 : 3, hit.ped.isCop ? 'COP KILLER' : 'HOMICIDE');
        if (hit.headshot) this.notify('HEADSHOT', 'Clean shot', '', 1200, true);
        this.missions?.onPedKilled(hit.ped);
      } else {
        this.registerCrime(hit.ped.isCop ? 2 : 1, 'ASSAULT WITH A FIREARM');
      }
      this.peds.alert(hit.ped.pos, 34);
      return;
    }

    if (hit.type === 'vehicle') {
      hit.vehicle.damage(30, this);
      this.particles.impact(hit.point, new THREE.Vector3(0, 1, 0), 0xffc35a);
      if (!hit.vehicle.destroyed) this.particles.sparks(hit.point);
      this.registerCrime(hit.vehicle.police ? 2 : 1, 'RECKLESS DISCHARGE');
      return;
    }

    this.particles.impact(hit.point, new THREE.Vector3(0, 1, 0), 0xcfc6b0);
    const near = this.peds.list.some(
      (q) => !q.dead && Math.hypot(q.pos.x - p.pos.x, q.pos.z - p.pos.z) < 34
    );
    if (near) this.registerCrime(1, 'ILLEGAL DISCHARGE');
  }

  enterVehicle(v) {
    if (!v || v.destroyed || this.player.mode === 'vehicle') return;
    const carjack = v.driver === 'ai';
    this.player.enterVehicle(v, this);
    this.cameraRig.initialized = false;
    const crime = v.police ? 3 : carjack ? 2 : 0;
    if (crime > 0) this.registerCrime(crime, v.police ? 'POLICE VEHICLE STOLEN' : 'GRAND THEFT AUTO');
    this.missions?.onVehicleEntered(v);
    this.peds.alert(v.pos, 26);
    this.notify(
      carjack ? 'VEHICLE STOLEN' : 'VEHICLE',
      this.vehicleName(v) + (v.police ? ' // WANTED' : ''),
      carjack ? 'bad' : '',
      2000,
      true
    );
    this._promptKey = null;
  }

  exitVehicle(forced = false) {
    if (!this.player || this.player.mode !== 'vehicle') return;
    this.player.exitVehicle(this);
    if (forced) this.player.invuln = Math.max(this.player.invuln, 1.5);
    this.cameraRig.initialized = false;
    this._promptKey = null;
  }

  vehicleName(v) {
    if (v.police) return 'POLICE CRUISER';
    if (v.type === 'van') return 'BOX VAN';
    if (v.type === 'coupe') return 'COUPE';
    return 'SEDAN';
  }

  // ================================================================ wanted
  registerCrime(stars, label = 'CRIME') {
    const p = this.player;
    if (!p || p.dead || this.state !== 'playing') return;
    const prev = p.wanted;
    p.wanted = clamp(Math.max(p.wanted, stars), 0, 5);
    p.heat += stars;
    p.lastCrime = this.time;
    this._decayTimer = 0;
    this._policeTimer = Math.min(this._policeTimer, 1.6);
    if (p.wanted > prev) {
      this.notify('WANTED LEVEL UP', `${label} — ★${'★'.repeat(Math.max(0, p.wanted - 1))}`.trim(), 'bad', 3200);
      this.audio.beep(240, 0.12, 0.12, 'sawtooth');
    }
  }

  updateWanted(dt) {
    const p = this.player;
    if (p.dead) return;

    if (p.wanted > 0) {
      this._policeClearTimer = 0;
      const cop = this.peds.nearestCop(p.pos);
      const copDist = cop ? Math.hypot(cop.pos.x - p.pos.x, cop.pos.z - p.pos.z) : Infinity;
      if (this.time - p.lastCrime > 8 && copDist > 38) {
        this._decayTimer += dt;
        if (this._decayTimer > 10) {
          this._decayTimer = 0;
          p.wanted = Math.max(0, p.wanted - 1);
          p.heat = 0;
          if (p.wanted === 0) {
            this.notify('WANTED CLEARED', 'The heat is off.', 'good', 3600);
            this._releasePolice();
          } else {
            this.notify('HEAT FADING', `Wanted level down to ★${'★'.repeat(p.wanted)}`, 'good', 2600);
          }
        }
      } else {
        this._decayTimer = 0;
      }

      this._policeTimer -= dt;
      if (this._policeTimer <= 0) {
        const maxCars = Math.min(4, 1 + Math.ceil(p.wanted * 0.75));
        let cars = 0;
        for (const v of this.vehicles.list) if (v.police && !v.destroyed) cars++;
        if (cars < maxCars) {
          const spawned = this.vehicles.spawnPoliceCar(p.pos, this._policeRng);
          this._policeTimer = spawned ? Math.max(3.2, 8.5 - p.wanted * 1.1) : 3.5;
        } else {
          this._policeTimer = 2.4;
        }
      }
    } else {
      this._policeClearTimer += dt;
      if (this._policeClearTimer > 14) {
        this._policeClearTimer = 0;
        for (const v of [...this.vehicles.list]) {
          if (!v.police || v.driver === 'player') continue;
          if (v.driver === 'ai' && Math.hypot(v.pos.x - p.pos.x, v.pos.z - p.pos.z) < 90) continue;
          this.vehicles.remove(v);
        }
      }
    }
  }

  _releasePolice() {
    for (const v of this.vehicles.list) {
      if (!v.police || v.driver !== 'ai') continue;
      v.driver = null;
      v.ai = null;
      v.speed = 0;
    }
  }

  spawnCopFromCar(car) {
    if (!car || this.time < (car._copCooldown || 0)) return;
    car._copCooldown = this.time + 4.5;
    let cops = 0;
    for (const p of this.peds.list) if (p.isCop && !p.dead) cops++;
    if (cops >= 9) return;
    const side = Math.sin(car.yaw) >= 0 ? 1 : -1;
    const x = car.pos.x + Math.cos(car.yaw) * 2.1 * side;
    const z = car.pos.z - Math.sin(car.yaw) * 2.1 * side;
    const fixed = this.world.resolveCircle(x, z, 0.4);
    this.peds.spawnCop({ x: fixed.x, z: fixed.z });
  }

  spawnCashPickup(x, z, amount) {
    this.items?.spawnCash(x, z, amount);
  }

  notify(title, text = '', kind = '', duration = 4200, small = false) {
    this.hud.notify(title, text, kind, duration, small);
  }

  onDistrictChange(name) {
    if (!name) return;
    if (!this._lastDistrict) {
      this._lastDistrict = name;
      return;
    }
    if (name === this._lastDistrict) return;
    this._lastDistrict = name;
    if (this.time - this._districtBannerAt < 7) return;
    this._districtBannerAt = this.time;
    this.hud.showBanner(name, 'SAN VOXEL COUNTY');
    this.audio.beep(520, 0.08, 0.07);
  }

  // ============================================================== gameplay
  updatePlaying(dt, pressed, look) {
    const p = this.player;
    this.time += dt;
    p.processLook(look, this);

    // driving first so the camera follows this frame's car transform
    this.vehicles.update(dt);
    p.update(dt, this, this.input);

    if (p.mode === 'vehicle' && p.vehicle) this.peds.killFromVehicle(p.vehicle);

    if (this.input.shoot && p.mode === 'foot') this.handleShooting();

    if (this.input.sprint) { /* held state handled by Player */ }
    if (pressed.reload) p.reload(this);
    if (pressed.horn && p.mode === 'vehicle') this.audio.horn();
    if (pressed.camera) this.cameraZoomDelta = p.cameraZoom > 1.05 ? -2.2 : 2.2;

    if (pressed.interact) {
      if (p.mode === 'vehicle') {
        this.exitVehicle(false);
      } else {
        const job = this.missions.canInteract();
        if (job) {
          this.missions.interact(job);
          this._promptKey = null;
        } else {
          const v = this.vehicles.nearest(p.pos, 4.7);
          if (v) this.enterVehicle(v);
        }
      }
    }

    this.peds.update(dt);
    this.items.update(dt);
    this.missions.update(dt);
    this.updateWanted(dt);
    this.updateInteractionPrompt();
    this.cameraRig.update(dt, p);
    this.world.update(dt, this.camera, p.pos);
    this.particles.update(dt);
    this.hud.update(dt);
    this.updateAudio();
  }

  updateDead(dt) {
    this.time += dt;
    this.respawnTimer -= dt;
    this._deathTick -= dt;
    if (this._deathTick <= 0) {
      this._deathTick = 0.25;
      const secs = Math.max(0, Math.ceil(this.respawnTimer));
      const el = $('death-respawn');
      if (el) el.textContent = secs > 0 ? `RESPAWNING IN ${secs}…` : 'RESPAWNING…';
    }
    this.particles?.update(dt);
    this.vehicles?.update(dt);
    this.peds?.update(dt);
    this.world?.env.update(dt, this.camera, this.player.pos);
    if (this.respawnTimer <= 0) this.respawn();
  }

  updateMenu(dt) {
    if (!this.world) return;
    this.setMenuCamera(dt);
    const city = this.world.city;
    const focus = { x: city.cx, y: city.groundY, z: city.cz };
    this.world.env.update(dt, this.camera, focus);
    this.world.chunks.update(focus);
    this.missions?.update(dt);
    this.camera.updateMatrixWorld();
  }

  updateInteractionPrompt() {
    const p = this.player;
    let html = '';
    if (p.mode === 'vehicle') {
      html = '<span class="key">E</span> EXIT VEHICLE';
    } else {
      const job = this.missions.canInteract();
      if (job) {
        html = `<span class="key">E</span> START JOB — ${job.name}`;
      } else {
        const v = this.vehicles.nearest(p.pos, 4.7);
        if (v) {
          const verb = v.driver === 'ai' ? 'CARJACK' : 'ENTER';
          html = `<span class="key">E</span> ${verb} ${this.vehicleName(v)}`;
        }
      }
    }
    if (html !== this._promptKey) {
      this._promptKey = html;
      this.hud.setPrompt(html);
    }
  }

  updateAudio() {
    const p = this.player;
    const driving = p.mode === 'vehicle' && p.vehicle;
    this.audio.updateEngine(
      driving ? p.vehicle.speed : 0,
      driving ? this.input.forward : 0,
      !!driving
    );
    this.audio.updateSiren(p.wanted > 0, this.time);
  }

  // ================================================================== loop
  loop(now) {
    requestAnimationFrame(this.loop);
    if (!this.lastTime) this.lastTime = now;
    const dt = clamp((now - this.lastTime) / 1000, 0, 0.05);
    this.lastTime = now;

    const { pressed, look } = this.input.consume();

    if (this.state === 'playing') {
      if (pressed.pause) {
        this.openPause();
      } else if (pressed.map) {
        this.openMap('playing');
      } else {
        if (pressed.toggleSound) this.toggleSound();
        this.updatePlaying(dt, pressed, look);
      }
    } else if (this.state === 'paused') {
      if (pressed.pause) this.resumeGame();
      else if (pressed.map) this.openMap('paused');
      else if (pressed.toggleSound) this.toggleSound();
    } else if (this.state === 'map') {
      if (pressed.pause || pressed.map) this.closeMap();
    } else if (this.state === 'dead') {
      this.updateDead(dt);
    } else if (this.state === 'menu') {
      if (pressed.toggleSound) this.toggleSound();
      this.updateMenu(dt);
    }

    if (this.scene) {
      this.renderer.render(this.scene, this.camera);
    } else {
      this.renderer.clear();
    }
  }

  // ==================================================================== UI
  bindUI() {
    this.playButton = $('play-btn');
    this.playButton.addEventListener('click', () => this.startGame());

    $('seed-random')?.addEventListener('click', () => {
      this.audio.init();
      this.audio.beep(760, 0.06, 0.08);
      this.seedInput.value = randomSeed();
      this.refreshSeedUI();
      this.seedInput.focus();
    });

    this.seedInput.addEventListener('input', () => this.refreshSeedUI());
    this.seedInput.addEventListener('change', () => this.refreshSeedUI());
    this.seedInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.seedInput.blur();
        this.startGame();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      if (e.code === 'Enter' && this.state === 'menu' && !this._busy) {
        e.preventDefault();
        this.startGame();
      }
    });

    $('resume-btn')?.addEventListener('click', () => this.resumeGame());
    $('map-btn')?.addEventListener('click', () => this.openMap('paused'));
    $('map-close')?.addEventListener('click', () => this.closeMap());
    $('quit-btn')?.addEventListener('click', () => this.quitToMenu());
    $('sound-btn')?.addEventListener('click', () => this.toggleSound());
    this._updateSoundButton();

    this.mapScreen.addEventListener('click', (e) => {
      if (e.target === this.mapScreen) this.closeMap();
    });
  }

  bindResize() {
    window.addEventListener('resize', () => this.onResize());
    window.addEventListener('orientationchange', () => setTimeout(() => this.onResize(), 120));
  }

  onResize() {
    const w = window.innerWidth;
    const h = Math.max(1, window.innerHeight);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, this.isMobile ? 1.6 : 2));
    this.renderer.setSize(w, h, false);
  }

  refreshSeedUI() {
    const requested = formatSeed(this.seedInput.value || this.seed);
    if (this.seedPreview) this.seedPreview.textContent = `SEED // ${requested.toUpperCase()}`;
    if (!this.seedWorldTag) return;
    if (!this.world) {
      this.seedWorldTag.textContent = 'GENERATING…';
      this.seedWorldTag.style.color = 'rgba(255,255,255,.45)';
    } else if (requested === this.seed) {
      this.seedWorldTag.textContent = 'PREVIEW LOADED';
      this.seedWorldTag.style.color = '#ffe08a';
    } else {
      this.seedWorldTag.textContent = 'NEW SEED — PRESS PLAY';
      this.seedWorldTag.style.color = '#72e08a';
    }
  }

  updateUrlSeed() {
    try {
      const url = new URL(location.href);
      url.hash = `seed=${encodeURIComponent(this.seed)}`;
      history.replaceState(null, '', url);
    } catch {
      /* ignore */
    }
  }

  setLoading(progress, text) {
    const bar = $('loader-bar');
    const label = $('loader-text');
    if (bar) bar.style.width = `${clamp(progress, 0, 1) * 100}%`;
    if (label && text) label.textContent = text;
  }

  showLoading(show) {
    if (!this.loading) this.loading = $('loading');
    this.loading.classList.toggle('hidden', !show);
    if (show) this.setLoading(0, '');
  }

  flashFade() {
    if (!this.fadeEl) return;
    clearTimeout(this._fadeTimer);
    this.fadeEl.classList.add('on');
    this._fadeTimer = setTimeout(() => this.fadeEl.classList.remove('on'), 90);
  }
}
