/* Fotos de la misma especie tomadas en otros lugares del cuaderno */
if(typeof OTROS!=="undefined"){BIRDS.forEach(b=>{const k=b.sci.split(" / ")[0].replace(/ \(doméstico\)/,"");(OTROS[k]||[]).filter(x=>x.lugar!==LUGAR.nombre).forEach(x=>b.photos.push({img:x.img,place:(x.place&&x.place.indexOf(x.lugar)<0?x.place+" · "+x.lugar:(x.place||x.lugar)),ind:x.ind,ext:true}));});}
var SITE='';
const mini=u=>u.replace('fotos/','fotos/mini/');
/* Código común de las guías de aves. Cada lugar define LUGAR, IMG, BIRDS, XTRA, HAB, PLACES y TREND en su datos.js */
const IUCN = {LC:["Preocupación menor","var(--lc)"],NT:["Casi amenazada","var(--nt)"],VU:["Vulnerable","var(--vu)"],EN:["En peligro","var(--en)"],CR:["En peligro crítico","var(--cr)"]};
/* Paleta de plumaje [color, parte] y meses de presencia en la Sabana (1–12) */
const ALL=[1,2,3,4,5,6,7,8,9,10,11,12];
BIRDS.forEach(b=>{const x=XTRA[b.id]||{};b.sw=x.sw||[["#888","—"]];b.months=b.migration?(x.m||[]):ALL;});

/* Dónde verlas y tendencia de población documentada */
const TR={dec:["↓","En descenso"],inc:["↑","En aumento"],sta:["→","Estable"]};
BIRDS.forEach(b=>{b.places=PLACES[b.id]||[];b.trend=TREND[b.id]||null;});
let place="", CUR=BIRDS;
const NOW=new Date().getMonth()+1;
const MES=["E","F","M","A","M","J","J","A","S","O","N","D"];
const $ = s=>document.querySelector(s);
const grid=$("#grid"), drawer=$("#drawer"), scrim=$("#scrim"), body=$("#dBody");
let filter="all", fam="", lastFocus=null;

if(LUGAR.hero) $("#heroImg").src=LUGAR.hero;
const WILD=BIRDS.filter(b=>!b.domestic), nMig=WILD.filter(b=>b.migration).length, nDom=BIRDS.length-WILD.length;
$("#nSp").textContent=WILD.length; $("#nMig").textContent=nMig;
$("#cAll").textContent=BIRDS.length; $("#cMig").textContent=nMig; $("#cRes").textContent=WILD.length-nMig; $("#cDom").textContent=nDom;
[...new Set(BIRDS.map(b=>b.family))].sort().forEach(f=>{const o=document.createElement("option");o.value=f;o.textContent=f;$("#famSel").appendChild(o)});

/* Calendario */
(function(){
  let h=`<div></div>`+MES.map((m,i)=>`<div class="m${i+1===NOW?' now':''}">${m}</div>`).join("");
  BIRDS.filter(b=>b.migration).forEach(b=>{
    const col=b.sw[0][0];
    h+=`<button class="name" data-id="${b.id}" title="${b.sci}">${b.common}</button>`+
      ALL.map(m=>`<div class="c${b.months.includes(m)?' on':''}${m===NOW?' now':''}" style="${b.months.includes(m)?`background:${col}`:''}" title="${b.common}: ${b.months.includes(m)?'presente':'ausente'}"></div>`).join("");
  });
  $("#cal").innerHTML=h;
  $("#cal").addEventListener("click",e=>{const n=e.target.closest(".name");if(n)openBird(n.dataset.id,n);});
})();

