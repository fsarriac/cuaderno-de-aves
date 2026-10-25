/* ═══════════════ BARICHARA · SANTANDER ═══════════════
   Para agregar una especie: copie un bloque de BIRDS, ponga sus fotos en fotos/
   (y una copia pequeña en fotos/mini/) y complete XTRA, HAB y PLACES con el mismo id. */
const LUGAR = {
  nombre: "Barichara", corto: "Barichara",
  region: "Barichara", hero: "fotos/momotus.jpg"
};
const IMG = {}; for (const k of ["momotus","momotus2","saltator","saltator2","pyroM","pyroF","cyclarhis","mimus","episcopus","sicalis","sicalis2","sicalis3","machetornis","troglodytes","melanerpes","melanerpes2","columbina","campylorhynchus","elaenia","mimus2","melancholicus","stilpnia","ortalis","sicalis4","rupornis","melancholicus2"]) IMG[k]="fotos/"+k+".jpg";
const BA = "Barichara, Santander";
const HOME = {name:"Barichara, Santander", lat:6.63, lon:-73.22, when:"", role:"", here:true};

const BIRDS = [
{
  id:"momotus-subrufescens", common:"Barranquero", alt:"Momoto · Whooping Motmot",
  sci:"Momotus subrufescens", family:"Momotidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.momotus, date:"", place:BA, ind:"Adulto en una rama con líquenes"},{img:IMG.momotus2, date:"", place:BA, ind:"De frente, con el pecho canela y la cola de raqueta"}],
  desc:"Corona con un aro azul turquesa, antifaz negro, dorso verde y pecho canela. Su cola larga termina en dos «raquetas»: las barbas de las plumas centrales se desprenden y dejan solo el astil desnudo antes de la punta. Su nombre viene de los barrancos donde excava túneles de más de un metro para anidar.",
  diet:"Insectos grandes, arañas, lagartijas y ranas pequeñas que caza desde una percha; también frutos.",
  habitat:"Bosque seco, cañadas sombreadas, cafetales y bordes de bosque, desde tierras bajas hasta unos 1.500 m.",
  migration:null
},
{
  id:"saltator-striatipectus", common:"Saltador rayado", alt:"Papayero · Streaked Saltator",
  sci:"Saltator striatipectus", family:"Thraupidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.saltator, date:"", place:BA, ind:"En un bebedero de piedra"},{img:IMG.saltator2, date:"", place:BA, ind:"De espaldas, con las alas verde oliva"}],
  desc:"Cabeza gris, ceja blanca corta, dorso verde oliva y pecho blancuzco con rayas oscuras finas. Tiene el pico grueso y oscuro de los saltadores, ideal para frutos y brotes.",
  diet:"Frutos, flores, brotes tiernos y semillas; algunos insectos. Le gusta la papaya, de ahí el nombre «papayero».",
  habitat:"Bordes de bosque seco, rastrojos, cercas vivas, huertas y jardines.",
  migration:null
},
{
  id:"pyrocephalus-rubinus", common:"Atrapamoscas pechirrojo", alt:"Petirrojo · Vermilion Flycatcher",
  sci:"Pyrocephalus rubinus", family:"Tyrannidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.pyroM, date:"", place:BA, ind:"Macho entre barbas de viejo"},{img:IMG.pyroF, date:"", place:BA, ind:"Hembra, con el vientre salmón"}],
  desc:"El macho es inconfundible: corona y partes inferiores rojo encendido, antifaz y dorso pardo oscuro. La hembra es gris parda, con la garganta blanca, el pecho finamente rayado y el vientre salmón.",
  diet:"Insectos que atrapa en vuelos cortos desde una percha baja, a menudo bajando al suelo.",
  habitat:"Zonas abiertas y secas con árboles dispersos, potreros, cercas y jardines.",
  migration:null
},
{
  id:"cyclarhis-gujanensis", common:"Verderón cejirrufo", alt:"Vireón cejirrufo · Rufous-browed Peppershrike",
  sci:"Cyclarhis gujanensis", family:"Vireonidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.cyclarhis, date:"", place:BA, ind:"Adulto junto a un tronco"}],
  desc:"Cabeza gris con una ceja rojiza muy marcada, dorso verde oliva y pecho amarillo. El pico es grueso, pálido y ganchudo, como el de un alcaudón pequeño.",
  diet:"Orugas, saltamontes y otros insectos grandes, que sujeta con la pata mientras los despedaza; algunos frutos.",
  habitat:"Bosque seco, bordes, cercas vivas y jardines arbolados.",
  migration:null
},
{
  id:"campylorhynchus-griseus", common:"Cucarachero chupahuevo", alt:"Cucarachero bicolor · Bicolored Wren",
  sci:"Campylorhynchus griseus", family:"Troglodytidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.campylorhynchus, date:"", place:BA, ind:"Trepando un tronco con bromelias"}],
  desc:"El cucarachero más grande de Colombia: dorso pardo rojizo, partes inferiores blancas y una ceja blanca sobre una línea oscura que cruza el ojo. Su nombre local viene de que a veces se come huevos de otras aves.",
  diet:"Insectos, arañas, lagartijas pequeñas y, a veces, huevos.",
  habitat:"Zonas secas y abiertas con árboles, cactus, cercas y pueblos. Construye nidos voluminosos de pasto con entrada lateral.",
  migration:null
},
{
  id:"troglodytes-aedon", common:"Cucarachero", alt:"Cucarachero común · House Wren",
  sci:"Troglodytes aedon", family:"Troglodytidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.troglodytes, date:"", place:BA, ind:"Con la cola levantada"}],
  desc:"Pájaro pequeño y pardo con finas barras oscuras en alas y cola, que suele llevar levantada. Su canto es un trino largo, rápido y burbujeante, sorprendentemente fuerte para su tamaño.",
  diet:"Insectos, arañas, cucarachas y larvas que busca entre hojarasca, rendijas y arbustos.",
  habitat:"Jardines, setos, potreros con arbustos y casas. Anida en huecos de muros, tejados y cajas nido.",
  migration:null
},
{
  id:"melanerpes-rubricapillus", common:"Carpintero habado", alt:"Carpintero coronirrojo · Red-crowned Woodpecker",
  sci:"Melanerpes rubricapillus", family:"Picidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.melanerpes, date:"", place:BA, ind:"Macho picando una rama"},{img:IMG.melanerpes2, date:"", place:BA, ind:"Macho, con el dorso barrado a la vista"}],
  desc:"Dorso barrado en blanco y negro, partes inferiores beige con una mancha rojiza en el vientre. El macho tiene la corona y la nuca rojas; la hembra solo la nuca.",
  diet:"Insectos y larvas que saca de la madera, frutos y néctar.",
  habitat:"Bosque seco, jardines, parques y cercas con postes de madera. Los huecos que excava luego los usan otras aves para anidar.",
  migration:null
},
{
  id:"machetornis-rixosa", common:"Sirirí bueyero", alt:"Atrapamoscas ganadero · Cattle Tyrant",
  sci:"Machetornis rixosa", family:"Tyrannidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.machetornis, date:"", place:BA, ind:"Caminando en el pasto"}],
  desc:"Pardo grisáceo por encima y amarillo por debajo, con patas largas. A diferencia de casi todos los atrapamoscas, camina y corre por el suelo. Tiene una pequeña mancha roja escondida en la corona.",
  diet:"Insectos que espanta el ganado al caminar; por eso se monta sobre el lomo de vacas y caballos.",
  habitat:"Potreros, prados, canchas y patios abiertos de tierras bajas y medias.",
  migration:null
},
{
  id:"columbina-talpacoti", common:"Tortolita rojiza", alt:"Abuelita · Ruddy Ground Dove",
  sci:"Columbina talpacoti", family:"Columbidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.columbina, date:"", place:BA, ind:"Hembra posada en una rama"}],
  desc:"Paloma pequeña con manchas negras en las alas. El macho es rojizo con la cabeza gris azulada; la hembra, como la de la foto, es parda grisácea con un tinte rosado.",
  diet:"Semillas pequeñas que recoge caminando en el suelo.",
  habitat:"Patios, potreros, caminos y pueblos. Muy común y confiada.",
  migration:null
},
{
  id:"sicalis-flaveola", common:"Canario coronado", alt:"Canario costeño · Saffron Finch",
  sci:"Sicalis flaveola", family:"Thraupidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.sicalis2, date:"", place:BA, ind:"Macho de frente"},{img:IMG.sicalis, date:"", place:BA, ind:"Macho comiendo semillas en el patio"},{img:IMG.sicalis3, date:"", place:BA, ind:"Macho entre pastos altos"},{img:IMG.sicalis4, date:"", place:BA, ind:"Hembra o joven entre cañas, contra el cielo"}],
  desc:"El macho es amarillo intenso con la frente y la corona anaranjadas; la hembra y los jóvenes son más opacos y grisáceos. Anda en grupos que comen en el suelo.",
  diet:"Semillas de pastos y granos; algunos insectos.",
  habitat:"Áreas abiertas, patios, potreros y pueblos de tierras bajas y medias. Anida en huecos, aleros y nidos viejos de otras aves.",
  tip:"Por su color y su canto es de las aves silvestres más capturadas para jaulas en Colombia. No compre aves silvestres: es ilegal y sostiene la captura. Un comedero con alpiste en el patio es la mejor forma de tenerlas cerca.",
  migration:null
},
{
  id:"mimus-gilvus", common:"Sinsonte tropical", alt:"Sinsonte común · Tropical Mockingbird",
  sci:"Mimus gilvus", family:"Mimidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.mimus, date:"", place:BA, ind:"Cantando desde una rama"},{img:IMG.mimus2, date:"", place:BA, ind:"Pareja en un árbol cubierto de líquenes y barbas de viejo"}],
  desc:"Gris claro por encima y blancuzco por debajo, con antifaz oscuro y cola larga de puntas blancas que abre al posarse. Canta desde perchas altas, con frases variadas y repetidas.",
  diet:"Omnívoro: insectos, arañas, frutos y semillas. Busca alimento en el suelo y en arbustos.",
  habitat:"Áreas abiertas, cercas vivas, jardines y pueblos, del nivel del mar hasta la Sabana.",
  migration:null
},
{
  id:"thraupis-episcopus", common:"Azulejo común", alt:"Tangara azuleja · Blue-gray Tanager",
  sci:"Thraupis episcopus", family:"Thraupidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.episcopus, date:"", place:BA, ind:"En un árbol de flor de fuego"}],
  desc:"Gris azulado pálido con hombros y alas azul celeste. Inquieto y ruidoso, anda en parejas y llega a los comederos de fruta.",
  diet:"Frutos, néctar e insectos.",
  habitat:"Bordes, jardines, parques, cultivos y pueblos. Muy adaptado a ambientes humanos.",
  migration:null
},
{
  id:"ortalis-columbiana", common:"Guacharaca colombiana", alt:"Guacharaca · Colombian Chachalaca",
  sci:"Ortalis columbiana", family:"Cracidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.ortalis, date:"", place:BA, ind:"Caminando por una rama entre barbas de viejo"}],
  desc:"Ave grande, parecida a una gallina delgada de cola larga, parda con la cabeza y el cuello grises. Es endémica de Colombia: no vive en ningún otro país. De cerca se le ven escamas blancas en el pecho.",
  diet:"Frutos, hojas tiernas, flores y brotes; baja al suelo a comer frutos caídos.",
  habitat:"Bosque seco, rastrojos, cañadas arborizadas y fincas con árboles frutales, en los valles interandinos.",
  tip:"Al amanecer los grupos arman un coro estruendoso de «guacharaca-guacharaca» que se oye a cientos de metros. Ese ruido es la mejor forma de encontrarla.",
  migration:null
},
{
  id:"elaenia-flavogaster", common:"Elaenia copetona", alt:"Bobito copetón · Yellow-bellied Elaenia",
  sci:"Elaenia flavogaster", family:"Tyrannidae", iucn:"LC", conf:"media",
  confNote:"El copete erizado, las barras alares y el vientre amarillo pálido apuntan a esta especie, pero hay otras elaenias muy parecidas. Su canto ronco «uí-birr» o una grabación en Merlin lo confirmaría.",
  photos:[{img:IMG.elaenia, date:"", place:BA, ind:"Con el copete erizado, en un espino"}],
  desc:"Mosquero pequeño, gris oliva, con dos barras blancas en el ala, el vientre amarillo pálido y un copete desordenado que levanta como un penacho. Es ruidoso: repite un «uí-birr» ronco.",
  diet:"Insectos y muchos frutos pequeños; es una de las aves que más ayuda a dispersar semillas en los rastrojos.",
  habitat:"Rastrojos, cercas vivas, potreros con árboles y jardines de tierra cálida y templada.",
  migration:null
},
{
  id:"tyrannus-melancholicus", common:"Sirirí común", alt:"Tirano tropical · Tropical Kingbird",
  sci:"Tyrannus melancholicus", family:"Tyrannidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.melancholicus, date:"", place:BA, ind:"Posado en lo alto, con el pecho amarillo"},{img:IMG.melancholicus2, date:"", place:BA, ind:"En un cable frente a una pared encalada"}],
  desc:"Cabeza gris con antifaz oscuro, dorso oliva, pecho y vientre amarillos y cola parda con una muesca en la punta. Es de las aves más comunes de Colombia y casi siempre se ve en una percha alta y expuesta.",
  diet:"Insectos que caza en vuelo con salidas cortas desde la percha; también algunos frutos.",
  habitat:"Cualquier zona abierta con árboles: potreros, pueblos, cables y bordes de bosque.",
  migration:null
},
{
  id:"rupornis-magnirostris", common:"Gavilán caminero", alt:"Busardo caminero · Roadside Hawk",
  sci:"Rupornis magnirostris", family:"Accipitridae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.rupornis, date:"", place:BA, ind:"Adulto entre el follaje, mirando hacia abajo"}],
  desc:"Gavilán pequeño y gris, con el pecho y el vientre barrados de gris y canela, ojos amarillo pálido y patas y base del pico amarillo anaranjado. Es el gavilán más común de Colombia.",
  diet:"Lagartijas, ratones, insectos grandes, ranas y, ocasionalmente, pájaros pequeños.",
  habitat:"Bordes de bosque, potreros con árboles, cercas vivas y bordes de carretera, desde el nivel del mar hasta unos 2.800 m.",
  migration:null
},
{
  id:"stilpnia-vitriolina", common:"Tangara rastrojera", alt:"Scrub Tanager",
  sci:"Stilpnia vitriolina", family:"Thraupidae", iucn:"LC", conf:"alta",
  photos:[{img:IMG.stilpnia, date:"", place:BA, ind:"Con un fruto en el pico"}],
  desc:"Gris verdoso plateado, con la corona canela rojiza y un antifaz negro. Casi endémica de Colombia, muy común en zonas abiertas de las montañas.",
  diet:"Frutos, semillas e insectos.",
  habitat:"Rastrojos, cercas vivas, cafetales y jardines, entre unos 500 y 2.500 m.",
  migration:null
}];

