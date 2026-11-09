// Deterministic seeded random + noise utilities.
// Everything the world generator consumes flows through these, so a seed string
// always produces the exact same county.

export function hashString(str) {
  let h = 2166136261 >>> 0;
  const s = String(str);
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  h ^= h >>> 16;
  h = Math.imul(h, 2246822507);
  h ^= h >>> 13;
  h = Math.imul(h, 3266489909);
  h ^= h >>> 16;
  return h >>> 0;
}

export function mulberry32(a) {
  let t = a >>> 0;
  return function () {
    t = (t + 0x6d2b79f5) >>> 0;
    let r = t;
    r = Math.imul(r ^ (r >>> 15), r | 1);
    r ^= r + Math.imul(r ^ (r >>> 7), r | 61);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

/** Named deterministic stream so adding a new system can't shift another. */
export function stream(seed, name) {
  const h = (hashString(String(seed)) ^ hashString(String(name)) ^ 0x9e3779b9) >>> 0;
  const rng = mulberry32(h);
  rng.int = (min, max) => Math.floor(rng() * (max - min + 1)) + min;
  rng.range = (min, max) => min + rng() * (max - min);
  rng.pick = (arr) => arr[Math.floor(rng() * arr.length)];
  rng.chance = (p) => rng() < p;
  rng.sign = () => (rng() < 0.5 ? -1 : 1);
  return rng;
}

function hash2i(x, y, seed) {
  let h = (seed ^ Math.imul(x | 0, 374761393) ^ Math.imul(y | 0, 668265263)) >>> 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967295;
}

function fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
function lerp(a, b, t) { return a + (b - a) * t; }

/** Smooth value noise in [-1, 1]. */
export function noise2(x, y, seed = 0) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const u = fade(xf), v = fade(yf);
  const a = hash2i(xi, yi, seed);
  const b = hash2i(xi + 1, yi, seed);
  const c = hash2i(xi, yi + 1, seed);
  const d = hash2i(xi + 1, yi + 1, seed);
  return lerp(lerp(a, b, u), lerp(c, d, u), v) * 2 - 1;
}

/** Fractal brownian motion. */
export function fbm2(x, y, seed = 0, octaves = 4, lacunarity = 2.02, gain = 0.5) {
  let amp = 1, freq = 1, sum = 0, norm = 0;
  for (let i = 0; i < octaves; i++) {
    sum += noise2(x * freq, y * freq, (seed + i * 1013) >>> 0) * amp;
    norm += amp;
    amp *= gain;
    freq *= lacunarity;
  }
  return sum / norm;
}

/** Cellular-ish ridge noise for mountain spines. */
export function ridge2(x, y, seed = 0, octaves = 4) {
  let amp = 1, freq = 1, sum = 0, norm = 0;
  for (let i = 0; i < octaves; i++) {
    const n = 1 - Math.abs(noise2(x * freq, y * freq, (seed + 711 * i) >>> 0));
    sum += n * n * amp;
    norm += amp;
    amp *= 0.52;
    freq *= 2.03;
  }
  return sum / norm;
}

/** Stable per-cell hash in [0,1). */
export function hashCell(x, y, seed = 0) {
  return hash2i(x, y, seed);
}

export function smoothstep(edge0, edge1, x) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

export function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
export function lerpN(a, b, t) { return a + (b - a) * t; }

export function formatSeed(seed) {
  return String(seed).trim().toLowerCase().replace(/\s+/g, '-').slice(0, 32) || 'san-voxel';
}

export function randomSeed() {
  const a = ['vice', 'sand', 'neon', 'rust', 'palm', 'dust', 'coral', 'iron', 'sunset', 'bay', 'grape', 'cactus', 'crown', 'pixel', 'harbor', 'delta', 'ghost', 'amber', 'chrome', 'dune'];
  const b = ['beach', 'heights', 'hills', 'grove', 'city', 'county', 'coast', 'bluff', 'mirage', 'project', 'strip', 'canyon', 'port', 'vale', 'springs', 'row'];
  const r = mulberry32((Date.now() ^ Math.floor(Math.random() * 0xffffffff)) >>> 0);
  return `${a[Math.floor(r() * a.length)]}-${b[Math.floor(r() * b.length)]}-${Math.floor(r() * 900 + 100)}`;
}