const tag=b=>b.domestic?`<span class="tag dom"><span class="dot"></span>${b.feral?'Asilvestrada':'Doméstica'}</span>`:b.migration?`<span class="tag mig"><span class="dot"></span>Migratoria · ${b.migration.type}</span>`:`<span class="tag res"><span class="dot"></span>Residente</span>`;
const PLAY=`<svg width="11" height="11" viewBox="0 0 12 12"><path d="M3 1.5v9l7.5-4.5z" fill="currentColor"/></svg>`;
const monthsBar=b=>`<div class="months" aria-label="${b.migration?'Meses en '+LUGAR.region:'Presente todo el año'}">${ALL.map(m=>`<i class="${b.months.includes(m)?'on '+(b.migration?'m':'r'):''}${m===NOW?' now':''}"></i>`).join("")}</div>`;

function render(){
  const list=CUR=BIRDS.filter(b=>(filter==="all"||(filter==="mig"&&!!b.migration)||(filter==="res"&&!b.migration&&!b.domestic)||(filter==="dom"&&b.domestic))&&(!fam||b.family===fam)&&(!place||b.places.includes(place))&&(!SITE||b.photos.some(p=>!p.ext&&p.place===SITE)));
  grid.innerHTML=list.map((b,i)=>{const p=b.photos[0];const n=b.photos.length;
    const media=p.video?`${PLAY} Video`:n>1?`${n} fotos`:"";
    return `<button class="card${i===0&&list.length>2?' feature':''}" data-id="${b.id}" aria-label="Abrir ficha de ${b.common}" style="animation-delay:${Math.min(i,10)*45}ms">
      <div class="ph"><img src="${mini(p.img)}" alt="${b.common} (${b.sci})" loading="lazy">
        <div class="top">
          <span style="display:flex;gap:6px;flex-wrap:wrap"><span class="pill ${b.domestic?'dom':b.migration?'mig':'res'}"><span class="dot"></span>${b.domestic?(b.feral?'Asilvestrada':'Doméstica'):b.migration?'Migratoria':'Residente'}</span>${b.iucn!=="LC"?`<span class="pill thr">${IUCN[b.iucn][0]}</span>`:""}</span>
          <span style="display:flex;gap:6px">${b.conf!=="alta"?`<span class="pill warn">ID ${b.conf==="baja"?"tentativa":"por confirmar"}</span>`:""}${media?`<span class="pill">${media}</span>`:""}</span>
        </div>
      </div>
      <div class="meta">
        <div class="over"><h2>${b.common}</h2><p>${b.sci}</p></div>
        <div class="row"><span class="fam-lbl">${b.trend?`<span class="trend ${b.trend.v}">${TR[b.trend.v][0]} ${TR[b.trend.v][1]}</span>`:b.family}</span><span class="sw" title="Paleta de plumaje">${b.sw.map(s=>`<i style="background:${s[0]}" title="${s[1]}"></i>`).join("")}</span></div>
        ${monthsBar(b)}
      </div>
    </button>`}).join("");
  $("#empty").hidden=list.length>0;
  $("#count").textContent=`${list.length} de ${BIRDS.length}`;
}

document.querySelectorAll(".chip[data-f]").forEach(c=>c.addEventListener("click",()=>{
  filter=c.dataset.f;document.querySelectorAll(".chip[data-f]").forEach(x=>x.setAttribute("aria-pressed",x===c));render();}));
document.querySelectorAll(".chip[data-p]").forEach(c=>c.addEventListener("click",()=>{
  place=c.dataset.p;document.querySelectorAll(".chip[data-p]").forEach(x=>x.setAttribute("aria-pressed",x===c));render();}));
$("#famSel").addEventListener("change",e=>{fam=e.target.value;render();});
grid.addEventListener("click",e=>{const c=e.target.closest(".card");if(c)openBird(c.dataset.id,c);});

