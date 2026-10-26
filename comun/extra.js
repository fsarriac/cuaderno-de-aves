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
