/* ═══════════════ VALLE DE TENZA · BOYACÁ ═══════════════ */
const LUGAR={nombre:"Boyacá",corto:"Boyacá",region:"Boyacá",hero:"fotos/cyanicollis.jpg"};
const IMG={}; for (const k of ["angustifrons","angustifrons2","angustifrons3","decumanus","episcopus","palmarum","coereba","coereba2","sicalis","sicalis2","sicalisJuv","cyanicollis","cyanicollis2","butorides","butorides2"]) IMG[k]="fotos/"+k+".jpg";
const VT="Valle de Tenza, Boyacá";
const AB="Arcabuco, Boyacá";
IMG["bubulcus"]="fotos/bubulcus.jpg";
IMG["bubulcus2"]="fotos/bubulcus2.jpg";
IMG["bubulcus3"]="fotos/bubulcus3.jpg";
IMG["bubulcus4"]="fotos/bubulcus4.jpg";
IMG["bubulcus5"]="fotos/bubulcus5.jpg";
IMG["cairina"]="fotos/cairina.jpg";
IMG["chaetoF"]="fotos/chaetoF.jpg";
IMG["chaetoF2"]="fotos/chaetoF2.jpg";
IMG["cyanotus"]="fotos/cyanotus.jpg";
IMG["boissonneaua"]="fotos/boissonneaua.jpg";

const HOME={name:"Valle de Tenza, Boyacá",lat:5.0,lon:-73.47,when:"",role:"",here:true};