const W=360,H=377,K=3.75,LON0=-120,LAT0=55,PAD=30;
const px=(lat,lon)=>[PAD+(lon-LON0)*K, 14+(LAT0-lat)*K];
const mapLayer=`<path class="land" d="${MAP.land}"/><path class="col" d="${MAP.col}"/><path class="borders" d="${MAP.borders}"/>`;
function routeSVG(m){
  const pts=m.stops.map(s=>px(s.lat,s.lon));
  const d="M"+pts.map(p=>p.map(n=>n.toFixed(1)).join(" ")).join(" L");
  let len=0;for(let i=1;i<pts.length;i++)len+=Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]);
  const last=pts[pts.length-1], r=px(m.rangeTo.lat,m.rangeTo.lon);
  let g="";
  [40,20,0,-20].forEach(la=>{const y=px(la,0)[1];g+=`<line class="${la===0?'eq':'grat'}" x1="${PAD}" x2="${W-PAD}" y1="${y}" y2="${y}"/><text class="lbl" x="${W-PAD+4}" y="${y+3}">${la===0?'0°':Math.abs(la)+'°'+(la>0?'N':'S')}</text>`});
  [-100,-80,-60].forEach(lo=>{const x=px(0,lo)[0];g+=`<line class="grat" x1="${x}" x2="${x}" y1="14" y2="${H-14}"/><text class="lbl" x="${x}" y="${H-2}" text-anchor="middle">${Math.abs(lo)}°O</text>`});
  const tc=px(23.4,0)[1];
  g+=`<text class="lbl" x="${PAD+2}" y="${tc-4}">Trópico de Cáncer</text><line class="eq" x1="${PAD}" x2="${W-PAD}" y1="${tc}" y2="${tc}" style="opacity:.5"/>`;
  g+=`<text class="lbl" x="${PAD+2}" y="${px(0,0)[1]-4}">Ecuador</text>`;
  const stops=m.stops.map((s,i)=>{const [x,y]=pts[i];const left=x>W*0.6;
    return `<circle class="${s.here?'home':'stop'}" cx="${x}" cy="${y}" r="${s.here?7:4.5}"/><text class="stoplbl" x="${left?x-10:x+10}" y="${y+4}" text-anchor="${left?'end':'start'}">${s.here?LUGAR.corto:s.role}</text>`}).join("");
  const rl=r[0]>W*0.6;
  return `<svg class="route" viewBox="0 0 ${W} ${H}" role="img" aria-label="Ruta migratoria esquemática de ${m.stops[0].name} a Guaymaral">
    <rect class="sea" x="0" y="0" width="${W}" height="${H}"/>${mapLayer}${g}
    <path class="back" d="M${last[0]} ${last[1]} Q ${last[0]-40} ${(last[1]+pts[0][1])/2} ${pts[0][0]-6} ${pts[0][1]+6}"/>
    <line class="range" x1="${last[0]}" y1="${last[1]}" x2="${r[0]}" y2="${r[1]}"/>
    <circle cx="${r[0]}" cy="${r[1]}" r="3" style="fill:var(--piranga);opacity:.5"/>
    <text class="lbl" x="${rl?r[0]-8:r[0]+8}" y="${r[1]+3}" text-anchor="${rl?'end':'start'}">hasta ${m.rangeTo.name}</text>
    <path class="path" d="${d}" style="--len:${len.toFixed(0)};stroke-dasharray:${len.toFixed(0)}"/>
    ${stops}
  </svg>`;
}

function mediaHTML(b,p){
  return (p.video
    ? `<video src="${p.video}" poster="${p.img}" controls loop muted playsinline></video>`
    : `<img src="${p.img}" alt="${b.common}">`)+`<p class="pcap">${p.ind||""}${p.place?` · ${p.place}`:""}</p>`;
}
function fieldHTML(p){
  const exif=p.exif?`<div class="exif">${Object.entries(p.exif).map(([k,v])=>`<div><span>${k}</span><strong>${v}</strong></div>`).join("")}</div>`
    :`<p class="note">${p.video?"Video sin datos de cámara en el archivo.":"El archivo de esta foto no conserva metadatos EXIF."}</p>`;
  return `<dl class="kv" style="margin-bottom:14px">
      <dt>Fecha</dt><dd class="mono" style="font-size:13px">${p.date}</dd>
      <dt>Lugar</dt><dd>${p.place}</dd>
      <dt>Individuo</dt><dd>${p.ind}</dd>
    </dl>${exif}`;
}

