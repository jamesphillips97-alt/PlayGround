/** Tiny WebAudio synth: no external assets, everything is generated. */
export class Audio {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.muted = false;
    this.engine = null;
    this.siren = null;
    this.sirenOn = false;
    this._lastHit = 0;
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.55;
    this.master.connect(this.ctx.destination);
    this.buildEngine();
    this.buildSiren();
  }

  setMuted(m) {
    this.muted = m;
    if (this.master) this.master.gain.setTargetAtTime(m ? 0 : 0.55, this.ctx.currentTime, 0.05);
  }

  buildEngine() {
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc2.type = 'square';
    osc.frequency.value = 55;
    osc2.frequency.value = 27;
    filter.type = 'lowpass';
    filter.frequency.value = 300;
    filter.Q.value = 4;
    gain.gain.value = 0;
    osc.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.master);
    osc.start();
    osc2.start();
    this.engine = { osc, osc2, filter, gain };
  }

  buildSiren() {
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.value = 700;
    gain.gain.value = 0;
    osc.connect(gain);
    gain.connect(this.master);
    osc.start();
    this.siren = { osc, gain };
  }

  updateEngine(speed, throttle, active) {
    if (!this.engine) return;
    const t = this.ctx.currentTime;
    const s = Math.abs(speed);
    const target = active ? 0.035 + Math.min(0.075, s * 0.0021) : 0;
    this.engine.gain.gain.setTargetAtTime(target, t, 0.09);
    this.engine.osc.frequency.setTargetAtTime(46 + s * 3.6 + Math.abs(throttle) * 12, t, 0.08);
    this.engine.osc2.frequency.setTargetAtTime(23 + s * 1.8, t, 0.1);
    this.engine.filter.frequency.setTargetAtTime(220 + s * 22 + Math.abs(throttle) * 180, t, 0.1);
  }

  updateSiren(active, time) {
    if (!this.siren) return;
    if (active !== this.sirenOn) {
      this.sirenOn = active;
      this.siren.gain.gain.setTargetAtTime(active ? 0.025 : 0, this.ctx.currentTime, 0.2);
    }
    if (active) {
      const f = 620 + (Math.sin(time * 3.2) > 0 ? 280 : 0);
      this.siren.osc.frequency.setTargetAtTime(f, this.ctx.currentTime, 0.08);
    }
  }

  noiseBurst(duration = 0.16, vol = 0.35, cutoff = 1800, type = 'lowpass') {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const len = Math.floor(ctx.sampleRate * duration);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) {
      const fade = 1 - i / len;
      d[i] = (Math.random() * 2 - 1) * fade * fade;
    }
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const filter = ctx.createBiquadFilter();
    filter.type = type;
    filter.frequency.value = cutoff;
    const g = ctx.createGain();
    g.gain.value = vol;
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    src.connect(filter);
    filter.connect(g);
    g.connect(this.master);
    src.start();
  }

  gunshot() {
    if (!this.ctx) return;
    this.noiseBurst(0.14, 0.45, 2200);
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = 'square';
    o.frequency.setValueAtTime(140, ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.09);
    g.gain.setValueAtTime(0.22, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    o.connect(g);
    g.connect(this.master);
    o.start();
    o.stop(ctx.currentTime + 0.12);
  }

  copShot() {
    if (!this.ctx) return;
    this.noiseBurst(0.1, 0.18, 1400);
  }

  hit() {
    if (!this.ctx) return;
    if (this.ctx.currentTime - this._lastHit < 0.06) return;
    this._lastHit = this.ctx.currentTime;
    this.noiseBurst(0.08, 0.24, 700);
  }

  crash(strength = 1) {
    if (!this.ctx) return;
    this.noiseBurst(0.22, Math.min(0.5, 0.18 * strength), 500);
  }

  explosion() {
    if (!this.ctx) return;
    this.noiseBurst(0.85, 0.65, 320);
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(75, ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(18, ctx.currentTime + 0.7);
    g.gain.setValueAtTime(0.4, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
    o.connect(g);
    g.connect(this.master);
    o.start();
    o.stop(ctx.currentTime + 0.9);
  }

  beep(freq = 660, dur = 0.08, vol = 0.12, type = 'square') {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type;
    o.frequency.value = freq;
    g.gain.setValueAtTime(vol, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    o.connect(g);
    g.connect(this.master);
    o.start();
    o.stop(ctx.currentTime + dur + 0.02);
  }

  pickup() {
    this.beep(520, 0.08, 0.13);
    setTimeout(() => this.beep(780, 0.12, 0.12), 70);
    setTimeout(() => this.beep(1040, 0.14, 0.1), 145);
  }

  missionDone() {
    this.beep(520, 0.12, 0.13, 'sawtooth');
    setTimeout(() => this.beep(660, 0.12, 0.13, 'sawtooth'), 120);
    setTimeout(() => this.beep(880, 0.3, 0.14, 'sawtooth'), 240);
  }

  fail() {
    this.beep(180, 0.22, 0.16, 'sawtooth');
    setTimeout(() => this.beep(120, 0.35, 0.14, 'sawtooth'), 180);
  }

  reload() {
    this.beep(320, 0.05, 0.08, 'square');
    setTimeout(() => this.beep(220, 0.06, 0.08, 'square'), 140);
  }

  horn() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    for (const f of [392, 495]) {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'square';
      o.frequency.value = f;
      g.gain.setValueAtTime(0.09, ctx.currentTime);
      g.gain.setValueAtTime(0.09, ctx.currentTime + 0.35);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
      o.connect(g);
      g.connect(this.master);
      o.start();
      o.stop(ctx.currentTime + 0.46);
    }
  }
}

export const audio = new Audio();
