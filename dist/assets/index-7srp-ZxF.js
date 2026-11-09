(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();const Za="187",eh=0,Io=1,ih=2,Ys=1,ic=2,Jn=3,sn=0,Be=1,di=2,Pn=0,ts=1,ea=2,No=3,Uo=4,nh=5,An=100,sh=101,rh=102,ah=103,oh=104,lh=200,ch=201,hh=202,dh=203,nc=204,sc=205,uh=206,fh=207,ph=208,mh=209,gh=210,xh=211,_h=212,vh=213,Mh=214,ia=0,na=1,sa=2,es=3,ra=4,aa=5,oa=6,la=7,fr=0,Sh=1,yh=2,wi=0,rc=1,ac=2,oc=3,Ja=4,lc=5,cc=6,hc=7,dc=300,Dn=301,is=302,Mr=303,Sr=304,rn=1e3,Ti=1001,ca=1002,ge=1003,js=1004,us=1005,He=1006,yr=1007,Bi=1008,Xe=1009,uc=1010,fc=1011,ns=1012,Qa=1013,mi=1014,ri=1015,gi=1016,ja=1017,to=1018,In=1020,pc=35902,mc=35899,gc=1021,xc=1022,ui=1023,Gi=1026,ki=1027,eo=1028,io=1029,an=1030,no=1031,so=1033,qs=33776,Ks=33777,$s=33778,Zs=33779,ha=35840,da=35841,ua=35842,fa=35843,pa=36196,ma=37492,ga=37496,xa=37488,_a=37489,tr=37490,va=37491,Ma=37808,Sa=37809,ya=37810,ba=37811,Ea=37812,Ta=37813,wa=37814,Aa=37815,Ra=37816,Ca=37817,Pa=37818,La=37819,Da=37820,Ia=37821,Na=36492,Ua=36494,Fa=36495,Oa=36283,za=36284,er=36285,Ba=36286,bh=3200,ir=0,Eh=1,zi="",ze="srgb",nr="srgb-linear",sr="linear",ie="srgb",br=7680,Th=519,wh=512,Ah=513,Rh=514,_c=515,Ch=516,Ph=517,vc=518,Mc=519,Lh=35044,Dh=35048,Fo="300 es",ai=2e3,ss=2001;function Ih(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function rr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Nh(){const r=rr("canvas");return r.style.display="block",r}const Oo={};function zo(...r){const t="THREE."+r.shift();console.log(t,...r)}function Sc(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Dt(...r){r=Sc(r);const t="THREE."+r.shift();{const e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Zt(...r){r=Sc(r);const t="THREE."+r.shift();{const e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Js(...r){const t=r.join(" ");t in Oo||(Oo[t]=!0,Dt(...r))}function Uh(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const Fh={[ia]:ia,[sa]:oa,[ra]:ra,[es]:aa,[na]:na,[oa]:sa,[la]:la,[aa]:es};class on{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Er=Math.PI/180,ka=180/Math.PI;function os(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ie[r&255]+Ie[r>>8&255]+Ie[r>>16&255]+Ie[r>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]).toLowerCase()}function qt(r,t,e){return Math.max(t,Math.min(e,r))}function Oh(r,t){return(r%t+t)%t}function Tr(r,t,e){return(1-e)*r+e*t}function zh(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ro(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Bh(r,t){if(t.constructor===Float32Array)return r;const e=ro(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/e,-1)}function kh(r,t){if(t.constructor===Float32Array)return r;const e=ro(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*e)}const _o=class _o{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_o.prototype.isVector2=!0;let Gt=_o;class Wi{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=s[a+0],f=s[a+1],x=s[a+2],v=s[a+3];if(d!==v||l!==u||c!==f||h!==x){let g=l*u+c*f+h*x+d*v;g<0&&(u=-u,f=-f,x=-x,v=-v,g=-g);let m=1-o;if(g<.9995){const M=Math.acos(g),E=Math.sin(M);m=Math.sin(m*M)/E,o=Math.sin(o*M)/E,l=l*m+u*o,c=c*m+f*o,h=h*m+x*o,d=d*m+v*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+x*o,d=d*m+v*o;const M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,s,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=s[a],u=s[a+1],f=s[a+2],x=s[a+3];return t[e]=o*x+h*d+l*f-c*u,t[e+1]=l*x+h*u+c*d-o*f,t[e+2]=c*x+h*f+o*u-l*d,t[e+3]=h*x-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(s/2),u=l(i/2),f=l(n/2),x=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*f*x,this._y=c*f*d-u*h*x,this._z=c*h*x+u*f*d,this._w=c*h*d-u*f*x;break;case"YXZ":this._x=u*h*d+c*f*x,this._y=c*f*d-u*h*x,this._z=c*h*x-u*f*d,this._w=c*h*d+u*f*x;break;case"ZXY":this._x=u*h*d-c*f*x,this._y=c*f*d+u*h*x,this._z=c*h*x+u*f*d,this._w=c*h*d-u*f*x;break;case"ZYX":this._x=u*h*d-c*f*x,this._y=c*f*d+u*h*x,this._z=c*h*x-u*f*d,this._w=c*h*d+u*f*x;break;case"YZX":this._x=u*h*d+c*f*x,this._y=c*f*d+u*h*x,this._z=c*h*x-u*f*d,this._w=c*h*d-u*f*x;break;case"XZY":this._x=u*h*d-c*f*x,this._y=c*f*d-u*h*x,this._z=c*h*x+u*f*d,this._w=c*h*d+u*f*x;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vo=class vo{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-s*n),d=2*(s*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-s*d,this.z=n+l*d+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return wr.copy(this).projectOnVector(t),this.sub(wr)}reflect(t){return this.sub(wr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vo.prototype.isVector3=!0;let L=vo;const wr=new L,Bo=new Wi,Mo=class Mo{constructor(t,e,i,n,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c)}set(t,e,i,n,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],x=i[8],v=n[0],g=n[3],m=n[6],M=n[1],E=n[4],S=n[7],w=n[2],A=n[5],_=n[8];return s[0]=a*v+o*M+l*w,s[3]=a*g+o*E+l*A,s[6]=a*m+o*S+l*_,s[1]=c*v+h*M+d*w,s[4]=c*g+h*E+d*A,s[7]=c*m+h*S+d*_,s[2]=u*v+f*M+x*w,s[5]=u*g+f*E+x*A,s[8]=u*m+f*S+x*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*s,f=c*s-a*l,x=e*d+i*u+n*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return t[0]=d*v,t[1]=(n*c-h*i)*v,t[2]=(o*i-n*a)*v,t[3]=u*v,t[4]=(h*e-n*l)*v,t[5]=(n*s-o*e)*v,t[6]=f*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Js("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ar.makeScale(t,e)),this}rotate(t){return Js("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ar.makeRotation(-t)),this}translate(t,e){return Js("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ar.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Mo.prototype.isMatrix3=!0;let Nt=Mo;const Ar=new Nt,ko=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ho=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hh(){const r={enabled:!0,workingColorSpace:nr,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ie&&(n.r=Ai(n.r),n.g=Ai(n.g),n.b=Ai(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ie&&(n.r=Ln(n.r),n.g=Ln(n.g),n.b=Ln(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===zi?sr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[nr]:{primaries:t,whitePoint:i,transfer:sr,toXYZ:ko,fromXYZ:Ho,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:i,transfer:ie,toXYZ:ko,fromXYZ:Ho,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),r}const Yt=Hh();function Ai(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ln(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let hn;class Gh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{hn===void 0&&(hn=rr("canvas")),hn.width=t.width,hn.height=t.height;const n=hn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=hn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=rr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=Ai(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ai(e[i]/255)*255):e[i]=Ai(e[i]);return{data:e,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vh=0;class ao{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=os(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Rr(n[a].image)):s.push(Rr(n[a]))}else s=Rr(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function Rr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Gh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}let Wh=0;const Cr=new L;class Ue extends on{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,i=Ti,n=Ti,s=He,a=Bi,o=ui,l=Xe,c=Ue.DEFAULT_ANISOTROPY,h=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=os(),this.name="",this.source=new ao(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Cr).x}get height(){return this.source.getSize(Cr).y}get depth(){return this.source.getSize(Cr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Dt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Dt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rn:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rn:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=dc;Ue.DEFAULT_ANISOTROPY=1;const So=class So{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],x=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(x+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,S=(f+1)/2,w=(m+1)/2,A=(h+u)/4,_=(d+v)/4,T=(x+g)/4;return E>S&&E>w?E<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(E),n=A/i,s=_/i):S>w?S<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(S),i=A/n,s=T/n):w<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(w),i=_/s,n=T/s),this.set(i,n,s,e),this}let M=Math.sqrt((g-x)*(g-x)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-x)/M,this.y=(d-v)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};So.prototype.isVector4=!0;let de=So;class Xh extends on{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e),this.textures=[];const n=i.count;for(let s=0;s<n;s++)this.textures[s]=new Ue({width:t,height:e,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:He,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new ao(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends Xh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class yc extends Ue{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ge,this.minFilter=ge,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yh extends Ue{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ge,this.minFilter=ge,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const ur=class ur{constructor(t,e,i,n,s,a,o,l,c,h,d,u,f,x,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c,h,d,u,f,x,v,g)}set(t,e,i,n,s,a,o,l,c,h,d,u,f,x,v,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=x,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ur().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,n=1/dn.setFromMatrixColumn(t,0).length(),s=1/dn.setFromMatrixColumn(t,1).length(),a=1/dn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=a*h,f=a*d,x=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+x*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=x+f*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,x=c*h,v=c*d;e[0]=u+v*o,e[4]=x*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-x,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,x=c*h,v=c*d;e[0]=u-v*o,e[4]=-a*d,e[8]=x+f*o,e[1]=f+x*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,f=a*d,x=o*h,v=o*d;e[0]=l*h,e[4]=x*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,x=o*l,v=o*c;e[0]=l*h,e[4]=v-u*d,e[8]=x*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+x,e[10]=u-v*d}else if(t.order==="XZY"){const u=a*l,f=a*c,x=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=a*h,e[9]=f*d-x,e[2]=x*d-f,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qh,t,Kh)}lookAt(t,e,i){const n=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Li.crossVectors(i,Ge),Li.lengthSq()===0&&(Math.abs(i.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Li.crossVectors(i,Ge)),Li.normalize(),fs.crossVectors(Ge,Li),n[0]=Li.x,n[4]=fs.x,n[8]=Ge.x,n[1]=Li.y,n[5]=fs.y,n[9]=Ge.y,n[2]=Li.z,n[6]=fs.z,n[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],x=i[2],v=i[6],g=i[10],m=i[14],M=i[3],E=i[7],S=i[11],w=i[15],A=n[0],_=n[4],T=n[8],N=n[12],C=n[1],U=n[5],O=n[9],W=n[13],I=n[2],G=n[6],$=n[10],H=n[14],et=n[3],Y=n[7],j=n[11],tt=n[15];return s[0]=a*A+o*C+l*I+c*et,s[4]=a*_+o*U+l*G+c*Y,s[8]=a*T+o*O+l*$+c*j,s[12]=a*N+o*W+l*H+c*tt,s[1]=h*A+d*C+u*I+f*et,s[5]=h*_+d*U+u*G+f*Y,s[9]=h*T+d*O+u*$+f*j,s[13]=h*N+d*W+u*H+f*tt,s[2]=x*A+v*C+g*I+m*et,s[6]=x*_+v*U+g*G+m*Y,s[10]=x*T+v*O+g*$+m*j,s[14]=x*N+v*W+g*H+m*tt,s[3]=M*A+E*C+S*I+w*et,s[7]=M*_+E*U+S*G+w*Y,s[11]=M*T+E*O+S*$+w*j,s[15]=M*N+E*W+S*H+w*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],x=t[3],v=t[7],g=t[11],m=t[15],M=l*f-c*u,E=o*f-c*d,S=o*u-l*d,w=a*f-c*h,A=a*u-l*h,_=a*d-o*h;return e*(v*M-g*E+m*S)-i*(x*M-g*w+m*A)+n*(x*E-v*w+m*_)-s*(x*S-v*A+g*_)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(s*h-o*l)+n*(s*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],x=t[12],v=t[13],g=t[14],m=t[15],M=e*o-i*a,E=e*l-n*a,S=e*c-s*a,w=i*l-n*o,A=i*c-s*o,_=n*c-s*l,T=h*v-d*x,N=h*g-u*x,C=h*m-f*x,U=d*g-u*v,O=d*m-f*v,W=u*m-f*g,I=M*W-E*O+S*U+w*C-A*N+_*T;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/I;return t[0]=(o*W-l*O+c*U)*G,t[1]=(n*O-i*W-s*U)*G,t[2]=(v*_-g*A+m*w)*G,t[3]=(u*A-d*_-f*w)*G,t[4]=(l*C-a*W-c*N)*G,t[5]=(e*W-n*C+s*N)*G,t[6]=(g*S-x*_-m*E)*G,t[7]=(h*_-u*S+f*E)*G,t[8]=(a*O-o*C+c*T)*G,t[9]=(i*C-e*O-s*T)*G,t[10]=(x*A-v*S+m*M)*G,t[11]=(d*S-h*A-f*M)*G,t[12]=(o*N-a*U-l*T)*G,t[13]=(e*U-i*N+n*T)*G,t[14]=(v*E-x*w-g*M)*G,t[15]=(h*w-d*E+u*M)*G,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,d=o+o,u=s*c,f=s*h,x=s*d,v=a*h,g=a*d,m=o*d,M=l*c,E=l*h,S=l*d,w=i.x,A=i.y,_=i.z;return n[0]=(1-(v+m))*w,n[1]=(f+S)*w,n[2]=(x-E)*w,n[3]=0,n[4]=(f-S)*A,n[5]=(1-(u+m))*A,n[6]=(g+M)*A,n[7]=0,n[8]=(x+E)*_,n[9]=(g-M)*_,n[10]=(1-(u+v))*_,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let a=dn.set(n[0],n[1],n[2]).length();const o=dn.set(n[4],n[5],n[6]).length(),l=dn.set(n[8],n[9],n[10]).length();s<0&&(a=-a),je.copy(this);const c=1/a,h=1/o,d=1/l;return je.elements[0]*=c,je.elements[1]*=c,je.elements[2]*=c,je.elements[4]*=h,je.elements[5]*=h,je.elements[6]*=h,je.elements[8]*=d,je.elements[9]*=d,je.elements[10]*=d,e.setFromRotationMatrix(je),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,n,s,a,o=ai,l=!1){const c=this.elements,h=2*s/(e-t),d=2*s/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n);let x,v;if(l)x=s/(a-s),v=a*s/(a-s);else if(o===ai)x=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===ss)x=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=ai,l=!1){const c=this.elements,h=2/(e-t),d=2/(i-n),u=-(e+t)/(e-t),f=-(i+n)/(i-n);let x,v;if(l)x=1/(a-s),v=a/(a-s);else if(o===ai)x=-2/(a-s),v=-(a+s)/(a-s);else if(o===ss)x=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};ur.prototype.isMatrix4=!0;let Jt=ur;const dn=new L,je=new Jt,qh=new L(0,0,0),Kh=new L(1,1,1),Li=new L,fs=new L,Ge=new L,Go=new Jt,Vo=new Wi;class xi{constructor(t=0,e=0,i=0,n=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Go.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Go,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vo.setFromEuler(this),this.setFromQuaternion(Vo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class oo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $h=0;const Wo=new L,un=new Wi,vi=new Jt,ps=new L,zn=new L,Zh=new L,Jh=new Wi,Xo=new L(1,0,0),Yo=new L(0,1,0),qo=new L(0,0,1),Ko={type:"added"},Qh={type:"removed"},fn={type:"childadded",child:null},Pr={type:"childremoved",child:null};class ue extends on{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DEFAULT_UP.clone();const t=new L,e=new xi,i=new Wi,n=new L(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Nt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return un.setFromAxisAngle(t,e),this.quaternion.multiply(un),this}rotateOnWorldAxis(t,e){return un.setFromAxisAngle(t,e),this.quaternion.premultiply(un),this}rotateX(t){return this.rotateOnAxis(Xo,t)}rotateY(t){return this.rotateOnAxis(Yo,t)}rotateZ(t){return this.rotateOnAxis(qo,t)}translateOnAxis(t,e){return Wo.copy(t).applyQuaternion(this.quaternion),this.position.add(Wo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xo,t)}translateY(t){return this.translateOnAxis(Yo,t)}translateZ(t){return this.translateOnAxis(qo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ps.copy(t):ps.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),zn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(zn,ps,this.up):vi.lookAt(ps,zn,this.up),this.quaternion.setFromRotationMatrix(vi),n&&(vi.extractRotation(n.matrixWorld),un.setFromRotationMatrix(vi),this.quaternion.premultiply(un.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ko),fn.child=t,this.dispatchEvent(fn),fn.child=null):Zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qh),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ko),fn.child=t,this.dispatchEvent(fn),fn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zn,t,Zh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zn,Jh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,n=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*n,s[13]+=i-s[1]*e-s[5]*i-s[9]*n,s[14]+=n-s[2]*e-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),x=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),x.length>0&&(i.nodes=x)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ue.DEFAULT_UP=new L(0,1,0);ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Je extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jh={type:"move"};class Lr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,i),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,x=.005;c.inputState.pinching&&u>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jh)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Je;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},ms={h:0,s:0,l:0};function Dr(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class bt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=Yt.workingColorSpace){if(t=Oh(t,1),e=qt(e,0,1),i=qt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Dr(a,s,t+1/3),this.g=Dr(a,s,t),this.b=Dr(a,s,t-1/3)}return Yt.colorSpaceToWorking(this,n),this}setStyle(t,e=ze){function i(s){s!==void 0&&parseFloat(s)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Dt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const i=bc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return Yt.workingToColorSpace(Ne.copy(this),t),Math.round(qt(Ne.r*255,0,255))*65536+Math.round(qt(Ne.g*255,0,255))*256+Math.round(qt(Ne.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(Ne.copy(this),e);const i=Ne.r,n=Ne.g,s=Ne.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=ze){Yt.workingToColorSpace(Ne.copy(this),t);const e=Ne.r,i=Ne.g,n=Ne.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Di),this.setHSL(Di.h+t,Di.s+e,Di.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Di),t.getHSL(ms);const i=Tr(Di.h,ms.h,e),n=Tr(Di.s,ms.s,e),s=Tr(Di.l,ms.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new bt;bt.NAMES=bc;class lo{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new bt(t),this.near=e,this.far=i}clone(){return new lo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class td extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ti=new L,Mi=new L,Ir=new L,Si=new L,pn=new L,mn=new L,$o=new L,Nr=new L,Ur=new L,Fr=new L,Or=new de,zr=new de,Br=new de;class si{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),ti.subVectors(t,e),n.cross(ti);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){ti.subVectors(n,e),Mi.subVectors(i,e),Ir.subVectors(t,e);const a=ti.dot(ti),o=ti.dot(Mi),l=ti.dot(Ir),c=Mi.dot(Mi),h=Mi.dot(Ir),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,x=(a*h-o*l)*u;return s.set(1-f-x,x,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(t,e,i,n,s,a,o,l){return this.getBarycoord(t,e,i,n,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Si.x),l.addScaledVector(a,Si.y),l.addScaledVector(o,Si.z),l)}static getInterpolatedAttribute(t,e,i,n,s,a){return Or.setScalar(0),zr.setScalar(0),Br.setScalar(0),Or.fromBufferAttribute(t,e),zr.fromBufferAttribute(t,i),Br.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Or,s.x),a.addScaledVector(zr,s.y),a.addScaledVector(Br,s.z),a}static isFrontFacing(t,e,i,n){return ti.subVectors(i,e),Mi.subVectors(t,e),ti.cross(Mi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ti.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),ti.cross(Mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return si.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return si.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let a,o;pn.subVectors(n,i),mn.subVectors(s,i),Nr.subVectors(t,i);const l=pn.dot(Nr),c=mn.dot(Nr);if(l<=0&&c<=0)return e.copy(i);Ur.subVectors(t,n);const h=pn.dot(Ur),d=mn.dot(Ur);if(h>=0&&d<=h)return e.copy(n);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(pn,a);Fr.subVectors(t,s);const f=pn.dot(Fr),x=mn.dot(Fr);if(x>=0&&f<=x)return e.copy(s);const v=f*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(i).addScaledVector(mn,o);const g=h*x-f*d;if(g<=0&&d-h>=0&&f-x>=0)return $o.subVectors(s,n),o=(d-h)/(d-h+(f-x)),e.copy(n).addScaledVector($o,o);const m=1/(g+v+u);return a=v*m,o=u*m,e.copy(i).addScaledVector(pn,a).addScaledVector(mn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ln{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ei):ei.fromBufferAttribute(s,a),ei.applyMatrix4(t.matrixWorld),this.expandByPoint(ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gs.copy(i.boundingBox)),gs.applyMatrix4(t.matrixWorld),this.union(gs)}const n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ei),ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bn),xs.subVectors(this.max,Bn),gn.subVectors(t.a,Bn),xn.subVectors(t.b,Bn),_n.subVectors(t.c,Bn),Ii.subVectors(xn,gn),Ni.subVectors(_n,xn),$i.subVectors(gn,_n);let e=[0,-Ii.z,Ii.y,0,-Ni.z,Ni.y,0,-$i.z,$i.y,Ii.z,0,-Ii.x,Ni.z,0,-Ni.x,$i.z,0,-$i.x,-Ii.y,Ii.x,0,-Ni.y,Ni.x,0,-$i.y,$i.x,0];return!kr(e,gn,xn,_n,xs)||(e=[1,0,0,0,1,0,0,0,1],!kr(e,gn,xn,_n,xs))?!1:(_s.crossVectors(Ii,Ni),e=[_s.x,_s.y,_s.z],kr(e,gn,xn,_n,xs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const yi=[new L,new L,new L,new L,new L,new L,new L,new L],ei=new L,gs=new ln,gn=new L,xn=new L,_n=new L,Ii=new L,Ni=new L,$i=new L,Bn=new L,xs=new L,_s=new L,Zi=new L;function kr(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Zi.fromArray(r,s);const o=n.x*Math.abs(Zi.x)+n.y*Math.abs(Zi.y)+n.z*Math.abs(Zi.z),l=t.dot(Zi),c=e.dot(Zi),h=i.dot(Zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const me=new L,vs=new Gt;let ed=0;class pi extends on{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ed++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Lh,this.updateRanges=[],this.gpuType=ri,this.version=0,this._normalizationScale=t!==void 0?ro(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)vs.fromBufferAttribute(this,e),vs.applyMatrix3(t),this.setXY(e,vs.x,vs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Bh(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):kh(t,this.array)}}class Ec extends pi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Tc extends pi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class jt extends pi{constructor(t,e,i){super(new Float32Array(t),e,i)}}const id=new ln,kn=new L,Hr=new L;class cn{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):id.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;kn.subVectors(t,this.center);const e=kn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(kn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(kn.copy(t.center).add(Hr)),this.expandByPoint(kn.copy(t.center).sub(Hr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let nd=0;const Ze=new Jt,Gr=new ue,vn=new L,Ve=new ln,Hn=new ln,Te=new L;class Pe extends on{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ih(t)?Tc:Ec)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Nt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,i){return Ze.makeTranslation(t,e,i),this.applyMatrix4(Ze),this}scale(t,e,i){return Ze.makeScale(t,e,i),this.applyMatrix4(Ze),this}lookAt(t){return Gr.lookAt(t),Gr.updateMatrix(),this.applyMatrix4(Gr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vn).negate(),this.translate(vn.x,vn.y,vn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,s=t.length;n<s;n++){const a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new jt(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];Ve.setFromBufferAttribute(s),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Hn.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(Ve.min,Hn.min),Ve.expandByPoint(Te),Te.addVectors(Ve.max,Hn.max),Ve.expandByPoint(Te)):(Ve.expandByPoint(Hn.min),Ve.expandByPoint(Hn.max))}Ve.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)Te.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Te));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Te.fromBufferAttribute(o,c),l&&(vn.fromBufferAttribute(t,c),Te.add(vn)),n=Math.max(n,i.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,s=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new pi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let N=0;N<i.count;N++)o[N]=new L,l[N]=new L;const h=new L,d=new L,u=new L,f=new Gt,x=new Gt,v=new Gt,g=new L,m=new L;function M(N,C,U){c[N]=c[C]=c[U]=1,h.fromBufferAttribute(i,N),d.fromBufferAttribute(i,C),u.fromBufferAttribute(i,U),f.fromBufferAttribute(s,N),x.fromBufferAttribute(s,C),v.fromBufferAttribute(s,U),d.sub(h),u.sub(h),x.sub(f),v.sub(f);const O=1/(x.x*v.y-v.x*x.y);isFinite(O)&&(g.copy(d).multiplyScalar(v.y).addScaledVector(u,-x.y).multiplyScalar(O),m.copy(u).multiplyScalar(x.x).addScaledVector(d,-v.x).multiplyScalar(O),o[N].add(g),o[C].add(g),o[U].add(g),l[N].add(m),l[C].add(m),l[U].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let N=0,C=E.length;N<C;++N){const U=E[N],O=U.start,W=U.count;for(let I=O,G=O+W;I<G;I+=3)M(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const S=new L,w=new L,A=new L,_=new L;function T(N){A.fromBufferAttribute(n,N),_.copy(A);const C=o[N];S.copy(C),S.sub(A.multiplyScalar(A.dot(C))).normalize(),w.crossVectors(_,C);const O=w.dot(l[N])<0?-1:1;a.setXYZW(N,S.x,S.y,S.z,O)}for(let N=0,C=i.count;N<C;++N)c[N]&&T(N);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new pi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const n=new L,s=new L,a=new L,o=new L,l=new L,c=new L,h=new L,d=new L;if(t)for(let u=0,f=t.count;u<f;u+=3){const x=t.getX(u+0),v=t.getX(u+1),g=t.getX(u+2);n.fromBufferAttribute(e,x),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)n.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,x=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let m=0;m<h;m++)u[x++]=c[f++]}return new pi(u,h,d)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vr=new L,sd=new L,rd=new Nt;class Oi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Vr.subVectors(i,e).cross(sd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const n=t.delta(Vr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||rd.getNormalMatrix(t),n=this.coplanarPoint(Vr).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let ad=0;class Xi extends on{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=os(),this.name="",this.type="Material",this.blending=ts,this.side=sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nc,this.blendDst=sc,this.blendEquation=An,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Dt(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Dt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Oi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Gt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Gt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const bi=new L,Wr=new L,Ms=new L,Ss=new L;class pr{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bi.copy(this.origin).addScaledVector(this.direction,e),bi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Wr.copy(t).add(e).multiplyScalar(.5),Ms.copy(e).sub(t).normalize(),Ss.copy(this.origin).sub(Wr);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ms),o=Ss.dot(this.direction),l=-Ss.dot(Ms),c=Ss.lengthSq(),h=Math.abs(1-a*a);let d,u,f,x;if(h>0)if(d=a*l-o,u=a*o-l,x=s*h,d>=0)if(u>=-x)if(u<=x){const v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-x?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=x?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Wr).addScaledVector(Ms,u),f}intersectSphere(t,e){if(t.radius<0)return null;bi.subVectors(t.center,this.origin);const i=bi.dot(this.direction),n=bi.dot(bi)-i*i,s=t.radius*t.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,n=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,n=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,bi)!==null}intersectTriangle(t,e,i,n,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,x=e.x-a.x,v=e.y-a.y,g=e.z-a.z,m=i.x-a.x,M=i.y-a.y,E=i.z-a.z,S=Math.abs(l),w=Math.abs(c),A=Math.abs(h);let _,T,N,C,U,O,W,I,G,$,H,et;if(S>=w&&S>=A?(N=l,O=d,G=x,et=m,l>=0?(_=c,T=h,C=u,U=f,W=v,I=g,$=M,H=E):(_=h,T=c,C=f,U=u,W=g,I=v,$=E,H=M)):w>=A?(N=c,O=u,G=v,et=M,c>=0?(_=h,T=l,C=f,U=d,W=g,I=x,$=E,H=m):(_=l,T=h,C=d,U=f,W=x,I=g,$=m,H=E)):(N=h,O=f,G=g,et=E,h>=0?(_=l,T=c,C=d,U=u,W=x,I=v,$=m,H=M):(_=c,T=l,C=u,U=d,W=v,I=x,$=M,H=m)),N===0)return null;const Y=_/N,j=T/N,tt=1/N,Et=C-Y*O,Ut=U-j*O,Z=W-Y*G,gt=I-j*G,Mt=$-Y*et,Rt=H-j*et,xt=Mt*gt-Rt*Z,Ot=Et*Rt-Ut*Mt,fe=Z*Ut-gt*Et;if(n){if(xt<0||Ot<0||fe<0)return null}else if((xt<0||Ot<0||fe<0)&&(xt>0||Ot>0||fe>0))return null;const Lt=xt+Ot+fe;if(Lt===0)return null;const te=tt*(xt*O+Ot*G+fe*et);return(Lt>0?te<0:te>0)?null:this.at(te/Lt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hi extends Xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=fr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Zo=new Jt,Ji=new pr,ys=new cn,Jo=new L,bs=new L,Es=new L,Ts=new L,Xr=new L,ws=new L,Qo=new L,As=new L;class Pt extends ue{constructor(t=new Pe,e=new Hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(s&&o){ws.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(Xr.fromBufferAttribute(d,t),a?ws.addScaledVector(Xr,h):ws.addScaledVector(Xr.sub(e),h))}e.add(ws)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere),ys.applyMatrix4(s),Ji.copy(t.ray).recast(t.near),!(ys.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(ys,Jo)===null||Ji.origin.distanceToSquared(Jo)>(t.far-t.near)**2))&&(Zo.copy(s).invert(),Ji.copy(t.ray).applyMatrix4(Zo),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ji)))}_computeIntersections(t,e,i){let n;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=u.length;x<v;x++){const g=u[x],m=a[g.materialIndex],M=Math.max(g.start,f.start),E=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let S=M,w=E;S<w;S+=3){const A=o.getX(S),_=o.getX(S+1),T=o.getX(S+2);n=Rs(this,m,t,i,c,h,d,A,_,T),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{const x=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=x,m=v;g<m;g+=3){const M=o.getX(g),E=o.getX(g+1),S=o.getX(g+2);n=Rs(this,a,t,i,c,h,d,M,E,S),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=u.length;x<v;x++){const g=u[x],m=a[g.materialIndex],M=Math.max(g.start,f.start),E=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let S=M,w=E;S<w;S+=3){const A=S,_=S+1,T=S+2;n=Rs(this,m,t,i,c,h,d,A,_,T),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{const x=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=x,m=v;g<m;g+=3){const M=g,E=g+1,S=g+2;n=Rs(this,a,t,i,c,h,d,M,E,S),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}}function od(r,t,e,i,n,s,a,o){let l;if(t.side===Be?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,t.side===sn,o),l===null)return null;As.copy(o),As.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(As);return c<e.near||c>e.far?null:{distance:c,point:As.clone(),object:r}}function Rs(r,t,e,i,n,s,a,o,l,c){r.getVertexPosition(o,bs),r.getVertexPosition(l,Es),r.getVertexPosition(c,Ts);const h=od(r,t,e,i,bs,Es,Ts,Qo);if(h){const d=new L;si.getBarycoord(Qo,bs,Es,Ts,d),n&&(h.uv=si.getInterpolatedAttribute(n,o,l,c,d,new Gt)),s&&(h.uv1=si.getInterpolatedAttribute(s,o,l,c,d,new Gt)),a&&(h.normal=si.getInterpolatedAttribute(a,o,l,c,d,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new L,materialIndex:0};si.getNormal(bs,Es,Ts,u.normal),h.face=u,h.barycoord=d}return h}class wc extends Ue{constructor(t=null,e=1,i=1,n,s,a,o,l,c=ge,h=ge,d,u){super(null,a,o,l,c,h,n,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ha extends pi{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Mn=new Jt,jo=new Jt,Cs=[],tl=new ln,ld=new Jt,Gn=new Pt,Vn=new cn;class Ac extends Pt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ha(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,ld)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ln),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Mn),tl.copy(t.boundingBox).applyMatrix4(Mn),this.boundingBox.union(tl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new cn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Mn),Vn.copy(t.boundingSphere).applyMatrix4(Mn),this.boundingSphere.union(Vn)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(Gn.geometry=this.geometry,Gn.material=this.material,Gn.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vn.copy(this.boundingSphere),Vn.applyMatrix4(i),t.ray.intersectsSphere(Vn)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Mn),jo.multiplyMatrices(i,Mn),Gn.matrixWorld=jo,Gn.raycast(t,Cs);for(let a=0,o=Cs.length;a<o;a++){const l=Cs[a];l.instanceId=s,l.object=this,e.push(l)}Cs.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ha(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new wc(new Float32Array(n*this.count),n,this.count,eo,ri));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Qi=new cn,cd=new Gt(.5,.5),Ps=new L;class rs{constructor(t=new Oi,e=new Oi,i=new Oi,n=new Oi,s=new Oi,a=new Oi){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ai,i=!1){const n=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],x=s[8],v=s[9],g=s[10],m=s[11],M=s[12],E=s[13],S=s[14],w=s[15];if(n[0].setComponents(c-a,f-h,m-x,w-M).normalize(),n[1].setComponents(c+a,f+h,m+x,w+M).normalize(),n[2].setComponents(c+o,f+d,m+v,w+E).normalize(),n[3].setComponents(c-o,f-d,m-v,w-E).normalize(),i)n[4].setComponents(l,u,g,S).normalize(),n[5].setComponents(c-l,f-u,m-g,w-S).normalize();else if(n[4].setComponents(c-l,f-u,m-g,w-S).normalize(),e===ai)n[5].setComponents(c+l,f+u,m+g,w+S).normalize();else if(e===ss)n[5].setComponents(l,u,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(t){Qi.center.set(0,0,0);const e=cd.distanceTo(t.center);return Qi.radius=.7071067811865476+e,Qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Ps.x=n.normal.x>0?t.max.x:t.min.x,Ps.y=n.normal.y>0?t.max.y:t.min.y,Ps.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const el=new Jt;class co{constructor(){this.coordinateSystem=ai,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){const s=e[n];el.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[n]===void 0&&(i[n]=new rs),i[n].setFromProjectionMatrix(el,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new rs),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new co().copy(this)}}class Rc extends Xi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ar=new L,or=new L,il=new Jt,Wn=new pr,Ls=new cn,Yr=new L,nl=new L;class hd extends ue{constructor(t=new Pe,e=new Rc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)ar.fromBufferAttribute(e,n-1),or.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=ar.distanceTo(or);t.setAttribute("lineDistance",new jt(i,1))}else Dt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere),Ls.applyMatrix4(n),Ls.radius+=s,t.ray.intersectsSphere(Ls)===!1)return;il.copy(n).invert(),Wn.copy(t.ray).applyMatrix4(il);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let v=f,g=x-1;v<g;v+=c){const m=h.getX(v),M=h.getX(v+1),E=Ds(this,t,Wn,l,m,M,v);E&&e.push(E)}if(this.isLineLoop){const v=h.getX(x-1),g=h.getX(f),m=Ds(this,t,Wn,l,v,g,x-1);m&&e.push(m)}}else{const f=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let v=f,g=x-1;v<g;v+=c){const m=Ds(this,t,Wn,l,v,v+1,v);m&&e.push(m)}if(this.isLineLoop){const v=Ds(this,t,Wn,l,x-1,f,x-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ds(r,t,e,i,n,s,a){const o=r.geometry.attributes.position;if(ar.fromBufferAttribute(o,n),or.fromBufferAttribute(o,s),e.distanceSqToSegment(ar,or,Yr,nl)>i)return;Yr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Yr);if(!(c<t.near||c>t.far))return{distance:c,point:nl.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const sl=new L,rl=new L;class dd extends hd{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)sl.fromBufferAttribute(e,n),rl.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+sl.distanceTo(rl);t.setAttribute("lineDistance",new jt(i,1))}else Dt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cc extends Xi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const al=new Jt,Ga=new pr,Is=new cn,Ns=new L;class ud extends ue{constructor(t=new Pe,e=new Cc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Is.copy(i.boundingSphere),Is.applyMatrix4(n),Is.radius+=s,t.ray.intersectsSphere(Is)===!1)return;al.copy(n).invert(),Ga.copy(t.ray).applyMatrix4(al);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let x=u,v=f;x<v;x++){const g=c.getX(x);Ns.fromBufferAttribute(d,g),ol(Ns,g,l,n,t,e,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let x=u,v=f;x<v;x++)Ns.fromBufferAttribute(d,x),ol(Ns,x,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ol(r,t,e,i,n,s,a){const o=Ga.distanceSqToPoint(r);if(o<e){const l=new L;Ga.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Pc extends Ue{constructor(t=[],e=Dn,i,n,s,a,o,l,c,h){super(t,e,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Va extends Ue{constructor(t,e,i,n,s,a,o,l,c){super(t,e,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nn extends Ue{constructor(t,e,i=mi,n,s,a,o=ge,l=ge,c,h=Gi,d=1){if(h!==Gi&&h!==ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ao(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Lc extends Nn{constructor(t,e=mi,i=Dn,n,s,a=ge,o=ge,l,c=Gi){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,n,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Dc extends Ue{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class $t extends Pe{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;x("z","y","x",-1,-1,i,e,t,a,s,0),x("z","y","x",1,-1,i,e,-t,a,s,1),x("x","z","y",1,1,t,i,e,n,a,2),x("x","z","y",1,-1,t,i,-e,n,a,3),x("x","y","z",1,-1,t,e,i,n,s,4),x("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(d,2));function x(v,g,m,M,E,S,w,A,_,T,N){const C=S/_,U=w/T,O=S/2,W=w/2,I=A/2,G=_+1,$=T+1;let H=0,et=0;const Y=new L;for(let j=0;j<$;j++){const tt=j*U-W;for(let Et=0;Et<G;Et++){const Ut=Et*C-O;Y[v]=Ut*M,Y[g]=tt*E,Y[m]=I,c.push(Y.x,Y.y,Y.z),Y[v]=0,Y[g]=0,Y[m]=A>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(Et/_),d.push(1-j/T),H+=1}}for(let j=0;j<T;j++)for(let tt=0;tt<_;tt++){const Et=u+tt+G*j,Ut=u+tt+G*(j+1),Z=u+(tt+1)+G*(j+1),gt=u+(tt+1)+G*j;l.push(Et,Ut,gt),l.push(Ut,Z,gt),et+=6}o.addGroup(f,et,N),f+=et,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $t(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ho extends Pe{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const s=[],a=[],o=[],l=[],c=new L,h=new Gt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=i+d/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(o,3)),this.setAttribute("uv",new jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ho(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class uo extends Pe{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],d=[],u=[],f=[];let x=0;const v=[],g=i/2;let m=0;M(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(f,2));function M(){const S=new L,w=new L;let A=0;const _=(e-t)/i;for(let T=0;T<=s;T++){const N=[],C=T/s,U=C*(e-t)+t;for(let O=0;O<=n;O++){const W=O/n,I=W*l+o,G=Math.sin(I),$=Math.cos(I);w.x=U*G,w.y=-C*i+g,w.z=U*$,d.push(w.x,w.y,w.z),S.set(G,_,$).normalize(),u.push(S.x,S.y,S.z),f.push(W,1-C),N.push(x++)}v.push(N)}for(let T=0;T<n;T++)for(let N=0;N<s;N++){const C=v[N][T],U=v[N+1][T],O=v[N+1][T+1],W=v[N][T+1];(t>0||N!==0)&&(h.push(C,U,W),A+=3),(e>0||N!==s-1)&&(h.push(U,O,W),A+=3)}c.addGroup(m,A,0),m+=A}function E(S){const w=x,A=new Gt,_=new L;let T=0;const N=S===!0?t:e,C=S===!0?1:-1;for(let O=1;O<=n;O++)d.push(0,g*C,0),u.push(0,C,0),f.push(.5,.5),x++;const U=x;for(let O=0;O<=n;O++){const I=O/n*l+o,G=Math.cos(I),$=Math.sin(I);_.x=N*$,_.y=g*C,_.z=N*G,d.push(_.x,_.y,_.z),u.push(0,C,0),A.x=G*.5+.5,A.y=$*.5*C+.5,f.push(A.x,A.y),x++}for(let O=0;O<n;O++){const W=w+O,I=U+O;S===!0?h.push(I,I+1,W):h.push(I+1,I,W),T+=3}c.addGroup(m,T,S===!0?1:2),m+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fo extends Pe{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const s=[],a=[];o(n),c(i),h(),this.setAttribute("position",new jt(s,3)),this.setAttribute("normal",new jt(s.slice(),3)),this.setAttribute("uv",new jt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const E=new L,S=new L,w=new L;for(let A=0;A<e.length;A+=3)f(e[A+0],E),f(e[A+1],S),f(e[A+2],w),l(E,S,w,M)}function l(M,E,S,w){const A=w+1,_=[];for(let T=0;T<=A;T++){_[T]=[];const N=M.clone().lerp(S,T/A),C=E.clone().lerp(S,T/A),U=A-T;for(let O=0;O<=U;O++)O===0&&T===A?_[T][O]=N:_[T][O]=N.clone().lerp(C,O/U)}for(let T=0;T<A;T++)for(let N=0;N<2*(A-T)-1;N++){const C=Math.floor(N/2);N%2===0?(u(_[T][C+1]),u(_[T+1][C]),u(_[T][C])):(u(_[T][C+1]),u(_[T+1][C+1]),u(_[T+1][C]))}}function c(M){const E=new L;for(let S=0;S<s.length;S+=3)E.x=s[S+0],E.y=s[S+1],E.z=s[S+2],E.normalize().multiplyScalar(M),s[S+0]=E.x,s[S+1]=E.y,s[S+2]=E.z}function h(){const M=new L;for(let E=0;E<s.length;E+=3){M.x=s[E+0],M.y=s[E+1],M.z=s[E+2];const S=g(M)/2/Math.PI+.5,w=m(M)/Math.PI+.5;a.push(S,1-w)}x(),d()}function d(){for(let M=0;M<a.length;M+=6){const E=a[M+0],S=a[M+2],w=a[M+4],A=Math.max(E,S,w),_=Math.min(E,S,w);A>.9&&_<.1&&(E<.2&&(a[M+0]+=1),S<.2&&(a[M+2]+=1),w<.2&&(a[M+4]+=1))}}function u(M){s.push(M.x,M.y,M.z)}function f(M,E){const S=M*3;E.x=t[S+0],E.y=t[S+1],E.z=t[S+2]}function x(){const M=new L,E=new L,S=new L,w=new L,A=new Gt,_=new Gt,T=new Gt;for(let N=0,C=0;N<s.length;N+=9,C+=6){M.set(s[N+0],s[N+1],s[N+2]),E.set(s[N+3],s[N+4],s[N+5]),S.set(s[N+6],s[N+7],s[N+8]),A.set(a[C+0],a[C+1]),_.set(a[C+2],a[C+3]),T.set(a[C+4],a[C+5]),w.copy(M).add(E).add(S).divideScalar(3);const U=g(w);v(A,C+0,M,U),v(_,C+2,E,U),v(T,C+4,S,U)}}function v(M,E,S,w){w<0&&M.x===1&&(a[E]=M.x-1),S.x===0&&S.z===0&&(a[E]=w/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fo(t.vertices,t.indices,t.radius,t.detail)}}class po extends fo{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new po(t.radius,t.detail)}}class ls extends Pe{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=t/o,u=e/l,f=[],x=[],v=[],g=[];for(let m=0;m<h;m++){const M=m*u-a;for(let E=0;E<c;E++){const S=E*d-s;x.push(S,-M,0),v.push(0,0,1),g.push(E/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){const E=M+c*m,S=M+c*(m+1),w=M+1+c*(m+1),A=M+1+c*m;f.push(E,S,A),f.push(S,w,A)}this.setIndex(f),this.setAttribute("position",new jt(x,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ls(t.width,t.height,t.widthSegments,t.heightSegments)}}class lr extends Pe{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new L,u=new L,f=[],x=[],v=[],g=[];for(let m=0;m<=i;m++){const M=[],E=m/i,S=a+E*o,w=t*Math.cos(S),A=Math.sqrt(t*t-w*w);let _=0;m===0&&a===0?_=.5/e:m===i&&l===Math.PI&&(_=-.5/e);for(let T=0;T<=e;T++){const N=T/e,C=n+N*s;d.x=-A*Math.cos(C),d.y=w,d.z=A*Math.sin(C),x.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),g.push(N+_,1-E),M.push(c++)}h.push(M)}for(let m=0;m<i;m++)for(let M=0;M<e;M++){const E=h[m][M+1],S=h[m][M],w=h[m+1][M],A=h[m+1][M+1];(m!==0||a>0)&&f.push(E,S,A),(m!==i-1||l<Math.PI)&&f.push(S,w,A)}this.setIndex(f),this.setAttribute("position",new jt(x,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class mo extends Pe{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);const l=[],c=[],h=[],d=[],u=new L,f=new L,x=new L;for(let v=0;v<=i;v++){const g=a+v/i*o;for(let m=0;m<=n;m++){const M=m/n*s;f.x=(t+e*Math.cos(g))*Math.cos(M),f.y=(t+e*Math.cos(g))*Math.sin(M),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),x.subVectors(f,u).normalize(),h.push(x.x,x.y,x.z),d.push(m/n),d.push(v/i)}}for(let v=1;v<=i;v++)for(let g=1;g<=n;g++){const m=(n+1)*v+g-1,M=(n+1)*(v-1)+g-1,E=(n+1)*(v-1)+g,S=(n+1)*v+g;l.push(m,M,S),l.push(M,E,S)}this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function Un(r){const t={};for(const e in r){t[e]={};for(const i in r[e]){const n=r[e][i];if(ll(n))n.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(ll(n[0])){const s=[];for(let a=0,o=n.length;a<o;a++)s[a]=n[a].clone();t[e][i]=s}else t[e][i]=n.slice();else t[e][i]=n}}return t}function Oe(r){const t={};for(let e=0;e<r.length;e++){const i=Un(r[e]);for(const n in i)t[n]=i[n]}return t}function ll(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function fd(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Ic(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const pd={clone:Un,merge:Oe};var md=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends Xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=md,this.fragmentShader=gd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Un(t.uniforms),this.uniformsGroups=fd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new bt().setHex(n.value);break;case"v2":this.uniforms[i].value=new Gt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new L().fromArray(n.value);break;case"v4":this.uniforms[i].value=new de().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Nt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Jt().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class xd extends Vi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Nc extends Xi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new bt(16777215),this.specular=new bt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=fr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ae extends Xi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=fr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _d extends Xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class vd extends Xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class go extends ue{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Md extends go{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const qr=new Jt,cl=new L,hl=new L;class Sd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.mapType=Xe,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rs,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;cl.setFromMatrixPosition(t.matrixWorld),e.position.copy(cl),hl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hl),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){qr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(qr,t.coordinateSystem,t.reversedDepth);const s=this._frameExtents,a=n?n.z/s.x:1,o=n?n.w/s.y:1,l=n?n.x/s.x:0,c=n?n.y/s.y:0;t.coordinateSystem===ss||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(qr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Us=new L,Fs=new Wi,li=new L;class Uc extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Us,Fs,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Us,Fs,li.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Us,Fs,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Us,Fs,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new L,dl=new Gt,ul=new Gt;class ni extends Uc{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ka*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ka*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z)}getViewSize(t,e){return this.getViewBounds(t,dl,ul),e.subVectors(ul,dl)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Er*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Fc extends Uc{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class yd extends Sd{constructor(){super(new Fc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bd extends go{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.shadow=new yd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Ed extends go{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Sn=-90,yn=1;class Wa extends ue{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new ni(Sn,yn,t,e);n.layers=this.layers,this.add(n);const s=new ni(Sn,yn,t,e);s.layers=this.layers,this.add(s);const a=new ni(Sn,yn,t,e);a.layers=this.layers,this.add(a);const o=new ni(Sn,yn,t,e);o.layers=this.layers,this.add(o);const l=new ni(Sn,yn,t,e);l.layers=this.layers,this.add(l);const c=new ni(Sn,yn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===ai)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ss)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=v,t.setRenderTarget(i,5,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Td extends ni{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const fl=new Jt;class wd{constructor(t,e,i=0,n=1/0){this.ray=new pr(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new oo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Zt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return fl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fl),this}intersectObject(t,e=!0,i=[]){return Xa(t,this,i,e),i.sort(pl),i}intersectObjects(t,e=!0,i=[]){for(let n=0,s=t.length;n<s;n++)Xa(t[n],this,i,e);return i.sort(pl),i}}function pl(r,t){return r.distance-t.distance}function Xa(r,t,e,i){let n=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Xa(s[a],t,e,!0)}}function ml(r,t,e,i){const n=Ad(i);switch(e){case gc:return r*t;case eo:return r*t/n.components*n.byteLength;case io:return r*t/n.components*n.byteLength;case an:return r*t*2/n.components*n.byteLength;case no:return r*t*2/n.components*n.byteLength;case xc:return r*t*3/n.components*n.byteLength;case ui:return r*t*4/n.components*n.byteLength;case so:return r*t*4/n.components*n.byteLength;case qs:case Ks:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case $s:case Zs:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case da:case fa:return Math.max(r,16)*Math.max(t,8)/4;case ha:case ua:return Math.max(r,8)*Math.max(t,8)/2;case pa:case ma:case xa:case _a:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ga:case tr:case va:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ya:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case ba:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case wa:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ra:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case La:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Da:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ia:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Na:case Ua:case Fa:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Oa:case za:return Math.ceil(r/4)*Math.ceil(t/4)*8;case er:case Ba:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ad(r){switch(r){case Xe:case uc:return{byteLength:1,components:1};case ns:case fc:case gi:return{byteLength:2,components:1};case ja:case to:return{byteLength:2,components:4};case mi:case Qa:case ri:return{byteLength:4,components:1};case pc:case mc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Za}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Za);function Oc(){let r=null,t=!1,e=null,i=null;function n(s,a){i=r.requestAnimationFrame(n),e(s,a)}return{start:function(){t!==!0&&e!==null&&r!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Rd(r){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,x)=>f.start-x.start);let u=0;for(let f=1;f<d.length;f++){const x=d[u],v=d[f];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,x=d.length;f<x;f++){const v=d[f];r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}var Cd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Id=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ud=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Od=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Qd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,tu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,su="gl_FragColor = linearToOutputTexel( gl_FragColor );",ru=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,au=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ou=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,lu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,du=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_u=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Mu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Su=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wu=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Au=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ru=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pu=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Lu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Du=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ou=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ku=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gu=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ku=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ju=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ju=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ef=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,rf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,of=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,df=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,uf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ff=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_f=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ef=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Df=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ff=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Of=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Kf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$f=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ip=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,np=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ap=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,op=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:Cd,alphahash_pars_fragment:Pd,alphamap_fragment:Ld,alphamap_pars_fragment:Dd,alphatest_fragment:Id,alphatest_pars_fragment:Nd,aomap_fragment:Ud,aomap_pars_fragment:Fd,batching_pars_vertex:Od,batching_vertex:zd,begin_vertex:Bd,beginnormal_vertex:kd,bsdfs:Hd,iridescence_fragment:Gd,bumpmap_pars_fragment:Vd,clipping_planes_fragment:Wd,clipping_planes_pars_fragment:Xd,clipping_planes_pars_vertex:Yd,clipping_planes_vertex:qd,color_fragment:Kd,color_pars_fragment:$d,color_pars_vertex:Zd,color_vertex:Jd,common:Qd,defaultnormal_vertex:jd,displacementmap_pars_vertex:tu,displacementmap_vertex:eu,emissivemap_fragment:iu,emissivemap_pars_fragment:nu,colorspace_fragment:su,colorspace_pars_fragment:ru,envmap_fragment:au,envmap_common_pars_fragment:ou,envmap_pars_fragment:lu,envmap_pars_vertex:cu,envmap_physical_pars_fragment:Mu,envmap_vertex:hu,fog_vertex:du,fog_pars_vertex:uu,fog_fragment:fu,fog_pars_fragment:pu,gradientmap_pars_fragment:mu,lightmap_pars_fragment:gu,lights_lambert_fragment:xu,lights_lambert_pars_fragment:_u,lights_pars_begin:vu,lights_toon_fragment:Su,lights_toon_pars_fragment:yu,lights_phong_fragment:bu,lights_phong_pars_fragment:Eu,lights_physical_fragment:Tu,lights_physical_pars_fragment:wu,lights_fragment_begin:Au,lights_fragment_maps:Ru,lights_fragment_end:Cu,lightprobes_pars_fragment:Pu,logdepthbuf_fragment:Lu,logdepthbuf_pars_fragment:Du,logdepthbuf_pars_vertex:Iu,logdepthbuf_vertex:Nu,map_fragment:Uu,map_pars_fragment:Fu,map_particle_fragment:Ou,map_particle_pars_fragment:zu,metalnessmap_fragment:Bu,metalnessmap_pars_fragment:ku,morphinstance_vertex:Hu,morphcolor_vertex:Gu,morphnormal_vertex:Vu,morphtarget_pars_vertex:Wu,morphtarget_vertex:Xu,normal_fragment_begin:Yu,normal_fragment_maps:qu,normal_pars_fragment:Ku,normal_pars_vertex:$u,normal_vertex:Zu,normalmap_pars_fragment:Ju,clearcoat_normal_fragment_begin:Qu,clearcoat_normal_fragment_maps:ju,clearcoat_pars_fragment:tf,iridescence_pars_fragment:ef,opaque_fragment:nf,packing:sf,premultiplied_alpha_fragment:rf,project_vertex:af,dithering_fragment:of,dithering_pars_fragment:lf,roughnessmap_fragment:cf,roughnessmap_pars_fragment:hf,shadowmap_pars_fragment:df,shadowmap_pars_vertex:uf,shadowmap_vertex:ff,shadowmask_pars_fragment:pf,skinbase_vertex:mf,skinning_pars_vertex:gf,skinning_vertex:xf,skinnormal_vertex:_f,specularmap_fragment:vf,specularmap_pars_fragment:Mf,tonemapping_fragment:Sf,tonemapping_pars_fragment:yf,transmission_fragment:bf,transmission_pars_fragment:Ef,uv_pars_fragment:Tf,uv_pars_vertex:wf,uv_vertex:Af,worldpos_vertex:Rf,background_vert:Cf,background_frag:Pf,backgroundCube_vert:Lf,backgroundCube_frag:Df,cube_vert:If,cube_frag:Nf,depth_vert:Uf,depth_frag:Ff,distance_vert:Of,distance_frag:zf,equirect_vert:Bf,equirect_frag:kf,linedashed_vert:Hf,linedashed_frag:Gf,meshbasic_vert:Vf,meshbasic_frag:Wf,meshlambert_vert:Xf,meshlambert_frag:Yf,meshmatcap_vert:qf,meshmatcap_frag:Kf,meshnormal_vert:$f,meshnormal_frag:Zf,meshphong_vert:Jf,meshphong_frag:Qf,meshphysical_vert:jf,meshphysical_frag:tp,meshtoon_vert:ep,meshtoon_frag:ip,points_vert:np,points_frag:sp,shadow_vert:rp,shadow_frag:ap,sprite_vert:op,sprite_frag:lp},mt={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},hi={basic:{uniforms:Oe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Oe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new bt(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Oe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Oe([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Oe([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new bt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Oe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Oe([mt.points,mt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Oe([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Oe([mt.common,mt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Oe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Oe([mt.sprite,mt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:Oe([mt.common,mt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:Oe([mt.lights,mt.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};hi.physical={uniforms:Oe([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Os={r:0,b:0,g:0},cp=new Jt,zc=new Nt;zc.set(-1,0,0,0,1,0,0,0,1);function hp(r,t,e,i,n,s){const a=new bt(0);let o=n===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){const S=M.backgroundBlurriness>0;E=t.get(E,S)}return E}function x(M){let E=!1;const S=f(M);S===null?g(a,o):S&&S.isColor&&(g(S,1),E=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(M,E){const S=f(E);S&&S.isCubeTexture?(c===void 0&&(c=new Pt(new $t(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:Un(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cp.makeRotationFromEuler(E.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(zc),c.material.toneMapped=Yt.getTransfer(S.colorSpace)!==ie,(h!==S||d!==S.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Pt(new ls(2,2),new Vi({name:"BackgroundMaterial",uniforms:Un(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(S.colorSpace)!==ie,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,E){M.getRGB(Os,Ic(r)),e.buffers.color.setClear(Os.r,Os.g,Os.b,E,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),o=E,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:x,addToRenderList:v,dispose:m}}function dp(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=u(null);let s=n,a=!1;function o(U,O,W,I,G){let $=!1;const H=d(U,I,W,O);s!==H&&(s=H,c(s.object)),$=f(U,I,W,G),$&&x(U,I,W,G),G!==null&&t.update(G,r.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,S(U,O,W,I),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return r.createVertexArray()}function c(U){return r.bindVertexArray(U)}function h(U){return r.deleteVertexArray(U)}function d(U,O,W,I){const G=I.wireframe===!0;let $=i[O.id];$===void 0&&($={},i[O.id]=$);const H=U.isInstancedMesh===!0?U.id:0;let et=$[H];et===void 0&&(et={},$[H]=et);let Y=et[W.id];Y===void 0&&(Y={},et[W.id]=Y);let j=Y[G];return j===void 0&&(j=u(l()),Y[G]=j),j}function u(U){const O=[],W=[],I=[];for(let G=0;G<e;G++)O[G]=0,W[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:I,object:U,attributes:{},index:null}}function f(U,O,W,I){const G=s.attributes,$=O.attributes;let H=0;const et=W.getAttributes();for(const Y in et)if(et[Y].location>=0){const tt=G[Y];let Et=$[Y];if(Et===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(Et=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(Et=U.instanceColor)),tt===void 0||tt.attribute!==Et||Et&&tt.data!==Et.data)return!0;H++}return s.attributesNum!==H||s.index!==I}function x(U,O,W,I){const G={},$=O.attributes;let H=0;const et=W.getAttributes();for(const Y in et)if(et[Y].location>=0){let tt=$[Y];tt===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(tt=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(tt=U.instanceColor));const Et={};Et.attribute=tt,tt&&tt.data&&(Et.data=tt.data),G[Y]=Et,H++}s.attributes=G,s.attributesNum=H,s.index=I}function v(){const U=s.newAttributes;for(let O=0,W=U.length;O<W;O++)U[O]=0}function g(U){m(U,0)}function m(U,O){const W=s.newAttributes,I=s.enabledAttributes,G=s.attributeDivisors;W[U]=1,I[U]===0&&(r.enableVertexAttribArray(U),I[U]=1),G[U]!==O&&(r.vertexAttribDivisor(U,O),G[U]=O)}function M(){const U=s.newAttributes,O=s.enabledAttributes;for(let W=0,I=O.length;W<I;W++)O[W]!==U[W]&&(r.disableVertexAttribArray(W),O[W]=0)}function E(U,O,W,I,G,$,H){H===!0?r.vertexAttribIPointer(U,O,W,G,$):r.vertexAttribPointer(U,O,W,I,G,$)}function S(U,O,W,I){v();const G=I.attributes,$=W.getAttributes(),H=O.defaultAttributeValues;for(const et in $){const Y=$[et];if(Y.location>=0){let j=G[et];if(j===void 0&&(et==="instanceMatrix"&&U.instanceMatrix&&(j=U.instanceMatrix),et==="instanceColor"&&U.instanceColor&&(j=U.instanceColor)),j!==void 0){const tt=j.normalized,Et=j.itemSize,Ut=t.get(j);if(Ut===void 0)continue;const Z=Ut.buffer,gt=Ut.type,Mt=Ut.bytesPerElement,Rt=gt===r.INT||gt===r.UNSIGNED_INT||j.gpuType===Qa;if(j.isInterleavedBufferAttribute){const xt=j.data,Ot=xt.isInterleavedBuffer===!0?xt.stride:xt.itemSize,fe=j.offset;if(xt.isInstancedInterleavedBuffer||xt.isInstancedBufferAttribute){for(let Lt=0;Lt<Y.locationSize;Lt++)m(Y.location+Lt,xt.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Lt=0;Lt<Y.locationSize;Lt++)g(Y.location+Lt);r.bindBuffer(r.ARRAY_BUFFER,Z);for(let Lt=0;Lt<Y.locationSize;Lt++)E(Y.location+Lt,Et/Y.locationSize,gt,tt,Ot*Mt,(fe+Et/Y.locationSize*Lt)*Mt,Rt)}else{if(j.isInstancedBufferAttribute){for(let xt=0;xt<Y.locationSize;xt++)m(Y.location+xt,j.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let xt=0;xt<Y.locationSize;xt++)g(Y.location+xt);r.bindBuffer(r.ARRAY_BUFFER,Z);for(let xt=0;xt<Y.locationSize;xt++)E(Y.location+xt,Et/Y.locationSize,gt,tt,Et*Mt,Et/Y.locationSize*xt*Mt,Rt)}}else if(H!==void 0){const tt=H[et];if(tt!==void 0)switch(tt.length){case 2:r.vertexAttrib2fv(Y.location,tt);break;case 3:r.vertexAttrib3fv(Y.location,tt);break;case 4:r.vertexAttrib4fv(Y.location,tt);break;default:r.vertexAttrib1fv(Y.location,tt)}}}}M()}function w(){N();for(const U in i){const O=i[U];for(const W in O){const I=O[W];for(const G in I){const $=I[G];for(const H in $)h($[H].object),delete $[H];delete I[G]}}delete i[U]}}function A(U){if(i[U.id]===void 0)return;const O=i[U.id];for(const W in O){const I=O[W];for(const G in I){const $=I[G];for(const H in $)h($[H].object),delete $[H];delete I[G]}}delete i[U.id]}function _(U){for(const O in i){const W=i[O];for(const I in W){const G=W[I];if(G[U.id]===void 0)continue;const $=G[U.id];for(const H in $)h($[H].object),delete $[H];delete G[U.id]}}}function T(U){for(const O in i){const W=i[O],I=U.isInstancedMesh===!0?U.id:0,G=W[I];if(G!==void 0){for(const $ in G){const H=G[$];for(const et in H)h(H[et].object),delete H[et];delete G[$]}delete W[I],Object.keys(W).length===0&&delete i[O]}}}function N(){C(),a=!0,s!==n&&(s=n,c(s.object))}function C(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:N,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:T,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function up(r,t,e){let i;function n(l){i=l}function s(l,c){r.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function fp(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(_){return!(_!==ui&&i.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const T=_===gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Xe&&_!==ri&&!T&&i.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Dt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Dt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=r.getParameter(r.MAX_SAMPLES),A=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:S,maxSamples:w,samples:A}}function pp(r){const t=this;let e=null,i=0,n=!1,s=!1;const a=new Oi,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const x=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,m=r.get(d);if(!n||x===null||x.length===0||s&&!g)s?h(null):c();else{const M=s?0:i,E=M*4;let S=m.clippingState||null;l.value=S,S=h(x,u,E,f);for(let w=0;w!==E;++w)S[w]=e[w];m.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,x){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=l.value,x!==!0||g===null){const m=f+v*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,S=f;E!==v;++E,S+=4)a.copy(d[E]).applyMatrix4(M,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}class xo extends fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Pc(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new $t(5,5,5),s=new Vi({name:"CubemapFromEquirect",uniforms:Un(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Be,blending:Pn});s.uniforms.tEquirect.value=e;const a=new Pt(n,s),o=e.minFilter;return e.minFilter===Bi&&(e.minFilter=He),new Wa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}}const gl=256,mp=3,gp=20,Bc=256,kc=16,xp=3,_p=new L,vp=new bt;class cr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Wa(1,10,null),this._boxMesh=new Pt(new $t(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){const{size:a=256,position:o=_p}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,x=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(vp));const g=new Wa(i,n,h);return g.position.copy(o),g.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=x,t.background=v,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(gl,zh(t))}_fromTexture(t,e){t.mapping===Dn||t.mapping===is?this._setSize(t.image.length===0?gl:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){const t=this._cubeSize,e=xl(t,!1,!1),i=Math.log2(t)-mp;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=xl(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){const n=this._boxMesh,s=this._cubeCamera;n.material=i,s.renderTarget=t,s.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),s.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Dn||t.mapping===is?(this._cubemapMaterial===null&&(this._cubemapMaterial=vl()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=_l()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Mp(),this._integrationMaterial=Sp());const e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/kc);for(let a=0;a<=i;a++){const o=cr.lodToRoughness(a,i);if(a>i-xp)s.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(Bc*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=yp());const i=this._blurMaterial,n=i.uniforms,s=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=s.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(s,0,i)}}function xl(r,t,e){return new xo(r,{minFilter:Bi,generateMipmaps:t,type:gi,colorSpace:nr,depthBuffer:e})}function cs(r,t,e){return new Vi({name:r,uniforms:t,vertexShader:Ht.cube_vert,fragmentShader:e,side:Be,blending:Pn,depthTest:!1,depthWrite:!1})}function Mp(){return cs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Bc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Sp(){return cs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:kc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function yp(){return cs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${gp}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function _l(){return cs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function vl(){return cs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function bp(r){let t=new WeakMap,e=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===Mr||f===Sr)if(t.has(u)){const x=t.get(u).texture;return o(x,u.mapping)}else{const x=u.image;if(x&&x.height>0){const v=new xo(x.height);return v.fromEquirectangularTexture(r,u),t.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const f=u.mapping,x=f===Mr||f===Sr,v=f===Dn||f===is;if(x||v){let g=e.get(u);const m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new cr(r)),g=x?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const M=u.image;return x&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new cr(r)),g=x?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===Mr?u.mapping=Dn:f===Sr&&(u.mapping=is),u}function l(u){let f=0;const x=6;for(let v=0;v<x;v++)u[v]!==void 0&&f++;return f===x}function c(u){const f=u.target;f.removeEventListener("dispose",c);const x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function Ep(r){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=r.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&Js("WebGLRenderer: "+i+" extension not supported."),n}}}function Tp(r,t,e,i){const n={},s=new WeakMap,a=new FinalizationRegistry(x=>delete n[x]);function o(x){l(x.target)}function l(x){x.index!==null&&t.remove(x.index);for(const g in x.attributes)t.remove(x.attributes[g]);x.removeEventListener("dispose",o),delete n[x.id],a.unregister(x);const v=s.get(x);v&&(t.remove(v),s.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,e.memory.geometries--}function c(x,v){return n[v.id]!==void 0||(v.addEventListener("dispose",o),n[v.id]=new WeakRef(v),a.register(v,v.id,v),e.memory.geometries++),v}function h(x){const v=x.attributes;for(const g in v)t.update(v[g],r.ARRAY_BUFFER)}function d(x){const v=x.index,g=x.attributes.position;let m=0;if(g===void 0)return;const M=v!==null?v.array.length:g.array.length/3-1,E=g.count>=65535?Tc:Ec,S=new E(Math.ceil(M/3)*6,1),w=S.array;if(v!==null){const _=v.array;m=v.version;for(let T=0,N=0;T<M;T+=3){const C=_[T+0],U=_[T+1],O=_[T+2];w[N++]=C,w[N++]=U,w[N++]=U,w[N++]=O,w[N++]=O,w[N++]=C}}else{m=g.version;for(let _=0,T=0;_<M;_+=3){const N=_+0,C=_+1,U=_+2;w[T++]=N,w[T++]=C,w[T++]=C,w[T++]=U,w[T++]=U,w[T++]=N}}S.version=m;const A=s.get(x);A&&t.remove(A),s.set(x,S)}function u(x){const v=s.get(x);if(v){const g=x.index;g!==null&&v.version<g.version&&d(x)}else d(x);return s.get(x)}function f(){for(const x in n){const v=n[x].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function wp(r,t,e){let i;function n(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,u){r.drawElements(i,u,s,d*a),e.update(u,i,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(i,u,s,d*a,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,f);let v=0;for(let g=0;g<f;g++)v+=u[g];e.update(v,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ap(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:Zt("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Rp(r,t,e){const i=new WeakMap,n=new de;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let C=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",C)};var f=C;u!==void 0&&u.texture.dispose();const x=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let S=0;x===!0&&(S=1),v===!0&&(S=2),g===!0&&(S=3);let w=o.attributes.position.count*S,A=1;w>t.maxTextureSize&&(A=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const _=new Float32Array(w*A*4*d),T=new yc(_,w,A,d);T.type=ri,T.needsUpdate=!0;const N=S*4;for(let U=0;U<d;U++){const O=m[U],W=M[U],I=E[U],G=w*A*4*U;for(let $=0;$<O.count;$++){const H=$*N;x===!0&&(n.fromBufferAttribute(O,$),_[G+H+0]=n.x,_[G+H+1]=n.y,_[G+H+2]=n.z,_[G+H+3]=0),v===!0&&(n.fromBufferAttribute(W,$),_[G+H+4]=n.x,_[G+H+5]=n.y,_[G+H+6]=n.z,_[G+H+7]=0),g===!0&&(n.fromBufferAttribute(I,$),_[G+H+8]=n.x,_[G+H+9]=n.y,_[G+H+10]=n.z,_[G+H+11]=I.itemSize===4?n.w:1)}}u={count:d,texture:T,size:new Gt(w,A)},i.set(o,u),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let x=0;for(let g=0;g<c.length;g++)x+=c[g];const v=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(r,"morphTargetBaseInfluence",v),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Cp(r,t,e,i,n){let s=new WeakMap;function a(c){const h=n.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const Pp={[rc]:"LINEAR_TONE_MAPPING",[ac]:"REINHARD_TONE_MAPPING",[oc]:"CINEON_TONE_MAPPING",[Ja]:"ACES_FILMIC_TONE_MAPPING",[cc]:"AGX_TONE_MAPPING",[hc]:"NEUTRAL_TONE_MAPPING",[lc]:"CUSTOM_TONE_MAPPING"};function Lp(r,t,e,i,n,s){const a=new fi(t,e,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new Pe;h.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new jt([0,2,0,0,2,0],2));const d=new xd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Pt(h,d),f=new Fc(-1,1,1,-1,0,1);let x=null,v=null,g=!1,m,M=null,E=[],S=!1;this.setSize=function(w,A){a.setSize(w,A),o!==null&&o.setSize(w,A),l!==null&&l.setSize(w,A);for(let _=0;_<E.length;_++){const T=E[_];T.setSize&&T.setSize(w,A)}},this.setEffects=function(w){E=w,S=E.length>0&&E[0].isRenderPass===!0;const A=a.width,_=a.height;E.length>0&&o===null&&(o=new fi(A,_,{type:gi,depthBuffer:!1,stencilBuffer:!1}),l=new fi(A,_,{type:gi,depthBuffer:!1,stencilBuffer:!1}));const T=n===!0&&E.some(N=>N.needsDepthTexture===!0);T!==(a.depthTexture!==null)&&(T===!0&&c===null&&(c=new Nn(A,_),s===!0&&(c.format=ki,c.type=In)),a.dispose(),a.depthTexture=T?c:null,a.resolveDepthBuffer=T,a.storeMultisampledDepthBuffer=T);for(let N=0;N<E.length;N++){const C=E[N];C.setSize&&C.setSize(A,_),T&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(w,A){if(g||w.toneMapping===wi&&E.length===0)return!1;if(M=A,A!==null){const _=A.width,T=A.height;(a.width!==_||a.height!==T)&&this.setSize(_,T)}return S===!1&&w.setRenderTarget(a),m=w.toneMapping,w.toneMapping=wi,!0},this.hasRenderPass=function(){return S},this.end=function(w,A){w.toneMapping=m,g=!0;let _=a,T=o;for(let N=0;N<E.length;N++){const C=E[N];C.enabled!==!1&&(C.render(w,T,_,A),C.needsSwap!==!1&&(_=T,T=T===o?l:o))}if(x!==w.outputColorSpace||v!==w.toneMapping){x=w.outputColorSpace,v=w.toneMapping,d.defines={},Yt.getTransfer(x)===ie&&(d.defines.SRGB_TRANSFER="");const N=Pp[v];N&&(d.defines[N]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(M),w.render(u,f),M=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const Hc=new Ue,Gc=new Nn(1,1),Vc=new Lc(1),Wc=new yc,Xc=new Yh,Yc=new Pc,Ml=[],Sl=[],yl=new Float32Array(16),bl=new Float32Array(9),El=new Float32Array(4);function Fn(r,t,e){const i=r[0];if(i<=0||i>0)return r;const n=t*e;let s=Ml[n];if(s===void 0&&(s=new Float32Array(n),Ml[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Me(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Se(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function mr(r,t){let e=Sl[t];e===void 0&&(e=new Int32Array(t),Sl[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function Dp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Ip(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;r.uniform2fv(this.addr,t),Se(e,t)}}function Np(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;r.uniform3fv(this.addr,t),Se(e,t)}}function Up(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;r.uniform4fv(this.addr,t),Se(e,t)}}function Fp(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(Me(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,i))return;El.set(i),r.uniformMatrix2fv(this.addr,!1,El),Se(e,i)}}function Op(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(Me(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,i))return;bl.set(i),r.uniformMatrix3fv(this.addr,!1,bl),Se(e,i)}}function zp(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(Me(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,i))return;yl.set(i),r.uniformMatrix4fv(this.addr,!1,yl),Se(e,i)}}function Bp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function kp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;r.uniform2iv(this.addr,t),Se(e,t)}}function Hp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;r.uniform3iv(this.addr,t),Se(e,t)}}function Gp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;r.uniform4iv(this.addr,t),Se(e,t)}}function Vp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Wp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;r.uniform2uiv(this.addr,t),Se(e,t)}}function Xp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;r.uniform3uiv(this.addr,t),Se(e,t)}}function Yp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;r.uniform4uiv(this.addr,t),Se(e,t)}}function gr(r){return r.version===0&&(r.compareFunction=Mc,r.needsUpdate=!0),r}function qp(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?s=gr(Gc):s=Hc,e.setTexture2D(t||s,n)}function Kp(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Xc,n)}function $p(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=gr(Vc):s=Yc,e.setTextureCube(t||s,n)}function Zp(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Wc,n)}function Jp(r){switch(r){case 5126:return Dp;case 35664:return Ip;case 35665:return Np;case 35666:return Up;case 35674:return Fp;case 35675:return Op;case 35676:return zp;case 5124:case 35670:return Bp;case 35667:case 35671:return kp;case 35668:case 35672:return Hp;case 35669:case 35673:return Gp;case 5125:return Vp;case 36294:return Wp;case 36295:return Xp;case 36296:return Yp;case 35678:case 36198:case 36298:case 36306:case 35682:return qp;case 35679:case 36299:case 36307:return Kp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return Zp}}function Qp(r,t){r.uniform1fv(this.addr,t)}function jp(r,t){const e=Fn(t,this.size,2);r.uniform2fv(this.addr,e)}function tm(r,t){const e=Fn(t,this.size,3);r.uniform3fv(this.addr,e)}function em(r,t){const e=Fn(t,this.size,4);r.uniform4fv(this.addr,e)}function im(r,t){const e=Fn(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function nm(r,t){const e=Fn(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function sm(r,t){const e=Fn(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function rm(r,t){r.uniform1iv(this.addr,t)}function am(r,t){r.uniform2iv(this.addr,t)}function om(r,t){r.uniform3iv(this.addr,t)}function lm(r,t){r.uniform4iv(this.addr,t)}function cm(r,t){r.uniform1uiv(this.addr,t)}function hm(r,t){r.uniform2uiv(this.addr,t)}function dm(r,t){r.uniform3uiv(this.addr,t)}function um(r,t){r.uniform4uiv(this.addr,t)}function fm(r,t,e){const i=this.cache,n=t.length,s=mr(e,n);Me(i,s)||(r.uniform1iv(this.addr,s),Se(i,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=gr(Gc):a=Hc;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,s[o])}function pm(r,t,e){const i=this.cache,n=t.length,s=mr(e,n);Me(i,s)||(r.uniform1iv(this.addr,s),Se(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Xc,s[a])}function mm(r,t,e){const i=this.cache,n=t.length,s=mr(e,n);Me(i,s)||(r.uniform1iv(this.addr,s),Se(i,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=gr(Vc):a=Yc;for(let o=0;o!==n;++o)e.setTextureCube(t[o]||a,s[o])}function gm(r,t,e){const i=this.cache,n=t.length,s=mr(e,n);Me(i,s)||(r.uniform1iv(this.addr,s),Se(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Wc,s[a])}function xm(r){switch(r){case 5126:return Qp;case 35664:return jp;case 35665:return tm;case 35666:return em;case 35674:return im;case 35675:return nm;case 35676:return sm;case 5124:case 35670:return rm;case 35667:case 35671:return am;case 35668:case 35672:return om;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return hm;case 36295:return dm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}class _m{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Jp(e.type)}}class vm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xm(e.type)}}class Mm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const o=n[s];o.setValue(t,e[o.id],i)}}}const Kr=/(\w+)(\])?(\[|\.)?/g;function Tl(r,t){r.seq.push(t),r.map[t.id]=t}function Sm(r,t,e){const i=r.name,n=i.length;for(Kr.lastIndex=0;;){const s=Kr.exec(i),a=Kr.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Tl(e,c===void 0?new _m(o,r,t):new vm(o,r,t));break}else{let d=e.map[o];d===void 0&&(d=new Mm(o),Tl(e,d)),e=d}}}class Qs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Sm(o,l,this)}const n=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):s.push(a);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function wl(r,t,e){const i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}const ym=37297;let bm=0;function Em(r,t){const e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Al=new Nt;function Tm(r){Yt._getMatrix(Al,Yt.workingColorSpace,r);const t=`mat3( ${Al.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(r)){case sr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Rl(r,t,e){const i=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Em(r.getShaderSource(t),o)}else return s}function wm(r,t){const e=Tm(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Am={[rc]:"Linear",[ac]:"Reinhard",[oc]:"Cineon",[Ja]:"ACESFilmic",[cc]:"AgX",[hc]:"Neutral",[lc]:"Custom"};function Rm(r,t){const e=Am[t];return e===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zs=new L;function Cm(){Yt.getLuminanceCoefficients(zs);const r=zs.x.toFixed(4),t=zs.y.toFixed(4),e=zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pm(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qn).join(`
`)}function Lm(r){const t=[];for(const e in r){const i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Dm(r,t){const e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(t,n),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Qn(r){return r!==""}function Cl(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Pl(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Im=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ya(r){return r.replace(Im,Nm)}function Nm(r,t){const e=Ht[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ya(e)}const Um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ll(r){return r.replace(Um,Fm)}function Fm(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Dl(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Om={[Ys]:"SHADOWMAP_TYPE_PCF",[Jn]:"SHADOWMAP_TYPE_VSM"};function zm(r){return Om[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Bm={[is]:"ENVMAP_MODE_REFRACTION"};function km(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Bm[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Hm={[fr]:"ENVMAP_BLENDING_MULTIPLY",[Sh]:"ENVMAP_BLENDING_MIX",[yh]:"ENVMAP_BLENDING_ADD"};function Gm(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Hm[r.combine]||"ENVMAP_BLENDING_NONE"}function Vm(r,t,e,i){const n=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=zm(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=km(e),d=Gm(e),u=Pm(e),f=Lm(s),x=n.createProgram();let v,g,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Qn).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Qn).join(`
`),g.length>0&&(g+=`
`)):(v=[Dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qn).join(`
`),g=[Dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wi?"#define TONE_MAPPING":"",e.toneMapping!==wi?Ht.tonemapping_pars_fragment:"",e.toneMapping!==wi?Rm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,wm("linearToOutputTexel",e.outputColorSpace),Cm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qn).join(`
`)),a=Ya(a),a=Cl(a,e),a=Pl(a,e),o=Ya(o),o=Cl(o,e),o=Pl(o,e),a=Ll(a),o=Ll(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",e.glslVersion===Fo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=m+v+a,E=m+g+o,S=wl(n,n.VERTEX_SHADER,M),w=wl(n,n.FRAGMENT_SHADER,E);n.attachShader(x,S),n.attachShader(x,w),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function A(C){if(r.debug.checkShaderErrors){const U=n.getProgramInfoLog(x)||"",O=n.getShaderInfoLog(S)||"",W=n.getShaderInfoLog(w)||"",I=U.trim(),G=O.trim(),$=W.trim();let H=!0,et=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,x,S,w);else{const Y=Rl(n,S,"vertex"),j=Rl(n,w,"fragment");Zt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+Y+`
`+j)}else I!==""?Dt("WebGLProgram: Program Info Log:",I):(G===""||$==="")&&(et=!1);et&&(C.diagnostics={runnable:H,programLog:I,vertexShader:{log:G,prefix:v},fragmentShader:{log:$,prefix:g}})}n.deleteShader(S),n.deleteShader(w),_=new Qs(n,x),T=Dm(n,x)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=n.getProgramParameter(x,ym)),N},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=w,this}let Wm=0;class Xm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Ym(t),e.set(t,i)),i}}class Ym{constructor(t){this.id=Wm++,this.code=t,this.usedTimes=0}}function qm(r){return r===an||r===tr||r===er}function Km(r,t,e,i,n,s){const a=new oo,o=new Xm,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,T,N,C,U,O){const W=C.fog,I=U.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=t.get(_.envMap||G,$),et=u[_.type];let Y=i.precision;_.precision!==null&&(Y=i.getMaxPrecision(_.precision),Y!==_.precision&&Dt("WebGLProgram.getParameters:",_.precision,"not supported, using",Y,"instead."));const j=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,tt=j!==void 0?j.length:0;let Et=0;I.morphAttributes.position!==void 0&&(Et=1),I.morphAttributes.normal!==void 0&&(Et=2),I.morphAttributes.color!==void 0&&(Et=3);let Ut,Z,gt,Mt;if(et){const pt=hi[et];Ut=pt.vertexShader,Z=pt.fragmentShader}else{Ut=_.vertexShader,Z=_.fragmentShader;const pt=o.getVertexShaderStage(_),ee=o.getFragmentShaderStage(_);o.update(_,pt,ee),gt=pt.id,Mt=ee.id}const Rt=r.getRenderTarget(),xt=r.state.buffers.depth.getReversed(),Ot=U.isInstancedMesh===!0,fe=U.isBatchedMesh===!0,Lt=!!_.map,te=!!_.matcap,ne=!!H,Vt=ne&&H.isPMREMTexture===!0,Re=!!_.aoMap,xe=!!_.lightMap,ke=!!_.bumpMap&&_.wireframe===!1,le=!!_.normalMap,oi=!!_.displacementMap,ye=!!_.emissiveMap,Ye=!!_.metalnessMap,qe=!!_.roughnessMap,Ke=_.anisotropy>0,F=_.clearcoat>0,$e=_.diffuseRoughness>0,ae=_.dispersion>0,oe=_.retroreflectivity>0,ft=_.iridescence>0,_e=_.sheen>0,Ct=_.transmission>0,It=Ke&&!!_.anisotropyMap,R=F&&!!_.clearcoatMap,y=F&&!!_.clearcoatNormalMap,B=F&&!!_.clearcoatRoughnessMap,it=$e&&!!_.diffuseRoughnessMap,Q=ft&&!!_.iridescenceMap,rt=ft&&!!_.iridescenceThicknessMap,dt=_e&&!!_.sheenColorMap,q=_e&&!!_.sheenRoughnessMap,K=!!_.specularMap,ot=!!_.specularColorMap,P=!!_.specularIntensityMap,J=Ct&&!!_.transmissionMap,X=Ct&&!!_.thicknessMap,lt=!!_.gradientMap,st=!!_.alphaMap,at=_.alphaTest>0,wt=!!_.alphaHash,kt=!!_.extensions;let nt=wi;_.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(nt=r.toneMapping);const At=Vt?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Bt={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:Ut,fragmentShader:Z,defines:_.defines,customVertexShaderID:gt,customFragmentShaderID:Mt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:Y,batching:fe,batchingColor:fe&&U._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&U.instanceColor!==null,instancingMorph:Ot&&U.morphTexture!==null,outputColorSpace:Rt===null?r.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Yt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Lt,matcap:te,envMap:ne,envMapMode:ne&&H.mapping,envMapPMREM:Vt,envMapMaxLod:Vt?At.length-1:null,envMapSize:Vt?At[0].width:null,aoMap:Re,lightMap:xe,bumpMap:ke,normalMap:le,displacementMap:oi,emissiveMap:ye,normalMapObjectSpace:le&&_.normalMapType===Eh,normalMapTangentSpace:le&&_.normalMapType===ir,packedNormalMap:le&&_.normalMapType===ir&&qm(_.normalMap.format),metalnessMap:Ye,roughnessMap:qe,anisotropy:Ke,anisotropyMap:It,clearcoat:F,clearcoatMap:R,clearcoatNormalMap:y,clearcoatRoughnessMap:B,diffuseRoughness:$e,diffuseRoughnessMap:it,dispersion:ae,retroreflection:oe,iridescence:ft,iridescenceMap:Q,iridescenceThicknessMap:rt,sheen:_e,sheenColorMap:dt,sheenRoughnessMap:q,specularMap:K,specularColorMap:ot,specularIntensityMap:P,transmission:Ct,transmissionMap:J,thicknessMap:X,gradientMap:lt,opaque:_.transparent===!1&&_.blending===ts&&_.alphaToCoverage===!1,alphaMap:st,alphaTest:at,alphaHash:wt,combine:_.combine,mapUv:Lt&&f(_.map.channel),aoMapUv:Re&&f(_.aoMap.channel),lightMapUv:xe&&f(_.lightMap.channel),bumpMapUv:ke&&f(_.bumpMap.channel),normalMapUv:le&&f(_.normalMap.channel),displacementMapUv:oi&&f(_.displacementMap.channel),emissiveMapUv:ye&&f(_.emissiveMap.channel),metalnessMapUv:Ye&&f(_.metalnessMap.channel),roughnessMapUv:qe&&f(_.roughnessMap.channel),anisotropyMapUv:It&&f(_.anisotropyMap.channel),clearcoatMapUv:R&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:y&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:it&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:q&&f(_.sheenRoughnessMap.channel),specularMapUv:K&&f(_.specularMap.channel),specularColorMapUv:ot&&f(_.specularColorMap.channel),specularIntensityMapUv:P&&f(_.specularIntensityMap.channel),transmissionMapUv:J&&f(_.transmissionMap.channel),thicknessMapUv:X&&f(_.thicknessMap.channel),alphaMapUv:st&&f(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(le||Ke),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(Lt||st),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&le===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:Et,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.filter(pt=>pt.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:nt,decodeVideoTexture:Lt&&_.map.isVideoTexture===!0&&Yt.getTransfer(_.map.colorSpace)===ie,decodeVideoTextureEmissive:ye&&_.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(_.emissiveMap.colorSpace)===ie,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===di,flipSided:_.side===Be,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:kt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&_.extensions.multiDraw===!0||fe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function v(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const N in _.defines)T.push(N),T.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(g(T,_),m(T,_),T.push(r.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function g(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapPMREM),_.push(T.envMapMaxLod),_.push(T.envMapSize),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.diffuseRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.numLightProbeGrids),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function m(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.diffuseRoughness&&a.enable(25),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){const T=u[_.type];let N;if(T){const C=hi[T];N=pd.clone(C.uniforms)}else N=_.uniforms;return N}function E(_,T){let N=h.get(T);return N!==void 0?++N.usedTimes:(N=new Vm(r,T,_,n),c.push(N),h.set(T,N)),N}function S(_){if(--_.usedTimes===0){const T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:M,acquireProgram:E,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:A}}function $m(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function Zm(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Il(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Nl(){const r=[];let t=0;const e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,x,v,g,m){let M=r[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:x,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:g,group:m},r[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=x,M.materialVariant=a(u),M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=g,M.group=m),t++,M}function l(u,f,x,v,g,m,M){M.reversedDepth===!0&&(g=-g);const E=o(u,f,x,v,g,m);x.transmission>0?i.push(E):x.transparent===!0?n.push(E):e.push(E)}function c(u,f,x,v,g,m){const M=o(u,f,x,v,g,m);x.transmission>0?i.unshift(M):x.transparent===!0?n.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||Zm),i.length>1&&i.sort(f||Il),n.length>1&&n.sort(f||Il)}function d(){for(let u=t,f=r.length;u<f;u++){const x=r[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:l,unshift:c,finish:d,sort:h}}function Jm(){let r=new WeakMap;function t(i,n){const s=r.get(i);let a;return s===void 0?(a=new Nl,r.set(i,[a])):n>=s.length?(a=new Nl,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Qm(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new bt};break;case"SpotLight":e={position:new L,direction:new L,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new L,halfWidth:new L,halfHeight:new L};break}return r[t.id]=e,e}}}function jm(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let t0=0;function e0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function i0(r){const t=new Qm,e=jm(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const n=new L,s=new Jt,a=new Jt;function o(c){let h=0,d=0,u=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let f=0,x=0,v=0,g=0,m=0,M=0,E=0,S=0,w=0,A=0,_=0,T=0,N=0,C=0;c.sort(e0);for(let O=0,W=c.length;O<W;O++){const I=c[O],G=I.color,$=I.intensity,H=I.distance;let et=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===an?et=I.shadow.map.texture:et=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=G.r*$,d+=G.g*$,u+=G.b*$;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(I.sh.coefficients[Y],$);C++}else if(I.isSunLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const j=I.shadow,tt=e.get(I);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[x]=tt,i.sunShadowMap[x]=et;const Et=j.getViewportCount();for(let Ut=0;Ut<Et;Ut++)i.sunShadowMatrix[v+Ut]=j.getMatrix(Ut),i.sunShadowCascade[v+Ut]=j._cascadeData[Ut];v+=Et,x++}i.sun[f]=Y,f++}else if(I.isDirectionalLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const j=I.shadow,tt=e.get(I);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,i.directionalShadow[g]=tt,i.directionalShadowMap[g]=et,i.directionalShadowMatrix[g]=I.shadow.matrix,w++}i.directional[g]=Y,g++}else if(I.isSpotLight){const Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(G).multiplyScalar($),Y.distance=H,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,i.spot[M]=Y;const j=I.shadow;if(I.map&&(i.spotLightMap[T]=I.map,T++,j.updateMatrices(I),I.castShadow&&N++),i.spotLightMatrix[M]=j.matrix,I.castShadow){const tt=e.get(I);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,i.spotShadow[M]=tt,i.spotShadowMap[M]=et,_++}M++}else if(I.isRectAreaLight){const Y=t.get(I);Y.color.copy(G).multiplyScalar($),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),i.rectArea[E]=Y,E++}else if(I.isPointLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const j=I.shadow,tt=e.get(I);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,tt.shadowCameraNear=j.camera.near,tt.shadowCameraFar=j.camera.far,i.pointShadow[m]=tt,i.pointShadowMap[m]=et,i.pointShadowMatrix[m]=I.shadow.matrix,A++}i.point[m]=Y,m++}else if(I.isHemisphereLight){const Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar($),Y.groundColor.copy(I.groundColor).multiplyScalar($),i.hemi[S]=Y,S++}}E>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const U=i.hash;(U.sunLength!==f||U.directionalLength!==g||U.pointLength!==m||U.spotLength!==M||U.rectAreaLength!==E||U.hemiLength!==S||U.numSunShadows!==x||U.numDirectionalShadows!==w||U.numPointShadows!==A||U.numSpotShadows!==_||U.numSpotMaps!==T||U.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=g,i.spot.length=M,i.rectArea.length=E,i.point.length=m,i.hemi.length=S,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+T-N,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=C,U.sunLength=f,U.directionalLength=g,U.pointLength=m,U.spotLength=M,U.rectAreaLength=E,U.hemiLength=S,U.numSunShadows=x,U.numDirectionalShadows=w,U.numPointShadows=A,U.numSpotShadows=_,U.numSpotMaps=T,U.numLightProbes=C,i.version=t0++)}function l(c,h){let d=0,u=0,f=0,x=0,v=0,g=0;const m=h.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){const S=c[M];if(S.isSunLight){const w=i.sun[d];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(m),d++}else if(S.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(m),u++}else if(S.isSpotLight){const w=i.spot[x];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(m),x++}else if(S.isRectAreaLight){const w=i.rectArea[v];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const w=i.hemi[g];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Ul(r){const t=new i0(r),e=[],i=[],n=[];function s(d){h.camera=d,e.length=0,i.length=0,n.length=0}function a(d){d.isLightProbeGrid?n.push(d):e.push(d)}function o(d){i.push(d)}function l(){t.setup(e),n.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function n0(r){let t=new WeakMap;function e(n,s=0){const a=t.get(n);let o;return a===void 0?(o=new Ul(r),t.set(n,[o])):s>=a.length?(o=new Ul(r),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const s0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,a0=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],o0=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Fl=new Jt,Xn=new L,$r=new L;function l0(r,t,e){let i=new rs;const n=new Gt,s=new Gt,a=new de,o=new _d,l=new vd,c={},h=e.maxTextureSize,d={[sn]:Be,[Be]:sn,[di]:di},u=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:s0,fragmentShader:r0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const x=new Pe;x.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Pt(x,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ys;let m=this.type;this.render=function(A,_,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===ic&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ys);const N=r.getRenderTarget(),C=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),O=r.state;O.setBlending(Pn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const W=m!==this.type;W&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=A.length;I<G;I++){const $=A[I],H=$.shadow;if(H===void 0){Dt("WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);const et=H.getFrameExtents();n.multiply(et),s.copy(H.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/et.x),n.x=s.x*et.x,H.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/et.y),n.y=s.y*et.y,H.mapSize.y=s.y));const Y=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Y,H.map===null||W===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Jn){if($.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new fi(n.x,n.y,{format:an,type:gi,minFilter:He,magFilter:He,generateMipmaps:!1}),H.map.texture.name=$.name+".shadowMap",H.map.depthTexture=new Nn(n.x,n.y,ri),H.map.depthTexture.name=$.name+".shadowMapDepth",H.map.depthTexture.format=Gi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ge,H.map.depthTexture.magFilter=ge}else $.isPointLight?(H.map=new xo(n.x),H.map.depthTexture=new Lc(n.x,mi)):(H.map=new fi(n.x,n.y),H.map.depthTexture=new Nn(n.x,n.y,mi)),H.map.depthTexture.name=$.name+".shadowMap",H.map.depthTexture.format=Gi,this.type===Ys?(H.map.depthTexture.compareFunction=Y?vc:_c,H.map.depthTexture.minFilter=He,H.map.depthTexture.magFilter=He):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ge,H.map.depthTexture.magFilter=ge);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==n.x||H.map.height!==n.y)&&H.map.setSize(n.x,n.y);const j=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();$.isPointLight!==!0&&H.updateMatrices($,T);const tt=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:T.layers;for(let Et=0;Et<j;Et++){const Ut=H.getCamera(Et);if($.isPointLight){const Z=H.camera,gt=H.matrix,Mt=$.distance||Z.far;Mt!==Z.far&&(Z.far=Mt,Z.updateProjectionMatrix()),Xn.setFromMatrixPosition($.matrixWorld),Z.position.copy(Xn),$r.copy(Z.position),$r.add(a0[Et]),Z.up.copy(o0[Et]),Z.lookAt($r),Z.updateMatrixWorld(),gt.makeTranslation(-Xn.x,-Xn.y,-Xn.z),Fl.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Fl,Z.coordinateSystem,Z.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,Et),r.clear();else{Et===0&&(r.setRenderTarget(H.map),r.clear());const Z=H.getViewport(Et);a.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),O.viewport(a)}i=H.getFrustum(Et),S(_,T,Ut,$,tt,this.type)}H.isPointLightShadow!==!0&&this.type===Jn&&M(H,T),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(N,C,U)};function M(A,_){const T=t.update(v);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new fi(n.x,n.y,{format:an,type:gi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(_,null,T,u,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(_,null,T,f,v,null)}function E(A,_,T,N){let C=null;const U=T.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)C=U;else if(C=T.isPointLight===!0?l:o,r.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const O=C.uuid,W=_.uuid;let I=c[O];I===void 0&&(I={},c[O]=I);let G=I[W];G===void 0&&(G=C.clone(),I[W]=G,_.addEventListener("dispose",w)),C=G}if(C.visible=_.visible,C.wireframe=_.wireframe,N===Jn?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:d[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,T.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const O=r.properties.get(C);O.light=T}return C}function S(A,_,T,N,C,U){if(A.visible===!1)return;if(A.layers.test(C)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&U===Jn)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,A.matrixWorld);const I=t.update(A),G=A.material;if(Array.isArray(G)){const $=I.groups;for(let H=0,et=$.length;H<et;H++){const Y=$[H],j=G[Y.materialIndex];if(j&&j.visible){const tt=E(A,j,N,U);A.onBeforeShadow(r,A,_,T,I,tt,Y),r.renderBufferDirect(T,null,I,tt,A,Y),A.onAfterShadow(r,A,_,T,I,tt,Y)}}}else if(G.visible){const $=E(A,G,N,U);A.onBeforeShadow(r,A,_,T,I,$,null),r.renderBufferDirect(T,null,I,$,A,null),A.onAfterShadow(r,A,_,T,I,$,null)}}const W=A.children;for(let I=0,G=W.length;I<G;I++)S(W[I],_,T,N,C,U)}function w(A){A.target.removeEventListener("dispose",w);for(const T in c){const N=c[T],C=A.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}function c0(r,t){function e(){let P=!1;const J=new de;let X=null;const lt=new de(0,0,0,0);return{setMask:function(st){X!==st&&!P&&(r.colorMask(st,st,st,st),X=st)},setLocked:function(st){P=st},setClear:function(st,at,wt,kt,nt){nt===!0&&(st*=kt,at*=kt,wt*=kt),J.set(st,at,wt,kt),lt.equals(J)===!1&&(r.clearColor(st,at,wt,kt),lt.copy(J))},reset:function(){P=!1,X=null,lt.set(-1,0,0,0)}}}function i(){let P=!1,J=!1,X=null,lt=null,st=null;return{setReversed:function(at){if(J!==at){const wt=t.get("EXT_clip_control");at?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),J=at;const kt=st;st=null,this.setClear(kt)}},getReversed:function(){return J},setTest:function(at){at?xt(r.DEPTH_TEST):Ot(r.DEPTH_TEST)},setMask:function(at){X!==at&&!P&&(r.depthMask(at),X=at)},setFunc:function(at){if(J&&(at=Fh[at]),lt!==at){switch(at){case ia:r.depthFunc(r.NEVER);break;case na:r.depthFunc(r.ALWAYS);break;case sa:r.depthFunc(r.LESS);break;case es:r.depthFunc(r.LEQUAL);break;case ra:r.depthFunc(r.EQUAL);break;case aa:r.depthFunc(r.GEQUAL);break;case oa:r.depthFunc(r.GREATER);break;case la:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}lt=at}},setLocked:function(at){P=at},setClear:function(at){st!==at&&(st=at,J&&(at=1-at),r.clearDepth(at))},reset:function(){P=!1,X=null,lt=null,st=null,J=!1}}}function n(){let P=!1,J=null,X=null,lt=null,st=null,at=null,wt=null,kt=null,nt=null;return{setTest:function(At){P||(At?xt(r.STENCIL_TEST):Ot(r.STENCIL_TEST))},setMask:function(At){J!==At&&!P&&(r.stencilMask(At),J=At)},setFunc:function(At,Bt,pt){(X!==At||lt!==Bt||st!==pt)&&(r.stencilFunc(At,Bt,pt),X=At,lt=Bt,st=pt)},setOp:function(At,Bt,pt){(at!==At||wt!==Bt||kt!==pt)&&(r.stencilOp(At,Bt,pt),at=At,wt=Bt,kt=pt)},setLocked:function(At){P=At},setClear:function(At){nt!==At&&(r.clearStencil(At),nt=At)},reset:function(){P=!1,J=null,X=null,lt=null,st=null,at=null,wt=null,kt=null,nt=null}}}const s=new e,a=new i,o=new n;let l={};const c=new WeakMap;let h={},d={},u={},f=new WeakMap,x=[],v=null,g=!1,m=null,M=null,E=null,S=null,w=null,A=null,_=null,T=new bt(0,0,0),N=0,C=!1,U=null,O=null,W=null,I=null,G=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,et=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(Y)[1]),H=et>=1):Y.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),H=et>=2);let j=null,tt={};const Et=r.getParameter(r.SCISSOR_BOX),Ut=r.getParameter(r.VIEWPORT),Z=new de().fromArray(Et),gt=new de().fromArray(Ut);function Mt(P,J,X,lt){const st=new Uint8Array(4),at=r.createTexture();r.bindTexture(P,at),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let wt=0;wt<X;wt++)P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY?r.texImage3D(J,0,r.RGBA,1,1,lt,0,r.RGBA,r.UNSIGNED_BYTE,st):r.texImage2D(J+wt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,st);return at}const Rt={};Rt[r.TEXTURE_2D]=Mt(r.TEXTURE_2D,r.TEXTURE_2D,1),Rt[r.TEXTURE_CUBE_MAP]=Mt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[r.TEXTURE_2D_ARRAY]=Mt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Rt[r.TEXTURE_3D]=Mt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xt(r.DEPTH_TEST),a.setFunc(es),ke(!1),le(Io),xt(r.CULL_FACE),Re(Pn);function xt(P){h[P]!==!0&&(r.enable(P),h[P]=!0)}function Ot(P){h[P]!==!1&&(r.disable(P),h[P]=!1)}function fe(P,J){return u[P]!==J?(r.bindFramebuffer(P,J),u[P]=J,P===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=J),P===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=J),!0):!1}function Lt(P,J){let X=x,lt=!1;if(P){X=f.get(J),X===void 0&&(X=[],f.set(J,X));const st=P.textures;if(X.length!==st.length||X[0]!==r.COLOR_ATTACHMENT0){for(let at=0,wt=st.length;at<wt;at++)X[at]=r.COLOR_ATTACHMENT0+at;X.length=st.length,lt=!0}}else X[0]!==r.BACK&&(X[0]=r.BACK,lt=!0);lt&&r.drawBuffers(X)}function te(P){return v!==P?(r.useProgram(P),v=P,!0):!1}const ne={[An]:r.FUNC_ADD,[sh]:r.FUNC_SUBTRACT,[rh]:r.FUNC_REVERSE_SUBTRACT};ne[ah]=r.MIN,ne[oh]=r.MAX;const Vt={[lh]:r.ZERO,[ch]:r.ONE,[hh]:r.SRC_COLOR,[nc]:r.SRC_ALPHA,[gh]:r.SRC_ALPHA_SATURATE,[ph]:r.DST_COLOR,[uh]:r.DST_ALPHA,[dh]:r.ONE_MINUS_SRC_COLOR,[sc]:r.ONE_MINUS_SRC_ALPHA,[mh]:r.ONE_MINUS_DST_COLOR,[fh]:r.ONE_MINUS_DST_ALPHA,[xh]:r.CONSTANT_COLOR,[_h]:r.ONE_MINUS_CONSTANT_COLOR,[vh]:r.CONSTANT_ALPHA,[Mh]:r.ONE_MINUS_CONSTANT_ALPHA};function Re(P,J,X,lt,st,at,wt,kt,nt,At){if(P===Pn){g===!0&&(Ot(r.BLEND),g=!1);return}if(g===!1&&(xt(r.BLEND),g=!0),P!==nh){if(P!==m||At!==C){if((M!==An||w!==An)&&(r.blendEquation(r.FUNC_ADD),M=An,w=An),At)switch(P){case ts:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ea:r.blendFunc(r.ONE,r.ONE);break;case No:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Uo:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Zt("WebGLState: Invalid blending: ",P);break}else switch(P){case ts:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ea:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case No:Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uo:Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Zt("WebGLState: Invalid blending: ",P);break}E=null,S=null,A=null,_=null,T.set(0,0,0),N=0,m=P,C=At}return}st=st||J,at=at||X,wt=wt||lt,(J!==M||st!==w)&&(r.blendEquationSeparate(ne[J],ne[st]),M=J,w=st),(X!==E||lt!==S||at!==A||wt!==_)&&(r.blendFuncSeparate(Vt[X],Vt[lt],Vt[at],Vt[wt]),E=X,S=lt,A=at,_=wt),(kt.equals(T)===!1||nt!==N)&&(r.blendColor(kt.r,kt.g,kt.b,nt),T.copy(kt),N=nt),m=P,C=!1}function xe(P,J){P.side===di?Ot(r.CULL_FACE):xt(r.CULL_FACE);let X=P.side===Be;J&&(X=!X),ke(X),P.blending===ts&&P.transparent===!1?Re(Pn):Re(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const lt=P.stencilWrite;o.setTest(lt),lt&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ye(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?xt(r.SAMPLE_ALPHA_TO_COVERAGE):Ot(r.SAMPLE_ALPHA_TO_COVERAGE)}function ke(P){U!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),U=P)}function le(P){P!==eh?(xt(r.CULL_FACE),P!==O&&(P===Io?r.cullFace(r.BACK):P===ih?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ot(r.CULL_FACE),O=P}function oi(P){P!==W&&(H&&r.lineWidth(P),W=P)}function ye(P,J,X){P?(xt(r.POLYGON_OFFSET_FILL),(I!==J||G!==X)&&(I=J,G=X,a.getReversed()&&(J=-J,X=-X),r.polygonOffset(J,X))):Ot(r.POLYGON_OFFSET_FILL)}function Ye(P){P?xt(r.SCISSOR_TEST):Ot(r.SCISSOR_TEST)}function qe(P){P===void 0&&(P=r.TEXTURE0+$-1),j!==P&&(r.activeTexture(P),j=P)}function Ke(P,J,X){X===void 0&&(j===null?X=r.TEXTURE0+$-1:X=j);let lt=tt[X];lt===void 0&&(lt={type:void 0,texture:void 0},tt[X]=lt),(lt.type!==P||lt.texture!==J)&&(j!==X&&(r.activeTexture(X),j=X),r.bindTexture(P,J||Rt[P]),lt.type=P,lt.texture=J)}function F(){const P=tt[j];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function $e(){try{r.compressedTexImage2D(...arguments)}catch(P){Zt("WebGLState:",P)}}function ae(){try{r.compressedTexImage3D(...arguments)}catch(P){Zt("WebGLState:",P)}}function oe(){try{r.texSubImage2D(...arguments)}catch(P){Zt("WebGLState:",P)}}function ft(){try{r.texSubImage3D(...arguments)}catch(P){Zt("WebGLState:",P)}}function _e(){try{r.compressedTexSubImage2D(...arguments)}catch(P){Zt("WebGLState:",P)}}function Ct(){try{r.compressedTexSubImage3D(...arguments)}catch(P){Zt("WebGLState:",P)}}function It(){try{r.texStorage2D(...arguments)}catch(P){Zt("WebGLState:",P)}}function R(){try{r.texStorage3D(...arguments)}catch(P){Zt("WebGLState:",P)}}function y(){try{r.texImage2D(...arguments)}catch(P){Zt("WebGLState:",P)}}function B(){try{r.texImage3D(...arguments)}catch(P){Zt("WebGLState:",P)}}function it(P){return d[P]!==void 0?d[P]:r.getParameter(P)}function Q(P,J){d[P]!==J&&(r.pixelStorei(P,J),d[P]=J)}function rt(P){Z.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),Z.copy(P))}function dt(P){gt.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),gt.copy(P))}function q(P,J){let X=c.get(J);X===void 0&&(X=new WeakMap,c.set(J,X));let lt=X.get(P);lt===void 0&&(lt=r.getUniformBlockIndex(J,P.name),r.uniformBlockBinding(J,lt,lt),X.set(P,lt))}function K(P,J,X){const st=c.get(J).get(P);l[st]!==X&&(r.bindBufferBase(r.UNIFORM_BUFFER,st,X),l[st]=X)}function ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,tt={},u={},l={},f=new WeakMap,x=[],v=null,g=!1,m=null,M=null,E=null,S=null,w=null,A=null,_=null,T=new bt(0,0,0),N=0,C=!1,U=null,O=null,W=null,I=null,G=null,Z.set(0,0,r.canvas.width,r.canvas.height),gt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:xt,disable:Ot,bindFramebuffer:fe,drawBuffers:Lt,useProgram:te,setBlending:Re,setMaterial:xe,setFlipSided:ke,setCullFace:le,setLineWidth:oi,setPolygonOffset:ye,setScissorTest:Ye,activeTexture:qe,bindTexture:Ke,unbindTexture:F,compressedTexImage2D:$e,compressedTexImage3D:ae,texImage2D:y,texImage3D:B,pixelStorei:Q,getParameter:it,updateUBOMapping:q,uniformBlockBinding:K,texStorage2D:It,texStorage3D:R,texSubImage2D:oe,texSubImage3D:ft,compressedTexSubImage2D:_e,compressedTexSubImage3D:Ct,scissor:rt,viewport:dt,reset:ot}}function h0(r,t,e,i,n,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Gt,h=new WeakMap,d=new Set;let u;const f=new WeakMap,x=new Set,v=new FinalizationRegistry(R=>x.delete(R));let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,y){return g?new OffscreenCanvas(R,y):rr("canvas")}function M(R,y,B){let it=1;const Q=It(R);if((Q.width>B||Q.height>B)&&(it=B/Math.max(Q.width,Q.height)),it<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const rt=Math.floor(it*Q.width),dt=Math.floor(it*Q.height);u===void 0&&(u=m(rt,dt));const q=y?m(rt,dt):u;return q.width=rt,q.height=dt,q.getContext("2d").drawImage(R,0,0,rt,dt),Dt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+rt+"x"+dt+")."),q}else return"data"in R&&Dt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function E(R){return R.generateMipmaps}function S(R){r.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function A(R,y,B,it,Q,rt=!1){if(R!==null){if(r[R]!==void 0)return r[R];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let dt;it&&(dt=t.get("EXT_texture_norm16"),dt||Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=y;if(y===r.RED&&(B===r.FLOAT&&(q=r.R32F),B===r.HALF_FLOAT&&(q=r.R16F),B===r.UNSIGNED_BYTE&&(q=r.R8),B===r.UNSIGNED_SHORT&&dt&&(q=dt.R16_EXT),B===r.SHORT&&dt&&(q=dt.R16_SNORM_EXT)),y===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(q=r.R8UI),B===r.UNSIGNED_SHORT&&(q=r.R16UI),B===r.UNSIGNED_INT&&(q=r.R32UI),B===r.BYTE&&(q=r.R8I),B===r.SHORT&&(q=r.R16I),B===r.INT&&(q=r.R32I)),y===r.RG&&(B===r.FLOAT&&(q=r.RG32F),B===r.HALF_FLOAT&&(q=r.RG16F),B===r.UNSIGNED_BYTE&&(q=r.RG8),B===r.UNSIGNED_SHORT&&dt&&(q=dt.RG16_EXT),B===r.SHORT&&dt&&(q=dt.RG16_SNORM_EXT)),y===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(q=r.RG8UI),B===r.UNSIGNED_SHORT&&(q=r.RG16UI),B===r.UNSIGNED_INT&&(q=r.RG32UI),B===r.BYTE&&(q=r.RG8I),B===r.SHORT&&(q=r.RG16I),B===r.INT&&(q=r.RG32I)),y===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(q=r.RGB8UI),B===r.UNSIGNED_SHORT&&(q=r.RGB16UI),B===r.UNSIGNED_INT&&(q=r.RGB32UI),B===r.BYTE&&(q=r.RGB8I),B===r.SHORT&&(q=r.RGB16I),B===r.INT&&(q=r.RGB32I)),y===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),B===r.UNSIGNED_INT&&(q=r.RGBA32UI),B===r.BYTE&&(q=r.RGBA8I),B===r.SHORT&&(q=r.RGBA16I),B===r.INT&&(q=r.RGBA32I)),y===r.RGB&&(B===r.UNSIGNED_SHORT&&dt&&(q=dt.RGB16_EXT),B===r.SHORT&&dt&&(q=dt.RGB16_SNORM_EXT),B===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),B===r.UNSIGNED_INT_10F_11F_11F_REV&&(q=r.R11F_G11F_B10F)),y===r.RGBA){const K=rt?sr:Yt.getTransfer(Q);B===r.FLOAT&&(q=r.RGBA32F),B===r.HALF_FLOAT&&(q=r.RGBA16F),B===r.UNSIGNED_BYTE&&(q=K===ie?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT&&dt&&(q=dt.RGBA16_EXT),B===r.SHORT&&dt&&(q=dt.RGBA16_SNORM_EXT),B===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function _(R,y){let B;return R?y===null||y===mi||y===In?B=r.DEPTH24_STENCIL8:y===ri?B=r.DEPTH32F_STENCIL8:y===ns&&(B=r.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===mi||y===In?B=r.DEPTH_COMPONENT24:y===ri?B=r.DEPTH_COMPONENT32F:y===ns&&(B=r.DEPTH_COMPONENT16),B}function T(R,y){return E(R)===!0||R.isFramebufferTexture&&R.minFilter!==ge&&R.minFilter!==He?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function N(R){const y=new WeakRef(R);i.get(R).__ref=y,x.add(y),v.register(R,y,y)}function C(R){const y=i.get(R).__ref;y!==void 0&&(x.delete(y),v.unregister(y))}function U(R){W(R.target)}function O(R){I(R.target)}function W(R){R.removeEventListener("dispose",U),C(R),$(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&d.delete(R)}function I(R){R.removeEventListener("dispose",O),C(R),et(R)}function G(){for(const R of x){const y=R.deref();y!==void 0&&(y.isRenderTarget===!0?I(y):W(y))}x.clear(),d.clear()}function $(R){const y=i.get(R);if(y.__webglInit===void 0)return;const B=R.source,it=f.get(B);if(it){const Q=it[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&H(R),Object.keys(it).length===0&&f.delete(B)}i.remove(R)}function H(R){const y=i.get(R);r.deleteTexture(y.__webglTexture);const B=R.source,it=f.get(B);delete it[y.__cacheKey],a.memory.textures--}function et(R){const y=i.get(R);y.__depthDisposeCallback&&y.__depthDisposeCallback();const B=R.depthTexture;if(B&&B.renderTarget===R&&W(B),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let rt=0;rt<y.__webglFramebuffer[Q].length;rt++)r.deleteFramebuffer(y.__webglFramebuffer[Q][rt]);else r.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)r.deleteFramebuffer(y.__webglFramebuffer[Q]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const it=R.textures;for(let Q=0,rt=it.length;Q<rt;Q++){const dt=i.get(it[Q]);dt.__webglTexture&&(r.deleteTexture(dt.__webglTexture),a.memory.textures--),i.remove(it[Q])}i.remove(R)}let Y=0;function j(){Y=0}function tt(){return Y}function Et(R){Y=R}function Ut(){const R=Y;return R>=n.maxTextures&&Dt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+n.maxTextures),Y+=1,R}function Z(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.mipmapsAutoUpdate),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function gt(R,y){const B=i.get(R);if(R.isVideoTexture&&_e(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const it=R.image;if(it===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(B,R,y);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+y)}function Mt(R,y){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){xe(B,R,y);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+y)}function Rt(R,y){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){xe(B,R,y);return}e.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+y)}function xt(R,y){const B=i.get(R);if(R.version>0&&B.__version!==R.version){ke(B,R,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+y)}const Ot={[rn]:r.REPEAT,[Ti]:r.CLAMP_TO_EDGE,[ca]:r.MIRRORED_REPEAT},fe={[ge]:r.NEAREST,[js]:r.NEAREST_MIPMAP_NEAREST,[us]:r.NEAREST_MIPMAP_LINEAR,[He]:r.LINEAR,[yr]:r.LINEAR_MIPMAP_NEAREST,[Bi]:r.LINEAR_MIPMAP_LINEAR},Lt={[wh]:r.NEVER,[Mc]:r.ALWAYS,[Ah]:r.LESS,[_c]:r.LEQUAL,[Rh]:r.EQUAL,[vc]:r.GEQUAL,[Ch]:r.GREATER,[Ph]:r.NOTEQUAL};function te(R,y){if(y.type===ri&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===He||y.magFilter===yr||y.magFilter===us||y.magFilter===Bi||y.minFilter===He||y.minFilter===yr||y.minFilter===us||y.minFilter===Bi)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,Ot[y.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,Ot[y.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,Ot[y.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,fe[y.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,fe[y.minFilter]),y.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Lt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===ge||y.minFilter!==us&&y.minFilter!==Bi||y.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ne(R,y){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",U),N(y));const it=y.source;let Q=f.get(it);Q===void 0&&(Q={},f.set(it,Q));const rt=Z(y);if(rt!==R.__cacheKey){Q[rt]===void 0&&(Q[rt]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[rt].usedTimes++;const dt=Q[R.__cacheKey];dt!==void 0&&(Q[R.__cacheKey].usedTimes--,dt.usedTimes===0&&H(y)),R.__cacheKey=rt,R.__webglTexture=Q[rt].texture}return B}function Vt(R,y,B){return Math.floor(Math.floor(R/B)/y)}function Re(R,y,B,it){const rt=R.updateRanges;if(rt.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,B,it,y.data);else{rt.sort((P,J)=>P.start-J.start);let dt=0;for(let P=1;P<rt.length;P++){const J=rt[dt],X=rt[P],lt=J.start+J.count,st=Vt(X.start,y.width,4),at=Vt(J.start,y.width,4);X.start<=lt+1&&st===at&&Vt(X.start+X.count-1,y.width,4)===st?J.count=Math.max(J.count,X.start+X.count-J.start):(++dt,rt[dt]=X)}rt.length=dt+1;const q=e.getParameter(r.UNPACK_ROW_LENGTH),K=e.getParameter(r.UNPACK_SKIP_PIXELS),ot=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let P=0,J=rt.length;P<J;P++){const X=rt[P],lt=Math.floor(X.start/4),st=Math.ceil(X.count/4),at=lt%y.width,wt=Math.floor(lt/y.width),kt=st,nt=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,at),e.pixelStorei(r.UNPACK_SKIP_ROWS,wt),e.texSubImage2D(r.TEXTURE_2D,0,at,wt,kt,nt,B,it,y.data)}R.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,q),e.pixelStorei(r.UNPACK_SKIP_PIXELS,K),e.pixelStorei(r.UNPACK_SKIP_ROWS,ot)}}function xe(R,y,B){let it=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(it=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(it=r.TEXTURE_3D);const Q=ne(R,y),rt=y.source;e.bindTexture(it,R.__webglTexture,r.TEXTURE0+B);const dt=i.get(rt);if(rt.version!==dt.__version||Q===!0){if(e.activeTexture(r.TEXTURE0+B),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const nt=Yt.getPrimaries(Yt.workingColorSpace),At=y.colorSpace===zi?null:Yt.getPrimaries(y.colorSpace),Bt=y.colorSpace===zi||nt===At?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt)}e.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment);let K=M(y.image,!1,n.maxTextureSize);K=Ct(y,K);const ot=s.convert(y.format,y.colorSpace),P=s.convert(y.type);let J=A(y.internalFormat,ot,P,y.normalized,y.colorSpace,y.isVideoTexture);te(it,y);let X;const lt=y.mipmaps,st=y.isVideoTexture!==!0,at=dt.__version===void 0||Q===!0,wt=rt.dataReady,kt=T(y,K);if(y.isDepthTexture)J=_(y.format===ki,y.type),at&&(st?e.texStorage2D(r.TEXTURE_2D,1,J,K.width,K.height):e.texImage2D(r.TEXTURE_2D,0,J,K.width,K.height,0,ot,P,null));else if(y.isDataTexture)if(lt.length>0){st&&at&&e.texStorage2D(r.TEXTURE_2D,kt,J,lt[0].width,lt[0].height);for(let nt=0,At=lt.length;nt<At;nt++)X=lt[nt],st?wt&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,X.width,X.height,ot,P,X.data):e.texImage2D(r.TEXTURE_2D,nt,J,X.width,X.height,0,ot,P,X.data);y.generateMipmaps=!1}else st?(at&&e.texStorage2D(r.TEXTURE_2D,kt,J,K.width,K.height),wt&&Re(y,K,ot,P)):e.texImage2D(r.TEXTURE_2D,0,J,K.width,K.height,0,ot,P,K.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){st&&at&&e.texStorage3D(r.TEXTURE_2D_ARRAY,kt,J,lt[0].width,lt[0].height,K.depth);for(let nt=0,At=lt.length;nt<At;nt++)if(X=lt[nt],y.format!==ui)if(ot!==null)if(st){if(wt)if(y.layerUpdates.size>0){const Bt=ml(X.width,X.height,y.format,y.type);for(const pt of y.layerUpdates){const ee=X.data.subarray(pt*Bt/X.data.BYTES_PER_ELEMENT,(pt+1)*Bt/X.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,pt,X.width,X.height,1,ot,ee)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,X.width,X.height,K.depth,ot,X.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,nt,J,X.width,X.height,K.depth,0,X.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?wt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,X.width,X.height,K.depth,ot,P,X.data):e.texImage3D(r.TEXTURE_2D_ARRAY,nt,J,X.width,X.height,K.depth,0,ot,P,X.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{st&&at&&e.texStorage2D(r.TEXTURE_2D,kt,J,lt[0].width,lt[0].height);for(let nt=0,At=lt.length;nt<At;nt++)X=lt[nt],y.format!==ui?ot!==null?st?wt&&e.compressedTexSubImage2D(r.TEXTURE_2D,nt,0,0,X.width,X.height,ot,X.data):e.compressedTexImage2D(r.TEXTURE_2D,nt,J,X.width,X.height,0,X.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?wt&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,X.width,X.height,ot,P,X.data):e.texImage2D(r.TEXTURE_2D,nt,J,X.width,X.height,0,ot,P,X.data)}else if(y.isDataArrayTexture)if(st){if(at&&e.texStorage3D(r.TEXTURE_2D_ARRAY,kt,J,K.width,K.height,K.depth),wt)if(y.layerUpdates.size>0){const nt=ml(K.width,K.height,y.format,y.type);for(const At of y.layerUpdates){const Bt=K.data.subarray(At*nt/K.data.BYTES_PER_ELEMENT,(At+1)*nt/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,At,K.width,K.height,1,ot,P,Bt)}y.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ot,P,K.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,J,K.width,K.height,K.depth,0,ot,P,K.data);else if(y.isData3DTexture)st?(at&&e.texStorage3D(r.TEXTURE_3D,kt,J,K.width,K.height,K.depth),wt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ot,P,K.data)):e.texImage3D(r.TEXTURE_3D,0,J,K.width,K.height,K.depth,0,ot,P,K.data);else if(y.isFramebufferTexture){if(at)if(st)e.texStorage2D(r.TEXTURE_2D,kt,J,K.width,K.height);else{let nt=K.width,At=K.height;for(let Bt=0;Bt<kt;Bt++)e.texImage2D(r.TEXTURE_2D,Bt,J,nt,At,0,ot,P,null),nt>>=1,At>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in r){const nt=r.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),K.parentNode!==nt){nt.appendChild(K),d.add(y),nt.onpaint=At=>{const Bt=At.changedElements;for(const pt of d)Bt.includes(pt.image)&&(pt.needsUpdate=!0)},nt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,K);else{const Bt=r.RGBA,pt=r.RGBA,ee=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Bt,pt,ee,K)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(lt.length>0){if(st&&at){const nt=It(lt[0]);e.texStorage2D(r.TEXTURE_2D,kt,J,nt.width,nt.height)}for(let nt=0,At=lt.length;nt<At;nt++)X=lt[nt],st?wt&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,ot,P,X):e.texImage2D(r.TEXTURE_2D,nt,J,ot,P,X);y.generateMipmaps=!1}else if(st){if(at){const nt=It(K);e.texStorage2D(r.TEXTURE_2D,kt,J,nt.width,nt.height)}wt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ot,P,K)}else e.texImage2D(r.TEXTURE_2D,0,J,ot,P,K);E(y)&&y.mipmapsAutoUpdate===!0&&S(it),dt.__version=rt.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ke(R,y,B){if(y.image.length!==6)return;const it=ne(R,y),Q=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+B);const rt=i.get(Q);if(Q.version!==rt.__version||it===!0){e.activeTexture(r.TEXTURE0+B);const dt=Yt.getPrimaries(Yt.workingColorSpace),q=y.colorSpace===zi?null:Yt.getPrimaries(y.colorSpace),K=y.colorSpace===zi||dt===q?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const ot=y.isCompressedTexture||y.image[0].isCompressedTexture,P=y.image[0]&&y.image[0].isDataTexture,J=[];for(let pt=0;pt<6;pt++)!ot&&!P?J[pt]=M(y.image[pt],!0,n.maxCubemapSize):J[pt]=P?y.image[pt].image:y.image[pt],J[pt]=Ct(y,J[pt]);const X=J[0],lt=s.convert(y.format,y.colorSpace),st=s.convert(y.type);let at=A(y.internalFormat,lt,st,y.normalized,y.colorSpace);const wt=y.isVideoTexture!==!0,kt=rt.__version===void 0||it===!0,nt=Q.dataReady;let At=T(y,X);te(r.TEXTURE_CUBE_MAP,y);let Bt;if(y.isDepthTexture){if(at=_(y.format===ki,y.type),kt)if(wt)e.texStorage2D(r.TEXTURE_CUBE_MAP,1,at,X.width,X.height);else for(let pt=0;pt<6;pt++)e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,at,X.width,X.height,0,lt,st,null)}else if(ot){wt&&kt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,At,at,X.width,X.height);for(let pt=0;pt<6;pt++){Bt=J[pt].mipmaps;for(let ee=0;ee<Bt.length;ee++){const be=Bt[ee];y.format!==ui?lt!==null?wt?nt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ee,0,0,be.width,be.height,lt,be.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ee,at,be.width,be.height,0,be.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):wt?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ee,0,0,be.width,be.height,lt,st,be.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ee,at,be.width,be.height,0,lt,st,be.data)}}}else{if(Bt=y.mipmaps,wt&&kt){Bt.length>0&&At++;const pt=It(J[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,At,at,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(P){wt?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,J[pt].width,J[pt].height,lt,st,J[pt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,at,J[pt].width,J[pt].height,0,lt,st,J[pt].data);for(let ee=0;ee<Bt.length;ee++){const Ci=Bt[ee].image[pt].image;wt?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ee+1,0,0,Ci.width,Ci.height,lt,st,Ci.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ee+1,at,Ci.width,Ci.height,0,lt,st,Ci.data)}}else{wt?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,lt,st,J[pt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,at,lt,st,J[pt]);for(let ee=0;ee<Bt.length;ee++){const be=Bt[ee];wt?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ee+1,0,0,lt,st,be.image[pt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ee+1,at,lt,st,be.image[pt])}}}E(y)&&y.mipmapsAutoUpdate===!0&&S(r.TEXTURE_CUBE_MAP),rt.__version=Q.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function le(R,y,B,it,Q,rt){const dt=s.convert(B.format,B.colorSpace),q=s.convert(B.type),K=A(B.internalFormat,dt,q,B.normalized,B.colorSpace),ot=i.get(y),P=i.get(B);if(P.__renderTarget=y,!ot.__hasExternalTextures){const J=Math.max(1,y.width>>rt),X=Math.max(1,y.height>>rt);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?e.texImage3D(Q,rt,K,J,X,y.depth,0,dt,q,null):e.texImage2D(Q,rt,K,J,X,0,dt,q,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),ft(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,it,Q,P.__webglTexture,0,oe(y)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,it,Q,P.__webglTexture,rt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function oi(R,y,B){if(r.bindRenderbuffer(r.RENDERBUFFER,R),y.depthBuffer){const it=y.depthTexture,Q=it&&it.isDepthTexture?it.type:null,rt=_(y.stencilBuffer,Q),dt=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ft(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe(y),rt,y.width,y.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe(y),rt,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,rt,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,dt,r.RENDERBUFFER,R)}else{const it=y.textures;for(let Q=0;Q<it.length;Q++){const rt=it[Q],dt=s.convert(rt.format,rt.colorSpace),q=s.convert(rt.type),K=A(rt.internalFormat,dt,q,rt.normalized,rt.colorSpace);ft(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe(y),K,y.width,y.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe(y),K,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,K,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ye(R,y,B){const it=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(y.depthTexture);Q.__renderTarget=y;const rt=it?y.depthTexture.image[0]:y.depthTexture.image;(!Q.__webglTexture||rt.width!==y.width||rt.height!==y.height)&&(rt.width=y.width,rt.height=y.height,y.depthTexture.needsUpdate=!0),it?xt(y.depthTexture,0):gt(y.depthTexture,0);const dt=Q.__webglTexture,q=oe(y),K=it?r.TEXTURE_CUBE_MAP_POSITIVE_X+B:r.TEXTURE_2D,ot=y.depthTexture.format===ki?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===Gi)ft(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ot,K,dt,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,ot,K,dt,0);else if(y.depthTexture.format===ki)ft(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ot,K,dt,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,ot,K,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(R){const y=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const it=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),it){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,it.removeEventListener("dispose",Q)};it.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=it}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(B)for(let it=0;it<6;it++)ye(y.__webglFramebuffer[it],R,it);else R.texture.mipmaps.length>0?ye(y.__webglFramebuffer[0],R,0):ye(y.__webglFramebuffer,R,0);else if(B){y.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[it]),y.__webglDepthbuffer[it]===void 0)y.__webglDepthbuffer[it]=r.createRenderbuffer(),oi(y.__webglDepthbuffer[it],R,!1);else{const Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=y.__webglDepthbuffer[it];r.bindRenderbuffer(r.RENDERBUFFER,rt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,rt)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),oi(y.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,rt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,rt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function qe(R,y,B){const it=i.get(R);y!==void 0&&le(it.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&Ye(R)}function Ke(R){const y=R.texture,B=i.get(R),it=i.get(y);R.addEventListener("dispose",O),N(R);const Q=R.textures,rt=R.isWebGLCubeRenderTarget===!0,dt=Q.length>1;if(dt||(it.__webglTexture===void 0&&(it.__webglTexture=r.createTexture()),it.__version=y.version,a.memory.textures++),rt){B.__webglFramebuffer=[];for(let q=0;q<6;q++)if(y.mipmaps.length>0){B.__webglFramebuffer[q]=[];for(let K=0;K<y.mipmaps.length;K++)B.__webglFramebuffer[q][K]=r.createFramebuffer()}else B.__webglFramebuffer[q]=r.createFramebuffer()}else{if(y.mipmaps.length>0){B.__webglFramebuffer=[];for(let q=0;q<y.mipmaps.length;q++)B.__webglFramebuffer[q]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(dt)for(let q=0,K=Q.length;q<K;q++){const ot=i.get(Q[q]);ot.__webglTexture===void 0&&(ot.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&ft(R)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let q=0;q<Q.length;q++){const K=Q[q];B.__webglColorRenderbuffer[q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[q]);const ot=s.convert(K.format,K.colorSpace),P=s.convert(K.type),J=A(K.internalFormat,ot,P,K.normalized,K.colorSpace,R.isXRRenderTarget===!0),X=oe(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,X,J,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+q,r.RENDERBUFFER,B.__webglColorRenderbuffer[q])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),oi(B.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(rt){e.bindTexture(r.TEXTURE_CUBE_MAP,it.__webglTexture),te(r.TEXTURE_CUBE_MAP,y);for(let q=0;q<6;q++)if(y.mipmaps.length>0)for(let K=0;K<y.mipmaps.length;K++)le(B.__webglFramebuffer[q][K],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+q,K);else le(B.__webglFramebuffer[q],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);E(y)?S(r.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}else if(dt){for(let q=0,K=Q.length;q<K;q++){const ot=Q[q],P=i.get(ot);let J=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(J=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(J,P.__webglTexture),te(J,ot),le(B.__webglFramebuffer,R,ot,r.COLOR_ATTACHMENT0+q,J,0),E(ot)&&S(J)}e.unbindTexture()}else{let q=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(q=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(q,it.__webglTexture),te(q,y),y.mipmaps.length>0)for(let K=0;K<y.mipmaps.length;K++)le(B.__webglFramebuffer[K],R,y,r.COLOR_ATTACHMENT0,q,K);else le(B.__webglFramebuffer,R,y,r.COLOR_ATTACHMENT0,q,0);E(y)?S(q):y.mipmaps.length>0&&r.texParameteri(q,r.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&Ye(R)}function F(R){const y=R.textures;for(let B=0,it=y.length;B<it;B++){const Q=y[B];if(E(Q)&&Q.mipmapsAutoUpdate===!0){const rt=w(R),dt=i.get(Q).__webglTexture;e.bindTexture(rt,dt),S(rt),e.unbindTexture()}}}const $e=[];function ae(R){if(R.samples>0){if(ft(R)===!1){const y=R.textures,B=R.width,it=R.height;let Q=r.COLOR_BUFFER_BIT;const rt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=i.get(R),q=y.length>1;if(q)for(let ot=0;ot<y.length;ot++)e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let ot=0;ot<y.length;ot++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),q){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,dt.__webglColorRenderbuffer[ot]);const P=i.get(y[ot]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,P,0)}r.blitFramebuffer(0,0,B,it,0,0,B,it,Q,r.NEAREST),l===!0&&($e.length=0,$e.push(r.COLOR_ATTACHMENT0+ot),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&$e.push(rt),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,$e))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),q)for(let ot=0;ot<y.length;ot++){e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,dt.__webglColorRenderbuffer[ot]);const P=i.get(y[ot]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.TEXTURE_2D,P,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function oe(R){return Math.min(n.maxSamples,R.samples)}function ft(R){const y=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function _e(R){const y=a.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function Ct(R,y){const B=R.colorSpace,it=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==nr&&B!==zi&&(Yt.getTransfer(B)===ie?(it!==ui||Q!==Xe)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Zt("WebGLTextures: Unsupported texture color space:",B)),y}function It(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Ut,this.resetTextureUnits=j,this.getTextureUnits=tt,this.setTextureUnits=Et,this.setTexture2D=gt,this.setTexture2DArray=Mt,this.setTexture3D=Rt,this.setTextureCube=xt,this.rebindTextures=qe,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=le,this.useMultisampledRTT=ft,this.dispose=G}function d0(r,t){function e(i,n=zi){let s;const a=Yt.getTransfer(n);if(i===Xe)return r.UNSIGNED_BYTE;if(i===ja)return r.UNSIGNED_SHORT_4_4_4_4;if(i===to)return r.UNSIGNED_SHORT_5_5_5_1;if(i===pc)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===mc)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===uc)return r.BYTE;if(i===fc)return r.SHORT;if(i===ns)return r.UNSIGNED_SHORT;if(i===Qa)return r.INT;if(i===mi)return r.UNSIGNED_INT;if(i===ri)return r.FLOAT;if(i===gi)return r.HALF_FLOAT;if(i===gc)return r.ALPHA;if(i===xc)return r.RGB;if(i===ui)return r.RGBA;if(i===Gi)return r.DEPTH_COMPONENT;if(i===ki)return r.DEPTH_STENCIL;if(i===eo)return r.RED;if(i===io)return r.RED_INTEGER;if(i===an)return r.RG;if(i===no)return r.RG_INTEGER;if(i===so)return r.RGBA_INTEGER;if(i===qs||i===Ks||i===$s||i===Zs)if(a===ie)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ks)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$s)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ha||i===da||i===ua||i===fa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ha)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===da)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ua)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pa||i===ma||i===ga||i===xa||i===_a||i===tr||i===va)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===pa||i===ma)return a===ie?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ga)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===xa)return s.COMPRESSED_R11_EAC;if(i===_a)return s.COMPRESSED_SIGNED_R11_EAC;if(i===tr)return s.COMPRESSED_RG11_EAC;if(i===va)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ma||i===Sa||i===ya||i===ba||i===Ea||i===Ta||i===wa||i===Aa||i===Ra||i===Ca||i===Pa||i===La||i===Da||i===Ia)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ma)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sa)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ya)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ba)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ea)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ta)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wa)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Aa)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ra)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ca)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pa)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===La)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Da)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ia)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Na||i===Ua||i===Fa)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Na)return a===ie?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ua)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Oa||i===za||i===er||i===Ba)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Oa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===za)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===er)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ba)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===In?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}const u0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class p0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Dc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Vi({vertexShader:u0,fragmentShader:f0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new ls(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class m0 extends on{constructor(t,e){super();const i=this;let n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,x=null;const v=typeof XRWebGLBinding<"u",g=new p0,m={},M=e.getContextAttributes();let E=null,S=null;const w=[],A=[],_=new Gt;let T=null,N=null;const C=new ni;C.viewport=new de;const U=new ni;U.viewport=new de;const O=[C,U],W=new Td;let I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let gt=w[Z];return gt===void 0&&(gt=new Lr,w[Z]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(Z){let gt=w[Z];return gt===void 0&&(gt=new Lr,w[Z]=gt),gt.getGripSpace()},this.getHand=function(Z){let gt=w[Z];return gt===void 0&&(gt=new Lr,w[Z]=gt),gt.getHandSpace()};function $(Z){const gt=A.indexOf(Z.inputSource);if(gt===-1)return;const Mt=w[gt];Mt!==void 0&&(Mt.update(Z.inputSource,Z.frame,c||a),Mt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){n.removeEventListener("select",$),n.removeEventListener("selectstart",$),n.removeEventListener("selectend",$),n.removeEventListener("squeeze",$),n.removeEventListener("squeezestart",$),n.removeEventListener("squeezeend",$),n.removeEventListener("end",H),n.removeEventListener("inputsourceschange",et);for(let Z=0;Z<w.length;Z++){const gt=A[Z];gt!==null&&(A[Z]=null,w[Z].disconnect(gt))}I=null,G=null,g.reset();for(const Z in m)delete m[Z];if(t.setRenderTarget(E),f=null,u=null,d=null,n=null,S=null,Ut.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(_.width,_.height,!1),N!==null){const Z=N.camera;Z.fov=N.fov,Z.zoom=N.zoom,Z.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return x},this.getSession=function(){return n},this.setSession=async function(Z){if(n=Z,n!==null){if(E=t.getRenderTarget(),n.addEventListener("select",$),n.addEventListener("selectstart",$),n.addEventListener("selectend",$),n.addEventListener("squeeze",$),n.addEventListener("squeezestart",$),n.addEventListener("squeezeend",$),n.addEventListener("end",H),n.addEventListener("inputsourceschange",et),M.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Rt=null,xt=null;M.depth&&(xt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=M.stencil?ki:Gi,Rt=M.stencil?In:mi);const Ot={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Ot),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new fi(u.textureWidth,u.textureHeight,{format:ui,type:Xe,depthTexture:new Nn(u.textureWidth,u.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Mt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,Mt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new fi(f.framebufferWidth,f.framebufferHeight,{format:ui,type:Xe,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Ut.setContext(n),Ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function et(Z){for(let gt=0;gt<Z.removed.length;gt++){const Mt=Z.removed[gt],Rt=A.indexOf(Mt);Rt>=0&&(A[Rt]=null,w[Rt].disconnect(Mt))}for(let gt=0;gt<Z.added.length;gt++){const Mt=Z.added[gt];let Rt=A.indexOf(Mt);if(Rt===-1){for(let Ot=0;Ot<w.length;Ot++)if(Ot>=A.length){A.push(Mt),Rt=Ot;break}else if(A[Ot]===null){A[Ot]=Mt,Rt=Ot;break}if(Rt===-1)break}const xt=w[Rt];xt&&xt.connect(Mt)}}function Y(Z,gt){gt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(gt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;let gt=Z.near,Mt=Z.far;g.texture!==null&&(g.depthNear>0&&(gt=g.depthNear),g.depthFar>0&&(Mt=g.depthFar)),W.near=U.near=C.near=gt,W.far=U.far=C.far=Mt,(I!==W.near||G!==W.far)&&(n.updateRenderState({depthNear:W.near,depthFar:W.far}),I=W.near,G=W.far),W.layers.mask=Z.layers.mask|6,C.layers.mask=W.layers.mask&-5,U.layers.mask=W.layers.mask&-3;const Rt=Z.parent,xt=W.cameras;Y(W,Rt);for(let Ot=0;Ot<xt.length;Ot++)Y(xt[Ot],Rt);W.projectionMatrix.copy(C.projectionMatrix),W.projectionMatrixInverse.copy(C.projectionMatrixInverse),N===null&&Z.isPerspectiveCamera&&(N={camera:Z,fov:Z.fov,zoom:Z.zoom}),j(Z,W,Rt)};function j(Z,gt,Mt){Mt===null?Z.matrix.copy(gt.matrixWorld):(Z.matrix.copy(Mt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(gt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(gt.projectionMatrix),Z.projectionMatrixInverse.copy(gt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ka*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(W)},this.getCameraTexture=function(Z){return m[Z]};let tt=null;function Et(Z,gt){if(h=gt.getViewerPose(c||a),x=gt,h!==null){const Mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let Rt=!1;Mt.length!==W.cameras.length&&(W.cameras.length=0,Rt=!0);for(let Lt=0;Lt<Mt.length;Lt++){const te=Mt[Lt];let ne=null;if(f!==null)ne=f.getViewport(te);else{const Re=d.getViewSubImage(u,te);ne=Re.viewport,Lt===0&&(t.setRenderTargetTextures(S,Re.colorTexture,Re.depthStencilTexture),t.setRenderTarget(S))}let Vt=O[Lt];Vt===void 0&&(Vt=new ni,Vt.layers.enable(Lt),Vt.viewport=new de,O[Lt]=Vt),Vt.matrix.fromArray(te.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(te.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(ne.x,ne.y,ne.width,ne.height),Lt===0&&(W.matrix.copy(Vt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Rt===!0&&W.cameras.push(Vt)}const xt=n.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const Lt=d.getDepthInformation(Mt[0]);Lt&&Lt.isValid&&Lt.texture&&g.init(Lt,n.renderState)}if(xt&&xt.includes("camera-access")&&v){t.state.unbindTexture(),d=i.getBinding();for(let Lt=0;Lt<Mt.length;Lt++){const te=Mt[Lt].camera;if(te){let ne=m[te];ne||(ne=new Dc,m[te]=ne);const Vt=d.getCameraImage(te);ne.sourceTexture=Vt}}}}for(let Mt=0;Mt<w.length;Mt++){const Rt=A[Mt],xt=w[Mt];Rt!==null&&xt!==void 0&&xt.update(Rt,gt,c||a)}tt&&tt(Z,gt),gt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:gt}),x=null}const Ut=new Oc;Ut.setAnimationLoop(Et),this.setAnimationLoop=function(Z){tt=Z},this.dispose=function(){}}}const g0=new Jt,qc=new Nt;qc.set(-1,0,0,0,1,0,0,0,1);function x0(r,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Ic(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,M,E,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),d(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,S)):m.isMeshMatcapMaterial?(s(g,m),x(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),v(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,M,E):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Be&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Be&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const M=t.get(m),E=M.envMap,S=M.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(g0.makeRotationFromEuler(S)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(qc),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=E*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Be&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function _0(r,t,e,i){let n={},s={};function a(M,E){const S=E.program;i.uniformBlockBinding(M,S,n[M.id])}function o(M,E){let S=n[M.id];S===void 0&&(x(M),S=l(M),n[M.id]=S,M.addEventListener("dispose",g));const w=E.program;i.updateUBOMapping(M,w);const A=t.render.frame;s[M.id]!==A&&(c(M),s[M.id]=A)}function l(M){const E=r.createBuffer(),S=M.__size,w=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,S,w),r.bindBuffer(r.UNIFORM_BUFFER,null),E}function c(M){const E=n[M.id],S=M.uniforms,w=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let A=0,_=S.length;A<_;A++){const T=S[A];if(Array.isArray(T))for(let N=0,C=T.length;N<C;N++)h(T[N],A,N,w);else h(T,A,0,w)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(M,E,S,w){if(u(M,E,S,w)===!0){const A=M.__offset,_=M.value;if(Array.isArray(_)){let T=0;for(let N=0;N<_.length;N++){const C=_[N],U=v(C,!0);d(C,M.__data,T),T+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,M.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,A,M.__data)}}function d(M,E,S){typeof M=="number"||typeof M=="boolean"?E[S]=M:M.isMatrix3?(E[S]=M.elements[0],E[S+1]=M.elements[1],E[S+2]=M.elements[2],E[S+3]=0,E[S+4]=M.elements[3],E[S+5]=M.elements[4],E[S+6]=M.elements[5],E[S+7]=0,E[S+8]=M.elements[6],E[S+9]=M.elements[7],E[S+10]=M.elements[8],E[S+11]=0):ArrayBuffer.isView(M)?E.set(M.subarray(0,E.length-S),S):M.toArray(E,S)}function u(M,E,S,w){const A=M.value,_=E+"_"+S;if(Array.isArray(A)){w[_]===void 0&&(w[_]=[]);const T=w[_];let N=!1;for(let C=0;C<A.length;C++)f(A[C],T,C)===!0&&(N=!0);return N}return f(A,w,_)}function f(M,E,S){if(E[S]===void 0)return typeof M=="number"||typeof M=="boolean"?E[S]=M:ArrayBuffer.isView(M)?E[S]=M.slice():E[S]=M.clone(),!0;{const w=E[S];if(typeof M=="number"||typeof M=="boolean"){if(w!==M)return E[S]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(w.equals(M)===!1)return w.copy(M),!0}}return!1}function x(M){const E=M.uniforms;let S=0;const w=16;for(let _=0,T=E.length;_<T;_++){const N=Array.isArray(E[_])?E[_]:[E[_]];for(let C=0,U=N.length;C<U;C++){const O=N[C],W=Array.isArray(O.value)?O.value:[O.value],I=Array.isArray(E[_])||Array.isArray(O.value);let G=S;for(let H=0,et=W.length;H<et;H++){const Y=W[H],j=v(Y,I),tt=S%w,Et=tt%j.boundary,Ut=tt+Et;S+=Et,Ut!==0&&w-Ut<j.storage&&(S+=w-Ut),H===0&&(G=S),S+=j.storage}const $=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new $((S-G)/Float32Array.BYTES_PER_ELEMENT),O.__offset=G}}const A=S%w;return A>0&&(S+=w-A),M.__size=S,M.__cache={},this}function v(M,E){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=16,S.storage=48):M.isMatrix4?(S.boundary=16,S.storage=64):M.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):Dt("WebGLRenderer: Unsupported uniform value type.",M),E===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function g(M){const E=M.target;E.removeEventListener("dispose",g),r.deleteBuffer(n[E.id]),delete n[E.id],delete s[E.id]}function m(){for(const M in n)r.deleteBuffer(n[M]);n={},s={}}return{bind:a,update:o,dispose:m}}const v0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ci=null;function M0(){return ci===null&&(ci=new wc(v0,16,16,an,gi),ci.name="DFG_LUT",ci.minFilter=He,ci.magFilter=He,ci.wrapS=Ti,ci.wrapT=Ti,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}class S0{constructor(t={}){const{canvas:e=Nh(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Xe}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const v=f,g=new Set([so,no,io]),m=new Set([Xe,mi,ns,In,ja,to]),M=new Uint32Array(4),E=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let w=null,A=null;const _=[],T=[];let N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let U=!1,O=null,W=null,I=null,G=null;this._outputColorSpace=ze;let $=0,H=0,et=null,Y=-1,j=null;const tt=new de,Et=new de;let Ut=null;const Z=new bt(0);let gt=0,Mt=e.width,Rt=e.height,xt=1,Ot=null,fe=null;const Lt=new de(0,0,Mt,Rt),te=new de(0,0,Mt,Rt);let ne=!1;const Vt=new rs,Re=new co;let xe=!1,ke=!1;const le=new Jt,oi=new L,ye=new de,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function Ke(){return et===null?xt:1}let F=i;function $e(b,D){return e.getContext(b,D)}let ae,oe,ft,_e,Ct,It,R,y,B,it,Q,rt,dt,q,K,ot,P,J,X,lt,st,at,wt;try{const b={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Za}`),e.addEventListener("webglcontextlost",At,!1),e.addEventListener("webglcontextrestored",Bt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),F===null){const D="webgl2";if(F=$e(D,b),F===null)throw $e(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}kt()}catch(b){throw e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",Bt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Zt("WebGLRenderer: "+b.message),b}function kt(){ae=new Ep(F),ae.init(),st=new d0(F,ae),oe=new fp(F,ae,t,st),ft=new c0(F,ae),oe.reversedDepthBuffer&&u&&ft.buffers.depth.setReversed(!0),W=F.createFramebuffer(),I=F.createFramebuffer(),G=F.createFramebuffer(),_e=new Ap(F),Ct=new $m,It=new h0(F,ae,ft,Ct,oe,st,_e),R=new bp(C),y=new Rd(F),at=new dp(F,y),B=new Tp(F,y,_e,at),it=new Cp(F,B,y,at,_e),J=new Rp(F,oe,It),K=new pp(Ct),Q=new Km(C,R,ae,oe,at,K),rt=new x0(C,Ct),dt=new Jm,q=new n0(ae),P=new hp(C,R,ft,it,x,l),ot=new l0(C,it,oe),wt=new _0(F,_e,oe,ft),X=new up(F,ae,_e),lt=new wp(F,ae,_e),_e.programs=Q.programs,C.capabilities=oe,C.extensions=ae,C.properties=Ct,C.renderLists=dt,C.shadowMap=ot,C.state=ft,C.info=_e}v!==Xe&&(N=new Lp(v,e.width,e.height,o,n,s));const nt=new m0(C,F);this.xr=nt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=ae.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ae.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(b){b!==void 0&&(xt=b,this.setSize(Mt,Rt,!1))},this.getSize=function(b){return b.set(Mt,Rt)},this.setSize=function(b,D,V=!0){if(nt.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}Mt=b,Rt=D,e.width=Math.floor(b*xt),e.height=Math.floor(D*xt),V===!0&&(e.style.width=b+"px",e.style.height=D+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(Mt*xt,Rt*xt).floor()},this.setDrawingBufferSize=function(b,D,V){Mt=b,Rt=D,xt=V,e.width=Math.floor(b*V),e.height=Math.floor(D*V),this.setViewport(0,0,b,D)},this.setEffects=function(b){if(v===Xe){Zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let D=0;D<b.length;D++)if(b[D].isOutputPass===!0){Dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(tt)},this.getViewport=function(b){return b.copy(Lt)},this.setViewport=function(b,D,V,z){b.isVector4?Lt.set(b.x,b.y,b.z,b.w):Lt.set(b,D,V,z),ft.viewport(tt.copy(Lt).multiplyScalar(Ke()).round())},this.getScissor=function(b){return b.copy(te)},this.setScissor=function(b,D,V,z){b.isVector4?te.set(b.x,b.y,b.z,b.w):te.set(b,D,V,z),ft.scissor(Et.copy(te).multiplyScalar(Ke()).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(b){ft.setScissorTest(ne=b)},this.setOpaqueSort=function(b){Ot=b},this.setTransparentSort=function(b){fe=b},this.getClearColor=function(b){return b.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(b=!0,D=!0,V=!0){let z=0;if(b){let k=!1;if(et!==null){const ut=et.texture.format;k=g.has(ut)}if(k){const ut=et.texture.type,vt=m.has(ut),ct=P.getClearColor(),_t=P.getClearAlpha(),Tt=ct.r,Ft=ct.g,Wt=ct.b;vt?(M[0]=Tt,M[1]=Ft,M[2]=Wt,M[3]=_t,F.clearBufferuiv(F.COLOR,0,M)):(E[0]=Tt,E[1]=Ft,E[2]=Wt,E[3]=_t,F.clearBufferiv(F.COLOR,0,E))}else z|=F.COLOR_BUFFER_BIT}D&&(z|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&F.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),O=b},this.dispose=function(){e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",Bt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),P.dispose(),dt.dispose(),q.dispose(),It.dispose(),Ct.dispose(),R.dispose(),it.dispose(),B.dispose(),at.dispose(),wt.dispose(),Q.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",bo),nt.removeEventListener("sessionend",Eo),Yi.stop()};function At(b){b.preventDefault(),zo("WebGLRenderer: Context Lost."),U=!0}function Bt(){zo("WebGLRenderer: Context Restored."),U=!1;const b=_e.autoReset,D=ot.enabled,V=ot.autoUpdate,z=ot.needsUpdate,k=ot.type;kt(),_e.autoReset=b,ot.enabled=D,ot.autoUpdate=V,ot.needsUpdate=z,ot.type=k}function pt(b){Zt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ee(b){const D=b.target;D.removeEventListener("dispose",ee),be(D)}function be(b){Ci(b),Ct.remove(b)}function Ci(b){const D=Ct.get(b).programs;D!==void 0&&(D.forEach(function(V){Q.releaseProgram(V)}),b.isShaderMaterial&&Q.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,V,z,k,ut){D===null&&(D=Ye);const vt=k.isMesh&&k.matrixWorld.determinantAffine()<0,ct=Qc(b,D,V,z,k);ft.setMaterial(z,vt);let _t=V.index,Tt=1;if(z.wireframe===!0){if(_t=B.getWireframeAttribute(V),_t===void 0)return;Tt=2}const Ft=V.drawRange,Wt=V.attributes.position;let St=Ft.start*Tt,Xt=(Ft.start+Ft.count)*Tt;ut!==null&&(St=Math.max(St,ut.start*Tt),Xt=Math.min(Xt,(ut.start+ut.count)*Tt)),_t!==null?(St=Math.max(St,0),Xt=Math.min(Xt,_t.count)):Wt!=null&&(St=Math.max(St,0),Xt=Math.min(Xt,Wt.count));const pe=Xt-St;if(pe<0||pe===1/0)return;at.setup(k,z,ct,V,_t);let re,se=X;if(_t!==null&&(re=y.get(_t),se=lt,se.setIndex(re)),k.isMesh)z.wireframe===!0?(ft.setLineWidth(z.wireframeLinewidth*Ke()),se.setMode(F.LINES)):se.setMode(F.TRIANGLES);else if(k.isLine){let Le=z.linewidth;Le===void 0&&(Le=1),ft.setLineWidth(Le*Ke()),k.isLineSegments?se.setMode(F.LINES):k.isLineLoop?se.setMode(F.LINE_LOOP):se.setMode(F.LINE_STRIP)}else k.isPoints?se.setMode(F.POINTS):k.isSprite&&se.setMode(F.TRIANGLES);if(k.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))se.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Le=k._multiDrawStarts,yt=k._multiDrawCounts,Fe=k._multiDrawCount,Qt=_t?y.get(_t).bytesPerElement:1,qi=Ct.get(z).currentProgram.getUniforms();for(let De=0;De<Fe;De++)qi.setValue(F,"_gl_DrawID",De),se.render(Le[De]/Qt,yt[De])}else if(k.isInstancedMesh)se.renderInstances(St,pe,k.count);else if(V.isInstancedBufferGeometry){const Le=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,yt=Math.min(V.instanceCount,Le);se.renderInstances(St,pe,yt)}else se.render(St,pe)};function yo(b,D,V,z){O!==null&&b.isNodeMaterial&&O.setObject(z,b),xe===!0&&K.setState(b,V,!1),b.transparent===!0&&b.side===di&&b.forceSinglePass===!1?(b.side=Be,b.needsUpdate=!0,On(b,D,z),b.side=sn,b.needsUpdate=!0,On(b,D,z),b.side=di):On(b,D,z)}this.compile=function(b,D,V=null){V===null&&(V=b),O!==null&&O.renderStart(b,D,V),A=q.get(V),A.init(D),T.push(A),V.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(A.pushLight(k),k.castShadow&&A.pushShadow(k))}),b!==V&&b.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(A.pushLight(k),k.castShadow&&A.pushShadow(k))}),A.setupLights(),O!==null&&O.updateLights(A.state.lightsArray),ke=this.localClippingEnabled,xe=K.init(this.clippingPlanes,ke),xe===!0&&K.setGlobalState(this.clippingPlanes,D),O!==null&&ot.render(A.state.shadowsArray,V,D);const z=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ut=k.material;if(ut)if(Array.isArray(ut))for(let vt=0;vt<ut.length;vt++){const ct=ut[vt];yo(ct,V,D,k),z.add(ct)}else yo(ut,V,D,k),z.add(ut)}),A=T.pop(),O!==null&&O.renderEnd(),z},this.compileAsync=function(b,D,V=null){const z=this.compile(b,D,V);return new Promise(k=>{function ut(){if(z.forEach(function(vt){const _t=Ct.get(vt).currentProgram;(_t===void 0||_t.isReady())&&z.delete(vt)}),z.size===0){k(b);return}setTimeout(ut,10)}ae.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let _r=null;function Zc(b){_r&&_r(b)}function bo(){Yi.stop()}function Eo(){Yi.start()}const Yi=new Oc;Yi.setAnimationLoop(Zc),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(b){_r=b,nt.setAnimationLoop(b),b===null?Yi.stop():Yi.start()},nt.addEventListener("sessionstart",bo),nt.addEventListener("sessionend",Eo),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;O!==null&&O.renderStart(b,D);const V=nt.enabled===!0&&nt.isPresenting===!0,z=N!==null&&(et===null||V)&&N.begin(C,et);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(D),D=nt.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,D,et),A=q.get(b,T.length),A.init(D),A.state.textureUnits=It.getTextureUnits(),T.push(A),le.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?Re.setFromArrayCamera(D):Vt.setFromProjectionMatrix(le,ai,D.reversedDepth),ke=this.localClippingEnabled,xe=K.init(this.clippingPlanes,ke),w=dt.get(b,_.length),w.init(),_.push(w),this.info.render.frame++,nt.enabled===!0&&nt.isPresenting===!0){const vt=C.xr.getDepthSensingMesh();vt!==null&&vr(vt,D,-1/0,C.sortObjects)}vr(b,D,0,C.sortObjects),w.finish(),O!==null&&O.updateLights(A.state.lightsArray),C.sortObjects===!0&&w.sort(Ot,fe),qe=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,qe&&P.addToRenderList(w,b),this.info.autoReset===!0&&this.info.reset(),xe===!0&&K.beginShadows();const k=A.state.shadowsArray;if(ot.render(k,b,D),xe===!0&&K.endShadows(),(z&&N.hasRenderPass())===!1){const vt=w.opaque,ct=w.transmissive;if(A.setupLights(),D.isArrayCamera){const _t=D.cameras;if(ct.length>0)for(let Tt=0,Ft=_t.length;Tt<Ft;Tt++){const Wt=_t[Tt];wo(vt,ct,b,Wt)}qe&&P.render(b);for(let Tt=0,Ft=_t.length;Tt<Ft;Tt++){const Wt=_t[Tt];To(w,b,Wt,Wt.viewport)}}else ct.length>0&&wo(vt,ct,b,D),qe&&P.render(b),To(w,b,D)}et!==null&&H===0&&(It.updateMultisampleRenderTarget(et),It.updateRenderTargetMipmap(et)),z&&N.end(C),b.isScene===!0&&b.onAfterRender(C,b,D),at.resetDefaultState(),Y=-1,j=null,T.pop(),T.length>0?(A=T[T.length-1],It.setTextureUnits(A.state.textureUnits),xe===!0&&K.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,O!==null&&O.renderEnd()};function vr(b,D,V,z){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)A.pushLight(b),b.castShadow&&A.pushShadow(b);else if(b.isSprite){const vt=D.isArrayCamera?Re:Vt;if(!b.frustumCulled||b.intersectsFrustum(vt)){z&&ye.setFromMatrixPosition(b.matrixWorld).applyMatrix4(le);const ct=it.update(b),_t=b.material;_t.visible&&w.push(b,ct,_t,V,ye.z,null,D)}}else if(b.isMesh||b.isLine||b.isPoints){const vt=D.isArrayCamera?Re:Vt;if(!b.frustumCulled||b.intersectsFrustum(vt)){const ct=it.update(b),_t=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ye.copy(b.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),ye.copy(ct.boundingSphere.center)),ye.applyMatrix4(b.matrixWorld).applyMatrix4(le)),Array.isArray(_t)){const Tt=ct.groups;for(let Ft=0,Wt=Tt.length;Ft<Wt;Ft++){const St=Tt[Ft],Xt=_t[St.materialIndex];Xt&&Xt.visible&&w.push(b,ct,Xt,V,ye.z,St,D)}}else _t.visible&&w.push(b,ct,_t,V,ye.z,null,D)}}}const ut=b.children;for(let vt=0,ct=ut.length;vt<ct;vt++)vr(ut[vt],D,V,z)}function To(b,D,V,z){const{opaque:k,transmissive:ut,transparent:vt}=b;A.setupLightsView(V),xe===!0&&K.setGlobalState(C.clippingPlanes,V),z&&ft.viewport(tt.copy(z)),k.length>0&&hs(k,D,V),ut.length>0&&hs(ut,D,V),vt.length>0&&hs(vt,D,V),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function wo(b,D,V,z){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[z.id]===void 0){const St=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[z.id]=new fi(1,1,{generateMipmaps:!0,type:St?gi:Xe,minFilter:Bi,samples:Math.max(4,oe.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}const ut=A.state.transmissionRenderTarget[z.id],vt=z.viewport||tt;ut.setSize(vt.z*C.transmissionResolutionScale,vt.w*C.transmissionResolutionScale);const ct=C.getRenderTarget(),_t=C.getActiveCubeFace(),Tt=C.getActiveMipmapLevel();C.setRenderTarget(ut),C.getClearColor(Z),gt=C.getClearAlpha(),gt<1&&C.setClearColor(16777215,.5),C.clear(),qe&&P.render(V);const Ft=C.toneMapping;C.toneMapping=wi;const Wt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),A.setupLightsView(z),xe===!0&&K.setGlobalState(C.clippingPlanes,z),hs(b,V,z),It.updateMultisampleRenderTarget(ut),It.updateRenderTargetMipmap(ut),ae.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let Xt=0,pe=D.length;Xt<pe;Xt++){const re=D[Xt],{object:se,geometry:Le,material:yt,group:Fe}=re;if(yt.side===di&&se.layers.test(z.layers)){const Qt=yt.side;yt.side=Be,yt.needsUpdate=!0,Ao(se,V,z,Le,yt,Fe),yt.side=Qt,yt.needsUpdate=!0,St=!0}}St===!0&&(It.updateMultisampleRenderTarget(ut),It.updateRenderTargetMipmap(ut))}C.setRenderTarget(ct,_t,Tt),C.setClearColor(Z,gt),Wt!==void 0&&(z.viewport=Wt),C.toneMapping=Ft}function hs(b,D,V){const z=D.isScene===!0?D.overrideMaterial:null;for(let k=0,ut=b.length;k<ut;k++){const vt=b[k],{object:ct,geometry:_t,group:Tt}=vt;let Ft=vt.material;Ft.allowOverride===!0&&z!==null&&(Ft=z),ct.layers.test(V.layers)&&Ao(ct,D,V,_t,Ft,Tt)}}function Ao(b,D,V,z,k,ut){O!==null&&k.isNodeMaterial&&O.setObject(b,k),b.onBeforeRender(C,D,V,z,k,ut),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(C,D,V,z,b,ut),k.transparent===!0&&k.side===di&&k.forceSinglePass===!1?(k.side=Be,k.needsUpdate=!0,C.renderBufferDirect(V,D,z,k,b,ut),k.side=sn,k.needsUpdate=!0,C.renderBufferDirect(V,D,z,k,b,ut),k.side=di):C.renderBufferDirect(V,D,z,k,b,ut),b.onAfterRender(C,D,V,z,k,ut)}function Ro(b){let D=0;for(const V of b)V.texture!==null&&D++;return D}function On(b,D,V){D.isScene!==!0&&(D=Ye);const z=Ct.get(b),k=A.state.lights,ut=A.state.shadowsArray,vt=k.state.version,ct=Q.getParameters(b,k.state,ut,D,V,A.state.lightProbeGridArray),_t=Q.getProgramCacheKey(ct);let Tt=z.programs;z.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?D.environment:null,z.fog=D.fog;const Ft=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;z.envMap=R.get(b.envMap||z.environment,Ft),z.envMapRotation=z.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Tt===void 0&&(b.addEventListener("dispose",ee),Tt=new Map,z.programs=Tt,z.programVariants=new Map);let Wt=Tt.get(_t);if(Wt!==void 0){if(z.currentProgram===Wt&&z.lightsStateVersion===vt)return Po(b,ct),Wt}else ct.uniforms=Q.getUniforms(b),O!==null&&b.isNodeMaterial&&O.build(b,V,ct),b.onBeforeCompile(ct,C),Wt=Q.acquireProgram(ct,_t),Tt.set(_t,Wt),z.uniforms=ct.uniforms;const St=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(St.clippingPlanes=K.uniform),Po(b,ct),z.needsLights=th(b),z.lightsStateVersion=vt,z.needsLights&&(St.ambientLightColor.value=k.state.ambient,St.lightProbe.value=k.state.probe,St.sunLights.value=k.state.sun,St.sunLightShadows.value=k.state.sunShadow,St.directionalLights.value=k.state.directional,St.directionalLightShadows.value=k.state.directionalShadow,St.spotLights.value=k.state.spot,St.spotLightShadows.value=k.state.spotShadow,St.rectAreaLights.value=k.state.rectArea,St.ltc_1.value=k.state.rectAreaLTC1,St.ltc_2.value=k.state.rectAreaLTC2,St.pointLights.value=k.state.point,St.pointLightShadows.value=k.state.pointShadow,St.hemisphereLights.value=k.state.hemi,St.sunShadowMatrix.value=k.state.sunShadowMatrix,St.sunShadowCascade.value=k.state.sunShadowCascade,St.directionalShadowMatrix.value=k.state.directionalShadowMatrix,St.spotLightMatrix.value=k.state.spotLightMatrix,St.spotLightMap.value=k.state.spotLightMap,St.pointShadowMatrix.value=k.state.pointShadowMatrix),z.numLightProbeGrids=Ro(A.state.lightProbeGridArray),z.currentProgram=Wt,z.uniformsList=null,Wt}function Jc(b,D,V,z,k){const ut=Ct.get(b),vt=ut.currentProgram.id+","+z+","+k;let ct=ut.programVariants.get(vt);return ct===void 0?(ct=On(b,D,V),ut.programVariants.set(vt,ct)):(ut.currentProgram=ct,ut.uniformsList=null,ut.outputColorSpace=z,ut.toneMapping=k),ct}function Co(b){if(b.uniformsList===null){const D=b.currentProgram.getUniforms();b.uniformsList=Qs.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function Po(b,D){const V=Ct.get(b);V.outputColorSpace=D.outputColorSpace,V.batching=D.batching,V.batchingColor=D.batchingColor,V.instancing=D.instancing,V.instancingColor=D.instancingColor,V.instancingMorph=D.instancingMorph,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function Qc(b,D,V,z,k){D.isScene!==!0&&(D=Ye),It.resetTextureUnits();const ut=D.fog,vt=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?D.environment:null,ct=et===null?C.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Yt.workingColorSpace,_t=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Tt=R.get(z.envMap||vt,_t),Ft=z.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Wt=!!V.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),St=!!V.morphAttributes.position,Xt=!!V.morphAttributes.normal,pe=!!V.morphAttributes.color;let re=wi;z.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(re=C.toneMapping);const se=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Le=se!==void 0?se.length:0,yt=Ct.get(z),Fe=A.state.lights;if(xe===!0&&(ke===!0||b!==j)){const ce=b===j&&z.id===Y;K.setState(z,b,ce)}let Qt=!1,qi=!1;z.version===yt.__version?yt.needsLights&&yt.lightsStateVersion!==Fe.state.version||k.isBatchedMesh&&yt.batching===!1||!k.isBatchedMesh&&yt.batching===!0||k.isBatchedMesh&&yt.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&yt.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&yt.instancing===!1||!k.isInstancedMesh&&yt.instancing===!0||k.isSkinnedMesh&&yt.skinning===!1||!k.isSkinnedMesh&&yt.skinning===!0||k.isInstancedMesh&&yt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&yt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&yt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&yt.instancingMorph===!1&&k.morphTexture!==null||yt.envMap!==Tt||z.fog===!0&&yt.fog!==ut||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==K.numPlanes||yt.numIntersection!==K.numIntersection)||yt.vertexAlphas!==Ft||yt.vertexTangents!==Wt||yt.morphTargets!==St||yt.morphNormals!==Xt||yt.morphColors!==pe||yt.morphTargetsCount!==Le||yt.numLightProbeGrids!==Ro(A.state.lightProbeGridArray)?Qt=!0:(yt.outputColorSpace!==ct||yt.toneMapping!==re)&&(qi=!0):(Qt=!0,yt.__version=z.version);let De=yt.currentProgram;(Qt===!0||qi===!0)&&(De=qi===!0?Jc(z,D,k,ct,re):On(z,D,k),O&&z.isNodeMaterial&&O.onUpdateProgram(z,De,yt));let ds=!1,Pi=!1,Ki=!1;const Kt=De.getUniforms(),Ce=yt.uniforms;if(ft.useProgram(De.program)&&(ds=!0,Pi=!0,Ki=!0),z.id!==Y&&(Y=z.id,Pi=!0),ds||j!==b){ft.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Kt.setValue(F,"projectionMatrix",b.projectionMatrix),Kt.setValue(F,"viewMatrix",b.matrixWorldInverse);const Ee=Kt.map.cameraPosition;Ee!==void 0&&Ee.setValue(F,oi.setFromMatrixPosition(b.matrixWorld)),oe.logarithmicDepthBuffer&&Kt.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Kt.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),j!==b&&(j=b,Pi=!0,Ki=!0)}if(yt.needsLights&&(Fe.state.sunShadowMap.length>0&&Kt.setValue(F,"sunShadowMap",Fe.state.sunShadowMap,It),Fe.state.directionalShadowMap.length>0&&Kt.setValue(F,"directionalShadowMap",Fe.state.directionalShadowMap,It),Fe.state.spotShadowMap.length>0&&Kt.setValue(F,"spotShadowMap",Fe.state.spotShadowMap,It),Fe.state.pointShadowMap.length>0&&Kt.setValue(F,"pointShadowMap",Fe.state.pointShadowMap,It)),k.isSkinnedMesh){Kt.setOptional(F,k,"bindMatrix"),Kt.setOptional(F,k,"bindMatrixInverse");const ce=k.skeleton;ce&&(ce.boneTexture===null&&ce.computeBoneTexture(),Kt.setValue(F,"boneTexture",ce.boneTexture,It))}k.isBatchedMesh&&(Kt.setOptional(F,k,"batchingTexture"),Kt.setValue(F,"batchingTexture",k._matricesTexture,It),Kt.setOptional(F,k,"batchingIdTexture"),Kt.setValue(F,"batchingIdTexture",k._indirectTexture,It),Kt.setOptional(F,k,"batchingColorTexture"),k._colorsTexture!==null&&Kt.setValue(F,"batchingColorTexture",k._colorsTexture,It));const Qe=V.morphAttributes;if((Qe.position!==void 0||Qe.normal!==void 0||Qe.color!==void 0)&&J.update(k,V,De),(Pi||yt.receiveShadow!==k.receiveShadow)&&(yt.receiveShadow=k.receiveShadow,Kt.setValue(F,"receiveShadow",k.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&D.environment!==null&&(Ce.envMapIntensity.value=D.environmentIntensity),Ce.dfgLUT!==void 0&&(Ce.dfgLUT.value=M0()),Pi){if(Kt.setValue(F,"toneMappingExposure",C.toneMappingExposure),yt.needsLights&&jc(Ce,Ki),ut&&z.fog===!0&&rt.refreshFogUniforms(Ce,ut),rt.refreshMaterialUniforms(Ce,z,xt,Rt,A.state.transmissionRenderTarget[b.id]),yt.needsLights&&yt.numLightProbeGrids>0){const ce=S;let Ee=0;for(const _i of A.state.lightProbeGridArray)_i.texture!==null&&(ce.textures[Ee]=_i.texture,ce.min[Ee]=_i.boundingBox.min,ce.max[Ee]=_i.boundingBox.max,ce.resolution[Ee]=_i.resolution,Ee++);for(const _i in ce)ce[_i].length=Ee;Ce.probesSH.value=ce.textures,Ce.probesMin.value=ce.min,Ce.probesMax.value=ce.max,Ce.probesResolution.value=ce.resolution}Qs.upload(F,Co(yt),Ce,It)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Qs.upload(F,Co(yt),Ce,It),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Kt.setValue(F,"center",k.center),Kt.setValue(F,"modelViewMatrix",k.modelViewMatrix),Kt.setValue(F,"normalMatrix",k.normalMatrix),Kt.setValue(F,"modelMatrix",k.matrixWorld),z.uniformsGroups!==void 0){const ce=z.uniformsGroups;for(let Ee=0,_i=ce.length;Ee<_i;Ee++){const Do=ce[Ee];wt.update(Do,De),wt.bind(Do,De)}}return De}function jc(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.sunLights.needsUpdate=D,b.sunLightShadows.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function th(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(b,D,V){const z=Ct.get(b);z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Ct.get(b.texture).__webglTexture=D,Ct.get(b.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:V,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,D){const V=Ct.get(b);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,V=0){et=b,$=D,H=V;let z=null,k=!1,ut=!1;if(b){const ct=Ct.get(b);if(ct.__useDefaultFramebuffer!==void 0){ft.bindFramebuffer(F.FRAMEBUFFER,ct.__webglFramebuffer),tt.copy(b.viewport),Et.copy(b.scissor),Ut=b.scissorTest,ft.viewport(tt),ft.scissor(Et),ft.setScissorTest(Ut),Y=-1;return}else if(ct.__webglFramebuffer===void 0)It.setupRenderTarget(b);else if(ct.__hasExternalTextures)It.rebindTextures(b,Ct.get(b.texture).__webglTexture,Ct.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ft=b.depthTexture;if(ct.__boundDepthTexture!==Ft){if(Ft!==null&&Ct.has(Ft)&&(b.width!==Ft.image.width||b.height!==Ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");It.setupDepthRenderbuffer(b)}}const _t=b.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(ut=!0);const Tt=Ct.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Tt[D])?z=Tt[D][V]:z=Tt[D],k=!0):b.samples>0&&It.useMultisampledRTT(b)===!1?z=Ct.get(b).__webglMultisampledFramebuffer:Array.isArray(Tt)?z=Tt[V]:z=Tt,tt.copy(b.viewport),Et.copy(b.scissor),Ut=b.scissorTest}else tt.copy(Lt).multiplyScalar(xt).floor(),Et.copy(te).multiplyScalar(xt).floor(),Ut=ne;if(V!==0&&(z=W),ft.bindFramebuffer(F.FRAMEBUFFER,z)&&ft.drawBuffers(b,z),ft.viewport(tt),ft.scissor(Et),ft.setScissorTest(Ut),k){const ct=Ct.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,ct.__webglTexture,V)}else if(ut){const ct=D;for(let _t=0;_t<b.textures.length;_t++){const Tt=Ct.get(b.textures[_t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+_t,Tt.__webglTexture,V,ct)}}else if(b!==null&&V!==0){const ct=Ct.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ct.__webglTexture,V)}Y=-1};function Lo(b){const D=Ct.get(b);return(D.__readFormat!==b.format||D.__readType!==b.type)&&(D.__readFormat=b.format,D.__readType=b.type,D.__formatReadable=oe.textureFormatReadable(b.format),D.__typeReadable=oe.textureTypeReadable(b.type)),D}this.readRenderTargetPixels=function(b,D,V,z,k,ut,vt,ct=0){if(!(b&&b.isWebGLRenderTarget)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Ct.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&vt!==void 0&&(_t=_t[vt],Array.isArray(_t)&&(_t=_t[0])),_t){ft.bindFramebuffer(F.FRAMEBUFFER,_t);try{const Tt=b.textures[ct],Ft=Tt.format,Wt=Tt.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ct);const St=Lo(Tt);if(St.__formatReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(St.__typeReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-z&&V>=0&&V<=b.height-k&&F.readPixels(D,V,z,k,st.convert(Ft),st.convert(Wt),ut)}finally{const Tt=et!==null?Ct.get(et).__webglFramebuffer:null;ft.bindFramebuffer(F.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(b,D,V,z,k,ut,vt,ct=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Ct.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&vt!==void 0&&(_t=_t[vt],Array.isArray(_t)&&(_t=_t[0])),_t)if(D>=0&&D<=b.width-z&&V>=0&&V<=b.height-k){ft.bindFramebuffer(F.FRAMEBUFFER,_t);const Tt=b.textures[ct],Ft=Tt.format,Wt=Tt.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ct);const St=Lo(Tt);if(St.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(St.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Xt),F.bufferData(F.PIXEL_PACK_BUFFER,ut.byteLength,F.STREAM_READ),F.readPixels(D,V,z,k,st.convert(Ft),st.convert(Wt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const pe=et!==null?Ct.get(et).__webglFramebuffer:null;ft.bindFramebuffer(F.FRAMEBUFFER,pe);const re=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Uh(F,re,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Xt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ut),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Xt),F.deleteSync(re),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,D=null,V=0){const z=Math.pow(2,-V),k=Math.floor(b.image.width*z),ut=Math.floor(b.image.height*z),vt=D!==null?D.x:0,ct=D!==null?D.y:0;It.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,vt,ct,k,ut),ft.unbindTexture()},this.copyTextureToTexture=function(b,D,V=null,z=null,k=0,ut=0){let vt,ct,_t,Tt,Ft,Wt,St,Xt,pe;const re=b.isCompressedTexture?b.mipmaps[ut]:b.image;if(V!==null)vt=V.max.x-V.min.x,ct=V.max.y-V.min.y,_t=V.isBox3?V.max.z-V.min.z:1,Tt=V.min.x,Ft=V.min.y,Wt=V.isBox3?V.min.z:0;else{const Kt=Math.pow(2,-k);vt=Math.floor(re.width*Kt),ct=Math.floor(re.height*Kt),b.isDataArrayTexture?_t=re.depth:b.isData3DTexture?_t=Math.floor(re.depth*Kt):_t=1,Tt=0,Ft=0,Wt=0}z!==null?(St=z.x,Xt=z.y,pe=z.z):(St=0,Xt=0,pe=0);const se=st.convert(D.format),Le=st.convert(D.type);let yt;D.isData3DTexture?(It.setTexture3D(D,0),yt=F.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(It.setTexture2DArray(D,0),yt=F.TEXTURE_2D_ARRAY):(It.setTexture2D(D,0),yt=F.TEXTURE_2D),ft.activeTexture(F.TEXTURE0),ft.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,D.flipY),ft.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),ft.pixelStorei(F.UNPACK_ALIGNMENT,D.unpackAlignment);const Fe=ft.getParameter(F.UNPACK_ROW_LENGTH),Qt=ft.getParameter(F.UNPACK_IMAGE_HEIGHT),qi=ft.getParameter(F.UNPACK_SKIP_PIXELS),De=ft.getParameter(F.UNPACK_SKIP_ROWS),ds=ft.getParameter(F.UNPACK_SKIP_IMAGES);ft.pixelStorei(F.UNPACK_ROW_LENGTH,re.width),ft.pixelStorei(F.UNPACK_IMAGE_HEIGHT,re.height),ft.pixelStorei(F.UNPACK_SKIP_PIXELS,Tt),ft.pixelStorei(F.UNPACK_SKIP_ROWS,Ft),ft.pixelStorei(F.UNPACK_SKIP_IMAGES,Wt);const Pi=b.isDataArrayTexture||b.isData3DTexture,Ki=D.isDataArrayTexture||D.isData3DTexture;if(b.isDepthTexture){const Kt=Ct.get(b),Ce=Ct.get(D),Qe=Ct.get(Kt.__renderTarget),ce=Ct.get(Ce.__renderTarget);ft.bindFramebuffer(F.READ_FRAMEBUFFER,Qe.__webglFramebuffer),ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Ee=0;Ee<_t;Ee++)Pi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ct.get(b).__webglTexture,k,Wt+Ee),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ct.get(D).__webglTexture,ut,pe+Ee)),F.blitFramebuffer(Tt,Ft,Tt+vt,Ft+ct,St,Xt,St+vt,Xt+ct,F.DEPTH_BUFFER_BIT,F.NEAREST);ft.bindFramebuffer(F.READ_FRAMEBUFFER,null),ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(k!==0||b.isRenderTargetTexture||Ct.has(b)){const Kt=Ct.get(b),Ce=Ct.get(D);ft.bindFramebuffer(F.READ_FRAMEBUFFER,I),ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,G);for(let Qe=0;Qe<_t;Qe++)Pi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Kt.__webglTexture,k,Wt+Qe):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Kt.__webglTexture,k),Ki?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ce.__webglTexture,ut,pe+Qe):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ce.__webglTexture,ut),k!==0?F.blitFramebuffer(Tt,Ft,Tt+vt,Ft+ct,St,Xt,St+vt,Xt+ct,F.COLOR_BUFFER_BIT,F.NEAREST):Ki?F.copyTexSubImage3D(yt,ut,St,Xt,pe+Qe,Tt,Ft,vt,ct):F.copyTexSubImage2D(yt,ut,St,Xt,Tt,Ft,vt,ct);ft.bindFramebuffer(F.READ_FRAMEBUFFER,null),ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ki?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(yt,ut,St,Xt,pe,vt,ct,_t,se,Le,re.data):D.isCompressedArrayTexture?F.compressedTexSubImage3D(yt,ut,St,Xt,pe,vt,ct,_t,se,re.data):F.texSubImage3D(yt,ut,St,Xt,pe,vt,ct,_t,se,Le,re):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ut,St,Xt,vt,ct,se,Le,re.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ut,St,Xt,re.width,re.height,se,re.data):F.texSubImage2D(F.TEXTURE_2D,ut,St,Xt,vt,ct,se,Le,re);ft.pixelStorei(F.UNPACK_ROW_LENGTH,Fe),ft.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Qt),ft.pixelStorei(F.UNPACK_SKIP_PIXELS,qi),ft.pixelStorei(F.UNPACK_SKIP_ROWS,De),ft.pixelStorei(F.UNPACK_SKIP_IMAGES,ds),ut===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&F.generateMipmap(yt),ft.unbindTexture()},this.initRenderTarget=function(b){Ct.get(b).__webglFramebuffer===void 0&&It.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?It.setTextureCube(b,0):b.isData3DTexture?It.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?It.setTexture2DArray(b,0):It.setTexture2D(b,0),ft.unbindTexture()},this.resetState=function(){$=0,H=0,et=null,ft.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}function qa(r){let t=2166136261;const e=String(r);for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return t^=t>>>16,t=Math.imul(t,2246822507),t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,t>>>0}function xr(r){let t=r>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function we(r,t){const e=(qa(String(r))^qa(String(t))^2654435769)>>>0,i=xr(e);return i.int=(n,s)=>Math.floor(i()*(s-n+1))+n,i.range=(n,s)=>n+i()*(s-n),i.pick=n=>n[Math.floor(i()*n.length)],i.chance=n=>i()<n,i.sign=()=>i()<.5?-1:1,i}function jn(r,t,e){let i=(e^Math.imul(r|0,374761393)^Math.imul(t|0,668265263))>>>0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967295}function Ol(r){return r*r*r*(r*(r*6-15)+10)}function Zr(r,t,e){return r+(t-r)*e}function Kc(r,t,e=0){const i=Math.floor(r),n=Math.floor(t),s=r-i,a=t-n,o=Ol(s),l=Ol(a),c=jn(i,n,e),h=jn(i+1,n,e),d=jn(i,n+1,e),u=jn(i+1,n+1,e);return Zr(Zr(c,h,o),Zr(d,u,o),l)*2-1}function Yn(r,t,e=0,i=4,n=2.02,s=.5){let a=1,o=1,l=0,c=0;for(let h=0;h<i;h++)l+=Kc(r*o,t*o,e+h*1013>>>0)*a,c+=a,a*=s,o*=n;return l/c}function y0(r,t,e=0,i=4){let n=1,s=1,a=0,o=0;for(let l=0;l<i;l++){const c=1-Math.abs(Kc(r*s,t*s,e+711*l>>>0));a+=c*c*n,o+=n,n*=.52,s*=2.03}return a/o}function Bs(r,t,e=0){return jn(r,t,e)}function tn(r,t,e){const i=Math.min(1,Math.max(0,(e-r)/(t-r)));return i*i*(3-2*i)}function ve(r,t,e){return r<t?t:r>e?e:r}function ks(r){return String(r).trim().toLowerCase().replace(/\s+/g,"-").slice(0,32)||"san-voxel"}function b0(){const r=["vice","sand","neon","rust","palm","dust","coral","iron","sunset","bay","grape","cactus","crown","pixel","harbor","delta","ghost","amber","chrome","dune"],t=["beach","heights","hills","grove","city","county","coast","bluff","mirage","project","strip","canyon","port","vale","springs","row"],e=xr((Date.now()^Math.floor(Math.random()*4294967295))>>>0);return`${r[Math.floor(e()*r.length)]}-${t[Math.floor(e()*t.length)]}-${Math.floor(e()*900+100)}`}const Ri=0,en=1.5,Ei=2,Rn=16,bn=Rn*Ei,qn=153,Hs=232,hr={ocean:5205866,beach:14536083,plains:6529342,forest:4160817,desert:14139254,snow:15134192,rock:9079426,city:9408908},zl={ocean:5920577,beach:12758640,plains:8150844,forest:7033654,desert:11770456,snow:11121333,rock:7171430,city:7237739};function Ka(r){return{top:hr[r]??hr.plains,side:zl[r]??zl.plains}}function E0(r){const t=qa(String(r)+":terrain"),e=(t^439041101)>>>0,i=(t^1584364171)>>>0,n=(t^2626518639)>>>0,s=(t^305419896)>>>0,a=(t^2882400001)>>>0,o=(t^267242409)>>>0;function l(g,m){const M=Yn(g*.00165+13.7,m*.00165-4.2,e,4,2.03,.52),E=Yn(g*.009+3.1,m*.009+8.8,i,4,2.07,.48),S=tn(.03,.62,Yn(g*.00115-7.5,m*.00115+9.4,n,3,2.01,.55)),w=y0(g*.0032+2.2,m*.0032-6.6,s,4),A=tn(-.28,.18,M);let _=-7.5+M*19+E*3.2+S*w*56*A;return _>-2&&_<1.2&&(_=.65+(_+2)*.12),_}function c(g,m){return Yn(g*.0012+41.2,m*.0012-18.6,a,3,2.02,.5)}function h(g,m){return Yn(g*.0014-24.5,m*.0014+37.1,o,3,2.04,.5)}function d(g,m,M){if((M?Math.max(Math.abs(g-M.cx),Math.abs(m-M.cz)):1e9)<qn+45)return"city";const S=l(g,m);if(S<Ri+.15)return"ocean";if(S<Ri+2.4)return"beach";const w=c(g,m),A=h(g,m);return S>33||w<-.26?S>46&&w<-.02?"snow":S>34?"rock":"snow":A<-.14&&w>.06?"desert":A>.2?"forest":"plains"}function u(g,m,M){if(M){const E=Math.max(Math.abs(g-M.cx),Math.abs(m-M.cz));if(E<qn)return M.groundY;if(E<Hs){const S=tn(qn,Hs,E),w=M.groundY*(1-S)+l(g,m)*S;return Math.floor(w/en)*en}}return Math.floor(l(g,m)/en)*en}function f(g,m,M){if(M){const E=Math.max(Math.abs(g-M.cx),Math.abs(m-M.cz));if(E<qn)return M.groundY;if(E<Hs){const S=tn(qn,Hs,E);return M.groundY*(1-S)+l(g,m)*S}}return l(g,m)}function x(g,m,M){const S=u(g,m,M);return Math.max(Math.abs(u(g+2,m,M)-S),Math.abs(u(g,m+2,M)-S))}function v(g,m,M){return u(g,m,M)<Ri-.1}return{seed:t,naturalHeight:l,heightAt:u,rawHeightAt:f,biomeAt:d,slopeAt:x,isWater:v,temperature:c,moisture:h,biomeColors:Ka,biomeCss(g,m,M){const E=d(g,m,M);return new T0(hr[E]??hr.plains).getStyle()}}}function T0(r){const t=(r>>16&255)/255,e=(r>>8&255)/255,i=(r&255)/255;return{r:t,g:e,b:i,getStyle(){return`rgb(${t*255|0},${e*255|0},${i*255|0})`}}}const Kn=new bt,Fi=new L,Gs=new L,Vs=new L;function ht(r,t=0,e=0){return Kn.set(r),(t||e)&&Kn.offsetHSL(0,e,t),[Kn.r,Kn.g,Kn.b]}function En(r,t){return[Math.min(1,r[0]*t),Math.min(1,r[1]*t),Math.min(1,r[2]*t)]}class nn{constructor(t=!0){this.positions=[],this.normals=[],this.uvs=t?[]:null,this.colors=[],this.indices=[],this.vertCount=0}get empty(){return this.vertCount===0}addQuad(t,e,i,n,s,a,o){const l=this.vertCount;this.positions.push(t[0],t[1],t[2],e[0],e[1],e[2],i[0],i[1],i[2],n[0],n[1],n[2]);let h,d,u;o?(h=o[0],d=o[1],u=o[2]):(Gs.set(e[0]-t[0],e[1]-t[1],e[2]-t[2]),Vs.set(i[0]-t[0],i[1]-t[1],i[2]-t[2]),Fi.crossVectors(Gs,Vs).normalize(),h=Fi.x,d=Fi.y,u=Fi.z);for(let f=0;f<4;f++)this.normals.push(h,d,u);this.uvs&&(a?this.uvs.push(a[0][0],a[0][1],a[1][0],a[1][1],a[2][0],a[2][1],a[3][0],a[3][1]):this.uvs.push(0,0,1,0,1,1,0,1));for(let f=0;f<4;f++)this.colors.push(s[0],s[1],s[2]);this.indices.push(l,l+1,l+2,l,l+2,l+3),this.vertCount+=4}addTri(t,e,i,n,s,a){const o=this.vertCount;this.positions.push(t[0],t[1],t[2],e[0],e[1],e[2],i[0],i[1],i[2]);let l,c,h;a?(l=a[0],c=a[1],h=a[2]):(Gs.set(e[0]-t[0],e[1]-t[1],e[2]-t[2]),Vs.set(i[0]-t[0],i[1]-t[1],i[2]-t[2]),Fi.crossVectors(Gs,Vs).normalize(),l=Fi.x,c=Fi.y,h=Fi.z);for(let d=0;d<3;d++)this.normals.push(l,c,h);this.uvs&&(s?this.uvs.push(s[0][0],s[0][1],s[1][0],s[1][1],s[2][0],s[2][1]):this.uvs.push(0,0,1,0,.5,1));for(let d=0;d<3;d++)this.colors.push(n[0],n[1],n[2]);this.indices.push(o,o+1,o+2),this.vertCount+=3}box(t,e,i,n,s,a,o,l=3,c=null){const h=t-n/2,d=t+n/2,u=e,f=e+s,x=i-a/2,v=i+a/2,g=s/l,m=c||o;this.addQuad([h,f,x],[h,f,v],[d,f,v],[d,f,x],m,[[h/l,x/l],[h/l,v/l],[d/l,v/l],[d/l,x/l]],[0,1,0]),this.addQuad([d,u,v],[d,u,x],[d,f,x],[d,f,v],o,[[v/l,0],[x/l,0],[x/l,g],[v/l,g]],[1,0,0]),this.addQuad([h,u,x],[h,u,v],[h,f,v],[h,f,x],o,[[x/l,0],[v/l,0],[v/l,g],[x/l,g]],[-1,0,0]),this.addQuad([h,u,v],[d,u,v],[d,f,v],[h,f,v],o,[[h/l,0],[d/l,0],[d/l,g],[h/l,g]],[0,0,1]),this.addQuad([d,u,x],[h,u,x],[h,f,x],[d,f,x],o,[[d/l,0],[h/l,0],[h/l,g],[d/l,g]],[0,0,-1])}flat(t,e,i,n,s,a,o=4,l=[0,0]){const c=t-i/2,h=t+i/2,d=e-n/2,u=e+n/2;this.addQuad([c,s,d],[c,s,u],[h,s,u],[h,s,d],a,[[c/o+l[0],d/o+l[1]],[c/o+l[0],u/o+l[1]],[h/o+l[0],u/o+l[1]],[h/o+l[0],d/o+l[1]]],[0,1,0])}cylinder(t,e,i,n,s,a,o,l=2){const c=e,h=e+s,d=[];for(let u=0;u<a;u++){const f=u/a*Math.PI*2;d.push([t+Math.cos(f)*n,i+Math.sin(f)*n])}for(let u=0;u<a;u++){const f=d[u],x=d[(u+1)%a],v=u/a*Math.PI*2,g=Math.cos(v+Math.PI/a),m=Math.sin(v+Math.PI/a);this.addQuad([f[0],c,f[1]],[x[0],c,x[1]],[x[0],h,x[1]],[f[0],h,f[1]],o,[[0,0],[1,0],[1,s/l],[0,s/l]],[g,0,m])}for(let u=1;u<a-1;u++){const f=d[0],x=d[u],v=d[u+1];this.addTri([f[0],h,f[1]],[x[0],h,x[1]],[v[0],h,v[1]],o,null,[0,1,0])}}addGeometry(t){const e=t.getAttribute("position"),i=t.getAttribute("normal"),n=t.getAttribute("color");if(!e)return;const s=this.vertCount;for(let a=0;a<e.count;a++){if(this.positions.push(e.getX(a),e.getY(a),e.getZ(a)),this.normals.push(i?i.getX(a):0,i?i.getY(a):0,i?i.getZ(a):0),this.uvs){const o=t.getAttribute("uv");this.uvs.push(o?o.getX(a):0,o?o.getY(a):0)}n?this.colors.push(n.getX(a),n.getY(a),n.getZ(a)):this.colors.push(1,1,1)}if(t.index)for(let a=0;a<t.index.count;a++)this.indices.push(s+t.index.getX(a));else for(let a=0;a<e.count;a++)this.indices.push(s+a);this.vertCount+=e.count}build(){const t=new Pe;return t.setAttribute("position",new jt(this.positions,3)),t.setAttribute("normal",new jt(this.normals,3)),this.uvs&&t.setAttribute("uv",new jt(this.uvs,2)),t.setAttribute("color",new jt(this.colors,3)),t.setIndex(this.indices),t.computeBoundingSphere(),t.computeBoundingBox(),t}}function w0(){const t=document.createElement("canvas");t.width=t.height=32;const e=t.getContext("2d"),i=e.createImageData(32,32),n=xr(45324);for(let a=0;a<1024;a++){let o=176+Math.floor(n()*64);n()<.09&&(o=148+Math.floor(n()*30)),i.data[a*4]=o,i.data[a*4+1]=o,i.data[a*4+2]=o,i.data[a*4+3]=255}e.putImageData(i,0,0);const s=new Va(t);return s.wrapS=s.wrapT=rn,s.magFilter=ge,s.minFilter=js,s.anisotropy=4,s}function A0(r,t){const e=new bt(r);return e.offsetHSL(0,0,t),"#"+e.getHexString()}function R0(r,t=0){const i=document.createElement("canvas");i.width=i.height=128;const n=i.getContext("2d"),s=document.createElement("canvas");s.width=s.height=128;const a=s.getContext("2d"),o=xr(16435934+t*7717+r.wall.length*31);n.fillStyle=r.wall,n.fillRect(0,0,128,128),a.fillStyle="#000",a.fillRect(0,0,128,128);for(let x=0;x<700;x++){const v=Math.floor(o()*128),g=Math.floor(o()*128);n.fillStyle=o()<.5?"rgba(0,0,0,0.07)":"rgba(255,255,255,0.05)",n.fillRect(v,g,1,1)}if(r.brick){n.strokeStyle="rgba(0,0,0,0.18)",n.lineWidth=1;for(let x=0;x<128;x+=8)n.beginPath(),n.moveTo(0,x),n.lineTo(128,x),n.stroke()}const l=r.cols||4,c=r.rows||4,h=128/l,d=128/c;for(let x=0;x<c;x++)for(let v=0;v<l;v++){const g=v*h,m=x*d,M=r.glass?4:8,E=g+M,S=m+(r.glass?4:7),w=h-M*2,A=d-(r.glass?8:15);n.fillStyle=r.frame||"#2a2d33",n.fillRect(E-2,S-2,w+4,A+4);const _=n.createLinearGradient(E,S,E+w,S+A);if(_.addColorStop(0,r.glassTop||"#3d5d73"),_.addColorStop(.55,r.glassMid||"#2b4356"),_.addColorStop(1,r.glassBot||"#1a2b38"),n.fillStyle=_,n.fillRect(E,S,w,A),n.fillStyle="rgba(20,25,30,0.55)",n.fillRect(E+w/2-1,S,2,A),o()<r.litChance){const T=o()<.8;a.fillStyle=T?o()<.3?"#ffd07a":"#ffb84d":"#a9d8ff",a.fillRect(E,S,w,A),o()<.3&&(a.fillStyle="rgba(0,0,0,0.45)",a.fillRect(E,S+A*.62,w,A*.38))}n.fillStyle=A0(r.wall,r.dark?.08:-.1),n.fillRect(E-3,S+A+2,w+6,2)}if(r.band){n.fillStyle=r.band;for(let x=0;x<128;x+=128/4)n.fillRect(0,x,128,2)}const u=new Va(i);u.wrapS=u.wrapT=rn,u.magFilter=ge,u.minFilter=js,u.colorSpace=ze,u.anisotropy=4;const f=new Va(s);return f.wrapS=f.wrapT=rn,f.magFilter=ge,f.minFilter=js,f.colorSpace=ze,{map:u,emissiveMap:f,tileWorld:7.2}}const Bl=[4935506,5656650,4146763,6117456,4409163],kl=[11680571,3108495,3963466,12159534,7031430,3159098],Hl=[14211282,2895928,9382956,3038346,4094538,13214522,7040888,10443308,14476520,4930923],Jr=[{wall:"#b8b4a7",frame:"#34383e",glassTop:"#557485",glassMid:"#38505f",glassBot:"#22323c",cols:4,rows:4,litChance:.44,band:"rgba(255,255,255,0.05)"},{wall:"#8f5a43",frame:"#3a2f2b",glassTop:"#5d7484",glassMid:"#405667",glassBot:"#253a46",brick:!0,cols:3,rows:4,litChance:.38,band:"rgba(0,0,0,0.08)"},{wall:"#6f8288",frame:"#242c31",glassTop:"#a7c7d6",glassMid:"#6f99ad",glassBot:"#3f6475",glass:!0,cols:5,rows:5,litChance:.32},{wall:"#5c6168",frame:"#20252a",glassTop:"#7d98a6",glassMid:"#4a6371",glassBot:"#2b3c45",dark:!0,cols:4,rows:5,litChance:.5,band:"rgba(255,255,255,0.04)"},{wall:"#c9b895",frame:"#413b32",glassTop:"#597485",glassMid:"#3d5665",glassBot:"#263944",cols:4,rows:4,litChance:.4,band:"rgba(90,60,20,0.08)"},{wall:"#98a0a2",frame:"#30363a",glassTop:"#92b8c9",glassMid:"#648a9c",glassBot:"#3e5e6d",cols:5,rows:4,litChance:.36,band:"rgba(255,255,255,0.06)"}];function Gl(r,t,e){if(e<46)return"DOWNTOWN";if(e<100)return t<-46?"NORTH HEIGHTS":t>46?"SOUTH DOCKS":r<-46?"WEST END":"EAST VICE";if(e<160){const i=Math.atan2(t,r);return i>Math.PI*.25&&i<Math.PI*.75?"THE STRIP":i<-Math.PI*.25&&i>-Math.PI*.75?"PALM ROW":i>=Math.PI*.75||i<=-Math.PI*.75?"OLD TOWN":"HARBOR LINE"}return"SAN VOXEL COUNTY"}class C0{constructor(t,e){this.seed=String(t),this.height=e,this.half=135,this.pitch=30,this.roadWidth=9,this.blocks=9,this.tile=7.2;const i=we(t,"city-site");this.cx=Math.round(i.range(-70,70)),this.cz=Math.round(i.range(-70,70));let n=0,s=0;for(let o=0;o<12;o++){const l=o/12*Math.PI*2,c=o===0?0:90;n+=e.naturalHeight(this.cx+Math.cos(l)*c,this.cz+Math.sin(l)*c),s++}const a=n/s;this.groundY=ve(Math.round((a+4.5)/en)*en,4.5,16.5),this.xLines=[],this.zLines=[];for(let o=0;o<=this.blocks;o++)this.xLines.push(this.cx-this.half+o*this.pitch),this.zLines.push(this.cz-this.half+o*this.pitch);this.lots=[],this.buildings=[],this.segments=[],this.parkedSpots=[],this.walkPoints=[],this.jobPoints=[],this.colliders=[],this.generateLayout(),this.spawn={x:this.cx+9,z:this.cz+5,yaw:-Math.PI/2},this.hospital={x:this.cx-9,z:this.cz+9},this.center={x:this.cx,z:this.cz,y:this.groundY}}get city(){return this}generateLayout(){const{seed:t}=this;for(let l=0;l<this.blocks;l++)for(let c=0;c<this.blocks;c++){const h=this.cx-this.half+(c+.5)*this.pitch,d=this.cz-this.half+(l+.5)*this.pitch,u=h-this.cx,f=d-this.cz,x=Math.hypot(u,f),v=Math.max(Math.abs(c-4),Math.abs(l-4))/4.5,g=Math.max(0,1-v),m=we(t,`lot:${c}:${l}`),M=Gl(u,f,x);let E="build";c===4&&l===4?E="plaza":g<.7&&m()<.085?E="park":g<.9&&m()<.075?E="parking":m()<.032&&(E="construction");const S={i:c,j:l,x:h,z:d,w:this.pitch-this.roadWidth,d:this.pitch-this.roadWidth,type:E,core:g,district:M};this.lots.push(S),E==="build"?this.generateBuildings(S,m):E==="parking"?this.generateParking(S,m):(E==="park"||E==="plaza")&&this.generateParkSpots(S,m)}const e=we(t,"walk-points");for(let l=0;l<140;l++){const c=e.pick(this.lots),h=e.int(0,3);let d=c.x,u=c.z;const f=c.w/2-e.range(.6,2.2);h===0?(d+=f,u+=e.range(-9,9)):h===1?(d-=f,u+=e.range(-9,9)):h===2?(u+=f,d+=e.range(-9,9)):(u-=f,d+=e.range(-9,9)),this.walkPoints.push({x:d,z:u,district:c.district})}const i=this.lots.filter(l=>l.type==="park"||l.type==="plaza"||l.type==="parking"),n=[this.lots.find(l=>l.type==="plaza")],s=we(t,"job-points"),a=i.filter(l=>l.type!=="plaza").sort(()=>s()-.5);for(const l of a){if(n.length>=3)break;n.every(c=>!c||Math.hypot(c.x-l.x,c.z-l.z)>70)&&n.push(l)}for(;n.length<3;)n.push(a[n.length]||i[0]);const o=["THE HANDOFF","SIDEWALK CONTRACT","NIGHT SHIFT"];n.forEach((l,c)=>{l&&this.jobPoints.push({x:l.x+(c===0?6.5:0),z:l.z+(c===0?-6.5:0),y:this.groundY+.15,district:l.district,name:o[c]||"STREET JOB"})})}generateBuildings(t,e){const i=t.core,n=i<.78&&e()<.34,s=t.w-5.2;if(n){const a=e()<.5,o=1.2,l=(s-o)/2,c=s,h=7+e()*(8+i*20);7+e()*(8+i*20);for(let d=0;d<2;d++){const u=(l+o)/2*(d===0?-1:1),f=t.x+(a?u:0),x=t.z+(a?0:u),v=a?l:c,g=a?c:l;this.addBuilding(f,x,v,g,Math.max(6,h),e,t)}}else{const a=i>.35?e()<.36+i*.55:e()<.12;let o=a?Math.min(s,12+e()*3.5):Math.min(s,13+e()*2.5),l=a?Math.min(s,12+e()*3.5):Math.min(s,13+e()*2.5),c;a?c=22+Math.pow(i,1.35)*58*(.55+e()*.75):c=6+i*17*(.55+e()*.9),c=Math.max(5.5,c),this.addBuilding(t.x,t.z,o,l,c,e,t)}}addBuilding(t,e,i,n,s,a,o){const l=a.int(0,Jr.length-1),c=Bl[a.int(0,Bl.length-1)],h=s>26,d=[];let u=this.groundY,f=s,x=i,v=n,g=0;do{const M=g===0?h?s*(.5+a()*.18):s:f,E=Math.min(f,Math.max(2.4,M));if(d.push({x:t,z:e,w:x,d:v,y:u,h:E,style:l,uvSeed:a.int(0,9999)}),u+=E,f-=E,f<2.2)break;const S=.68+a()*.16;x=Math.max(6,x*S),v=Math.max(6,v*S),t+=(a()-.5)*1.2,e+=(a()-.5)*1.2,g++}while(g<3);const m={x:t,z:e,w:i,d:n,baseW:i,baseD:n,h:u-this.groundY,style:l,roofColor:c,district:o.district,segments:d};this.buildings.push(m),this.segments.push(...d),this.colliders.push({x0:t-i/2,x1:t+i/2,z0:e-n/2,z1:e+n/2,y0:this.groundY,y1:u+1.2})}generateParking(t,e){const i=3+e.int(0,2),n=e()<.5;for(let s=0;s<i;s++){const a=(s-(i-1)/2)*4.2;this.parkedSpots.push({x:t.x+(n?a:0),z:t.z+(n?0:a),yaw:n?0:Math.PI/2,y:this.groundY,color:Hl[e.int(0,Hl.length-1)],district:t.district})}t.stalls=i,t.stallAxis=n?"x":"z"}generateParkSpots(t,e){t.treeCount=t.type==="plaza"?3:e.int(4,8),t.trees=[];for(let i=0;i<t.treeCount;i++){const n=e()*Math.PI*2,s=e()*(t.w/2-2.5);t.trees.push({x:t.x+Math.cos(n)*s,z:t.z+Math.sin(n)*s,rng:e.int(0,9999),pine:e()<.22})}}build(t){const e=new Je;e.name="city";const i=new nn(!0),n=new nn(!0),s=new nn(!1),a=Jr.map(()=>new nn(!0)),o=Jr.map((f,x)=>{const v=R0(f,x),g=new Ae({map:v.map,emissiveMap:v.emissiveMap,emissive:16777215,emissiveIntensity:0,vertexColors:!1});return g.userData.tileWorld=v.tileWorld,g}),l=new Ae({map:t,vertexColors:!0}),c=new Ae({map:t,vertexColors:!0});this.groundMat=l,this.propsMat=c,this.buildGround(i),this.buildBuildings(a,n),this.buildStreetProps(n,s),this.buildLotContents(n,i);const h=new Pt(i.build(),l);h.receiveShadow=!0,h.name="city-ground",e.add(h);const d=new Pt(n.build(),c);d.receiveShadow=!0,d.castShadow=!1,d.name="city-props",e.add(d),a.forEach((f,x)=>{if(f.empty)return;const v=new Pt(f.build(),o[x]);v.castShadow=!0,v.receiveShadow=!0,v.name="buildings-"+x,e.add(v)});const u=new Hi({color:5922920});if(!s.empty){const f=new Pt(s.build(),u);f.name="street-lamps",e.add(f)}return this.lampMat=u,this.facadeMats=o,this.group=e,{group:e,facadeMats:o,lampMat:u}}buildGround(t){const e=this.groundY+.02,i=ht(3356218),n=ht(3027253),s=ht(11117722),a=ht(9407362);t.flat(this.cx,this.cz,292,292,e,i,8);const o=this.roadWidth;for(const h of this.xLines)t.flat(h,this.cz,o,280,this.groundY+.05,n,6);for(const h of this.zLines)t.flat(this.cx,h,280,o,this.groundY+.055,n,6);const l=ht(14200121);for(const h of this.xLines)for(let d=this.cz-132;d<=this.cz+132;d+=5.4)this.nearIntersection(d,this.zLines,5.5)||t.flat(h,d,.32,2.4,this.groundY+.075,l,1);for(const h of this.zLines)for(let d=this.cx-132;d<=this.cx+132;d+=5.4)this.nearIntersection(d,this.xLines,5.5)||t.flat(d,h,2.4,.32,this.groundY+.075,l,1);const c=ht(14211280);for(let h=2;h<=7;h++)for(let d=2;d<=7;d++){const u=this.xLines[h],f=this.zLines[d];for(const x of[-1,1])for(let v=-2;v<=2;v++)t.flat(u+v*1.7,f+x*(o/2+1.7),1.05,2.2,this.groundY+.08,c,1),t.flat(u+x*(o/2+1.7),f+v*1.7,2.2,1.05,this.groundY+.08,c,1)}for(const h of this.lots){t.flat(h.x,h.z,h.w,h.d,this.groundY+.09,s,3);const d=h.w-.9,u=h.d-.9;if(t.flat(h.x,h.z-u/2,d,.32,this.groundY+.1,a,2),t.flat(h.x,h.z+u/2,d,.32,this.groundY+.1,a,2),t.flat(h.x-d/2,h.z,.32,u,this.groundY+.1,a,2),t.flat(h.x+d/2,h.z,.32,u,this.groundY+.1,a,2),h.type==="park"||h.type==="plaza")t.flat(h.x,h.z,h.w-4.2,h.d-4.2,this.groundY+.115,ht(5540155,.02),3),t.flat(h.x,h.z,h.w-4.2,1.9,this.groundY+.125,ht(10195325),2),t.flat(h.x,h.z,1.9,h.d-4.2,this.groundY+.126,ht(10195325),2);else if(h.type==="parking"){t.flat(h.x,h.z,h.w-4.2,h.d-4.2,this.groundY+.115,ht(3158840),4);const f=h.stalls||4;for(let x=0;x<f;x++){const v=(x-(f-1)/2)*4.2;h.stallAxis==="x"?t.flat(h.x+v-2.1,h.z,.12,12,this.groundY+.13,ht(13619140),1):t.flat(h.x,h.z+v-2.1,12,.12,this.groundY+.13,ht(13619140),1)}}else h.type==="construction"?t.flat(h.x,h.z,h.w-4.2,h.d-4.2,this.groundY+.115,ht(8087622),3):t.flat(h.x,h.z,h.w-4.2,h.d-4.2,this.groundY+.112,ht(9341568,.01),4)}}nearIntersection(t,e,i){for(const n of e)if(Math.abs(t-n)<i)return!0;return!1}buildBuildings(t,e){for(const i of this.buildings){const n=we(this.seed,`facade:${i.x.toFixed(1)}:${i.z.toFixed(1)}`);for(const d of i.segments)this.addFacade(t[d.style],d,n);const s=i.segments[i.segments.length-1],a=s.y+s.h,o=ht(i.roofColor);e.flat(s.x,s.z,s.w,s.d,a+.02,o,3);const l=.55,c=.35,h=ht(5987934);if(e.box(s.x,a,s.z-s.d/2+c/2,s.w,l,c,h,2),e.box(s.x,a,s.z+s.d/2-c/2,s.w,l,c,h,2),e.box(s.x-s.w/2+c/2,a,s.z,c,l,s.d,h,2),e.box(s.x+s.w/2-c/2,a,s.z,c,l,s.d,h,2),n()<.62){const d=n.int(1,3);for(let u=0;u<d;u++){const f=s.x+(n()-.5)*(s.w-4),x=s.z+(n()-.5)*(s.d-4);n()<.5?(e.box(f,a,x,1.8,.9,1.4,ht(8225413),2),e.box(f,a+.9,x,1.4,.18,1,ht(5593951),2)):(e.cylinder(f,a,x,1.15,2,8,ht(7168597),2),e.box(f,a+2,x,.5,.6,.5,ht(4998203),1))}}if(i.h>32&&n()<.6){const d=n.range(3,8);e.box(s.x,a,s.z,.18,d,.18,ht(3356732),1),e.box(s.x,a+d,s.z,.55,.28,.55,ht(12729147),1)}if(i.h<24&&i.segments.length===1&&n()<.6){const d=ht(kl[n.int(0,kl.length-1)]),u=n.int(0,3),f=this.groundY+3.2,x=i.segments[0];u===0?e.box(x.x,f,x.z-x.d/2-.55,Math.min(x.w-2,7),.32,1.1,d,2):u===1?e.box(x.x,f,x.z+x.d/2+.55,Math.min(x.w-2,7),.32,1.1,d,2):u===2?e.box(x.x-x.w/2-.55,f,x.z,1.1,.32,Math.min(x.d-2,7),d,2):e.box(x.x+x.w/2+.55,f,x.z,1.1,.32,Math.min(x.d-2,7),d,2)}}}addFacade(t,e,i){const s=e.x-e.w/2,a=e.x+e.w/2,o=e.z-e.d/2,l=e.z+e.d/2,c=e.y,h=e.y+e.h,d=i.int(0,3)+i.int(0,2)*.25,u=i.int(0,3),f=e.w/7.2,x=e.d/7.2,v=e.h/7.2;t.addQuad([s,c,l],[a,c,l],[a,h,l],[s,h,l],[1,1,1],[[d,u],[d+f,u],[d+f,u+v],[d,u+v]],[0,0,1]),t.addQuad([a,c,o],[s,c,o],[s,h,o],[a,h,o],[1,1,1],[[d+1.3,u+.7],[d+1.3+f,u+.7],[d+1.3+f,u+.7+v],[d+1.3,u+.7+v]],[0,0,-1]),t.addQuad([a,c,l],[a,c,o],[a,h,o],[a,h,l],[1,1,1],[[d+.4,u+1.1],[d+.4+x,u+1.1],[d+.4+x,u+1.1+v],[d+.4,u+1.1+v]],[1,0,0]),t.addQuad([s,c,o],[s,c,l],[s,h,l],[s,h,o],[1,1,1],[[d+2.1,u+.3],[d+2.1+x,u+.3],[d+2.1+x,u+.3+v],[d+2.1,u+.3+v]],[-1,0,0])}buildStreetProps(t,e){const i=we(this.seed,"street-props"),n=ht(2961718);for(let c=0;c<this.xLines.length;c++)for(let h=0;h<this.zLines.length;h++){if(i()<.28)continue;const d=this.xLines[c]+5.75,u=this.zLines[h]+5.75;if(this.insideBuilding(d,u,.5))continue;const f=this.groundY;t.box(d,f,u,.24,5.4,.24,n,2),t.box(d-1.15,f+5.15,u,2.3,.15,.15,n,2),e.box(d-2.15,f+4.95,u,.8,.28,.36,[1,.87,.55],1)}const s=ht(14043967),a=ht(5556587),o=ht(14201660);for(let c=2;c<=7;c+=2)for(let h=2;h<=7;h+=2){const d=this.xLines[c]+5.7,u=this.zLines[h]-5.7;if(this.insideBuilding(d,u,.4))continue;const f=this.groundY;t.box(d,f,u,.18,4.2,.18,n,2),t.box(d,f+4.2,u+1.2,.34,.2,2.4,n,2),t.box(d,f+3.85,u+2.4,.4,1,.4,ht(2237994),1);const x=(c+h)%3;t.box(d+.21,f+4.55,u+2.4,.1,.22,.22,x===0?s:ht(3810083),1),t.box(d+.21,f+4.3,u+2.4,.1,.22,.22,x===1?o:ht(3814691),1),t.box(d+.21,f+4.05,u+2.4,.1,.22,.22,x===2?a:ht(2308647),1)}for(const c of this.lots)if(c.type==="park"||c.type==="plaza")for(const h of c.trees){const d=we(this.seed,`tree:${c.i}:${c.j}:${h.rng}`);h.pine?this.addPine(t,h.x,h.z,this.groundY+.12,d):this.addPalm(t,h.x,h.z,this.groundY+.12,d)}for(const c of this.lots){if(c.type!=="park"&&c.type!=="plaza")continue;const h=we(this.seed,`bench:${c.i}:${c.j}`);for(let d=0;d<3;d++){const u=h()*Math.PI*2,f=h.range(2,c.w/2-2),x=c.x+Math.cos(u)*f,v=c.z+Math.sin(u)*f,g=ht(7031854);t.box(x,this.groundY+.12,v,1.8,.35,.55,g,1),t.box(x,this.groundY+.45,v-.2,1.8,.55,.16,g,1)}}const l=this.lots.find(c=>c.type==="plaza");l&&(t.cylinder(l.x,this.groundY+.12,l.z,3.9,.8,8,ht(9209982),2),t.cylinder(l.x,this.groundY+.92,l.z,1.1,1.5,8,ht(10196618),2),t.box(l.x,this.groundY+2.42,l.z,1.1,1.6,.7,ht(8354415),1),t.box(l.x,this.groundY+4.02,l.z,.9,.3,.55,ht(7235935),1));for(const c of this.lots){if(c.type!=="construction")continue;we(this.seed,`construction:${c.i}:${c.j}`),ht(8218948);for(let v=0;v<8;v++){const g=v/8*Math.PI*2;t.box(c.x+Math.cos(g)*(c.w/2-.8),this.groundY+.12,c.z+Math.sin(g)*(c.d/2-.8),2,.8,.24,ht(14251819),1)}const h=9,d=9,u=3;for(let v=0;v<u;v++){const g=this.groundY+.12+v*3;t.box(c.x,g+2.7,c.z,h,.3,d,ht(9407360),2);for(const m of[-1,1])for(const M of[-1,1])t.box(c.x+m*h/2,g,c.z+M*d/2,.45,2.7,.45,ht(9078395),2)}const f=c.x+c.w/2-2.5,x=c.z-c.d/2+2.5;t.box(f,this.groundY+.12,x,1,24,1,ht(14263584),2),t.box(f+4.5,this.groundY+23.2,x,13,.55,.55,ht(14263584),2),t.box(f-3.2,this.groundY+22.6,x,3.4,1.6,.9,ht(7236194),2),t.box(f+8.6,this.groundY+16.5,x,.12,6.7,.12,ht(3947580),1),t.box(f+8.6,this.groundY+16.2,x,1.2,.8,.9,ht(12103840),1)}for(let c=0;c<46;c++){const h=i.pick(this.walkPoints);!h||this.insideBuilding(h.x,h.z,.5)||(i()<.5?(t.box(h.x,this.groundY+.12,h.z,.36,.55,.36,ht(11876912),1),t.box(h.x,this.groundY+.67,h.z,.2,.18,.2,ht(9383720),1)):t.box(h.x,this.groundY+.12,h.z,.6,.9,.6,ht(4152390),1))}}buildLotContents(t,e){for(const n of this.lots)if(n.type,n.type==="parking"){const s=ht(4803922);t.box(n.x-n.w/2+3,this.groundY+.12,n.z,.25,.8,.25,s,1),t.box(n.x+n.w/2-3,this.groundY+.12,n.z,.25,.8,.25,s,1)}const i=we(this.seed,"lot-tufts");for(const n of this.lots)if(!(n.type!=="park"&&n.type!=="plaza"))for(let s=0;s<6;s++){const a=n.x+(i()-.5)*(n.w-5),o=n.z+(i()-.5)*(n.d-5);i()<.5?t.box(a,this.groundY+.12,o,.45,.3,.45,ht(7250756),1):t.box(a,this.groundY+.12,o,.5,.35,.4,ht(7170656),1)}for(let n=0;n<24;n++){const s=i()*Math.PI*2,a=146+i()*7;this.addPalm(t,this.cx+Math.cos(s)*a,this.cz+Math.sin(s)*a,this.groundY+.02,i)}}addPalm(t,e,i,n,s){const a=4.5+s()*3,o=ht(8018487),l=ht(5212727);t.cylinder(e,n,i,.26,a,6,o,2);const c=n+a;t.box(e,c,i,4.6,.22,.7,l,2),t.box(e,c,i,.7,.22,4.6,l,2),t.box(e,c+.18,i,3.1,.2,1.4,ht(5938239),2),t.box(e,c+.18,i,1.4,.2,3.1,ht(5938239),2),t.box(e,c+.35,i,1.1,.7,1.1,ht(4157998),1)}addPine(t,e,i,n,s){const a=5+s()*5;t.box(e,n,i,.6,a,.6,ht(5980716),2);for(let o=0;o<3;o++){const l=4.2-o*1;t.box(e,n+a-1.2+o*1.5,i,l,1.1,l,ht(3107638,o*.015),2)}t.box(e,n+a+3.1,i,1,1,1,ht(3898432),1)}addTree(t,e,i,n,s){const a=3+s()*2.5;t.box(e,n,i,.65,a,.65,ht(6966319),2),t.box(e,n+a-.4,i,3.2,1.9,3.2,ht(4160822,.01),2),t.box(e,n+a+1,i,2,1.2,2,ht(4885565),2)}insideBuilding(t,e,i=0){for(const n of this.colliders)if(t>n.x0-i&&t<n.x1+i&&e>n.z0-i&&e<n.z1+i)return!0;return!1}nearestWalkPoint(t,e){let i=null,n=1/0;for(const s of this.walkPoints){const a=(s.x-t)*(s.x-t)+(s.z-e)*(s.z-e);a<n&&(n=a,i=s)}return i}randomRoadSpawn(t){const e=t()<.5?"x":"z",i=t()<.5?1:-1;if(e==="x"){const s=this.zLines[t.int(1,this.zLines.length-2)];return{x:this.cx+t.range(-110,110),z:s,yaw:i>0?0:Math.PI,axis:e,sign:i,district:"DOWNTOWN"}}return{x:this.xLines[t.int(1,this.xLines.length-2)],z:this.cz+t.range(-110,110),yaw:i>0?Math.PI/2:-Math.PI/2,axis:e,sign:i,district:"DOWNTOWN"}}districtAt(t,e){const i=t-this.cx,n=e-this.cz;return Gl(i,n,Math.hypot(i,n))}}const P0={forest:.24,plains:.045,snow:.055,desert:.022,rock:.012,beach:.006,ocean:0,city:0};class L0{constructor(t,e,i,n,s){this.scene=t,this.seed=e,this.height=i,this.city=n,this.material=s,this.radius=6,this.chunks=new Map,this.group=new Je,this.group.name="terrain",t.add(this.group),this.seedNum=Bs(1,2,3)*4294967296>>>0,this.pending=[]}key(t,e){return t+","+e}initial(t){const e=Math.floor(t.x/bn),i=Math.floor(t.z/bn),n=[];for(let s=-this.radius;s<=this.radius;s++)for(let a=-this.radius;a<=this.radius;a++)n.push([e+a,i+s,a*a+s*s]);n.sort((s,a)=>s[2]-a[2]);for(const[s,a]of n)this.ensure(s,a)}update(t){const e=Math.floor(t.x/bn),i=Math.floor(t.z/bn);if(this.centerX===e&&this.centerZ===i){for(let s=0;s<2&&this.pending.length;s++){const[a,o]=this.pending.shift();this.ensure(a,o)}return}this.centerX=e,this.centerZ=i,this.pending=[];for(let s=-this.radius;s<=this.radius;s++)for(let a=-this.radius;a<=this.radius;a++){const o=e+a,l=i+s;this.chunks.has(this.key(o,l))||this.pending.push([o,l])}this.pending.sort((s,a)=>{const o=(s[0]-e)**2+(s[1]-i)**2,l=(a[0]-e)**2+(a[1]-i)**2;return o-l});let n=0;for(;this.pending.length&&n<6;){const[s,a]=this.pending.shift();this.ensure(s,a),n++}for(const[s,a]of this.chunks)(Math.abs(a.ix-e)>this.radius+1||Math.abs(a.iz-i)>this.radius+1)&&(this.group.remove(a.mesh),a.mesh.geometry.dispose(),this.chunks.delete(s))}ensure(t,e){const i=this.key(t,e);if(this.chunks.has(i))return;const n=this.build(t,e);if(!n)return;const s={ix:t,iz:e,mesh:n};this.chunks.set(i,s),this.group.add(n)}build(t,e){const i=new nn(!0),n=t*bn,s=e*bn,a=Rn+2,o=new Float32Array(a*a),l=[];for(let g=0;g<a;g++)for(let m=0;m<a;m++){const M=m-1,E=g-1,S=n+(M+.5)*Ei,w=s+(E+.5)*Ei;o[g*a+m]=this.height.heightAt(S,w,this.city),l.push(this.height.biomeAt(S,w,this.city))}const c={},h={},d=(g,m)=>(c[g]||(c[g]=ht(Ka(g).top)),En(c[g],m)),u=(g,m)=>(h[g]||(h[g]=ht(Ka(g).side)),En(h[g],m)),f=ht(7830390);for(let g=0;g<Rn;g++)for(let m=0;m<Rn;m++){const M=m+1,E=g+1,S=o[E*a+M],w=l[E*a+M],A=Bs(m+t*97,g+e*97,this.height.seed),_=.82+A*.28,N=S<Ri?En(d(w,_),.55):d(w,_),C=n+m*Ei,U=C+Ei,O=s+g*Ei,W=O+Ei;i.addQuad([C,S,O],[C,S,W],[U,S,W],[U,S,O],N,[[C/3,O/3],[C/3,W/3],[U/3,W/3],[U/3,O/3]],[0,1,0]);const I=[{dx:1,dz:0,nh:o[E*a+M+1]},{dx:-1,dz:0,nh:o[E*a+M-1]},{dx:0,dz:1,nh:o[(E+1)*a+M]},{dx:0,dz:-1,nh:o[(E-1)*a+M]}];for(const G of I){if(G.nh>=S-.01)continue;const H=u(w,_),et=Math.max(G.nh,S-en*2.2);this.addSide(i,G.dx,G.dz,C,U,O,W,et,S,H,t,e),G.nh<et-.01&&this.addSide(i,G.dx,G.dz,C,U,O,W,G.nh,et,En(f,.82+A*.2),t,e)}}for(let g=2;g<Rn-1;g++)for(let m=2;m<Rn-1;m++){const M=(g+1)*a+(m+1),E=l[M];if(E==="city"||E==="ocean")continue;const S=o[M];if(S<Ri+.4)continue;const w=P0[E]??.03;if(Bs(n+m*31,s+g*31,this.seedNum)>w)continue;const _=n+m*Ei+1,T=s+g*Ei+1;if(Math.abs(_-this.city.cx)<151&&Math.abs(T-this.city.cz)<151)continue;const N=Bs(n+m*57,s+g*131,this.seedNum+9),C=S;E==="desert"?this.addCactus(i,_,T,C,N):E==="snow"?this.addPine(i,_,T,C,N):E==="rock"?this.addBoulder(i,_,T,C,N):this.addTree(i,_,T,C,N)}const x=i.build();if(!x.attributes.position.count)return x.dispose(),null;const v=new Pt(x,this.material);return v.position.set(0,0,0),v.receiveShadow=!0,v.castShadow=!1,v.frustumCulled=!0,v}addSide(t,e,i,n,s,a,o,l,c,h,d,u){c-l<.01||(e===1?t.addQuad([s,l,o],[s,l,a],[s,c,a],[s,c,o],h,[[o/3,l/3],[a/3,l/3],[a/3,c/3],[o/3,c/3]],[1,0,0]):e===-1?t.addQuad([n,l,a],[n,l,o],[n,c,o],[n,c,a],h,[[a/3,l/3],[o/3,l/3],[o/3,c/3],[a/3,c/3]],[-1,0,0]):i===1?t.addQuad([n,l,o],[s,l,o],[s,c,o],[n,c,o],h,[[n/3,l/3],[s/3,l/3],[s/3,c/3],[n/3,c/3]],[0,0,1]):t.addQuad([s,l,a],[n,l,a],[n,c,a],[s,c,a],h,[[s/3,l/3],[n/3,l/3],[n/3,c/3],[s/3,c/3]],[0,0,-1]))}addTree(t,e,i,n,s){const a=3.2+s*3.2,o=ht(6966062,s*.03),l=ht(4160822,(s-.5)*.06);t.box(e,n,i,.72,a,.72,o,2),t.box(e,n+a-.5,i,3.4,1.8,3.4,l,2),t.box(e,n+a+.8,i,2.2,1.2,2.2,En(l,1.08),2),s>.55&&t.box(e+1.4,n+a-.9,i-1.1,1.6,1.1,1.6,En(l,.94),2)}addPine(t,e,i,n,s){const a=5+s*4;t.box(e,n,i,.6,a,.6,ht(5521451),2);for(let o=0;o<3;o++){const l=4.4-o*1.1;t.box(e,n+a-1.4+o*1.4,i,l,1.2,l,ht(3107638,o*.02),2)}t.box(e,n+a+2.7,i,1.1,1.1,1.1,ht(3898432),2)}addCactus(t,e,i,n,s){const a=2.2+s*2.8,o=ht(5016133,s*.03);t.box(e,n,i,.85,a,.85,o,2),s>.45&&(t.box(e-.75,n+a*.45,i,.7,.6,.5,o,2),t.box(e-1.15,n+a*.45,i,.5,1.5,.5,o,2)),s>.7&&(t.box(e+.75,n+a*.6,i,.65,.5,.45,o,2),t.box(e+1.1,n+a*.6,i,.45,1.2,.45,o,2))}addBoulder(t,e,i,n,s){const a=1.2+s*2.2;t.box(e,n,i,a,a*.7,a,ht(8093048,s*.04),2),s>.5&&t.box(e+a*.6,n,i+a*.2,a*.7,a*.5,a*.8,ht(7303532),2)}}function D0(r){return new Ae({map:r,vertexColors:!0})}const I0=600,ii={dayTop:new bt(4161470),dayBot:new bt(13230314),duskTop:new bt(3813214),duskBot:new bt(15764298),nightTop:new bt(263693),nightBot:new bt(1120810),fogDay:new bt(12178658),fogDusk:new bt(14256994),fogNight:new bt(659484)};class N0{constructor(t,e,i,n,s){this.scene=t,this.seed=e,this.city=i,this.renderer=s,this.dayTime=.335,this.nightFactor=0,this.sunDir=new L,this.moonDir=new L,this.lightDir=new L,this.time=0,t.background=new bt(10471130),t.fog=new lo(12178658,150,430),this.skyUniforms={topColor:{value:ii.dayTop.clone()},bottomColor:{value:ii.dayBot.clone()},sunColor:{value:new bt(16773572)},sunDir:{value:new L(.5,.5,.3)},nightMix:{value:0}};const a=new Vi({uniforms:this.skyUniforms,side:Be,depthWrite:!1,fog:!1,vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform vec3 sunColor;
        uniform vec3 sunDir;
        uniform float nightMix;
        varying vec3 vDir;
        void main() {
          float h = clamp(vDir.y, -0.08, 1.0);
          vec3 col = mix(bottomColor, topColor, smoothstep(-0.02, 0.62, h));
          float sunAmt = max(dot(vDir, normalize(sunDir)), 0.0);
          float disc = pow(sunAmt, 1500.0) * 2.0;
          float glow = pow(sunAmt, 18.0) * 0.32;
          col += sunColor * (disc + glow) * (1.0 - nightMix * 0.75);
          float horizon = exp(-abs(h) * 12.0);
          col += bottomColor * horizon * 0.16;
          gl_FragColor = vec4(col, 1.0);
        }
      `});this.sky=new Pt(new lr(900,32,20),a),this.sky.frustumCulled=!1,this.sky.renderOrder=-100,t.add(this.sky);const o=new Pe,l=[],c=we(e,"stars");for(let M=0;M<700;M++){const E=c()*Math.PI*2,S=c(),w=820,A=Math.sqrt(1-S*S);l.push(Math.cos(E)*A*w,S*w*.9+40,Math.sin(E)*A*w)}o.setAttribute("position",new jt(l,3)),this.starMat=new Cc({color:14674175,size:2.4,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),this.stars=new ud(o,this.starMat),this.stars.frustumCulled=!1,this.stars.renderOrder=-90,t.add(this.stars),this.moonMat=new Hi({color:15133951,fog:!1}),this.moon=new Pt(new lr(13,16,12),this.moonMat),this.moon.frustumCulled=!1,this.moon.renderOrder=-85,t.add(this.moon),this.cloudMat=new Ae({color:16777215,transparent:!0,opacity:.86,fog:!1,depthWrite:!1});const h=new $t(1,1,1),d=we(e,"clouds"),u=110;this.clouds=new Ac(h,this.cloudMat,u),this.clouds.frustumCulled=!1,this.cloudData=[];const f=new Jt,x=new Wi,v=new L,g=new L;for(let M=0;M<u;M++){const E=d.range(10,44),S=d.range(8,30),w=d.range(2.5,7);g.set(d.range(-700,700),d.range(105,155),d.range(-700,700)),v.set(E,w,S),f.compose(g,x,v),this.clouds.setMatrixAt(M,f),this.cloudData.push({x:g.x,y:g.y,z:g.z,s:v.clone()})}this.clouds.instanceMatrix.needsUpdate=!0,this.clouds.renderOrder=-80,t.add(this.clouds),this.waterTex=n.clone(),this.waterTex.needsUpdate=!0,this.waterTex.wrapS=this.waterTex.wrapT=rn,this.waterTex.repeat.set(48,48),this.waterMat=new Nc({color:3112357,map:this.waterTex,transparent:!0,opacity:.8,shininess:90,specular:12576511,depthWrite:!1});const m=new ls(3600,3600,1,1);this.water=new Pt(m,this.waterMat),this.water.rotation.x=-Math.PI/2,this.water.position.y=Ri+.02,this.water.renderOrder=2,this.water.receiveShadow=!1,t.add(this.water),this.hemi=new Md(12573162,4867645,.85),t.add(this.hemi),this.ambient=new Ed(16777215,.17),t.add(this.ambient),this.sun=new bd(16773848,2),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024),this.sun.shadow.camera.left=-95,this.sun.shadow.camera.right=95,this.sun.shadow.camera.top=95,this.sun.shadow.camera.bottom=-95,this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=320,this.sun.shadow.bias=-5e-4,this.sun.shadow.normalBias=.035,t.add(this.sun),this.sunTarget=new ue,t.add(this.sunTarget),this.sun.target=this.sunTarget,this._facadeMats=[],this._lampMat=null,this._fountainMats=[],this.shadowsEnabled=!0}setCityMaterials(t,e){this._facadeMats=t||[],this._lampMat=e}setShadows(t){this.shadowsEnabled=t,this.sun.castShadow=t}update(t,e,i){this.time+=t,this.dayTime=(this.dayTime+t/I0)%1;const n=(this.dayTime-.25)*Math.PI*2;this.sunDir.set(Math.cos(n),Math.sin(n),.34).normalize(),this.moonDir.set(-Math.cos(n),-Math.sin(n),-.28).normalize();const s=this.sunDir.y,a=tn(-.06,.24,s),o=Math.max(0,1-Math.abs(s)/.32)*(s>-.35?1:0),l=1-tn(-.16,.1,s);this.nightFactor=l,this.skyUniforms.topColor.value.copy(ii.nightTop).lerp(ii.dayTop,a),this.skyUniforms.topColor.value.lerp(ii.duskTop,o*.62),this.skyUniforms.bottomColor.value.copy(ii.nightBot).lerp(ii.dayBot,a),this.skyUniforms.bottomColor.value.lerp(ii.duskBot,o*.78),this.skyUniforms.sunDir.value.copy(this.sunDir),this.skyUniforms.nightMix.value=l;const c=ii.fogNight.clone().lerp(ii.fogDay,a).lerp(ii.fogDusk,o*.72);this.scene.fog.color.copy(c),this.scene.fog.near=120+a*55,this.scene.fog.far=330+a*210,this.scene.background.copy(c),this.hemi.intensity=.18+a*.8,this.hemi.color.set(10471144).lerp(new bt(1844544),l),this.ambient.intensity=.08+a*.16,this.sun.intensity=.12+a*2.05,this.sun.color.set(16763786).lerp(new bt(16773848),tn(0,.35,s)),o>.2&&this.sun.color.lerp(new bt(16750423),o*.5);const h=s>-.03?this.sunDir:this.moonDir;this.lightDir.copy(h);const d=i?i.x:0,u=i?i.z:0,f=i?i.y:0;this.sun.position.set(d+h.x*120,f+Math.max(.1,h.y)*120,u+h.z*120),this.sunTarget.position.set(d,f,u),this.sun.castShadow=this.shadowsEnabled&&a>.02,e&&(this.sky.position.copy(e.position),this.stars.position.copy(e.position),this.moon.position.copy(e.position).addScaledVector(this.moonDir,720),this.clouds.position.x=this.time*2.2%500-250),this.starMat.opacity=Math.pow(l,1.3)*.95,this.moonMat.opacity=1,this.moon.visible=l>.08,this.cloudMat.color.set(16777215).lerp(new bt(2239036),l*.85),this.cloudMat.opacity=.8-l*.24,this.waterTex.offset.x=this.time*.0025,this.waterTex.offset.y=this.time*.0015,this.waterMat.color.set(3112357).lerp(new bt(463390),l*.78),this.waterMat.opacity=.78-l*.08;for(const x of this._facadeMats)x&&(x.emissiveIntensity=l*1.35);this._lampMat&&this._lampMat.color.set(5922920).lerp(new bt(16769696),l)}getClock(){const t=Math.floor(this.dayTime*24*60),e=Math.floor(t/60)%24,i=t%60;return{h:e,m:i,text:`${String(e).padStart(2,"0")}:${String(i).padStart(2,"0")}`}}getDayLabel(){return["MON","TUE","WED","THU","FRI","SAT","SUN"][Math.floor(this.dayTime*7)%7]}}const $n=1200,U0=1200,Vl={ocean:[36,84,122],beach:[196,178,118],plains:[100,148,63],forest:[58,111,49],desert:[190,166,102],snow:[219,228,232],rock:[125,125,117],city:[139,141,136]};class F0{constructor(t,e,i){this.scene=t,this.seed=e,this.renderer=i,this.height=E0(e),this.city=new C0(e,this.height),this.noiseTex=w0(),this.terrainMat=D0(this.noiseTex);const n=this.city.build(this.noiseTex);t.add(n.group),this.chunks=new L0(t,e,this.height,this.city,this.terrainMat),this.chunks.initial(this.city.spawn),this.env=new N0(t,e,this.city,this.noiseTex,i),this.env.setCityMaterials(this.city.facadeMats,this.city.lampMat);const s=this.city.lots.find(a=>a.type==="plaza");if(this.fountainMat=new Nc({color:4035256,transparent:!0,opacity:.82,shininess:110,specular:14218495}),s){const a=new Pt(new ho(3.35,20),this.fountainMat);a.rotation.x=-Math.PI/2,a.position.set(s.x,this.city.groundY+.95,s.z),a.renderOrder=1,t.add(a),this.fountain=a}this.buildColliderGrid(),this.buildMap(),this._roots=[n.group,this.chunks.group,this.env.sky,this.env.stars,this.env.moon,this.env.clouds,this.env.water,this.fountain].filter(Boolean),this._raycaster=new wd,this._tmpV=new L}get groundY(){return this.city.groundY}buildColliderGrid(){this.cell=24,this.colliderGrid=new Map;for(const t of this.city.colliders){const e=Math.floor(t.x0/this.cell),i=Math.floor(t.x1/this.cell),n=Math.floor(t.z0/this.cell),s=Math.floor(t.z1/this.cell);for(let a=n;a<=s;a++)for(let o=e;o<=i;o++){const l=o+":"+a;let c=this.colliderGrid.get(l);c||(c=[],this.colliderGrid.set(l,c)),c.push(t)}}}queryColliders(t,e,i=1){const n=Math.floor(t/this.cell),s=Math.floor(e/this.cell),a=Math.max(1,Math.ceil(i/this.cell)),o=[],l=new Set;for(let c=-a;c<=a;c++)for(let h=-a;h<=a;h++){const d=this.colliderGrid.get(n+h+":"+(s+c));if(d)for(const u of d)l.has(u)||(l.add(u),o.push(u))}return o}resolveCircle(t,e,i){const n=this.queryColliders(t,e,i+2);let s=t,a=e;for(let o=0;o<2;o++){let l=!1;for(const c of n)if(s+i>c.x0&&s-i<c.x1&&a+i>c.z0&&a-i<c.z1){const h=s+i-c.x0,d=c.x1-(s-i),u=a+i-c.z0,f=c.z1-(a-i),x=Math.min(h,d,u,f);x===h?s-=h:x===d?s+=d:x===u?a-=u:a+=f,l=!0}if(!l)break}return{x:s,z:a}}isBlocked(t,e,i=.3){for(const n of this.queryColliders(t,e,i+1))if(t>n.x0-i&&t<n.x1+i&&e>n.z0-i&&e<n.z1+i)return!0;return!1}groundAt(t,e){return this.height.heightAt(t,e,this.city)}slopeAt(t,e){return this.height.slopeAt(t,e,this.city)}isWater(t,e){return this.groundAt(t,e)<Ri-.2}raycastStatic(t,e,i=80,n=!0){let s=i;for(const a of this.city.colliders){const o=O0(t,e,a,s);o!==null&&(s=o)}if(n)for(let o=1.25;o<s;o+=1.25){const l=t.x+e.x*o,c=t.y+e.y*o,h=t.z+e.z*o;if(c<this.groundAt(l,h)+.15){s=o;break}}return{dist:s,point:new L(t.x+e.x*s,t.y+e.y*s,t.z+e.z*s)}}update(t,e,i){this.env.update(t,e,i),this.chunks.update(i)}buildMap(){const t=document.createElement("canvas");t.width=$n,t.height=$n;const e=t.getContext("2d"),i=U0,n=this.city.cx-i/2,s=this.city.cz-i/2,a=5,o=$n/i;e.fillStyle="#17435f",e.fillRect(0,0,$n,$n);for(let d=0;d<i;d+=a)for(let u=0;u<i;u+=a){const f=n+u,x=s+d,v=this.height.heightAt(f,x,this.city),g=this.height.biomeAt(f,x,this.city);let m=Vl[g]||Vl.plains,M=1;if(v<Ri-.2){const E=ve((Ri-v)/20,0,1);m=[28+(1-E)*18,70+(1-E)*34,100+(1-E)*32]}else M=.82+ve(v/90,0,1)*.34,M*=.94+((Math.sin(f*.11)+Math.sin(x*.13))*.5+.5)*.12;e.fillStyle=`rgb(${m[0]*M|0},${m[1]*M|0},${m[2]*M|0})`,e.fillRect(u*o,d*o,a*o+.6,a*o+.6)}const l=d=>(d-n)*o,c=d=>(d-s)*o,h=this.city;e.fillStyle="#71736e",e.fillRect(l(h.cx-h.half),c(h.cz-h.half),h.half*2*o,h.half*2*o);for(const d of h.lots){let u="#8c8a80";d.type==="park"||d.type==="plaza"?u="#4c833b":d.type==="parking"?u="#42464b":d.type==="construction"&&(u="#8a744c"),e.fillStyle=u,e.fillRect(l(d.x-d.w/2),c(d.z-d.d/2),d.w*o,d.d*o)}e.strokeStyle="#34383d",e.lineWidth=h.roadWidth*o;for(const d of h.xLines)e.beginPath(),e.moveTo(l(d),c(h.cz-140)),e.lineTo(l(d),c(h.cz+140)),e.stroke();for(const d of h.zLines)e.beginPath(),e.moveTo(l(h.cx-140),c(d)),e.lineTo(l(h.cx+140),c(d)),e.stroke();for(const d of h.buildings)e.fillStyle=d.h>28?"#2e333a":"#4a4e52",e.fillRect(l(d.x-d.baseW/2),c(d.z-d.baseD/2),d.baseW*o,d.baseD*o),d.h>22&&(e.fillStyle="rgba(255,255,255,0.1)",e.fillRect(l(d.x-d.baseW/2)+1,c(d.z-d.baseD/2)+1,Math.max(1,d.baseW*o-2),1));this.mapCanvas=t,this.mapOrigin={x:n,z:s},this.mapScale=o}worldToMap(t,e){return{x:(t-this.mapOrigin.x)*this.mapScale,y:(e-this.mapOrigin.z)*this.mapScale}}biomeLabel(t,e){const i=this.height.biomeAt(t,e,this.city);return{ocean:"OPEN WATER",beach:"SANDY COAST",plains:"GRAND PLAINS",forest:"PINE RIDGE",desert:"RED MESA",snow:"FROSTPEAK",rock:"IRON HILLS",city:"SAN VOXEL"}[i]||"THE WILDS"}locationName(t,e){return Math.max(Math.abs(t-this.city.cx),Math.abs(e-this.city.cz))<205?this.city.districtAt(t,e):this.biomeLabel(t,e)+" COUNTY"}randomRoadSpawn(t){return this.city.randomRoadSpawn(t)}dispose(){for(const t of this._roots)t&&this.scene.remove(t);this.scene.remove(this.env.sun),this.scene.remove(this.env.hemi),this.scene.remove(this.env.ambient),this.scene.remove(this.env.sunTarget),this.env.sun.dispose?.(),this.env.hemi.dispose?.(),this.chunks.chunks.forEach(t=>t.mesh.geometry.dispose()),this.city.group.traverse(t=>{if(t.isMesh){t.geometry.dispose();const e=Array.isArray(t.material)?t.material:[t.material];for(const i of e)if(i){for(const n of["map","emissiveMap"])i[n]&&i[n].dispose();i.dispose()}}}),this.fountainMat&&this.fountainMat.dispose(),this.noiseTex.dispose(),this.env.waterTex.dispose()}}function O0(r,t,e,i){let n=0,s=i;const a=[[r.x,t.x,e.x0,e.x1],[r.y,t.y,e.y0,e.y1],[r.z,t.z,e.z0,e.z1]];for(const[o,l,c,h]of a)if(Math.abs(l)<1e-7){if(o<c||o>h)return null}else{let d=(c-o)/l,u=(h-o)/l;if(d>u){const f=d;d=u,u=f}if(n=Math.max(n,d),s=Math.min(s,u),n>s)return null}return n>=0?n:s>=0?s:null}const We={torso:new $t(.62,.72,.36),head:new $t(.46,.46,.46),hair:new $t(.5,.13,.5),cap:new $t(.52,.15,.54),visor:new $t(.52,.06,.2),arm:new $t(.17,.62,.17),leg:new $t(.24,.72,.26),shoe:new $t(.26,.16,.36),eye:new $t(.07,.07,.03),nose:new $t(.08,.08,.05),badge:new $t(.1,.1,.03),gun:new $t(.12,.46,.13),barrel:new $t(.07,.18,.08)},ji={eye:new Ae({color:1316379}),gun:new Ae({color:2237996}),shoe:new Ae({color:1842980}),badge:new Ae({color:15254602}),cap:new Ae({color:1780039})},Wl=[14262899,12618330,9263675,15778716,11103044,7226671],Xl=[3894949,10828603,4160079,12755258,7031430,14145490,3621197,9394732,2980986],Yl=[3095372,3947582,4930093,2764081,5922662,3491642];function Ws(r){return new Ae({color:r})}let Xs=0;function $c(r={}){const t=new Je,e=r.skin??Wl[Xs*7%Wl.length],i=r.shirt??Xl[Xs*3%Xl.length],n=r.pants??Yl[Xs*5%Yl.length],s=r.hair??2826007;Xs++;const a=Ws(e),o=Ws(i),l=Ws(n),c=Ws(s),h=new Pt(We.torso,o);h.position.y=1.12,h.castShadow=!0,t.add(h);const d=new Pt(We.head,a);d.position.y=1.72,d.castShadow=!0,t.add(d);const u=new Pt(We.hair,c);u.position.y=1.94,u.castShadow=!0,t.add(u);for(const m of[-1,1]){const M=new Pt(We.eye,ji.eye);M.position.set(.11*m,1.75,.235),t.add(M)}const f=new Pt(We.nose,a);if(f.position.set(0,1.66,.25),t.add(f),r.cop){const m=new Pt(We.cap,ji.cap);m.position.y=1.99,m.castShadow=!0,t.add(m);const M=new Pt(We.visor,ji.cap);M.position.set(0,1.94,.31),t.add(M);const E=new Pt(We.badge,ji.badge);E.position.set(.16,1.3,.19),t.add(E)}const x=[],v=[];for(const m of[-1,1]){const M=new Je;M.position.set(.41*m,1.36,0);const E=new Pt(We.arm,m===1&&r.cop?o:a);E.position.y=-.3,E.castShadow=!0,M.add(E),t.add(M),x.push(M);const S=new Je;S.position.set(.17*m,.79,0);const w=new Pt(We.leg,l);w.position.y=-.36,w.castShadow=!0,S.add(w);const A=new Pt(We.shoe,ji.shoe);A.position.set(0,-.74,.06),S.add(A),t.add(S),v.push(S)}let g=null;if(r.armed){const m=new Pt(We.gun,ji.gun);m.position.set(0,-.55,.08),x[1].add(m);const M=new Pt(We.barrel,ji.gun);M.position.set(0,-.18,0),m.add(M),g=new ue,g.position.set(0,-.96,.02),x[1].add(g)}return t.userData.rig={torso:h,head:d,hairMesh:u,arms:x,legs:v,gunTip:g,shirtMat:o,skinMat:a,pantsMat:l,phase:0,aim:0,walk:0},t.castShadow=!0,t}function $a(r,t,e,i={}){const n=r.userData.rig;if(!n)return;const s=i.aiming?1:0;n.aim+=(s-n.aim)*Math.min(1,t*12);const a=e>.3;n.walk+=t*(a?Math.max(1.6,e*1.1):0);const o=a?Math.min(.75,e*.085):0,l=Math.sin(n.walk*2.2)*o,c=Math.sin(n.walk*2.2+Math.PI)*o;n.legs[0].rotation.x=l,n.legs[1].rotation.x=c,n.arms[0].rotation.x=-l*.85+n.aim*-.4,n.arms[1].rotation.x=-c*.85-n.aim*1.48,n.arms[1].rotation.z=n.aim*-.08,n.arms[0].rotation.z=n.aim*.18;const h=a?Math.abs(Math.sin(n.walk*2.2))*.045:0;r.position.y=(i.baseY??0)+h,i.dead&&(r.rotation.z=Math.PI/2*(i.deadSign||1),r.position.y=(i.baseY??0)+.22,n.arms[0].rotation.x=-.4,n.arms[1].rotation.x=.5)}function z0(r){const t=new Je,e={health:6479994,armor:5945599,ammo:16762668,cash:8115835},i=new Ae({color:e[r]||16777215,emissive:e[r]||16777215,emissiveIntensity:.4}),n=new Ae({color:1778217});if(r==="health"){const s=new Pt(new $t(.65,.22,.18),i),a=new Pt(new $t(.22,.65,.18),i);s.position.y=.8,a.position.y=.8,t.add(s,a);const o=new Pt(new $t(1,.14,1),n);o.position.y=.12,t.add(o)}else if(r==="armor"){const s=new Pt(new $t(.7,.75,.16),i);s.position.y=.86;const a=new Pt(new $t(.7,.7,.1),n);a.position.set(0,.49,0),t.add(s,a);const o=new Pt(new $t(1,.14,1),n);o.position.y=.12,t.add(o)}else if(r==="ammo"){const s=new Pt(new $t(.72,.5,.5),i);s.position.y=.55;const a=new Pt(new $t(.78,.12,.56),n);a.position.y=.78,t.add(s,a)}else{const s=new Pt(new $t(.7,.65,.5),i);s.position.y=.58;const a=new Pt(new $t(.15,.7,.54),n);a.position.y=.6,t.add(s,a)}return t.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),t}const dr={sedan:{len:4.2,width:1.9,bodyH:.55,cabLen:1.75,cabZ:-.25,cabH:.52,roofH:.12},coupe:{len:3.85,width:1.86,bodyH:.5,cabLen:1.5,cabZ:-.3,cabH:.45,roofH:.1},van:{len:4.75,width:2,bodyH:.72,cabLen:2.7,cabZ:-.25,cabH:.95,roofH:.12}},Qr=new Map;function B0(r,t=!1){const e=dr[r]||dr.sedan,i=new nn(!1),n=new nn(!1),s=e.width/2,a=e.len/2,o=.36,l=ht(16777215),c=ht(14606046),h=ht(1780277),d=ht(3493983),u=ht(1514014),f=ht(2830132),x=ht(11450042),v=ht(16771494),g=ht(14170671);i.box(0,o,0,e.width,e.bodyH,e.len,l,2),i.box(0,o+e.bodyH,a-.7,e.width*.94,.12,1.25,c,2),i.box(0,o+e.bodyH,-a+.65,e.width*.94,.12,1,c,2);const m=o+e.bodyH;i.box(0,m+e.cabH,e.cabZ,e.width*.86,e.roofH,e.cabLen*.92,l,2),r==="van"&&i.box(0,m+e.cabH+e.roofH,e.cabZ,e.width*.7,.08,e.cabLen*.6,f,2),n.box(0,m+.06,e.cabZ,e.width*.84,e.cabH-.07,e.cabLen,h,2),n.box(0,m+.07,e.cabZ+e.cabLen/2-.06,e.width*.72,e.cabH-.1,.06,d,2),n.box(0,o+.08,a+.06,e.width*.98,.24,.16,f,2),n.box(0,o+.08,-a-.06,e.width*.98,.24,.16,f,2),n.box(0,o+.28,a+.08,e.width*.45,.18,.06,u,1);for(const S of[-1,1])n.box(S*e.width*.34,o+.3,a+.09,.34,.17,.05,v,1),n.box(S*e.width*.34,o+.3,-a-.09,.34,.17,.05,g,1);n.box(s+.08,m+.2,e.cabZ+e.cabLen/2-.1,.18,.16,.24,f,1),n.box(-s-.08,m+.2,e.cabZ+e.cabLen/2-.1,.18,.16,.24,f,1);const M=.33,E=s-.03;for(const S of[-1,1])for(const w of[1.3,-1.3])n.box(S*E,M,w,.3,.66,.78,u,1),n.box(S*(E+.02),M,w,.08,.34,.36,x,1);return t&&(n.box(s+.01,o+.4,0,.02,.3,1.5,u,1),n.box(-s-.01,o+.4,0,.02,.3,1.5,u,1),n.box(0,o+e.bodyH+.03,e.cabZ,e.width*.5,.06,.8,u,1)),{body:i.build(),detail:n.build(),bodyMat:null}}function ql(r,t){const e=r+(t?":p":"");return Qr.has(e)||Qr.set(e,B0(r,t)),Qr.get(e)}const k0=new Ae({vertexColors:!0}),H0=new Ae({color:1842462});let G0=0;class V0{constructor(t,e={}){this.game=t,this.id=G0++,this.type=e.type||"sedan",this.police=!!e.police,this.color=e.color??10825519;const i=dr[this.type]||dr.sedan;this.dims={w:i.width,l:i.len},this.pos=new L(e.x||0,0,e.z||0),this.yaw=e.yaw||0,this.speed=0,this.steer=0,this.health=e.health??100,this.maxHealth=100,this.driver=e.driver??null,this.destroyed=!1,this.ai=null,this.pitch=0,this.roll=0,this.stuckTime=0,this.smokeTimer=0,this.explosionTimer=-1,this.aiType=e.aiType||"traffic",this.colorName=e.colorName;const n=ql(this.type,this.police);if(this.bodyMat=new Ae({vertexColors:!0,color:this.color}),this.group=new Je,this.bodyMesh=new Pt(n.body,this.bodyMat),this.bodyMesh.castShadow=!0,this.bodyMesh.receiveShadow=!0,this.group.add(this.bodyMesh),this.detailMesh=new Pt(n.detail,k0),this.detailMesh.castShadow=!0,this.group.add(this.detailMesh),this.police){this.lightRed=new Hi({color:5573387}),this.lightBlue=new Hi({color:663125});const s=new Pt(new $t(.9,.12,.3),new Ae({color:1382428}));s.position.set(0,1.62,-.2),this.group.add(s);const a=new Pt(new $t(.4,.16,.26),this.lightRed);a.position.set(-.25,1.73,-.2);const o=new Pt(new $t(.4,.16,.26),this.lightBlue);o.position.set(.25,1.73,-.2),this.group.add(a,o),this.lightbar={red:a,blue:o,base:s}}this.syncMesh(0),t.scene.add(this.group),this.driver==="ai"&&(this.police?this.initPoliceAI():this.initTrafficAI(t)),this.y=t.world.groundAt(this.pos.x,this.pos.z),this.syncMesh(0)}get forwardX(){return Math.sin(this.yaw)}get forwardZ(){return Math.cos(this.yaw)}syncMesh(){const t=this.game.world,e=t.groundAt(this.pos.x,this.pos.z);this.pos.y+=(e-this.pos.y)*.35,Math.abs(this.pos.y-e)>2&&(this.pos.y=e);const i=this.pos.x+Math.sin(this.yaw)*1.4,n=this.pos.z+Math.cos(this.yaw)*1.4,s=this.pos.x-Math.sin(this.yaw)*1.4,a=this.pos.z-Math.cos(this.yaw)*1.4,o=t.groundAt(i,n),l=t.groundAt(s,a);this.pitch=-Math.atan2(o-l,2.8);const c=this.pos.x+Math.cos(this.yaw)*.9,h=this.pos.z-Math.sin(this.yaw)*.9,d=this.pos.x-Math.cos(this.yaw)*.9,u=this.pos.z+Math.sin(this.yaw)*.9,f=t.groundAt(c,h),x=t.groundAt(d,u),v=Math.atan2(f-x,1.8);this.roll+=(v-this.roll)*.2,this.group.position.set(this.pos.x,this.pos.y+.02,this.pos.z),this.group.rotation.set(this.pitch,this.yaw,this.roll,"YXZ")}initTrafficAI(t){const e=t.world.city,i=t.trafficRng,n=Kl(e.xLines,this.pos.x),s=Kl(e.zLines,this.pos.z);let a=0,o=0;Math.abs(Math.sin(this.yaw))>.7?a=Math.sin(this.yaw)>0?1:-1:o=Math.cos(this.yaw)>0?1:-1,this.ai={type:"traffic",ix:n,iz:s,dirX:a,dirZ:o,target:null,cruise:8.5+(i?i():Math.random())*4.5,lane:2.1,reverseTimer:0,blocked:0},this.pickTrafficTarget(t)}pickTrafficTarget(t){const e=t.world.city,i=this.ai;let n=i.ix,s=i.iz;i.dirX!==0&&(n=ve(n+i.dirX,0,e.xLines.length-1)),i.dirZ!==0&&(s=ve(s+i.dirZ,0,e.zLines.length-1)),i.targetIx=n,i.targetIz=s;const a=i.dirX,l=-i.dirZ,c=a;i.target={x:e.xLines[n]+l*i.lane,z:e.zLines[s]+c*i.lane}}advanceTrafficTarget(t){const e=t.world.city,i=this.ai;i.ix=i.targetIx,i.iz=i.targetIz;const n=[];if(i.dirX!==0?(i.ix+i.dirX>=0&&i.ix+i.dirX<e.xLines.length&&n.push({x:i.dirX,z:0,w:.55}),i.iz+1<e.zLines.length&&n.push({x:0,z:1,w:.225}),i.iz-1>=0&&n.push({x:0,z:-1,w:.225})):(i.iz+i.dirZ>=0&&i.iz+i.dirZ<e.zLines.length&&n.push({x:0,z:i.dirZ,w:.55}),i.ix+1<e.xLines.length&&n.push({x:1,z:0,w:.225}),i.ix-1>=0&&n.push({x:-1,z:0,w:.225})),!n.length)i.dirX*=-1,i.dirZ*=-1;else{let s=Math.random(),a=n[0];for(const o of n){if(s<o.w){a=o;break}s-=o.w}i.dirX=a.x,i.dirZ=a.z}this.pickTrafficTarget(t)}initPoliceAI(){this.ai={type:"police",stuck:0,reverse:0}}update(t,e){if(this.destroyed)return;const i=e.player;let n=0,s=0,a=!1;if(this.driver==="player"){const o=e.input;n=o.forward,s=-o.strafe*.9,a=o.jump}else if(this.driver==="ai")if(this.ai?.type==="traffic"){const o=this.ai;o.target||this.pickTrafficTarget(e);const l=o.target.x-this.pos.x,c=o.target.z-this.pos.z;Math.hypot(l,c)<3.2&&(o.reverseTimer>0?o.reverseTimer-=t:this.advanceTrafficTarget(e));const d=Math.atan2(l,c);let u=as(d-this.yaw);s=ve(u*2.2,-1,1),n=.46;let f=!1;const x=Math.sin(this.yaw),v=Math.cos(this.yaw),g=(m,M,E)=>{const S=m-this.pos.x,w=M-this.pos.z;return S*S+w*w>90?!1:(S*x+w*v)/Math.max(.001,Math.hypot(S,w))>.65};i&&i.mesh.visible&&g(i.pos.x,i.pos.z)&&(f=!0);for(const m of e.vehicles.list)if(!(m===this||m.destroyed)&&g(m.pos.x,m.pos.z)){f=!0;break}f&&(n=-.35),Math.abs(this.speed)<1.2?(o.blocked+=t,o.blocked>2.5&&(o.reverseTimer=1.2,o.blocked=0,o.dirX*=-1,o.dirZ*=-1,this.pickTrafficTarget(e))):o.blocked=0,o.reverseTimer>0&&(n=-1,s*=-.5)}else{const o=this.ai,l=i.pos,c=l.x-this.pos.x,h=l.z-this.pos.z,d=Math.hypot(c,h),u=Math.atan2(c,h),f=as(u-this.yaw);s=ve(f*2.4,-1,1),d>7?n=1:n=.1,o.reverse>0&&(o.reverse-=t,n=-1,s*=-1),Math.abs(this.speed)<1.4?o.stuck+=t:o.stuck=0,o.stuck>1.6&&(o.reverse=1.1,o.stuck=0),d<22&&i.mode==="vehicle"&&Math.random()<t*.6&&e.spawnCopFromCar(this)}if(this.drive(t,n,s,a,e),this.syncMesh(t),this.police){const o=e.time,c=this.driver==="ai"&&e.player.wanted>0?Math.sin(o*12+this.id)>0:!1;this.lightRed.color.setHex(c?16720418:5573387),this.lightBlue.color.setHex(c?663125:2258943)}this.health<38&&(this.smokeTimer-=t,this.smokeTimer<=0&&(this.smokeTimer=this.health<15?.12:.28,e.particles.smoke(new L(this.pos.x,this.pos.y+1,this.pos.z),this.health<15?3881787:9145227,this.health<15?2:1,this.health<15?1.2:.9)))}drive(t,e,i,n,s){const a=this.driver==="player",o=ve(e,-1,1),l=this.type==="van"?16:this.police?22:20,c=this.type==="van"?29:this.police?35:33;o>.03?this.speed+=l*o*t:o<-.03?this.speed>.4?this.speed+=32*o*t:this.speed+=l*.55*o*t:this.speed-=this.speed*.7*t,n&&(this.speed*=Math.max(0,1-3.2*t),a&&Math.abs(this.speed)>12&&s.particles.smoke(new L(this.pos.x,this.pos.y+.3,this.pos.z),12566463,1,1.2)),this.speed*=Math.max(0,1-.22*t),this.speed=ve(this.speed,-12,c);const h=ve(i,-1,1);this.steer+=(h-this.steer)*Math.min(1,t*9);const d=.58/(1+Math.abs(this.speed)*.085),u=2.7;if(Math.abs(this.speed)>.15){const S=this.speed/u*Math.tan(this.steer*d);this.yaw+=S*t*(this.speed<0?-1:1)}const f=Math.sin(this.yaw),x=Math.cos(this.yaw);let v=this.pos.x+f*this.speed*t,g=this.pos.z+x*this.speed*t,m=!1;const M=s.world;for(const S of[-1.35,0,1.35]){const w=v+f*S,A=g+x*S,_=M.resolveCircle(w,A,.92);(Math.abs(_.x-w)>.001||Math.abs(_.z-A)>.001)&&(v+=_.x-w,g+=_.z-A,m=!0)}if(M.groundAt(v,g)<-.55&&(this.speed*=.82,a&&s.notify("TOO DEEP","Your car will not swim. Find a road.","bad",1600,!0)),m){const S=Math.abs(this.speed);S>4&&(s.particles.sparks(new L(v+f*1.5,this.pos.y+.8,g+x*1.5)),s.audio.crash(S/12),this.health-=S*.5,a&&s.player.takeDamage(S*.28,s,!0)),this.speed*=-.22}this.pos.x=v,this.pos.z=g,Math.abs(this.speed)<.05&&(this.speed=0),this.health<=0&&this.explode(s)}explode(t){if(this.destroyed)return;this.destroyed=!0;const e=new L(this.pos.x,this.pos.y+.8,this.pos.z);t.particles.explosion(e),t.audio.explosion(),this.driver==="player"?(t.player.takeDamage(75,t),t.exitVehicle(!0)):this.game.player.pos.distanceTo(e)<9&&t.player.takeDamage(40,t),t.missions?.onVehicleDestroyed(this),t.vehicles.remove(this),t.cameraShake=Math.max(t.cameraShake,.8);const i=new Pt(ql(this.type,this.police).body,H0);i.position.copy(this.group.position),i.rotation.copy(this.group.rotation),i.castShadow=!0,t.scene.add(i),setTimeout(()=>{t.scene.remove(i)},2e4),this.lightbar}enter(){this.driver="player",this.ai=null,this.speed=0,this.group.visible=!0}exit(){this.driver=null,this.ai=null}damage(t,e){this.destroyed||(this.health-=t,this.health<=0&&this.explode(e))}}class W0{constructor(t){this.game=t,this.list=[],this.trafficRng=we(t.seed,"traffic"),this.spawnTimer=0,this.policeTimer=0}add(t){return this.list.push(t),t}remove(t){const e=this.list.indexOf(t);e>=0&&this.list.splice(e,1),this.game.scene.remove(t.group),t.bodyMat.dispose(),t.lightRed&&(t.lightRed.dispose(),t.lightBlue.dispose())}spawn(t){const e=new V0(this.game,t);return this.add(e),e}populate(){const t=this.game.world.city,e=this.trafficRng;for(const n of t.parkedSpots){if(e()<.35)continue;const s=e()<.2?"van":e()<.4?"coupe":"sedan";this.spawn({x:n.x,z:n.z,yaw:n.yaw+(e()<.5?0:Math.PI),color:n.color,type:s,driver:null})}for(let n=0;n<9;n++){const s=t.randomRoadSpawn(e);this.spawn({x:s.x,z:s.z,yaw:s.yaw,color:jr(e),type:e()<.18?"van":e()<.32?"coupe":"sedan",driver:"ai",aiType:"traffic"})}const i=t.spawn;for(let n=0;n<3;n++){const s=i.x+8+n*3.1,a=i.z-14+n*1.4;this.game.world.isBlocked(s,a,1.2)||this.spawn({x:s,z:a,yaw:Math.PI/2,color:jr(e),type:n===0?"coupe":"sedan",driver:null})}}update(t){const e=this.game;for(const i of[...this.list])i.update(t,e);if(this.spawnTimer-=t,this.spawnTimer<=0){this.spawnTimer=1.5;let i=0;for(const n of this.list)n.driver==="ai"&&!n.police&&!n.destroyed&&i++;if(i<10){const n=e.player.pos;for(let s=0;s<8;s++){const a=e.world.city.randomRoadSpawn(this.trafficRng),o=Math.hypot(a.x-n.x,a.z-n.z);if(o>70&&o<210){this.spawn({x:a.x,z:a.z,yaw:a.yaw,color:jr(this.trafficRng),type:this.trafficRng()<.2?"van":this.trafficRng()<.35?"coupe":"sedan",driver:"ai",aiType:"traffic"});break}}}for(const n of[...this.list])n.driver==="ai"&&!n.police&&Math.hypot(n.pos.x-p.x,n.pos.z-p.z)>320&&this.remove(n)}}nearest(t,e=4.5){let i=null,n=e;for(const s of this.list){if(s.destroyed)continue;const a=Math.hypot(s.pos.x-t.x,s.pos.z-t.z);a<n&&(n=a,i=s)}return i}raycast(t,e,i=120){let n=null;for(const s of this.list){if(s.destroyed)continue;const a=Math.cos(s.yaw),o=Math.sin(s.yaw),l=t.x-s.pos.x,c=t.z-s.pos.z,h=l*a-c*o,d=l*o+c*a,u=t.y-(s.pos.y+.86),f=e.x*a-e.z*o,x=e.x*o+e.z*a,v=s.dims.w*.5+.08,g=s.dims.l*.5+.08,m=X0(h,u,d,f,e.y,x,-v,v,-.9,1,-g,g,i);m!==null&&(!n||m<n.dist)&&(n={vehicle:s,dist:m,point:t.clone().addScaledVector(e,m)})}return n}spawnPoliceCar(t,e=Math.random){const i=this.game.world;for(let n=0;n<25;n++){const s=i.city.randomRoadSpawn(e),a=Math.hypot(s.x-t.x,s.z-t.z);if(a>55&&a<130)return this.spawn({x:s.x,z:s.z,yaw:s.yaw,type:"sedan",police:!0,color:15330543,driver:"ai",aiType:"police"})}return null}}function X0(r,t,e,i,n,s,a,o,l,c,h,d,u){let f=0,x=u;const v=[[r,i,a,o],[t,n,l,c],[e,s,h,d]];for(const[g,m,M,E]of v)if(Math.abs(m)<1e-7){if(g<M||g>E)return null}else{let S=(M-g)/m,w=(E-g)/m;if(S>w){const A=S;S=w,w=A}if(f=Math.max(f,S),x=Math.min(x,w),f>x)return null}return f>=0?f:x>=0?x:null}function Kl(r,t){let e=0,i=1/0;for(let n=0;n<r.length;n++){const s=Math.abs(r[n]-t);s<i&&(i=s,e=n)}return e}function as(r){for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;return r}function jr(r=Math.random){const t=[14211282,2895928,9382956,3038346,4094538,13214522,7040888,10443308,14476520,4930923,8007503,12568268];return t[Math.floor(r()*t.length)]}class Y0{constructor(t,e){this.game=t,this.pos=new L(e.x,t.world.groundAt(e.x,e.z),e.z),this.vel=new L,this.yaw=e.yaw,this.cameraYaw=e.yaw,this.cameraPitch=-.13,this.cameraZoom=1,this.mode="foot",this.vehicle=null,this.onGround=!0,this.swimming=!1,this.stepHeight=.65,this.hp=100,this.maxHp=100,this.armor=0,this.cash=750,this.wanted=0,this.heat=0,this.lastCrime=-999,this.ammo=12,this.magSize=12,this.reserve=96,this.weaponName="PISTOL",this.fireCooldown=0,this.reloadTimer=0,this.aiming=!1,this.aimBlend=0,this.lastDamage=-999,this.invuln=-1,this.dead=!1,this.sprinting=!1,this.speed=0,this.walkPhase=0,this.shotFlash=0,this.mesh=$c({armed:!0,shirt:2962239,pants:3883856,skin:14196847,hair:2365971}),this.mesh.userData.rig.shirtMat.color.setHex(2896445),this.mesh.position.copy(this.pos),this.mesh.rotation.y=this.yaw,t.scene.add(this.mesh),this.muzzle=new L}processLook(t,e){this.mode==="vehicle"?(Math.abs(t.x)>.01||Math.abs(t.y)>.01)&&(this.cameraYaw-=t.x*.0026*.9,this.cameraPitch-=t.y*.0021,this.lookHold=1.1):(this.cameraYaw-=t.x*.0026,this.cameraPitch-=t.y*.0021),this.cameraPitch=ve(this.cameraPitch,-1.05,.92),e.cameraZoomDelta&&(this.cameraZoom=ve(this.cameraZoom+e.cameraZoomDelta*.1,.55,1.7),e.cameraZoomDelta=0)}update(t,e,i){if(this.aiming=i.aim&&this.mode==="foot",this.aimBlend+=((this.aiming?1:0)-this.aimBlend)*Math.min(1,t*12),this.fireCooldown=Math.max(0,this.fireCooldown-t),this.shotFlash=Math.max(0,this.shotFlash-t),this.invuln>0&&(this.invuln-=t),this.mode==="vehicle"&&this.vehicle){if(this.pos.copy(this.vehicle.pos),this.mesh.visible=!1,this.speed=Math.abs(this.vehicle.speed),this.sprinting=!1,this.lookHold>0)this.lookHold-=t;else{const C=as(this.vehicle.yaw-this.cameraYaw);this.aiming||(this.cameraYaw+=C*Math.min(1,t*2))}this.updateReload(t,e),this.updateHealth(t,e);return}this.mesh.visible=!0;const n=i.forward,s=i.strafe,a=Math.min(1,Math.hypot(n,s)),o=this.cameraYaw,l=Math.sin(o),c=Math.cos(o),h=-Math.cos(o),d=Math.sin(o);let u=l*n+h*s,f=c*n+d*s;const x=Math.hypot(u,f);x>1e-4&&(u/=x,f/=x);const v=i.sprinting&&a>.3&&!this.aiming;this.sprinting=v;let g=this.aiming?3.2:v?9.2:5.6;if(this.swimming&&(g=3.2),g*=a,this.invuln>0&&(g*=.6),a>.02){this.vel.x+=(u*g-this.vel.x)*Math.min(1,t*(this.onGround?12:3.5)),this.vel.z+=(f*g-this.vel.z)*Math.min(1,t*(this.onGround?12:3.5));const C=this.aiming?this.cameraYaw:Math.atan2(u,f);this.yaw+=as(C-this.yaw)*Math.min(1,t*14)}else{const C=Math.max(0,1-t*(this.onGround?12:1.4));this.vel.x*=C,this.vel.z*=C}this.speed=Math.hypot(this.vel.x,this.vel.z);const m=this.pos.x,M=this.pos.z,E=e.world.groundAt(m,M);let S=this.pos.x+this.vel.x*t,w=this.pos.z+this.vel.z*t;const A=e.world.groundAt(S,w);!this.swimming&&A-E>1.1&&this.pos.y<A-.4&&(S=m,w=M);const _=e.world.resolveCircle(S,w,.42);this.pos.x=_.x,this.pos.z=_.z;const T=e.world.groundAt(this.pos.x,this.pos.z);this.swimming=T<-1.1&&this.pos.y<.55;const N=T<-.55;if(this.swimming){this.onGround=!1,this.vel.y=0;const C=Math.sin(e.time*3.2)*.06;this.pos.y+=(.25+C-this.pos.y)*Math.min(1,t*6),i.jump&&(this.pos.y+=t*3.2),this.pos.y<-.8&&this.takeDamage(6*t,e,!0)}else i.jump&&this.onGround&&(this.vel.y=10.4,this.onGround=!1),this.vel.y-=27*t,this.pos.y+=this.vel.y*t,this.pos.y<=T+.02?(this.pos.y=T+.02,this.vel.y=0,this.onGround=!0):this.onGround=!1,N&&this.pos.y<.35&&(this.vel.x*=.86,this.vel.z*=.86);this.mesh.position.set(this.pos.x,this.pos.y,this.pos.z),this.mesh.rotation.y=this.yaw,$a(this.mesh,t,this.speed,{aiming:this.aiming,baseY:this.pos.y}),this.updateReload(t,e),this.updateHealth(t,e)}updateReload(t,e){if(this.reloadTimer>0&&(this.reloadTimer-=t,this.reloadTimer<=0)){const i=this.magSize-this.ammo,n=Math.min(i,this.reserve);this.ammo+=n,this.reserve-=n,e.audio.reload()}}updateHealth(t,e){this.hp<this.maxHp&&e.time-this.lastDamage>5.5&&(this.hp=Math.min(this.maxHp,this.hp+2.2*t)),this.hp<=0&&!this.dead&&e.killPlayer()}reload(t){this.reloadTimer>0||this.ammo>=this.magSize||this.reserve<=0||(this.reloadTimer=1.15,t.audio.reload(),t.notify("RELOADING","Pistol magazine swap","",900,!0))}canShoot(){return this.mode==="foot"&&!this.dead&&this.reloadTimer<=0&&this.ammo>0&&this.fireCooldown<=0}consumeShot(t){this.ammo--,this.fireCooldown=this.aiming?.2:.26,this.shotFlash=.06,t.audio.gunshot(),this.mesh.userData.rig.gunTip.getWorldPosition(this.muzzle),t.particles.muzzle(this.muzzle),t.cameraShake=Math.max(t.cameraShake,.18),this.ammo<=0&&this.reserve>0&&this.reload(t)}takeDamage(t,e,i=!1){if(this.dead||this.invuln>0)return;let n=t;if(!i&&this.armor>0){const s=Math.min(this.armor,n*.75);this.armor-=s,n-=s}this.hp-=n,this.lastDamage=e.time,e.hud.damageFlash(),e.audio.hit(),this.hp<=0&&!this.dead&&e.killPlayer()}addCash(t,e){this.cash+=t,e.hud.popCash(t)}heal(t,e=!1){e?this.armor=Math.min(100,this.armor+t):this.hp=Math.min(this.maxHp,this.hp+t)}enterVehicle(t,e){this.mode="vehicle",this.vehicle=t,this.mesh.visible=!1,this.cameraYaw=t.yaw,this.cameraPitch=-.12,this.cameraZoom=1,this.pos.copy(t.pos),t.enter(),e.hud.setInVehicle(!0),e.audio.beep(330,.08,.1)}exitVehicle(t){if(!this.vehicle)return;const e=this.vehicle,i=new L(Math.cos(e.yaw),0,-Math.sin(e.yaw));let n=e.pos.x+i.x*2.2,s=e.pos.z+i.z*2.2;(t.world.isBlocked(n,s,.6)||t.world.isWater(n,s))&&(n=e.pos.x-i.x*2.2,s=e.pos.z-i.z*2.2);const a=t.world.resolveCircle(n,s,.42);this.pos.set(a.x,t.world.groundAt(a.x,a.z)+.02,a.z),this.vel.set(0,0,0),this.yaw=e.yaw+Math.PI/2,this.cameraYaw=this.yaw,this.mode="foot",this.vehicle=null,this.mesh.visible=!0,this.mesh.position.copy(this.pos),e.exit(),t.hud.setInVehicle(!1),t.audio.beep(240,.08,.1)}}class q0{constructor(t,e){this.game=t,this.camera=e,this.pos=new L,this.lookDir=new L,this.target=new L,this.initialized=!1,this.fov=64,this._tmp=new L,this._desired=new L,this._shake=new L}update(t,e){const i=e,n=Math.cos(i.cameraPitch);this.lookDir.set(Math.sin(i.cameraYaw)*n,Math.sin(i.cameraPitch),Math.cos(i.cameraYaw)*n).normalize();const s=this._tmp.set(-Math.cos(i.cameraYaw),0,Math.sin(i.cameraYaw)),a=i.aiming&&i.mode==="foot",o=a?.72:i.mode==="vehicle"?0:.5,c=(i.mode==="vehicle"?7.8+Math.abs(i.vehicle?i.vehicle.speed:0)*.075:a?2.15:4.7)*i.cameraZoom,h=i.mode==="vehicle"?1.65:1.55;if(this.target.set(i.pos.x,i.pos.y+h,i.pos.z),this.target.addScaledVector(s,o),this._desired.copy(this.target).addScaledVector(this.lookDir,-c),this.game.world){const x=this._desired.clone().sub(this.target),v=x.length();if(v>.01){x.normalize();const g=this.game.world.raycastStatic(this.target,x,v,!0),m=Math.max(1,g.dist-.35);g.dist<v&&this._desired.copy(this.target).addScaledVector(x,m)}}if(!this.initialized)this.pos.copy(this._desired),this.initialized=!0;else{const x=1-Math.exp(-t*(i.mode==="vehicle"?10:15));this.pos.lerp(this._desired,x)}const d=this.game.cameraShake;if(d>.001){const x=d*.28;this._shake.set((Math.random()-.5)*x,(Math.random()-.5)*x,(Math.random()-.5)*x),this.pos.add(this._shake),this.game.cameraShake=Math.max(0,d-t*2.4)}this.camera.position.copy(this.pos);const u=this._tmp.copy(this.target).addScaledVector(this.lookDir,12);this.camera.lookAt(u);const f=i.mode==="vehicle"?70:a?52:64;this.fov+=(f-this.fov)*Math.min(1,t*8),Math.abs(this.camera.fov-this.fov)>.01&&(this.camera.fov=this.fov,this.camera.updateProjectionMatrix())}}let K0=0;class ta{constructor(t,e={}){this.game=t,this.id=K0++,this.isCop=!!e.isCop,this.pos=new L(e.x,t.world.groundAt(e.x,e.z),e.z),this.yaw=e.yaw??Math.random()*Math.PI*2,this.hp=100,this.dead=!1,this.deathTimer=0,this.state=this.isCop?"chase":"wander",this.speed=0,this.target=null,this.walkTimer=0,this.shootTimer=Math.random()*1.2,this.stuckTime=0,this.alertTimer=0,this.threat=new L,this.phase=0,this.mesh=$c({armed:this.isCop,cop:this.isCop,shirt:this.isCop?2767713:void 0,pants:this.isCop?2107965:void 0,skin:e.skin,hair:e.hair,shirtColor:e.shirt}),!this.isCop&&e.shirtColor!=null&&this.mesh.userData.rig.shirtMat.color.setHex(e.shirtColor),this.mesh.position.copy(this.pos),this.mesh.rotation.y=this.yaw,t.scene.add(this.mesh),this.pickTarget(t)}get rig(){return this.mesh.userData.rig}pickTarget(t){const e=t.world.city;if(this.isCop){this.target={x:t.player.pos.x,z:t.player.pos.z};return}let i=null,n=1/0;for(let s=0;s<16;s++){const a=e.walkPoints[Math.floor(Math.random()*e.walkPoints.length)];if(!a)continue;const o=Math.hypot(a.x-this.pos.x,a.z-this.pos.z);o>8&&o<75&&o<n&&(n=o,i=a)}this.target=i||{x:this.pos.x+10,z:this.pos.z}}flee(t,e){const i=this.pos.x-t.x,n=this.pos.z-t.z,s=Math.max(1,Math.hypot(i,n));this.state="flee",this.alertTimer=4+Math.random()*3,this.target={x:this.pos.x+i/s*32+(Math.random()-.5)*10,z:this.pos.z+n/s*32+(Math.random()-.5)*10}}update(t,e){if(this.dead){this.deathTimer+=t,this.deathTimer<1.2&&$a(this.mesh,t,0,{dead:!0,baseY:e.world.groundAt(this.pos.x,this.pos.z),deadSign:1});return}const i=e.player,n=Math.hypot(i.pos.x-this.pos.x,i.pos.z-this.pos.z);this.isCop?e.player.wanted<=0?(this.state="leave",this.target||this.pickTarget(e)):this.state="chase":this.alertTimer>0?(this.alertTimer-=t,this.alertTimer<=0&&(this.state="wander",this.pickTarget(e))):i.wanted>=2&&n<26&&this.state!=="flee"&&this.flee(i.pos,e);let s=0;if(this.state==="flee")s=4.8;else if(this.state==="chase"&&this.isCop){const d=i.pos.x-this.pos.x,u=i.pos.z-this.pos.z,f=Math.hypot(d,u);f>13?(this.target={x:i.pos.x,z:i.pos.z},s=4.9):(s=.5,this.target={x:i.pos.x,z:i.pos.z},this.tryShoot(t,e,f)),n>100&&(this.state="leave")}else this.state==="leave"?(s=2.4,this.target||this.pickTarget(e)):(s=1.5+this.id%3*.2,this.target||this.pickTarget(e));let a=0,o=0;this.target&&(a=this.target.x-this.pos.x,o=this.target.z-this.pos.z,Math.hypot(a,o)<1.4&&!this.isCop&&(this.pickTarget(e),this.walkTimer=Math.random()*3));const l=Math.hypot(a,o);if(l>.01){a/=l,o/=l;const d=Math.atan2(a,o);this.yaw+=as(d-this.yaw)*Math.min(1,t*8),this.pos.x+=a*s*t,this.pos.z+=o*s*t,this.speed=s}else this.speed=0;const c=e.world.resolveCircle(this.pos.x,this.pos.z,.36);Math.abs(c.x-this.pos.x)>.001||Math.abs(c.z-this.pos.z)>.001?(this.pos.x=c.x,this.pos.z=c.z,this.stuckTime+=t,this.stuckTime>.8&&(this.pickTarget(e),this.stuckTime=0)):this.stuckTime=0,this.pos.y=e.world.groundAt(this.pos.x,this.pos.z)+.02,this.mesh.position.set(this.pos.x,this.pos.y,this.pos.z),this.mesh.rotation.y=this.yaw;const h=this.isCop&&this.state==="chase"&&this.shootTimer<.5;$a(this.mesh,t,this.speed,{aiming:h,baseY:this.pos.y}),this.isCop&&e.player.wanted<=0&&n>90&&this.remove(e)}tryShoot(t,e,i){if(this.state!=="chase"||(this.shootTimer-=t,this.shootTimer>0))return;this.shootTimer=1.4+Math.random()*.7;const n=e.player,s=new L(this.pos.x,this.pos.y+1.42,this.pos.z),a=new L(n.pos.x,n.pos.y+1.2,n.pos.z),o=a.clone().sub(s),l=o.length();if(o.normalize(),e.world.raycastStatic(s,o,l,!0).dist<l-1)return;this.rig.gunTip.getWorldPosition(s),e.particles.muzzle(s),e.audio.copShot();const h=ve(.72-l/80,.28,.7);if(Math.random()<h)e.particles.tracer(s,a,16756896),n.takeDamage(9+Math.random()*7,e);else{const d=a.clone().add(new L((Math.random()-.5)*3,Math.random()*2-.5,(Math.random()-.5)*3));e.particles.tracer(s,d,16756896)}}hit(t,e){return this.dead?!1:(this.hp-=t,this.hp<=0?(this.die(e),!0):(this.flee(e.player.pos,e),this.isCop&&(this.shootTimer=Math.min(this.shootTimer,.4)),!1))}die(t){if(this.dead=!0,this.state="dead",this.deathTimer=0,this.speed=0,t.particles.blood(new L(this.pos.x,this.pos.y+1,this.pos.z)),!this.isCop){const e=5+Math.floor(Math.random()*35);t.spawnCashPickup(this.pos.x,this.pos.z,e)}this.mesh.userData.rig.legs.forEach(e=>{e.rotation.x=0}),t.missions?.onPedKilled(this)}remove(t){t.scene.remove(this.mesh),this.removed=!0}}class $0{constructor(t){this.game=t,this.list=[],this.rng=we(t.seed,"peds"),this.spawnTimer=0,this.copTimer=0,this.copSpawnCooldown=0}spawnCivilian(t){const e=this.game.world.city;let i=t;if(!i)for(let s=0;s<20;s++){const a=e.walkPoints[Math.floor(this.rng()*e.walkPoints.length)],o=Math.hypot(a.x-this.game.player.pos.x,a.z-this.game.player.pos.z);if(o>18&&o<130){i=a;break}}if(!i)return null;const n=new ta(this.game,{x:i.x,z:i.z,yaw:this.rng()*Math.PI*2});return this.list.push(n),n}spawnTarget(t){const e=new ta(this.game,{x:t.x,z:t.z,yaw:Math.random()*Math.PI*2,shirtColor:10691106,skin:12157530});return e.isTarget=!0,this.list.push(e),e}spawnCop(t){const e=this.game.world.city;let i=t;if(!i)for(let s=0;s<30;s++){const a=e.walkPoints[Math.floor(Math.random()*e.walkPoints.length)],o=Math.hypot(a.x-this.game.player.pos.x,a.z-this.game.player.pos.z);if(o>24&&o<90){i=a;break}}if(!i){const s=Math.random()*Math.PI*2;i={x:this.game.player.pos.x+Math.cos(s)*34,z:this.game.player.pos.z+Math.sin(s)*34}}const n=new ta(this.game,{x:i.x,z:i.z,isCop:!0,yaw:Math.random()*6.28});return this.list.push(n),n}populate(){for(let t=0;t<18;t++)this.spawnCivilian()}update(t){const e=this.game;for(const i of this.list)i.removed||i.update(t,e);for(const i of[...this.list]){const n=Math.hypot(i.pos.x-e.player.pos.x,i.pos.z-e.player.pos.z)>260;(i.removed||i.dead&&i.deathTimer>24||n&&!i.isCop)&&i.remove(e)}if(this.list=this.list.filter(i=>!i.removed),this.spawnTimer-=t,this.spawnTimer<=0){this.spawnTimer=.7;let i=0,n=0;for(const a of this.list)a.dead||(a.isCop?n++:i++);i<18&&this.spawnCivilian();const s=e.player.wanted>0?Math.min(8,1+e.player.wanted*2):0;this.copSpawnCooldown-=t,n<s&&this.copSpawnCooldown<=0&&(this.copSpawnCooldown=1.5,this.spawnCop())}}alert(t,e){for(const i of this.list)i.dead||i.isCop||Math.hypot(i.pos.x-t.x,i.pos.z-t.z)<e&&i.flee(t,this.game)}raycast(t,e,i){let n=null;for(const s of this.list){if(s.dead)continue;const a=new L(s.pos.x,s.pos.y+1.02,s.pos.z),o=new L(s.pos.x,s.pos.y+1.72,s.pos.z),l=$l(t,e,a,.48,i),c=$l(t,e,o,.3,i);let h=null,d=!1;l!==null&&c!==null?c<l?(h=c,d=!0):h=l:l!==null?h=l:c!==null&&(h=c,d=!0),h!==null&&(!n||h<n.dist)&&(n={ped:s,dist:h,headshot:d,point:t.clone().addScaledVector(e,h)})}return n}nearestCop(t){let e=null,i=1/0;for(const n of this.list){if(!n.isCop||n.dead)continue;const s=Math.hypot(n.pos.x-t.x,n.pos.z-t.z);s<i&&(i=s,e=n)}return e}killFromVehicle(t){if(!(t.speed<6))for(const e of this.list)e.dead||Math.hypot(e.pos.x-t.pos.x,e.pos.z-t.pos.z)<2.4&&(e.die(this.game),this.game.particles.blood(new L(e.pos.x,e.pos.y+1,e.pos.z)),t.speed*=.88,this.game.registerCrime(e.isCop?3:2,"HIT AND RUN"),this.game.audio.crash(.8))}clear(){for(const t of this.list)t.removed||t.remove(this.game);this.list=[]}}function $l(r,t,e,i,n){const s=r.x-e.x,a=r.y-e.y,o=r.z-e.z,l=s*t.x+a*t.y+o*t.z,c=s*s+a*a+o*o-i*i,h=l*l-c;if(h<0)return null;const d=Math.sqrt(h);let u=-l-d;return u<0&&(u=-l+d),u<0||u>n?null:u}class Z0{constructor(t){this.game=t,this.items=[],this.rng=we(t.seed,"items"),this.spawnFixed()}spawnFixed(){const e=this.game.world.city.lots.filter(s=>s.type==="park"||s.type==="plaza"||s.type==="parking"),i=[],n=()=>{for(let s=0;s<30;s++){const a=e[Math.floor(this.rng()*e.length)];if(a&&!i.some(o=>o.x===a.x&&o.z===a.z))return i.push(a),a}return e[0]};for(let s=0;s<5;s++){const a=n();a&&this.add("health",a.x-5,a.z+5,50,!0)}for(let s=0;s<4;s++){const a=n();a&&this.add("armor",a.x+5,a.z-5,60,!0)}for(let s=0;s<5;s++){const a=n();a&&this.add("ammo",a.x+6,a.z+6,45,!0)}}add(t,e,i,n=0,s=!1,a=0){if(this.game.world.isBlocked(e,i,.8)){const h=this.game.world.resolveCircle(e,i,.55);e=h.x,i=h.z}const o=z0(t),l=this.game.world.groundAt(e,i)+.24;o.position.set(e,l,i),this.game.scene.add(o);const c={kind:t,x:e,z:i,y:l,mesh:o,active:!0,respawn:n,fixed:s,timer:0,value:a,phase:this.rng()*Math.PI*2};return this.items.push(c),c}spawnCash(t,e,i){this.add("cash",t,e,0,!1,i)}update(t){const e=this.game,i=e.player.pos;for(const n of[...this.items]){if(!n.active)if(n.timer-=t,n.timer<=0&&n.fixed)n.active=!0,n.mesh.visible=!0;else continue;if(n.phase+=t*2,n.mesh.position.y=n.y+Math.sin(n.phase)*.12,n.mesh.rotation.y+=t*1.9,Math.hypot(n.x-i.x,n.z-i.z)<1.6&&Math.abs(i.y-n.y)<2.4){if(n.kind==="health"){if(e.player.hp>=e.player.maxHp)continue;e.player.heal(45),e.notify("HEALTH","+45 HP","good",1600,!0)}else if(n.kind==="armor"){if(e.player.armor>=100)continue;e.player.heal(55,!0),e.notify("ARMOR","+55 ARMOR","good",1600,!0)}else if(n.kind==="ammo"){if(e.player.reserve>=300)continue;e.player.reserve+=36,e.notify("AMMO","+36 PISTOL ROUNDS","good",1600,!0)}else n.kind==="cash"&&(e.player.addCash(n.value,e),e.notify("CASH",`+$${n.value}`,"good",1400,!0));if(e.audio.pickup(),n.active=!1,n.mesh.visible=!1,n.timer=n.respawn||0,!n.fixed){e.scene.remove(n.mesh);const a=this.items.indexOf(n);a>=0&&this.items.splice(a,1)}}}}clear(){for(const t of this.items)this.game.scene.remove(t.mesh);this.items=[]}}const Zl=[16762668,6480010,5945599],Jl=["HOT WHEELS","LOOSE ENDS","CIRCUIT RUN"];function Ql(r,t=9,e=.75){const i=new Je,n=new Hi({color:r,transparent:!0,opacity:.3,side:di,depthWrite:!1}),s=new Pt(new uo(e,e*1.15,t,12,1,!0),n);s.position.y=t/2,i.add(s);const a=new Hi({color:r,transparent:!0,opacity:.9,depthWrite:!1}),o=new Pt(new mo(e*1.5,.08,6,24),a);o.rotation.x=-Math.PI/2,o.position.y=.18,i.add(o);const l=new Hi({color:r,transparent:!0,opacity:.95}),c=new Pt(new po(.55,0),l);return c.position.y=t+.7,i.add(c),i.userData={beam:s,ring:o,icon:c,mat:n,ringMat:a,iconMat:l,phase:Math.random()*6},i.renderOrder=3,i}class J0{constructor(t){this.game=t,this.scene=t.scene,this.rng=we(t.seed,"missions"),this.active=null,this.jobMarkers=[],this.activeMarkers=[],this.completed=0,this.jobs=t.world.city.jobPoints.map((e,i)=>({index:i,point:e,status:"available",cooldown:0,name:e.name||Jl[i%Jl.length],type:["delivery","hit","checkpoints"][i%3],marker:null}));for(const e of this.jobs){const i=Ql(Zl[e.index%Zl.length],7.5,.65);i.position.set(e.point.x,e.point.y-.1,e.point.z),this.scene.add(i),e.marker=i}this.hudDirty=!0}marker(t,e=8){const i=Ql(t,e,.7);return this.scene.add(i),this.activeMarkers.push(i),i}clearActiveMarkers(){for(const t of this.activeMarkers)this.scene.remove(t);this.activeMarkers=[]}removeMarker(t){if(!t)return;this.scene.remove(t);const e=this.activeMarkers.indexOf(t);e>=0&&this.activeMarkers.splice(e,1)}update(t){const e=this.game;e.time;for(const n of this.jobs){if(n.marker&&(n.marker.visible=n.status==="available",n.marker.visible)){n.marker.userData.phase+=t,n.marker.userData.icon.rotation.y+=t*1.8,n.marker.userData.ring.rotation.z+=t*1.2;const s=1+Math.sin(n.marker.userData.phase*2.2)*.05;n.marker.userData.ring.scale.set(s,s,s)}n.status==="cooldown"&&(n.cooldown-=t,n.cooldown<=0&&(n.status="available",this.hudDirty=!0))}for(const n of this.activeMarkers){const s=n.userData;s.phase+=t,s.icon.rotation.y+=t*2.2,s.ring.rotation.z-=t*1.1;const a=1+Math.sin(s.phase*3)*.08;s.ring.scale.set(a,a,a),s.mat.opacity=.22+Math.sin(s.phase*3)*.08}const i=this.active;if(i){if(i.targetVehicle&&i.vehicleMarker){if(i.targetVehicle.destroyed){this.fail("TARGET VEHICLE DESTROYED");return}i.vehicleMarker.position.set(i.targetVehicle.pos.x,i.targetVehicle.pos.y,i.targetVehicle.pos.z)}if(i.targetPed&&i.pedMarker){if(i.targetPed.dead){this.complete();return}i.pedMarker.position.set(i.targetPed.pos.x,i.targetPed.pos.y,i.targetPed.pos.z)}if(i.timer-=t,i.timer<=0){this.fail("OUT OF TIME");return}if(i.type==="delivery")if(i.stage===0)e.player.mode==="vehicle"&&e.player.vehicle===i.targetVehicle&&(i.stage=1,i.objective="Deliver the car to the drop-off.",this.createDropoff(),e.notify("JOB UPDATED","Delivery point marked","",2200),this.hudDirty=!0);else{const n=e.player,s=Math.hypot(n.pos.x-i.dropoff.x,n.pos.z-i.dropoff.z);n.mode==="vehicle"&&n.vehicle===i.targetVehicle&&s<7&&this.complete()}else if(i.type==="hit")i.targetPed.dead&&this.complete();else if(i.type==="checkpoints"){const n=i.checkpoints[i.cpIndex];if(!n){this.complete();return}i.checkpointMarker&&i.checkpointMarker.position.set(n.x,n.y,n.z);const s=e.player;Math.hypot(s.pos.x-n.x,s.pos.z-n.z)<7.5&&(i.cpIndex++,e.audio.beep(880,.1,.12),i.cpIndex>=i.checkpoints.length?this.complete():(e.notify("CHECKPOINT",`${i.cpIndex}/${i.checkpoints.length}`,"good",1400,!0),this.moveCheckpointMarker(),this.hudDirty=!0))}}}updateAvailablePrompt(){const t=this.game,e=t.player;if(e.mode==="foot")for(const i of this.jobs){if(i.status!=="available")continue;if(Math.hypot(e.pos.x-i.point.x,e.pos.z-i.point.z)<3.6){t.hud.setPrompt(`<span class="key">E</span> START JOB — ${i.name}`),t.hud.setMission(null);return}}}canInteract(){const t=this.game;if(this.active||t.player.mode!=="foot")return null;for(const e of this.jobs){if(e.status!=="available")continue;if(Math.hypot(t.player.pos.x-e.point.x,t.player.pos.z-e.point.z)<3.6)return e}return null}interact(t){return t?(t.point,t.type==="delivery"?this.startDelivery(t):t.type==="hit"?this.startHit(t):this.startCheckpoints(t),this.game.audio.beep(660,.1,.12),this.hudDirty=!0,!0):!1}pickDropoff(t=70,e=180){const i=this.game.world.city;for(let n=0;n<40;n++){const s=i.xLines[2+Math.floor(this.rng()*6)],a=i.zLines[2+Math.floor(this.rng()*6)],o=Math.hypot(s-this.game.player.pos.x,a-this.game.player.pos.z);if(o>t&&o<e)return{x:s,z:a,y:i.groundY+.15}}return{x:i.cx+45,z:i.cz-45,y:i.groundY+.15}}startDelivery(t){t.status="active";const e=this.game.world.city;let i=null;for(let o=0;o<40;o++){const l=e.randomRoadSpawn(this.rng),c=Math.hypot(l.x-t.point.x,l.z-t.point.z);if(c>16&&c<55){i=l;break}}i||(i={x:e.cx+45,z:e.cz+15,yaw:0});const n=this.game.vehicles.spawn({x:i.x,z:i.z,yaw:i.yaw,type:"coupe",color:15250986,driver:null});n.missionTag="target";const s=this.marker(16762668,10),a=this.pickDropoff(80,190);this.active={type:"delivery",job:t,title:"HOT WHEELS",objective:"Steal the marked yellow car.",timer:165,maxTimer:165,reward:1400,stage:0,targetVehicle:n,vehicleMarker:s,dropoff:a,dropoffMarker:null},this.game.hud.setMission({kind:"DELIVERY",title:"HOT WHEELS",objective:this.active.objective,timer:165}),this.game.notify("JOB ACCEPTED","Steal the marked car","",2400),this.hudDirty=!0}createDropoff(){const t=this.active;t.dropoffMarker=this.marker(6480010,8),t.dropoffMarker.position.set(t.dropoff.x,t.dropoff.y-.1,t.dropoff.z)}startHit(t){t.status="active";const e=this.game.world.city;let i=null;for(let a=0;a<30;a++){const o=e.walkPoints[Math.floor(this.rng()*e.walkPoints.length)],l=Math.hypot(o.x-t.point.x,o.z-t.point.z);if(l>55&&l<145){i=o;break}}i||(i={x:t.point.x+60,z:t.point.z});const n=this.game.peds.spawnTarget(i);if(!n){this.game.notify("JOB FAILED","No target available","bad",2500);return}const s=this.marker(16730955,8);s.position.set(n.pos.x,n.pos.y,n.pos.z),this.active={type:"hit",job:t,title:"LOOSE ENDS",objective:"Eliminate the marked target.",timer:190,maxTimer:190,reward:1250,targetPed:n,pedMarker:s},this.game.hud.setMission({kind:"HIT",title:"LOOSE ENDS",objective:this.active.objective,timer:190}),this.game.notify("CONTRACT","Target marked in red","",2400),this.hudDirty=!0}startCheckpoints(t){t.status="active";const e=this.game.world.city,i=[],n=new Set;let s=0,a=t.point;for(;i.length<4&&s++<100;){const o=1+Math.floor(this.rng()*8),l=1+Math.floor(this.rng()*8),c=o+":"+l;if(n.has(c))continue;n.add(c);const h=e.xLines[o],d=e.zLines[l];Math.hypot(h-a.x,d-a.z)<26||(i.push({x:h,z:d,y:e.groundY+.15}),a={x:h,z:d})}this.active={type:"checkpoints",job:t,title:"CIRCUIT RUN",objective:`Hit checkpoint 1 of ${i.length}.`,timer:95,maxTimer:95,reward:1600,checkpoints:i,cpIndex:0,checkpointMarker:null},this.moveCheckpointMarker(),this.game.hud.setMission({kind:"RACE",title:"CIRCUIT RUN",objective:this.active.objective,timer:95}),this.game.notify("RACE STARTED","Follow the blue markers","",2400),this.hudDirty=!0}moveCheckpointMarker(){const t=this.active;this.removeMarker(t.checkpointMarker);const e=t.checkpoints[t.cpIndex];e&&(t.checkpointMarker=this.marker(5945599,11),t.checkpointMarker.position.set(e.x,e.y-.1,e.z),t.objective=`Hit checkpoint ${t.cpIndex+1} of ${t.checkpoints.length}.`,this.game.hud.setMission({kind:"RACE",title:"CIRCUIT RUN",objective:t.objective,timer:t.timer}))}onVehicleEntered(t){const e=this.active;e&&e.type==="delivery"&&t===e.targetVehicle&&e.stage===0&&(e.stage=1,e.objective="Deliver the car to the drop-off.",this.createDropoff(),this.game.notify("JOB UPDATED","Drop-off marked in green","",2400),this.hudDirty=!0)}onPedKilled(t){const e=this.active;!e||e.type!=="hit"||t===e.targetPed&&this.complete()}onVehicleDestroyed(t){const e=this.active;e&&t===e.targetVehicle&&this.fail("TARGET VEHICLE DESTROYED")}complete(){const t=this.active;if(!t)return;const e=this.game;this.active=null,this.clearActiveMarkers(),t.job.status="cooldown",t.job.cooldown=22,t.job.marker.visible=!1,e.player.addCash(t.reward,e),e.audio.missionDone(),e.notify("JOB COMPLETE",`+$${t.reward.toLocaleString()}`,"good",4200),e.hud.showBanner("JOB COMPLETE",`+$${t.reward.toLocaleString()}`),e.hud.setMission(null),e.hud.setPrompt(""),this.completed++,t.targetVehicle&&(t.targetVehicle.missionTag=null),t.targetPed&&(t.targetPed.missionTag=null),this.hudDirty=!0}fail(t="JOB FAILED"){const e=this.active;if(!e)return;const i=this.game;this.active=null,this.clearActiveMarkers(),e.job.status="cooldown",e.job.cooldown=14,e.job.marker.visible=!1,e.targetVehicle&&(e.targetVehicle.missionTag=null),e.targetPed&&(e.targetPed.missionTag=null),i.audio.fail(),i.notify("JOB FAILED",t,"bad",4200),i.hud.setMission(null),i.hud.setPrompt(""),this.hudDirty=!0}getMissionInfo(){const t=this.active;return t?{kind:t.type.toUpperCase(),title:t.title,objective:t.objective,timer:t.timer}:null}clear(){this.clearActiveMarkers();for(const t of this.jobs)t.marker&&this.scene.remove(t.marker);this.jobs=[],this.active=null}}const zt=r=>document.getElementById(r),Q0=1200;class j0{constructor(t){this.game=t,this.el={hud:zt("hud"),location:zt("location"),seed:zt("seed-display"),stars:zt("wanted-stars"),wantedRow:zt("wanted-row"),cash:zt("cash"),clock:zt("clock"),day:zt("day-label"),healthBar:zt("health-bar"),armorBar:zt("armor-bar"),healthNum:zt("health-num"),armorNum:zt("armor-num"),ammo:zt("ammo"),weapon:zt("weapon-name"),minimap:zt("minimap"),minimapN:zt("minimap-n"),prompt:zt("prompt"),notifications:zt("notifications"),missionBox:zt("mission-box"),missionKicker:zt("mission-kicker"),missionTitle:zt("mission-title"),missionObjective:zt("mission-objective"),missionTimer:zt("mission-timer"),vehiclePanel:zt("vehicle-panel"),speedNum:zt("speed-num"),speedBar:zt("speed-bar"),gear:zt("gear"),crosshair:zt("crosshair"),banner:zt("big-banner"),bannerTitle:zt("big-banner-title"),bannerSub:zt("big-banner-sub"),hint:zt("hint"),damageFlash:zt("damage-flash"),death:zt("death-screen"),deathLoss:zt("death-loss"),deathRespawn:zt("death-respawn"),mapScreen:zt("map-screen"),bigmap:zt("bigmap"),mapTitle:zt("map-title"),pauseCash:zt("pause-cash"),pauseWanted:zt("pause-wanted"),pauseSeed:zt("pause-seed")},this.minimapCtx=this.el.minimap.getContext("2d"),this.bigmapCtx=this.el.bigmap.getContext("2d"),this.stars=[];for(let e=0;e<5;e++){const i=document.createElement("span");i.className="star",i.textContent="★",this.el.stars.appendChild(i),this.stars.push(i)}this.el.minimapN.style.display="none",this.cache={cash:null,hp:null,armor:null,ammo:null,wanted:null,location:null,prompt:null,missionKey:null,missionTimer:null,clock:null,day:null,inVehicle:null,speed:null,gear:null},this.minimapTimer=0,this.bigmapTimer=0,this.bannerTimer=null,this.mapOpen=!1}update(t){const e=this.game,i=e.player;if(!i)return;const n=`$${i.cash.toLocaleString()}`;n!==this.cache.cash&&(this.el.cash.textContent=n,this.cache.cash=n);const s=Math.max(0,Math.ceil(i.hp));s!==this.cache.hp&&(this.el.healthBar.style.width=`${ve(i.hp/i.maxHp*100,0,100)}%`,this.el.healthNum.textContent=s,this.cache.hp=s);const a=Math.ceil(i.armor);a!==this.cache.armor&&(this.el.armorBar.style.width=`${ve(a,0,100)}%`,this.el.armorNum.textContent=a,this.cache.armor=a);const o=`${i.ammo} / ${i.reserve}`;o!==this.cache.ammo&&(this.el.ammo.textContent=o,this.cache.ammo=o),i.weaponName!==this.cache.weapon&&(this.el.weapon.textContent=i.weaponName,this.cache.weapon=i.weaponName);const l=i.wanted;l!==this.cache.wanted&&(this.el.wantedRow.style.visibility=l>0?"visible":"hidden",this.stars.forEach((f,x)=>{f.classList.toggle("on",x<l),f.classList.toggle("pulse",l>=4&&x<l)}),this.cache.wanted=l);const c=e.world.env.getClock();c.text!==this.cache.clock&&(this.el.clock.textContent=c.text,this.cache.clock=c.text);const h=e.world.env.getDayLabel();if(h!==this.cache.day&&(this.el.day.textContent=h,this.cache.day=h),e.time-(this._locTimer||0)>.2){this._locTimer=e.time;const f=e.world.locationName(i.pos.x,i.pos.z);f!==this.cache.location&&(this.el.location.textContent=f,this.cache.location=f,e.state==="playing"&&this._started&&e.onDistrictChange(f)),this.el.seed.textContent=e.seed}const d=i.mode==="vehicle";if(d!==this.cache.inVehicle&&(this.cache.inVehicle=d,this.el.vehiclePanel.classList.toggle("hidden",!d),this.el.crosshair.classList.toggle("hidden",d)),d){const f=Math.round(Math.abs(i.vehicle.speed)*3.6);f!==this.cache.speed&&(this.el.speedNum.textContent=f,this.el.speedBar.style.width=`${ve(f/140*100,0,100)}%`,this.cache.speed=f);const x=i.vehicle.speed<-.4?"R":Math.abs(i.vehicle.speed)<.2?"N":"D";x!==this.cache.gear&&(this.el.gear.textContent=x,this.cache.gear=x)}this.el.crosshair.classList.toggle("aiming",i.aiming),this.el.crosshair.classList.toggle("hidden",d||i.mode!=="foot");const u=e.missions?e.missions.getMissionInfo():null;if(u){this.el.missionBox.classList.remove("hidden");const f=u.kind+u.title+u.objective;f!==this.cache.missionKey&&(this.el.missionKicker.textContent=u.kind+" // ACTIVE",this.el.missionTitle.textContent=u.title,this.el.missionObjective.textContent=u.objective,this.cache.missionKey=f);const x=Math.max(0,Math.ceil(u.timer)),v=`${String(Math.floor(x/60)).padStart(2,"0")}:${String(x%60).padStart(2,"0")}`;v!==this.cache.missionTimer&&(this.el.missionTimer.textContent=v,this.cache.missionTimer=v)}else this.el.missionBox.classList.add("hidden"),this.cache.missionKey=null;this.minimapTimer-=t,this.minimapTimer<=0&&(this.minimapTimer=.08,this.drawMinimap()),this.mapOpen&&(this.bigmapTimer-=t,this.bigmapTimer<=0&&(this.bigmapTimer=.15,this.drawBigMap())),e.time>50&&(this.el.hint.style.opacity="0")}setPrompt(t){t!==this.cache.prompt&&(this.cache.prompt=t,t?(this.el.prompt.innerHTML=t,this.el.prompt.classList.remove("hidden")):this.el.prompt.classList.add("hidden"))}notify(t,e="",i="",n=4200,s=!1){const a=document.createElement("div");for(a.className="toast"+(i?" "+i:""),a.innerHTML=`<b>${t}</b>${e?`<span>${e}</span>`:""}`,s&&(a.style.fontSize="10px"),this.el.notifications.appendChild(a),setTimeout(()=>a.remove(),n);this.el.notifications.children.length>5;)this.el.notifications.firstChild.remove()}showBanner(t,e=""){this.el.bannerTitle.textContent=t,this.el.bannerSub.textContent=e,this.el.banner.classList.remove("hidden"),this.el.banner.style.animation="none",this.el.banner.offsetWidth,this.el.banner.style.animation="",clearTimeout(this.bannerTimer),this.bannerTimer=setTimeout(()=>this.el.banner.classList.add("hidden"),4e3)}damageFlash(){this.el.damageFlash.classList.remove("hit"),this.el.damageFlash.offsetWidth,this.el.damageFlash.classList.add("hit")}popCash(){this.el.cash.parentElement.classList.remove("pop"),this.el.cash.parentElement.offsetWidth,this.el.cash.parentElement.classList.add("pop")}setInVehicle(t){this.cache.inVehicle=null,this.el.crosshair.classList.toggle("hidden",t)}showDeath(t,e=0,i=""){this.el.death.classList.toggle("hidden",!t),t&&(this.el.deathLoss.textContent=`MEDICAL BILL: $${e.toLocaleString()}`,this.el.deathRespawn.textContent=i)}setPauseStats(t,e,i){this.el.pauseCash.textContent=`$${t.cash.toLocaleString()}`,this.el.pauseWanted.textContent=i>0?"★".repeat(i):"CLEAN",this.el.pauseSeed.textContent=e}showMap(t){this.mapOpen=t,this.el.mapScreen.classList.toggle("hidden",!t),this.el.mapTitle.textContent=`SEED: ${this.game.seed.toUpperCase()}`,t&&(this.bigmapTimer=0,this.drawBigMap())}worldToMinimap(t,e,i,n,s,a){const o=(t-i)*s,l=(e-n)*s,c=Math.cos(a),h=Math.sin(a);return{x:o*c-l*h,y:o*h+l*c}}drawMinimap(){const t=this.minimapCtx,e=this.el.minimap.width,i=e/2,n=this.game,s=n.player,a=1.65,o=s.cameraYaw+Math.PI;t.clearRect(0,0,e,e),t.save(),t.beginPath(),t.arc(i,i,i,0,Math.PI*2),t.clip(),t.fillStyle="#1d3b4d",t.fillRect(0,0,e,e);const l=n.world.mapCanvas;if(l){const f=n.world.worldToMap(s.pos.x,s.pos.z);t.save(),t.translate(i,i),t.rotate(o),t.scale(a,a),t.drawImage(l,-f.x,-f.y),t.restore()}const c=(f,x,v,g=3)=>{const m=this.worldToMinimap(f,x,s.pos.x,s.pos.z,a,o);m.x*m.x+m.y*m.y>(i-6)*(i-6)||(t.fillStyle=v,t.beginPath(),t.arc(i+m.x,i+m.y,g,0,Math.PI*2),t.fill())};if(n.vehicles)for(const f of n.vehicles.list)f.destroyed||f===s.vehicle||Math.hypot(f.pos.x-s.pos.x,f.pos.z-s.pos.z)>100||c(f.pos.x,f.pos.z,f.police?"#7fb0ff":"rgba(235,240,245,0.7)",f.police?3:2);if(n.peds)for(const f of n.peds.list)!f.isCop||f.dead||Math.hypot(f.pos.x-s.pos.x,f.pos.z-s.pos.z)>110||c(f.pos.x,f.pos.z,"#ff4b4b",3);if(n.missions){for(const x of n.missions.jobs){if(x.status!=="available")continue;const v=this.worldToMinimap(x.point.x,x.point.z,s.pos.x,s.pos.z,a,o);v.x*v.x+v.y*v.y>(i-8)*(i-8)||(t.fillStyle="#ffc72c",t.strokeStyle="rgba(0,0,0,0.75)",t.lineWidth=1.5,t.beginPath(),t.arc(i+v.x,i+v.y,5,0,Math.PI*2),t.fill(),t.stroke())}const f=n.missions.active;if(f){if(f.type==="delivery")f.targetVehicle&&c(f.targetVehicle.pos.x,f.targetVehicle.pos.z,"#ffc72c",4.5),f.dropoff&&c(f.dropoff.x,f.dropoff.z,"#62e08a",5);else if(f.type==="hit"&&f.targetPed)c(f.targetPed.pos.x,f.targetPed.pos.z,"#ff4b4b",5);else if(f.type==="checkpoints"){const x=f.checkpoints[f.cpIndex];x&&c(x.x,x.z,"#5ab8ff",5)}}}t.save(),t.translate(i,i),t.fillStyle="#ffffff",t.strokeStyle="rgba(0,0,0,0.8)",t.lineWidth=1.5,t.beginPath(),t.moveTo(0,-8),t.lineTo(5.5,6),t.lineTo(0,3.5),t.lineTo(-5.5,6),t.closePath(),t.fill(),t.stroke(),t.restore();const h=o,d=Math.sin(h)*(i-13),u=-Math.cos(h)*(i-13);t.fillStyle="rgba(255,255,255,0.9)",t.font="bold 12px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText("N",i+d,i+u),t.restore(),t.beginPath(),t.arc(i,i,i-1.5,0,Math.PI*2),t.strokeStyle="rgba(0,0,0,0.35)",t.lineWidth=2,t.stroke()}drawBigMap(){const t=this.bigmapCtx,e=this.game,i=900;t.clearRect(0,0,i,i),t.fillStyle="#142a3c",t.fillRect(0,0,i,i);const n=e.world.mapCanvas;if(!n)return;t.drawImage(n,0,0,i,i);const s=i/Q0,a=(c,h)=>e.world.worldToMap(c,h),o=e.player,l=e.missions?e.missions.jobs:[];for(const c of l){if(c.status!=="available")continue;const h=a(c.point.x,c.point.z);t.fillStyle="#ffc72c",t.strokeStyle="rgba(0,0,0,0.8)",t.lineWidth=2,t.beginPath(),t.arc(h.x*s,h.y*s,7,0,Math.PI*2),t.fill(),t.stroke()}if(e.missions&&e.missions.active){const c=e.missions.active;let h=[];if(c.type==="delivery")c.targetVehicle&&h.push([c.targetVehicle.pos.x,c.targetVehicle.pos.z,"#ffc72c"]),c.dropoff&&h.push([c.dropoff.x,c.dropoff.z,"#62e08a"]);else if(c.type==="hit"&&c.targetPed)h.push([c.targetPed.pos.x,c.targetPed.pos.z,"#ff4b4b"]);else if(c.type==="checkpoints")for(const d of c.checkpoints)h.push([d.x,d.z,"#5ab8ff"]);for(const[d,u,f]of h){const x=a(d,u);t.fillStyle=f,t.beginPath(),t.arc(x.x*s,x.y*s,7,0,Math.PI*2),t.fill()}}if(e.peds)for(const c of e.peds.list){if(!c.isCop||c.dead)continue;const h=a(c.pos.x,c.pos.z);t.fillStyle="#ff4b4b",t.fillRect(h.x*s-2,h.y*s-2,4,4)}if(o){const c=a(o.pos.x,o.pos.z);t.save(),t.translate(c.x*s,c.y*s),t.rotate(Math.PI-o.cameraYaw),t.fillStyle="#ffffff",t.strokeStyle="#000",t.lineWidth=2,t.beginPath(),t.moveTo(0,-11),t.lineTo(7,8),t.lineTo(0,4),t.lineTo(-7,8),t.closePath(),t.fill(),t.stroke(),t.restore(),t.fillStyle="rgba(255,255,255,0.85)",t.font="bold 11px Arial",t.textAlign="center",t.fillText("YOU",c.x*s,c.y*s+26)}t.strokeStyle="rgba(255,255,255,0.15)",t.lineWidth=2,t.strokeRect(1,1,i-2,i-2),t.fillStyle="rgba(255,255,255,0.75)",t.font="bold 16px Arial",t.textAlign="center",t.fillText("N",i/2,26)}}class tg{constructor(t,e){this.canvas=t,this.game=e,this.keys=new Set,this.lookX=0,this.lookY=0,this.moveX=0,this.moveY=0,this.shoot=!1,this.aim=!1,this.sprint=!1,this.jumpHeld=!1,this.pressed={jump:!1,interact:!1,reload:!1,map:!1,pause:!1,horn:!1,toggleSound:!1,camera:!1},this.pointerLocked=!1,this.dragging=!1,this.lastPointer={x:0,y:0},this.isMobile=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,this.touchLookId=null,this.joystickId=null,this.joystickCenter={x:0,y:0},this.bind()}bind(){window.addEventListener("keydown",s=>{s.target&&(s.target.tagName==="INPUT"||s.target.tagName==="TEXTAREA")||((s.code==="Space"||s.code==="Tab")&&s.preventDefault(),!this.keys.has(s.code)&&(this.keys.add(s.code),s.code==="KeyE"&&(this.pressed.interact=!0),s.code==="KeyR"&&(this.pressed.reload=!0),s.code==="KeyM"&&(this.pressed.map=!0),s.code==="Escape"&&(this.pressed.pause=!0),s.code==="KeyH"&&(this.pressed.horn=!0),s.code==="KeyM"&&(this.pressed.map=!0),s.code==="Space"&&(this.pressed.jump=!0),s.code==="KeyC"&&(this.pressed.camera=!0),s.code==="KeyN"&&(this.pressed.toggleSound=!0)))}),window.addEventListener("keyup",s=>{this.keys.delete(s.code)}),window.addEventListener("blur",()=>{this.keys.clear(),this.shoot=!1,this.aim=!1}),this.canvas.addEventListener("mousedown",s=>{this.game.state==="playing"&&(!this.isMobile&&!this.pointerLocked&&this.canvas.requestPointerLock?.(),s.button===0&&(this.shoot=!0),s.button===2&&(this.aim=!0),this.dragging=!0,this.lastPointer.x=s.clientX,this.lastPointer.y=s.clientY)}),window.addEventListener("mouseup",s=>{s.button===0&&(this.shoot=!1),s.button===2&&(this.aim=!1),this.dragging=!1}),this.canvas.addEventListener("contextmenu",s=>s.preventDefault()),window.addEventListener("mousemove",s=>{this.game.state==="playing"&&(this.pointerLocked?(this.lookX+=s.movementX,this.lookY+=s.movementY):this.dragging&&(this.lookX+=s.clientX-this.lastPointer.x,this.lookY+=s.clientY-this.lastPointer.y,this.lastPointer.x=s.clientX,this.lastPointer.y=s.clientY))}),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===this.canvas}),this.canvas.addEventListener("wheel",s=>{this.game.state==="playing"&&(this.game.cameraZoomDelta=Math.sign(s.deltaY)*.55,s.preventDefault())},{passive:!1});const t=document.getElementById("joystick"),e=document.getElementById("joystick-zone");if(t&&e){const s=l=>{l.preventDefault();const c=l.changedTouches[0],h=t.getBoundingClientRect();this.joystickCenter.x=h.left+h.width/2,this.joystickCenter.y=h.top+h.height/2,this.joystickId=c.identifier,this.updateJoystick(c.clientX,c.clientY,h.width/2)},a=l=>{for(const c of l.changedTouches)if(c.identifier===this.joystickId){const h=t.getBoundingClientRect();this.updateJoystick(c.clientX,c.clientY,h.width/2),l.preventDefault()}},o=l=>{for(const c of l.changedTouches)if(c.identifier===this.joystickId){this.joystickId=null,this.moveX=0,this.moveY=0;const h=document.getElementById("joystick-knob");h&&(h.style.transform="translate(-50%,-50%)")}};e.addEventListener("touchstart",s,{passive:!1}),e.addEventListener("touchmove",a,{passive:!1}),e.addEventListener("touchend",o,{passive:!1}),e.addEventListener("touchcancel",o,{passive:!1})}const i=document.getElementById("app");i.addEventListener("touchstart",s=>{if(this.game.state==="playing")for(const a of s.changedTouches)a.clientX<window.innerWidth*.38||this.touchLookId===null&&(this.touchLookId=a.identifier,this.lastPointer.x=a.clientX,this.lastPointer.y=a.clientY)},{passive:!0}),i.addEventListener("touchmove",s=>{if(this.game.state==="playing")for(const a of s.changedTouches)a.identifier===this.touchLookId&&(this.lookX+=(a.clientX-this.lastPointer.x)*1,this.lookY+=(a.clientY-this.lastPointer.y)*1,this.lastPointer.x=a.clientX,this.lastPointer.y=a.clientY)},{passive:!0}),i.addEventListener("touchend",s=>{for(const a of s.changedTouches)a.identifier===this.touchLookId&&(this.touchLookId=null)},{passive:!0});const n=(s,a)=>{const o=document.getElementById(s);o&&(o.addEventListener("touchstart",l=>{l.preventDefault(),l.stopPropagation(),a(!0)},{passive:!1}),o.addEventListener("touchend",l=>{l.preventDefault(),l.stopPropagation(),a(!1)},{passive:!1}),o.addEventListener("touchcancel",l=>{l.preventDefault(),a(!1)},{passive:!1}),o.addEventListener("mousedown",l=>{l.preventDefault(),l.stopPropagation(),a(!0)}),o.addEventListener("mouseup",l=>{l.preventDefault(),l.stopPropagation(),a(!1)}))};n("btn-fire",s=>{this.shoot=s}),n("btn-jump",s=>{s&&(this.pressed.jump=!0),this.jumpHeld=s}),n("btn-enter",s=>{s&&(this.pressed.interact=!0)}),n("btn-reload",s=>{s&&(this.pressed.reload=!0)}),n("btn-menu",s=>{s&&(this.pressed.pause=!0)})}updateJoystick(t,e,i){let n=t-this.joystickCenter.x,s=e-this.joystickCenter.y;const a=Math.hypot(n,s),o=i*.78;a>o&&(n=n/a*o,s=s/a*o),this.moveX=n/o,this.moveY=-s/o;const l=document.getElementById("joystick-knob");l&&(l.style.transform=`translate(calc(-50% + ${n}px), calc(-50% + ${s}px))`)}get forward(){let t=0;return(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(t+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(t-=1),Math.abs(this.moveY)>.02&&(t=this.moveY),Math.max(-1,Math.min(1,t))}get strafe(){let t=0;return(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(t+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(t-=1),Math.abs(this.moveX)>.02&&(t=this.moveX),Math.max(-1,Math.min(1,t))}get sprinting(){return this.sprint||this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.isMobile&&Math.hypot(this.moveX,this.moveY)>.92}get jump(){return this.jumpHeld||this.keys.has("Space")}consume(){const t={...this.pressed};for(const i in this.pressed)this.pressed[i]=!1;const e={x:this.lookX,y:this.lookY};return this.lookX=0,this.lookY=0,{pressed:t,look:e}}clearFrame(){this.lookX=0,this.lookY=0}}const Tn=420,wn=14;class eg{constructor(t){this.scene=t,this.count=Tn,this.pool=[],this.cursor=0;const e=new $t(1,1,1),i=new Ae({color:16777215});this.mesh=new Ac(e,i,Tn),this.mesh.frustumCulled=!1,this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,this.mesh.instanceColor=new Ha(new Float32Array(Tn*3),3),this.mesh.instanceMatrix.setUsage(Dh),t.add(this.mesh);const n=new Jt;n.makeScale(0,0,0);for(let a=0;a<Tn;a++)this.mesh.setMatrixAt(a,n),this.mesh.setColorAt(a,new bt(1,1,1)),this.pool.push({life:0,maxLife:1,pos:new L,vel:new L,size:.1,grow:0,gravity:0,drag:0,spin:0,rot:0,color:new bt});this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),this.tracerPos=new Float32Array(wn*6),this.tracerCol=new Float32Array(wn*6),this.tracerLife=new Float32Array(wn),this.tracerIdx=0;const s=new Pe;s.setAttribute("position",new pi(this.tracerPos,3)),s.setAttribute("color",new pi(this.tracerCol,3)),this.tracerMat=new Rc({vertexColors:!0,transparent:!0,opacity:.9,blending:ea,depthWrite:!1}),this.tracers=new dd(s,this.tracerMat),this.tracers.frustumCulled=!1,t.add(this.tracers),this._m=new Jt,this._q=new Wi,this._e=new xi,this._s=new L,this._p=new L,this._c=new bt,this.time=0}spawn(t,e,i={}){const n=this.pool[this.cursor];return this.cursor=(this.cursor+1)%Tn,n.life=i.life??.6,n.maxLife=n.life,n.pos.copy(t),n.vel.set(i.vx??0,i.vy??0,i.vz??0),n.vel.x+=(Math.random()-.5)*(i.spread??0),n.vel.y+=(Math.random()-.3)*(i.spreadY??0),n.vel.z+=(Math.random()-.5)*(i.spread??0),n.size=i.size??.12,n.grow=i.grow??0,n.gravity=i.gravity??18,n.drag=i.drag??.98,n.color.set(e),n.rot=Math.random()*6,n.spin=(Math.random()-.5)*8,this.mesh.setColorAt(this.cursor,n.color),this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),n}burst(t,e,i=10,n=6,s={}){for(let a=0;a<i;a++){const o=Math.random()*Math.PI*2,l=Math.random()*n*.8+(s.up??1.5);this.spawn(t,e,{life:(s.life??.7)*(.55+Math.random()*.8),vx:Math.cos(o)*n*(.4+Math.random()*.7),vz:Math.sin(o)*n*(.4+Math.random()*.7),vy:l,spread:n*.4,spreadY:n*.3,size:(s.size??.13)*(.6+Math.random()),gravity:s.gravity??20,drag:s.drag??.985,grow:s.grow??0})}}muzzle(t){this.burst(t,16766571,5,4.2,{life:.12,size:.08,gravity:0,up:.6}),this.burst(t,16747050,3,2.5,{life:.1,size:.07,gravity:0}),this.spawn(t,16773808,{life:.05,size:.5,gravity:0,grow:0})}impact(t,e,i=16765040){this.burst(t,i,6,3.4,{life:.3,size:.07,gravity:14}),this.burst(t,10196618,3,1.6,{life:.45,size:.1,gravity:2,drag:.94})}blood(t){this.burst(t,11150886,9,3.8,{life:.8,size:.11,gravity:24}),this.burst(t,6558740,4,2.2,{life:.5,size:.09,gravity:20})}sparks(t){this.burst(t,16761690,7,5,{life:.22,size:.055,gravity:18,up:1})}smoke(t,e=7039851,i=2,n=1){for(let s=0;s<i;s++)this.spawn(t,e,{life:.9+Math.random()*.8,size:.28*n,grow:1.1*n,vx:(Math.random()-.5)*.7,vy:1+Math.random()*.7,vz:(Math.random()-.5)*.7,gravity:-.4,drag:.97})}explosion(t){this.burst(t,16757308,26,13,{life:.8,size:.4,gravity:8,up:5,drag:.97}),this.burst(t,16734752,20,10,{life:.65,size:.32,gravity:6,up:4}),this.burst(t,2763306,18,6,{life:1.8,size:.6,gravity:-1.5,up:3,drag:.95,grow:1.4}),this.burst(t,16773792,10,8,{life:.25,size:.2,gravity:4})}splash(t){this.burst(t,10474734,8,3.2,{life:.5,size:.09,gravity:22,up:2})}tracer(t,e,i=16769946){const n=this.tracerIdx;this.tracerIdx=(this.tracerIdx+1)%wn,this.tracerPos[n*6]=t.x,this.tracerPos[n*6+1]=t.y,this.tracerPos[n*6+2]=t.z,this.tracerPos[n*6+3]=e.x,this.tracerPos[n*6+4]=e.y,this.tracerPos[n*6+5]=e.z;const s=new bt(i);for(let a=0;a<2;a++)this.tracerCol[n*6+a*3]=s.r,this.tracerCol[n*6+a*3+1]=s.g,this.tracerCol[n*6+a*3+2]=s.b;this.tracerLife[n]=.105,this.tracers.geometry.attributes.position.needsUpdate=!0,this.tracers.geometry.attributes.color.needsUpdate=!0}update(t){this.time+=t;for(let e=0;e<Tn;e++){const i=this.pool[e];if(i.life<=0){this._m.makeScale(0,0,0),this.mesh.setMatrixAt(e,this._m);continue}if(i.life-=t,i.life<=0){this._m.makeScale(0,0,0),this.mesh.setMatrixAt(e,this._m);continue}i.vel.y-=i.gravity*t,i.vel.x*=i.drag,i.vel.z*=i.drag,i.vel.y*=(i.drag===.98,1),i.pos.addScaledVector(i.vel,t),i.rot+=i.spin*t,i.size+=i.grow*t;const n=i.life/i.maxLife,s=Math.max(.001,i.size*(.4+n*.6));this._e.set(i.rot,i.rot*.7,0),this._q.setFromEuler(this._e),this._s.set(s,s,s),this._m.compose(i.pos,this._q,this._s),this.mesh.setMatrixAt(e,this._m),this._c.copy(i.color);const a=.45+n*.55;this._c.multiplyScalar(a),this.mesh.setColorAt(e,this._c)}this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0);for(let e=0;e<wn;e++)if(this.tracerLife[e]>0){this.tracerLife[e]-=t;const i=Math.max(0,this.tracerLife[e]/.105);for(let n=0;n<6;n++)this.tracerCol[e*6+n]*=.7+i*.3;if(this.tracerLife[e]<=0)for(let n=0;n<6;n++)this.tracerCol[e*6+n]=0}this.tracers.geometry.attributes.color.needsUpdate=!0}clear(){for(const t of this.pool)t.life=0;for(let t=0;t<wn;t++){this.tracerLife[t]=0;for(let e=0;e<6;e++)this.tracerCol[t*6+e]=0}this.tracers.geometry.attributes.color.needsUpdate=!0}}class ig{constructor(){this.ctx=null,this.master=null,this.muted=!1,this.engine=null,this.siren=null,this.sirenOn=!1,this._lastHit=0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.55,this.master.connect(this.ctx.destination),this.buildEngine(),this.buildSiren())}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.55,this.ctx.currentTime,.05)}buildEngine(){const t=this.ctx,e=t.createOscillator(),i=t.createOscillator(),n=t.createBiquadFilter(),s=t.createGain();e.type="sawtooth",i.type="square",e.frequency.value=55,i.frequency.value=27,n.type="lowpass",n.frequency.value=300,n.Q.value=4,s.gain.value=0,e.connect(n),i.connect(n),n.connect(s),s.connect(this.master),e.start(),i.start(),this.engine={osc:e,osc2:i,filter:n,gain:s}}buildSiren(){const t=this.ctx,e=t.createOscillator(),i=t.createGain();e.type="triangle",e.frequency.value=700,i.gain.value=0,e.connect(i),i.connect(this.master),e.start(),this.siren={osc:e,gain:i}}updateEngine(t,e,i){if(!this.engine)return;const n=this.ctx.currentTime,s=Math.abs(t),a=i?.035+Math.min(.075,s*.0021):0;this.engine.gain.gain.setTargetAtTime(a,n,.09),this.engine.osc.frequency.setTargetAtTime(46+s*3.6+Math.abs(e)*12,n,.08),this.engine.osc2.frequency.setTargetAtTime(23+s*1.8,n,.1),this.engine.filter.frequency.setTargetAtTime(220+s*22+Math.abs(e)*180,n,.1)}updateSiren(t,e){if(this.siren&&(t!==this.sirenOn&&(this.sirenOn=t,this.siren.gain.gain.setTargetAtTime(t?.025:0,this.ctx.currentTime,.2)),t)){const i=620+(Math.sin(e*3.2)>0?280:0);this.siren.osc.frequency.setTargetAtTime(i,this.ctx.currentTime,.08)}}noiseBurst(t=.16,e=.35,i=1800,n="lowpass"){if(!this.ctx)return;const s=this.ctx,a=Math.floor(s.sampleRate*t),o=s.createBuffer(1,a,s.sampleRate),l=o.getChannelData(0);for(let u=0;u<a;u++){const f=1-u/a;l[u]=(Math.random()*2-1)*f*f}const c=s.createBufferSource();c.buffer=o;const h=s.createBiquadFilter();h.type=n,h.frequency.value=i;const d=s.createGain();d.gain.value=e,d.gain.exponentialRampToValueAtTime(.001,s.currentTime+t),c.connect(h),h.connect(d),d.connect(this.master),c.start()}gunshot(){if(!this.ctx)return;this.noiseBurst(.14,.45,2200);const t=this.ctx,e=t.createOscillator(),i=t.createGain();e.type="square",e.frequency.setValueAtTime(140,t.currentTime),e.frequency.exponentialRampToValueAtTime(40,t.currentTime+.09),i.gain.setValueAtTime(.22,t.currentTime),i.gain.exponentialRampToValueAtTime(.001,t.currentTime+.1),e.connect(i),i.connect(this.master),e.start(),e.stop(t.currentTime+.12)}copShot(){this.ctx&&this.noiseBurst(.1,.18,1400)}hit(){this.ctx&&(this.ctx.currentTime-this._lastHit<.06||(this._lastHit=this.ctx.currentTime,this.noiseBurst(.08,.24,700)))}crash(t=1){this.ctx&&this.noiseBurst(.22,Math.min(.5,.18*t),500)}explosion(){if(!this.ctx)return;this.noiseBurst(.85,.65,320);const t=this.ctx,e=t.createOscillator(),i=t.createGain();e.type="sine",e.frequency.setValueAtTime(75,t.currentTime),e.frequency.exponentialRampToValueAtTime(18,t.currentTime+.7),i.gain.setValueAtTime(.4,t.currentTime),i.gain.exponentialRampToValueAtTime(.001,t.currentTime+.8),e.connect(i),i.connect(this.master),e.start(),e.stop(t.currentTime+.9)}beep(t=660,e=.08,i=.12,n="square"){if(!this.ctx)return;const s=this.ctx,a=s.createOscillator(),o=s.createGain();a.type=n,a.frequency.value=t,o.gain.setValueAtTime(i,s.currentTime),o.gain.exponentialRampToValueAtTime(.001,s.currentTime+e),a.connect(o),o.connect(this.master),a.start(),a.stop(s.currentTime+e+.02)}pickup(){this.beep(520,.08,.13),setTimeout(()=>this.beep(780,.12,.12),70),setTimeout(()=>this.beep(1040,.14,.1),145)}missionDone(){this.beep(520,.12,.13,"sawtooth"),setTimeout(()=>this.beep(660,.12,.13,"sawtooth"),120),setTimeout(()=>this.beep(880,.3,.14,"sawtooth"),240)}fail(){this.beep(180,.22,.16,"sawtooth"),setTimeout(()=>this.beep(120,.35,.14,"sawtooth"),180)}reload(){this.beep(320,.05,.08,"square"),setTimeout(()=>this.beep(220,.06,.08,"square"),140)}horn(){if(!this.ctx)return;const t=this.ctx;for(const e of[392,495]){const i=t.createOscillator(),n=t.createGain();i.type="square",i.frequency.value=e,n.gain.setValueAtTime(.09,t.currentTime),n.gain.setValueAtTime(.09,t.currentTime+.35),n.gain.exponentialRampToValueAtTime(.001,t.currentTime+.45),i.connect(n),n.connect(this.master),i.start(),i.stop(t.currentTime+.46)}}}const ng=new ig,he=r=>document.getElementById(r),jl="gtb.seed",tc="gtb.muted";function Zn(){return new Promise(r=>requestAnimationFrame(()=>r()))}function ec(r){return new Promise(t=>setTimeout(t,r))}class sg{constructor(t){this.canvas=t,this.state="boot",this.seed=this.readSeed(),this.menuTime=0,this.time=0,this.lastTime=0,this.cameraShake=0,this.cameraZoomDelta=0,this.respawnTimer=0,this._deathTick=0,this._deathLoss=0,this._busy=!1,this._building=!1,this._promptKey=null,this._decayTimer=0,this._policeTimer=3,this._policeClearTimer=0,this._lastDistrict=null,this._districtBannerAt=-99,this._fadeTimer=null,this._mapReturn="playing",this.isMobile=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,document.body.classList.toggle("mobile",this.isMobile),this.muted=localStorage.getItem(tc)==="1",this.audio=ng,this.audio.setMuted(this.muted),this.renderer=new S0({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.isMobile?1.6:2)),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.renderer.outputColorSpace=ze,this.renderer.toneMapping=Ja,this.renderer.toneMappingExposure=1.08,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ic,this.camera=new ni(64,window.innerWidth/Math.max(1,window.innerHeight),.1,1500),this.camera.position.set(0,60,120),this.scene=null,this.world=null,this.player=null,this.vehicles=null,this.peds=null,this.items=null,this.missions=null,this.particles=null,this.hud=new j0(this),this.input=new tg(t,this),this.cameraRig=new q0(this,this.camera),this.seedInput=he("seed-input"),this.seedPreview=he("seed-preview"),this.seedWorldTag=he("seed-world-tag"),this.startScreen=he("start-screen"),this.loading=he("loading"),this.hudEl=he("hud"),this.mobileControls=he("mobile-controls"),this.pauseScreen=he("pause-screen"),this.mapScreen=he("map-screen"),this.deathScreen=he("death-screen"),this.fadeEl=he("fade"),this.seedInput.value=this.seed,this.refreshSeedUI(),this.bindUI(),this.bindResize(),this.loop=this.loop.bind(this)}readSeed(){let t=null,e=null;try{t=new URLSearchParams(location.hash.replace(/^#/,"")).get("seed"),e=new URLSearchParams(location.search).get("seed")}catch{}const i=localStorage.getItem(jl);return ks(t||e||i||"san-voxel-01")}async init(){try{this.showLoading(!0),this.setLoading(.03,"CARVING THE COASTLINE…"),await this.buildSession(this.seed),this.setLoading(1,"READY"),await ec(180),this.showLoading(!1),this.state="menu",this.startScreen.classList.remove("hidden","closing"),this.hudEl.classList.add("hidden"),this.mobileControls.classList.add("hidden"),this.player.mesh.visible=!1,this.setMenuCamera(0),this.refreshSeedUI(),this.lastTime=performance.now(),window.__gameReady=!0,requestAnimationFrame(this.loop),(new URLSearchParams(location.search).get("play")==="1"||new URLSearchParams(location.hash.replace(/^#/,"")).get("play")==="1")&&await this.startGame()}catch(t){console.error("[GRAND THEFT BLOCK] boot failed",t),this.setLoading(1,"GENERATION FAILED — CHECK THE CONSOLE"),window.__gameError=String(t&&t.stack?t.stack:t),this.state="error"}}async buildSession(t){this._building||(this._building=!0,this.state="loading",this.showLoading(!0),this.setLoading(.06,"READING THE SEED…"),await Zn(),this.disposeSession(),this.scene=new td,this.seed=ks(t),this.seedInput.value=this.seed,this.setLoading(.16,"CARVING THE COASTLINE…"),await Zn(),this.world=new F0(this.scene,this.seed,this.renderer),this.setLoading(.52,"RAISING THE SKYLINE…"),await Zn(),this.particles=new eg(this.scene),this.player=new Y0(this,this.world.city.spawn),this.player.mesh.visible=!1,this.trafficRng=we(this.seed,"traffic-ai"),this._policeRng=we(this.seed,"police"),this.vehicles=new W0(this),this.peds=new $0(this),this.items=new Z0(this),this.missions=new J0(this),this.setLoading(.74,"SPAWNING TRAFFIC…"),await Zn(),this.vehicles.populate(),this.peds.populate(),this.time=0,this.menuTime=0,this.cameraShake=0,this.cameraZoomDelta=0,this.respawnTimer=0,this._deathTick=0,this._decayTimer=0,this._policeTimer=3,this._policeClearTimer=0,this._lastDistrict=null,this._districtBannerAt=-99,this._promptKey=null,this.cameraRig.initialized=!1,this.hud._started=!1,this.hud.cache.location=null,this.hud.cache.prompt=null,this.hud.cache.inVehicle=null,this.hud.cache.missionKey=null,this.hud.setPrompt(""),this.setLoading(.94,"PAVING THE STREETS…"),await Zn(),this.setLoading(1,"READY"),this.refreshSeedUI(),this._building=!1)}disposeSession(){if(this.vehicles)for(;this.vehicles.list.length;)this.vehicles.remove(this.vehicles.list[0]);if(this.peds&&this.peds.clear(),this.items&&this.items.clear(),this.missions&&this.missions.clear(),this.player&&this.scene&&this.scene.remove(this.player.mesh),this.particles&&this.scene){const t=this.particles;this.scene.remove(t.mesh),this.scene.remove(t.tracers),t.mesh.geometry.dispose(),t.mesh.material.dispose(),t.tracers.geometry.dispose(),t.tracerMat.dispose()}this.world&&this.world.dispose(),this.world=null,this.player=null,this.vehicles=null,this.peds=null,this.items=null,this.missions=null,this.particles=null,this.trafficRng=null,this._policeRng=null,this.scene=null}setMenuCamera(t){if(!this.world)return;const e=this.world.city;this.menuTime+=t;const i=this.menuTime*.055+.72,n=205,s=this.world.city.groundY+72+Math.sin(this.menuTime*.33)*5;this.camera.position.set(e.cx+Math.cos(i)*n,s,e.cz+Math.sin(i)*n),this.camera.up.set(0,1,0),this.camera.lookAt(e.cx,e.groundY+20,e.cz),Math.abs(this.camera.fov-54)>.01&&(this.camera.fov=54,this.camera.updateProjectionMatrix()),this.camera.updateMatrixWorld()}async startGame(){if(!(this._busy||this.state==="error")){this._busy=!0,this.playButton?.classList.add("busy");try{this.audio.init();const t=ks(this.seedInput.value||this.seed);this.seedInput.value=t,(!this.world||t!==this.seed)&&await this.buildSession(t),this.enterGame(),this.refreshSeedUI()}catch(t){console.error("[GRAND THEFT BLOCK] start failed",t),this.setLoading(1,"GENERATION FAILED — CHECK THE CONSOLE"),window.__gameError=String(t&&t.stack?t.stack:t)}finally{this._busy=!1,this.playButton?.classList.remove("busy")}}}enterGame(){if(!this.world)return;this.state="playing",this.showLoading(!1),this.startScreen.classList.add("closing"),this.hudEl.classList.remove("hidden"),this.hud.showDeath(!1),this.hud.showMap(!1),this.pauseScreen.classList.add("hidden"),this.mapScreen.classList.add("hidden"),this.deathScreen.classList.add("hidden"),this.mobileControls.classList.toggle("hidden",!this.isMobile),this.player.mesh.visible=this.player.mode==="foot",this.hud.setInVehicle(this.player.mode==="vehicle"),this.hud.el.hint.style.opacity="1",this.hud._started=!0,this.hud.cache.location=null,this.hud.cache.inVehicle=null,this.hud.cache.prompt=null,this.hud.setPrompt(""),this.cameraRig.initialized=!1,this.input.clearFrame(),this.input.pressed.pause=!1,this.audio.init(),this.audio.setMuted(this.muted),this._updateSoundButton(),this.updateUrlSeed(),localStorage.setItem(jl,this.seed),this.notify("WELCOME TO SAN VOXEL",`WORLD SEED // ${this.seed.toUpperCase()}`,"",4200);const t=this.world.city.districtAt(this.player.pos.x,this.player.pos.z);this._lastDistrict=t,this.hud.showBanner(t,"SAN VOXEL COUNTY"),this.flashFade(),document.body.dataset.state="playing"}async quitToMenu(){if(!this._busy){this._busy=!0,this.state="menu",this.hideGameUI(),this.startScreen.classList.remove("closing","hidden"),this.audio.updateEngine(0,0,!1),this.audio.updateSiren(!1,this.time),document.exitPointerLock&&document.exitPointerLock(),this.seedInput.value=this.seed,this.refreshSeedUI(),this.showLoading(!0);try{await this.buildSession(this.seed),this.state="menu",this.setLoading(1,"READY"),await ec(140),this.showLoading(!1),this.player.mesh.visible=!1,this.setMenuCamera(0)}catch(t){console.error("[GRAND THEFT BLOCK] rebuild failed",t),this.showLoading(!1)}this._busy=!1,document.body.dataset.state="menu"}}hideGameUI(){this.hudEl.classList.add("hidden"),this.mobileControls.classList.add("hidden"),this.pauseScreen.classList.add("hidden"),this.mapScreen.classList.add("hidden"),this.deathScreen.classList.add("hidden"),this.hud.showMap(!1),this.hud.showDeath(!1),this.hud.setPrompt("")}openPause(){this.state==="playing"&&(this.state="paused",this.pauseScreen.classList.remove("hidden"),this.mobileControls.classList.add("hidden"),this.hud.setPauseStats(this.player,this.seed,this.player.wanted),this.hud.setPrompt(""),this.input.shoot=!1,this.input.aim=!1,this.audio.updateEngine(0,0,!1),this.audio.updateSiren(!1,this.time),document.exitPointerLock&&document.exitPointerLock(),document.body.dataset.state="paused")}resumeGame(){this.state==="paused"&&(this.state="playing",this.pauseScreen.classList.add("hidden"),this.mobileControls.classList.toggle("hidden",!this.isMobile),this.input.clearFrame(),this.input.pressed.pause=!1,document.body.dataset.state="playing")}openMap(t="playing"){this.world&&(this._mapReturn=t==="paused"?"paused":"playing",this.state="map",this.pauseScreen.classList.add("hidden"),this.mapScreen.classList.remove("hidden"),this.mobileControls.classList.add("hidden"),this.hud.setPrompt(""),this.hud.showMap(!0),this.input.shoot=!1,this.input.aim=!1,document.exitPointerLock&&document.exitPointerLock(),document.body.dataset.state="map")}closeMap(){this.state==="map"&&(this.hud.showMap(!1),this._mapReturn==="paused"?(this.state="paused",this.pauseScreen.classList.remove("hidden"),this.hud.setPauseStats(this.player,this.seed,this.player.wanted)):(this.state="playing",this.mobileControls.classList.toggle("hidden",!this.isMobile),this.input.clearFrame()),document.body.dataset.state=this.state)}toggleSound(){this.muted=!this.muted,this.audio.setMuted(this.muted),localStorage.setItem(tc,this.muted?"1":"0"),this._updateSoundButton(),this.muted||(this.audio.init(),this.audio.beep(720,.08,.1))}_updateSoundButton(){const t=he("sound-btn");t&&(t.textContent=`SOUND: ${this.muted?"OFF":"ON"}`)}killPlayer(){if(!this.player||this.player.dead||this.state==="dead")return;this.player.dead=!0,this.player.hp=0,this.exitVehicle(!0),this.state="dead",this.respawnTimer=4.2,this._deathTick=0;const t=Math.min(this.player.cash,100+Math.floor(this.player.cash*.08));this.player.cash=Math.max(0,this.player.cash-t),this._deathLoss=t,this.hud.showDeath(!0,t,"RESPAWNING…"),this.hud.setPrompt(""),this.mobileControls.classList.add("hidden"),this.input.shoot=!1,this.input.aim=!1,this.audio.updateEngine(0,0,!1),this.audio.updateSiren(!1,this.time),this.audio.fail(),document.exitPointerLock&&document.exitPointerLock(),document.body.dataset.state="dead"}respawn(){const t=this.player;if(!t)return;const e=this.world.city.hospital,i=this.world.resolveCircle(e.x,e.z,.5);t.dead=!1,t.hp=t.maxHp,t.armor=0,t.wanted=0,t.heat=0,t.lastCrime=-999,t.invuln=3,t.vel.set(0,0,0),t.pos.set(i.x,this.world.groundAt(i.x,i.z)+.02,i.z),t.yaw=0,t.cameraYaw=0,t.cameraPitch=-.13,t.mode="foot",t.vehicle=null,t.mesh.visible=!0,t.mesh.position.copy(t.pos),t.mesh.rotation.set(0,0,0),t.mesh.userData.rig.legs.forEach(n=>{n.rotation.x=0}),t.mesh.userData.rig.arms.forEach(n=>{n.rotation.x=0}),this.cameraRig.initialized=!1,this.hud.showDeath(!1),this.hud.setInVehicle(!1),this.hud.cache.inVehicle=null,this.hud.cache.location=null,this.hud.setPrompt(""),this.hud.showBanner("HOSPITAL","PATCHED UP — WANTED CLEARED"),this.peds.alert(t.pos,0),this.state="playing",this.respawnTimer=0,this._policeTimer=5,this._decayTimer=0,this._policeClearTimer=0,this.mobileControls.classList.toggle("hidden",!this.isMobile),this._lastDistrict=this.world.city.districtAt(t.pos.x,t.pos.z),this.input.clearFrame(),document.body.dataset.state="playing"}handleShooting(){const t=this.player;if(!this.input.shoot||t.mode!=="foot"||t.dead||t.reloadTimer>0)return;if(t.ammo<=0){t.reserve>0&&t.reload(this);return}if(!t.canShoot())return;const e=this.camera.position.clone(),i=new L;this.camera.getWorldDirection(i);const n=145,s=this.world.raycastStatic(e,i,n,!0);let a={type:"static",dist:s.dist,point:s.point};const o=this.peds.raycast(e,i,Math.min(n,a.dist));o&&o.dist<a.dist&&(a={type:"ped",dist:o.dist,point:o.point,ped:o.ped,headshot:o.headshot});const l=this.vehicles.raycast(e,i,Math.min(n,a.dist));l&&l.dist<a.dist&&(a={type:"vehicle",dist:l.dist,point:l.point,vehicle:l.vehicle}),t.consumeShot(this);const c=t.muzzle.clone();if(this.particles.tracer(c,a.point,16770723),a.type==="ped"){const d=a.headshot?88:44;a.ped.hit(d,this)?(this.particles.blood(a.point),this.registerCrime(a.ped.isCop?4:3,a.ped.isCop?"COP KILLER":"HOMICIDE"),a.headshot&&this.notify("HEADSHOT","Clean shot","",1200,!0),this.missions?.onPedKilled(a.ped)):this.registerCrime(a.ped.isCop?2:1,"ASSAULT WITH A FIREARM"),this.peds.alert(a.ped.pos,34);return}if(a.type==="vehicle"){a.vehicle.damage(30,this),this.particles.impact(a.point,new L(0,1,0),16761690),a.vehicle.destroyed||this.particles.sparks(a.point),this.registerCrime(a.vehicle.police?2:1,"RECKLESS DISCHARGE");return}this.particles.impact(a.point,new L(0,1,0),13616816),this.peds.list.some(d=>!d.dead&&Math.hypot(d.pos.x-t.pos.x,d.pos.z-t.pos.z)<34)&&this.registerCrime(1,"ILLEGAL DISCHARGE")}enterVehicle(t){if(!t||t.destroyed||this.player.mode==="vehicle")return;const e=t.driver==="ai";this.player.enterVehicle(t,this),this.cameraRig.initialized=!1;const i=t.police?3:e?2:0;i>0&&this.registerCrime(i,t.police?"POLICE VEHICLE STOLEN":"GRAND THEFT AUTO"),this.missions?.onVehicleEntered(t),this.peds.alert(t.pos,26),this.notify(e?"VEHICLE STOLEN":"VEHICLE",this.vehicleName(t)+(t.police?" // WANTED":""),e?"bad":"",2e3,!0),this._promptKey=null}exitVehicle(t=!1){!this.player||this.player.mode!=="vehicle"||(this.player.exitVehicle(this),t&&(this.player.invuln=Math.max(this.player.invuln,1.5)),this.cameraRig.initialized=!1,this._promptKey=null)}vehicleName(t){return t.police?"POLICE CRUISER":t.type==="van"?"BOX VAN":t.type==="coupe"?"COUPE":"SEDAN"}registerCrime(t,e="CRIME"){const i=this.player;if(!i||i.dead||this.state!=="playing")return;const n=i.wanted;i.wanted=ve(Math.max(i.wanted,t),0,5),i.heat+=t,i.lastCrime=this.time,this._decayTimer=0,this._policeTimer=Math.min(this._policeTimer,1.6),i.wanted>n&&(this.notify("WANTED LEVEL UP",`${e} — ★${"★".repeat(Math.max(0,i.wanted-1))}`.trim(),"bad",3200),this.audio.beep(240,.12,.12,"sawtooth"))}updateWanted(t){const e=this.player;if(!e.dead){if(e.wanted>0){this._policeClearTimer=0;const i=this.peds.nearestCop(e.pos),n=i?Math.hypot(i.pos.x-e.pos.x,i.pos.z-e.pos.z):1/0;if(this.time-e.lastCrime>8&&n>38?(this._decayTimer+=t,this._decayTimer>10&&(this._decayTimer=0,e.wanted=Math.max(0,e.wanted-1),e.heat=0,e.wanted===0?(this.notify("WANTED CLEARED","The heat is off.","good",3600),this._releasePolice()):this.notify("HEAT FADING",`Wanted level down to ★${"★".repeat(e.wanted)}`,"good",2600))):this._decayTimer=0,this._policeTimer-=t,this._policeTimer<=0){const s=Math.min(4,1+Math.ceil(e.wanted*.75));let a=0;for(const o of this.vehicles.list)o.police&&!o.destroyed&&a++;if(a<s){const o=this.vehicles.spawnPoliceCar(e.pos,this._policeRng);this._policeTimer=o?Math.max(3.2,8.5-e.wanted*1.1):3.5}else this._policeTimer=2.4}}else if(this._policeClearTimer+=t,this._policeClearTimer>14){this._policeClearTimer=0;for(const i of[...this.vehicles.list])!i.police||i.driver==="player"||i.driver==="ai"&&Math.hypot(i.pos.x-e.pos.x,i.pos.z-e.pos.z)<90||this.vehicles.remove(i)}}}_releasePolice(){for(const t of this.vehicles.list)!t.police||t.driver!=="ai"||(t.driver=null,t.ai=null,t.speed=0)}spawnCopFromCar(t){if(!t||this.time<(t._copCooldown||0))return;t._copCooldown=this.time+4.5;let e=0;for(const o of this.peds.list)o.isCop&&!o.dead&&e++;if(e>=9)return;const i=Math.sin(t.yaw)>=0?1:-1,n=t.pos.x+Math.cos(t.yaw)*2.1*i,s=t.pos.z-Math.sin(t.yaw)*2.1*i,a=this.world.resolveCircle(n,s,.4);this.peds.spawnCop({x:a.x,z:a.z})}spawnCashPickup(t,e,i){this.items?.spawnCash(t,e,i)}notify(t,e="",i="",n=4200,s=!1){this.hud.notify(t,e,i,n,s)}onDistrictChange(t){if(t){if(!this._lastDistrict){this._lastDistrict=t;return}t!==this._lastDistrict&&(this._lastDistrict=t,!(this.time-this._districtBannerAt<7)&&(this._districtBannerAt=this.time,this.hud.showBanner(t,"SAN VOXEL COUNTY"),this.audio.beep(520,.08,.07)))}}updatePlaying(t,e,i){const n=this.player;if(this.time+=t,n.processLook(i,this),this.vehicles.update(t),n.update(t,this,this.input),n.mode==="vehicle"&&n.vehicle&&this.peds.killFromVehicle(n.vehicle),this.input.shoot&&n.mode==="foot"&&this.handleShooting(),this.input.sprint,e.reload&&n.reload(this),e.horn&&n.mode==="vehicle"&&this.audio.horn(),e.camera&&(this.cameraZoomDelta=n.cameraZoom>1.05?-2.2:2.2),e.interact)if(n.mode==="vehicle")this.exitVehicle(!1);else{const s=this.missions.canInteract();if(s)this.missions.interact(s),this._promptKey=null;else{const a=this.vehicles.nearest(n.pos,4.7);a&&this.enterVehicle(a)}}this.peds.update(t),this.items.update(t),this.missions.update(t),this.updateWanted(t),this.updateInteractionPrompt(),this.cameraRig.update(t,n),this.world.update(t,this.camera,n.pos),this.particles.update(t),this.hud.update(t),this.updateAudio()}updateDead(t){if(this.time+=t,this.respawnTimer-=t,this._deathTick-=t,this._deathTick<=0){this._deathTick=.25;const e=Math.max(0,Math.ceil(this.respawnTimer)),i=he("death-respawn");i&&(i.textContent=e>0?`RESPAWNING IN ${e}…`:"RESPAWNING…")}this.particles?.update(t),this.vehicles?.update(t),this.peds?.update(t),this.world?.env.update(t,this.camera,this.player.pos),this.respawnTimer<=0&&this.respawn()}updateMenu(t){if(!this.world)return;this.setMenuCamera(t);const e=this.world.city,i={x:e.cx,y:e.groundY,z:e.cz};this.world.env.update(t,this.camera,i),this.world.chunks.update(i),this.missions?.update(t),this.camera.updateMatrixWorld()}updateInteractionPrompt(){const t=this.player;let e="";if(t.mode==="vehicle")e='<span class="key">E</span> EXIT VEHICLE';else{const i=this.missions.canInteract();if(i)e=`<span class="key">E</span> START JOB — ${i.name}`;else{const n=this.vehicles.nearest(t.pos,4.7);n&&(e=`<span class="key">E</span> ${n.driver==="ai"?"CARJACK":"ENTER"} ${this.vehicleName(n)}`)}}e!==this._promptKey&&(this._promptKey=e,this.hud.setPrompt(e))}updateAudio(){const t=this.player,e=t.mode==="vehicle"&&t.vehicle;this.audio.updateEngine(e?t.vehicle.speed:0,e?this.input.forward:0,!!e),this.audio.updateSiren(t.wanted>0,this.time)}loop(t){requestAnimationFrame(this.loop),this.lastTime||(this.lastTime=t);const e=ve((t-this.lastTime)/1e3,0,.05);this.lastTime=t;const{pressed:i,look:n}=this.input.consume();this.state==="playing"?i.pause?this.openPause():i.map?this.openMap("playing"):(i.toggleSound&&this.toggleSound(),this.updatePlaying(e,i,n)):this.state==="paused"?i.pause?this.resumeGame():i.map?this.openMap("paused"):i.toggleSound&&this.toggleSound():this.state==="map"?(i.pause||i.map)&&this.closeMap():this.state==="dead"?this.updateDead(e):this.state==="menu"&&(i.toggleSound&&this.toggleSound(),this.updateMenu(e)),this.scene?this.renderer.render(this.scene,this.camera):this.renderer.clear()}bindUI(){this.playButton=he("play-btn"),this.playButton.addEventListener("click",()=>this.startGame()),he("seed-random")?.addEventListener("click",()=>{this.audio.init(),this.audio.beep(760,.06,.08),this.seedInput.value=b0(),this.refreshSeedUI(),this.seedInput.focus()}),this.seedInput.addEventListener("input",()=>this.refreshSeedUI()),this.seedInput.addEventListener("change",()=>this.refreshSeedUI()),this.seedInput.addEventListener("keydown",t=>{t.key==="Enter"&&(t.preventDefault(),this.seedInput.blur(),this.startGame())}),window.addEventListener("keydown",t=>{t.target&&(t.target.tagName==="INPUT"||t.target.tagName==="TEXTAREA")||t.code==="Enter"&&this.state==="menu"&&!this._busy&&(t.preventDefault(),this.startGame())}),he("resume-btn")?.addEventListener("click",()=>this.resumeGame()),he("map-btn")?.addEventListener("click",()=>this.openMap("paused")),he("map-close")?.addEventListener("click",()=>this.closeMap()),he("quit-btn")?.addEventListener("click",()=>this.quitToMenu()),he("sound-btn")?.addEventListener("click",()=>this.toggleSound()),this._updateSoundButton(),this.mapScreen.addEventListener("click",t=>{t.target===this.mapScreen&&this.closeMap()})}bindResize(){window.addEventListener("resize",()=>this.onResize()),window.addEventListener("orientationchange",()=>setTimeout(()=>this.onResize(),120))}onResize(){const t=window.innerWidth,e=Math.max(1,window.innerHeight);this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.isMobile?1.6:2)),this.renderer.setSize(t,e,!1)}refreshSeedUI(){const t=ks(this.seedInput.value||this.seed);this.seedPreview&&(this.seedPreview.textContent=`SEED // ${t.toUpperCase()}`),this.seedWorldTag&&(this.world?t===this.seed?(this.seedWorldTag.textContent="PREVIEW LOADED",this.seedWorldTag.style.color="#ffe08a"):(this.seedWorldTag.textContent="NEW SEED — PRESS PLAY",this.seedWorldTag.style.color="#72e08a"):(this.seedWorldTag.textContent="GENERATING…",this.seedWorldTag.style.color="rgba(255,255,255,.45)"))}updateUrlSeed(){try{const t=new URL(location.href);t.hash=`seed=${encodeURIComponent(this.seed)}`,history.replaceState(null,"",t)}catch{}}setLoading(t,e){const i=he("loader-bar"),n=he("loader-text");i&&(i.style.width=`${ve(t,0,1)*100}%`),n&&e&&(n.textContent=e)}showLoading(t){this.loading||(this.loading=he("loading")),this.loading.classList.toggle("hidden",!t),t&&this.setLoading(0,"")}flashFade(){this.fadeEl&&(clearTimeout(this._fadeTimer),this.fadeEl.classList.add("on"),this._fadeTimer=setTimeout(()=>this.fadeEl.classList.remove("on"),90))}}const rg=document.getElementById("game"),Cn=new sg(rg);window.__game=Cn;document.body.dataset.state="boot";Cn.init().catch(r=>{console.error("[GRAND THEFT BLOCK] fatal",r),window.__gameError=String(r&&r.stack?r.stack:r);const t=document.getElementById("loader-text");t&&(t.textContent="FAILED TO START — CHECK THE CONSOLE")});window.__gtb={get seed(){return Cn.seed},get state(){return Cn.state},get ready(){return window.__gameReady===!0},get player(){return Cn.player},get world(){return Cn.world}};
