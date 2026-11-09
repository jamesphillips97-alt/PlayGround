import * as THREE from 'three';
import { mulberry32 } from './rng.js';

/** Tiny grayscale pixel texture used by terrain + roads (tinted by vertex colors). */
export function makeNoiseTexture() {
  const size = 32;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(size, size);
  const rng = mulberry32(0xb10c);
  for (let i = 0; i < size * size; i++) {
    let v = 176 + Math.floor(rng() * 64);
    if (rng() < 0.09) v = 148 + Math.floor(rng() * 30);
    img.data[i * 4] = v;
    img.data[i * 4 + 1] = v;
    img.data[i * 4 + 2] = v;
    img.data[i * 4 + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestMipmapNearestFilter;
  tex.anisotropy = 4;
  return tex;
}

function shade(hex, amount) {
  const c = new THREE.Color(hex);
  c.offsetHSL(0, 0, amount);
  return '#' + c.getHexString();
}

/**
 * Facade style: wall texture + matching emissive map. Windows are pixel art.
 * Returns maps sized so one tile represents TILE_WORLD units.
 */
export function makeFacadeMaps(style, variant = 0) {
  const S = 128;
  const tile = 32;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const ctx = c.getContext('2d');
  const e = document.createElement('canvas');
  e.width = e.height = S;
  const ectx = e.getContext('2d');
  const rng = mulberry32(0xfacade + variant * 7717 + style.wall.length * 31);

  ctx.fillStyle = style.wall;
  ctx.fillRect(0, 0, S, S);
  ectx.fillStyle = '#000';
  ectx.fillRect(0, 0, S, S);

  // subtle pixel grime
  for (let i = 0; i < 700; i++) {
    const x = Math.floor(rng() * S), y = Math.floor(rng() * S);
    ctx.fillStyle = rng() < 0.5 ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.05)';
    ctx.fillRect(x, y, 1, 1);
  }

  if (style.brick) {
    ctx.strokeStyle = 'rgba(0,0,0,0.18)';
    ctx.lineWidth = 1;
    for (let y = 0; y < S; y += 8) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(S, y); ctx.stroke();
    }
  }

  const cols = style.cols || 4;
  const rows = style.rows || 4;
  const cw = S / cols, ch = S / rows;
  for (let ry = 0; ry < rows; ry++) {
    for (let rx = 0; rx < cols; rx++) {
      const x = rx * cw, y = ry * ch;
      const wm = style.glass ? 4 : 8;
      const wx = x + wm, wy = y + (style.glass ? 4 : 7);
      const ww = cw - wm * 2, wh = ch - (style.glass ? 8 : 15);
      // frame
      ctx.fillStyle = style.frame || '#2a2d33';
      ctx.fillRect(wx - 2, wy - 2, ww + 4, wh + 4);
      // glass gradient-ish
      const grd = ctx.createLinearGradient(wx, wy, wx + ww, wy + wh);
      grd.addColorStop(0, style.glassTop || '#3d5d73');
      grd.addColorStop(0.55, style.glassMid || '#2b4356');
      grd.addColorStop(1, style.glassBot || '#1a2b38');
      ctx.fillStyle = grd;
      ctx.fillRect(wx, wy, ww, wh);
      // mullion
      ctx.fillStyle = 'rgba(20,25,30,0.55)';
      ctx.fillRect(wx + ww / 2 - 1, wy, 2, wh);
      if (rng() < style.litChance) {
        const warm = rng() < 0.8;
        ectx.fillStyle = warm ? (rng() < 0.3 ? '#ffd07a' : '#ffb84d') : '#a9d8ff';
        ectx.fillRect(wx, wy, ww, wh);
        if (rng() < 0.3) {
          ectx.fillStyle = 'rgba(0,0,0,0.45)';
          ectx.fillRect(wx, wy + wh * 0.62, ww, wh * 0.38);
        }
      }
      // sill
      ctx.fillStyle = shade(style.wall, style.dark ? 0.08 : -0.1);
      ctx.fillRect(wx - 3, wy + wh + 2, ww + 6, 2);
    }
  }
  if (style.band) {
    ctx.fillStyle = style.band;
    for (let y = 0; y < S; y += S / 4) ctx.fillRect(0, y, S, 2);
  }

  const map = new THREE.CanvasTexture(c);
  map.wrapS = map.wrapT = THREE.RepeatWrapping;
  map.magFilter = THREE.NearestFilter;
  map.minFilter = THREE.NearestMipmapNearestFilter;
  map.colorSpace = THREE.SRGBColorSpace;
  map.anisotropy = 4;

  const emissiveMap = new THREE.CanvasTexture(e);
  emissiveMap.wrapS = emissiveMap.wrapT = THREE.RepeatWrapping;
  emissiveMap.magFilter = THREE.NearestFilter;
  emissiveMap.minFilter = THREE.NearestMipmapNearestFilter;
  emissiveMap.colorSpace = THREE.SRGBColorSpace;

  return { map, emissiveMap, tileWorld: 7.2 };
}

export function makeGlowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.25, 'rgba(255,245,200,0.8)');
  g.addColorStop(0.6, 'rgba(255,220,120,0.18)');
  g.addColorStop(1, 'rgba(255,220,120,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function makeStarTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 8;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#fff';
  ctx.fillRect(3, 0, 2, 8);
  ctx.fillRect(0, 3, 8, 2);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function makeWaterNormal() {
  // small tileable normal-ish pattern (used as a bump map)
  const S = 64;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(S, S);
  const rng = mulberry32(0x5eed1234);
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const nx = Math.sin((x / S) * Math.PI * 4 + Math.sin(y * 0.2) * 2);
      const ny = Math.cos((y / S) * Math.PI * 4 + Math.cos(x * 0.17) * 2);
      const i = (y * S + x) * 4;
      img.data[i] = 128 + nx * 42 + (rng() - 0.5) * 10;
      img.data[i + 1] = 128 + ny * 42 + (rng() - 0.5) * 10;
      img.data[i + 2] = 255;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(10, 10);
  return tex;
}
