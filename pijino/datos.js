/* ═══════════════ CIÉNAGA DE PIJIÑO · MAGDALENA ═══════════════
   Para agregar una especie: copie un bloque de BIRDS, ponga sus fotos en fotos/
   (y una copia pequeña en fotos/mini/) y complete XTRA, HAB y PLACES con el mismo id. */
const LUGAR = {
  nombre: "Ciénaga de Pijiño", corto: "Pijiño",
  region: "la ciénaga", hero: "fotos/pandion.jpg"
};
const IMG = {}; for (const k of ["amazona","amazona2","pandion","pandion2","caracara","fluvicola","jacana","jacanaJuv","milvago","milvago2","milvagoJuv","nycticorax","nycticorax2","torquata","torquata2","aramus","crotophaga","alba","alba2","tigrisoma","alba2"]) IMG[k]="fotos/"+k+".jpg";
const PJ = "Ciénaga de Pijiño, Magdalena";
const HOME = {name:"Ciénaga de Pijiño, Magdalena", lat:9.33, lon:-74.45, when:"", role:"", here:true};

const BIRDS = [
/* ───────── MIGRATORIAS ───────── */
{
  id:"pandion-haliaetus", common:"Águila pescadora", alt:"Osprey",
  sci:"Pandion haliaetus", family:"Pandionidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.pandion, date:"", place:PJ, ind:"Con un pescado en las garras"},{img:IMG.pandion2, date:"", place:PJ, ind:"Secándose con las alas entreabiertas"}],
  desc:"Rapaz grande, parda por encima y blanca por debajo, con un antifaz oscuro que cruza el ojo. Es la única rapaz que se alimenta casi solo de peces: tiene espinas en la planta de las patas y puede girar un dedo hacia atrás para sujetar presas resbalosas.",
  diet:"Peces vivos, que atrapa lanzándose en picada con las patas por delante y a veces hundiéndose por completo.",
  habitat:"Ciénagas, ríos, lagunas, embalses y costas en casi todo el mundo.",
  migration:{type:"Larga distancia", km:"hasta ~7.000 km por trayecto",
    note:"Las que se ven en la ciénaga crían en Norteamérica y vienen a pasar el invierno del norte. Los jóvenes suelen quedarse en Suramérica todo su primer año y medio antes de regresar a criar, así que algunas se ven incluso a mitad de año.",
    stops:[
      {name:"Este de EE. UU. y Canadá", lat:44, lon:-75, when:"Abr–ago", role:"Cría"},
      {name:"Florida", lat:27, lon:-81, when:"Sep", role:"Paso"},
      {name:"Cuba y La Española", lat:20, lon:-75, when:"Sep–oct", role:"Paso"},
      {...HOME, when:"Oct–abr", role:"Invernada"}],
    rangeTo:{lat:-15, lon:-55, name:"Brasil"}}
},
/* ───────── RESIDENTES ───────── */
{
  id:"aramus-guarauna", common:"Carrao", alt:"Correa · Limpkin",
  sci:"Aramus guarauna", family:"Aramidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.aramus, date:"", place:PJ, ind:"Adulto entre las ramas de la orilla"}],
  desc:"Ave grande, parda oscura con el cuello salpicado de manchas blancas y un pico largo, algo curvo y torcido en la punta. Es la única especie de su familia en el mundo. Su grito nocturno, un lamento fuerte y largo, ha dado lugar a leyendas en muchos pueblos ribereños.",
  diet:"Casi solo caracoles grandes de agua dulce; la punta torcida del pico le sirve para sacarlos de la concha sin romperla.",
  habitat:"Ciénagas, pantanos y orillas con vegetación densa.",
  migration:null
},
{
  id:"tigrisoma-lineatum", common:"Vaco colorado", alt:"Garza tigre · Rufescent Tiger-Heron",
  sci:"Tigrisoma lineatum", family:"Ardeidae", iucn:"LC", conf:"media",
  confNote:"Es un juvenil: los jóvenes de las garzas tigre se parecen mucho entre sí. El vaco colorado es el más común en las ciénagas de tierras bajas del Caribe.",
  photos:[{img:IMG.tigrisoma, date:"", place:PJ, ind:"Juvenil, con el barrado de «tigre»"}],
  desc:"El juvenil, como el de la foto, es canela con barras negras, un camuflaje perfecto entre juncos y hojas secas. El adulto tiene la cabeza y el cuello castaño rojizo. Ante el peligro se queda inmóvil con el pico apuntando al cielo para confundirse con la vegetación.",
  diet:"Peces, ranas, cangrejos e insectos acuáticos que acecha inmóvil en la orilla.",
  habitat:"Orillas sombreadas de ciénagas, caños y bosques inundables.",
  migration:null
},
{
  id:"nycticorax-nycticorax", common:"Guaco", alt:"Martinete común · Black-crowned Night-Heron",
  sci:"Nycticorax nycticorax", family:"Ardeidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.nycticorax, date:"", place:PJ, ind:"Adulto, de ojo rojo"},{img:IMG.nycticorax2, date:"", place:PJ, ind:"Posado en ramas secas al atardecer"}],
  desc:"Garza rechoncha, de cuello corto, con la corona y la espalda negras, el resto gris pálido y unos grandes ojos rojos adaptados para cazar de noche.",
  diet:"Peces, ranas, cangrejos e insectos que caza sobre todo al anochecer y de noche.",
  habitat:"Ciénagas, manglares y orillas con árboles, donde descansa de día en grupos.",
  migration:null
},
{
  id:"ardea-alba", common:"Garza real", alt:"Garceta grande · Great Egret",
  sci:"Ardea alba", family:"Ardeidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.alba2, date:"", place:PJ, ind:"Asomada sobre la vegetación de la orilla, con el pico amarillo"},{img:IMG.alba, date:"", place:PJ, ind:"En vuelo al atardecer"}],
  desc:"Garza blanca grande, de pico amarillo y patas negras. En época de cría le crecen plumas largas y finas en la espalda; por ellas casi desaparece hacia 1900, cuando se usaban en los sombreros de moda.",
  diet:"Peces, ranas, cangrejos e insectos grandes; caza caminando despacio o esperando inmóvil.",
  habitat:"Ciénagas, ríos, manglares, arrozales y potreros inundados.",
  migration:null
},
{
  id:"jacana-jacana", common:"Gallito de ciénaga", alt:"Jacana carunculada · Wattled Jacana",
  sci:"Jacana jacana", family:"Jacanidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.jacana, date:"", place:PJ, ind:"Adulto caminando en el pasto húmedo"},{img:IMG.jacanaJuv, date:"", place:PJ, ind:"Juvenil: blanco por debajo, con ceja clara"}],
  desc:"El adulto es negro, con escudo y carúnculas rojas en la frente y pico amarillo. El juvenil es completamente distinto: pardo por encima, blanco por debajo y con una ceja blanca. Los machos incuban y cuidan a los pichones; la hembra defiende el territorio y tiene varias parejas.",
  diet:"Insectos, caracoles, pececitos y semillas que recoge de la vegetación flotante.",
  habitat:"Ciénagas, lagunas y potreros inundados con plantas flotantes.",
  migration:null
},
{
  id:"megaceryle-torquata", common:"Martín pescador grande", alt:"Martín gigante · Ringed Kingfisher",
  sci:"Megaceryle torquata", family:"Alcedinidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.torquata, date:"", place:PJ, ind:"Hembra, con la banda azul en el pecho"},{img:IMG.torquata2, date:"", place:PJ, ind:"Vigilando el agua desde una rama seca"}],
  desc:"El martín pescador más grande de América: dorso gris azulado, collar blanco, cresta despeinada y vientre castaño. La hembra, como la de la foto, tiene además una banda gris azulada que cruza el pecho.",
  diet:"Peces, que atrapa lanzándose de cabeza desde una percha o después de cernirse en el aire.",
  habitat:"Ciénagas, ríos anchos, lagunas y manglares. Anida en túneles que excava en barrancos de tierra.",
  migration:null
},
{
  id:"chloroceryle-amazona", common:"Martín pescador amazónico", alt:"Amazon Kingfisher",
  sci:"Chloroceryle amazona", family:"Alcedinidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.amazona, date:"", place:PJ, ind:"Posado sobre el agua, con la cresta levantada"},{img:IMG.amazona2, date:"", place:PJ, ind:"A contraluz al amanecer"}],
  desc:"Verde oscuro brillante por encima, con collar blanco y un pico largo y pesado. El macho tiene una banda castaña en el pecho; la hembra, verde. Es el más grande de los martines pescadores verdes.",
  diet:"Peces pequeños y medianos que caza zambulléndose desde ramas bajas.",
  habitat:"Orillas de ciénagas, caños y ríos con ramas sobre el agua.",
  migration:null
},
{
  id:"fluvicola-pica", common:"Viudita", alt:"Viudita acuática · Pied Water-Tyrant",
  sci:"Fluvicola pica", family:"Tyrannidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.fluvicola, date:"", place:PJ, ind:"Adulto, blanco y negro"}],
  desc:"Pequeño atrapamoscas blanco con la nuca, la espalda y las alas negras, como un traje de viuda. Mueve la cola continuamente.",
  diet:"Insectos pequeños que caza saltando entre la vegetación flotante y las orillas.",
  habitat:"Orillas de ciénagas, lagunas y canales con plantas acuáticas.",
  migration:null
},
{
  id:"caracara-cheriway", common:"Caracara copetón", alt:"Carancho · Crested Caracara",
  sci:"Caracara cheriway", family:"Falconidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.caracara, date:"", place:PJ, ind:"Posado en un tronco seco"}],
  desc:"Halcón grande y de patas largas, con capucha negra, cara roja desnuda, cuello blanco y pecho barrado. A diferencia de casi todas las rapaces, camina mucho por el suelo.",
  diet:"Carroña, peces moribundos, tortugas pequeñas, insectos y lo que encuentre; también roba presas a otras aves.",
  habitat:"Sabanas, potreros y orillas abiertas de ciénagas de tierras bajas.",
  migration:null
},
{
  id:"milvago-chimachima", common:"Pigua", alt:"Caracara chimachima · Yellow-headed Caracara",
  sci:"Milvago chimachima", family:"Falconidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.milvago, date:"", place:PJ, ind:"Adulto posado en una rama"},{img:IMG.milvagoJuv, date:"", place:PJ, ind:"Juvenil en vuelo, pardo y rayado"}],
  desc:"Cabeza y partes inferiores color crema, una línea oscura detrás del ojo y dorso pardo oscuro. El juvenil, como el de la tercera foto, es pardo rayado. Pariente de los halcones, pero oportunista como un gallinazo.",
  diet:"Carroña, insectos, lagartijas, frutos y garrapatas, que les saca del lomo al ganado.",
  habitat:"Potreros con árboles y orillas abiertas de tierras bajas.",
  migration:null
},
{
  id:"crotophaga-ani", common:"Garrapatero piquiliso", alt:"Smooth-billed Ani",
  sci:"Crotophaga ani", family:"Cuculidae", iucn:"LC", conf:"media",
  confNote:"El pico alto y con joroba apunta al piquiliso. Su pariente, el garrapatero de pico estriado, también vive en la región; en esta foto no se ven bien los surcos del pico.",
  photos:[{img:IMG.crotophaga, date:"", place:PJ, ind:"Pareja en una rama"}],
  desc:"Negro, con aspecto desaliñado, cola larga y un pico alto y comprimido con una joroba arriba. Vive en grupos que comparten un solo nido, donde varias hembras ponen sus huevos.",
  diet:"Saltamontes y otros insectos, a menudo los que espanta el ganado; algunos frutos.",
  habitat:"Potreros, rastrojos y orillas con matorral.",
  migration:null
}];