/* Enlaces al canto en xeno-canto (archivo abierto de grabaciones de aves) */
/* Cantos incluidos en la página: SONGS[id] = {src:"data:audio/mpeg;base64,...", credit:"Grabación: …"} */
const SONGS = window.SONGS || {};
let curAudio=null;
function songLinks(b){
  const ico=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 6v4M6 4v8M9 2v12M12 5v6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`;
  const s=SONGS[b.id];
  if(s){
    return `<div class="song"><button class="songbtn" data-song="${b.id}" aria-pressed="false"><span class="pp">${ico}</span><span class="lbl">Escuchar el canto</span><span class="bar"><i></i></span></button>${s.credit?`<p class="songnote">${s.credit}</p>`:""}</div>`;
  }
  const parts=b.sci.split(" / "); const genus=parts[0].split(" ")[0];
  const names=parts.map(p=>p.replace(/^[A-Z]\.\s/,genus+" "));
  return `<div class="song">${names.map(n=>`<a class="songbtn" href="https://xeno-canto.org/explore?query=${encodeURIComponent(n+" q:A")}" target="_blank" rel="noopener">${ico}<span>Escuchar el canto${names.length>1?` · <i>${n}</i>`:""}</span><span aria-hidden="true">↗</span></a>`).join("")}<p class="songnote">Abre en xeno-canto las mejores grabaciones de la especie; pulsa ▶ en la primera.</p></div>`;
}
function stopSong(){ if(curAudio){curAudio.a.pause();curAudio.btn.setAttribute("aria-pressed","false");curAudio.btn.querySelector(".lbl").textContent="Escuchar el canto";curAudio=null;} }
document.addEventListener("click",e=>{
  const btn=e.target.closest("[data-song]"); if(!btn) return;
  if(curAudio&&curAudio.btn===btn){ stopSong(); return; }
  stopSong();
  const a=new Audio(SONGS[btn.dataset.song].src);
  const bar=btn.querySelector(".bar i");
  a.addEventListener("timeupdate",()=>{ if(a.duration) bar.style.width=(100*a.currentTime/a.duration)+"%"; });
  a.addEventListener("ended",()=>{ bar.style.width="0"; stopSong(); });
  curAudio={a,btn}; btn.setAttribute("aria-pressed","true"); btn.querySelector(".lbl").textContent="Pausar";
  a.play().catch(()=>stopSong());
});
function openBird(id,from){
  const b=BIRDS.find(x=>x.id===id); if(!drawer.classList.contains("open")) lastFocus=from||document.activeElement;
  closeIndex(true);
  const seq=CUR.some(x=>x.id===id)?CUR:BIRDS; const k=seq.findIndex(x=>x.id===id);
  const prev=seq[(k-1+seq.length)%seq.length], next=seq[(k+1)%seq.length];
  const ARR=d=>`<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="${d}" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const dnav=`<div class="dnav"><div class="dnav-in">
      <button class="navbtn back" id="closeBtn" data-act="close">${ARR("M10 3L5 8l5 5")}<span>Todas las aves</span></button>
      <span class="navgrp"><span class="navcount mono">${k+1} / ${seq.length}</span>
      <button class="navbtn icon" data-go="${prev.id}" aria-label="Anterior: ${prev.common}">${ARR("M10 3L5 8l5 5")}</button>
      <button class="navbtn icon" data-go="${next.id}" aria-label="Siguiente: ${next.common}">${ARR("M6 3l5 5-5 5")}</button></span>
    </div></div>`;
  const nextCard=`<div class="nextrow">
      <button class="nextcard" data-go="${prev.id}"><img src="${mini(prev.photos[0].img)}" alt=""><span><small>Anterior</small><b>${prev.common}</b></span></button>
      <button class="nextcard r" data-go="${next.id}"><span><small>Siguiente</small><b>${next.common}</b></span><img src="${mini(next.photos[0].img)}" alt=""></button>
    </div>
    <button class="backall" data-act="close">${ARR("M10 3L5 8l5 5")} Volver a todas las aves</button>`;
  const [iTxt,iCol]=IUCN[b.iucn];
  const thumbs=b.photos.length>1?`<div class="thumbs" role="tablist" aria-label="Fotos">${b.photos.map((p,i)=>`<button class="thumb" data-i="${i}" aria-selected="${i===0}" aria-label="Foto ${i+1}: ${p.ind}"><img src="${mini(p.img)}" alt=""></button>`).join("")}</div>`:"";
  const mig=b.migration?`
    <div style="display:grid;gap:4px;margin-bottom:14px">
      <p style="font-weight:600">${b.migration.type} <span class="mono" style="font-weight:400;color:var(--muted);font-size:12.5px">· ${b.migration.km}</span></p>
      <p class="note">${b.migration.note}</p>
    </div>
    <div style="border-radius:6px;overflow:hidden;box-shadow:0 0 0 1px var(--line)">${routeSVG(b.migration)}</div>
    <p class="note" style="margin:6px 0 16px">Ruta aproximada sobre un mapa de las Américas; Colombia resaltada. Línea continua: viaje al sur (otoño). Punteada: regreso al norte (marzo–mayo). Franja tenue: resto del área de invernada.</p>
    <ol class="tl">${b.migration.stops.map(s=>`<li class="${s.here?'here':''}"><p style="font-weight:600;font-size:14px">${s.name}</p><p class="mono" style="font-size:11.5px;color:var(--muted)">${s.role} · ${s.when} · ${s.lat.toFixed(1)}°${s.lat>=0?'N':'S'}</p></li>`).join("")}</ol>`
    :b.feral?`<div class="resident-box" style="border-color:var(--gold)"><p style="font-weight:600;color:var(--gold)">Ave asilvestrada</p><p class="note" style="margin-top:2px">${b.statusNote||"De origen doméstico, pero vive libre y se reproduce sola."}</p></div>`
    :b.domestic?`<div class="resident-box" style="border-color:var(--gold)"><p style="font-weight:600;color:var(--gold)">Ave doméstica</p><p class="note" style="margin-top:2px">${b.statusNote||"Vive al cuidado de las personas; no es fauna silvestre."}</p></div>`
    :`<div class="resident-box"><p style="font-weight:600;color:var(--resident)">Residente</p><p class="note" style="margin-top:2px">Vive en ${LUGAR.region} todo el año y se reproduce aquí. No realiza migraciones estacionales.</p></div>`;
  const confBox=b.conf==="alta"?"":`<div class="confbox"><p style="font-weight:600">Identificación ${b.conf==="baja"?"tentativa":"por confirmar"}</p><p class="note" style="margin-top:2px">${b.confNote}</p></div>`;

  body.innerHTML=`
    ${dnav}
    <div class="dhero">
      <div class="media" id="dMedia">${mediaHTML(b,b.photos[0])}</div>
      <div class="ttl">
        <p class="eyebrow" style="color:#C9D6CC">${b.family}</p>
        <h2 id="dTitle" style="margin-top:6px">${b.common}</h2>
        <p class="sci">${b.sci}</p>
        <p class="alt">${b.alt}</p>
        <div class="flex flex-wrap items-center gap-3" style="margin-top:14px">
          <span class="iucn" title="Lista Roja UICN"><b style="background:${iCol}">${b.iucn}</b>${iTxt}</span>
          ${tag(b)}
        </div>
        ${b.trend?`<div class="trendbox"><b>${TR[b.trend.v][0]}</b><div><strong>Población ${TR[b.trend.v][1].toLowerCase()}.</strong> ${b.trend.t}</div></div>`:""}
        ${b.domestic?"":songLinks(b)}
        ${confBox}
      </div>
      ${thumbs}
      <div class="spbar">${b.sw.map(s=>`<i style="background:${s[0]}"></i>`).join("")}</div>
    </div>
    <div style="padding:0 22px 28px">
      <section class="sec" style="border-top:0"><h3>Cómo es</h3>
        <p style="max-width:62ch;font-size:16px">${b.desc}</p>
      </section>
      <div class="facts">
        <div class="fact"><span class="ico" style="background:var(--gold)"></span><h4>Qué come</h4><p>${b.diet}</p></div>
        <div class="fact"><span class="ico" style="background:var(--piranga)"></span><h4>Hábitos</h4><p>${(HAB[b.id]||[])[0]||""}</p></div>
        <div class="fact"><span class="ico" style="background:var(--moss)"></span><h4>Hábitat</h4><p>${b.habitat}</p></div>
        ${b.tip?`<div class="fact wide" style="border:1px solid var(--piranga)"><span class="ico" style="background:var(--piranga)"></span><h4>Ayúdalo</h4><p>${b.tip}</p></div>`:""}
        <div class="fact wide"><span class="ico" style="background:var(--resident)"></span><h4>Dónde verlo en ${LUGAR.corto}</h4><p>${(HAB[b.id]||[])[1]||""}</p></div>
      </div>
      <section class="sec"><h3>Paleta de plumaje</h3>
        <div class="swl">${b.sw.map(s=>`<div><i style="background:${s[0]}"></i><span>${s[1]}</span></div>`).join("")}</div>
      </section>
      <section class="sec"><h3>Comportamiento migratorio</h3>
        <div style="margin-bottom:16px"><p class="note" style="margin-bottom:6px">${b.migration?'Meses en '+LUGAR.region:'Presente todo el año'}</p>${monthsBar(b)}
          <div class="months mono" style="margin-top:4px">${MES.map(m=>`<span style="font-size:10px;color:var(--muted);text-align:center">${m}</span>`).join("")}</div></div>
        ${mig}
      </section>
      ${nextCard}
    </div>`;
  body.querySelectorAll(".thumb").forEach(t=>t.addEventListener("click",()=>{
    const p=b.photos[+t.dataset.i];
    $("#dMedia").innerHTML=mediaHTML(b,p);
    body.querySelectorAll(".thumb").forEach(x=>x.setAttribute("aria-selected",x===t));
  }));
  body.scrollTop=0;
  drawer.classList.add("open");scrim.classList.add("open");drawer.setAttribute("aria-hidden","false");
  document.documentElement.style.overflow="hidden";
  setTimeout(()=>$("#closeBtn").focus(),50);
}
function closeDrawer(){
  stopSong();
  const v=body.querySelector("video"); if(v) v.pause();
  drawer.classList.remove("open");scrim.classList.remove("open");drawer.setAttribute("aria-hidden","true");
  document.documentElement.style.overflow="";if(lastFocus)lastFocus.focus();
}
drawer.addEventListener("click",e=>{
  const g=e.target.closest("[data-go]"); if(g){ stopSong(); const v=body.querySelector("video"); if(v) v.pause(); openBird(g.dataset.go); return; }
  if(e.target.closest('[data-act="close"]')) closeDrawer();
});
scrim.addEventListener("click",()=>{closeDrawer();closeIndex();});
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){ if(drawer.classList.contains("open"))closeDrawer(); else closeIndex(); }
  if(drawer.classList.contains("open")&&(e.key==="ArrowRight"||e.key==="ArrowLeft")&&!e.target.closest("video,select,input")){
    const b=body.querySelector(`.navbtn.icon[data-go]:${e.key==="ArrowRight"?"last-of-type":"first-of-type"}`); if(b) b.click(); }
});

