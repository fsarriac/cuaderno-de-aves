/* ═══════════════ CIÉNAGA DE PIJIÑO · MAGDALENA ═══════════════
   Para agregar una especie: copie un bloque de BIRDS, ponga sus fotos en fotos/
   (y una copia pequeña en fotos/mini/) y complete XTRA, HAB y PLACES con el mismo id. */
const LUGAR = {
  nombre: "Riberas del Magdalena", corto: "las riberas del Magdalena",
  region: "las riberas del Magdalena", hero: "fotos/chauna.jpg",
  sitios: ["Charca de Guarinocito, La Dorada", "Conjunto Campestre Palma Real, La Dorada", "Ciénaga de Pijiño, Magdalena", "Canal del Dique, Bolívar"]
};
const IMG = {}; for (const k of ["amazonaLD","tyrannusLD","tyrannusLD2","sulcirostris","sulcirostris2","burrovianus","caracaraLD","brotogerisLD","chalybea","coragypsLD","sicalisLD","pandionLD","chauna","chauna2","chrysomusLD","chrysomusLD2","chrysomusLDF","dendrocygnaLD","amazonaLD2","sternula","anhinga","tachycineta","cocoiLD","cocoiLD2","cocoiLD3","patagioenas","arundinicola","arundinicolaF","jacanaLD","butoridesLD","auraLD","crotophagaMj","crotophagaMj2","butoridesLD2","chrysomusLDF2","certhiaxis","certhiaxis2","anhinga2","anhingaF","anhingaF2","tachycineta2","busarellus","busarellus2","cocoiLD4","porphyrioLD","nannopterumLD","nannopterumLD2","nannopterumLD3","albaLD","albaLD2","arundinicola2","tachycineta3","cocoiLD5","cocoiLD6","anhingaF3","anhingaF4","butoridesLD3","donacobius","tigrisoma","fluvicola","fluvicola2","cd_cocoi","cd_cocoi2","cd_cocoi3","cd_cocoi4","cd_cocoi5","cd_cocoiVuelo","cd_cocoi6","cd_alba2","cd_alba","cd_alba3","cd_albaCD","cd_nannopterum","cd_nannopterum2","cd_nannopterum3","cd_pelecanus","cd_thalasseus"]) IMG[k]="fotos/"+k+".jpg"; for (const k of ["amazona","amazona2","pandion","pandion2","caracara","fluvicola","jacana","jacanaJuv","milvago","milvago2","milvagoJuv","nycticorax","nycticorax2","torquata","torquata2","aramus","crotophaga","alba","alba2","tigrisoma","alba2"]) IMG[k]="fotos/"+k+".jpg";
const PJ = "Ciénaga de Pijiño, Magdalena";
const GU = "Charca de Guarinocito, La Dorada";
const PR = "Conjunto Campestre Palma Real, La Dorada";
const CD = "Canal del Dique, Bolívar";
const HOME = {name:"Ciénaga de Pijiño, Magdalena", lat:9.33, lon:-74.45, when:"", role:"", here:true};