const XTRA={
 "pandion-haliaetus":{sw:[["#4A3828","Dorso"],["#F4F2EC","Vientre"],["#1E1A16","Antifaz"]],m:[10,11,12,1,2,3,4]},
 "aramus-guarauna":{sw:[["#5A3E2A","Plumaje"],["#F4F0E8","Manchas"],["#B89A5A","Pico"]]},
 "tigrisoma-lineatum":{sw:[["#C8955A","Canela"],["#1E1A16","Barrado"],["#8A3E26","Adulto"]]},
 "nycticorax-nycticorax":{sw:[["#1E2A36","Corona"],["#B8BCC0","Cuerpo"],["#C8282A","Ojo"]]},
 "ardea-alba":{sw:[["#F7F7F5","Plumaje"],["#E8C03A","Pico"],["#151515","Patas"]]},
 "jacana-jacana":{sw:[["#2A1A16","Adulto"],["#D22A2A","Escudo"],["#E8C83A","Pico"],["#8A6A4A","Juvenil"]]},
 "megaceryle-torquata":{sw:[["#5A7A9A","Dorso"],["#F4F4F0","Collar"],["#A84E2A","Vientre"]]},
 "chloroceryle-amazona":{sw:[["#1E5A4A","Dorso"],["#F4F4F0","Collar"],["#151515","Pico"]]},
 "fluvicola-pica":{sw:[["#F7F7F5","Cuerpo"],["#141414","Espalda"]]},
 "caracara-cheriway":{sw:[["#1E1A16","Capucha"],["#E05A3A","Cara"],["#F2EEE4","Cuello"]]},
 "milvago-chimachima":{sw:[["#E9DFC8","Cabeza"],["#4A3626","Dorso"],["#8A6A4A","Juvenil"]]},
 "crotophaga-ani":{sw:[["#141418","Plumaje"],["#2A3040","Brillo"]]}
};

