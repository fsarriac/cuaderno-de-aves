/* ═══════════════ LA GUAJIRA ═══════════════
   Sitios: Camarones (Santuario de Fauna y Flora Los Flamencos) y Palomino. Cada foto indica su sitio en "place". */
const LUGAR = {
  nombre: "La Guajira", corto: "La Guajira",
  region: "las lagunas", hero: "fotos/flamenco.jpg"
};
const IMG = {}; for (const k of ["flamenco","flamenco2","rynchops","rufescens","thalasseus","pelecanus","pelecanusPL","pelecanus2","nannopterum","nannopterum2","caracara","albaPL","albaPL2","thulaPL","thulaPL3","thulaPL2"]) IMG[k]="fotos/"+k+".jpg";
const CM = "Camarones y Palomino, La Guajira";
const PL = CM;
const HOME = {name:"Camarones y Palomino, La Guajira", lat:11.43, lon:-73.03, when:"", role:"", here:true};
const BIRDS = [
{
  id:"phoenicopterus-ruber", common:"Flamenco del Caribe", alt:"Flamenco americano · American Flamingo", sci:"Phoenicopterus ruber", family:"Phoenicopteridae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.flamenco, date:"", place:CM, ind:"Caminando por la laguna, con el manglar al fondo"},{img:IMG.flamenco2, date:"", place:CM, ind:"Abriendo las alas: se ven las plumas negras del borde"}],
  desc:"Zancuda enorme, rosada a rojo coral, de cuello y patas larguísimos y un pico grueso doblado hacia abajo con la punta negra. Su color sale de los pigmentos de los camaroncitos y las algas que come: un flamenco mal alimentado se pone pálido. En vuelo muestra las plumas negras del borde del ala.",
  diet:"Camaroncitos de salmuera, larvas de insectos, algas y pequeños caracoles, que filtra con el pico boca abajo mientras camina por el agua.",
  habitat:"Lagunas costeras saladas, salinas y estuarios poco profundos; en Colombia vive sobre todo en La Guajira.",
  tip:"El Santuario de Fauna y Flora Los Flamencos protege las lagunas donde se alimenta. Verlo desde lejos y no acercarle las lanchas evita que gaste energía volando.",
  migration:null
},
{
  id:"rynchops-niger", common:"Rayador", alt:"Pico de tijera · Black Skimmer", sci:"Rynchops niger", family:"Laridae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.rynchops, date:"", place:CM, ind:"Bandada en vuelo: pico rojo y negro, con la mitad de abajo más larga"}],
  desc:"Negro por encima y blanco por debajo, de alas largas y con un pico rojo y negro único: la mitad de abajo es más larga que la de arriba. Vuela a ras del agua con la parte inferior del pico cortando la superficie y lo cierra de golpe cuando toca un pez.",
  diet:"Peces pequeños y camarones que atrapa en vuelo rasante, sobre todo al amanecer, al atardecer y de noche.",
  habitat:"Playas, bancos de arena, lagunas costeras y grandes ríos.",
  migration:null
},
{
  id:"egretta-rufescens", common:"Garza rojiza", alt:"Reddish Egret", sci:"Egretta rufescens", family:"Ardeidae", iucn:"NT", conf:"alta",
  photos:[{img:IMG.rufescens, date:"", place:CM, ind:"En el agua baja de la laguna: cuerpo gris azulado y cuello canela desgreñado"}],
  desc:"Garza mediana de cuerpo gris azulado, con la cabeza y el cuello color canela y las plumas desgreñadas. Los adultos tienen el pico rosado con la punta negra. Es la más inquieta de las garzas: caza corriendo en zigzag, dando giros y abriendo las alas para hacer sombra sobre el agua.",
  diet:"Peces pequeños que persigue en aguas someras y saladas.",
  habitat:"Lagunas costeras saladas, salinas y playas poco profundas; es una garza estrictamente costera.",
  tip:"Está casi amenazada: en el siglo XX la cacería por sus plumas casi la acaba, y hoy depende de que las lagunas costeras se conserven tranquilas.",
  migration:null
},
{
  id:"thalasseus-maximus", common:"Gaviotín real", alt:"Charrán real · Royal Tern", sci:"Thalasseus maximus", family:"Laridae", iucn:"LC", conf:"media",
  confNote:"Casi todos tienen el pico anaranjado de los gaviotines reales; a esta distancia no se puede descartar que en el grupo haya algún gaviotín patinegro.",
  photos:[{img:IMG.thalasseus, date:"", place:CM, ind:"Grupo descansando en un playón de la laguna"}],
  desc:"Ave marina blanca y gris perla, con una cresta negra despeinada en la nuca y pico grueso anaranjado. Muchos de los que se ven en el Caribe colombiano llegan desde las costas de Norteamérica fuera de su época de cría.",
  diet:"Peces pequeños que atrapa lanzándose en picada al agua.",
  habitat:"Costas, playas, bahías y desembocaduras; descansa en grupos sobre troncos, bancos de arena y muelles.",
  migration:null
},
{
  id:"pelecanus-occidentalis", common:"Pelícano pardo", alt:"Alcatraz · Brown Pelican", sci:"Pelecanus occidentalis", family:"Pelecanidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.pelecanus, date:"", place:CM, ind:"Joven nadando de frente, con el pico apoyado en el pecho"},{img:IMG.pelecanusPL, date:"", place:PL, ind:"Planeando de frente sobre la playa, con las alas totalmente abiertas"},{img:IMG.pelecanus2, date:"", place:CM, ind:"Grupo en un playón: varios se acicalan"}],
  desc:"Ave marina enorme, gris y parda, con la cabeza blanca amarillenta y una bolsa bajo el pico que se estira para atrapar peces. Es el único pelícano que pesca lanzándose en picada desde el aire.",
  diet:"Peces, sobre todo sardinas y lisas, que atrapa con la bolsa del pico después de zambullirse.",
  habitat:"Costas, bahías, manglares y bocas de ríos y canales.",
  migration:null
},
{
  id:"nannopterum-brasilianum", common:"Pato cuervo", alt:"Cormorán neotropical · Neotropic Cormorant", sci:"Nannopterum brasilianum", family:"Phalacrocoracidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.nannopterum, date:"", place:CM, ind:"Silueta en la orilla de la laguna"},{img:IMG.nannopterum2, date:"", place:CM, ind:"Grupo descansando en un playón, con una garza real al fondo"}],
  desc:"Negro, de cuello largo, cola larga y pico ganchudo con piel amarilla en la base. Sus plumas no son del todo impermeables: eso le ayuda a hundirse al bucear, pero después tiene que posarse con las alas abiertas para secarlas al sol.",
  diet:"Peces que persigue buceando, impulsándose con las patas palmeadas.",
  habitat:"Ciénagas, ríos, lagunas, manglares y costas.",
  migration:null
},
{
  id:"caracara-cheriway", common:"Caracara copetón", alt:"Carancho · Crested Caracara", sci:"Caracara cheriway", family:"Falconidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.caracara, date:"", place:CM, ind:"Despegando de la copa de un árbol espinoso"}],
  desc:"Halcón grande y de patas largas, con capucha negra, cara roja desnuda, cuello blanco y pecho barrado. A diferencia de casi todas las rapaces, camina mucho por el suelo.",
  diet:"Carroña, peces moribundos, tortugas pequeñas, insectos y lo que encuentre; también roba presas a otras aves.",
  habitat:"Sabanas, potreros y orillas abiertas de ciénagas de tierras bajas.",
  migration:null
},
{
  id:"ardea-alba", common:"Garza real", alt:"Garceta grande · Great Egret", sci:"Ardea alba", family:"Ardeidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.albaPL, date:"", place:PL, ind:"En la orilla de piedras del río, frente a un tronco varado"},{img:IMG.albaPL2, date:"", place:PL, ind:"Volando bajo sobre el río"}],
  desc:"Garza blanca grande, de pico amarillo y patas negras, mucho más grande que la garza patiamarilla y la garcita del ganado. En época de cría le crecen plumas largas y finas en la espalda; por ellas casi desaparece hacia 1900, cuando se usaban en los sombreros de moda.",
  diet:"Peces, ranas, cangrejos e insectos grandes; caza caminando despacio o esperando inmóvil.",
  habitat:"Ciénagas, ríos, manglares, arrozales y potreros inundados.",
  migration:null
},
{
  id:"egretta-thula", common:"Garza patiamarilla", alt:"Garceta nívea · Snowy Egret", sci:"Egretta thula", family:"Ardeidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.thulaPL, date:"", place:PL, ind:"Pescando en la orilla, entre hojas de palma secas"},{img:IMG.thulaPL3, date:"", place:PL, ind:"En vuelo sobre el río: patas negras y dedos amarillos"},{img:IMG.thulaPL2, date:"", place:PL, ind:"Abriendo las alas entre la vegetación de la orilla"}],
  desc:"Garza blanca mediana con pico negro, piel amarilla entre el pico y el ojo y patas negras con «zapatos» amarillos. Hacia 1900 casi se extingue: sus plumas de cría se usaban en sombreros de moda. La indignación por esa cacería dio origen a las primeras leyes de protección de aves.",
  diet:"Peces pequeños, camarones e insectos. Agita el agua con las patas amarillas para espantar a sus presas.",
  habitat:"Ciénagas, lagunas, manglares y orillas de caños.",
  migration:null
}];