const BIRDS = [
/* ───────── MIGRATORIAS ───────── */
{
  id:"pandion-haliaetus", common:"Águila pescadora", alt:"Osprey",
  sci:"Pandion haliaetus", family:"Pandionidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.pandion, date:"", place:PJ, ind:"Con un pescado en las garras"},{img:IMG.pandion2, date:"", place:PJ, ind:"Secándose con las alas entreabiertas"},{img:IMG.pandionLD, date:"", place:GU, ind:"Posada en lo alto de un árbol seco, a contraluz"}],
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
  photos:[{img:IMG.tigrisoma, date:"", place:PJ, ind:"Juvenil, con el barrado de «tigre»"},{img:IMG.tigrisoma, date:"", place:GU, ind:"Adulto entre la vegetación de la orilla: cabeza y cuello castaños"}],
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
  photos:[{img:IMG.alba2, date:"", place:PJ, ind:"Asomada sobre la vegetación de la orilla, con el pico amarillo"},{img:IMG.alba, date:"", place:PJ, ind:"En vuelo al atardecer"},{img:IMG.albaLD, date:"", place:GU, ind:"En la orilla, entre el pasto y los buchones"},{img:IMG.albaLD2, date:"", place:GU, ind:"Posada sobre la polisombra de una casa junto a la charca"},{img:IMG.cd_alba2, date:"", place:CD, ind:"En vuelo, con las patas negras extendidas"},{img:IMG.cd_alba, date:"", place:CD, ind:"En la orilla, junto a un maizal"},{img:IMG.cd_alba3, date:"", place:CD, ind:"Volando bajo sobre el canal"},{img:IMG.cd_albaCD, date:"", place:CD, ind:"Al acecho en la orilla, contra un muro de eneas"}],
  desc:"Garza blanca grande, de pico amarillo y patas negras. En época de cría le crecen plumas largas y finas en la espalda; por ellas casi desaparece hacia 1900, cuando se usaban en los sombreros de moda.",
  diet:"Peces, ranas, cangrejos e insectos grandes; caza caminando despacio o esperando inmóvil.",
  habitat:"Ciénagas, ríos, manglares, arrozales y potreros inundados.",
  migration:null
},
{
  id:"jacana-jacana", common:"Gallito de ciénaga", alt:"Jacana carunculada · Wattled Jacana",
  sci:"Jacana jacana", family:"Jacanidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.jacana, date:"", place:PJ, ind:"Adulto caminando en el pasto húmedo"},{img:IMG.jacanaJuv, date:"", place:PJ, ind:"Juvenil: blanco por debajo, con ceja clara"},{img:IMG.jacanaLD, date:"", place:GU, ind:"En vuelo: las plumas amarillas del ala"}],
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
  photos:[{img:IMG.amazona2, date:"", place:PJ, ind:"A contraluz al amanecer"},{img:IMG.amazona, date:"", place:PJ, ind:"Posado sobre el agua, con la cresta levantada"}],
  desc:"Verde oscuro brillante por encima, con collar blanco y un pico largo y pesado. El macho tiene una banda castaña en el pecho; la hembra, verde. Es el más grande de los martines pescadores verdes.",
  diet:"Peces pequeños y medianos que caza zambulléndose desde ramas bajas.",
  habitat:"Orillas de ciénagas, caños y ríos con ramas sobre el agua.",
  migration:null
},
{
  id:"fluvicola-pica", common:"Viudita", alt:"Viudita acuática · Pied Water-Tyrant",
  sci:"Fluvicola pica", family:"Tyrannidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.fluvicola, date:"", place:PJ, ind:"Adulto, blanco y negro"},{img:IMG.fluvicola, date:"", place:GU, ind:"Sobre una hoja de buchón: blanca con la espalda y las alas negras"},{img:IMG.fluvicola2, date:"", place:GU, ind:"Caminando sobre los buchones"}],
  desc:"Pequeño atrapamoscas blanco con la nuca, la espalda y las alas negras, como un traje de viuda. Mueve la cola continuamente.",
  diet:"Insectos pequeños que caza saltando entre la vegetación flotante y las orillas.",
  habitat:"Orillas de ciénagas, lagunas y canales con plantas acuáticas.",
  migration:null
},
{
  id:"caracara-cheriway", common:"Caracara copetón", alt:"Carancho · Crested Caracara",
  sci:"Caracara cheriway", family:"Falconidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.caracara, date:"", place:PJ, ind:"Posado en un tronco seco"},{img:IMG.caracaraLD, date:"", place:PR, ind:"En vuelo, con la cara roja y el cuello blanco"}],
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
},
{
  id:"amazona-ochrocephala", common:"Lora real", alt:"Amazona coroniamarilla · Yellow-crowned Amazon", sci:"Amazona ochrocephala", family:"Psittacidae", iucn:"LC", conf:"media",
  confNote:"En vuelo y a contraluz la corona no se ve bien. El rojo en el doblez del ala y en las plumas de vuelo apunta a la lora real; la lora alianaranjada (Amazona amazonica), también común en el Magdalena, tiene ese parche anaranjado y no tiene rojo en el hombro.",
  photos:[{img:IMG.amazonaLD, date:"", place:PR, ind:"En vuelo: rojo en el doblez del ala y en las plumas de vuelo"},{img:IMG.amazonaLD2, date:"", place:GU, ind:"En vuelo de lado: parche rojo en las plumas de vuelo"}],
  desc:"Loro grande y verde, de cola corta y cuadrada, con amarillo en la frente y la corona, rojo en el doblez del ala y un parche rojo en las plumas de vuelo que solo se ve con las alas abiertas. Vuela con aleteos cortos y rápidos, sin planear, y grita fuerte en vuelo.",
  diet:"Frutos, semillas, flores y nueces de palmas y árboles del bosque y de los potreros.",
  habitat:"Bosques húmedos y secos, orillas de ríos, potreros arbolados y palmares de tierras bajas.",
  tip:"Es de los loros más capturados para mascota porque aprende a imitar la voz humana. Comprarlos alimenta el tráfico: es ilegal y la mayoría de los pichones mueren antes de llegar a una casa.",
  migration:null
},
{
  id:"crotophaga-sulcirostris", common:"Garrapatero de pico estriado", alt:"Garrapatero · Groove-billed Ani", sci:"Crotophaga sulcirostris", family:"Cuculidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.sulcirostris, date:"", place:PR, ind:"Abriendo las alas sobre un cable: se ven los surcos del pico"},{img:IMG.sulcirostris2, date:"", place:PR, ind:"Asoleándose de espaldas, con las alas y la cola abiertas"}],
  desc:"Negro, de cola larga y aspecto desaliñado, con un pico alto y arqueado que tiene surcos a lo largo. Se distingue del garrapatero piquiliso por esos surcos y porque el pico no forma una joroba por encima de la frente. Vive en grupos que comparten un solo nido, donde varias hembras ponen y todos ayudan a criar.",
  diet:"Saltamontes, chinches y otros insectos, a menudo los que espanta el ganado; también lagartijas pequeñas y algunos frutos.",
  habitat:"Potreros, matorrales y bordes de caminos de tierras bajas cálidas, sobre todo las más secas.",
  migration:null
},
{
  id:"cathartes-burrovianus", common:"Guala cabeciamarilla", alt:"Gallinazo cabeciamarillo menor · Lesser Yellow-headed Vulture", sci:"Cathartes burrovianus", family:"Cathartidae", iucn:"LC", conf:"media",
  confNote:"La cabeza amarilla y anaranjada la separa del gallinazo cabecirrojo, que la tiene roja. Lo que la confirma es un parche pálido en la base de las plumas del ala vistas por encima, que desde abajo no se ve.",
  photos:[{img:IMG.burrovianus, date:"", place:PR, ind:"Planeando: cabeza amarilla y anaranjada, mitad trasera del ala plateada"}],
  desc:"Parecida al gallinazo cabecirrojo, pero algo más pequeña y con la cabeza desnuda amarilla y anaranjada, con toques azules y rojos. En vuelo muestra la misma V abierta, con la mitad trasera del ala plateada, y planea muy bajo sobre el pasto.",
  diet:"Carroña, que encuentra por el olfato; también peces y animales pequeños muertos en orillas inundadas.",
  habitat:"Sabanas, potreros húmedos, ciénagas y arrozales de tierras bajas.",
  migration:null
},
{
  id:"progne-chalybea", common:"Martín pechigrís", alt:"Golondrina de campanario · Gray-breasted Martin", sci:"Progne chalybea", family:"Hirundinidae", iucn:"LC", conf:"media",
  confNote:"El pecho grisáceo sin una banda marcada y las alas azul oscuro brillantes encajan con un martín pechigrís hembra o joven. El martín pechipardo, que también vive en tierras bajas, es pardo por encima y tiene una banda café que cruza el pecho blanco.",
  photos:[{img:IMG.chalybea, date:"", place:PR, ind:"Sobre un cable: pecho grisáceo y alas azul oscuro"}],
  desc:"Golondrina grande, azul acero brillante por encima. El macho tiene la garganta y el pecho gris parduzco y el vientre blanco; las hembras y los jóvenes son más apagados, con la cabeza parda. Anida en huecos de techos, campanarios y postes.",
  diet:"Insectos voladores que caza en vuelo, a veces muy alto.",
  habitat:"Pueblos, potreros y orillas de ríos de tierras bajas y medias.",
  migration:null
},
{
  id:"tyrannus-melancholicus", common:"Sirirí común", alt:"Tirano tropical · Tropical Kingbird", sci:"Tyrannus melancholicus", family:"Tyrannidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.tyrannusLD, date:"", place:PR, ind:"Posado entre el follaje: antifaz oscuro y vientre amarillo"},{img:IMG.tyrannusLD2, date:"", place:PR, ind:"Entre las ramas de un árbol de corteza lisa"}],
  desc:"Cabeza gris con antifaz oscuro, dorso oliva, pecho y vientre amarillos y cola parda con una muesca en la punta. Es de las aves más comunes de Colombia y casi siempre se ve en una percha alta y expuesta.",
  diet:"Insectos que caza en vuelo con salidas cortas desde la percha; también algunos frutos.",
  habitat:"Cualquier zona abierta con árboles: potreros, pueblos, cables y bordes de bosque.",
  migration:null
},
{
  id:"brotogeris-jugularis", common:"Periquito bronceado", alt:"Perico barbinaranja · Orange-chinned Parakeet", sci:"Brotogeris jugularis", family:"Psittacidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.brotogerisLD, date:"", place:PR, ind:"Sobre un cable junto a una palma"}],
  desc:"Periquito verde, pequeño, con una mancha naranja en la barbilla, hombros color bronce, pico pálido y anillo blanco alrededor del ojo. Anda en parejas y grupos ruidosos.",
  diet:"Frutos, semillas, flores y néctar de árboles como el ceibo y el guamo.",
  habitat:"Bosque seco, potreros arbolados, pueblos y jardines.",
  tip:"Es de los loros más capturados para tener como mascota. No compre aves silvestres: es ilegal y la mayoría muere en el comercio. Sembrar árboles nativos con frutos es la mejor forma de tenerlos cerca.",
  migration:null
},
{
  id:"coragyps-atratus", common:"Gallinazo negro", alt:"Chulo · Zamuro · Black Vulture", sci:"Coragyps atratus", family:"Cathartidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.coragypsLD, date:"", place:PR, ind:"Planeando de frente: manchas blancas en la punta de las alas"}],
  desc:"Ave grande y negra, con la cabeza desnuda y gris oscura. En vuelo se distingue del gallinazo cabecirrojo por la cola corta y cuadrada y por una mancha blanca en la punta de cada ala; aletea más seguido y planea con las alas casi rectas.",
  diet:"Carroña. A diferencia del cabecirrojo, casi no tiene olfato y encuentra la comida mirando, a menudo siguiendo a los cabecirrojos; también come basura y frutos caídos.",
  habitat:"Ciudades, basureros, potreros y bordes de carretera, desde el nivel del mar hasta unos 2.800 m.",
  tip:"Limpian el campo de animales muertos y así frenan la propagación de enfermedades. Envenenar o espantar gallinazos rompe ese servicio gratuito.",
  migration:null
},
{
  id:"chauna-chavaria", common:"Chavarría", alt:"Aruco · Northern Screamer", sci:"Chauna chavaria", family:"Anhimidae", iucn:"NT", conf:"alta",
  photos:[{img:IMG.chauna, date:"", place:GU, ind:"Sobre la copa de un arbusto: cara roja, cuello negro y patas rosadas"},{img:IMG.chauna2, date:"", place:GU, ind:"De espaldas, mirando hacia atrás, con el copete de plumas finas en la nuca"}],
  desc:"Ave enorme, del tamaño de un pavo, gris oscuro, con la cara blanca y roja alrededor del ojo, el cuello negro y un copete fino en la nuca. Aunque parece una gallina zancuda, su pariente más cercano son los patos. Tiene dos espolones afilados en cada ala y una capa de aire bajo la piel que cruje al tocarla. Su grito, que se oye a kilómetros, le da el nombre en inglés.",
  diet:"Plantas acuáticas, hojas, tallos tiernos y semillas de las orillas de ciénagas y charcas.",
  habitat:"Ciénagas, charcas y pantanos con mucha vegetación flotante del norte de Colombia y el oeste de Venezuela; vive casi solo en esa región.",
  tip:"Está casi amenazada: la desecación de ciénagas para potreros y cultivos le quita su casa. La Charca de Guarinocito es uno de los pocos sitios del Magdalena Medio donde todavía se ve con facilidad.",
  migration:null
},
{
  id:"anhinga-anhinga", common:"Pato aguja", alt:"Anhinga · Anhinga", sci:"Anhinga anhinga", family:"Anhingidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.anhinga, date:"", place:GU, ind:"Macho secándose: plumas plateadas en la espalda y cola con punta clara"},{img:IMG.anhinga2, date:"", place:GU, ind:"Macho de espaldas: las plumas plateadas de la espalda"},{img:IMG.anhingaF, date:"", place:GU, ind:"Hembra, con la cabeza y el cuello canela pálido"},{img:IMG.anhingaF2, date:"", place:GU, ind:"Hembra con las alas y la cola abiertas, secándose"},{img:IMG.anhingaF3, date:"", place:GU, ind:"Hembra a contraluz: cuello canela y patas anaranjadas"},{img:IMG.anhingaF4, date:"", place:GU, ind:"Nadando con solo el cuello afuera, como una serpiente"}],
  desc:"Ave acuática negra, de cuello largo y delgado como una serpiente, pico amarillo en forma de daga y cola larga en abanico con la punta clara. El macho tiene la espalda y las alas cubiertas de plumas plateadas; la hembra tiene la cabeza y el cuello canela. Nada con el cuerpo sumergido y solo el cuello afuera.",
  diet:"Peces que ensarta con el pico bajo el agua, como con un arpón; los lanza al aire y se los traga de cabeza.",
  habitat:"Ciénagas, charcas, caños y ríos de aguas tranquilas con árboles en la orilla.",
  migration:null
},
{
  id:"ardea-cocoi", common:"Garzón azul", alt:"Garza cuca · Cocoi Heron", sci:"Ardea cocoi", family:"Ardeidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.cocoiLD, date:"", place:GU, ind:"Entre los buchones, con la corona negra y el hombro negro"},{img:IMG.cocoiLD2, date:"", place:GU, ind:"Cabeza y cuello asomados entre los buchones"},{img:IMG.cocoiLD3, date:"", place:GU, ind:"En vuelo sobre la charca"},{img:IMG.cocoiLD4, date:"", place:GU, ind:"Escondido entre los buchones de la orilla"},{img:IMG.cocoiLD5, date:"", place:GU, ind:"Caminando por la orilla, frente a una piedra"},{img:IMG.cocoiLD6, date:"", place:GU, ind:"Entre los buchones, con las plumas largas del pecho"},{img:IMG.cd_cocoi, date:"", place:CD, ind:"Adulto pescando en la orilla"},{img:IMG.cd_cocoi2, date:"", place:CD, ind:"Entre los mangles, con el pico abierto"},{img:IMG.cd_cocoi3, date:"", place:CD, ind:"En vuelo sobre el canal"},{img:IMG.cd_cocoi4, date:"", place:CD, ind:"Vigilando desde lo alto de un arbusto"},{img:IMG.cd_cocoi5, date:"", place:CD, ind:"Vuelo rasante sobre el agua"},{img:IMG.cd_cocoiVuelo, date:"", place:CD, ind:"En vuelo alto, con el cuello recogido y las alas blancas y negras"},{img:IMG.cd_cocoi6, date:"", place:CD, ind:"De pie en el agua, al acecho"}],
  desc:"La garza más grande de Suramérica, de casi 1,3 m de alto. Cuello blanco, corona negra, dorso gris azulado, pico amarillo y largo. En vuelo recoge el cuello en forma de S y bate las alas despacio.",
  diet:"Peces grandes, que atrapa de un picotazo rápido después de esperar inmóvil; también cangrejos, ranas y culebras de agua.",
  habitat:"Ríos anchos, canales, ciénagas y manglares de tierras bajas.",
  migration:null
},
{
  id:"butorides-striata", common:"Garcita rayada", alt:"Garcita estriada · Striated Heron", sci:"Butorides striata", family:"Ardeidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.butoridesLD, date:"", place:GU, ind:"Abriendo las alas entre los buchones"},{img:IMG.butoridesLD2, date:"", place:GU, ind:"Adulto acechando sobre un tronco entre las cañas"},{img:IMG.butoridesLD3, date:"", place:GU, ind:"Adulto en una rama seca"}],
  desc:"Garza pequeña y rechoncha, de patas amarillas cortas, corona negra, dorso gris pizarra y cuello gris. Camina agachada y se queda inmóvil antes de lanzar el picotazo.",
  diet:"Peces pequeños, ranas, cangrejos e insectos. Se ha visto usar «carnadas» —insectos o migas— para atraer peces.",
  habitat:"Orillas de ríos, lagunas, humedales y embalses con vegetación.",
  migration:null
},
{
  id:"dendrocygna-autumnalis", common:"Pisingo", alt:"Iguasa común · Black-bellied Whistling-Duck", sci:"Dendrocygna autumnalis", family:"Anatidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.dendrocygnaLD, date:"", place:GU, ind:"Pareja en vuelo: franja blanca en el ala y pico rojo"}],
  desc:"Pato de cuello largo, castaño, con la cara gris, el vientre negro, el pico rojo coral y las patas rosadas. En vuelo muestra una franja blanca ancha en el ala. Su llamado es un silbido agudo, de ahí lo de «pato silbador». A diferencia de otros patos, se posa en árboles y anida en huecos de troncos.",
  diet:"Semillas, granos (sobre todo arroz) y plantas acuáticas; come mucho de noche.",
  habitat:"Ciénagas, arrozales, potreros inundables y lagunas de tierras bajas.",
  migration:null
},
{
  id:"sternula-superciliaris", common:"Gaviotín de río", alt:"Charrán picoamarillo · Yellow-billed Tern", sci:"Sternula superciliaris", family:"Laridae", iucn:"LC", conf:"media",
  confNote:"La foto está lejos y sobreexpuesta. El pico amarillo, la corona negra con la frente blanca y las patas amarillas encajan con el gaviotín de río; el gaviotín picudo, también del Magdalena, es mucho más grande, de pico enorme y con el ala negra, gris y blanca.",
  photos:[{img:IMG.sternula, date:"", place:GU, ind:"Posada en un palo en la charca: pico amarillo y corona negra"}],
  desc:"Gaviotín pequeño, gris pálido por encima y blanco por debajo, con la corona negra, la frente blanca y un pico amarillo relativamente grueso. Vuela con aleteos rápidos sobre el agua y se lanza en picada para pescar.",
  diet:"Peces pequeños y camarones que atrapa zambulléndose desde el aire.",
  habitat:"Ríos grandes, ciénagas y lagunas de tierras bajas; anida en los playones de arena que deja el río al bajar.",
  migration:null
},
{
  id:"tachycineta-albiventer", common:"Golondrina aliblanca", alt:"White-winged Swallow", sci:"Tachycineta albiventer", family:"Hirundinidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.tachycineta, date:"", place:GU, ind:"Pareja en una guadua sobre el agua"},{img:IMG.tachycineta2, date:"", place:GU, ind:"De frente en una rama: dorso azul verdoso y ala blanca"},{img:IMG.tachycineta3, date:"", place:GU, ind:"Sobre una estaca: mancha blanca del ala"}],
  desc:"Golondrina pequeña, azul verdoso brillante por encima y blanca por debajo, con una mancha blanca grande en el ala y la rabadilla blanca, que se ven sobre todo en vuelo.",
  diet:"Insectos que caza en vuelos bajos y rasantes sobre el agua.",
  habitat:"Ríos, ciénagas y lagunas de tierras bajas; siempre cerca del agua.",
  migration:null
},
{
  id:"arundinicola-leucocephala", common:"Viudita", alt:"Monjita · White-headed Marsh Tyrant", sci:"Arundinicola leucocephala", family:"Tyrannidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.arundinicola, date:"", place:GU, ind:"Macho de cabeza blanca, con una hembra al fondo"},{img:IMG.arundinicolaF, date:"", place:GU, ind:"Hembra sobre una hoja de buchón"},{img:IMG.arundinicola2, date:"", place:GU, ind:"Macho sobre un palo: cabeza blanca y base del pico amarilla"}],
  desc:"Atrapamoscas pequeño de los pantanos. El macho es negro con la cabeza entera blanca, como con una capucha; la hembra es gris parda por encima y blanca por debajo, con la frente y la cara blancas. Los dos tienen la base del pico amarilla.",
  diet:"Insectos que caza con salidas cortas desde una percha baja sobre el agua.",
  habitat:"Ciénagas, charcas y potreros inundados con vegetación flotante y juncos, en tierras bajas.",
  migration:null
},
{
  id:"chrysomus-icterocephalus", common:"Monjita", alt:"Turpial de agua · Yellow-hooded Blackbird", sci:"Chrysomus icterocephalus", family:"Icteridae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.chrysomusLD, date:"", place:GU, ind:"Macho sobre los buchones de agua"},{img:IMG.chrysomusLD2, date:"", place:GU, ind:"Macho volando sobre los buchones"},{img:IMG.chrysomusLDF, date:"", place:GU, ind:"Hembra entre los buchones: parda, con la cara y la garganta amarillas"},{img:IMG.chrysomusLDF2, date:"", place:GU, ind:"Grupo de hembras y jóvenes en las ramas de la orilla"}],
  desc:"El macho es negro brillante con una capucha amarillo intenso y un pequeño antifaz negro entre el pico y el ojo. La hembra es parda oliva con la garganta y la ceja amarillentas.",
  diet:"Insectos y semillas que busca entre juncos, eneas y pastos altos.",
  habitat:"Ciénagas, juncales, arrozales y canales. Anida en colonias sobre la vegetación del agua.",
  migration:null
},
{
  id:"patagioenas-cayennensis", common:"Paloma colorada", alt:"Torcaza morada · Pale-vented Pigeon", sci:"Patagioenas cayennensis", family:"Columbidae", iucn:"LC", conf:"media",
  confNote:"La foto es lejana. El cuerpo vinotinto, la cabeza gris con brillo verdoso y las alas pardas apuntan a la paloma colorada; la paloma rojiza de los bosques húmedos es más pequeña y uniforme. El vientre pálido, que la confirma, no se ve.",
  photos:[{img:IMG.patagioenas, date:"", place:GU, ind:"En la punta de un tronco seco"}],
  desc:"Paloma grande, de color vino tinto en el pecho y la espalda, cabeza gris con brillo verde y bronce en la nuca, cola gris y vientre pálido. Se posa en lo más alto de árboles secos y canta un arrullo grave y repetido.",
  diet:"Frutos, semillas y brotes que busca en las copas de los árboles.",
  habitat:"Bordes de bosque, potreros con árboles, orillas de ríos y manglares de tierras bajas.",
  migration:null
},
{
  id:"cathartes-aura", common:"Gallinazo cabecirrojo", alt:"Guala · Turkey Vulture", sci:"Cathartes aura", family:"Cathartidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.auraLD, date:"", place:GU, ind:"Posado en un árbol seco: cabeza roja"}],
  desc:"Ave grande y negra con la cabeza desnuda y roja. En vuelo se reconoce por las alas en V abierta, con la mitad posterior plateada, y un balanceo de lado a lado sin casi aletear.",
  diet:"Carroña, que encuentra por el olfato, algo raro entre las aves.",
  habitat:"Cielos abiertos sobre costas, potreros y ciudades. En el invierno del norte llegan además aves migratorias de Norteamérica.",
  migration:null
},
{
  id:"busarellus-nigricollis", common:"Gavilán de ciénaga", alt:"Gavilán pescador · Black-collared Hawk", sci:"Busarellus nigricollis", family:"Accipitridae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.busarellus, date:"", place:GU, ind:"En la copa de un yarumo: cabeza blanca y collar negro"},{img:IMG.busarellus2, date:"", place:GU, ind:"Mirando de frente entre las hojas"}],
  desc:"Gavilán grande de color canela rojizo, con la cabeza blanquecina, un collar negro en el pecho y las plumas de vuelo negras. Tiene las patas cubiertas de escamas ásperas, como las del águila pescadora, para agarrar peces resbalosos.",
  diet:"Peces que atrapa en la superficie del agua tirándose con las patas por delante; también caracoles, insectos acuáticos y algún roedor.",
  habitat:"Ciénagas, charcas, caños y ríos lentos con árboles en la orilla, en tierras bajas.",
  migration:null
},
{
  id:"nannopterum-brasilianum", common:"Pato cuervo", alt:"Cormorán neotropical · Neotropic Cormorant", sci:"Nannopterum brasilianum", family:"Phalacrocoracidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.nannopterumLD, date:"", place:GU, ind:"Joven posado en una rama sobre la charca"},{img:IMG.nannopterumLD2, date:"", place:GU, ind:"Nadando con solo el cuello afuera"},{img:IMG.nannopterumLD3, date:"", place:GU, ind:"Grupo en vuelo sobre la charca"},{img:IMG.cd_nannopterum, date:"", place:CD, ind:"Tres posados en ramas secas sobre el agua"},{img:IMG.cd_nannopterum2, date:"", place:CD, ind:"En vuelo"},{img:IMG.cd_nannopterum3, date:"", place:CD, ind:"Grupo en la copa de un árbol: uno seca las alas abiertas al sol y otro despega"}],
  desc:"Negro, de cuello largo, cola larga y pico ganchudo con piel amarilla en la base. Sus plumas no son del todo impermeables: eso le ayuda a hundirse al bucear, pero después tiene que posarse con las alas abiertas para secarlas al sol.",
  diet:"Peces que persigue buceando, impulsándose con las patas palmeadas.",
  habitat:"Ciénagas, ríos, lagunas, manglares y costas.",
  migration:null
},
{
  id:"porphyrio-martinica", common:"Tingua azul", alt:"Calamón morado · Purple Gallinule", sci:"Porphyrio martinica", family:"Rallidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.porphyrioLD, date:"", place:GU, ind:"Trepando por un arbusto de la orilla: escudo celeste y pico rojo"}],
  desc:"De las aves más coloridas de la Sabana: cabeza y pecho azul violeta, espalda verde turquesa, pico rojo con punta amarilla, un escudo celeste en la frente y patas amarillas larguísimas.",
  diet:"Omnívora: semillas, hojas y flores de plantas acuáticas, insectos, caracoles, ranas pequeñas y hasta huevos de otras aves.",
  habitat:"Humedales con juncos, eneas y vegetación flotante. Sus dedos muy largos le reparten el peso para caminar sobre las plantas que flotan.",
  migration:null
},
{
  id:"crotophaga-major", common:"Garrapatero mayor", alt:"Cocinera · Greater Ani", sci:"Crotophaga major", family:"Cuculidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.crotophagaMj, date:"", place:GU, ind:"Entre ramas y hojas de palma: ojo blanco y brillo azul"},{img:IMG.crotophagaMj2, date:"", place:GU, ind:"Pareja en una rama, con las colas largas colgando"}],
  desc:"El más grande de los garrapateros: negro con brillo azul y verde en la espalda y las alas, cola larga y un pico alto y arqueado con una cresta encima. Los ojos blancos lo separan de los otros dos garrapateros, que los tienen oscuros.",
  diet:"Saltamontes, chinches, arañas, lagartijas y ranas pequeñas; algunos frutos.",
  habitat:"Bosques de galería, manglares y orillas arboladas de ríos, ciénagas y charcas; siempre cerca del agua.",
  migration:null
},
{
  id:"certhiaxis-cinnamomeus", common:"Rastrojero barbiamarillo", alt:"Chamicero de ciénaga · Yellow-chinned Spinetail", sci:"Certhiaxis cinnamomeus", family:"Furnariidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.certhiaxis, date:"", place:GU, ind:"Pareja en un tronco seco: barbilla amarilla"},{img:IMG.certhiaxis2, date:"", place:GU, ind:"Entrando a su nido de palitos"}],
  desc:"Pajarito rufo canela por encima y blanco por debajo, con la cara gris, una línea oscura por el ojo y una manchita amarilla en la barbilla. Es pariente de los horneros y, como ellos, constructor: hace un nido grande y cerrado de palitos con un túnel de entrada.",
  diet:"Insectos y arañas que busca entre la vegetación de la orilla y las plantas flotantes.",
  habitat:"Orillas de ciénagas, charcas y ríos con juncos, buchones y arbustos bajos, en tierras bajas.",
  migration:null
},
{
  id:"donacobius-atricapilla", common:"Pájaro trompetero", alt:"Sinsonte de agua · Black-capped Donacobius", sci:"Donacobius atricapilla", family:"Donacobiidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.donacobius, date:"", place:GU, ind:"Sobre los buchones: ojo amarillo y pecho canela"}],
  desc:"Pájaro de cola larga, con la cabeza y la espalda negras, el pecho canela, los ojos amarillos y la cola negra con puntas blancas. Es tan raro que tiene su propia familia, con una sola especie. Las parejas cantan a dúo, uno frente al otro, moviendo la cola de lado a lado.",
  diet:"Insectos y otros invertebrados que busca entre la vegetación flotante y los juncos.",
  habitat:"Orillas de ciénagas, charcas y ríos con juncos, buchones y pastos altos, en tierras bajas.",
  migration:null
},
{
  id:"sicalis-flaveola", common:"Canario coronado", alt:"Canario costeño · Saffron Finch", sci:"Sicalis flaveola", family:"Thraupidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.sicalisLD, date:"", place:PR, ind:"Macho sobre un cable, con la corona anaranjada"}],
  desc:"El macho es amarillo intenso con la frente y la corona anaranjadas; la hembra y los jóvenes son más opacos y grisáceos. Anda en grupos que comen en el suelo.",
  diet:"Semillas de pastos y granos; algunos insectos.",
  habitat:"Áreas abiertas, patios, parques y pueblos de tierras bajas y medias. Anida en huecos, aleros y estructuras como postes y techos.",
  tip:"Es de las aves silvestres más capturadas para jaulas en Colombia. No compre aves silvestres: es ilegal y sostiene la captura.",
  migration:null
},
{
  id:"pelecanus-occidentalis", common:"Pelícano pardo", alt:"Alcatraz · Brown Pelican", sci:"Pelecanus occidentalis", family:"Pelecanidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.cd_pelecanus, date:"", place:CD, ind:"Adulto en aguas someras"}],
  desc:"Ave marina enorme, gris y parda, con la cabeza blanca amarillenta y una bolsa bajo el pico que se estira para atrapar peces. Es el único pelícano que pesca lanzándose en picada desde el aire.",
  diet:"Peces, sobre todo sardinas y lisas, que atrapa con la bolsa del pico después de zambullirse.",
  habitat:"Costas, bahías, manglares y bocas de ríos y canales.",
  migration:null
},
{
  id:"thalasseus-maximus", common:"Gaviotín real", alt:"Charrán real · Royal Tern", sci:"Thalasseus maximus", family:"Laridae", iucn:"LC", conf:"media",
  confNote:"El grupo es mixto: los de pico anaranjado son gaviotines reales, y algunos de pico negro con punta amarilla parecen gaviotines patinegros (Thalasseus sandvicensis). A esta distancia no se pueden separar todos.",
  photos:[{img:IMG.cd_thalasseus, date:"", place:CD, ind:"Grupo descansando sobre un tronco, junto a patos cuervo"}],
  desc:"Ave marina blanca y gris perla, con una cresta negra despeinada en la nuca y pico grueso anaranjado. Muchos de los que se ven en el Caribe colombiano llegan desde las costas de Norteamérica fuera de su época de cría.",
  diet:"Peces pequeños que atrapa lanzándose en picada al agua.",
  habitat:"Costas, playas, bahías y desembocaduras; descansa en grupos sobre troncos, bancos de arena y muelles.",
  migration:null
}];

