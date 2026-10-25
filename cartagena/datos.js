/* ═══════════════ CARTAGENA Y ALREDEDORES · BOLÍVAR ═══════════════
   Sitios: Arjona, Turbaco, Islas del Rosario y la ciudad. Cada foto indica su sitio en "place".
   Para agregar una especie: copie un bloque de BIRDS, ponga sus fotos en fotos/
   (y una copia pequeña en fotos/mini/) y complete XTRA, HAB y PLACES con el mismo id. */
const LUGAR = {
  nombre: "Cartagena y alrededores", corto: "Cartagena y alrededores",
  region: "la región de Cartagena", hero: "fotos/pelecanusIR.jpg"
};
const IMG = {}; for (const k of ["chrysomus","chrysomus2","jacana","rostrhamus","milvago","dendro","dendro2","leistes","theristicus","buteogallus","buteogallus2","thula","quiscalus","crotophaga","furnarius","bubulcus","brotogeris","brotogeris2","leucophaeus","leucophaeus2","araMG","caracara","melanerpesMG2","melanerpesMG3","melanerpesMG4","brotogerisMG","brotogerisMG2","quiscalusMG","quiscalusMG2","quiscalusMG3","myiozetetes","melancholicus","nannopterum","nannopterum2","pelecanus","thalasseus","cocoi","cocoi2","cocoi3","cocoi4","cocoi5","cocoi6","alba","alba2","alba3","albaMG","eudocimus","pitangus","pitangus2","pitangus3","pitangus4","pelecanus2","pelecanus3","milvago2","milvagoAR","eupsittula","eupsittula2","ara","quiscalus2","quiscalus3","pelecanusIR","pelecanusIR2","pelecanusIR3","quiscalusF","sicalisMG","pelecanusZ","pelecanusZ2","melanerpesMG","pelecanusPicada","cathartesMG","fregataJuv","fregata","fregata2","quiscalusIR","thalasseusIR","thalasseusMG","leucophaeus","melanerpesMG2","melanerpesMG3","melanerpesMG4","brotogerisMG","brotogerisMG2","quiscalusMG","quiscalusMG2","quiscalusMG3","myiozetetes","melancholicus","thalasseusMG","milvagoAR","albaMG","eudocimus","leucophaeus2","araMG","caracara","albaCD","cocoiVuelo","nannopterum3"]) IMG[k]="fotos/"+k+".jpg";
const AR = "Arjona, Bolívar";
const CD = "Canal del Dique, Bolívar";
const MG = "Paseo peatonal de Manga, Cartagena";
const IR = "Islas del Rosario y Barú";
const HOME = {name:"Cartagena, Bolívar", lat:10.39, lon:-75.51, when:"", role:"", here:true};

