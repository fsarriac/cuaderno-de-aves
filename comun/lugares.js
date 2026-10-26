/* Menú flotante de lugares: siempre a mano para saltar a otro lugar o volver a la portada */
(function(){
  var L=[["bogota","Bogotá"],["cartagena","Cartagena y alrededores"],["pijino","Ciénaga de Pijiño"],["cafetera","Zona Cafetera"],["boyaca","Boyacá"],["barichara","Barichara"]];
  var here=location.pathname.split("/").filter(Boolean).slice(-2).join("/");
  var st=document.createElement("style");
  st.textContent=".lnav{position:fixed;z-index:40;left:max(16px,env(safe-area-inset-left,0px));bottom:calc(16px + env(safe-area-inset-bottom,0px));font-family:'Public Sans',system-ui,sans-serif}"+
  ".lnav>button{display:flex;align-items:center;gap:8px;background:#0B1712;color:#EEF3EC;border:0;border-radius:999px;padding:10px 16px;font:600 14px/1 inherit;box-shadow:0 6px 20px rgba(0,0,0,.25),inset 0 0 0 1px rgba(238,243,236,.22);cursor:pointer}"+
  ".lnav ul{list-style:none;margin:0 0 10px;padding:6px;position:absolute;bottom:100%;left:0;min-width:240px;background:#0B1712;border-radius:14px;box-shadow:0 10px 30px rgba(0,0,0,.3)}"+
  ".lnav ul[hidden]{display:none}.lnav a{display:block;padding:10px 12px;border-radius:9px;color:#EEF3EC;text-decoration:none;font-size:15px}"+
  ".lnav a:hover{background:rgba(238,243,236,.1)}.lnav a[aria-current]{color:#F2C14E;font-weight:600}.lnav .home{border-bottom:1px solid rgba(238,243,236,.15);margin-bottom:4px;padding-bottom:12px;border-radius:9px 9px 0 0}"+
  ".drawer.open~.lnav,html[style*='overflow: hidden'] .lnav{display:none}";
  document.head.appendChild(st);
  var n=document.createElement("nav"); n.className="lnav"; n.setAttribute("aria-label","Lugares");
  var items='<li><a class="home" href="../">← Todos los lugares</a></li><li><a href="../especies/"'+(here.indexOf("especies")===0?' aria-current="page"':'')+' style="border-bottom:1px solid rgba(238,243,236,.15);border-radius:0">Explorar por especies</a></li>'+L.map(function(x){var cur=here.indexOf(x[0])===0;return '<li><a href="../'+x[0]+'/"'+(cur?' aria-current="page"':'')+'>'+x[1]+'</a></li>';}).join("");
  n.innerHTML='<ul id="lnavList" hidden>'+items+'</ul><button type="button" aria-expanded="false" aria-controls="lnavList"><svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M8 15s5-4.6 5-8.5A5 5 0 0 0 3 6.5C3 10.4 8 15 8 15z" stroke="currentColor" stroke-width="1.7"/><circle cx="8" cy="6.5" r="1.8" fill="currentColor"/></svg><span>Lugares</span></button>';
  var b=n.querySelector("button"), u=n.querySelector("ul");
  b.addEventListener("click",function(e){e.stopPropagation();u.hidden=!u.hidden;b.setAttribute("aria-expanded",!u.hidden);});
  document.addEventListener("click",function(e){if(!n.contains(e.target)){u.hidden=true;b.setAttribute("aria-expanded","false");}});
  document.addEventListener("keydown",function(e){if(e.key==="Escape"){u.hidden=true;b.setAttribute("aria-expanded","false");}});
  document.body.appendChild(n);
})();
