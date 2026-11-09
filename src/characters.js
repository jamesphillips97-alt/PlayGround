import * as THREE from 'three';

const GEO = {
  torso: new THREE.BoxGeometry(0.62, 0.72, 0.36),
  head: new THREE.BoxGeometry(0.46, 0.46, 0.46),
  hair: new THREE.BoxGeometry(0.5, 0.13, 0.5),
  cap: new THREE.BoxGeometry(0.52, 0.15, 0.54),
  visor: new THREE.BoxGeometry(0.52, 0.06, 0.2),
  arm: new THREE.BoxGeometry(0.17, 0.62, 0.17),
  leg: new THREE.BoxGeometry(0.24, 0.72, 0.26),
  shoe: new THREE.BoxGeometry(0.26, 0.16, 0.36),
  eye: new THREE.BoxGeometry(0.07, 0.07, 0.03),
  nose: new THREE.BoxGeometry(0.08, 0.08, 0.05),
  badge: new THREE.BoxGeometry(0.1, 0.1, 0.03),
  gun: new THREE.BoxGeometry(0.12, 0.46, 0.13),
  barrel: new THREE.BoxGeometry(0.07, 0.18, 0.08),
};

const SHARED = {
  eye: new THREE.MeshLambertMaterial({ color: 0x14161b }),
  gun: new THREE.MeshLambertMaterial({ color: 0x22262c }),
  shoe: new THREE.MeshLambertMaterial({ color: 0x1c1f24 }),
  badge: new THREE.MeshLambertMaterial({ color: 0xe8c44a }),
  cap: new THREE.MeshLambertMaterial({ color: 0x1b2947 }),
};

const SKIN = [0xd9a273, 0xc08a5a, 0x8d5a3b, 0xf0c39c, 0xa96b44, 0x6e452f];
const SHIRTS = [0x3b6ea5, 0xa53b3b, 0x3f7a4f, 0xc2a13a, 0x6b4a86, 0xd7d7d2, 0x37414d, 0x8f5a2c, 0x2d7c7a];
const PANTS = [0x2f3b4c, 0x3c3c3e, 0x4b3a2d, 0x2a2d31, 0x5a5f66, 0x35473a];

function mat(color) { return new THREE.MeshLambertMaterial({ color }); }

let pedId = 0;

/**
 * Build a chunky low-poly human. Returns a group with animation rig on userData.
 */
export function createHuman(opts = {}) {
  const group = new THREE.Group();
  const skin = opts.skin ?? SKIN[(pedId * 7) % SKIN.length];
  const shirt = opts.shirt ?? SHIRTS[(pedId * 3) % SHIRTS.length];
  const pants = opts.pants ?? PANTS[(pedId * 5) % PANTS.length];
  const hair = opts.hair ?? 0x2b1f17;
  pedId++;

  const skinMat = mat(skin);
  const shirtMat = mat(shirt);
  const pantsMat = mat(pants);
  const hairMat = mat(hair);

  const torso = new THREE.Mesh(GEO.torso, shirtMat);
  torso.position.y = 1.12;
  torso.castShadow = true;
  group.add(torso);

  // neck / waist details
  const head = new THREE.Mesh(GEO.head, skinMat);
  head.position.y = 1.72;
  head.castShadow = true;
  group.add(head);

  const hairMesh = new THREE.Mesh(GEO.hair, hairMat);
  hairMesh.position.y = 1.94;
  hairMesh.castShadow = true;
  group.add(hairMesh);

  for (const sx of [-1, 1]) {
    const eye = new THREE.Mesh(GEO.eye, SHARED.eye);
    eye.position.set(0.11 * sx, 1.75, 0.235);
    group.add(eye);
  }
  const nose = new THREE.Mesh(GEO.nose, skinMat);
  nose.position.set(0, 1.66, 0.25);
  group.add(nose);

  if (opts.cop) {
    const cap = new THREE.Mesh(GEO.cap, SHARED.cap);
    cap.position.y = 1.99;
    cap.castShadow = true;
    group.add(cap);
    const visor = new THREE.Mesh(GEO.visor, SHARED.cap);
    visor.position.set(0, 1.94, 0.31);
    group.add(visor);
    const badge = new THREE.Mesh(GEO.badge, SHARED.badge);
    badge.position.set(0.16, 1.3, 0.19);
    group.add(badge);
  }

  const arms = [];
  const legs = [];
  for (const sx of [-1, 1]) {
    const shoulder = new THREE.Group();
    shoulder.position.set(0.41 * sx, 1.36, 0);
    const arm = new THREE.Mesh(GEO.arm, sx === 1 && opts.cop ? shirtMat : skinMat);
    arm.position.y = -0.3;
    arm.castShadow = true;
    shoulder.add(arm);
    group.add(shoulder);
    arms.push(shoulder);

    const hip = new THREE.Group();
    hip.position.set(0.17 * sx, 0.79, 0);
    const leg = new THREE.Mesh(GEO.leg, pantsMat);
    leg.position.y = -0.36;
    leg.castShadow = true;
    hip.add(leg);
    const shoe = new THREE.Mesh(GEO.shoe, SHARED.shoe);
    shoe.position.set(0, -0.74, 0.06);
    hip.add(shoe);
    group.add(hip);
    legs.push(hip);
  }

  let gunTip = null;
  if (opts.armed) {
    const gun = new THREE.Mesh(GEO.gun, SHARED.gun);
    gun.position.set(0, -0.55, 0.08);
    arms[1].add(gun);
    const barrel = new THREE.Mesh(GEO.barrel, SHARED.gun);
    barrel.position.set(0, -0.18, 0);
    gun.add(barrel);
    gunTip = new THREE.Object3D();
    gunTip.position.set(0, -0.96, 0.02);
    arms[1].add(gunTip);
  }

  group.userData.rig = {
    torso, head, hairMesh, arms, legs, gunTip, shirtMat, skinMat, pantsMat,
    phase: 0, aim: 0, walk: 0,
  };
  group.castShadow = true;
  return group;
}

