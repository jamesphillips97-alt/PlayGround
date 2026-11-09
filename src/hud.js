import { clamp } from './rng.js';

const $ = (id) => document.getElementById(id);
const MAP_SIZE = 1200;

export class HUD {
  constructor(game) {
    this.game = game;
    this.el = {
      hud: $('hud'),
      location: $('location'),
      seed: $('seed-display'),
      stars: $('wanted-stars'),
      wantedRow: $('wanted-row'),
      cash: $('cash'),
      clock: $('clock'),
      day: $('day-label'),
      healthBar: $('health-bar'),
      armorBar: $('armor-bar'),
      healthNum: $('health-num'),
      armorNum: $('armor-num'),
      ammo: $('ammo'),
      weapon: $('weapon-name'),
      minimap: $('minimap'),
      minimapN: $('minimap-n'),
      prompt: $('prompt'),
      notifications: $('notifications'),
      missionBox: $('mission-box'),
      missionKicker: $('mission-kicker'),
      missionTitle: $('mission-title'),
      missionObjective: $('mission-objective'),
      missionTimer: $('mission-timer'),
      vehiclePanel: $('vehicle-panel'),
      speedNum: $('speed-num'),
      speedBar: $('speed-bar'),
      gear: $('gear'),
      crosshair: $('crosshair'),
      banner: $('big-banner'),
      bannerTitle: $('big-banner-title'),
      bannerSub: $('big-banner-sub'),
      hint: $('hint'),
      damageFlash: $('damage-flash'),
      death: $('death-screen'),
      deathLoss: $('death-loss'),
      deathRespawn: $('death-respawn'),
      mapScreen: $('map-screen'),
      bigmap: $('bigmap'),
      mapTitle: $('map-title'),
      pauseCash: $('pause-cash'),
      pauseWanted: $('pause-wanted'),
      pauseSeed: $('pause-seed'),
    };
    this.minimapCtx = this.el.minimap.getContext('2d');
    this.bigmapCtx = this.el.bigmap.getContext('2d');
    this.stars = [];
    for (let i = 0; i < 5; i++) {
      const s = document.createElement('span');
      s.className = 'star';
      s.textContent = '★';
      this.el.stars.appendChild(s);
      this.stars.push(s);
    }
    this.el.minimapN.style.display = 'none';
    this.cache = {
      cash: null, hp: null, armor: null, ammo: null, wanted: null,
      location: null, prompt: null, missionKey: null, missionTimer: null,
      clock: null, day: null, inVehicle: null, speed: null, gear: null,
    };
    this.minimapTimer = 0;
    this.bigmapTimer = 0;
    this.bannerTimer = null;
    this.mapOpen = false;
  }