const BIRDS = [
{
  id:"leucophaeus-atricilla", common:"Gaviota reidora", alt:"Gaviota guanaguanare · Laughing Gull",
  sci:"Leucophaeus atricilla", family:"Laridae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.leucophaeus, date:"", place:MG, ind:"Adulto en plumaje de invierno, a punto de posarse en el agua"},{img:IMG.leucophaeus2, date:"", place:MG, ind:"Joven de primer invierno sobre la bahía: alas pardas y banda negra en la cola"}],
  desc:"Gaviota mediana de manto gris oscuro, puntas de las alas negras, patas y pico oscuros. En la época de cría la cabeza se vuelve negra; el resto del año, como en la foto, la cabeza es blanca con un manchón gris detrás del ojo. Su nombre viene de la llamada, que parece una carcajada.",
  diet:"Peces pequeños, camarones, cangrejos, insectos y restos que dejan los barcos y los pescadores.",
  habitat:"Bahías, puertos, playas y desembocaduras de la costa Caribe.",
  tip:"No la alimente: las gaviotas que se acostumbran a la comida humana se vuelven dependientes y agresivas con otras aves.",
  migration:{type:"Larga distancia", km:"hasta ~4.000 km por trayecto",
    note:"Las que se ven en la bahía de Cartagena llegan en su mayoría de las costas del Golfo de México y el Caribe norte, donde crían en verano. Algunos jóvenes que aún no se reproducen se quedan todo el año.",
    stops:[
      {name:"Costa este de EE. UU. y Golfo de México", lat:30, lon:-85, when:"Abr–ago", role:"Cría"},
      {name:"Antillas", lat:19, lon:-72, when:"Sep–oct", role:"Paso"},
      {...HOME, when:"Oct–abr", role:"Invernada"}],
    rangeTo:{lat:-5, lon:-37, name:"Brasil"}}
},
{
  id:"myiozetetes-similis", common:"Suelda social", alt:"Bichofué chico · Social Flycatcher",
  sci:"Myiozetetes similis", family:"Tyrannidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.myiozetetes, date:"", place:MG, ind:"Sobre una piedra coralina, de perfil"}],
  desc:"Parecida a un bichofué en miniatura: ceja blanca ancha, antifaz gris oscuro, dorso oliva y vientre amarillo. Se distingue del bichofué por el pico corto y fino, y de su pariente la suelda de alas rojizas por los bordes pálidos, no canela, de las plumas del ala.",
  diet:"Insectos que caza en vuelo desde una percha, y muchos frutos pequeños.",
  habitat:"Parques, jardines, orillas arborizadas y bordes de manglar.",
  migration:null
},
{
  id:"tyrannus-melancholicus", common:"Sirirí común", alt:"Tirano tropical · Tropical Kingbird",
  sci:"Tyrannus melancholicus", family:"Tyrannidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.melancholicus, date:"", place:MG, ind:"Visto desde abajo, con el vientre amarillo"}],
  desc:"Cabeza gris con antifaz oscuro, dorso oliva, pecho y vientre amarillos y cola parda con una muesca en la punta. Es de las aves más comunes de Colombia y casi siempre se ve en una percha alta y expuesta.",
  diet:"Insectos que caza en vuelo con salidas cortas desde la percha; también algunos frutos.",
  habitat:"Cualquier zona abierta con árboles: potreros, pueblos, cables y bordes de bosque.",
  migration:null
},
{
  id:"sicalis-flaveola", common:"Canario coronado", alt:"Canario costeño · Saffron Finch",
  sci:"Sicalis flaveola", family:"Thraupidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.sicalisMG, date:"", place:MG, ind:"Macho posado en un poste"}],
  desc:"El macho es amarillo intenso con la frente y la corona anaranjadas; la hembra y los jóvenes son más opacos y grisáceos. Anda en grupos que comen en el suelo.",
  diet:"Semillas de pastos y granos; algunos insectos.",
  habitat:"Áreas abiertas, patios, parques y pueblos de tierras bajas y medias. Anida en huecos, aleros y estructuras como postes y techos.",
  tip:"Es de las aves silvestres más capturadas para jaulas en Colombia. No compre aves silvestres: es ilegal y sostiene la captura.",
  migration:null
},
{
  id:"melanerpes-rubricapillus", common:"Carpintero habado", alt:"Carpintero coronirrojo · Red-crowned Woodpecker",
  sci:"Melanerpes rubricapillus", family:"Picidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.melanerpesMG, date:"", place:MG, ind:"Macho en un poste de concreto"},{img:IMG.melanerpesMG4, date:"", place:MG, ind:"Trepando un tronco, con la espalda barrada"},{img:IMG.melanerpesMG3, date:"", place:MG, ind:"En una rama seca, con la nuca naranja"},{img:IMG.melanerpesMG2, date:"", place:MG, ind:"De espaldas contra el cielo"}],
  desc:"Dorso barrado en blanco y negro, cara y partes inferiores beige, y la corona y la nuca rojas en el macho. Es de los pocos carpinteros que se adapta bien a la ciudad.",
  diet:"Insectos y larvas que saca de la madera, frutos y néctar.",
  habitat:"Parques, jardines, manglares y bordes de bosque seco; usa postes y árboles secos para anidar.",
  migration:null
},
{
  id:"cathartes-aura", common:"Gallinazo cabecirrojo", alt:"Guala · Turkey Vulture",
  sci:"Cathartes aura", family:"Cathartidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.cathartesMG, date:"", place:MG, ind:"Planeando: alas en V con la mitad plateada"}],
  desc:"Ave grande y negra con la cabeza desnuda y roja. En vuelo se reconoce por las alas en V abierta, con la mitad posterior plateada, y un balanceo de lado a lado sin casi aletear.",
  diet:"Carroña, que encuentra por el olfato, algo raro entre las aves.",
  habitat:"Cielos abiertos sobre costas, potreros y ciudades. En el invierno del norte llegan además aves migratorias de Norteamérica.",
  migration:null
},
{
  id:"fregata-magnificens", common:"Fragata", alt:"Tijereta de mar · Magnificent Frigatebird",
  sci:"Fregata magnificens", family:"Fregatidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.fregata, date:"", place:IR, ind:"Hembra, con el pecho blanco"},{img:IMG.fregata2, date:"", place:IR, ind:"Silueta con la cola en tijera"},{img:IMG.fregataJuv, date:"", place:MG, ind:"Juvenil, con la cabeza y el pecho blancos, sobre la bahía"}],
  desc:"Los juveniles tienen la cabeza y el pecho blancos. Ave marina negra, de alas larguísimas y angulosas (más de 2 m de envergadura) y cola profundamente ahorquillada en forma de tijera. El macho infla en época de cría una enorme bolsa roja en la garganta; la hembra, como la de la primera foto, tiene el pecho blanco. Pesa muy poco para su tamaño: puede pasar días en el aire sin posarse.",
  diet:"Peces voladores y otros peces que atrapa de la superficie sin mojarse, y comida que roba en vuelo a pelícanos, gaviotines y piqueros, persiguiéndolos hasta que la sueltan. No puede posarse en el agua: sus plumas no son impermeables.",
  habitat:"Costas, islas y mar abierto del Caribe y el Pacífico; anida en colonias sobre manglares y arbustos de islas.",
  migration:null
},
{
  id:"pitangus-sulphuratus", common:"Bichofué", alt:"Bienteveo grande · Great Kiskadee",
  sci:"Pitangus sulphuratus", family:"Tyrannidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.pitangus, date:"", place:MG, ind:"Adulto posado al atardecer"},{img:IMG.pitangus2, date:"", place:MG, ind:"En vuelo, con las alas rojizas abiertas"},{img:IMG.pitangus3, date:"", place:MG, ind:"Lanzándose sobre el andén"},{img:IMG.pitangus4, date:"", place:MG, ind:"En vuelo, visto desde arriba"}],
  desc:"Atrapamoscas grande y llamativo: cabeza negra con una banda blanca ancha sobre el ojo, garganta blanca, vientre amarillo intenso y alas y cola rojizas. Su nombre es la imitación de su grito: «bi-cho-fué».",
  diet:"De todo: insectos que caza al vuelo, lagartijas, pececitos que saca del agua como un martín pescador, frutos y hasta comida que encuentra en la ciudad.",
  habitat:"Pueblos, parques, orillas de agua, potreros y bordes de bosque de tierras bajas y medias.",
  migration:null
},
{
  id:"eupsittula-pertinax", common:"Perico carisucio", alt:"Cotorra carisucia · Brown-throated Parakeet",
  sci:"Eupsittula pertinax", family:"Psittacidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.eupsittula2, date:"", place:MG, ind:"Pareja en ramas secas"},{img:IMG.eupsittula, date:"", place:MG, ind:"Adulto, con la cara y el pecho pardos"}],
  desc:"Periquito verde de cola larga y puntiaguda, con la cara, la garganta y el pecho pardo ocre, como manchados, de ahí lo de «carisucio». Tiene un anillo claro alrededor del ojo y el pico oscuro.",
  diet:"Frutos, semillas, flores y néctar; frecuenta árboles de mango, almendro y cactus en flor.",
  habitat:"Zonas secas de la costa, matorrales, manglares, parques y barrios arborizados.",
  tip:"Es de los loros más capturados para tener en casa. No compre aves silvestres: es ilegal y la mayoría muere en el comercio. Los árboles frutales y nativos de los parques los mantienen en la ciudad.",
  migration:null
},
{
  id:"eudocimus-albus", common:"Ibis blanco", alt:"Coquito blanco · White Ibis",
  sci:"Eudocimus albus", family:"Threskiornithidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.eudocimus, date:"", place:MG, ind:"Pareja en vuelo: cuerpo blanco, puntas de las alas negras y pico rojo curvo"}],
  desc:"Ibis blanco de tamaño mediano, con la cara desnuda, el pico largo y curvo hacia abajo y las patas de color rojo rosado. En vuelo muestra solo las puntas de las alas negras y lleva el cuello estirado, a diferencia de las garzas. Los jóvenes son pardos con el vientre blanco.",
  diet:"Cangrejos, camarones, insectos acuáticos y pececillos, que encuentra metiendo el pico en el barro.",
  habitat:"Manglares, ciénagas costeras, playas fangosas y potreros inundados.",
  tip:"Los manglares de la bahía y de la ciénaga de la Virgen son sus dormideros. Al atardecer pasan en fila sobre Manga rumbo a ellos.",
  migration:null
},
{
  id:"ardea-cocoi", common:"Garzón azul", alt:"Garza cuca · Cocoi Heron",
  sci:"Ardea cocoi", family:"Ardeidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.cocoi, date:"", place:CD, ind:"Adulto pescando en la orilla"},{img:IMG.cocoi2, date:"", place:CD, ind:"Entre los mangles, con el pico abierto"},{img:IMG.cocoi3, date:"", place:CD, ind:"En vuelo sobre el canal"},{img:IMG.cocoi4, date:"", place:CD, ind:"Vigilando desde lo alto de un arbusto"},{img:IMG.cocoi5, date:"", place:CD, ind:"Vuelo rasante sobre el agua"},{img:IMG.cocoiVuelo, date:"", place:CD, ind:"En vuelo alto, con el cuello recogido y las alas blancas y negras"},{img:IMG.cocoi6, date:"", place:CD, ind:"De pie en el agua, al acecho"}],
  desc:"La garza más grande de Suramérica, de casi 1,3 m de alto. Cuello blanco, corona negra, dorso gris azulado, pico amarillo y largo. En vuelo recoge el cuello en forma de S y bate las alas despacio.",
  diet:"Peces grandes, que atrapa de un picotazo rápido después de esperar inmóvil; también cangrejos, ranas y culebras de agua.",
  habitat:"Ríos anchos, canales, ciénagas y manglares de tierras bajas.",
  migration:null
},
{
  id:"ardea-alba", common:"Garza real", alt:"Garceta grande · Great Egret",
  sci:"Ardea alba", family:"Ardeidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.alba2, date:"", place:CD, ind:"En vuelo, con las patas negras extendidas"},{img:IMG.alba, date:"", place:CD, ind:"En la orilla, junto a un maizal"},{img:IMG.alba3, date:"", place:CD, ind:"Volando bajo sobre el canal"},{img:IMG.albaCD, date:"", place:CD, ind:"Al acecho en la orilla, contra un muro de eneas"},{img:IMG.albaMG, date:"", place:MG, ind:"En vuelo sobre la bahía, con el cuello recogido y las patas negras estiradas"}],
  desc:"Garza blanca grande, de pico amarillo y patas negras, mucho más grande que la garza patiamarilla y la garcita del ganado. En época de cría le crecen plumas largas y finas en la espalda; por ellas casi desaparece hacia 1900, cuando se usaban en los sombreros de moda.",
  diet:"Peces, ranas, cangrejos e insectos grandes; caza caminando despacio o esperando inmóvil.",
  habitat:"Ciénagas, ríos, manglares, arrozales y potreros inundados.",
  migration:null
},
{
  id:"nannopterum-brasilianum", common:"Pato cuervo", alt:"Cormorán neotropical · Neotropic Cormorant",
  sci:"Nannopterum brasilianum", family:"Phalacrocoracidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.nannopterum, date:"", place:CD, ind:"Tres posados en ramas secas sobre el agua"},{img:IMG.nannopterum2, date:"", place:CD, ind:"En vuelo"},{img:IMG.nannopterum3, date:"", place:CD, ind:"Grupo en la copa de un árbol: uno seca las alas abiertas al sol y otro despega"}],
  desc:"Negro, de cuello largo, cola larga y pico ganchudo con piel amarilla en la base. Sus plumas no son del todo impermeables: eso le ayuda a hundirse al bucear, pero después tiene que posarse con las alas abiertas para secarlas al sol.",
  diet:"Peces que persigue buceando, impulsándose con las patas palmeadas.",
  habitat:"Ciénagas, ríos, lagunas, manglares y costas.",
  migration:null
},
{
  id:"pelecanus-occidentalis", common:"Pelícano pardo", alt:"Alcatraz · Brown Pelican",
  sci:"Pelecanus occidentalis", family:"Pelecanidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.pelecanusIR, date:"", place:IR, ind:"Adulto en vuelo sobre el mar"},{img:IMG.pelecanusIR2, date:"", place:IR, ind:"Despegando del agua"},{img:IMG.pelecanus2, date:"", place:MG, ind:"Joven en vuelo, pardo de cabeza a cola"},{img:IMG.pelecanus, date:"", place:CD, ind:"Adulto en aguas someras"},{img:IMG.pelecanus3, date:"", place:MG, ind:"Planeando a ras de la bahía"},{img:IMG.pelecanusPicada, date:"", place:MG, ind:"En picada, con las alas recogidas"},{img:IMG.pelecanusZ2, date:"", place:MG, ind:"Bajando al agua para lanzarse"},{img:IMG.pelecanusZ, date:"", place:MG, ind:"Zambullida: entra al agua con las alas hacia atrás"},{img:IMG.pelecanusIR3, date:"", place:IR, ind:"Posado en el techo de paja de una cabaña"}],
  desc:"Ave marina enorme, gris y parda, con la cabeza blanca amarillenta y una bolsa bajo el pico que se estira para atrapar peces. Es el único pelícano que pesca lanzándose en picada desde el aire.",
  diet:"Peces, sobre todo sardinas y lisas, que atrapa con la bolsa del pico después de zambullirse.",
  habitat:"Costas, bahías, manglares y bocas de ríos y canales.",
  migration:null
},
{
  id:"thalasseus-maximus", common:"Gaviotín real", alt:"Charrán real · Royal Tern",
  sci:"Thalasseus maximus", family:"Laridae", iucn:"LC", conf:"media",
  confNote:"El grupo es mixto: los de pico anaranjado son gaviotines reales, y algunos de pico negro con punta amarilla parecen gaviotines patinegros (Thalasseus sandvicensis). A esta distancia no se pueden separar todos.",
  photos:[{img:IMG.thalasseusMG, date:"", place:MG, ind:"Adulto en plumaje de invierno sobre la bahía: frente blanca, cola ahorquillada"},{img:IMG.thalasseusIR, date:"", place:IR, ind:"En vuelo, con el pico anaranjado y la cresta negra"},{img:IMG.thalasseus, date:"", place:CD, ind:"Grupo descansando sobre un tronco, junto a patos cuervo"}],
  desc:"Ave marina blanca y gris perla, con una cresta negra despeinada en la nuca y pico grueso anaranjado. Muchos de los que se ven en el Caribe colombiano llegan desde las costas de Norteamérica fuera de su época de cría.",
  diet:"Peces pequeños que atrapa lanzándose en picada al agua.",
  habitat:"Costas, playas, bahías y desembocaduras; descansa en grupos sobre troncos, bancos de arena y muelles.",
  migration:null
},
{
  id:"jacana-jacana", common:"Gallito de ciénaga", alt:"Jacana carunculada · Wattled Jacana",
  sci:"Jacana jacana", family:"Jacanidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.jacana, date:"", place:AR, ind:"Adulto caminando sobre hojas flotantes"}],
  desc:"Negro y castaño, con un escudo rojo en la frente, carúnculas rojas a los lados del pico y pico amarillo. Sus dedos larguísimos le reparten el peso para caminar sobre las hojas que flotan. En vuelo muestra las plumas de las alas amarillo verdosas. Los papeles están invertidos: la hembra defiende el territorio y tiene varias parejas, y son los machos los que incuban y cuidan a los pichones.",
  diet:"Insectos, caracoles, pececitos y semillas que recoge de la vegetación flotante.",
  habitat:"Ciénagas, lagunas y canales con buchón, lirios y otras plantas flotantes.",
  migration:null
},
{
  id:"rostrhamus-sociabilis", common:"Gavilán caracolero", alt:"Caracolero · Snail Kite",
  sci:"Rostrhamus sociabilis", family:"Accipitridae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.rostrhamus, date:"", place:AR, ind:"Juvenil, pardo y rayado, con ceja blanca"}],
  desc:"El juvenil, como el de la foto, es pardo con rayas blancas y una ceja clara. El macho adulto es gris pizarra oscuro, con la cara y las patas rojas. Su pico delgado y muy ganchudo es una herramienta especializada para sacar al caracol de su concha.",
  diet:"Casi exclusivamente caracoles de agua dulce del género Pomacea, que caza en vuelo bajo sobre la ciénaga.",
  habitat:"Ciénagas y humedales de agua dulce con caracoles. Si el humedal se seca o se contamina, desaparece.",
  migration:null
},
{
  id:"dendrocygna-autumnalis", common:"Pisingo", alt:"Iguasa común · Black-bellied Whistling-Duck",
  sci:"Dendrocygna autumnalis", family:"Anatidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.dendro, date:"", place:AR, ind:"Pareja entre el pasto"},{img:IMG.dendro2, date:"", place:AR, ind:"Dos en vuelo, con la franja blanca del ala"}],
  desc:"Pato de cuello largo, castaño, con la cara gris, el vientre negro, el pico rojo coral y las patas rosadas. En vuelo muestra una franja blanca ancha en el ala. Su llamado es un silbido agudo, de ahí lo de «pato silbador». A diferencia de otros patos, se posa en árboles y anida en huecos de troncos.",
  diet:"Semillas, granos (sobre todo arroz) y plantas acuáticas; come mucho de noche.",
  habitat:"Ciénagas, arrozales, potreros inundables y lagunas de tierras bajas.",
  migration:null
},
{
  id:"egretta-thula", common:"Garza patiamarilla", alt:"Garceta nívea · Snowy Egret",
  sci:"Egretta thula", family:"Ardeidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.thula, date:"", place:AR, ind:"Pescando en aguas someras"}],
  desc:"Garza blanca mediana con pico negro, piel amarilla entre el pico y el ojo y patas negras con «zapatos» amarillos. Hacia 1900 casi se extingue: sus plumas de cría se usaban en sombreros de moda. La indignación por esa cacería dio origen a las primeras leyes de protección de aves.",
  diet:"Peces pequeños, camarones e insectos. Agita el agua con las patas amarillas para espantar a sus presas.",
  habitat:"Ciénagas, lagunas, manglares y orillas de caños.",
  migration:null
},
{
  id:"bubulcus-ibis", common:"Garcita del ganado", alt:"Garcilla bueyera · Cattle Egret",
  sci:"Bubulcus ibis", family:"Ardeidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.bubulcus, date:"", place:AR, ind:"Caminando en el potrero"}],
  desc:"Garza blanca pequeña y rechoncha, con pico corto amarillo anaranjado. Es originaria de África: a finales del siglo XIX cruzó el Atlántico por sus propios medios, llegó a Suramérica y en pocas décadas se extendió por todo el continente siguiendo a la ganadería.",
  diet:"Saltamontes y otros insectos que espanta el ganado al caminar; también ranas y lagartijas.",
  habitat:"Potreros con ganado, campos arados y orillas de humedales.",
  migration:null
},
{
  id:"theristicus-caudatus", common:"Coclí", alt:"Bandurria · Buff-necked Ibis",
  sci:"Theristicus caudatus", family:"Threskiornithidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.theristicus, date:"", place:AR, ind:"Pareja en un camino de tierra"}],
  desc:"Ibis grande con cabeza y cuello color ante, dorso gris, un parche blanco en el ala, vientre negro, patas rojas y un pico largo y curvo. Su nombre viene del grito metálico y fuerte que da en vuelo.",
  diet:"Insectos, larvas, lombrices, ranas y lagartijas que saca del suelo con el pico.",
  habitat:"Sabanas, potreros abiertos y bordes de humedales.",
  migration:null
},
{
  id:"buteogallus-meridionalis", common:"Gavilán sabanero", alt:"Busardo sabanero · Savanna Hawk",
  sci:"Buteogallus meridionalis", family:"Accipitridae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.buteogallus, date:"", place:AR, ind:"Pareja posada en un matorral"},{img:IMG.buteogallus2, date:"", place:AR, ind:"Despegando: alas rojizas y cola con banda blanca"}],
  desc:"Rapaz grande de color canela rojizo con barrado fino, patas largas y amarillas, y cola negra con una banda blanca. En vuelo, sus alas rojizas con puntas negras se ven desde lejos.",
  diet:"Lagartijas, serpientes, ranas, roedores, cangrejos e insectos grandes. Sigue a las quemas y a los tractores para atrapar lo que huye.",
  habitat:"Sabanas, potreros y bordes de ciénagas de tierras bajas.",
  migration:null
},
{
  id:"caracara-cheriway", common:"Caracara copetón", alt:"Carancho · Crested Caracara",
  sci:"Caracara cheriway", family:"Falconidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.caracara, date:"", place:MG, ind:"En vuelo visto desde abajo: cara anaranjada, cuello barrado y puntas de las alas claras"}],
  desc:"Halcón grande y de patas largas, con capucha negra, cara roja o anaranjada desnuda, cuello blanco y pecho barrado. En vuelo muestra un parche claro en la punta de cada ala y la cola blanca con una banda negra.",
  diet:"Carroña, peces moribundos, tortugas pequeñas, insectos y lo que encuentre; también roba presas a otras aves.",
  habitat:"Sabanas, potreros, playas y orillas abiertas de tierras bajas.",
  migration:null
},
{
  id:"milvago-chimachima", common:"Pigua", alt:"Caracara chimachima · Yellow-headed Caracara",
  sci:"Milvago chimachima", family:"Falconidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.milvagoAR, date:"", place:AR, ind:"Adulto sobre un matorral con enredaderas, con la cola barrada"},{img:IMG.milvago, date:"", place:AR, ind:"Adulto, cabeza color crema"},{img:IMG.milvago2, date:"", place:MG, ind:"En vuelo sobre la bahía: parches claros en las alas"}],
  desc:"Pariente de los halcones. Cabeza y partes inferiores color crema, una línea oscura detrás del ojo y dorso pardo oscuro. Es oportunista y poco tímido.",
  diet:"Carroña, insectos, lagartijas, frutos y garrapatas, que les saca directamente del lomo al ganado y a los chigüiros.",
  habitat:"Potreros con árboles, bordes de carretera y zonas abiertas de tierras bajas; se ha ido extendiendo hacia zonas más altas.",
  migration:null
},
{
  id:"leistes-militaris", common:"Soldadito", alt:"Pecho colorado · Red-breasted Meadowlark",
  sci:"Leistes militaris", family:"Icteridae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.leistes, date:"", place:AR, ind:"Macho posado sobre la maleza"}],
  desc:"El macho es negro con la garganta y el pecho rojo escarlata, como un uniforme militar. La hembra es parda y rayada, con un tinte rosado en el pecho.",
  diet:"Insectos y semillas que busca en el suelo, entre el pasto.",
  habitat:"Potreros húmedos, pastizales y arrozales.",
  migration:null
},
{
  id:"chrysomus-icterocephalus", common:"Monjita", alt:"Turpial de agua · Yellow-hooded Blackbird",
  sci:"Chrysomus icterocephalus", family:"Icteridae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.chrysomus, date:"", place:AR, ind:"Macho con la capucha amarilla"},{img:IMG.chrysomus2, date:"", place:AR, ind:"Macho entre el follaje"}],
  desc:"El macho es negro brillante con una capucha amarillo intenso y un pequeño antifaz negro entre el pico y el ojo. La hembra es parda oliva con la garganta y la ceja amarillentas.",
  diet:"Insectos y semillas que busca entre juncos, eneas y pastos altos.",
  habitat:"Ciénagas, juncales, arrozales y canales. Anida en colonias sobre la vegetación del agua.",
  migration:null
},
{
  id:"quiscalus-mexicanus", common:"María mulata", alt:"Zanate mayor · Great-tailed Grackle",
  sci:"Quiscalus mexicanus", family:"Icteridae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.quiscalus2, date:"", place:MG, ind:"Macho con la cola larga desplegada"},{img:IMG.quiscalus3, date:"", place:MG, ind:"Hembra, parda y de ojo claro"},{img:IMG.quiscalusF, date:"", place:MG, ind:"Hembra entre ramas con flores"},{img:IMG.quiscalusMG3, date:"", place:MG, ind:"Dos jóvenes en un flamboyán; uno pide comida con el pico abierto"},{img:IMG.quiscalusMG, date:"", place:MG, ind:"Hembra de ojo claro en las hojas de un flamboyán"},{img:IMG.quiscalusMG2, date:"", place:MG, ind:"Joven con el pecho canela"},{img:IMG.quiscalus, date:"", place:AR, ind:"Macho cantando desde un tronco"},{img:IMG.quiscalusIR, date:"", place:IR, ind:"Macho a contraluz en un árbol de playa"}],
  desc:"El macho es negro con brillo violeta, ojo amarillo pálido y una cola muy larga que pliega en forma de quilla de barco. La hembra es parda y más pequeña. Es el ave emblema de Cartagena, inmortalizada en las esculturas de Enrique Grau.",
  diet:"Omnívora: insectos, frutos, semillas, cangrejos, huevos y restos de comida.",
  habitat:"Costas, pueblos, potreros, manglares y orillas de ciénagas.",
  migration:null
},
{
  id:"crotophaga-ani", common:"Garrapatero piquiliso", alt:"Garrapatero · Smooth-billed Ani",
  sci:"Crotophaga ani", family:"Cuculidae", iucn:"LC", conf:"media",
  confNote:"En esta foto, nítida y de perfil, el pico se ve liso y arqueado por encima de la frente, sin los surcos del garrapatero de pico estriado (Crotophaga sulcirostris), que también vive en la región. Eso apunta al piquiliso.",
  photos:[{img:IMG.crotophaga, date:"", place:AR, ind:"Adulto en la copa de un arbusto"}],
  desc:"Negro, con aspecto escamado y desaliñado, cola larga y un pico alto, liso y comprimido, con una joroba arriba. Vive en grupos que comparten un solo nido, donde varias hembras ponen sus huevos y todos ayudan a criar.",
  diet:"Saltamontes y otros insectos, a menudo los que espanta el ganado; algunos frutos.",
  habitat:"Potreros, rastrojos y matorrales de tierras bajas.",
  migration:null
},
{
  id:"furnarius-leucopus", common:"Hornero patiamarillo", alt:"Pale-legged Hornero",
  sci:"Furnarius leucopus", family:"Furnariidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.furnarius, date:"", place:AR, ind:"Adulto en una rama"}],
  desc:"Rojizo por encima, con ceja blanca, garganta blancuzca, pecho ante y patas pálidas. Su nombre viene del nido: una bola de barro con forma de horno de leña, que construye en ramas y postes.",
  diet:"Insectos y larvas que busca caminando en el suelo húmedo.",
  habitat:"Bordes de ciénagas y caños, potreros con árboles y jardines de tierras bajas.",
  migration:null
},
{
  id:"brotogeris-jugularis", common:"Periquito bronceado", alt:"Perico barbinaranja · Orange-chinned Parakeet",
  sci:"Brotogeris jugularis", family:"Psittacidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.brotogeris, date:"", place:AR, ind:"Adulto en una rama seca"},{img:IMG.brotogeris2, date:"", place:AR, ind:"Pareja"},{img:IMG.brotogerisMG2, date:"", place:MG, ind:"Entre las hojas de un almendro, con el hombro pardo"},{img:IMG.brotogerisMG, date:"", place:MG, ind:"En ramas secas, con la mancha naranja del mentón"}],
  desc:"Periquito verde, pequeño, con una mancha naranja en la barbilla, hombros color bronce, pico pálido y anillo blanco alrededor del ojo. Anda en parejas y grupos ruidosos.",
  diet:"Frutos, semillas, flores y néctar de árboles como el ceibo y el guamo.",
  habitat:"Bosque seco, potreros arbolados, pueblos y jardines.",
  tip:"Es de los loros más capturados para tener como mascota. No compre aves silvestres: es ilegal y la mayoría muere en el comercio. Sembrar árboles nativos con frutos es la mejor forma de tenerlos cerca.",
  migration:null
},
/* ───────── ASILVESTRADAS ───────── */
{
  id:"ara-ararauna", common:"Guacamaya azul y amarilla", alt:"Guacamayo azulamarillo · Blue-and-yellow Macaw",
  sci:"Ara ararauna", family:"Psittacidae", iucn:"LC", conf:"media", domestic:true, feral:true,
  confNote:"La de la izquierda es una guacamaya azul y amarilla. La de la derecha, con la frente roja y el dorso verde, parece un híbrido con otra especie de guacamaya, algo común en aves que provienen del cautiverio.",
  statusNote:"Vive libre: tiene su casa en los terrenos de la Sociedad Portuaria de Cartagena y vuela a diario sobre la bahía y el barrio Manga. Proviene del cautiverio; la especie es nativa de selvas y palmares de tierras bajas de Colombia, no de la ciudad.",
  photos:[{img:IMG.ara, date:"", place:MG, ind:"Pareja en un balcón"},{img:IMG.araMG, date:"", place:MG, ind:"En vuelo sobre Manga junto a otra guacamaya de plumaje verde y azul, probablemente un híbrido también escapado de cautiverio"}],
  desc:"Guacamaya grande, de casi 90 cm con la cola: azul turquesa por encima, amarillo dorado por debajo, cara blanca con finas líneas negras y un pico negro enorme capaz de partir nueces muy duras.",
  diet:"Semillas, nueces, frutos de palmas y flores. En la ciudad come frutos de almendros, mangos y palmas ornamentales.",
  habitat:"En estado silvestre, selvas húmedas, palmares de moriche y bordes de ríos de tierras bajas. En Cartagena, el grupo asilvestrado vive en la zona del puerto y se mueve por Manga y la bahía.",
  migration:null
}];