const XTRA={
 "amazona-ochrocephala":{sw:[["#3E9A3A","Cuerpo"],["#E2C23A","Frente"],["#D8322A","Ala"]]},
 "crotophaga-sulcirostris":{sw:[["#141418","Plumaje"],["#3A3248","Brillo morado"]]},
 "cathartes-burrovianus":{sw:[["#141414","Plumaje"],["#9EA2A6","Plumas de vuelo"],["#E8B43A","Cabeza"]]},
 "progne-chalybea":{sw:[["#22304A","Dorso"],["#A8A29A","Pecho"],["#F2F0EA","Vientre"]]},
 "tyrannus-melancholicus":{sw:[["#8C9196","Cabeza"],["#E6D23A","Pecho"],["#4A4238","Cola"]]},
 "brotogeris-jugularis":{sw:[["#5DB43A","Cuerpo"],["#E8823A","Barbilla"],["#9C7A3A","Hombros"]]},
 "coragyps-atratus":{sw:[["#141414","Plumaje"],["#5A5A5A","Cabeza"],["#E8E8E4","Puntas alares"]]},
 "chauna-chavaria":{sw:[["#5A5E66","Cuerpo"],["#141414","Cuello"],["#F2F0EA","Cara"],["#E06A6A","Patas y ojo"]]},
 "anhinga-anhinga":{sw:[["#141418","Cuerpo"],["#D8DCE0","Plumas de la espalda"],["#E2B84A","Pico"]]},
 "ardea-cocoi":{sw:[["#8E9AA8","Dorso"],["#F4F4F0","Cuello"],["#151515","Corona"],["#E8C83A","Pico"]]},
 "butorides-striata":{sw:[["#3A4A5A","Corona"],["#9AA4AE","Cuello"],["#E8C83A","Patas"]]},
 "dendrocygna-autumnalis":{sw:[["#8A4E33","Cuello y dorso"],["#1C1A1A","Vientre"],["#F08070","Pico"],["#F4F2EE","Franja alar"]]},
 "sternula-superciliaris":{sw:[["#F4F4F2","Cuerpo"],["#141414","Corona"],["#E8C83A","Pico"]]},
 "tachycineta-albiventer":{sw:[["#1E5A6A","Dorso"],["#F4F4F2","Vientre y ala"]]},
 "arundinicola-leucocephala":{sw:[["#1E1E22","Macho"],["#F4F4F2","Cabeza"],["#A8A29A","Hembra"]]},
 "chrysomus-icterocephalus":{sw:[["#F2C21A","Capucha"],["#111214","Cuerpo"]]},
 "patagioenas-cayennensis":{sw:[["#8A3E3A","Cuerpo"],["#7A8A84","Cabeza"],["#5A5E66","Cola"]]},
 "cathartes-aura":{sw:[["#1B1A1C","Plumaje"],["#9EA2A6","Plumas de vuelo"],["#A8322E","Cabeza"]]},
 "busarellus-nigricollis":{sw:[["#C2683A","Cuerpo"],["#F2EEE4","Cabeza"],["#141414","Collar y alas"]]},
 "nannopterum-brasilianum":{sw:[["#141416","Plumaje"],["#E8B83A","Base del pico"]]},
 "porphyrio-martinica":{sw:[["#3A2FA0","Cabeza y pecho"],["#1F9A8A","Espalda"],["#E2321F","Pico"],["#F2C21A","Patas"],["#A9D8EC","Escudo frontal"]]},
 "crotophaga-major":{sw:[["#141418","Cuerpo"],["#2A4A7A","Brillo azul"],["#E8F0F2","Ojo"]]},
 "certhiaxis-cinnamomeus":{sw:[["#C8783A","Dorso"],["#F4F2EA","Vientre"],["#E8D23A","Barbilla"]]},
 "donacobius-atricapilla":{sw:[["#141418","Cabeza"],["#E8C8A0","Pecho"],["#E8B83A","Ojo"]]},
 "sicalis-flaveola":{sw:[["#F2C21A","Cuerpo"],["#F08A1C","Corona"]]},
 "pelecanus-occidentalis":{sw:[["#8C8A86","Cuerpo"],["#F2EBD2","Cabeza"],["#5A4A3A","Cuello"]]},
 "thalasseus-maximus":{sw:[["#F7F7F5","Cuerpo"],["#C8CED4","Alas"],["#F08A3A","Pico"],["#151515","Cresta"]]},
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
 "amazona-ochrocephala":["Vuela en parejas o en grupos al amanecer y al atardecer, entre los dormideros y los árboles donde come, siempre gritando. Las parejas vuelan tan juntas que casi se tocan.","El cielo sobre el conjunto, temprano en la mañana y al final de la tarde."],
 "crotophaga-sulcirostris":["Anda en grupos que se mueven juntos con vuelos cortos y torpes. En las mañanas se asolea con las alas y la cola abiertas, como en estas fotos.","Cables y matorrales del conjunto."],
 "cathartes-burrovianus":["Planea muy bajo sobre potreros y humedales, balanceándose de lado a lado y buscando por el olfato. Suele andar sola, no en los grupos grandes del gallinazo negro.","El cielo sobre el conjunto y los potreros vecinos."],
 "progne-chalybea":["Se posa en grupos en cables y antenas y vuela en círculos amplios cazando insectos. Canta un gorjeo alegre desde los cables.","Cables del conjunto."],
 "tyrannus-melancholicus":["Caza desde perchas altas y vuelve al mismo sitio. Es valiente: persigue a gavilanes y aves mucho más grandes que se acerquen a su nido.","Ramas altas y cables del conjunto."],
 "brotogeris-jugularis":["Anda en parejas o grupos ruidosos que chillan al volar. Se esconden bien entre el follaje verde.","Cables y palmas del conjunto, en parejas o grupos ruidosos."],
 "coragyps-atratus":["Muy sociable: duerme y come en grupos grandes y se impone en la carroña por número. Se asolea con las alas abiertas en las mañanas frías.","En el cielo sobre el conjunto, en grupos que planean juntos."],
 "chauna-chavaria":["Anda en parejas que se posan en lo alto de los arbustos de la orilla y se llaman con gritos fortísimos. Camina sobre la vegetación flotante con sus dedos enormes y vuela planeando alto, como un gallinazo.","Copas de los arbustos de la orilla de la charca."],
 "anhinga-anhinga":["Sus plumas se empapan para poder bucear, así que después de pescar se posa con las alas abiertas a secarlas al sol. Cuando nada, solo se le ve el cuello zigzagueando sobre el agua.","Palos y ramas secas sobre la charca, secándose al sol."],
 "ardea-cocoi":["Solitaria y paciente: puede pasar mucho tiempo inmóvil en la orilla antes de lanzar el picotazo. Al espantarse da un graznido ronco y se va volando bajo sobre el agua.","Entre los buchones de la orilla de la charca."],
 "butorides-striata":["Se queda inmóvil largo rato al borde del agua, con el cuello encogido, y lanza el pico como un resorte.","Escondida entre los buchones y las cañas de la orilla."],
 "dendrocygna-autumnalis":["Anda en parejas o grupos que silban al volar. De día descansa en la orilla o en árboles; al atardecer sale a comer a arrozales y potreros inundados.","En vuelo sobre la charca, sobre todo al amanecer y al atardecer."],
 "sternula-superciliaris":["Patrulla el agua en vuelo, se detiene un instante en el aire y se tira de cabeza. Descansa en palos y troncos que salen del agua.","Palos y estacas en medio de la charca."],
 "tachycineta-albiventer":["Se posa en parejas o grupitos en palos, troncos y cercas que salen del agua, y desde ahí sale a cazar volando a ras de la superficie.","Guaduas y palos clavados en la charca."],
 "arundinicola-leucocephala":["Anda en parejas que se posan en la punta de juncos y hojas sobre el agua y salen volando a cazar insectos para volver al mismo sitio.","Hojas de buchón y juncos de la charca."],
 "chrysomus-icterocephalus":["Vive en colonias ruidosas. Los machos cantan con un chirrido metálico desde lo alto de los juncos y de los árboles junto al agua.","Sobre los buchones de agua de la charca."],
 "patagioenas-cayennensis":["Suele verse sola o en parejas, posada en la punta de un árbol seco y alto, desde donde canta. Vuela rápido y directo.","Árboles secos altos junto a la charca."],
 "cathartes-aura":["Planea durante horas en las corrientes de aire caliente, buscando comida por el olfato.","Árboles secos junto a la charca y el cielo sobre ella."],
 "busarellus-nigricollis":["Espera inmóvil en una rama sobre el agua y baja en un planeo corto para sacar el pez con las patas. Suele dejarse ver bien, en perchas expuestas.","Copas de los árboles de la orilla, como los yarumos."],
 "nannopterum-brasilianum":["Bucea durante muchos segundos y reaparece lejos. Pasa largos ratos posado en ramas secas sobre el agua, a menudo con las alas abiertas para secarlas.","Ramas sobre la charca y nadando en el agua abierta; en grupos al atardecer."],
 "porphyrio-martinica":["Camina despacio sobre la vegetación flotante, sacudiendo la cola corta y mostrando el blanco de debajo. Trepa por los juncos con habilidad y es algo tímida.","Orillas con buchones y arbustos; trepa entre las ramas."],
 "crotophaga-major":["Vive en grupos ruidosos que se mueven juntos por la vegetación de la orilla y hacen un nido comunal donde varias hembras ponen. Hace un ruido como de olla hirviendo, que le da el nombre de «cocinera».","Árboles y palmas de la orilla de la charca."],
 "certhiaxis-cinnamomeus":["Anda en parejas que se llaman con un trino seco y rápido. Se mueve inquieto entre la vegetación de la orilla y entra y sale de su nido de palitos.","Troncos secos y matorrales de la orilla de la charca."],
 "donacobius-atricapilla":["Se posa a la vista en lo alto de la vegetación de la orilla y canta fuerte, a menudo en pareja, abriendo y cerrando la cola. Los jóvenes de una nidada anterior ayudan a criar a sus hermanos.","Buchones y arbustos bajos de la orilla de la charca."],
 "sicalis-flaveola":["En grupos que comen en el suelo; el macho canta un trino alegre desde postes y cables.","Cables y prados del Conjunto Palma Real."],
 "pelecanus-occidentalis":["Vuela en fila sobre el agua, rozando las olas. Para pescar sube unos metros y se deja caer en picada; luego flota mientras escurre el agua de la bolsa antes de tragar.","Bocas del canal, bahía de Cartagena y aguas someras con peces."],
 "thalasseus-maximus":["Descansa en grupos ruidosos, todos mirando contra el viento. Pesca volando sobre el agua con el pico hacia abajo y se lanza en picada.","Troncos, bancos de arena y muelles cerca del mar y de la boca del canal."],
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
 "amazona-ochrocephala":["cielo","arboles"],
 "crotophaga-sulcirostris":["prado","arboles"],
 "cathartes-burrovianus":["cielo"],
 "progne-chalybea":["cielo"],
 "tyrannus-melancholicus":["arboles","cielo"],
 "brotogeris-jugularis":["arboles"],
 "coragyps-atratus":["cielo","arboles"],
 "chauna-chavaria":["humedal","arboles"],
 "anhinga-anhinga":["humedal","arboles"],
 "ardea-cocoi":["humedal"],
 "butorides-striata":["humedal"],
 "dendrocygna-autumnalis":["humedal","cielo"],
 "sternula-superciliaris":["humedal","cielo"],
 "tachycineta-albiventer":["humedal","cielo"],
 "arundinicola-leucocephala":["humedal"],
 "chrysomus-icterocephalus":["humedal"],
 "patagioenas-cayennensis":["arboles"],
 "cathartes-aura":["cielo","arboles"],
 "busarellus-nigricollis":["humedal","arboles"],
 "nannopterum-brasilianum":["humedal","arboles"],
 "porphyrio-martinica":["humedal"],
 "crotophaga-major":["humedal","arboles"],
 "certhiaxis-cinnamomeus":["humedal","arboles"],
 "donacobius-atricapilla":["humedal"],
 "sicalis-flaveola":["prado"],
 "pelecanus-occidentalis":["humedal"],
 "thalasseus-maximus":["humedal"],
 "pandion-haliaetus":["humedal","cielo"],"aramus-guarauna":["humedal"],"tigrisoma-lineatum":["humedal"],
 "nycticorax-nycticorax":["humedal","arboles"],"ardea-alba":["humedal"],"jacana-jacana":["humedal","prado"],
 "megaceryle-torquata":["humedal"],"chloroceryle-amazona":["humedal"],"fluvicola-pica":["humedal"],
 "caracara-cheriway":["prado","arboles"],"milvago-chimachima":["prado","arboles"],"crotophaga-ani":["prado","arboles"]};
const TREND={};
