import * as THREE from 'three';

const _c = new THREE.Color();
const _a = new THREE.Vector3();
const _b = new THREE.Vector3();
const _n = new THREE.Vector3();
const _e1 = new THREE.Vector3();
const _e2 = new THREE.Vector3();

/** Convert a hex/color-like into a [r,g,b] array with optional lightness jitter. */
export function col(hex, jitter = 0, sat = 0) {
  _c.set(hex);
  if (jitter || sat) _c.offsetHSL(0, sat, jitter);
  return [_c.r, _c.g, _c.b];
}

/** Multiply a color array by a scalar. */
export function mulColor(c, m) {
  return [Math.min(1, c[0] * m), Math.min(1, c[1] * m), Math.min(1, c[2] * m)];
}

/**
 * Small geometry accumulator. Everything becomes one BufferGeometry per material,
 * which keeps draw calls low for a very dense city.
 */
export class GeoBuilder {
  constructor(withUv = true) {
    this.positions = [];
    this.normals = [];
    this.uvs = withUv ? [] : null;
    this.colors = [];
    this.indices = [];
    this.vertCount = 0;
  }

  get empty() { return this.vertCount === 0; }

  /**
   * Add a quad. Points must be counter-clockwise when viewed from the visible side.
   * UVs and normal are optional; normal is inferred from the winding.
   */
  addQuad(a, b, c, d, color, uv, normal) {
    const base = this.vertCount;
    const px = this.positions;
    px.push(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2], d[0], d[1], d[2]);

    let nx, ny, nz;
    if (normal) {
      nx = normal[0]; ny = normal[1]; nz = normal[2];
    } else {
      _e1.set(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
      _e2.set(c[0] - a[0], c[1] - a[1], c[2] - a[2]);
      _n.crossVectors(_e1, _e2).normalize();
      nx = _n.x; ny = _n.y; nz = _n.z;
    }
    for (let i = 0; i < 4; i++) this.normals.push(nx, ny, nz);
    if (this.uvs) {
      if (uv) {
        this.uvs.push(uv[0][0], uv[0][1], uv[1][0], uv[1][1], uv[2][0], uv[2][1], uv[3][0], uv[3][1]);
      } else {
        this.uvs.push(0, 0, 1, 0, 1, 1, 0, 1);
      }
    }
    for (let i = 0; i < 4; i++) this.colors.push(color[0], color[1], color[2]);
    this.indices.push(base, base + 1, base + 2, base, base + 2, base + 3);
    this.vertCount += 4;
  }

  addTri(a, b, c, color, uv, normal) {
    const base = this.vertCount;
    this.positions.push(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]);
    let nx, ny, nz;
    if (normal) { nx = normal[0]; ny = normal[1]; nz = normal[2]; }
    else {
      _e1.set(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
      _e2.set(c[0] - a[0], c[1] - a[1], c[2] - a[2]);
      _n.crossVectors(_e1, _e2).normalize();
      nx = _n.x; ny = _n.y; nz = _n.z;
    }
    for (let i = 0; i < 3; i++) this.normals.push(nx, ny, nz);
    if (this.uvs) {
      if (uv) this.uvs.push(uv[0][0], uv[0][1], uv[1][0], uv[1][1], uv[2][0], uv[2][1]);
      else this.uvs.push(0, 0, 1, 0, 0.5, 1);
    }
    for (let i = 0; i < 3; i++) this.colors.push(color[0], color[1], color[2]);
    this.indices.push(base, base + 1, base + 2);
    this.vertCount += 3;
  }

  /**
   * Axis-aligned box. cy is the BOTTOM. uvScale controls texture repeat per world unit.
   */
  box(cx, cy, cz, w, h, d, color, uvScale = 3, topColor = null) {
    const x0 = cx - w / 2, x1 = cx + w / 2;
    const y0 = cy, y1 = cy + h;
    const z0 = cz - d / 2, z1 = cz + d / 2;
    const uy = h / uvScale;
    const top = topColor || color;
    // top
    this.addQuad(
      [x0, y1, z0], [x0, y1, z1], [x1, y1, z1], [x1, y1, z0], top,
      [[x0 / uvScale, z0 / uvScale], [x0 / uvScale, z1 / uvScale], [x1 / uvScale, z1 / uvScale], [x1 / uvScale, z0 / uvScale]],
      [0, 1, 0]
    );
    // sides
    this.addQuad([x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1], color,
      [[z1 / uvScale, 0], [z0 / uvScale, 0], [z0 / uvScale, uy], [z1 / uvScale, uy]], [1, 0, 0]);
    this.addQuad([x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0], color,
      [[z0 / uvScale, 0], [z1 / uvScale, 0], [z1 / uvScale, uy], [z0 / uvScale, uy]], [-1, 0, 0]);
    this.addQuad([x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], color,
      [[x0 / uvScale, 0], [x1 / uvScale, 0], [x1 / uvScale, uy], [x0 / uvScale, uy]], [0, 0, 1]);
    this.addQuad([x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], color,
      [[x1 / uvScale, 0], [x0 / uvScale, 0], [x0 / uvScale, uy], [x1 / uvScale, uy]], [0, 0, -1]);
  }