const XTRA={
 "caracara-cheriway":{sw:[["#1E1A16","Capucha"],["#E05A3A","Cara"],["#F2EEE4","Cuello"]]},
 "eudocimus-albus":{sw:[["#F6F4F0","Plumaje"],["#E2564E","Pico y cara"],["#141414","Puntas alares"]]},
 "leucophaeus-atricilla":{sw:[["#5E646C","Manto"],["#F4F4F2","Cabeza y vientre"],["#141414","Puntas alares"]],m:[10,11,12,1,2,3,4]},
 "myiozetetes-similis":{sw:[["#F4F4F0","Ceja"],["#555A5E","Antifaz"],["#7E8048","Dorso"],["#F0DC3A","Vientre"]]},
 "tyrannus-melancholicus":{sw:[["#8C9196","Cabeza"],["#E6D23A","Pecho"],["#4A4238","Cola"]]},
 "melanerpes-rubricapillus":{sw:[["#D9372A","Corona"],["#1C1C1C","Barrado"],["#D8CFB4","Vientre"]]},
 "cathartes-aura":{sw:[["#1B1A1C","Plumaje"],["#9EA2A6","Plumas de vuelo"],["#A8322E","Cabeza"]]},
 "sicalis-flaveola":{sw:[["#F2C21A","Cuerpo"],["#F08A1C","Corona"]]},
 "fregata-magnificens":{sw:[["#141418","Plumaje"],["#F4F4F0","Pecho hembra"],["#D2282A","Bolsa del macho"]]},
 "pitangus-sulphuratus":{sw:[["#151515","Corona"],["#F4F2EA","Ceja"],["#F2C82A","Vientre"],["#A8592E","Alas"]]},
 "eupsittula-pertinax":{sw:[["#3E9A3A","Cuerpo"],["#9C6A3A","Cara y pecho"],["#C8C86A","Vientre"]]},
 "ara-ararauna":{sw:[["#1C7FC2","Dorso"],["#F2B52A","Pecho"],["#F4F4F0","Cara"],["#151515","Pico"]]},
 "ardea-cocoi":{sw:[["#8E9AA8","Dorso"],["#F4F4F0","Cuello"],["#151515","Corona"],["#E8C83A","Pico"]]},
 "ardea-alba":{sw:[["#F7F7F5","Plumaje"],["#E8C03A","Pico"],["#151515","Patas"]]},
 "nannopterum-brasilianum":{sw:[["#141416","Plumaje"],["#E8B83A","Base del pico"]]},
 "pelecanus-occidentalis":{sw:[["#8C8A86","Cuerpo"],["#F2EBD2","Cabeza"],["#5A4A3A","Cuello"]]},
 "thalasseus-maximus":{sw:[["#F7F7F5","Cuerpo"],["#C8CED4","Alas"],["#F08A3A","Pico"],["#151515","Cresta"]]},
 "jacana-jacana":{sw:[["#2A1A16","Cuerpo"],["#D22A2A","Escudo"],["#E8C83A","Pico"],["#C8D06A","Plumas de vuelo"]]},
 "rostrhamus-sociabilis":{sw:[["#5A4636","Dorso juvenil"],["#F2EDE4","Rayas"],["#3E4652","Macho adulto"],["#E2843C","Patas"]]},
 "dendrocygna-autumnalis":{sw:[["#8A4E33","Cuello y dorso"],["#1C1A1A","Vientre"],["#F08070","Pico"],["#F4F2EE","Franja alar"]]},
 "egretta-thula":{sw:[["#F7F7F5","Plumaje"],["#151515","Pico y patas"],["#E8C83A","Patas y cara"]]},
 "bubulcus-ibis":{sw:[["#F7F7F5","Plumaje"],["#F0A83A","Pico"],["#D9B98A","Plumas de cría"]]},
 "theristicus-caudatus":{sw:[["#D9B98A","Cuello"],["#7A8086","Dorso"],["#1A1A1A","Vientre"],["#D2463A","Patas"]]},
 "buteogallus-meridionalis":{sw:[["#B8663A","Cuerpo"],["#1A1A1A","Cola"],["#E8C83A","Patas"]]},
 "milvago-chimachima":{sw:[["#E9DFC8","Cabeza"],["#4A3626","Dorso"],["#1E1A16","Línea ocular"]]},
 "leistes-militaris":{sw:[["#141414","Cuerpo"],["#C8282A","Pecho"]]},
 "chrysomus-icterocephalus":{sw:[["#F2C21A","Capucha"],["#111214","Cuerpo"]]},
 "quiscalus-mexicanus":{sw:[["#16121E","Plumaje"],["#4A2E6A","Brillo"],["#E8E2A0","Ojo"]]},
 "crotophaga-ani":{sw:[["#141418","Plumaje"],["#2A3040","Brillo"]]},
 "furnarius-leucopus":{sw:[["#B8653A","Dorso"],["#E3D2B0","Pecho"],["#F4F0E8","Ceja y garganta"]]},
 "brotogeris-jugularis":{sw:[["#5DB43A","Cuerpo"],["#E8823A","Barbilla"],["#9C7A3A","Hombros"]]}
};

