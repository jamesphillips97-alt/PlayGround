(() => {
  'use strict';
  const canvas = document.getElementById('scene');
  const ctx = canvas.getContext('2d', { alpha: false });
  const $ = (id) => document.getElementById(id);
  const ui = { start: $('start-screen'), finish: $('finish-screen'), pause: $('pause-screen'), hud: $('hud'), toast: $('toast') };
  const LAP_LENGTH = 620, LAPS = 3, RACE_LENGTH = LAP_LENGTH * LAPS;
  const COLORS = ['#df6739','#4f9fa2','#d7bb59','#8174bd','#4a9b69'];
  let W = 0, H = 0, dpr = 1, last = 0, toastTimer = 0, audioCtx = null, engineOsc = null, engineGain = null;
  let soundOn = true, state = 'menu', elapsed = 0, progress = 0, speed = 0, playerX = 0, boost = 36, condition = 100, hitCooldown = 0, boostTimer = 0, steerInput = 0, bestTime = Number(localStorage.getItem('boxrun-best') || 0);
  const keys = new Set();
  const rivals = [];
  const pickups = [];
  const hazards = [];
  const scenery = [];
  const rand = (seed) => { let x = Math.sin(seed * 9283.41 + 17.73) * 43758.5453; return x - Math.floor(x); };
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const fmtTime = (seconds) => { const m = Math.floor(seconds / 60); const s = Math.floor(seconds % 60); const cs = Math.floor((seconds % 1) * 100); return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}.${String(cs).padStart(2,'0')}`; };
  const ordinal = (n) => n === 1 ? '1ST' : n === 2 ? '2ND' : n === 3 ? '3RD' : `${n}TH`;
  function resize() { const r = canvas.getBoundingClientRect(); W = r.width; H = r.height; dpr = Math.min(2, window.devicePixelRatio || 1); canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr); ctx.setTransform(dpr,0,0,dpr,0,0); }
  window.addEventListener('resize', resize); resize();
  function roadCenter(distance) { const t = ((distance % LAP_LENGTH) + LAP_LENGTH) % LAP_LENGTH; return Math.sin(t * .0088) * 3.1 + Math.sin(t * .019 + .4) * 1.15 + Math.sin(t * .0034 + 1.5) * 2.1; }
  function cameraCenter() { return roadCenter(progress); }
  function project(x, y, depth) { const focal = H * .96; const z = Math.max(2, depth); const scale = focal / z; return { x: W * .5 + (x - cameraCenter() - playerX) * scale, y: H * .325 + (3.65 - y) * scale, scale }; }
  function pathPoly(points, fill, stroke, lineWidth=1) { ctx.beginPath(); points.forEach((p,i) => { if (!i) ctx.moveTo(p.x,p.y); else ctx.lineTo(p.x,p.y); }); ctx.closePath(); if (fill) { ctx.fillStyle=fill; ctx.fill(); } if (stroke) { ctx.strokeStyle=stroke; ctx.lineWidth=lineWidth; ctx.stroke(); } }
  function quad(x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4, fill) { pathPoly([project(x1,y1,z1),project(x2,y2,z2),project(x3,y3,z3),project(x4,y4,z4)],fill); }
  function roundedRect(x,y,w,h,r,fill) { ctx.fillStyle=fill; ctx.beginPath(); ctx.roundRect(x,y,w,h,r); ctx.fill(); }
  function initWorld() {
    rivals.length=0; pickups.length=0; hazards.length=0; scenery.length=0;
    for (let i=0;i<5;i++) rivals.push({ id:i, name:['MILO','TAPE DECK','FLATPACK','PUDGE','THE CRUSHER'][i], color:COLORS[i], d:16+i*19, x:[-2.6,2.4,-.9,3.8,-3.9][i], speed:31+rand(i+8)*5, phase:i*1.9, wobble:rand(i+31)*.8 });
    for(let i=0;i<90;i++) { const d=23+i*22+(rand(i+101)-.5)*7; if (i%4===0) pickups.push({d,x:(rand(i+37)-.5)*7,type:i%8===0?'boost':'scrap',taken:false}); else hazards.push({d,x:(rand(i+57)-.5)*7,type:i%3===0?'tire':'cone',hit:false}); }
    for(let i=0;i<130;i++) scenery.push({d:i*12+4,side:rand(i+400)>.5?1:-1,type:i%5===0?'billboard':i%4===0?'cactus':'tree',scale:.7+rand(i+900)*.7,variant:rand(i+777)});
  }
  initWorld();
  function drawBackground() {
    const sky=ctx.createLinearGradient(0,0,0,H*.68); sky.addColorStop(0,'#527d88'); sky.addColorStop(.52,'#a8c4ba'); sky.addColorStop(1,'#e5c398'); ctx.fillStyle=sky; ctx.fillRect(0,0,W,H);
    const sunX=W*.73, sunY=H*.21; const glow=ctx.createRadialGradient(sunX,sunY,5,sunX,sunY,H*.24); glow.addColorStop(0,'rgba(255,230,167,.52)');glow.addColorStop(1,'rgba(255,230,167,0)');ctx.fillStyle=glow;ctx.fillRect(sunX-H*.25,sunY-H*.25,H*.5,H*.5);
    ctx.fillStyle='#ffdda0';ctx.beginPath();ctx.arc(sunX,sunY,H*.052,0,Math.PI*2);ctx.fill();
    const shift=(progress%LAP_LENGTH)*.025;
    for(let layer=0;layer<3;layer++){const y=H*(.31+layer*.045);ctx.beginPath();ctx.moveTo(0,H*.48);for(let x=0;x<=W+20;x+=20){const px=x/W;const yy=y+Math.sin(px*8+layer*1.6+shift*.01)*H*(.025+layer*.009)+Math.sin(px*21+layer)*H*.012;ctx.lineTo(x,yy);}ctx.lineTo(W,H*.55);ctx.lineTo(0,H*.55);ctx.closePath();ctx.fillStyle=['#7b9d8f','#708c79','#627a66'][layer];ctx.fill();}
    ctx.fillStyle='#758b66';ctx.fillRect(0,H*.46,W,H*.54);
  }
  function drawRoad() {
    const start=Math.floor((progress-10)/5)*5, end=progress+230;
    for(let d=Math.floor(end/5)*5;d>=start;d-=5){const d2=d+5;const z1=d-progress+14,z2=d2-progress+14;if(z1<3)continue;const c1=roadCenter(d),c2=roadCenter(d2);const a=Math.floor(d/5);const grass=a%2===0?'#768957':'#718452';
      quad(-150,0,z1,150,0,z1,150,0,z2,-150,0,z2,grass);
      const roadside=(a%2===0)?'#e4d7b8':'#cf6845';
      quad(c1-6.1,0,z1,c1-5.45,0,z1,c2-5.45,0,z2,c2-6.1,0,z2,roadside);
      quad(c1+5.45,0,z1,c1+6.1,0,z1,c2+6.1,0,z2,c2+5.45,0,z2,roadside);
      const road=(a%2===0)?'#45484a':'#414447';
      quad(c1-5.45,0,z1,c1+5.45,0,z1,c2+5.45,0,z2,c2-5.45,0,z2,road);
      const line=(a%2===0)?'rgba(248,226,179,.75)':'rgba(248,226,179,.25)';
      quad(c1-5.28,0.015,z1,c1-5.16,0.015,z1,c2-5.16,0.015,z2,c2-5.28,0.015,z2,line);
      quad(c1+5.16,0.015,z1,c1+5.28,0.015,z1,c2+5.28,0.015,z2,c2+5.16,0.015,z2,line);
      if(a%3===0){const dash='#d7d1b3';quad(c1-.055,0.02,z1,c1+.055,0.02,z1,c2+.055,0.02,z2,c2-.055,0.02,z2,dash);}
    }
  }
  function drawTree(item) {
    const depth=item.d-progress+14;if(depth<8||depth>175)return;const cx=roadCenter(item.d)+item.side*(8+item.variant*3);const p=project(cx,0,depth), s=p.scale*item.scale;
    if(p.x<-100||p.x>W+100)return;
    if(item.type==='billboard'){const bw=s*1.4,bh=s*.62;ctx.fillStyle='#453b30';ctx.fillRect(p.x-bw/2,p.y-bh*1.7,bw,bh);ctx.fillStyle=item.variant>.5?'#e56f46':'#e5c46e';ctx.fillRect(p.x-bw/2+2,p.y-bh*1.7+2,bw-4,bh-4);ctx.fillStyle='#26373b';ctx.font=`900 ${Math.max(3,s*.21)}px sans-serif`;ctx.textAlign='center';ctx.fillText('BOX RUN',p.x,p.y-bh*1.22);ctx.fillStyle='#584a37';ctx.fillRect(p.x-s*.035,p.y-bh*.98,s*.07,bh*.98);return;}
    if(item.type==='cactus'){ctx.fillStyle='#456b51';ctx.fillRect(p.x-s*.09,p.y-s*1.2,s*.18,s*1.2);ctx.fillRect(p.x-s*.4,p.y-s*.8,s*.14,s*.52);ctx.fillRect(p.x-s*.4,p.y-s*.8,s*.39,s*.14);ctx.fillRect(p.x+s*.24,p.y-s*.95,s*.14,s*.43);ctx.fillRect(p.x+s*.1,p.y-s*.95,s*.28,s*.14);return;}
    ctx.fillStyle='rgba(25,41,37,.18)';ctx.beginPath();ctx.ellipse(p.x,p.y,s*.52,s*.13,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#594b36';ctx.fillRect(p.x-s*.075,p.y-s*.9,s*.15,s*.9);ctx.fillStyle=item.variant>.5?'#365d47':'#426b4c';ctx.beginPath();ctx.moveTo(p.x,p.y-s*1.75);ctx.lineTo(p.x-s*.56,p.y-s*.64);ctx.lineTo(p.x+s*.52,p.y-s*.64);ctx.closePath();ctx.fill();ctx.fillStyle='#507754';ctx.beginPath();ctx.moveTo(p.x,p.y-s*1.4);ctx.lineTo(p.x-s*.43,p.y-s*.35);ctx.lineTo(p.x+s*.43,p.y-s*.35);ctx.closePath();ctx.fill();
  }
  function boxCar(x, depth, color, size=1, isPlayer=false, name='') {
    const z=depth, w=1.05*size, len=1.12*size, h=1.72*size, bottom=.48*size;
    const c=roadCenter(progress+(depth-14));
    const xx=x+c;
    const pts=(lx,y,dz)=>project(xx+lx,y,z+dz);
    const shadow=pts(0,.01,-.05);ctx.fillStyle='rgba(20,25,24,.34)';ctx.beginPath();ctx.ellipse(shadow.x,shadow.y,w*shadow.scale*1.18,w*shadow.scale*.35,0,0,Math.PI*2);ctx.fill();
    // Rear and side panels of the corrugated box.
    pathPoly([pts(-w,bottom,-len),pts(w,bottom,-len),pts(w,bottom+h,-len),pts(-w,bottom+h,-len)],color);
    pathPoly([pts(w,bottom,-len),pts(w,bottom,len),pts(w,bottom+h*.86,len),pts(w,bottom+h,-len)],'#98663f');
    pathPoly([pts(-w,bottom+h,-len),pts(w,bottom+h,-len),pts(w*.83,bottom+h*1.16,len*.28),pts(-w*.87,bottom+h*1.16,len*.28)],'#d6a36b');
    // Tape, fold seams, shipping marks.
    pathPoly([pts(-.13*size,bottom,-len-.004),pts(.13*size,bottom,-len-.004),pts(.13*size,bottom+h,-len-.004),pts(-.13*size,bottom+h,-len-.004)],'#e4c487');
    const left=pts(-w*.74,bottom+h*.71,-len-.01), right=pts(-w*.36,bottom+h*.71,-len-.01), low=pts(-w*.36,bottom+h*.36,-len-.01);pathPoly([left,right,low], 'rgba(86,61,40,.44)');
    const seamA=pts(-w*.8,bottom+h*.91,-len-.012), seamB=pts(w*.8,bottom+h*.91,-len-.012);ctx.strokeStyle='rgba(88,58,35,.35)';ctx.lineWidth=Math.max(.5,seamA.scale*.016);ctx.beginPath();ctx.moveTo(seamA.x,seamA.y);ctx.lineTo(seamB.x,seamB.y);ctx.stroke();
    // Wheels (visible at the back corners).
    for(const side of [-1,1]){const p=pts(side*w*1.04,.42*size,-len*.34);const r=p.scale*.27*size;ctx.fillStyle='#1c2021';ctx.beginPath();ctx.ellipse(p.x,p.y,r,r*1.27,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#a5a08c';ctx.beginPath();ctx.ellipse(p.x,p.y,r*.43,r*.55,0,0,Math.PI*2);ctx.fill();}
    // Tail lamps.
    for(const side of [-1,1]){const p=pts(side*w*.75,bottom+h*.16,-len-.02);ctx.fillStyle='#e65c3f';ctx.fillRect(p.x-p.scale*.075,p.y-p.scale*.12,p.scale*.15,p.scale*.16);}
    if(isPlayer){const glow=project(xx,bottom+h*.68,z-len-.02);ctx.fillStyle='#ef7349';ctx.font=`800 ${Math.max(8,glow.scale*.18)}px sans-serif`;ctx.textAlign='center';ctx.fillText('HANDLE WITH CARE',glow.x,glow.y);}
    if(name){const p=project(xx,bottom+h+.27,z);const sc=clamp(p.scale*.25,8,14);ctx.font=`800 ${sc}px sans-serif`;ctx.textAlign='center';ctx.fillStyle='rgba(18,30,34,.76)';roundedRect(p.x-sc*2.7,p.y-sc*.9,sc*5.4,sc*1.35,sc*.5,'rgba(18,30,34,.66)');ctx.fillStyle='#fff5de';ctx.fillText(name,p.x,p.y);}
  }
  function drawCone(obj, depth) {
    const c=roadCenter(obj.d), p=project(c+obj.x,0,depth),s=p.scale;
    if(obj.type==='tire'){const r=s*.38;ctx.fillStyle='#202326';ctx.beginPath();ctx.ellipse(p.x,p.y-r*.45,r,r*.49,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#566061';ctx.beginPath();ctx.ellipse(p.x,p.y-r*.45,r*.46,r*.23,0,0,Math.PI*2);ctx.fill();return;}
    ctx.fillStyle='#db7048';ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(p.x-s*.25,p.y-s*.68);ctx.lineTo(p.x+s*.25,p.y-s*.68);ctx.closePath();ctx.fill();ctx.fillStyle='#f0ead4';ctx.beginPath();ctx.moveTo(p.x-s*.17,p.y-s*.29);ctx.lineTo(p.x-s*.13,p.y-s*.43);ctx.lineTo(p.x+s*.13,p.y-s*.43);ctx.lineTo(p.x+s*.17,p.y-s*.29);ctx.closePath();ctx.fill();ctx.fillStyle='#bd5038';ctx.fillRect(p.x-s*.32,p.y-s*.05,s*.64,s*.08);
  }
  function drawPickup(obj,depth){const c=roadCenter(obj.d),p=project(c+obj.x,.7,depth);const s=p.scale;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(Math.sin(elapsed*3+obj.d)*.16);if(obj.type==='boost'){ctx.fillStyle='#6fc5be';ctx.beginPath();ctx.arc(0,0,s*.28,0,Math.PI*2);ctx.fill();ctx.fillStyle='#163a42';ctx.font=`900 ${Math.max(8,s*.34)}px sans-serif`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('B',0,1);}else{ctx.fillStyle='#e0b46e';ctx.fillRect(-s*.3,-s*.2,s*.6,s*.4);ctx.strokeStyle='#8c613c';ctx.lineWidth=Math.max(1,s*.025);ctx.strokeRect(-s*.3,-s*.2,s*.6,s*.4);ctx.beginPath();ctx.moveTo(0,-s*.19);ctx.lineTo(0,s*.19);ctx.stroke();}ctx.restore();}
  function drawWorld() {
    drawBackground();drawRoad();
    for(const item of scenery)drawTree(item);
    const actors=rivals.filter(r=>r.d>progress-8&&r.d<progress+155).sort((a,b)=>b.d-a.d);
    for(const r of actors){const depth=r.d-progress+14;if(depth>4)boxCar(r.x,depth,r.color,.76,false);}
    for(const h of hazards){const depth=h.d-progress+14;if(!h.hit&&depth>4&&depth<125)drawCone(h,depth);}
    for(const p of pickups){const depth=p.d-progress+14;if(!p.taken&&depth>4&&depth<125)drawPickup(p,depth);}
    if(state!=='menu')boxCar(playerX,14,'#bd8552',1,true);
    else {boxCar(0,14,'#bd8552',1,true);}
    // subtle streaks during boost
    if(boostTimer>0){ctx.strokeStyle='rgba(239,249,230,.38)';ctx.lineWidth=2;for(let i=0;i<12;i++){const x=((i*137+elapsed*430)%W),y=H*(.48+((i*37)%45)/100);ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+(x<W/2?-1:1)*12,y+22);ctx.stroke();}}
  }
  function update(dt) {
    if(state!=='race')return;
    elapsed+=dt;hitCooldown=Math.max(0,hitCooldown-dt);boostTimer=Math.max(0,boostTimer-dt);
    let steer=(keys.has('ArrowLeft')||keys.has('a')||keys.has('A')?-1:0)+(keys.has('ArrowRight')||keys.has('d')||keys.has('D')?1:0)+steerInput;
    const boosting=(keys.has(' ')||keys.has('Spacebar'))&&boost>0;
    const maxSpeed=boosting?52:39;
    speed += (speed<maxSpeed?15: -10)*dt; speed=clamp(speed,0,maxSpeed);
    if(boosting){boost=Math.max(0,boost-31*dt);boostTimer=.18;}else boost=Math.min(100,boost+1.4*dt);
    progress+=speed*(dt/3.6);playerX+=steer*dt*(2.5+speed*.11);playerX=clamp(playerX,-8.5,8.5);
    if(Math.abs(playerX)>4.8){speed=Math.max(12,speed-10*dt);if(Math.random()<dt*1.5)toast('OFF THE ROAD — FIND THE ASPHALT');}
    for(const r of rivals){r.d+=r.speed*(dt/3.6);r.x=clamp((r.x*.992)+Math.sin(elapsed*.48+r.phase)*dt*.42,-4.1,4.1);if(r.d>RACE_LENGTH+45)r.d-=RACE_LENGTH+95;const delta=r.d-progress;if(Math.abs(delta)<3.1&&Math.abs(r.x-playerX)<1.65&&hitCooldown<=0){speed*=.58;condition=Math.max(0,condition-9);hitCooldown=1.05;playerX+=playerX<r.x?-.8:.8;toast('BOX BUMP! EASY ON THE CORNERS');}}
    for(const h of hazards){if(h.hit)continue;const delta=h.d-progress;if(Math.abs(delta)<2.7&&Math.abs(h.x-playerX)<1.25&&hitCooldown<=0){h.hit=true;speed*=.45;condition=Math.max(0,condition-17);hitCooldown=.9;toast(h.type==='tire'?'TIRE TROUBLE!':'CONE ZONE!');}}
    for(const p of pickups){if(p.taken)continue;const delta=p.d-progress;if(Math.abs(delta)<2.4&&Math.abs(p.x-playerX)<1.4){p.taken=true;if(p.type==='boost'){boost=Math.min(100,boost+48);toast('BOOST JUICE! +48');}else{condition=Math.min(100,condition+7);boost=Math.min(100,boost+12);toast('SCRAP SAVED — BOX PATCHED UP');}}}
    if(progress>=RACE_LENGTH){progress=RACE_LENGTH;finishRace();}
    updateHud();updateAudio();
  }
  function updateHud(){const place=1+rivals.filter(r=>r.d>progress).length;const lap=Math.min(LAPS,Math.floor(progress/LAP_LENGTH)+1);$('position').textContent=place;$('lap').textContent=lap;$('lap-progress').style.width=`${((progress%LAP_LENGTH)/LAP_LENGTH)*100}%`;$('speed').textContent=Math.round(speed*1.7);$('speed-fill').style.width=`${speed/52*100}%`;$('boost-fill').style.width=`${boost}%`;const check=['SCRAPWAY SPRINT','THE BUMPY BIT','TAPE MEADOW','HOME STRETCH'];$('checkpoint').textContent=progress>RACE_LENGTH*.82?check[3]:progress>RACE_LENGTH*.58?check[2]:progress>RACE_LENGTH*.32?check[1]:check[0];}
  function toast(message){ui.toast.textContent=message;ui.toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>ui.toast.classList.remove('show'),1350);}
  function startRace(){initWorld();state='race';progress=0;elapsed=0;speed=0;playerX=0;boost=36;condition=100;hitCooldown=0;boostTimer=0;ui.start.classList.add('hidden');ui.finish.classList.add('hidden');ui.pause.classList.add('hidden');ui.hud.classList.remove('hidden');updateHud();if(soundOn)startAudio();}
  function finishRace(){state='finish';speed=0;const place=1+rivals.filter(r=>r.d>progress).length;const won=place===1;$('finish-title').innerHTML=won?'BOX<br/><em>LEGEND</em><span class="title-period">.</span>':'BOX<br/><em>BUILT.</em><span class="title-period">.</span>';$('finish-copy').textContent=won?'The humble box has done it again.':`You brought it home in ${ordinal(place)}. Nice driving.`;$('final-place').textContent=ordinal(place);$('final-time').textContent=fmtTime(elapsed);$('final-condition').textContent=`${Math.round(condition)}%`;if(!bestTime||elapsed<bestTime){bestTime=elapsed;localStorage.setItem('boxrun-best',String(bestTime));}$('best-time').textContent=`PERSONAL BEST — ${fmtTime(bestTime).slice(0,5)}`;ui.hud.classList.add('hidden');ui.finish.classList.remove('hidden');stopAudio();}
  function togglePause(){if(state==='race'){state='paused';ui.pause.classList.remove('hidden');stopAudio();}else if(state==='paused'){state='race';ui.pause.classList.add('hidden');if(soundOn)startAudio();}}
  function startAudio(){if(!soundOn)return;try{audioCtx ||= new (window.AudioContext||window.webkitAudioContext)();if(audioCtx.state==='suspended')audioCtx.resume();if(!engineOsc){engineOsc=audioCtx.createOscillator();engineGain=audioCtx.createGain();engineOsc.type='sawtooth';engineOsc.frequency.value=55;engineGain.gain.value=.018;engineOsc.connect(engineGain);engineGain.connect(audioCtx.destination);engineOsc.start();}}catch(e){}}
  function stopAudio(){if(engineGain&&audioCtx)engineGain.gain.setTargetAtTime(0,audioCtx.currentTime,.08);}
  function updateAudio(){if(engineOsc&&engineGain&&audioCtx&&soundOn){engineOsc.frequency.setTargetAtTime(42+speed*2.1,audioCtx.currentTime,.08);engineGain.gain.setTargetAtTime(.009+speed*.00023,audioCtx.currentTime,.1);}}
  function frame(now){const dt=Math.min(.045,(now-last)/1000||0);last=now;update(dt);drawWorld();requestAnimationFrame(frame);}requestAnimationFrame(frame);
  $('start-btn').addEventListener('click',startRace);$('restart-btn').addEventListener('click',startRace);$('pause-btn').addEventListener('click',togglePause);$('resume-btn').addEventListener('click',togglePause);
  $('sound-btn').addEventListener('click',()=>{soundOn=!soundOn;$('sound-btn').innerHTML=soundOn?'♫ <span>SOUND ON</span>':'♫ <span>SOUND OFF</span>';if(soundOn&&state==='race')startAudio();else stopAudio();});
  window.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight',' ','ArrowUp','ArrowDown'].includes(e.key))e.preventDefault();keys.add(e.key);if(e.key==='Escape'||e.key==='p'||e.key==='P')togglePause();});window.addEventListener('keyup',e=>keys.delete(e.key));window.addEventListener('blur',()=>{keys.clear();if(state==='race')togglePause();});
  function bindTouch(id, value){const el=$(id);const down=e=>{e.preventDefault();steerInput=value;el.setPointerCapture?.(e.pointerId);};const up=e=>{e.preventDefault();if(steerInput===value)steerInput=0;};el.addEventListener('pointerdown',down);el.addEventListener('pointerup',up);el.addEventListener('pointercancel',up);el.addEventListener('lostpointercapture',up);}
  bindTouch('touch-left',-1);bindTouch('touch-right',1);const boostBtn=$('touch-boost');boostBtn.addEventListener('pointerdown',e=>{e.preventDefault();keys.add(' ');});['pointerup','pointercancel','lostpointercapture'].forEach(ev=>boostBtn.addEventListener(ev,e=>{e.preventDefault();keys.delete(' ');}));
  if(bestTime)$('best-time').textContent=`PERSONAL BEST — ${fmtTime(bestTime).slice(0,5)}`;
})();