const XTRA={
 "momotus-subrufescens":{sw:[["#3CC2E0","Corona"],["#4E9A6E","Dorso"],["#C27A45","Pecho"],["#141414","Antifaz"]]},
 "saltator-striatipectus":{sw:[["#7D8A7A","Cabeza"],["#8C9A3A","Alas"],["#E9E6DC","Pecho rayado"]]},
 "pyrocephalus-rubinus":{sw:[["#E5341F","Macho"],["#4A3A33","Dorso"],["#E8956A","Vientre hembra"]]},
 "cyclarhis-gujanensis":{sw:[["#9AA0A6","Cabeza"],["#B5552A","Ceja"],["#8FA03A","Dorso"],["#E3D03A","Pecho"]]},
 "campylorhynchus-griseus":{sw:[["#7A4A2E","Dorso"],["#F4F1EA","Vientre"],["#2B2420","Línea ocular"]]},
 "troglodytes-aedon":{sw:[["#7A6650","Dorso"],["#D9C9AE","Vientre"],["#3E3428","Barras"]]},
 "melanerpes-rubricapillus":{sw:[["#D9372A","Corona"],["#1C1C1C","Barrado"],["#D8CFB4","Vientre"]]},
 "machetornis-rixosa":{sw:[["#9C9682","Dorso"],["#E8D86A","Vientre"]]},
 "columbina-talpacoti":{sw:[["#B48A7A","Cuerpo"],["#A9AFB5","Cabeza"],["#1E1A18","Manchas"]]},
 "sicalis-flaveola":{sw:[["#F2C21A","Cuerpo"],["#F08A1C","Corona"],["#8C8A3A","Alas"]]},
 "mimus-gilvus":{sw:[["#A4A49E","Dorso"],["#ECEAE4","Vientre"],["#2A2A2A","Antifaz"]]},
 "thraupis-episcopus":{sw:[["#A9C4CC","Cuerpo"],["#4FA3C4","Hombros"],["#6E8E99","Alas"]]},
 "ortalis-columbiana":{sw:[["#6E5A44","Cuerpo"],["#7C7F84","Cabeza"],["#3A3A38","Cola"]]},
 "elaenia-flavogaster":{sw:[["#7A7A62","Dorso"],["#E3DE9A","Vientre"],["#EDEDE6","Barras alares"]]},
 "tyrannus-melancholicus":{sw:[["#8C9196","Cabeza"],["#E6D23A","Pecho"],["#4A4238","Cola"]]},
 "rupornis-magnirostris":{sw:[["#5B5E66","Dorso"],["#B48A6A","Barrado canela"],["#E8A630","Pico y patas"]]},
 "stilpnia-vitriolina":{sw:[["#A8B8A8","Cuerpo"],["#C2673A","Corona"],["#151515","Antifaz"]]}
};