const HAB={
 "caracara-cheriway":["Camina mucho por el suelo y planea bajo sobre playas y potreros buscando comida; a menudo sigue a los gallinazos hasta la carroña.","Cielo sobre la bahía y potreros abiertos."],
 "eudocimus-albus":["Anda en bandadas que se alimentan caminando en el barro y vuelan en fila o en V, alternando aleteos y planeos cortos.","Orillas fangosas y manglares; desde el paseo se ve sobre todo cuando pasa volando al atardecer."],
 "leucophaeus-atricilla":["Anda en grupos que siguen a las lanchas y a los pescadores, se posan en boyas y muelles y bajan en picada corta a recoger comida de la superficie.","Muelles, boyas y el borde de la bahía frente al paseo, sobre todo de octubre a abril."],
 "myiozetetes-similis":["Ruidosa y sociable: llama con un «chí-chí» repetido y se junta en parejas o grupos pequeños en las copas.","Árboles del paseo y muros de piedra junto al agua."],
 "tyrannus-melancholicus":["Caza desde perchas altas y vuelve al mismo sitio. Es valiente: persigue a gavilanes y aves mucho más grandes que se acerquen a su nido.","Ramas altas, cables y postes del paseo."],
 "melanerpes-rubricapillus":["Ruidoso, con un llamado de traqueteo; picotea postes y ramas secas para buscar larvas y excavar el nido.","Postes y árboles del paseo."],
 "cathartes-aura":["Planea durante horas en las corrientes de aire caliente, buscando comida por el olfato.","Cielo sobre la bahía a media mañana y en la tarde."],
 "sicalis-flaveola":["En grupos que comen en el suelo; el macho canta un trino alegre desde postes y cables.","Postes, prados y zonas verdes del paseo."],
 "fregata-magnificens":["Planea durante horas casi sin mover las alas, aprovechando el viento sobre las islas. Abre y cierra la cola en tijera para maniobrar.","Cielo sobre las islas y las playas de Barú; mire hacia arriba, sobre todo donde hay pescadores."],
 "pitangus-sulphuratus":["Ruidoso y atrevido: grita su nombre desde antenas, cables y árboles, y defiende su territorio incluso contra aves más grandes. Se lanza en picada al agua o al suelo para atrapar presas.","Árboles del paseo, cables y orillas de la bahía; se oye antes de verse."],
 "eupsittula-pertinax":["Anda en parejas o bandadas que chillan al volar. Se mueve trepando por las ramas con el pico y las patas.","Copas de árboles del paseo y de los parques, al amanecer y al atardecer."],
 "ara-ararauna":["Anda en pareja o en grupo, se posa en balcones y árboles altos y cruza la bahía en vuelo con gritos muy fuertes, que se oyen antes de verlas.","Cielo sobre la bahía entre el puerto y Manga, y balcones y palmas del paseo peatonal, sobre todo temprano y al atardecer."],
 "ardea-cocoi":["Solitaria y paciente: puede pasar mucho tiempo inmóvil en la orilla antes de lanzar el picotazo. Al espantarse da un graznido ronco y se va volando bajo sobre el agua.","Orillas del canal y de las ciénagas, y árboles altos de la ribera."],
 "ardea-alba":["Camina despacio con el cuello estirado y se queda quieta acechando. Al atardecer vuela en grupos a dormir en árboles junto al agua.","Orillas del canal, potreros inundados y ciénagas."],
 "nannopterum-brasilianum":["Bucea durante muchos segundos y reaparece lejos. Pasa largos ratos posado en ramas secas sobre el agua, a menudo con las alas abiertas para secarlas.","Ramas y troncos secos dentro del agua, a lo largo del canal."],
 "pelecanus-occidentalis":["Vuela en fila sobre el agua, rozando las olas. Para pescar sube unos metros y se deja caer en picada; luego flota mientras escurre el agua de la bolsa antes de tragar.","Bocas del canal, bahía de Cartagena y aguas someras con peces."],
 "thalasseus-maximus":["Descansa en grupos ruidosos, todos mirando contra el viento. Pesca volando sobre el agua con el pico hacia abajo y se lanza en picada.","Troncos, bancos de arena y muelles cerca del mar y de la boca del canal."],
 "jacana-jacana":["Camina despacio sobre la vegetación flotante. Al aterrizar levanta las alas y muestra el amarillo. Es ruidoso y defiende su espacio a gritos.","Espejos de agua con lirios y buchón, a cualquier hora."],
 "rostrhamus-sociabilis":["Vuela bajo y lento sobre la ciénaga, mirando hacia abajo. Cuando agarra un caracol, se lo lleva a una percha favorita, donde se acumulan las conchas vacías.","Perchas a la orilla de la ciénaga; busque montoncitos de conchas de caracol debajo."],
 "dendrocygna-autumnalis":["Anda en parejas o grupos que silban al volar. De día descansa en la orilla o en árboles; al atardecer sale a comer a arrozales y potreros inundados.","Potreros húmedos y orillas de la ciénaga, al amanecer y al atardecer."],
 "egretta-thula":["Muy activa: corre, gira y agita el agua con las patas para sacar presas. Pesca en grupo con otras garzas.","Aguas someras y lodazales de la ciénaga."],
 "bubulcus-ibis":["Camina junto a las vacas y atrapa los insectos que estas espantan. Al atardecer vuela en bandadas a dormir en árboles junto al agua.","Potreros con ganado, todo el día."],
 "theristicus-caudatus":["Anda en parejas que caminan despacio hundiendo el pico en el suelo. Grita muy fuerte al levantar el vuelo y al amanecer.","Potreros abiertos y caminos de tierra."],
 "buteogallus-meridionalis":["Pasa mucho tiempo posado en postes, matorrales o en el suelo. Camina con sus patas largas para cazar insectos y lagartijas.","Postes y matorrales en potreros abiertos."],
 "milvago-chimachima":["Confiado y oportunista: se posa sobre el ganado para quitarle garrapatas y aprovecha cualquier comida fácil. Su grito es un chillido agudo y quejumbroso.","Árboles aislados y cercas junto a potreros con ganado."],
 "leistes-militaris":["El macho canta desde la punta de una mata y hace un vuelo corto de exhibición mostrando el pecho rojo; luego se deja caer entre el pasto.","Pastizales húmedos y potreros con pasto alto."],
 "chrysomus-icterocephalus":["Vive en colonias ruidosas. Los machos cantan con un chirrido metálico desde lo alto de los juncos y de los árboles junto al agua.","Juncales y árboles a la orilla de la ciénaga."],
 "quiscalus-mexicanus":["Muy sociable y ruidosa: los machos se pavonean con el pico hacia arriba y las plumas erizadas, y lanzan silbidos y chasquidos.","Potreros, orillas de caños y cualquier pueblo de la región."],
 "crotophaga-ani":["Anda en grupos familiares que se mueven juntos de arbusto en arbusto con vuelos cortos y planeados. Al amanecer se asolean con las alas abiertas.","Matorrales y cercas junto a potreros con ganado."],
 "furnarius-leucopus":["Camina por el suelo con paso firme, levantando la cola. La pareja canta a dúo un trino fuerte y acelerado.","Suelo húmedo a la orilla de caños y bajo los árboles; busque su nido de barro en ramas y postes."],
 "brotogeris-jugularis":["Anda en parejas o grupos ruidosos que chillan al volar. Se esconden bien entre el follaje verde.","Copas de árboles en flor o con frutos, sobre todo en la mañana."]
};