const HAB={
 "pandion-haliaetus":["Patrulla la ciénaga en vuelo alto, se cierne un momento y se lanza en picada con las patas por delante. Después se lleva el pescado a una percha alta, sosteniéndolo de cabeza hacia adelante para cortar el viento.","Árboles secos y altos junto al agua, de octubre a abril."],
 "aramus-guarauna":["Camina despacio entre la vegetación, con un paso que parece cojo. Grita sobre todo al amanecer, al atardecer y de noche.","Orillas con arbustos y vegetación densa; donde hay montones de conchas de caracol vacías."],
 "tigrisoma-lineatum":["Solitario y paciente: se queda quieto largo rato en la orilla. Si se siente observado, estira el cuello hacia arriba y se balancea con los juncos.","Orillas sombreadas y bordes de caños, al amanecer."],
 "nycticorax-nycticorax":["De día descansa encorvado en grupos, en árboles sobre el agua. Al anochecer sale a cazar y se oye un «cuac» seco en vuelo.","Árboles y ramas secas de la orilla, al atardecer."],
 "ardea-alba":["Camina despacio con el cuello estirado y se queda quieta acechando. Al atardecer vuela en grupos a dormir en árboles junto al agua.","Orillas de la ciénaga y potreros inundados."],
 "jacana-jacana":["Camina sobre la vegetación flotante. Al aterrizar levanta las alas y muestra el amarillo. Es ruidoso y defiende su espacio a gritos.","Espejos de agua con plantas flotantes y potreros encharcados."],
 "megaceryle-torquata":["Ruidoso: vuela sobre el agua dando un traqueteo fuerte. Vigila desde ramas altas y se lanza de cabeza.","Ramas secas y altas sobre la ciénaga y los caños."],
 "chloroceryle-amazona":["Más callado que el martín grande; vigila desde ramas bajas y vuela rasante sobre el agua.","Ramas bajas sobre la orilla de caños y ciénaga."],
 "fluvicola-pica":["Inquieta: salta entre la vegetación flotante y las orillas, abriendo la cola. Anda sola o en pareja.","Plantas flotantes y orillas con juncos."],
 "caracara-cheriway":["Camina por el suelo como un gallinazo y se posa en lo alto de troncos secos. Echa la cabeza hacia atrás cuando grita.","Troncos secos y potreros abiertos junto a la ciénaga."],
 "milvago-chimachima":["Confiado y oportunista; se posa sobre el ganado para quitarle garrapatas. Su grito es un chillido agudo y quejumbroso.","Árboles aislados y matorrales junto a potreros."],
 "crotophaga-ani":["Anda en grupos familiares que se mueven juntos con vuelos cortos y planeados; al amanecer se asolean con las alas abiertas.","Matorrales y cercas junto a potreros."]
};

const PLACES={
 "pandion-haliaetus":["humedal","cielo"],"aramus-guarauna":["humedal"],"tigrisoma-lineatum":["humedal"],
 "nycticorax-nycticorax":["humedal","arboles"],"ardea-alba":["humedal"],"jacana-jacana":["humedal","prado"],
 "megaceryle-torquata":["humedal"],"chloroceryle-amazona":["humedal"],"fluvicola-pica":["humedal"],
 "caracara-cheriway":["prado","arboles"],"milvago-chimachima":["prado","arboles"],"crotophaga-ani":["prado","arboles"]};
const TREND={};