  update(dt) {
    const game = this.game;
    const p = game.player;
    if (!p) return;

    const cash = `$${p.cash.toLocaleString()}`;
    if (cash !== this.cache.cash) {
      this.el.cash.textContent = cash;
      this.cache.cash = cash;
    }

    const hp = Math.max(0, Math.ceil(p.hp));
    if (hp !== this.cache.hp) {
      this.el.healthBar.style.width = `${clamp(p.hp / p.maxHp * 100, 0, 100)}%`;
      this.el.healthNum.textContent = hp;
      this.cache.hp = hp;
    }
    const armor = Math.ceil(p.armor);
    if (armor !== this.cache.armor) {
      this.el.armorBar.style.width = `${clamp(armor, 0, 100)}%`;
      this.el.armorNum.textContent = armor;
      this.cache.armor = armor;
    }
    const ammo = `${p.ammo} / ${p.reserve}`;
    if (ammo !== this.cache.ammo) {
      this.el.ammo.textContent = ammo;
      this.cache.ammo = ammo;
    }
    if (p.weaponName !== this.cache.weapon) {
      this.el.weapon.textContent = p.weaponName;
      this.cache.weapon = p.weaponName;
    }

    const starsKey = p.wanted;
    if (starsKey !== this.cache.wanted) {
      this.el.wantedRow.style.visibility = starsKey > 0 ? 'visible' : 'hidden';
      this.stars.forEach((s, i) => {
        s.classList.toggle('on', i < starsKey);
        s.classList.toggle('pulse', starsKey >= 4 && i < starsKey);
      });
      this.cache.wanted = starsKey;
    }

    const clock = game.world.env.getClock();
    if (clock.text !== this.cache.clock) {
      this.el.clock.textContent = clock.text;
      this.cache.clock = clock.text;
    }
    const day = game.world.env.getDayLabel();
    if (day !== this.cache.day) { this.el.day.textContent = day; this.cache.day = day; }

    if (game.time - (this._locTimer || 0) > 0.2) {
      this._locTimer = game.time;
      const loc = game.world.locationName(p.pos.x, p.pos.z);
      if (loc !== this.cache.location) {
        this.el.location.textContent = loc;
        this.cache.location = loc;
        if (game.state === 'playing' && this._started) game.onDistrictChange(loc);
      }
      this.el.seed.textContent = game.seed;
    }

    const inVehicle = p.mode === 'vehicle';
    if (inVehicle !== this.cache.inVehicle) {
      this.cache.inVehicle = inVehicle;
      this.el.vehiclePanel.classList.toggle('hidden', !inVehicle);
      this.el.crosshair.classList.toggle('hidden', inVehicle);
    }
    if (inVehicle) {
      const kmh = Math.round(Math.abs(p.vehicle.speed) * 3.6);
      if (kmh !== this.cache.speed) {
        this.el.speedNum.textContent = kmh;
        this.el.speedBar.style.width = `${clamp(kmh / 140 * 100, 0, 100)}%`;
        this.cache.speed = kmh;
      }
      const gear = p.vehicle.speed < -0.4 ? 'R' : Math.abs(p.vehicle.speed) < 0.2 ? 'N' : 'D';
      if (gear !== this.cache.gear) { this.el.gear.textContent = gear; this.cache.gear = gear; }
    }

    this.el.crosshair.classList.toggle('aiming', p.aiming);
    this.el.crosshair.classList.toggle('hidden', inVehicle || p.mode !== 'foot');

    // mission
    const info = game.missions ? game.missions.getMissionInfo() : null;
    if (info) {
      this.el.missionBox.classList.remove('hidden');
      const key = info.kind + info.title + info.objective;
      if (key !== this.cache.missionKey) {
        this.el.missionKicker.textContent = info.kind + ' // ACTIVE';
        this.el.missionTitle.textContent = info.title;
        this.el.missionObjective.textContent = info.objective;
        this.cache.missionKey = key;
      }
      const t = Math.max(0, Math.ceil(info.timer));
      const tt = `${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`;
      if (tt !== this.cache.missionTimer) {
        this.el.missionTimer.textContent = tt;
        this.cache.missionTimer = tt;
      }
    } else {
      this.el.missionBox.classList.add('hidden');
      this.cache.missionKey = null;
    }

    this.minimapTimer -= dt;
    if (this.minimapTimer <= 0) {
      this.minimapTimer = 0.08;
      this.drawMinimap();
    }
    if (this.mapOpen) {
      this.bigmapTimer -= dt;
      if (this.bigmapTimer <= 0) { this.bigmapTimer = 0.15; this.drawBigMap(); }
    }

    if (game.time > 50) this.el.hint.style.opacity = '0';
  }

  setPrompt(html) {
    if (html === this.cache.prompt) return;
    this.cache.prompt = html;
    if (!html) {
      this.el.prompt.classList.add('hidden');
    } else {
      this.el.prompt.innerHTML = html;
      this.el.prompt.classList.remove('hidden');
    }
  }

  notify(title, text = '', kind = '', duration = 4200, small = false) {
    const d = document.createElement('div');
    d.className = 'toast' + (kind ? ' ' + kind : '');
    d.innerHTML = `<b>${title}</b>${text ? `<span>${text}</span>` : ''}`;
    if (small) d.style.fontSize = '10px';
    this.el.notifications.appendChild(d);
    setTimeout(() => d.remove(), duration);
    while (this.el.notifications.children.length > 5) this.el.notifications.firstChild.remove();
  }

  showBanner(title, sub = '') {
    this.el.bannerTitle.textContent = title;
    this.el.bannerSub.textContent = sub;
    this.el.banner.classList.remove('hidden');
    // restart animation
    this.el.banner.style.animation = 'none';
    void this.el.banner.offsetWidth;
    this.el.banner.style.animation = '';
    clearTimeout(this.bannerTimer);
    this.bannerTimer = setTimeout(() => this.el.banner.classList.add('hidden'), 4000);
  }