const PLACES={
 "caracara-cheriway":["cielo","prado"],
 "eudocimus-albus":["humedal","cielo"],
 "leucophaeus-atricilla":["humedal","cielo"],"myiozetetes-similis":["arboles"],"tyrannus-melancholicus":["arboles","cielo"],
 "melanerpes-rubricapillus":["arboles"],"cathartes-aura":["cielo"],
 "sicalis-flaveola":["prado"],
 "fregata-magnificens":["cielo"],
 "pitangus-sulphuratus":["arboles","humedal"],"eupsittula-pertinax":["arboles"],"ara-ararauna":["arboles","cielo"],
 "ardea-cocoi":["humedal"],"ardea-alba":["humedal"],"nannopterum-brasilianum":["humedal"],"pelecanus-occidentalis":["humedal"],"thalasseus-maximus":["humedal"],
 "jacana-jacana":["humedal"],"rostrhamus-sociabilis":["humedal"],"dendrocygna-autumnalis":["humedal","prado"],
 "egretta-thula":["humedal"],"bubulcus-ibis":["prado"],"theristicus-caudatus":["prado"],
 "buteogallus-meridionalis":["prado"],"milvago-chimachima":["prado","arboles"],"leistes-militaris":["prado"],
 "chrysomus-icterocephalus":["humedal","arboles"],"quiscalus-mexicanus":["humedal","prado"],
 "crotophaga-ani":["prado","arboles"],"furnarius-leucopus":["humedal","arboles"],"brotogeris-jugularis":["arboles"]};
const TREND={};