const BIRDS=[
{
  id:"stilpnia-cyanicollis", common:"Tangara cabeciazul", alt:"Blue-necked Tanager",
  sci:"Stilpnia cyanicollis", family:"Thraupidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.cyanicollis,date:"",place:VT,ind:"Adulto en un arbusto con flores"},{img:IMG.cyanicollis2,date:"",place:VT,ind:"De frente, con el antifaz negro"}],
  desc:"Cuerpo negro con reflejos violeta en el vientre, cabeza y cuello azul turquesa brillante y un parche dorado pálido en el hombro. Las plumas de vuelo tienen bordes turquesa.",
  diet:"Frutos pequeños, como los de los arbustos de flor roja de la foto, e insectos que busca en las ramas.",
  habitat:"Bordes de bosque, rastrojos altos, cafetales y jardines, entre unos 600 y 2.200 m.",
  migration:null
},
{
  id:"psarocolius-angustifrons", common:"Mochilero pardo", alt:"Oropéndola dorsirrojiza · Russet-backed Oropendola",
  sci:"Psarocolius angustifrons", family:"Icteridae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.angustifrons,date:"",place:VT,ind:"Entre las ramas de un naranjo"},{img:IMG.angustifrons2,date:"",place:VT,ind:"Con la cola levantada"},{img:IMG.angustifrons3,date:"",place:VT,ind:"Comiendo papaya madura"}],
  desc:"Grande, pardo castaño con la cabeza oliva, un pico grande y pálido y la cola amarillo intenso que muestra al volar. Teje nidos colgantes en forma de mochila, de hasta un metro de largo, en colonias sobre árboles altos.",
  diet:"Frutos (papaya, naranjas, guamos), néctar, insectos y pequeños animales.",
  habitat:"Bordes de bosque, cafetales con sombrío, huertos y árboles aislados en potreros.",
  migration:null
},
{
  id:"psarocolius-decumanus", common:"Mochilero", alt:"Oropéndola crestada · Crested Oropendola",
  sci:"Psarocolius decumanus", family:"Icteridae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.decumanus,date:"",place:VT,ind:"Macho, con el ojo azul y la cola amarilla"}],
  desc:"Negro con la rabadilla castaña, ojos azul claro, pico marfil y cola amarilla brillante. El macho, mucho más grande que la hembra, se inclina hacia adelante al cantar, con un sonido líquido y gorgoteante.",
  diet:"Frutos, néctar, insectos y ocasionalmente huevos y pichones.",
  habitat:"Bordes de bosque, potreros con árboles altos y orillas de ríos.",
  migration:null
},
{
  id:"thraupis-episcopus", common:"Azulejo común", alt:"Tangara azuleja · Blue-gray Tanager",
  sci:"Thraupis episcopus", family:"Thraupidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.episcopus,date:"",place:VT,ind:"Posado sobre flores rojas"}],
  desc:"Gris azulado pálido con hombros y alas azul celeste. Inquieto y ruidoso, anda en parejas.",
  diet:"Frutos, néctar e insectos.",
  habitat:"Bordes, jardines, cultivos y pueblos.",
  migration:null
},
{
  id:"thraupis-palmarum", common:"Azulejo palmero", alt:"Tangara palmera · Palm Tanager",
  sci:"Thraupis palmarum", family:"Thraupidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.palmarum,date:"",place:VT,ind:"Comiendo en un arbusto florido"}],
  desc:"Verde oliva grisáceo con brillo amarillento según la luz; la mitad de las alas es negruzca y contrasta con la base clara.",
  diet:"Frutos, insectos bajo las hojas, y néctar.",
  habitat:"Bordes de bosque, jardines, cultivos y sobre todo palmas.",
  migration:null
},
{
  id:"coereba-flaveola", common:"Mielero", alt:"Reinita mielera · Bananaquit",
  sci:"Coereba flaveola", family:"Thraupidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.coereba,date:"",place:VT,ind:"Buscando néctar en flores blancas"},{img:IMG.coereba2,date:"",place:VT,ind:"De frente, con la ceja blanca"}],
  desc:"Pájaro pequeño de pico curvo, gris oscuro por encima, con una ceja blanca muy marcada, garganta gris, pecho amarillo y rabadilla amarilla.",
  diet:"Néctar, que a menudo «roba» perforando la base de las flores; también frutos y pequeños insectos. Le encantan los bebederos con agua azucarada.",
  habitat:"Jardines, bordes de bosque, cafetales y pueblos.",
  migration:null
},
{
  id:"sicalis-flaveola", common:"Canario coronado", alt:"Canario costeño · Saffron Finch",
  sci:"Sicalis flaveola", family:"Thraupidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.sicalis,date:"",place:VT,ind:"Pareja en un arbusto"},{img:IMG.sicalis2,date:"",place:VT,ind:"Dos jóvenes, aún con el dorso rayado"},{img:IMG.sicalisJuv,date:"",place:VT,ind:"Juvenil grisáceo y rayado"}],
  desc:"El macho es amarillo intenso con la frente anaranjada. Los jóvenes, como los de las últimas fotos, son grisáceos y rayados, y se van volviendo amarillos poco a poco.",
  diet:"Semillas de pastos y granos; algunos insectos.",
  habitat:"Áreas abiertas, potreros, patios y pueblos.",
  tip:"Es de las aves silvestres más capturadas para jaulas en Colombia. No compre aves silvestres: es ilegal y sostiene la captura.",
  migration:null
},
{
  id:"butorides-striata", common:"Garcita rayada", alt:"Garcita estriada · Striated Heron",
  sci:"Butorides striata", family:"Ardeidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.butorides,date:"",place:VT,ind:"Acechando en la orilla"},{img:IMG.butorides2,date:"",place:VT,ind:"Caminando agachada entre piedras"}],
  desc:"Garza pequeña y rechoncha, de patas amarillas cortas, corona negra y plumaje gris rayado. Camina agachada y se queda inmóvil antes de lanzar el picotazo.",
  diet:"Peces pequeños, ranas, cangrejos e insectos. Se ha visto usar «carnadas» —insectos o migas— para atraer peces.",
  habitat:"Orillas de ríos, quebradas, lagunas y embalses con piedras o vegetación.",
  migration:null
},
{
  id:"bubulcus-ibis", common:"Garcita del ganado", alt:"Garcilla bueyera · Cattle Egret",
  sci:"Bubulcus ibis", family:"Ardeidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.bubulcus2,date:"",place:AB,ind:"En plumaje de cría, llamando junto a los nidos"},{img:IMG.bubulcus4,date:"",place:AB,ind:"Con la corona y el pecho color ante de la época de cría"},{img:IMG.bubulcus3,date:"",place:AB,ind:"Adulto posado, con el pico anaranjado"},{img:IMG.bubulcus5,date:"",place:AB,ind:"Colonia de nidos en los eucaliptos"},{img:IMG.bubulcus,date:"",place:AB,ind:"Abriendo las alas junto a un nido"}],
  desc:"Garza blanca pequeña y rechoncha, de pico corto. En época de cría, como en estas fotos, le salen plumas color ante en la corona, el pecho y la espalda, y el pico y las patas se vuelven anaranjados. Es originaria de África: a finales del siglo XIX cruzó el Atlántico por sus propios medios y en pocas décadas se extendió por toda América siguiendo a la ganadería.",
  diet:"Saltamontes y otros insectos que espanta el ganado al caminar; también ranas y lagartijas.",
  habitat:"Potreros con ganado y orillas de humedales. Anida en colonias ruidosas sobre árboles, a menudo junto al agua; en Boyacá usa eucaliptos y sauces.",
  migration:null
},
{
  id:"chaetocercus-mulsant", common:"Estrellita ventriblanca", alt:"Rumbito · White-bellied Woodstar",
  sci:"Chaetocercus mulsant", family:"Trochilidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.chaetoF,date:"",place:AB,ind:"Hembra en vuelo"},{img:IMG.chaetoF2,date:"",place:AB,ind:"Hembra de perfil, con la cola de punta canela"}],
  desc:"Colibrí diminuto, de unos 7,5 cm. El macho tiene gorguera magenta y pecho blanco; la hembra, como la de las fotos, es canela por debajo, con un antifaz oscuro y una ceja blanca detrás del ojo. Vuela recto y zumbando, como un abejorro.",
  diet:"Néctar de flores pequeñas y de bebederos; insectos diminutos.",
  habitat:"Bordes de bosque andino, jardines y matorrales floridos, entre unos 1.800 y 3.000 m.",
  migration:null
},
{
  id:"boissonneaua-flavescens", common:"Coronita colianteada", alt:"Colibrí colihabano · Buff-tailed Coronet",
  sci:"Boissonneaua flavescens", family:"Trochilidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.boissonneaua,date:"",place:AB,ind:"Adulto en una rama con musgo: pecho verde moteado y cola color ante"}],
  desc:"Colibrí robusto de pico corto y recto, verde brillante con el pecho moteado de verde sobre fondo claro, una mancha canela en el costado y la cola color ante con las puntas oscuras, que se ve muy bien cuando la abre.",
  diet:"Néctar de flores de árboles y arbustos del bosque andino, y de bebederos; también pequeños insectos.",
  habitat:"Bosque de niebla y bordes de bosque andino, entre unos 1.800 y 3.000 m.",
  migration:null
},
{
  id:"colibri-cyanotus", common:"Orejivioleta verde", alt:"Chillón menor · Lesser Violetear",
  sci:"Colibri cyanotus", family:"Trochilidae", iucn:"LC", conf:"media",
  confNote:"Se distingue del colibrí chillón porque no tiene el parche azul en el vientre y es más pequeño; aquí el pecho se ve todo verde. Una foto de frente, con el vientre a la vista, lo confirmaría.",
  photos:[{img:IMG.cyanotus,date:"",place:AB,ind:"Adulto, con la mancha violeta en la oreja"}],
  desc:"Colibrí verde brillante con una mancha violeta que va del ojo a la oreja y una banda oscura en la cola. Más pequeño que su pariente el colibrí chillón, y sin azul en el pecho ni en el vientre.",
  diet:"Néctar de flores de arbustos y árboles del bosque; insectos pequeños.",
  habitat:"Bordes y claros de bosque de montaña, entre unos 1.200 y 3.000 m.",
  migration:null
},
/* ───────── DOMÉSTICAS ───────── */
{
  id:"cairina-moschata", common:"Pato criollo", alt:"Pato real doméstico · Muscovy Duck",
  sci:"Cairina moschata", family:"Anatidae", iucn:"LC", conf:"alta", domestic:true,
  statusNote:"Ave doméstica que nada libre en la laguna de la finca. Su forma silvestre, negra con un parche blanco en el ala, vive en humedales de tierras bajas.",
  photos:[{img:IMG.cairina,date:"",place:AB,ind:"Nadando en la laguna, con las carúnculas rojas"}],
  desc:"Pato grande con carúnculas rojas en la cara. Las variedades domésticas tienen el plumaje negro, blanco o manchado, como este de cabeza blanca. Es de las pocas aves domesticadas en América antes de la llegada de los europeos.",
  diet:"Plantas acuáticas, semillas, insectos y lombrices; también el alimento que se les da.",
  habitat:"Lagunas y prados de fincas.",
  migration:null
}];
const XTRA={
 "boissonneaua-flavescens":{sw:[["#3E9A5A","Dorso"],["#C89A5A","Cola"],["#B8703A","Costado"]]},
 "bubulcus-ibis":{sw:[["#F7F7F5","Plumaje"],["#E8A86A","Plumas de cría"],["#F08A3A","Pico"]]},
 "chaetocercus-mulsant":{sw:[["#2E7D5B","Dorso"],["#C98A5A","Vientre hembra"],["#8E2A5E","Gorguera macho"]]},
 "colibri-cyanotus":{sw:[["#2EA44F","Cuerpo"],["#6A4FD0","Oreja"],["#1E2A2A","Banda de la cola"]]},
 "cairina-moschata":{sw:[["#1E1E22","Negro"],["#F4F4F0","Blanco"],["#D23A2E","Carúnculas"]]},
 "stilpnia-cyanicollis":{sw:[["#3CB4E0","Cabeza"],["#141418","Cuerpo"],["#E8E0A0","Hombro"],["#3A3AA8","Vientre"]]},
 "psarocolius-angustifrons":{sw:[["#7A4A2A","Cuerpo"],["#A89A3A","Cabeza"],["#F2C21A","Cola"],["#E8D8B0","Pico"]]},
 "psarocolius-decumanus":{sw:[["#121212","Cuerpo"],["#F2C21A","Cola"],["#E8E2C8","Pico"],["#8ACAE8","Ojo"]]},
 "thraupis-episcopus":{sw:[["#A9C4CC","Cuerpo"],["#4FA3C4","Alas"]]},
 "thraupis-palmarum":{sw:[["#A9A86A","Cuerpo"],["#2C2C2C","Media ala"]]},
 "coereba-flaveola":{sw:[["#3A3E44","Dorso"],["#F4F4F0","Ceja"],["#F2D02A","Pecho"]]},
 "sicalis-flaveola":{sw:[["#F2C21A","Adulto"],["#F08A1C","Frente"],["#A8A88A","Juvenil"]]},
 "butorides-striata":{sw:[["#5A6070","Dorso"],["#151515","Corona"],["#E8C83A","Patas"]]}
};
const HAB={
 "boissonneaua-flavescens":["Al posarse levanta las alas sobre la espalda un instante, un gesto que lo delata. Es dominante en los bebederos y defiende las flores con persecuciones.","Ramas bajas con musgo en bordes de bosque y bebederos."],
 "bubulcus-ibis":["Anida en colonias ruidosas: los adultos llaman con el pico abierto, abren las alas y se disputan las ramas junto a los nidos. De día sale a los potreros a caminar junto a las vacas.","Colonia de nidos en los eucaliptos y potreros con ganado de Arcabuco."],
 "chaetocercus-mulsant":["Vuela zumbando como un abejorro y se posa en ramitas finas; cede el paso a colibríes más grandes.","Bebederos y arbustos floridos."],
 "colibri-cyanotus":["Canta un «chip» metálico repetido desde perchas altas; defiende las flores de otros colibríes.","Ramas expuestas en bordes de bosque y arbustos en flor."],
 "cairina-moschata":["Tranquilo y poco ruidoso; el macho sisea.","Laguna de la finca."],
 "stilpnia-cyanicollis":["En parejas o con bandadas mixtas; revisa ramas y frutos con movimientos rápidos.","Arbustos floridos y frutales en bordes de potrero."],
 "psarocolius-angustifrons":["Vive en colonias ruidosas: los machos cantan inclinándose hacia adelante y abriendo las alas. Vuela de árbol en árbol con aleteo pesado.","Naranjos, papayos y árboles altos con sus nidos colgantes."],
 "psarocolius-decumanus":["En grupos que visitan los árboles frutales; los machos hacen reverencias al cantar junto a la colonia.","Árboles altos en bordes de potrero y quebradas."],
 "thraupis-episcopus":["Inquieto y ruidoso; anda en parejas.","Arbustos con flor y frutales."],
 "thraupis-palmarum":["Acrobático: se cuelga boca abajo para revisar hojas y flores.","Arbustos floridos y palmas."],
 "coereba-flaveola":["Muy activo, salta entre flores sin parar y canta un chirrido agudo y repetido.","Flores de arbustos y jardines; bebederos."],
 "sicalis-flaveola":["En grupos que comen en el suelo; los jóvenes andan con los adultos.","Potreros, patios y arbustos bajos."],
 "butorides-striata":["Solitaria y paciente: acecha agachada al borde del agua.","Orillas de quebradas y embalses del valle."]
};
const PLACES={"bubulcus-ibis":["humedal","prado","arboles"],"chaetocercus-mulsant":["comedero","arboles"],"colibri-cyanotus":["arboles"],"boissonneaua-flavescens":["arboles","comedero"],"cairina-moschata":["humedal"],"stilpnia-cyanicollis":["arboles"],"psarocolius-angustifrons":["arboles","comedero"],"psarocolius-decumanus":["arboles"],
"thraupis-episcopus":["arboles"],"thraupis-palmarum":["arboles"],"coereba-flaveola":["arboles","comedero"],"sicalis-flaveola":["prado","arboles"],"butorides-striata":["humedal"]};
const TREND={};
