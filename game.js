import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.169.0/build/three.module.js';

const host=document.querySelector('#scene');
const scene=new THREE.Scene(); scene.background=new THREE.Color('#202a21'); scene.fog=new THREE.Fog('#202a21',18,34);
const renderer=new THREE.WebGLRenderer({antialias:true,alpha:false}); renderer.setPixelRatio(Math.min(devicePixelRatio,2)); renderer.shadowMap.enabled=true; renderer.shadowMap.type=THREE.PCFSoftShadowMap; renderer.outputColorSpace=THREE.SRGBColorSpace; renderer.toneMapping=THREE.ACESFilmicToneMapping; renderer.toneMappingExposure=1.15; host.appendChild(renderer.domElement);
const camera=new THREE.OrthographicCamera(-7,7,7,-7,.1,100); let cameraZoom=1,cameraAngle=0;
const target=new THREE.Vector3(5,0,5);
function placeCamera(){const h=Math.max(12.8,15.2/(innerWidth/innerHeight))/cameraZoom;const w=h*innerWidth/innerHeight;camera.left=-w/2;camera.right=w/2;camera.top=h/2;camera.bottom=-h/2;const a=cameraAngle;camera.position.set(target.x+Math.sin(a+Math.PI/4)*17,19,target.z+Math.cos(a+Math.PI/4)*17);camera.lookAt(target);camera.updateProjectionMatrix();}
placeCamera();
scene.add(new THREE.HemisphereLight('#d5dfc0','#384333',2.0));
const sun=new THREE.DirectionalLight('#ffdfaa',3.3);sun.position.set(-7,16,9);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-13;sun.shadow.camera.right=13;sun.shadow.camera.top=13;sun.shadow.camera.bottom=-13;sun.shadow.bias=-.0003;scene.add(sun);
const fill=new THREE.DirectionalLight('#9fc7bf',.75);fill.position.set(12,9,-9);scene.add(fill);
const mat=(color,roughness=.88,extra={})=>new THREE.MeshStandardMaterial({color,roughness,...extra});
const mats={soil:mat('#394a38'),tileA:mat('#536446'),tileB:mat('#4b5e40'),edge:mat('#857659'),wood:mat('#805331'),woodLight:mat('#aa7442'),stone:mat('#737769'),stoneLight:mat('#93937d'),leaf:mat('#536b46'),darkLeaf:mat('#384f39'),grass:mat('#9ca76b'),gold:mat('#f3c46b',.4,{emissive:'#d47c27',emissiveIntensity:.28})};
const floorGroup=new THREE.Group(),objectGroup=new THREE.Group(),effectGroup=new THREE.Group(),decorGroup=new THREE.Group();scene.add(floorGroup,decorGroup,objectGroup,effectGroup);
const tileMeshes=new Map(),objects=new Map(),lava=new Map(),pickups=new Map();const key=(x,z)=>`${x},${z}`,inside=(x,z)=>x>=0&&x<11&&z>=0&&z<11;
const boxGeo=new THREE.BoxGeometry(1,1,1);
function box(parent,geo,material,x,y,z,sx=1,sy=1,sz=1){const m=new THREE.Mesh(geo,material);m.position.set(x,y,z);m.scale.set(sx,sy,sz);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
// Floating garden plinth and the quiet, mossy grid beneath it.
box(floorGroup,boxGeo,mat('#353f31'),5,-.4,5,12,.75,12);
box(floorGroup,boxGeo,mat('#756c52'),5,-.79,5,12.25,.12,12.25);
for(let z=0;z<11;z++)for(let x=0;x<11;x++){
 const tile=box(floorGroup,boxGeo,mat((x+z)%2?'#506044':'#596849'),x,0,z,.98,.12,.98);tile.position.y=-.065;tile.userData={x,z};tileMeshes.set(key(x,z),tile);
 if((x*13+z*7)%9===0){const tuft=box(decorGroup,new THREE.ConeGeometry(.045,.17,4),mats.grass,x-.22,-.005,z+.18,.65,1,.65);tuft.rotation.z=.14;}
}
for(let i=1;i<10;i++){for(const [x,z] of [[i,1],[9,i]]){const p=box(decorGroup,boxGeo,mat('#777760'),x,.015,z,.78,.08,.78);p.rotation.y=((i*3)%5)*.12;}}
function makeObject(x,z,type){
 const g=new THREE.Group();g.position.set(x,0,z);objectGroup.add(g);
 if(type==='wood'){
  const body=box(g,boxGeo,mats.wood,0,.39,0,.78,.72,.72);body.userData.burnable=true;
  for(const s of [-1,1])box(g,boxGeo,mats.woodLight,s*.31,.44,0,.12,.9,.82);
  box(g,boxGeo,mats.woodLight,0,.52,0,.79,.14,.83);box(g,boxGeo,mats.wood,-.04,.24,0,.78,.14,.77);g.userData={x,z,type,health:0};
 }else if(type==='stone'){
  const b=box(g,new THREE.DodecahedronGeometry(.48,0),mats.stone,0,.39,0,.92,.84,.9);b.rotation.set(.16,.3,.1);
  const chip=box(g,new THREE.DodecahedronGeometry(.16,0),mats.stoneLight,.22,.71,-.1,.9,.7,.8);chip.rotation.y=.4;g.userData={x,z,type};
 }else if(type==='shrub'){
  for(let i=0;i<5;i++){const a=i*1.26;const b=box(g,new THREE.DodecahedronGeometry(.29,1),i%2?mats.leaf:mats.darkLeaf,Math.cos(a)*.18,.27+(i%2)*.12,Math.sin(a)*.18,1.1,1,.9);b.rotation.set(a,.2,a*.2);}
  g.userData={x,z,type};
 }
 objects.set(key(x,z),g);return g;
}
[[3,1],[4,2],[4,3],[7,4],[7,5],[5,7],[6,8],[2,7]].forEach(([x,z])=>makeObject(x,z,'wood'));
[[6,2],[6,3],[8,6],[3,8]].forEach(([x,z])=>makeObject(x,z,'stone'));
[[2,4],[8,2],[3,6],[9,8],[5,4],[1,8],[8,9],[4,9]].forEach(([x,z])=>makeObject(x,z,'shrub'));
function tree(x,z,size=1){const g=new THREE.Group();g.position.set(x,0,z);decorGroup.add(g);box(g,new THREE.CylinderGeometry(.09,.16,.9,6),mat('#67513a'),0,.42,0,size,size,size);for(let i=0;i<3;i++){const crown=new THREE.Mesh(new THREE.IcosahedronGeometry(.54-i*.09,1),i===1?mats.leaf:mats.darkLeaf);crown.position.set((i%2-.5)*.2,.92+i*.26,0);crown.scale.set(size,size*.85,size);crown.castShadow=true;g.add(crown);}}
[[.1,.3,1.2],[10.8,.4,.9],[.3,10.6,1],[10.8,10.5,1.15],[1.3,10.9,.8],[9.6,.1,.8]].forEach(v=>tree(...v));
for(let i=0;i<21;i++){let x=(i*17%109)/10,z=(i*31%109)/10;if((x<1||x>10||z<1||z>10)&&inside(Math.floor(x),Math.floor(z)))box(decorGroup,new THREE.DodecahedronGeometry(.22+(i%3)*.06),i%2?mats.stone:mats.darkLeaf,x,.03,z,1,1.25,.9);}
function addEmber(x,z){const g=new THREE.Group();g.position.set(x,0,z);decorGroup.add(g);const base=new THREE.Mesh(new THREE.CylinderGeometry(.28,.34,.18,7),mat('#776347'));base.position.y=.08;base.castShadow=true;g.add(base);const orb=new THREE.Mesh(new THREE.OctahedronGeometry(.22,1),mats.gold);orb.position.y=.46;orb.castShadow=true;g.add(orb);const light=new THREE.PointLight('#ff9c42',1.1,2.4);light.position.y=.6;g.add(light);pickups.set(key(x,z),{group:g,orb,light,got:false,x,z});}
[[9,2],[8,8],[2,9]].forEach(([x,z])=>addEmber(x,z));
const player=new THREE.Group();scene.add(player);const playerBody=new THREE.Mesh(new THREE.CapsuleGeometry(.22,.38,4,8),mat('#d58b54',.65));playerBody.position.y=.52;playerBody.castShadow=true;player.add(playerBody);const hood=new THREE.Mesh(new THREE.SphereGeometry(.24,10,8),mat('#b96842'));hood.position.set(0,.82,0);hood.castShadow=true;player.add(hood);box(player,boxGeo,mat('#66543b'),0,.48,-.22,.25,.3,.13);const bucket=new THREE.Mesh(new THREE.CylinderGeometry(.12,.16,.22,8,1,true),mat('#c5a872',.5,{metalness:.2}));bucket.position.set(.28,.28,.05);bucket.rotation.z=-.12;bucket.castShadow=true;player.add(bucket);
const state={x:1,z:1,tool:'move',planks:5,charges:3,collected:0,burning:0,walkQueue:[],walking:false,sound:true,won:false};player.position.set(state.x,0,state.z);

const $=s=>document.querySelector(s),toastEl=$('#toast');let toastTimer;
function toast(text){toastEl.textContent=text;toastEl.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toastEl.classList.remove('show'),2100);}
const captions={move:['Choose a tile to move','Tap a nearby tile to walk there.'],pour:['Pour a little lava','Burn timber or warm the ground.'],build:['Rebuild the courtyard','Place a plank wall on clear ground.'],break:['Clear the way','Dismantle an obstacle and reclaim planks.']};
function setTool(t){state.tool=t;document.querySelectorAll('.tool').forEach(b=>b.classList.toggle('active',b.dataset.tool===t));$('#toolCaption').textContent=captions[t][0];$('#toolTip').textContent=captions[t][1];}
document.querySelectorAll('.tool').forEach(b=>b.addEventListener('click',()=>setTool(b.dataset.tool)));
function hud(){const dots=$('#chargeDots').children;[...dots].forEach((d,i)=>d.classList.toggle('empty',i>=state.charges));$('#scrapCount').textContent=state.planks;$('#progressCount').innerHTML=`${state.collected} <small>/ 3</small>`;$('#progressFill').style.width=`${state.collected/3*100}%`;const close=[...lava.values()].some(l=>Math.abs(l.x-state.x)+Math.abs(l.z-state.z)<=2);$('#heatStatus').textContent=close?'HEAT NEARBY':'COOL ENOUGH';$('#heatStatus').style.color=close?'#f0a267':'';}
function distance(x,z){return Math.abs(state.x-x)+Math.abs(state.z-z)}
function getPath(sx,sz,tx,tz){const q=[[sx,sz]],prev=new Map([[key(sx,sz),null]]);while(q.length){const [x,z]=q.shift();if(x===tx&&z===tz)break;for(const [nx,nz] of [[x+1,z],[x-1,z],[x,z+1],[x,z-1]]){const k=key(nx,nz);if(!inside(nx,nz)||prev.has(k)||objects.has(k)||lava.has(k))continue;prev.set(k,key(x,z));q.push([nx,nz]);}}const end=key(tx,tz);if(!prev.has(end))return null;const path=[];let k=end;while(k&&k!==key(sx,sz)){const [x,z]=k.split(',').map(Number);path.unshift([x,z]);k=prev.get(k);}return path;}
function collectHere(){const p=pickups.get(key(state.x,state.z));if(p&&!p.got){p.got=true;state.collected++;p.group.visible=false;hud();toast(`Ember seed found · ${state.collected} of 3`);if(state.collected===3){state.won=true;$('#missionTitle').textContent='The courtyard is yours';$('#missionCopy').textContent='All three ember seeds are back home.';$('#winBanner').classList.remove('hidden');}}}
function moveTo(x,z){if(state.walking)return;if(!inside(x,z)||objects.has(key(x,z))||lava.has(key(x,z))){toast('That way is blocked');return;}const path=getPath(state.x,state.z,x,z);if(!path){toast('No clear path — make one with your tools');return;}if(!path.length)return;state.walkQueue=path;state.walking=true;setTool('move');}
function addLava(x,z){if(!state.charges){toast('The bucket is empty — it refills over time');return;}const k=key(x,z);if(lava.has(k)){toast('There is already lava on this tile');return;}state.charges--;const g=new THREE.Group();g.position.set(x,.025,z);effectGroup.add(g);const pool=new THREE.Mesh(new THREE.CircleGeometry(.4,16),new THREE.MeshStandardMaterial({color:'#ed5b20',emissive:'#ff4b0d',emissiveIntensity:1.55,roughness:.35,transparent:true,opacity:.91}));pool.rotation.x=-Math.PI/2;pool.scale.set(1,.82,1);g.add(pool);const core=new THREE.Mesh(new THREE.CircleGeometry(.21,12),new THREE.MeshBasicMaterial({color:'#ffd072',transparent:true,opacity:.9}));core.rotation.x=-Math.PI/2;core.position.y=.008;g.add(core);const light=new THREE.PointLight('#ff6324',1.8,2.7);light.position.y=.5;g.add(light);const sparks=[];for(let i=0;i<5;i++){const sp=new THREE.Mesh(new THREE.IcosahedronGeometry(.065,0),new THREE.MeshBasicMaterial({color:i%2?'#ff8b38':'#ffce69'}));sp.position.set((Math.random()-.5)*.62,.12+Math.random()*.25,(Math.random()-.5)*.62);g.add(sp);sparks.push({mesh:sp,phase:Math.random()*6});}lava.set(k,{group:g,pool,core,light,sparks,x,z,time:0,duration:7.5,burning:objects.get(k)?.userData.type==='wood'?2.7:0});if(lava.get(k).burning){objects.get(k).userData.burning=2.7;toast('Timber is catching — give it a moment');}else toast('A little lava, right where you need it');hud();}
function removeObstacle(x,z,fromLava=false){const k=key(x,z),g=objects.get(k);if(!g)return;const type=g.userData.type;objectGroup.remove(g);g.traverse(o=>{if(o.geometry)o.geometry.dispose();});objects.delete(k);if(type==='wood'){state.planks=Math.min(9,state.planks+1);if(!fromLava)toast('Wall dismantled · +1 plank');}else if(type==='stone'&&!fromLava)toast('Stone cleared');else if(type==='shrub'&&!fromLava)toast('The undergrowth gives way');hud();}
function act(x,z){if(!inside(x,z))return;const k=key(x,z),obj=objects.get(k);
 if(state.tool==='move'){moveTo(x,z);return;}
 if(distance(x,z)>2){toast('That is out of reach — move a little closer');return;}
 if(state.tool==='pour'){if(!state.charges){toast('The bucket is empty — it refills over time');return;}if(obj&&obj.userData.type==='stone'){toast('Lava cannot melt stone');return;}if(obj&&obj.userData.type==='shrub'){toast('Clear the brush with Break first');return;}addLava(x,z);return;}
 if(state.tool==='break'){if(!obj){toast('Nothing here to break');return;}removeObstacle(x,z);return;}
 if(state.tool==='build'){if(distance(x,z)>1){toast('Build within one tile of your explorer');return;}if(state.planks<1){toast('No planks left — break a wooden wall');return;}if(obj||lava.has(k)||pickups.has(k)){toast('That tile is already occupied');return;}if(x===state.x&&z===state.z){toast('Not under your feet!');return;}makeObject(x,z,'wood');state.planks--;hud();toast('A fresh wall, made by you');}
}
const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();let down=null,dragged=false,pointers=new Map(),pinchBase=0;
function canvasPoint(ev){const r=renderer.domElement.getBoundingClientRect();pointer.x=((ev.clientX-r.left)/r.width)*2-1;pointer.y=-((ev.clientY-r.top)/r.height)*2+1;raycaster.setFromCamera(pointer,camera);const hit=raycaster.intersectObjects([...tileMeshes.values()],false)[0];if(hit)return hit.object.userData;return null;}
renderer.domElement.addEventListener('pointerdown',e=>{down={x:e.clientX,y:e.clientY,id:e.pointerId};dragged=false;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pointers.size===2){const a=[...pointers.values()];pinchBase=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);}});
renderer.domElement.addEventListener('pointermove',e=>{if(!pointers.has(e.pointerId))return;const old=pointers.get(e.pointerId);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pointers.size>=2){const a=[...pointers.values()];const d=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);if(pinchBase){cameraZoom=Math.min(1.7,Math.max(.7,cameraZoom*d/pinchBase));placeCamera();}pinchBase=d;dragged=true;return;}if(down){const dx=e.clientX-down.x,dy=e.clientY-down.y;if(Math.hypot(dx,dy)>8){dragged=true;cameraAngle+=dx*.008;cameraZoom=Math.min(1.7,Math.max(.7,cameraZoom-dy*.001));placeCamera();down={x:e.clientX,y:e.clientY,id:e.pointerId};}}});
renderer.domElement.addEventListener('pointerup',e=>{const p=down;pointers.delete(e.pointerId);pinchBase=0;if(p&&!dragged){const t=canvasPoint(e);if(t)act(t.x,t.z);}down=null;});renderer.domElement.addEventListener('pointercancel',e=>{pointers.delete(e.pointerId);down=null;});renderer.domElement.addEventListener('contextmenu',e=>e.preventDefault());
$('#rotateLeft').addEventListener('click',()=>{cameraAngle-=Math.PI/4;placeCamera();});$('#rotateRight').addEventListener('click',()=>{cameraAngle+=Math.PI/4;placeCamera();});
function step(dx,dz){moveTo(state.x+dx,state.z+dz);}
addEventListener('keydown',e=>{if(e.key==='1')setTool('move');if(e.key==='2')setTool('pour');if(e.key==='3')setTool('build');if(e.key==='4')setTool('break');const d={ArrowUp:[0,-1],w:[0,-1],ArrowDown:[0,1],s:[0,1],ArrowLeft:[-1,0],a:[-1,0],ArrowRight:[1,0],d:[1,0]}[e.key];if(d){e.preventDefault();step(...d);}if(e.key==='Escape')$('#modal').classList.add('hidden');});
$('#helpBtn').addEventListener('click',()=>$('#modal').classList.remove('hidden'));$('#closeModal').addEventListener('click',()=>$('#modal').classList.add('hidden'));$('#gotIt').addEventListener('click',()=>$('#modal').classList.add('hidden'));$('#modal').addEventListener('click',e=>{if(e.target.id==='modal')$('#modal').classList.add('hidden');});$('#keepPlaying').addEventListener('click',()=>$('#winBanner').classList.add('hidden'));
$('#soundBtn').addEventListener('click',e=>{state.sound=!state.sound;e.currentTarget.textContent=state.sound?'♫':'♪';e.currentTarget.title=state.sound?'Sound on':'Sound off';toast(state.sound?'Sound on':'Sound off');});
let last=performance.now(),recharge=0,toastShown=false;
function animate(now){requestAnimationFrame(animate);const dt=Math.min(.05,(now-last)/1000);last=now;const t=now/1000;
 if(state.walkQueue.length){const next=state.walkQueue[0];const dx=next[0]-player.position.x,dz=next[1]-player.position.z;player.rotation.y=Math.atan2(dx,dz);const d=Math.hypot(dx,dz);const speed=3.5*dt;if(d<=speed){player.position.set(next[0],0,next[1]);state.x=next[0];state.z=next[1];state.walkQueue.shift();collectHere();if(!state.walkQueue.length)state.walking=false;}else{player.position.x+=dx/d*speed;player.position.z+=dz/d*speed;}playerBody.position.y=.52+Math.sin(t*15)*.025;hood.position.y=.82+Math.sin(t*15)*.025;}else{playerBody.position.y=.52+Math.sin(t*2.7)*.018;hood.position.y=.82+Math.sin(t*2.7)*.018;}
 for(const [k,l] of [...lava]){l.time+=dt;l.pool.scale.setScalar(.94+Math.sin(t*5+l.x)*.07);l.core.material.opacity=.66+Math.sin(t*8)*.22;l.light.intensity=1.4+Math.sin(t*7+l.z)*.35;for(const s of l.sparks){s.mesh.position.y=.1+((t*1.1+s.phase)%1)*.52;s.mesh.material.opacity=1-((t*1.1+s.phase)%1);s.mesh.scale.setScalar(.75+Math.sin(t*8+s.phase)*.25);}if(l.burning>0){l.burning-=dt;const obj=objects.get(k);if(obj){obj.rotation.z=Math.sin(t*22)*.012;obj.traverse(m=>{if(m.material&&m.userData.burnable){m.material.emissive=new THREE.Color('#f05213');m.material.emissiveIntensity=.4+Math.sin(t*10)*.24;}});}if(l.burning<=0)removeObstacle(l.x,l.z,true);}if(l.time>l.duration){effectGroup.remove(l.group);l.group.traverse(o=>{if(o.geometry)o.geometry.dispose();});lava.delete(k);hud();}}
 recharge+=dt;if(recharge>=7&&state.charges<3){recharge=0;state.charges++;hud();if(state.charges===3)toast('Bucket refilled');}else if(state.charges===3)recharge=0;
 for(const p of pickups.values())if(!p.got){p.orb.rotation.y=t*1.1;p.orb.position.y=.46+Math.sin(t*2.2+p.x)*.07;p.light.intensity=1+Math.sin(t*3)*.25;}
 hud();renderer.render(scene,camera);if(!toastShown){toast('Tap a tile to explore');toastShown=true;}}
requestAnimationFrame(animate);
function resize(){renderer.setSize(innerWidth,innerHeight,false);placeCamera();}addEventListener('resize',resize);resize();