  damageFlash() {
    this.el.damageFlash.classList.remove('hit');
    void this.el.damageFlash.offsetWidth;
    this.el.damageFlash.classList.add('hit');
  }

  popCash() {
    this.el.cash.parentElement.classList.remove('pop');
    void this.el.cash.parentElement.offsetWidth;
    this.el.cash.parentElement.classList.add('pop');
  }

  setInVehicle(v) {
    this.cache.inVehicle = null;
    this.el.crosshair.classList.toggle('hidden', v);
  }

  showDeath(show, loss = 0, respawn = '') {
    this.el.death.classList.toggle('hidden', !show);
    if (show) {
      this.el.deathLoss.textContent = `MEDICAL BILL: $${loss.toLocaleString()}`;
      this.el.deathRespawn.textContent = respawn;
    }
  }

  setPauseStats(player, seed, wanted) {
    this.el.pauseCash.textContent = `$${player.cash.toLocaleString()}`;
    this.el.pauseWanted.textContent = wanted > 0 ? '★'.repeat(wanted) : 'CLEAN';
    this.el.pauseSeed.textContent = seed;
  }

  showMap(open) {
    this.mapOpen = open;
    this.el.mapScreen.classList.toggle('hidden', !open);
    this.el.mapTitle.textContent = `SEED: ${this.game.seed.toUpperCase()}`;
    if (open) { this.bigmapTimer = 0; this.drawBigMap(); }
  }

  worldToMinimap(wx, wz, px, pz, s, theta) {
    const dx = (wx - px) * s;
    const dz = (wz - pz) * s;
    const c = Math.cos(theta), sn = Math.sin(theta);
    return { x: dx * c - dz * sn, y: dx * sn + dz * c };
  }

