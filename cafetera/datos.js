/* ═══════════════ ZONA CAFETERA · CALDAS, RISARALDA, QUINDÍO ═══════════════
   Cuando se sepa el sitio exacto de cada foto, cámbielo en "place" (p. ej. "Valle de Cocora, Quindío").
   Si hay fotos de varios sitios, aparece solo el filtro "Sitio". */
const LUGAR = { nombre:"Zona Cafetera", corto:"la Zona Cafetera", region:"la Zona Cafetera", hero:"fotos/flammigerusM.jpg" };
const IMG = {}; for (const k of ["aglaeactis","atlapetes","anisognathus","zonotrichia","piaya","episcopus","dimidiatus","dimidiatus2","turdus","stilpnia","stilpnia2","icterus","forpus","phimosus","flammigerusM","flammigerusF","flammigerusF2","euphonia","euphonia2","melanerpes","stilpnia3","sicalis","episcopus2","episcopus3","ignobilis","cyanicollis","flammigerusF3","euphonia3","aglaeactis2","anisognathus2","ortalis","sporophila","ignobilis2","euphonia4","melanerpes2","florisuga","saltator","atlapetes2","eriocnemis","ignobilis3","amazilia"]) IMG[k]="fotos/"+k+".jpg";
const ZC = "Zona Cafetera";
const HOME = {name:"Zona Cafetera", lat:4.64, lon:-75.57, when:"", role:"", here:true};