/* Índice lateral */
const idx=$("#index");
function buildIndex(){
  const grp=(title,arr)=>!arr.length?'':`<p class="eyebrow" style="padding:18px 20px 8px">${title} · ${arr.length}</p><ul>${arr.map(b=>`<li><button class="idxitem" data-id="${b.id}"><img src="${mini(b.photos[0].img)}" alt="" loading="lazy"><span><b>${b.common}</b><i>${b.sci}</i></span><span class="idxdot ${b.domestic?'d':b.migration?'m':'r'}"></span></button></li>`).join("")}</ul>`;
  $("#idxBody").innerHTML=grp("Migratorias",BIRDS.filter(b=>b.migration))+grp("Residentes",BIRDS.filter(b=>!b.migration&&!b.domestic))+grp("Domésticas y asilvestradas",BIRDS.filter(b=>b.domestic));
}
function openIndex(){ buildIndex(); idx.classList.add("open"); scrim.classList.add("open"); idx.setAttribute("aria-hidden","false"); document.documentElement.style.overflow="hidden"; setTimeout(()=>$("#idxClose").focus(),50); }
function closeIndex(keep){ if(!idx.classList.contains("open"))return; idx.classList.remove("open"); idx.setAttribute("aria-hidden","true"); if(!keep){ scrim.classList.remove("open"); document.documentElement.style.overflow=""; } }
$("#idxOpen").addEventListener("click",openIndex);
$("#idxClose").addEventListener("click",()=>closeIndex());
$("#idxBody").addEventListener("click",e=>{const it=e.target.closest(".idxitem"); if(it) openBird(it.dataset.id,$("#idxOpen"));});

