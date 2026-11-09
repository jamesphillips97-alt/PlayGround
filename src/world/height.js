import { fbm2, ridge2, hashString, smoothstep, clamp } from '../rng.js';

export const SEA_LEVEL = 0;
export const STEP = 1.5;
export const CELL = 2;
export const CHUNK_CELLS = 16;
export const CHUNK_SIZE = CHUNK_CELLS * CELL;
export const CITY_HALF = 135;
export const CITY_PAD = 153;
export const CITY_BLEND = 232;

const BIOME_TOP = {
  ocean: 0x4f6f6a,
  beach: 0xddcd93,
  plains: 0x63a13e,
  forest: 0x3f7d31,
  desert: 0xd7bf76,
  snow: 0xe6edf0,
  rock: 0x8a8a82,
  city: 0x8f918c,
};
const BIOME_SIDE = {
  ocean: 0x5a5741,
  beach: 0xc2ae70,
  plains: 0x7c5f3c,
  forest: 0x6b5336,
  desert: 0xb39a58,
  snow: 0xa9b2b5,
  rock: 0x6d6d66,
  city: 0x6e706b,
};

export function biomeColors(biome) {
  return {
    top: BIOME_TOP[biome] ?? BIOME_TOP.plains,
    side: BIOME_SIDE[biome] ?? BIOME_SIDE.plains,
  };
}

export function createHeightSampler(seed) {
  const s = hashString(String(seed) + ':terrain');
  const sContinental = (s ^ 0x1a2b3c4d) >>> 0;
  const sDetail = (s ^ 0x5e6f7a8b) >>> 0;
  const sMountain = (s ^ 0x9c8d7e6f) >>> 0;
  const sRidge = (s ^ 0x12345678) >>> 0;
  const sTemp = (s ^ 0xabcdef01) >>> 0;
  const sMoist = (s ^ 0x0fedcba9) >>> 0;

  function naturalHeight(x, z) {
    const cont = fbm2(x * 0.00165 + 13.7, z * 0.00165 - 4.2, sContinental, 4, 2.03, 0.52);
    const detail = fbm2(x * 0.009 + 3.1, z * 0.009 + 8.8, sDetail, 4, 2.07, 0.48);
    const mountMask = smoothstep(0.03, 0.62, fbm2(x * 0.00115 - 7.5, z * 0.00115 + 9.4, sMountain, 3, 2.01, 0.55));
    const ridge = ridge2(x * 0.0032 + 2.2, z * 0.0032 - 6.6, sRidge, 4);
    const coastal = smoothstep(-0.28, 0.18, cont);
    let h = -7.5 + cont * 19 + detail * 3.2 + mountMask * ridge * 56 * coastal;
    // shallow shelf around land so beaches read well
    if (h > -2 && h < 1.2) h = 0.65 + (h + 2) * 0.12;
    return h;
  }

  function temperature(x, z) {
    return fbm2(x * 0.0012 + 41.2, z * 0.0012 - 18.6, sTemp, 3, 2.02, 0.5);
  }

  function moisture(x, z) {
    return fbm2(x * 0.0014 - 24.5, z * 0.0014 + 37.1, sMoist, 3, 2.04, 0.5);
  }

  function biomeAt(x, z, city) {
    const d = city ? Math.max(Math.abs(x - city.cx), Math.abs(z - city.cz)) : 1e9;
    if (d < CITY_PAD + 45) return 'city';
    const h = naturalHeight(x, z);
    if (h < SEA_LEVEL + 0.15) return 'ocean';
    if (h < SEA_LEVEL + 2.4) return 'beach';
    const t = temperature(x, z);
    const m = moisture(x, z);
    if (h > 33 || t < -0.26) {
      if (h > 46 && t < -0.02) return 'snow';
      if (h > 34) return 'rock';
      return 'snow';
    }
    if (m < -0.14 && t > 0.06) return 'desert';
    if (m > 0.2) return 'forest';
    return 'plains';
  }

  function heightAt(x, z, city) {
    if (city) {
      const d = Math.max(Math.abs(x - city.cx), Math.abs(z - city.cz));
      if (d < CITY_PAD) return city.groundY;
      if (d < CITY_BLEND) {
        const t = smoothstep(CITY_PAD, CITY_BLEND, d);
        const raw = city.groundY * (1 - t) + naturalHeight(x, z) * t;
        return Math.floor(raw / STEP) * STEP;
      }
    }
    return Math.floor(naturalHeight(x, z) / STEP) * STEP;
  }

  /** Unquantized height, useful for smooth water and map work. */
  function rawHeightAt(x, z, city) {
    if (city) {
      const d = Math.max(Math.abs(x - city.cx), Math.abs(z - city.cz));
      if (d < CITY_PAD) return city.groundY;
      if (d < CITY_BLEND) {
        const t = smoothstep(CITY_PAD, CITY_BLEND, d);
        return city.groundY * (1 - t) + naturalHeight(x, z) * t;
      }
    }
    return naturalHeight(x, z);
  }

  function slopeAt(x, z, city) {
    const e = 2;
    const h0 = heightAt(x, z, city);
    return Math.max(
      Math.abs(heightAt(x + e, z, city) - h0),
      Math.abs(heightAt(x, z + e, city) - h0)
    );
  }

  function isWater(x, z, city) {
    return heightAt(x, z, city) < SEA_LEVEL - 0.1;
  }

  return {
    seed: s,
    naturalHeight,
    heightAt,
    rawHeightAt,
    biomeAt,
    slopeAt,
    isWater,
    temperature,
    moisture,
    biomeColors,
    /** Look up the biome ground colour as a CSS/hex string for the map renderer. */
    biomeCss(x, z, city) {
      const b = biomeAt(x, z, city);
      const c = new THREE_COLOR(BIOME_TOP[b] ?? BIOME_TOP.plains);
      return c.getStyle();
    },
  };
}

// Tiny color helper without importing all of three into this module.
function THREE_COLOR(hex) {
  const r = ((hex >> 16) & 255) / 255;
  const g = ((hex >> 8) & 255) / 255;
  const b = (hex & 255) / 255;
  return {
    r, g, b,
    getStyle() {
      return `rgb(${(r * 255) | 0},${(g * 255) | 0},${(b * 255) | 0})`;
    },
  };
}