const XTRA={"phoenicopterus-ruber":{sw:[["#F28A7A","Plumaje"],["#E0503C","Alas"],["#151515","Punta del pico"]]}, "rynchops-niger":{sw:[["#151515","Dorso"],["#F4F4F0","Vientre"],["#E0402E","Pico"]]}, "egretta-rufescens":{sw:[["#5E6E86","Cuerpo"],["#A85A44","Cabeza"],["#E8A0A0","Pico"]]}, "thalasseus-maximus":{sw:[["#F7F7F5","Cuerpo"],["#C8CED4","Alas"],["#F08A3A","Pico"],["#151515","Cresta"]]}, "pelecanus-occidentalis":{sw:[["#8C8A86","Cuerpo"],["#F2EBD2","Cabeza"],["#5A4A3A","Cuello"]]}, "nannopterum-brasilianum":{sw:[["#141416","Plumaje"],["#E8B83A","Base del pico"]]}, "caracara-cheriway":{sw:[["#1E1A16","Capucha"],["#E05A3A","Cara"],["#F2EEE4","Cuello"]]}, "ardea-alba":{sw:[["#F7F7F5","Plumaje"],["#E8C03A","Pico"],["#151515","Patas"]]}, "egretta-thula":{sw:[["#F7F7F5","Plumaje"],["#151515","Pico y patas"],["#E8C83A","Patas y cara"]]}};