/* Volver arriba */
const toTop=$("#toTop");
addEventListener("scroll",()=>{toTop.hidden=scrollY<700;},{passive:true});
toTop.addEventListener("click",()=>scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"}));
render();

/* Ocultar secciones y filtros vacíos en este lugar */
(function(){
  const ih=document.querySelector(".idxhead .display"); if(ih) ih.textContent="Aves de "+LUGAR.nombre;
  const hasMig=BIRDS.some(b=>b.migration), hasDom=BIRDS.some(b=>b.domestic);
  if(!hasMig){ const s=$("#cal").closest("section"); if(s) s.hidden=true;
    const m=document.querySelector('.chip[data-f="mig"]'); if(m) m.hidden=true;
    const n=$("#nMig"); if(n&&n.parentElement) n.parentElement.hidden=true; }
  if(!hasDom){ const d=document.querySelector('.chip[data-f="dom"]'); if(d) d.hidden=true; }
  const sites=[...new Set(BIRDS.flatMap(b=>b.photos.filter(p=>!p.ext).map(p=>p.place)).filter(s=>s&&!/confirmar/.test(s)))];
  if(sites.length>1){
    const row=document.createElement("div"); row.className="places"; row.setAttribute("role","group"); row.setAttribute("aria-label","Sitio");
    row.innerHTML='<span class="eyebrow" style="flex:none">Sitio</span><button class="chip pchip" data-s="" aria-pressed="true">Todos</button>'+
      sites.map(s=>`<button class="chip pchip" data-s="${s}" aria-pressed="false">${s.split(",")[0]} <small>${BIRDS.filter(b=>b.photos.some(p=>!p.ext&&p.place===s)).length}</small></button>`).join("");
    document.querySelector("nav .places").after(row);
    row.addEventListener("click",e=>{const c=e.target.closest("[data-s]");if(!c)return;SITE=c.dataset.s;
      row.querySelectorAll("[data-s]").forEach(x=>x.setAttribute("aria-pressed",x===c));render();});
  }
  document.querySelectorAll(".chip[data-p]").forEach(c=>{ if(c.dataset.p && !BIRDS.some(b=>b.places.includes(c.dataset.p))) c.hidden=true; });
})();