export function animateHuman(group, dt, speed, opts = {}) {
  const rig = group.userData.rig;
  if (!rig) return;
  const aiming = opts.aiming ? 1 : 0;
  rig.aim += (aiming - rig.aim) * Math.min(1, dt * 12);
  const moving = speed > 0.3;
  rig.walk += dt * (moving ? Math.max(1.6, speed * 1.1) : 0);
  const amp = moving ? Math.min(0.75, speed * 0.085) : 0;
  const swing = Math.sin(rig.walk * 2.2) * amp;
  const swing2 = Math.sin(rig.walk * 2.2 + Math.PI) * amp;
  rig.legs[0].rotation.x = swing;
  rig.legs[1].rotation.x = swing2;
  rig.arms[0].rotation.x = -swing * 0.85 + rig.aim * -0.4;
  rig.arms[1].rotation.x = -swing2 * 0.85 - rig.aim * 1.48;
  rig.arms[1].rotation.z = rig.aim * -0.08;
  rig.arms[0].rotation.z = rig.aim * 0.18;
  const bob = moving ? Math.abs(Math.sin(rig.walk * 2.2)) * 0.045 : 0;
  group.position.y = (opts.baseY ?? 0) + bob;
  if (opts.dead) {
    group.rotation.z = Math.PI / 2 * (opts.deadSign || 1);
    group.position.y = (opts.baseY ?? 0) + 0.22;
    rig.arms[0].rotation.x = -0.4;
    rig.arms[1].rotation.x = 0.5;
  }
}

export function makePickupMesh(kind) {
  const g = new THREE.Group();
  const colors = { health: 0x62e07a, armor: 0x5ab8ff, ammo: 0xffc72c, cash: 0x7bd67b };
  const main = new THREE.MeshLambertMaterial({ color: colors[kind] || 0xffffff, emissive: colors[kind] || 0xffffff, emissiveIntensity: 0.4 });
  const dark = new THREE.MeshLambertMaterial({ color: 0x1b2229 });
  if (kind === 'health') {
    const a = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.22, 0.18), main);
    const b = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.65, 0.18), main);
    a.position.y = 0.8; b.position.y = 0.8;
    g.add(a, b);
    const base = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.14, 1.0), dark);
    base.position.y = 0.12;
    g.add(base);
  } else if (kind === 'armor') {
    const a = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.75, 0.16), main);
    a.position.y = 0.86;
    const cut = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.7, 0.1), dark);
    cut.position.set(0, 0.49, 0);
    g.add(a, cut);
    const base = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.14, 1.0), dark);
    base.position.y = 0.12;
    g.add(base);
  } else if (kind === 'ammo') {
    const box = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.5, 0.5), main);
    box.position.y = 0.55;
    const lid = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.12, 0.56), dark);
    lid.position.y = 0.78;
    g.add(box, lid);
  } else {
    const bag = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.65, 0.5), main);
    bag.position.y = 0.58;
    const strap = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.7, 0.54), dark);
    strap.position.y = 0.6;
    g.add(bag, strap);
  }
  g.traverse(o => { if (o.isMesh) o.castShadow = true; });
  return g;
}

export function disposeHuman(group) {
  group.traverse(o => {
    if (o.isMesh && o.material && o.material.userData?.own) o.material.dispose();
  });
}