const HAB={"phoenicopterus-ruber":["Camina despacio por el agua baja con la cabeza sumergida, removiendo el fondo con las patas. Para despegar corre sobre el agua batiendo las alas.","Lagunas del santuario, en Camarones; mejor temprano, desde la canoa de los guías."], "rynchops-niger":["Anda en bandadas apretadas que descansan juntas en los bancos de arena, todas mirando hacia el viento. Vuela bajo y en fila sobre el agua quieta.","Bancos de arena y orillas de las lagunas del santuario."], "egretta-rufescens":["Corre en zigzag por el agua baja, se detiene, abre las alas como un paraguas y lanza el pico. Cuando está quieta se reconoce por el cuello desgreñado.","Orillas someras de las lagunas del santuario."], "thalasseus-maximus":["Descansa en grupos ruidosos, todos mirando contra el viento. Pesca volando sobre el agua con el pico hacia abajo y se lanza en picada.","Playones de arena de las lagunas del santuario."], "pelecanus-occidentalis":["Vuela en fila sobre el agua, rozando las olas. Para pescar sube unos metros y se deja caer en picada; luego flota mientras escurre el agua de la bolsa antes de tragar.","Playones de las lagunas del santuario y la playa de Palomino."], "nannopterum-brasilianum":["Bucea durante muchos segundos y reaparece lejos. Pasa largos ratos posado en ramas secas sobre el agua, a menudo con las alas abiertas para secarlas.","Playones y orillas de las lagunas del santuario."], "caracara-cheriway":["Camina por el suelo como un gallinazo y se posa en lo alto de troncos secos. Echa la cabeza hacia atrás cuando grita.","Árboles espinosos y playones abiertos junto a las lagunas."], "ardea-alba":["Camina despacio con el cuello estirado y se queda quieta acechando. Al atardecer vuela en grupos a dormir en árboles junto al agua.","Orillas de piedra del río Palomino."], "egretta-thula":["Muy activa: corre, gira y agita el agua con las patas para sacar presas. Pesca en grupo con otras garzas.","Orillas y desembocadura del río Palomino."]};

const PLACES={"phoenicopterus-ruber":["humedal"], "rynchops-niger":["humedal","cielo"], "egretta-rufescens":["humedal"], "thalasseus-maximus":["humedal"], "pelecanus-occidentalis":["humedal","cielo"], "nannopterum-brasilianum":["humedal"], "caracara-cheriway":["arboles","prado"], "ardea-alba":["humedal"], "egretta-thula":["humedal"]};
const TREND={};
