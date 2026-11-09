import * as THREE from 'three';
import { stream } from './rng.js';
import { makePickupMesh } from './characters.js';

export class ItemManager {
  constructor(game) {
    this.game = game;
    this.items = [];
    this.rng = stream(game.seed, 'items');
    this.spawnFixed();
  }

  spawnFixed() {
    const city = this.game.world.city;
    const candidates = city.lots.filter(l => l.type === 'park' || l.type === 'plaza' || l.type === 'parking');
    const used = [];
    const pick = () => {
      for (let i = 0; i < 30; i++) {
        const lot = candidates[Math.floor(this.rng() * candidates.length)];
        if (!lot) continue;
        if (used.some(u => u.x === lot.x && u.z === lot.z)) continue;
        used.push(lot);
        return lot;
      }
      return candidates[0];
    };
    for (let i = 0; i < 5; i++) {
      const lot = pick();
      if (!lot) continue;
      this.add('health', lot.x - 5, lot.z + 5, 50, true);
    }
    for (let i = 0; i < 4; i++) {
      const lot = pick();
      if (!lot) continue;
      this.add('armor', lot.x + 5, lot.z - 5, 60, true);
    }
    for (let i = 0; i < 5; i++) {
      const lot = pick();
      if (!lot) continue;
      this.add('ammo', lot.x + 6, lot.z + 6, 45, true);
    }
  }

  add(kind, x, z, respawn = 0, fixed = false, value = 0) {
    if (this.game.world.isBlocked(x, z, 0.8)) {
      const fixedPos = this.game.world.resolveCircle(x, z, 0.55);
      x = fixedPos.x;
      z = fixedPos.z;
    }
    const mesh = makePickupMesh(kind);
    const y = this.game.world.groundAt(x, z) + 0.24;
    mesh.position.set(x, y, z);
    this.game.scene.add(mesh);
    const item = {
      kind, x, z, y, mesh, active: true, respawn, fixed,
      timer: 0, value, phase: this.rng() * Math.PI * 2,
    };
    this.items.push(item);
    return item;
  }

  spawnCash(x, z, amount) {
    this.add('cash', x, z, 0, false, amount);
  }

  update(dt) {
    const game = this.game;
    const p = game.player.pos;
    for (const item of [...this.items]) {
      if (!item.active) {
        item.timer -= dt;
        if (item.timer <= 0 && item.fixed) {
          item.active = true;
          item.mesh.visible = true;
        } else continue;
      }
      item.phase += dt * 2;
      item.mesh.position.y = item.y + Math.sin(item.phase) * 0.12;
      item.mesh.rotation.y += dt * 1.9;
      const d = Math.hypot(item.x - p.x, item.z - p.z);
      if (d < 1.6 && Math.abs(p.y - item.y) < 2.4) {
        if (item.kind === 'health') {
          if (game.player.hp >= game.player.maxHp) continue;
          game.player.heal(45);
          game.notify('HEALTH', '+45 HP', 'good', 1600, true);
        } else if (item.kind === 'armor') {
          if (game.player.armor >= 100) continue;
          game.player.heal(55, true);
          game.notify('ARMOR', '+55 ARMOR', 'good', 1600, true);
        } else if (item.kind === 'ammo') {
          if (game.player.reserve >= 300) continue;
          game.player.reserve += 36;
          game.notify('AMMO', '+36 PISTOL ROUNDS', 'good', 1600, true);
        } else if (item.kind === 'cash') {
          game.player.addCash(item.value, game);
          game.notify('CASH', `+$${item.value}`, 'good', 1400, true);
        }
        game.audio.pickup();
        item.active = false;
        item.mesh.visible = false;
        item.timer = item.respawn || 0;
        if (!item.fixed) {
          game.scene.remove(item.mesh);
          const idx = this.items.indexOf(item);
          if (idx >= 0) this.items.splice(idx, 1);
        }
      }
    }
  }

  clear() {
    for (const item of this.items) this.game.scene.remove(item.mesh);
    this.items = [];
  }
}