const BIRDS = [
{
  id:"ramphocelus-flammigerus", common:"Toche enjalmado", alt:"Asoma culirroja · Flame-rumped Tanager",
  sci:"Ramphocelus flammigerus", family:"Thraupidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.flammigerusM, date:"", place:ZC, ind:"Macho, con la rabadilla rojo fuego"},{img:IMG.flammigerusF, date:"", place:ZC, ind:"Hembra en el comedero"},{img:IMG.flammigerusF2, date:"", place:ZC, ind:"Hembra, con el pecho anaranjado"},{img:IMG.flammigerusF3, date:"", place:ZC, ind:"Hembra sobre una baranda"}],
  desc:"El macho es negro aterciopelado con una rabadilla rojo anaranjado encendido, que solo se ve cuando abre las alas o se voltea. La hembra es muy distinta: cabeza y dorso pardo oscuro y pecho y rabadilla amarillo anaranjado. Ambos tienen el pico plateado. Es endémico de Colombia.",
  diet:"Frutos, sobre todo banano y moras, e insectos.",
  habitat:"Bordes de bosque, rastrojos, cafetales con sombrío y jardines, entre unos 500 y 1.800 m.",
  migration:null
},
{
  id:"ramphocelus-dimidiatus", common:"Asoma terciopelo", alt:"Sangre de toro · Crimson-backed Tanager",
  sci:"Ramphocelus dimidiatus", family:"Thraupidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.dimidiatus2, date:"", place:ZC, ind:"Macho en el comedero"},{img:IMG.dimidiatus, date:"", place:ZC, ind:"Macho entre las heliconias"}],
  desc:"El macho es rojo sangre oscuro, con alas y cola negras y una base del pico plateada brillante. La hembra es parda rojiza, más apagada. Anda en grupos pequeños y ruidosos.",
  diet:"Frutos, banano y papaya en comederos, e insectos.",
  habitat:"Bordes de bosque, cafetales, rastrojos y jardines de tierras bajas y medias.",
  migration:null
},
{
  id:"anisognathus-igniventris", common:"Clarinero escarlata", alt:"Tangara de montaña ventriescarlata · Scarlet-bellied Mountain Tanager",
  sci:"Anisognathus igniventris", family:"Thraupidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.anisognathus, date:"", place:ZC, ind:"Adulto entre ramas"},{img:IMG.anisognathus2, date:"", place:ZC, ind:"Entre ramas con musgo: hombro azul y media luna roja en el cuello"}],
  desc:"Negro azabache con una mancha escarlata detrás del ojo, el vientre rojo encendido y un parche azul celeste en el hombro.",
  diet:"Frutos y bayas de arbustos andinos; también insectos y algo de néctar.",
  habitat:"Bosque altoandino y subpáramo, entre unos 2.500 y 3.700 m.",
  migration:null
},
{
  id:"aglaeactis-cupripennis", common:"Colibrí rayo de sol", alt:"Rayito brillante · Shining Sunbeam",
  sci:"Aglaeactis cupripennis", family:"Trochilidae", iucn:"LC", conf:"media",
  confNote:"El plumaje canela y el pico corto y recto encajan con el rayo de sol; el brillo morado y dorado de la espalda, que lo confirma, no se ve desde este ángulo.",
  photos:[{img:IMG.aglaeactis, date:"", place:ZC, ind:"Posado sobre un arbusto de fucsias"},{img:IMG.aglaeactis2, date:"", place:ZC, ind:"Revoloteando sobre las flores"}],
  desc:"Colibrí canela rojizo, de pico corto y recto. Cuando gira, la espalda baja muestra un brillo morado, dorado y verde que le da el nombre.",
  diet:"Néctar de flores de arbustos de páramo y fucsias; insectos pequeños.",
  habitat:"Bordes de bosque altoandino, subpáramo y matorrales, entre unos 2.600 y 3.600 m.",
  migration:null
},
{
  id:"atlapetes-pallidinucha", common:"Gorrión montés de nuca pálida", alt:"Pale-naped Brushfinch",
  sci:"Atlapetes pallidinucha", family:"Passerellidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.atlapetes, date:"", place:ZC, ind:"Buscando comida en el musgo"},{img:IMG.atlapetes2, date:"", place:ZC, ind:"De frente entre ramas con líquenes, con la frente amarilla"}],
  desc:"Cara negra, frente canela anaranjada que se aclara a blanco en la nuca, dorso gris oscuro y vientre amarillo oliva.",
  diet:"Insectos, semillas y frutos que busca entre la hojarasca y el musgo.",
  habitat:"Sotobosque y bordes de bosque altoandino, entre unos 2.500 y 3.600 m.",
  migration:null
},
{
  id:"zonotrichia-capensis", common:"Copetón", alt:"Gorrión copetón · Rufous-collared Sparrow",
  sci:"Zonotrichia capensis", family:"Passerellidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.zonotrichia, date:"", place:ZC, ind:"Adulto sobre una rama con barba de viejo"}],
  desc:"Cabeza gris con rayas negras y un pequeño copete, collar rufo en la nuca y mancha negra a los lados del pecho.",
  diet:"Semillas de pastos y hierbas; insectos cuando cría.",
  habitat:"Potreros, jardines, cultivos y bordes de bosque, desde tierras medias hasta el páramo.",
  migration:null
},
{
  id:"piaya-cayana", common:"Cuco ardilla", alt:"Squirrel Cuckoo",
  sci:"Piaya cayana", family:"Cuculidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.piaya, date:"", place:ZC, ind:"Adulto, con la cola larga de puntas blancas"}],
  desc:"Castaño rojizo con el vientre gris, anillo ocular amarillo verdoso y una cola larguísima con puntas blancas. Se mueve entre las ramas corriendo y saltando como una ardilla, de ahí su nombre.",
  diet:"Orugas peludas, cigarras, saltamontes y otros insectos grandes; a veces lagartijas.",
  habitat:"Bordes de bosque, cafetales con sombrío y jardines arbolados.",
  migration:null
},
{
  id:"thraupis-episcopus", common:"Azulejo común", alt:"Tangara azuleja · Blue-gray Tanager",
  sci:"Thraupis episcopus", family:"Thraupidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.episcopus2, date:"", place:ZC, ind:"En un palo de papaya"},{img:IMG.episcopus, date:"", place:ZC, ind:"En el comedero de banano"},{img:IMG.episcopus3, date:"", place:ZC, ind:"En vuelo, con las alas celestes abiertas"}],
  desc:"Gris azulado pálido con hombros y alas azul celeste. Inquieto y ruidoso, anda en parejas.",
  diet:"Frutos, néctar e insectos.",
  habitat:"Bordes, jardines, cafetales y pueblos.",
  migration:null
},
{
  id:"stilpnia-vitriolina", common:"Tangara rastrojera", alt:"Scrub Tanager",
  sci:"Stilpnia vitriolina", family:"Thraupidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.stilpnia3, date:"", place:ZC, ind:"Junto a un banano maduro"},{img:IMG.stilpnia2, date:"", place:ZC, ind:"En el comedero"},{img:IMG.stilpnia, date:"", place:ZC, ind:"Entre hojas grandes"}],
  desc:"Gris verdoso plateado, con la corona canela rojiza y un antifaz negro. Casi endémica de Colombia, muy común en zonas abiertas de las montañas.",
  diet:"Frutos, semillas e insectos.",
  habitat:"Rastrojos, cercas vivas, cafetales y jardines, entre unos 500 y 2.500 m.",
  migration:null
},
{
  id:"euphonia-laniirostris", common:"Eufonia piquigruesa", alt:"Thick-billed Euphonia",
  sci:"Euphonia laniirostris", family:"Fringillidae", iucn:"LC", conf:"media",
  confNote:"La garganta amarilla apunta a la piquigruesa; otras eufonias de la zona tienen la garganta negra o azul. Una foto de frente lo confirmaría.",
  photos:[{img:IMG.euphonia, date:"", place:ZC, ind:"Macho en el comedero"},{img:IMG.euphonia2, date:"", place:ZC, ind:"Macho comiendo banano"},{img:IMG.euphonia3, date:"", place:ZC, ind:"Macho joven en vuelo, aún verde oliva"},{img:IMG.euphonia4, date:"", place:ZC, ind:"Macho de perfil, con la garganta amarilla"}],
  desc:"Pequeña y compacta: azul oscuro brillante por encima y amarillo intenso por debajo, con la frente amarilla.",
  diet:"Frutos pequeños, sobre todo de muérdagos, cuyas semillas ayuda a dispersar; banano en comederos.",
  habitat:"Bordes de bosque, cafetales y jardines.",
  migration:null
},
{
  id:"icterus-chrysater", common:"Toche", alt:"Turpial montañero · Yellow-backed Oriole",
  sci:"Icterus chrysater", family:"Icteridae", iucn:"LC", conf:"media",
  confNote:"No se ven las alas, que en el toche son negras. La cara y el babero negros sobre amarillo intenso encajan con esta especie, la más común de su tipo en la zona.",
  photos:[{img:IMG.icterus, date:"", place:ZC, ind:"Posado en una hoja de plátano"}],
  desc:"Amarillo intenso con la cara, la garganta, las alas y la cola negras; la espalda también es amarilla. Canta un silbido aflautado.",
  diet:"Insectos, frutos y néctar.",
  habitat:"Bordes de bosque, cafetales, jardines y huertos.",
  migration:null
},
{
  id:"forpus-conspicillatus", common:"Periquito de anteojos", alt:"Spectacled Parrotlet",
  sci:"Forpus conspicillatus", family:"Psittacidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.forpus, date:"", place:ZC, ind:"Macho, con el anillo azul alrededor del ojo"}],
  desc:"Diminuto loro verde, de unos 12 cm. El macho tiene un anillo azul alrededor del ojo, como unas gafas, y azul en las alas; la hembra es toda verde.",
  diet:"Semillas de pastos y frutos pequeños.",
  habitat:"Zonas abiertas con árboles, cafetales y jardines.",
  migration:null
},
{
  id:"melanerpes-rubricapillus", common:"Carpintero habado", alt:"Red-crowned Woodpecker",
  sci:"Melanerpes rubricapillus", family:"Picidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.melanerpes, date:"", place:ZC, ind:"Macho en un tronco"},{img:IMG.melanerpes2, date:"", place:ZC, ind:"Macho en el comedero de guadua"}],
  desc:"Dorso barrado en blanco y negro, partes inferiores beige y corona roja en el macho.",
  diet:"Insectos y larvas de la madera, frutos y néctar.",
  habitat:"Bordes, cafetales, jardines y postes de madera.",
  migration:null
},
{
  id:"stilpnia-cyanicollis", common:"Tangara cabeciazul", alt:"Blue-necked Tanager",
  sci:"Stilpnia cyanicollis", family:"Thraupidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.cyanicollis, date:"", place:ZC, ind:"Adulto frente a una hoja de yarumo"}],
  desc:"Cuerpo negro, cabeza y cuello azul turquesa brillante y un parche verde dorado en el hombro. De lejos parece negra, hasta que le da la luz.",
  diet:"Frutos pequeños, como los del yarumo y los melastomatáceos, e insectos que busca en las ramas.",
  habitat:"Bordes de bosque, cafetales con sombrío, rastrojos altos y jardines, entre unos 600 y 2.200 m.",
  migration:null
},
{
  id:"sicalis-flaveola", common:"Canario coronado", alt:"Canario costeño · Saffron Finch",
  sci:"Sicalis flaveola", family:"Thraupidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.sicalis, date:"", place:ZC, ind:"Macho en una rama"}],
  desc:"El macho es amarillo intenso con la frente y la corona anaranjadas; la hembra y los jóvenes son más opacos. Anda en grupos que comen en el suelo.",
  diet:"Semillas de pastos y granos; algunos insectos.",
  habitat:"Áreas abiertas, potreros, patios y pueblos de tierras bajas y medias.",
  tip:"Por su color y su canto es de las aves silvestres más capturadas para jaulas en Colombia. No compre aves silvestres: es ilegal y sostiene la captura.",
  migration:null
},
{
  id:"turdus-ignobilis", common:"Mirla embarradora", alt:"Mirla ollera · Black-billed Thrush",
  sci:"Turdus ignobilis", family:"Turdidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.ignobilis, date:"", place:ZC, ind:"Posada en un palo de papaya"},{img:IMG.ignobilis2, date:"", place:ZC, ind:"En el comedero de guadua, junto al banano"},{img:IMG.ignobilis3, date:"", place:ZC, ind:"En las hojas de un palo de papaya"}],
  desc:"Mirla parda oliva, más pequeña y oscura que la mirla parda, con el pico negro y la garganta blancuzca finamente rayada. Su nombre local viene del barro con el que arma el nido.",
  diet:"Lombrices, insectos y frutos, entre ellos papaya y banano.",
  habitat:"Jardines, cafetales, potreros con árboles y bordes de bosque de tierras medias.",
  migration:null
},
{
  id:"turdus-grayi", common:"Mirla parda", alt:"Clay-colored Thrush",
  sci:"Turdus grayi", family:"Turdidae", iucn:"LC", conf:"media",
  confNote:"Es un juvenil, con el pecho moteado. Los juveniles de mirla se parecen; el tono pardo claro apunta a la mirla parda.",
  photos:[{img:IMG.turdus, date:"", place:ZC, ind:"Juvenil, con el pecho moteado"}],
  desc:"El adulto es pardo arcilla claro con el pico amarillo verdoso. Los juveniles, como el de la foto, tienen manchas en el pecho y la espalda.",
  diet:"Lombrices, insectos y frutos.",
  habitat:"Jardines, cafetales y bordes de bosque.",
  migration:null
},
{
  id:"phimosus-infuscatus", common:"Ibis de cara roja", alt:"Coquito · Bare-faced Ibis",
  sci:"Phimosus infuscatus", family:"Threskiornithidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.phimosus, date:"", place:ZC, ind:"Posado en una rama"}],
  desc:"Ibis negro con brillo verdoso, cara desnuda rojiza y pico largo y curvo.",
  diet:"Larvas, lombrices, caracoles e insectos que saca del barro.",
  habitat:"Humedales, potreros encharcados y orillas.",
  migration:null
},
{
  id:"ortalis-columbiana", common:"Guacharaca colombiana", alt:"Guacharaca · Colombian Chachalaca",
  sci:"Ortalis columbiana", family:"Cracidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.ortalis, date:"", place:ZC, ind:"Pareja a contraluz en un árbol seco con barbas de viejo"}],
  desc:"Ave grande, parecida a una gallina delgada de cola larga, parda con la cabeza y el cuello grises y una piel roja desnuda en la garganta. Es endémica de Colombia: no vive en ningún otro país.",
  diet:"Frutos, hojas tiernas, flores y brotes; baja al suelo a comer frutos caídos y visita los comederos con banano.",
  habitat:"Bordes de bosque, guaduales, cafetales con sombra y fincas con árboles frutales.",
  tip:"Al amanecer los grupos arman un coro estruendoso de «guacharaca-guacharaca» que se oye a cientos de metros.",
  migration:null
},
{
  id:"sporophila-intermedia", common:"Espiguero gris", alt:"Semillero gris · Gray Seedeater",
  sci:"Sporophila intermedia", family:"Thraupidae", iucn:"LC", conf:"media",
  confNote:"El macho gris con el pico grueso y claro y la mancha blanca en el ala encaja con esta especie. Otros espigueros grises se parecen; una foto del pico de frente o su canto lo confirmaría.",
  photos:[{img:IMG.sporophila, date:"", place:ZC, ind:"Macho buscando semillas en el suelo"}],
  desc:"Pájaro pequeño y gris pizarra, con un pico grueso y corto, amarillento o rosado, y una manchita blanca en el ala. La hembra es parda.",
  diet:"Semillas de pastos, que arranca de las espigas o recoge del suelo.",
  habitat:"Pastizales, bordes de camino, cultivos y jardines con pasto alto.",
  migration:null
},
{
  id:"florisuga-mellivora", common:"Colibrí nuquiblanco", alt:"Jacobino · White-necked Jacobin",
  sci:"Florisuga mellivora", family:"Trochilidae", iucn:"LC", conf:"media",
  confNote:"La capucha oscura, el vientre blanco y la cola blanca con puntas negras encajan con el macho de esta especie. La foto en vuelo no deja ver la mancha blanca de la nuca ni el azul de la cabeza.",
  photos:[{img:IMG.florisuga, date:"", place:ZC, ind:"Macho en vuelo, abriendo la cola blanca"}],
  desc:"Colibrí grande y llamativo: el macho tiene la cabeza y el pecho azul intenso, una media luna blanca en la nuca, la espalda verde, el vientre blanco y la cola blanca con un borde negro.",
  diet:"Néctar de flores en la copa de los árboles e insectos que atrapa al vuelo.",
  habitat:"Bordes de bosque húmedo, cafetales con sombra y jardines con flores, hasta unos 1.600 m.",
  tip:"Abre la cola blanca como un abanico al revolotear; ese destello blanco lo delata desde lejos.",
  migration:null
},
{
  id:"saltator-striatipectus", common:"Saltador rayado", alt:"Papayero · Streaked Saltator",
  sci:"Saltator striatipectus", family:"Thraupidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.saltator, date:"", place:ZC, ind:"En el comedero de guadua, con comida en el pico"}],
  desc:"Cabeza gris, ceja blanca corta, dorso verde oliva y pecho blancuzco con rayas oscuras finas. Tiene el pico grueso y oscuro de los saltadores, ideal para frutos y brotes.",
  diet:"Frutos, flores, brotes tiernos y semillas; algunos insectos. Le gusta la papaya, de ahí el nombre «papayero».",
  habitat:"Bordes de bosque, rastrojos, cercas vivas, cafetales, huertas y jardines.",
  migration:null
},
{
  id:"eriocnemis-mosquera", common:"Calzadito pechidorado", alt:"Paramero dorado · Golden-breasted Puffleg",
  sci:"Eriocnemis mosquera", family:"Trochilidae", iucn:"LC", conf:"media",
  confNote:"Las «calzas» blancas de las patas lo ubican entre los calzaditos, y el pecho verde dorado encaja con esta especie. Otros calzaditos de la cordillera se distinguen por manchas azules o violetas en la garganta o bajo la cola, que en esta foto no se ven bien.",
  photos:[{img:IMG.eriocnemis, date:"", place:ZC, ind:"Posado en una varilla, con las calzas blancas visibles"}],
  desc:"Colibrí mediano de pico recto y fino, verde con el pecho dorado bronceado y la cola oscura. Como todos los calzaditos, tiene plumas blancas y esponjosas que le cubren las patas, como si llevara calzas.",
  diet:"Néctar de flores de arbustos de alta montaña y pequeños insectos.",
  habitat:"Bordes de bosque altoandino y subpáramo, entre unos 2.400 y 3.600 m.",
  migration:null
},
{
  id:"amazilia-tzacatl", common:"Amazilia colirrufa", alt:"Colibrí colirrufo · Rufous-tailed Hummingbird",
  sci:"Amazilia tzacatl", family:"Trochilidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.amazilia, date:"", place:ZC, ind:"De espaldas en una cuerda, con la cola rufa y el pico rojo"}],
  desc:"Colibrí mediano, verde brillante, con el pico rojo de punta negra y la cola castaño rojiza. Es el colibrí más común de las tierras templadas y cálidas de Colombia.",
  diet:"Néctar de flores de jardín, heliconias y bebederos; también pequeños insectos y arañas.",
  habitat:"Jardines, cafetales, bordes de bosque y potreros con árboles, desde el nivel del mar hasta unos 1.800 m.",
  migration:null
}];

