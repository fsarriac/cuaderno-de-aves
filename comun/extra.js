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
/* sitio-link: enlace directo a un sitio dentro de un lugar, p. ej. bogota/#sitio=san-simon */
(function(){
  var norm=function(s){return (s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");};
  function go(){
    var m=location.hash.match(/^#sitio=([\w-]+)/); if(!m) return;
    var want=norm(decodeURIComponent(m[1]));
    var chips=[].slice.call(document.querySelectorAll("[data-s]")).filter(function(c){return c.dataset.s;});
    var c=chips.find(function(c){return norm(c.dataset.s.split(",")[0]).indexOf(want)>=0||norm(c.dataset.s).indexOf(want)>=0;});
    if(!c) return;
    c.click();
    var g=document.getElementById("grid"); if(g) setTimeout(function(){g.scrollIntoView({block:"start"});},80);
  }
  if(document.readyState==="complete") setTimeout(go,120); else addEventListener("load",function(){setTimeout(go,120);});
  addEventListener("hashchange",go);
})();
/* sitios-portada: en los lugares con varios sitios (LUGAR.sitiosFoto), tarjetas debajo de la portada para escoger
   a cuál entrar; al tocar una, se filtra el cuaderno a ese sitio y se baja a las especies */
(function(){
  if(typeof LUGAR==="undefined"||!LUGAR.sitiosFoto) return;
  function build(){
    var chips=[].slice.call(document.querySelectorAll(".pchip[data-s]")).filter(function(c){return c.dataset.s;});
    if(!chips.length) return;
    var EN=window.LANG==="en";
    var st=document.createElement("style");
    st.textContent=".sitios-pick{padding-block:40px 4px}.sp-grid{display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));margin-top:16px}"+
      ".sp-card{display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;text-align:left;border:0;padding:0;border-radius:12px;overflow:hidden;background:var(--card,#fff);box-shadow:0 1px 0 var(--line);cursor:pointer;font:inherit;color:inherit;transition:transform 220ms cubic-bezier(.23,1,.32,1),box-shadow 220ms ease}"+
      ".sp-card img{display:block;width:100%;aspect-ratio:4/3;object-fit:cover;background:var(--line)}"+
      ".sp-card .t{padding:12px 14px 14px}.sp-card b{display:block;font-family:var(--serif,Newsreader,serif);font-size:19px;line-height:1.15}"+
      ".sp-card small{display:block;margin-top:4px;font-family:var(--mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}"+
      "@media (max-width:560px){.sp-grid{grid-template-columns:1fr 1fr;gap:10px}.sp-card b{font-size:16px}.sp-card .t{padding:10px 10px 12px}}"+
      "@media (hover:hover) and (pointer:fine){.sp-card:hover{transform:translateY(-3px);box-shadow:0 10px 26px rgba(0,0,0,.12)}}"+
      ".sp-card:active{transform:scale(.985)}.sp-card[aria-pressed=true]{outline:2px solid var(--accent,#E0623E);outline-offset:2px}";
    document.head.appendChild(st);
    var sec=document.createElement("section"); sec.className="wrap sitios-pick";
    sec.innerHTML='<p class="eyebrow">'+(EN?"Sites":"Sitios")+'</p><h2 class="display" style="font-size:clamp(26px,3.4vw,34px);line-height:1.1;font-weight:600;margin-top:6px">'+
      (EN?"Choose where to start":"Escoge por dónde entrar")+'</h2><div class="sp-grid"></div>';
    var grid=sec.querySelector(".sp-grid");
    chips.forEach(function(c){
      var s=c.dataset.s, foto=LUGAR.sitiosFoto[s]; if(!foto) return;
      var n=(c.querySelector("small")||{}).textContent||"";
      var parts=s.split(","), name=parts[0], where=(parts[1]||"").trim();
      var b=document.createElement("button"); b.className="sp-card"; b.type="button"; b.setAttribute("aria-pressed","false");
      b.innerHTML='<img src="'+foto+'" alt="" loading="lazy"><span class="t"><b>'+name+'</b><small>'+(where?where+" · ":"")+n+" "+(EN?"species":"especies")+'</small></span>';
      b.addEventListener("click",function(){
        c.click();
        grid.querySelectorAll(".sp-card").forEach(function(x){x.setAttribute("aria-pressed",x===b);});
        var g=document.getElementById("grid"); if(g) g.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});
      });
      grid.appendChild(b);
    });
    /* si se vuelve a "Todos" en los filtros, se desmarcan las tarjetas */
    document.addEventListener("click",function(e){if(e.target.closest&&e.target.closest(".pchip[data-s]")) grid.querySelectorAll(".sp-card").forEach(function(x){x.setAttribute("aria-pressed","false");});},true);
    var hero=document.querySelector("section.hero"); if(hero) hero.after(sec);
  }
  if(document.readyState==="complete") setTimeout(build,60); else addEventListener("load",function(){setTimeout(build,60);});
})();
