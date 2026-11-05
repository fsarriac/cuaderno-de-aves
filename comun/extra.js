/* Complementos de la ficha: abrir un ave desde un enlace (#ave=id) y mostrar todos los lugares donde se ha visto */
(function(){
  if(typeof openBird!=="function"||typeof BIRDS==="undefined") return;
  var EN=(window.LANG==="en");
  var here=location.pathname.split("/").filter(Boolean).pop();
  var orig=openBird;
  openBird=function(id,from){
    orig(id,from);
    var b=BIRDS.find(function(x){return x.id===id;}); if(!b||typeof VISTOS==="undefined") return;
    var k=b.sci.split(" / ")[0].replace(/ \(doméstico\)/,"");
    var v=(VISTOS[k]||[]); if(v.length<2) return;
    var facts=document.querySelector("#dBody .facts"); if(!facts) return;
    var d=document.createElement("div"); d.className="fact wide";
    d.innerHTML='<span class="ico" style="background:var(--gold)"></span><h4>'+(EN?"Places where I've seen it":"Lugares donde la he visto")+'</h4><p>'+
      v.map(function(x){return x.l===here?'<b>'+x.n+'</b>':'<a href="../'+x.l+'/#ave='+x.id+'" style="color:var(--resident);font-weight:600">'+x.n+'</a>';}).join(" · ")+'</p>';
    facts.appendChild(d);
  };
  function fromHash(){var m=location.hash.match(/^#ave=([\w-]+)/); if(m&&BIRDS.some(function(x){return x.id===m[1];})) setTimeout(function(){openBird(m[1]);},60);}
  fromHash(); addEventListener("hashchange",fromHash);
})();
/* zoom-foto: clic en la foto de la ficha la amplía a pantalla completa desde su sitio; otro clic (o Escape) la devuelve */
(function(){
  var st=document.createElement("style");
  st.textContent="#dMedia img{cursor:zoom-in}"+
  ".lbx{position:fixed;inset:0;z-index:200;background:rgba(6,14,10,0);transition:background-color 300ms ease;cursor:zoom-out;touch-action:none}"+
  ".lbx.on{background:rgba(6,14,10,.94)}"+
  ".lbx img{position:fixed;left:0;top:0;transform-origin:0 0;max-width:none;user-select:none;-webkit-user-drag:none;border-radius:2px}"+
  ".lbx .hint{position:fixed;left:50%;bottom:calc(18px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);font:500 12px 'IBM Plex Mono',monospace;color:#EEF3EC;opacity:0;transition:opacity 300ms ease 200ms;background:rgba(6,14,10,.6);padding:6px 12px;border-radius:999px}"+
  ".lbx.on .hint{opacity:.8}";
  document.head.appendChild(st);
  var EASE="cubic-bezier(.23,1,.32,1)", RM=matchMedia("(prefers-reduced-motion: reduce)");
  var cur=null;
  /* rectángulo que ocupa la foto dentro de su caja (object-fit: contain) */
  function shown(img){var r=img.getBoundingClientRect(),nw=img.naturalWidth||r.width,nh=img.naturalHeight||r.height,s=Math.min(r.width/nw,r.height/nh);
    return {x:r.left+(r.width-nw*s)/2,y:r.top+(r.height-nh*s)/2,w:nw*s,h:nh*s};}
  function target(nw,nh){var p=innerWidth<640?8:24,s=Math.min((innerWidth-2*p)/nw,(innerHeight-2*p)/nh);return {x:(innerWidth-nw*s)/2,y:(innerHeight-nh*s)/2,w:nw*s,h:nh*s};}
  function tf(a,t){return "translate("+a.x+"px,"+a.y+"px) scale("+(a.w/t.w)+")";}
  function open(img){
    var nw=img.naturalWidth,nh=img.naturalHeight; if(!nw) return;
    var from=shown(img),to=target(nw,nh);
    var o=document.createElement("div");o.className="lbx";o.setAttribute("role","dialog");o.setAttribute("aria-label",img.alt||"Foto ampliada");
    var c=new Image();c.src=img.currentSrc||img.src;c.alt=img.alt||"";c.style.width=to.w+"px";c.style.height=to.h+"px";
    var h=document.createElement("span");h.className="hint";var tc=matchMedia("(pointer:coarse)").matches;h.textContent=window.LANG==="en"?(tc?"Tap to close":"Click to close"):(tc?"Toca para cerrar":"Clic para cerrar");
    o.appendChild(c);o.appendChild(h);document.body.appendChild(o);
    img.style.visibility="hidden";
    c.style.transform=tf(to,to);
    if(!RM.matches) c.animate([{transform:tf(from,to)},{transform:tf(to,to)}],{duration:320,easing:EASE});
    else c.animate([{opacity:0},{opacity:1}],{duration:180,easing:"ease"});
    requestAnimationFrame(function(){o.classList.add("on");});
    cur={o:o,c:c,img:img,to:to};
    o.addEventListener("click",close);
  }
  function close(){
    if(!cur||cur.closing) return; cur.closing=true;
    var k=cur, back=shown(k.img);
    k.o.classList.remove("on");
    var a=RM.matches? k.c.animate([{opacity:1},{opacity:0}],{duration:150,easing:"ease",fill:"forwards"})
                    : k.c.animate([{transform:tf(k.to,k.to)},{transform:tf(back,k.to)}],{duration:240,easing:EASE,fill:"forwards"});
    a.onfinish=function(){k.img.style.visibility="";k.o.remove();if(cur===k)cur=null;};
  }
  document.addEventListener("click",function(e){var img=e.target.closest&&e.target.closest("#dMedia img");if(img&&!cur){e.preventDefault();e.stopPropagation();open(img);}},true);
  /* mientras está ampliada, Escape y las flechas solo cierran la foto (no la ficha) */
  window.addEventListener("keydown",function(e){if(cur&&(e.key==="Escape"||e.key==="ArrowLeft"||e.key==="ArrowRight")){e.stopImmediatePropagation();e.preventDefault();close();}},true);
  addEventListener("resize",function(){if(cur&&!cur.closing){var t=target(cur.img.naturalWidth,cur.img.naturalHeight);cur.to=t;cur.c.style.width=t.w+"px";cur.c.style.height=t.h+"px";cur.c.style.transform=tf(t,t);}});
})();