const HAB={
 "momotus-subrufescens":["Se queda inmóvil largo rato en ramas bajas y sombreadas, balanceando la cola de lado a lado como un péndulo. Canta al amanecer un «u-dut» grave y doble, que es la mejor forma de encontrarlo.","Cañadas sombreadas y bordes de bosque seco alrededor del pueblo, temprano en la mañana."],
 "saltator-striatipectus":["Anda en parejas entre arbustos y copas bajas. Canta frases cortas y melodiosas desde una percha visible y baja a beber a pocetas y bebederos.","Bebederos, árboles frutales y cercas vivas."],
 "pyrocephalus-rubinus":["Caza desde perchas bajas y expuestas y vuelve casi siempre al mismo sitio. En celo, el macho sube aleteando con las plumas erizadas mientras canta y luego se deja caer.","Ramas bajas y cercas en zonas abiertas, sobre todo con barbas de viejo."],
 "cyclarhis-gujanensis":["Se oye mucho más de lo que se ve: repite una misma frase silbada decenas de veces y luego cambia a otra. Se mueve despacio entre el follaje.","Copas medias de árboles en cercas y bordes; búsquelo por el canto."],
 "campylorhynchus-griseus":["Ruidoso y sociable: vive en grupos familiares que cantan a dúo y defienden el territorio. Trepa troncos y revisa bromelias y huecos.","Árboles con bromelias, techos y cercas del pueblo."],
 "troglodytes-aedon":["Inquieto y curioso: salta entre las ramas bajas con la cola levantada y regaña con un «chet» seco a quien se acerque. Canta todo el año.","Base de setos, jardineras, aleros y muros de piedra."],
 "melanerpes-rubricapillus":["Ruidoso, con un llamado de traqueteo. Picotea ramas secas y postes para buscar larvas y para excavar su nido.","Árboles secos, postes de madera y ramas muertas de los jardines."],
 "machetornis-rixosa":["Camina y corre por el suelo como un pájaro de patio y se monta sobre el ganado para cazar los insectos que este espanta.","Potreros con ganado, prados y canchas."],
 "columbina-talpacoti":["Camina por el suelo en parejas o grupos pequeños picoteando semillas; al espantarse sale volando con un aleteo rápido.","Patios, caminos de tierra y potreros."],
 "sicalis-flaveola":["Anda en grupos que comen en el suelo. El macho canta un trino alegre desde techos y cercas.","Patios con semillas, prados y techos de teja."],
 "mimus-gilvus":["Territorial y vocal. Canta desde lo más alto y abre las alas de golpe, mostrando el blanco, para espantar insectos o rivales.","Copas de árboles, postes y techos en zonas abiertas."],
 "thraupis-episcopus":["Inquieto y ruidoso. Anda en parejas o grupos pequeños y suele imponerse sobre otras aves en el comedero.","Árboles floridos, frutales y comederos de fruta."],
 "ortalis-columbiana":["Vive en grupos familiares que se mueven por las ramas caminando y saltando más que volando. Es arisca: al sentirse observada se esconde en la espesura.","Cañadas arborizadas y árboles frutales en las afueras del pueblo, mejor al amanecer."],
 "elaenia-flavogaster":["Inquieta y vocal; se posa a la vista en arbustos y espinos y levanta el copete cuando canta o se alarma.","Espinos, cercas vivas y arbustos con frutos pequeños."],
 "tyrannus-melancholicus":["Caza desde perchas altas y vuelve al mismo sitio. Es valiente: persigue a gavilanes y aves mucho más grandes que se acerquen a su nido.","Ramas altas, cables y postes en zonas abiertas."],
 "rupornis-magnirostris":["Caza al acecho desde ramas a media altura, muy quieto, y se deja caer sobre la presa. Es ruidoso: su grito es un «kiiiii-ah» quejumbroso que repite a menudo.","Árboles frondosos y cercas vivas junto a potreros y caminos."],
 "stilpnia-vitriolina":["En parejas; muy confiada en los comederos.","Árboles frutales, rastrojos y cercas vivas."]
};

const PLACES={
 "momotus-subrufescens":["arboles"],"saltator-striatipectus":["comedero","arboles"],"pyrocephalus-rubinus":["arboles","prado"],
 "cyclarhis-gujanensis":["arboles"],"campylorhynchus-griseus":["arboles"],"troglodytes-aedon":["arboles","prado"],
 "melanerpes-rubricapillus":["arboles"],"machetornis-rixosa":["prado"],"columbina-talpacoti":["prado"],
 "sicalis-flaveola":["prado","comedero"],"mimus-gilvus":["arboles"],"thraupis-episcopus":["arboles","comedero"],
 "ortalis-columbiana":["arboles"],"elaenia-flavogaster":["arboles"],"tyrannus-melancholicus":["arboles","prado"],"stilpnia-vitriolina":["arboles","comedero"],"rupornis-magnirostris":["arboles","prado"]};
const TREND={};