  drawMinimap() {
    const ctx = this.minimapCtx;
    const w = this.el.minimap.width;
    const r = w / 2;
    const game = this.game;
    const p = game.player;
    const s = 1.65;
    const theta = p.cameraYaw + Math.PI;
    ctx.clearRect(0, 0, w, w);
    ctx.save();
    ctx.beginPath();
    ctx.arc(r, r, r, 0, Math.PI * 2);
    ctx.clip();
    ctx.fillStyle = '#1d3b4d';
    ctx.fillRect(0, 0, w, w);

    const map = game.world.mapCanvas;
    if (map) {
      const m = game.world.worldToMap(p.pos.x, p.pos.z);
      ctx.save();
      ctx.translate(r, r);
      ctx.rotate(theta);
      ctx.scale(s, s);
      ctx.drawImage(map, -m.x, -m.y);
      ctx.restore();
    }

    const drawDot = (wx, wz, color, radius = 3) => {
      const q = this.worldToMinimap(wx, wz, p.pos.x, p.pos.z, s, theta);
      if (q.x * q.x + q.y * q.y > (r - 6) * (r - 6)) return;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(r + q.x, r + q.y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    // ambient cars
    if (game.vehicles) {
      for (const v of game.vehicles.list) {
        if (v.destroyed || v === p.vehicle) continue;
        const d = Math.hypot(v.pos.x - p.pos.x, v.pos.z - p.pos.z);
        if (d > 100) continue;
        drawDot(v.pos.x, v.pos.z, v.police ? '#7fb0ff' : 'rgba(235,240,245,0.7)', v.police ? 3 : 2);
      }
    }
    // cops
    if (game.peds) {
      for (const ped of game.peds.list) {
        if (!ped.isCop || ped.dead) continue;
        if (Math.hypot(ped.pos.x - p.pos.x, ped.pos.z - p.pos.z) > 110) continue;
        drawDot(ped.pos.x, ped.pos.z, '#ff4b4b', 3);
      }
    }
    // jobs
    if (game.missions) {
      for (const job of game.missions.jobs) {
        if (job.status !== 'available') continue;
        const q = this.worldToMinimap(job.point.x, job.point.z, p.pos.x, p.pos.z, s, theta);
        if (q.x * q.x + q.y * q.y > (r - 8) * (r - 8)) continue;
        ctx.fillStyle = '#ffc72c';
        ctx.strokeStyle = 'rgba(0,0,0,0.75)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(r + q.x, r + q.y, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }
      const a = game.missions.active;
      if (a) {
        if (a.type === 'delivery') {
          if (a.targetVehicle) drawDot(a.targetVehicle.pos.x, a.targetVehicle.pos.z, '#ffc72c', 4.5);
          if (a.dropoff) drawDot(a.dropoff.x, a.dropoff.z, '#62e08a', 5);
        } else if (a.type === 'hit' && a.targetPed) {
          drawDot(a.targetPed.pos.x, a.targetPed.pos.z, '#ff4b4b', 5);
        } else if (a.type === 'checkpoints') {
          const cp = a.checkpoints[a.cpIndex];
          if (cp) drawDot(cp.x, cp.z, '#5ab8ff', 5);
        }
      }
    }

    // player arrow
    ctx.save();
    ctx.translate(r, r);
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = 'rgba(0,0,0,0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, -8);
    ctx.lineTo(5.5, 6);
    ctx.lineTo(0, 3.5);
    ctx.lineTo(-5.5, 6);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // north marker
    const nTheta = theta;
    const nx = Math.sin(nTheta) * (r - 13);
    const ny = -Math.cos(nTheta) * (r - 13);
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('N', r + nx, r + ny);
    ctx.restore();

    // subtle inner ring
    ctx.beginPath();
    ctx.arc(r, r, r - 1.5, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(0,0,0,0.35)';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  drawBigMap() {
    const ctx = this.bigmapCtx;
    const game = this.game;
    const S = 900;
    ctx.clearRect(0, 0, S, S);
    ctx.fillStyle = '#142a3c';
    ctx.fillRect(0, 0, S, S);
    const map = game.world.mapCanvas;
    if (!map) return;
    ctx.drawImage(map, 0, 0, S, S);
    const sc = S / MAP_SIZE;
    const w2m = (x, z) => game.world.worldToMap(x, z);
    const p = game.player;

    // city label rings
    const jobs = game.missions ? game.missions.jobs : [];
    for (const job of jobs) {
      if (job.status !== 'available') continue;
      const q = w2m(job.point.x, job.point.z);
      ctx.fillStyle = '#ffc72c';
      ctx.strokeStyle = 'rgba(0,0,0,0.8)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(q.x * sc, q.y * sc, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
    if (game.missions && game.missions.active) {
      const a = game.missions.active;
      let pts = [];
      if (a.type === 'delivery') {
        if (a.targetVehicle) pts.push([a.targetVehicle.pos.x, a.targetVehicle.pos.z, '#ffc72c']);
        if (a.dropoff) pts.push([a.dropoff.x, a.dropoff.z, '#62e08a']);
      } else if (a.type === 'hit' && a.targetPed) {
        pts.push([a.targetPed.pos.x, a.targetPed.pos.z, '#ff4b4b']);
      } else if (a.type === 'checkpoints') {
        for (const cp of a.checkpoints) pts.push([cp.x, cp.z, '#5ab8ff']);
      }
      for (const [x, z, c] of pts) {
        const q = w2m(x, z);
        ctx.fillStyle = c;
        ctx.beginPath();
        ctx.arc(q.x * sc, q.y * sc, 7, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    if (game.peds) {
      for (const ped of game.peds.list) {
        if (!ped.isCop || ped.dead) continue;
        const q = w2m(ped.pos.x, ped.pos.z);
        ctx.fillStyle = '#ff4b4b';
        ctx.fillRect(q.x * sc - 2, q.y * sc - 2, 4, 4);
      }
    }

    // player arrow
    if (p) {
      const q = w2m(p.pos.x, p.pos.z);
      ctx.save();
      ctx.translate(q.x * sc, q.y * sc);
      ctx.rotate(Math.PI - p.cameraYaw);
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, -11);
      ctx.lineTo(7, 8);
      ctx.lineTo(0, 4);
      ctx.lineTo(-7, 8);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
      ctx.fillStyle = 'rgba(255,255,255,0.85)';
      ctx.font = 'bold 11px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('YOU', q.x * sc, q.y * sc + 26);
    }

    // frame + north
    ctx.strokeStyle = 'rgba(255,255,255,0.15)';
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, S - 2, S - 2);
    ctx.fillStyle = 'rgba(255,255,255,0.75)';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('N', S / 2, 26);
  }
}
