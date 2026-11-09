const KEY_FORWARD = new Set(['KeyW', 'ArrowUp']);
const KEY_BACK = new Set(['KeyS', 'ArrowDown']);
const KEY_LEFT = new Set(['KeyA', 'ArrowLeft']);
const KEY_RIGHT = new Set(['KeyD', 'ArrowRight']);

export class Input {
  constructor(canvas, game) {
    this.canvas = canvas;
    this.game = game;
    this.keys = new Set();
    this.lookX = 0;
    this.lookY = 0;
    this.moveX = 0; // analog: right
    this.moveY = 0; // analog: forward
    this.shoot = false;
    this.aim = false;
    this.sprint = false;
    this.jumpHeld = false;
    this.pressed = {
      jump: false, interact: false, reload: false, map: false,
      pause: false, horn: false, toggleSound: false, camera: false,
    };
    this.pointerLocked = false;
    this.dragging = false;
    this.lastPointer = { x: 0, y: 0 };
    this.isMobile = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    this.touchLookId = null;
    this.joystickId = null;
    this.joystickCenter = { x: 0, y: 0 };
    this.bind();
  }

  bind() {
    window.addEventListener('keydown', (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      if (e.code === 'Space' || e.code === 'Tab') e.preventDefault();
      if (this.keys.has(e.code)) return;
      this.keys.add(e.code);
      if (e.code === 'KeyE') this.pressed.interact = true;
      if (e.code === 'KeyR') this.pressed.reload = true;
      if (e.code === 'KeyM') this.pressed.map = true;
      if (e.code === 'Escape') this.pressed.pause = true;
      if (e.code === 'KeyH') this.pressed.horn = true;
      if (e.code === 'KeyM') this.pressed.map = true;
      if (e.code === 'Space') this.pressed.jump = true;
      if (e.code === 'KeyC') this.pressed.camera = true;
      if (e.code === 'KeyN') this.pressed.toggleSound = true;
    });
    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.code);
    });
    window.addEventListener('blur', () => {
      this.keys.clear();
      this.shoot = false;
      this.aim = false;
    });

    this.canvas.addEventListener('mousedown', (e) => {
      if (this.game.state !== 'playing') return;
      if (!this.isMobile && !this.pointerLocked) {
        this.canvas.requestPointerLock?.();
      }
      if (e.button === 0) this.shoot = true;
      if (e.button === 2) this.aim = true;
      this.dragging = true;
      this.lastPointer.x = e.clientX;
      this.lastPointer.y = e.clientY;
    });
    window.addEventListener('mouseup', (e) => {
      if (e.button === 0) this.shoot = false;
      if (e.button === 2) this.aim = false;
      this.dragging = false;
    });
    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    window.addEventListener('mousemove', (e) => {
      if (this.game.state !== 'playing') return;
      if (this.pointerLocked) {
        this.lookX += e.movementX;
        this.lookY += e.movementY;
      } else if (this.dragging) {
        this.lookX += e.clientX - this.lastPointer.x;
        this.lookY += e.clientY - this.lastPointer.y;
        this.lastPointer.x = e.clientX;
        this.lastPointer.y = e.clientY;
      }
    });
    document.addEventListener('pointerlockchange', () => {
      this.pointerLocked = document.pointerLockElement === this.canvas;
    });
    this.canvas.addEventListener('wheel', (e) => {
      if (this.game.state !== 'playing') return;
      this.game.cameraZoomDelta = Math.sign(e.deltaY) * 0.55;
      e.preventDefault();
    }, { passive: false });

    // ---------------- touch controls ----------------
    const joy = document.getElementById('joystick');
    const zone = document.getElementById('joystick-zone');
    if (joy && zone) {
      const start = (e) => {
        e.preventDefault();
        const t = e.changedTouches[0];
        const r = joy.getBoundingClientRect();
        this.joystickCenter.x = r.left + r.width / 2;
        this.joystickCenter.y = r.top + r.height / 2;
        this.joystickId = t.identifier;
        this.updateJoystick(t.clientX, t.clientY, r.width / 2);
      };
      const move = (e) => {
        for (const t of e.changedTouches) {
          if (t.identifier === this.joystickId) {
            const r = joy.getBoundingClientRect();
            this.updateJoystick(t.clientX, t.clientY, r.width / 2);
            e.preventDefault();
          }
        }
      };
      const end = (e) => {
        for (const t of e.changedTouches) {
          if (t.identifier === this.joystickId) {
            this.joystickId = null;
            this.moveX = 0;
            this.moveY = 0;
            const knob = document.getElementById('joystick-knob');
            if (knob) knob.style.transform = 'translate(-50%,-50%)';
          }
        }
      };
      zone.addEventListener('touchstart', start, { passive: false });
      zone.addEventListener('touchmove', move, { passive: false });
      zone.addEventListener('touchend', end, { passive: false });
      zone.addEventListener('touchcancel', end, { passive: false });
    }

    const lookZone = document.getElementById('app');
    lookZone.addEventListener('touchstart', (e) => {
      if (this.game.state !== 'playing') return;
      for (const t of e.changedTouches) {
        if (t.clientX < window.innerWidth * 0.38) continue;
        if (this.touchLookId === null) {
          this.touchLookId = t.identifier;
          this.lastPointer.x = t.clientX;
          this.lastPointer.y = t.clientY;
        }
      }
    }, { passive: true });
    lookZone.addEventListener('touchmove', (e) => {
      if (this.game.state !== 'playing') return;
      for (const t of e.changedTouches) {
        if (t.identifier !== this.touchLookId) continue;
        this.lookX += (t.clientX - this.lastPointer.x) * 1.0;
        this.lookY += (t.clientY - this.lastPointer.y) * 1.0;
        this.lastPointer.x = t.clientX;
        this.lastPointer.y = t.clientY;
      }
    }, { passive: true });
    lookZone.addEventListener('touchend', (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier === this.touchLookId) this.touchLookId = null;
      }
    }, { passive: true });

    const bindBtn = (id, down) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('touchstart', (e) => { e.preventDefault(); e.stopPropagation(); down(true); }, { passive: false });
      el.addEventListener('touchend', (e) => { e.preventDefault(); e.stopPropagation(); down(false); }, { passive: false });
      el.addEventListener('touchcancel', (e) => { e.preventDefault(); down(false); }, { passive: false });
      el.addEventListener('mousedown', (e) => { e.preventDefault(); e.stopPropagation(); down(true); });
      el.addEventListener('mouseup', (e) => { e.preventDefault(); e.stopPropagation(); down(false); });
    };
    bindBtn('btn-fire', (v) => { this.shoot = v; });
    bindBtn('btn-jump', (v) => {
      if (v) this.pressed.jump = true;
      this.jumpHeld = v;
    });
    bindBtn('btn-enter', (v) => { if (v) this.pressed.interact = true; });
    bindBtn('btn-reload', (v) => { if (v) this.pressed.reload = true; });
    bindBtn('btn-menu', (v) => { if (v) this.pressed.pause = true; });
  }

  updateJoystick(x, y, radius) {
    let dx = x - this.joystickCenter.x;
    let dy = y - this.joystickCenter.y;
    const len = Math.hypot(dx, dy);
    const max = radius * 0.78;
    if (len > max) { dx = dx / len * max; dy = dy / len * max; }
    this.moveX = dx / max;
    this.moveY = -dy / max;
    const knob = document.getElementById('joystick-knob');
    if (knob) knob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
  }

  /** Forward axis from keyboard / joystick. */
  get forward() {
    let v = 0;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) v += 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) v -= 1;
    if (Math.abs(this.moveY) > 0.02) v = this.moveY;
    return Math.max(-1, Math.min(1, v));
  }

  get strafe() {
    let v = 0;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) v += 1;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) v -= 1;
    if (Math.abs(this.moveX) > 0.02) v = this.moveX;
    return Math.max(-1, Math.min(1, v));
  }

  get sprinting() {
    return this.sprint || this.keys.has('ShiftLeft') || this.keys.has('ShiftRight') ||
      (this.isMobile && Math.hypot(this.moveX, this.moveY) > 0.92);
  }

  get jump() {
    return this.jumpHeld || this.keys.has('Space');
  }

  consume() {
    const p = { ...this.pressed };
    for (const k in this.pressed) this.pressed[k] = false;
    const look = { x: this.lookX, y: this.lookY };
    this.lookX = 0;
    this.lookY = 0;
    return { pressed: p, look };
  }

  clearFrame() {
    this.lookX = 0;
    this.lookY = 0;
  }
}

export { KEY_FORWARD, KEY_BACK, KEY_LEFT, KEY_RIGHT };