const XTRA={
 "stilpnia-cyanicollis":{sw:[["#3CB4E0","Cabeza"],["#141418","Cuerpo"],["#9CC86A","Hombro"]]},
 "sicalis-flaveola":{sw:[["#F2C21A","Cuerpo"],["#F08A1C","Corona"]]},
 "turdus-ignobilis":{sw:[["#6A5E4A","Dorso"],["#A89A84","Pecho"],["#151515","Pico"]]},
 "ramphocelus-flammigerus":{sw:[["#121212","Macho"],["#F2502A","Rabadilla"],["#F2B02A","Hembra"],["#D8DCE0","Pico"]]},
 "ramphocelus-dimidiatus":{sw:[["#A0141E","Cuerpo"],["#141414","Alas"],["#E8ECEE","Pico"]]},
 "anisognathus-igniventris":{sw:[["#121417","Plumaje"],["#E2321F","Vientre"],["#4E8FD6","Hombro"]]},
 "aglaeactis-cupripennis":{sw:[["#C2733A","Cuerpo"],["#7A3A8A","Brillo dorsal"],["#D8A84A","Dorado"]]},
 "atlapetes-pallidinucha":{sw:[["#121212","Cara"],["#D88A3A","Frente"],["#F4F0E4","Nuca"],["#B8B84A","Vientre"]]},
 "zonotrichia-capensis":{sw:[["#B5652F","Collar"],["#7A746B","Cabeza"],["#2B2723","Rayas"]]},
 "piaya-cayana":{sw:[["#A8562E","Cuerpo"],["#9EA4A8","Vientre"],["#F4F4F0","Puntas de cola"]]},
 "thraupis-episcopus":{sw:[["#A9C4CC","Cuerpo"],["#4FA3C4","Hombros"]]},
 "stilpnia-vitriolina":{sw:[["#A8B8A8","Cuerpo"],["#C2673A","Corona"],["#151515","Antifaz"]]},
 "euphonia-laniirostris":{sw:[["#1E2A5A","Dorso"],["#F2C21A","Vientre"]]},
 "icterus-chrysater":{sw:[["#F2B400","Cuerpo"],["#151515","Cara y alas"]]},
 "forpus-conspicillatus":{sw:[["#7CC85A","Cuerpo"],["#3A6AD8","Anteojos y alas"]]},
 "melanerpes-rubricapillus":{sw:[["#D9372A","Corona"],["#1C1C1C","Barrado"],["#D8CFB4","Vientre"]]},
 "turdus-grayi":{sw:[["#8A7A5C","Dorso"],["#C2AE88","Pecho"]]},
 "phimosus-infuscatus":{sw:[["#1E2622","Plumaje"],["#C7656B","Cara y pico"]]},
 "ortalis-columbiana":{sw:[["#6E5A44","Cuerpo"],["#7C7F84","Cabeza"],["#C2342A","Garganta"]]},
 "sporophila-intermedia":{sw:[["#6E737A","Plumaje"],["#E2B860","Pico"],["#F4F4F0","Mancha alar"]]},
 "eriocnemis-mosquera":{sw:[["#3E7A3A","Dorso"],["#B8A03A","Pecho dorado"],["#F4F4F0","Calzas"]]},
 "amazilia-tzacatl":{sw:[["#3E8A4A","Cuerpo"],["#E0442E","Pico"],["#A8502E","Cola"]]},
 "saltator-striatipectus":{sw:[["#7D8A7A","Cabeza"],["#8C9A3A","Alas"],["#E9E6DC","Pecho rayado"]]},
 "florisuga-mellivora":{sw:[["#2A3A9A","Cabeza"],["#F4F4F2","Vientre y cola"],["#3E8A4A","Dorso"]]}
};
const HAB={
 "stilpnia-cyanicollis":["En parejas o con bandadas mixtas de tangaras que recorren las copas; revisa ramas y hojas por debajo.","Yarumos y árboles frutales en bordes de cafetal."],
 "sicalis-flaveola":["En grupos que comen en el suelo; el macho canta desde ramas altas.","Potreros, patios y cercas."],
 "turdus-ignobilis":["Camina por el suelo picando lombrices y sube a los frutales; canta un trino variado al amanecer.","Papayos, comederos y prados."],
 "ramphocelus-flammigerus":["Anda en grupos familiares ruidosos que llegan juntos al comedero. El macho abre las alas y muestra la rabadilla en sus despliegues.","Comederos de banano y bordes de cafetales."],
 "ramphocelus-dimidiatus":["En grupos pequeños que se mueven por la vegetación baja y llegan al comedero con un llamado metálico.","Comederos y matorrales con heliconias."],
 "anisognathus-igniventris":["En parejas o grupos ruidosos que recorren los arbustos; canta un repique metálico.","Bordes de bosque alto y arbustos frutales."],
 "aglaeactis-cupripennis":["Territorial: defiende sus flores desde una percha expuesta en lo alto de un arbusto.","Arbustos con flores en zonas altas, como fucsias."],
 "atlapetes-pallidinucha":["Se mueve en parejas por el suelo y el sotobosque, escarbando la hojarasca.","Sotobosque húmedo con musgo en bosques altos."],
 "zonotrichia-capensis":["En parejas que defienden su territorio todo el año; canta a cualquier hora.","Potreros, caminos y cercas."],
 "piaya-cayana":["Corre por las ramas y planea de un árbol a otro; se mueve despacio y en silencio.","Copas medias de árboles y bordes de cafetales."],
 "thraupis-episcopus":["Inquieto y ruidoso; llega en pareja al comedero.","Comederos de fruta y árboles del jardín."],
 "stilpnia-vitriolina":["En parejas; muy confiada en los comederos.","Comederos, rastrojos y cercas vivas."],
 "euphonia-laniirostris":["En parejas que recorren las copas buscando frutos de muérdago.","Comederos y árboles con muérdago."],
 "icterus-chrysater":["En parejas, recorre el follaje con calma y teje nidos colgantes.","Plataneras, frutales y bordes."],
 "forpus-conspicillatus":["En bandadas pequeñas y parlanchinas que comen en el suelo y en arbustos.","Cercas, potreros con semillas y jardines."],
 "melanerpes-rubricapillus":["Ruidoso, picotea ramas secas y postes.","Troncos, postes y ramas muertas."],
 "turdus-grayi":["Busca alimento en el suelo bajo los árboles; canta largo al inicio de las lluvias.","Jardines y comederos."],
 "phimosus-infuscatus":["En parejas o grupos que caminan metiendo el pico en el barro.","Orillas húmedas y potreros encharcados."],
 "ortalis-columbiana":["Vive en grupos familiares que se mueven por las ramas caminando y saltando más que volando; al atardecer se posan en árboles secos y altos.","Árboles altos y secos al amanecer y al atardecer, guaduales y comederos con banano."],
 "sporophila-intermedia":["Anda en parejas o grupos pequeños que comen en el suelo o colgados de las espigas. El macho canta un trino largo y variado desde una percha baja.","Bordes de potreros y caminos con pasto en semilla."],
 "eriocnemis-mosquera":["Se posa con frecuencia en ramas bajas expuestas entre una flor y otra y defiende los arbustos en flor de otros colibríes.","Arbustos floridos en bordes de bosque altoandino y jardines de montaña."],
 "amazilia-tzacatl":["Muy territorial y agresiva: defiende un parche de flores o un bebedero y persigue a otros colibríes con chillidos secos.","Flores de jardín, heliconias y bebederos."],
 "saltator-striatipectus":["Anda en parejas entre arbustos y copas bajas y baja a los comederos de fruta. Canta frases cortas y melodiosas desde una percha visible.","Comederos con banano y papaya, cercas vivas y bordes de cafetal."],
 "florisuga-mellivora":["Territorial en las flores; persigue a otros colibríes y caza insectos al vuelo en el aire abierto.","Árboles en flor y bebederos de colibríes."]
};
const PLACES={
 "stilpnia-cyanicollis":["arboles"],"sicalis-flaveola":["prado"],"turdus-ignobilis":["arboles","prado","comedero"],
 "ramphocelus-flammigerus":["comedero","arboles"],"ramphocelus-dimidiatus":["comedero","arboles"],"anisognathus-igniventris":["arboles"],
 "aglaeactis-cupripennis":["arboles"],"atlapetes-pallidinucha":["arboles"],"zonotrichia-capensis":["prado"],"piaya-cayana":["arboles"],
 "thraupis-episcopus":["comedero","arboles"],"stilpnia-vitriolina":["comedero","arboles"],"euphonia-laniirostris":["comedero","arboles"],
 "icterus-chrysater":["arboles"],"forpus-conspicillatus":["arboles","prado"],"melanerpes-rubricapillus":["arboles"],
 "turdus-grayi":["comedero","prado"],"phimosus-infuscatus":["humedal"],
 "ortalis-columbiana":["arboles","comedero"],"sporophila-intermedia":["prado"],"florisuga-mellivora":["arboles"],"saltator-striatipectus":["comedero","arboles"],"eriocnemis-mosquera":["arboles"],"amazilia-tzacatl":["arboles","comedero"]};
const TREND={};