  /** Horizontal flat quad at y. uvScale = world units per texture tile. */
  flat(x, z, w, d, y, color, uvScale = 4, uvOffset = [0, 0]) {
    const x0 = x - w / 2, x1 = x + w / 2;
    const z0 = z - d / 2, z1 = z + d / 2;
    this.addQuad(
      [x0, y, z0], [x0, y, z1], [x1, y, z1], [x1, y, z0], color,
      [[x0 / uvScale + uvOffset[0], z0 / uvScale + uvOffset[1]], [x0 / uvScale + uvOffset[0], z1 / uvScale + uvOffset[1]], [x1 / uvScale + uvOffset[0], z1 / uvScale + uvOffset[1]], [x1 / uvScale + uvOffset[0], z0 / uvScale + uvOffset[1]]],
      [0, 1, 0]
    );
  }

  /** Octagonal prism approximation — great for tanks and fountain basins. */
  cylinder(cx, cy, cz, radius, height, segments, color, uvScale = 2) {
    const y0 = cy, y1 = cy + height;
    const pts = [];
    for (let i = 0; i < segments; i++) {
      const a = (i / segments) * Math.PI * 2;
      pts.push([cx + Math.cos(a) * radius, cz + Math.sin(a) * radius]);
    }
    for (let i = 0; i < segments; i++) {
      const p0 = pts[i], p1 = pts[(i + 1) % segments];
      const a0 = (i / segments) * Math.PI * 2;
      const nx = Math.cos(a0 + Math.PI / segments), nz = Math.sin(a0 + Math.PI / segments);
      this.addQuad(
        [p0[0], y0, p0[1]], [p1[0], y0, p1[1]], [p1[0], y1, p1[1]], [p0[0], y1, p0[1]], color,
        [[0, 0], [1, 0], [1, height / uvScale], [0, height / uvScale]], [nx, 0, nz]
      );
    }
    // top fan
    for (let i = 1; i < segments - 1; i++) {
      const p0 = pts[0], p1 = pts[i], p2 = pts[i + 1];
      this.addTri(
        [p0[0], y1, p0[1]], [p1[0], y1, p1[1]], [p2[0], y1, p2[1]], color,
        null, [0, 1, 0]
      );
    }
  }

  addGeometry(geom) {
    const pos = geom.getAttribute('position');
    const nrm = geom.getAttribute('normal');
    const colAttr = geom.getAttribute('color');
    if (!pos) return;
    const base = this.vertCount;
    for (let i = 0; i < pos.count; i++) {
      this.positions.push(pos.getX(i), pos.getY(i), pos.getZ(i));
      this.normals.push(nrm ? nrm.getX(i) : 0, nrm ? nrm.getY(i) : 0, nrm ? nrm.getZ(i) : 0);
      if (this.uvs) {
        const uv = geom.getAttribute('uv');
        this.uvs.push(uv ? uv.getX(i) : 0, uv ? uv.getY(i) : 0);
      }
      if (colAttr) this.colors.push(colAttr.getX(i), colAttr.getY(i), colAttr.getZ(i));
      else this.colors.push(1, 1, 1);
    }
    if (geom.index) {
      for (let i = 0; i < geom.index.count; i++) this.indices.push(base + geom.index.getX(i));
    } else {
      for (let i = 0; i < pos.count; i++) this.indices.push(base + i);
    }
    this.vertCount += pos.count;
  }

  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.positions, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.normals, 3));
    if (this.uvs) g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uvs, 2));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.colors, 3));
    g.setIndex(this.indices);
    g.computeBoundingSphere();
    g.computeBoundingBox();
    return g;
  }
}

export function makeRoadTextureMaterial(noiseTex) {
  return new THREE.MeshLambertMaterial({
    map: noiseTex,
    vertexColors: true,
    side: THREE.FrontSide,
  });
}
