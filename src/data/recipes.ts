export interface Recipe {
  id: number;
  title: string;
  chapter: number;
  chapterName: string;
  mold: string;
  moldType: "Magnético" | "Clásico" | "3D" | "Tableta";
  chocolate: string;
  chocolateType: "Negro" | "Leche" | "Blanco" | "Ruby" | "Gold";
  filling: "Ganache" | "Praliné" | "Caramelo" | "Gelée" | "Gianduja" | "Licor";
  tempMelt: string;
  tempCool: string;
  tempWork: string;
  crystHours: string;
  difficulty: "Iniciación" | "Intermedio" | "Maestro Chocolatero";
  pips: string;
  ingredients: string[];
  steps: string[];
  tip: string;
  image?: string;
  aw?: number;
  shellThickness?: string;
}

export const RECIPES_DATA: Recipe[] = [
  // 1 to 10: Clásicos en Policarbonato
  {
    id: 1,
    title: "Bombón de Caramelo Salado con Mantequilla Noisette",
    chapter: 1,
    chapterName: "Bombones Clásicos en Policarbonato",
    mold: "Policarbonato Magnético 28 cav.",
    moldType: "Magnético",
    chocolate: "Negro 70%",
    chocolateType: "Negro",
    filling: "Caramelo",
    tempMelt: "50-52°C",
    tempCool: "28-29°C",
    tempWork: "31.5°C",
    crystHours: "12h @ 16°C",
    difficulty: "Intermedio",
    pips: "••",
    aw: 0.68,
    shellThickness: "0.8 mm",
    ingredients: [
      "200g Cobertura Negra 70% Guanaja",
      "150g Azúcar sacarosa",
      "110g Nata líquida 35% MG",
      "45g Mantequilla noisette tostada",
      "3g Flor de sal de Guérande"
    ],
    steps: [
      "Limpiar el molde con algodón y templar el molde a 22°C.",
      "Atemperar la cobertura negra a 31.5°C y realizar el encamisado enérgico; escurrir y vibrar para evitar burbujas.",
      "Cocinar el azúcar a caramelo rubio oscuro (185°C), desglasar con la nata caliente infusionada.",
      "Emulsionar a 40°C la mantequilla noisette y la flor de sal. Enfriar a 28°C.",
      "Dosificar a 2mm del borde, sellar con cobertura atemperada tras 2 horas de reposo."
    ],
    tip: "Nunca dosificar el caramelo por encima de 29°C o fundirá la delgada camisa cristalizada."
  },
  {
    id: 2,
    title: "Praliné Crujiente de Avellana Piamonte y Cacao 70%",
    chapter: 1,
    chapterName: "Bombones Clásicos en Policarbonato",
    mold: "Policarbonato Clásico Esfera 24mm",
    moldType: "Clásico",
    chocolate: "Negro 70%",
    chocolateType: "Negro",
    filling: "Praliné",
    tempMelt: "50-52°C",
    tempCool: "28-29°C",
    tempWork: "31.5°C",
    crystHours: "14h @ 16°C",
    difficulty: "Iniciación",
    pips: "•",
    aw: 0.55,
    shellThickness: "0.9 mm",
    ingredients: [
      "250g Cobertura Negra 70%",
      "180g Praliné de avellana IGP Piamonte 60%",
      "40g Feuilletine (barquillo desmenuzado)",
      "25g Manteca de cacao pura"
    ],
    steps: [
      "Fundir manteca de cacao y homogeneizar con el praliné de avellana a 26°C.",
      "Incorporar suavemente la feuilletine para mantener la textura crujiente.",
      "Encamisar el molde de esfera con cobertura 70% y dejar pre-cristalizar 20 minutos.",
      "Mangar el praliné crujiente dejando espacio para el obturado final.",
      "Cristalizar en cámara a 16°C y desmoldar con golpe seco."
    ],
    tip: "La adición de un 5% de manteca de cacao previene la migración de los aceites de avellana hacia la cubierta exterior."
  },
  {
    id: 3,
    title: "Ganache Sedosa de Maracuyá y Chocolate Blanco",
    chapter: 1,
    chapterName: "Bombones Clásicos en Policarbonato",
    mold: "Policarbonato Magnético Semiesfera",
    moldType: "Magnético",
    chocolate: "Blanco 34%",
    chocolateType: "Blanco",
    filling: "Ganache",
    tempMelt: "42-45°C",
    tempCool: "26-27°C",
    tempWork: "28.5-29°C",
    crystHours: "16h @ 16°C",
    difficulty: "Intermedio",
    pips: "••",
    aw: 0.72,
    shellThickness: "0.8 mm",
    ingredients: [
      "220g Cobertura Blanca 34%",
      "90g Puré 100% maracuyá reducido",
      "25g Azúcar invertido",
      "35g Mantequilla fresca a 16°C"
    ],
    steps: [
      "Calentar puré y azúcar invertido a 45°C.",
      "Verter en 3 veces sobre el chocolate blanco fundido provocando fricción para una emulsión elástica.",
      "A 35°C añadir la mantequilla y pasar túrmix sin incorporar aire.",
      "Encamisar con chocolate blanco atemperado a 28.5°C.",
      "Dosificar a 27°C y reposar 12h antes de cerrar con obturación perfecta."
    ],
    tip: "La acidez del maracuyá equilibra magistralmente la manteca láctea del chocolate blanco."
  },
  {
    id: 4,
    title: "Esfera de Frambuesa y Rosa en Chocolate Ruby",
    chapter: 1,
    chapterName: "Bombones Clásicos en Policarbonato",
    mold: "Policarbonato Clásico Esférico 30mm",
    moldType: "Clásico",
    chocolate: "Ruby RB2",
    chocolateType: "Ruby",
    filling: "Gelée",
    tempMelt: "44-45°C",
    tempCool: "26-27°C",
    tempWork: "29-29.5°C",
    crystHours: "12h @ 16°C",
    difficulty: "Maestro Chocolatero",
    pips: "•••",
    aw: 0.75,
    shellThickness: "0.85 mm",
    ingredients: [
      "200g Cobertura Ruby",
      "120g Puré de frambuesa fresca",
      "2 gotas Esencia pura de rosa damascena",
      "2.5g Pectina amarilla + 20g azúcar"
    ],
    steps: [
      "Cocer el puré de frambuesa con la lluvia de pectina y azúcar hasta 103°C; agregar gotas de rosa fuera del fuego.",
      "Enfriar el gel a 25°C.",
      "Atemperar la cobertura Ruby estrictamente entre 29 y 29.5°C para salvaguardar sus notas ácidas naturales.",
      "Casting de molde de alta definición y vaciado con espátula de acero.",
      "Rellenar y dejar gelificar por completo antes del sellado térmico."
    ],
    tip: "Evite el contacto con humedad en el chocolate Ruby para no alterar sus tonos rosáceos naturales."
  },
  {
    id: 5,
    title: "Lingote Gianduja de Pistacho Bronte",
    chapter: 1,
    chapterName: "Bombones Clásicos en Policarbonato",
    mold: "Policarbonato Lingote Rectangular",
    moldType: "Clásico",
    chocolate: "Con Leche 38%",
    chocolateType: "Leche",
    filling: "Gianduja",
    tempMelt: "45-48°C",
    tempCool: "27-28°C",
    tempWork: "29.5-30°C",
    crystHours: "18h @ 15°C",
    difficulty: "Intermedio",
    pips: "••",
    aw: 0.58,
    shellThickness: "0.8 mm",
    ingredients: [
      "180g Cobertura Leche 38%",
      "150g Pasta pura de pistacho verde de Bronte DOP",
      "30g Azúcar glas tamizado",
      "2g Sal de roca"
    ],
    steps: [
      "Conchar en procesador la pasta de pistacho con la cobertura con leche fundida a 35°C.",
      "Bajar la temperatura de la masa a 24°C agitando constantemente para pre-cristalizar la gianduja.",
      "Encamisar lingotes con cobertura de leche a 30°C.",
      "Dosificar la gianduja a 25°C. Sellar transcurridas 4 horas."
    ],
    tip: "El pistacho de Sicilia aporta un perfil terpénico y un verde esmeralda inigualable."
  },
  {
    id: 6,
    title: "Diamante de Café Espresso y Cardamomo Negro",
    chapter: 1,
    chapterName: "Bombones Clásicos en Policarbonato",
    mold: "Policarbonato Magnético Diamante Facetado",
    moldType: "Magnético",
    chocolate: "Negro 70%",
    chocolateType: "Negro",
    filling: "Ganache",
    tempMelt: "50-55°C",
    tempCool: "28-29°C",
    tempWork: "31.5°C",
    crystHours: "12h @ 16°C",
    difficulty: "Maestro Chocolatero",
    pips: "•••",
    aw: 0.65,
    shellThickness: "0.75 mm",
    ingredients: [
      "220g Cobertura Negra 70%",
      "100g Nata infusionada con 15g cardamomo negro machacado",
      "30g Extracto espresso denso",
      "20g Miel de acacia"
    ],
    steps: [
      "Infusionar la nata 24h en frío con el cardamomo y colar finamente.",
      "Hervir con la miel y realizar emulsión en núcleo sobre el chocolate picado.",
      "Moldear la faceta de diamante garantizando ausencia de aire en las aristas.",
      "Rellenar a 28°C y dejar reposar en higrometría controlada (50-60%)."
    ],
    tip: "Golpee firmemente el molde sobre la mesa marmórea para desalojar burbujas en los vértices del diamante."
  },
  {
    id: 7,
    title: "Trufa Moldeada de Vainilla Bourbon de Madagascar",
    chapter: 1,
    chapterName: "Bombones Clásicos en Policarbonato",
    mold: "Policarbonato Domo Redondo",
    moldType: "Clásico",
    chocolate: "Con Leche 38%",
    chocolateType: "Leche",
    filling: "Ganache",
    tempMelt: "45-48°C",
    tempCool: "27-28°C",
    tempWork: "30°C",
    crystHours: "14h @ 16°C",
    difficulty: "Iniciación",
    pips: "•",
    aw: 0.69,
    shellThickness: "0.85 mm",
    ingredients: [
      "200g Cobertura Leche 38%",
      "90g Nata 35%",
      "2 Vainas de Vainilla Bourbon madagascar",
      "25g Glucosa",
      "30g Mantequilla pomada"
    ],
    steps: [
      "Raspar las vainas y calentar la nata con glucosa dejando infusionar 30 minutos.",
      "Colar y verter sobre el chocolate atemperado.",
      "Emulsionar a mano con varilla y batir suavemente.",
      "Encamisar molde y verter a 28°C."
    ],
    tip: "La alta proporción de vainillina natural sublima el paladar lácteo."
  },
  {
    id: 8,
    title: "Bombón Cítrico de Yuzu y Romero en Chocolate con Leche",
    chapter: 1,
    chapterName: "Bombones Clásicos en Policarbonato",
    mold: "Policarbonato Clásico Oval",
    moldType: "Clásico",
    chocolate: "Con Leche 38%",
    chocolateType: "Leche",
    filling: "Ganache",
    tempMelt: "45-48°C",
    tempCool: "27-28°C",
    tempWork: "29.8°C",
    crystHours: "12h @ 16°C",
    difficulty: "Intermedio",
    pips: "••",
    aw: 0.70,
    shellThickness: "0.8 mm",
    ingredients: [
      "190g Cobertura Leche",
      "50g Jugo puro de Yuzu japonés",
      "60g Nata fresca",
      "2 Ramitas romero fresco",
      "20g Sorbitol"
    ],
    steps: [
      "Infusionar romero en la nata tibia; luego retirar y sumar zumo de yuzu y sorbitol.",
      "Verter sobre el chocolate y homogeneizar con mixer de inmersión.",
      "Casting de camisa fina en policarbonato.",
      "Dosificar a 27°C y sellar con doble rasqueta."
    ],
    tip: "El sorbitol retiene el agua y prolonga la vida útil de los cítricos frescos en el bombón."
  },
  {
    id: 9,
    title: "Corazón de Frutos Rojos y Balsámico de Módena",
    chapter: 1,
    chapterName: "Bombones Clásicos en Policarbonato",
    mold: "Policarbonato Magnético Corazón",
    moldType: "Magnético",
    chocolate: "Negro 70%",
    chocolateType: "Negro",
    filling: "Gelée",
    tempMelt: "50-52°C",
    tempCool: "28-29°C",
    tempWork: "31.5°C",
    crystHours: "15h @ 16°C",
    difficulty: "Intermedio",
    pips: "••",
    aw: 0.73,
    shellThickness: "0.8 mm",
    ingredients: [
      "220g Cobertura Negra 70%",
      "100g Puré grosella y mora",
      "20g Vinagre balsámico tradicional de Módena IGP",
      "3g Gelatina neutra"
    ],
    steps: [
      "Reducir el balsámico ligeramente y unificar con el puré de bayas a 50°C.",
      "Hidratar e incorporar la gelatina.",
      "Pintar el molde con manteca roja y encamisar en chocolate negro brillante.",
      "Mangar el gel a 24°C y sellar."
    ],
    tip: "El balsámico envejecido resalta la acidez frutal de la cobertura de origen americano."
  },
  {
    id: 10,
    title: "Pirámide de Miel de Lavanda y Chocolate Ahumado",
    chapter: 1,
    chapterName: "Bombones Clásicos en Policarbonato",
    mold: "Policarbonato Pirámide Alta",
    moldType: "Clásico",
    chocolate: "Negro 70%",
    chocolateType: "Negro",
    filling: "Caramelo",
    tempMelt: "50-55°C",
    tempCool: "28-29°C",
    tempWork: "31.8°C",
    crystHours: "14h @ 16°C",
    difficulty: "Maestro Chocolatero",
    pips: "•••",
    aw: 0.67,
    shellThickness: "0.8 mm",
    ingredients: [
      "230g Cobertura Negra de Java ahumada",
      "80g Miel de lavanda pura de Provenza",
      "70g Nata 35%",
      "30g Mantequilla noisette"
    ],
    steps: [
      "Calentar la miel hasta ligeras notas tostadas y desglasar con nata tibia.",
      "Fundir la cobertura y realizar emulsión a 38°C.",
      "Encamisar pirámides cuidando de purgar la punta con brocha fina.",
      "Rellenar y asentar a 16°C durante la noche."
    ],
    tip: "La flor de lavanda en exceso puede dar tonos jabonosos; respete la proporción al miligramo."
  },

  // 11 to 20: Geométricos y Técnicas de Pintado
  {
    id: 11,
    title: "Domo Galáctico con Manteca Teñida y Earl Grey",
    chapter: 2,
    chapterName: "Bombones Geométricos y Técnicas de Pintado",
    mold: "Policarbonato Domo 32mm",
    moldType: "Clásico",
    chocolate: "Negro 70%",
    chocolateType: "Negro",
    filling: "Ganache",
    tempMelt: "50-52°C",
    tempCool: "28-29°C",
    tempWork: "31.5°C",
    crystHours: "16h @ 16°C",
    difficulty: "Maestro Chocolatero",
    pips: "•••",
    aw: 0.68,
    shellThickness: "0.8 mm",
    ingredients: [
      "200g Cobertura Negra 70%",
      "100g Nata con 10g té Earl Grey bergamota",
      "20g Manteca de cacao azul noche y plata comestible",
      "30g Mantequilla pura"
    ],
    steps: [
      "Pulverizar con aerógrafo a 30°C la manteca azul y salpicar la plata.",
      "Atemperar la cobertura negra y fundir la camisa sobre el molde frío.",
      "Hacer ganache perfumada de Earl Grey.",
      "Mangar y sellar logrando efecto espejo absoluto."
    ],
    tip: "Mantenga la presión del compresor a 1.8 bar para lograr el pulverizado cósmico perfecto."
  },
  {
    id: 12,
    title: "Gema Esmeralda de Menta Piperita y Lima",
    chapter: 2,
    chapterName: "Bombones Geométricos y Técnicas de Pintado",
    mold: "Policarbonato Magnético Gema",
    moldType: "Magnético",
    chocolate: "Blanco 34%",
    chocolateType: "Blanco",
    filling: "Ganache",
    tempMelt: "42-45°C",
    tempCool: "26-27°C",
    tempWork: "29°C",
    crystHours: "12h @ 16°C",
    difficulty: "Intermedio",
    pips: "••",
    aw: 0.71,
    shellThickness: "0.85 mm",
    ingredients: [
      "220g Cobertura Blanca",
      "70g Zumo de lima y ralladura microplane",
      "3 gotas Aceite esencial menta piperita",
      "15g Manteca verde esmeralda"
    ],
    steps: [
      "Pintar a dedo con esponja la manteca esmeralda en los vértices del molde.",
      "Encamisar con chocolate blanco a 29°C.",
      "Emulsionar la crema de menta y lima con la cobertura blanca.",
      "Llenar y cerrar."
    ],
    tip: "La lima fresca debe colarse dos veces para evitar residuos celulares en la emulsión."
  },
  {
    id: 13,
    title: "Roca Volcánica de Nibs Caramelizados y Sal Maldon",
    chapter: 2,
    chapterName: "Bombones Geométricos y Técnicas de Pintado",
    mold: "Policarbonato Faceta Irregular",
    moldType: "Clásico",
    chocolate: "Negro 70%",
    chocolateType: "Negro",
    filling: "Praliné",
    tempMelt: "50-55°C",
    tempCool: "28-29°C",
    tempWork: "32°C",
    crystHours: "10h @ 16°C",
    difficulty: "Iniciación",
    pips: "•",
    aw: 0.52,
    shellThickness: "0.9 mm",
    ingredients: [
      "250g Cobertura Negra 70%",
      "80g Nibs de cacao tostados caramelizados",
      "100g Pasta de avellanas",
      "4g Escamas de sal Maldon"
    ],
    steps: [
      "Cepillar el molde con manteca negra mate (carbón vegetal).",
      "Hacer la camisa en negro 70%.",
      "Unir los nibs caramelizados crujientes con la pasta de avellana templada.",
      "Rellenar y enfriar."
    ],
    tip: "Textura sumamente crujiente y contraste mineral de alta cocina."
  },
  {
    id: 14,
    title: "Cubo Minimalista de Avellana y Caramelo Ahumado",
    chapter: 2,
    chapterName: "Bombones Geométricos y Técnicas de Pintado",
    mold: "Policarbonato Cubo Precisión",
    moldType: "Clásico",
    chocolate: "Con Leche 38%",
    chocolateType: "Leche",
    filling: "Caramelo",
    tempMelt: "45-48°C",
    tempCool: "27-28°C",
    tempWork: "30°C",
    crystHours: "14h @ 16°C",
    difficulty: "Intermedio",
    pips: "••",
    aw: 0.64,
    shellThickness: "0.75 mm",
    ingredients: [
      "220g Cobertura Leche",
      "120g Caramelo al humo de roble",
      "80g Praliné fino de avellana",
      "20g Manteca de cacao"
    ],
    steps: [
      "Aplicar plantilla geométrica en el molde con spray dorado.",
      "Encamisar el cubo cuidando que los bordes queden rectos y uniformes.",
      "Verter una primera capa de caramelo ahumado (1/3).",
      "Verter segunda capa de praliné de avellana. Sellar."
    ],
    tip: "La técnica de doble capa requiere que la primera capa forme una piel táctil antes de añadir la segunda."
  },
  {
    id: 15,
    title: "Facetado Zafiro de Arándanos y Violetas",
    chapter: 2,
    chapterName: "Bombones Geométricos y Técnicas de Pintado",
    mold: "Policarbonato Magnético Diamante",
    moldType: "Magnético",
    chocolate: "Blanco 34%",
    chocolateType: "Blanco",
    filling: "Gelée",
    tempMelt: "42-45°C",
    tempCool: "26-27°C",
    tempWork: "28.8°C",
    crystHours: "16h @ 16°C",
    difficulty: "Maestro Chocolatero",
    pips: "•••",
    aw: 0.74,
    shellThickness: "0.8 mm",
    ingredients: [
      "200g Cobertura Blanca",
      "100g Puré arándanos silvestres",
      "15g Licor o extracto natural de violeta",
      "3g Pectina NH",
      "10g Manteca azul zafiro"
    ],
    steps: [
      "Pintar manteca azul a 30°C y retirar el exceso con rasqueta afilada.",
      "Encamisar en chocolate blanco sedoso.",
      "Cocer el gelée de arándano y violeta a 104°C y templar a 26°C.",
      "Rellenar y cristalizar."
    ],
    tip: "Una joya visual cuyo corte revela un morado intenso translúcido."
  },
  {
    id: 16,
    title: "Prisma Dorado de Toffee y Nuez Pecana",
    chapter: 2,
    chapterName: "Bombones Geométricos y Técnicas de Pintado",
    mold: "Policarbonato Prisma Triangular",
    moldType: "Clásico",
    chocolate: "Gold Caramelo",
    chocolateType: "Gold",
    filling: "Caramelo",
    tempMelt: "42-45°C",
    tempCool: "26-27°C",
    tempWork: "29-30°C",
    crystHours: "14h @ 16°C",
    difficulty: "Intermedio",
    pips: "••",
    aw: 0.62,
    shellThickness: "0.85 mm",
    ingredients: [
      "240g Cobertura Gold Caramelo",
      "100g Toffee blando de mantequilla salada",
      "60g Nueces pecanas tostadas troceadas",
      "Polvo de oro liposoluble"
    ],
    steps: [
      "Espolvorear con pincel seco el polvo dorado puro en el molde.",
      "Encamisar con cobertura Gold atemperada a 29.5°C.",
      "Introducir toffee tibio y trocitos de pecana crujiente.",
      "Sellar y enfriar en ambiente seco."
    ],
    tip: "El chocolate Gold realza los aromas de mantequilla cocida del toffee artesanal."
  },
  {
    id: 17,
    title: "Bombón Bicolor de Dulce de Leche y Ron Añejo",
    chapter: 2,
    chapterName: "Bombones Geométricos y Técnicas de Pintado",
    mold: "Policarbonato Magnético Semiesfera",
    moldType: "Magnético",
    chocolate: "Con Leche 38%",
    chocolateType: "Leche",
    filling: "Licor",
    tempMelt: "45-48°C",
    tempCool: "27-28°C",
    tempWork: "30°C",
    crystHours: "12h @ 16°C",
    difficulty: "Intermedio",
    pips: "••",
    aw: 0.69,
    shellThickness: "0.8 mm",
    ingredients: [
      "200g Cobertura Leche",
      "120g Dulce de leche repostero artesano",
      "25ml Ron añejo 12 años",
      "Manteca blanca y café"
    ],
    steps: [
      "Crear dos franjas de manteca de cacao en el molde con pincel bies.",
      "Encamisar con chocolate con leche equilibrado.",
      "Aligerar el dulce de leche batiéndolo con el ron añejo a temperatura ambiente.",
      "Mangar con boquilla número 6 y cerrar."
    ],
    tip: "La graduación alcohólica del ron confiere una textura fundente instantánea en boca."
  },
  {
    id: 18,
    title: "Cabujón Perlado de Té Matcha Ceremonial y Sésamo Blanco",
    chapter: 2,
    chapterName: "Bombones Geométricos y Técnicas de Pintado",
    mold: "Policarbonato Cabujón Oval",
    moldType: "Clásico",
    chocolate: "Blanco 34%",
    chocolateType: "Blanco",
    filling: "Ganache",
    tempMelt: "42-45°C",
    tempCool: "26-27°C",
    tempWork: "28.5°C",
    crystHours: "16h @ 16°C",
    difficulty: "Maestro Chocolatero",
    pips: "•••",
    aw: 0.70,
    shellThickness: "0.8 mm",
    ingredients: [
      "220g Cobertura Blanca",
      "80g Nata líquida",
      "12g Té Matcha ceremonial de Kioto",
      "30g Pasta pura de sésamo blanco tostado"
    ],
    steps: [
      "Pintar un efecto perla con manteca irisada blanca en el molde.",
      "Encamisar con cobertura blanca.",
      "Disolver el matcha en la nata tibia a 40°C y emulsionar con chocolate y sésamo.",
      "Dejar reposar y obturar."
    ],
    tip: "No caliente el matcha por encima de 60°C para no oxidar su color verde vivo."
  },
  {
    id: 19,
    title: "Media Esfera Terrosa de Haba Tonka y Ganache 80%",
    chapter: 2,
    chapterName: "Bombones Geométricos y Técnicas de Pintado",
    mold: "Policarbonato Semiesfera 28mm",
    moldType: "Clásico",
    chocolate: "Negro 70%",
    chocolateType: "Negro",
    filling: "Ganache",
    tempMelt: "52-55°C",
    tempCool: "28-29°C",
    tempWork: "31.8°C",
    crystHours: "14h @ 16°C",
    difficulty: "Intermedio",
    pips: "••",
    aw: 0.66,
    shellThickness: "0.8 mm",
    ingredients: [
      "210g Cobertura Negra 80%",
      "110g Nata líquida",
      "1 Haba tonka rallada finamente",
      "25g Miel suave"
    ],
    steps: [
      "Pulverizar manteca marrón chocolate con toques de cacao en polvo seco.",
      "Encamisar con cobertura de gran carácter 80%.",
      "Infusionar la tonka en la nata y realizar ganache brillante.",
      "Dosificar a 29°C y sellar."
    ],
    tip: "El aroma amigdaliano y avainillado de la tonka complementa el amargor del cacao intenso."
  },
  {
    id: 20,
    title: "Rombo de Mango Asado y Chile Ancho Suave",
    chapter: 2,
    chapterName: "Bombones Geométricos y Técnicas de Pintado",
    mold: "Policarbonato Rombo Geométrico",
    moldType: "Clásico",
    chocolate: "Negro 70%",
    chocolateType: "Negro",
    filling: "Gelée",
    tempMelt: "50-52°C",
    tempCool: "28-29°C",
    tempWork: "31.5°C",
    crystHours: "12h @ 16°C",
    difficulty: "Maestro Chocolatero",
    pips: "•••",
    aw: 0.73,
    shellThickness: "0.8 mm",
    ingredients: [
      "220g Cobertura Negra",
      "120g Puré mango asado al horno",
      "1g Polvo de chile ancho deshidratado",
      "3g Pectina",
      "Manteca naranja volcán"
    ],
    steps: [
      "Salpicar manteca naranja y roja en las aristas del rombo.",
      "Encamisar en chocolate negro crujiente.",
      "Hacer confitura densa con el puré y el chile sutil.",
      "Rellenar a 25°C y sellar la base."
    ],
    tip: "El chile ancho aporta notas ahumadas de pasas sin un picor agresivo."
  },

  // 21 to 30: Tabletas Rellenas y Figuras Huecas
  {
    id: 21,
    title: "Tableta Rellena de Praliné Hojaldrado y Flor de Sal",
    chapter: 3,
    chapterName: "Tabletas Rellenas y Figuras Huecas",
    mold: "Molde Tableta Profunda 100g",
    moldType: "Tableta",
    chocolate: "Con Leche 38%",
    chocolateType: "Leche",
    filling: "Praliné",
    tempMelt: "45-48°C",
    tempCool: "27-28°C",
    tempWork: "30°C",
    crystHours: "12h @ 16°C",
    difficulty: "Intermedio",
    pips: "••",
    aw: 0.54,
    shellThickness: "1.5 mm",
    ingredients: [
      "280g Cobertura Leche",
      "140g Praliné almendra y avellana 50%",
      "50g Galleta hojaldrada triturada",
      "3g Flor de sal"
    ],
    steps: [
      "Realizar camisa de tableta de 1.5mm de espesor en policarbonato rígido.",
      "Mezclar el praliné con el hojaldre crocante y la sal.",
      "Extender el relleno homogéneamente con espátula acodada dejando 2mm en el borde.",
      "Dejar fijar y cerrar con cobertura de leche templada usando regla de desmoldeo."
    ],
    tip: "Un espesor de camisa excesivo arruinará el equilibrio crujiente de la tableta."
  },
  {
    id: 22,
    title: "Tableta Velvet de Frambuesa Liofilizada y Chocolate Blanco",
    chapter: 3,
    chapterName: "Tabletas Rellenas y Figuras Huecas",
    mold: "Molde Tableta Ondulada Policarbonato",
    moldType: "Tableta",
    chocolate: "Blanco 34%",
    chocolateType: "Blanco",
    filling: "Ganache",
    tempMelt: "42-45°C",
    tempCool: "26-27°C",
    tempWork: "28.5°C",
    crystHours: "14h @ 16°C",
    difficulty: "Iniciación",
    pips: "•",
    aw: 0.50,
    shellThickness: "Solid / 100g",
    ingredients: [
      "300g Cobertura Blanca aterciopelada",
      "25g Frambuesa liofilizada crujiente",
      "20g Nibs de manteca de cacao",
      "Vainilla Bourbon"
    ],
    steps: [
      "Atemperar la cobertura blanca y distribuir los trozos de frambuesa en el fondo del molde.",
      "Verter la cobertura suavemente para integrar los frutos sin moverlos.",
      "Vibrar la bandeja para eliminar burbujas de la superficie esculpida.",
      "Cristalizar en frío y voltear."
    ],
    tip: "La frambuesa liofilizada es altamente higroscópica: trabaje en ambiente con humedad menor al 50%."
  },
  {
    id: 23,
    title: "Huevo de Pascua Hueco con Doble Capa Marmoleada",
    chapter: 3,
    chapterName: "Tabletas Rellenas y Figuras Huecas",
    mold: "Molde 3D Hueco Huevo Geométrico",
    moldType: "3D",
    chocolate: "Negro 70%",
    chocolateType: "Negro",
    filling: "Caramelo",
    tempMelt: "50-52°C",
    tempCool: "28-29°C",
    tempWork: "31.5°C",
    crystHours: "18h @ 15°C",
    difficulty: "Maestro Chocolatero",
    pips: "•••",
    aw: 0.50,
    shellThickness: "2.5 mm",
    ingredients: [
      "400g Cobertura Negra 70%",
      "150g Cobertura Blanca atemperada a 29°C para vetas",
      "Manteca de cacao neutra"
    ],
    steps: [
      "Verter hilos de chocolate blanco en el molde y moverlo para generar vetas orgánicas.",
      "Una vez cristalizado el veteado, aplicar primera capa de chocolate negro rotando el molde 360°.",
      "Drenar y enfriar 10 minutos; aplicar una segunda capa de refuerzo.",
      "Pegar ambas mitades sobre placa caliente a 45°C durante un segundo y unir con guantes de algodón."
    ],
    tip: "Use guantes de hilo limpios para no dejar huellas dactilares sobre la superficie pulida."
  },
  {
    id: 24,
    title: "Figura Hueca de Cacao Pod en Policarbonato Doble",
    chapter: 3,
    chapterName: "Tabletas Rellenas y Figuras Huecas",
    mold: "Molde 3D Hueco Mazorca de Cacao",
    moldType: "3D",
    chocolate: "Negro 70%",
    chocolateType: "Negro",
    filling: "Praliné",
    tempMelt: "50-55°C",
    tempCool: "28-29°C",
    tempWork: "31.5°C",
    crystHours: "18h @ 15°C",
    difficulty: "Maestro Chocolatero",
    pips: "•••",
    aw: 0.50,
    shellThickness: "3.0 mm",
    ingredients: [
      "500g Cobertura de origen Madagascar 70%",
      "Manteca teñida con tonos ocres y dorados",
      "Brochas de pelo suave"
    ],
    steps: [
      "Aplicar sombreados en las hendiduras del molde para dar volumen y realismo botánico.",
      "Fijar con clips las dos mitades del molde o colar individualmente.",
      "Llenar por completo de chocolate atemperado, rotar 3 minutos y vaciar el exceso.",
      "Enfriar en posición invertida."
    ],
    tip: "La contracción natural de la manteca de cacao provocará un desprendimiento sonoro al cristalizar."
  },
  {
    id: 25,
    title: "Tableta Snack de Caramelo Líquido y Cacahuete Tostado",
    chapter: 3,
    chapterName: "Tabletas Rellenas y Figuras Huecas",
    mold: "Molde Tableta Snack Policarbonato",
    moldType: "Tableta",
    chocolate: "Con Leche 38%",
    chocolateType: "Leche",
    filling: "Caramelo",
    tempMelt: "45-48°C",
    tempCool: "27-28°C",
    tempWork: "30°C",
    crystHours: "12h @ 16°C",
    difficulty: "Iniciación",
    pips: "•",
    aw: 0.65,
    shellThickness: "1.2 mm",
    ingredients: [
      "250g Cobertura Leche",
      "100g Caramelo blando de vainilla",
      "60g Cacahuetes tostados con sal marina"
    ],
    steps: [
      "Encamisar el molde de tableta snack.",
      "Mangar el caramelo fluido frío a 25°C.",
      "Incrustar los cacahuetes enteros alineados.",
      "Sellar con cobertura de leche tibia a 30°C y alisar con rasqueta plana."
    ],
    tip: "El snack gourmet por excelencia: crujiente, dulce y con final tostado salino."
  },
  {
    id: 26,
    title: "Tableta Rellena de Pasta de Pistacho Fluida y Nibs",
    chapter: 3,
    chapterName: "Tabletas Rellenas y Figuras Huecas",
    mold: "Molde Tableta Diseño Cuadros",
    moldType: "Tableta",
    chocolate: "Blanco 34%",
    chocolateType: "Blanco",
    filling: "Gianduja",
    tempMelt: "42-45°C",
    tempCool: "26-27°C",
    tempWork: "28.5°C",
    crystHours: "14h @ 16°C",
    difficulty: "Intermedio",
    pips: "••",
    aw: 0.56,
    shellThickness: "1.2 mm",
    ingredients: [
      "260g Cobertura Blanca",
      "120g Praliné de pistacho esmeralda fluido",
      "30g Nibs tostados",
      "1 pizca Sal"
    ],
    steps: [
      "Formar la cubierta blanca fina y homogénea.",
      "Mezclar el pistacho con los nibs para dotarlo de textura crocante.",
      "Llenar la cavidad de la tableta.",
      "Cerrar la base y reposar en sala fría."
    ],
    tip: "La fluidez del pistacho crea un derrame sensorial al partir la barra."
  },
  {
    id: 27,
    title: "Esferas Huecas para Rellenar (Bolas de Navidad de Chocolate)",
    chapter: 3,
    chapterName: "Tabletas Rellenas y Figuras Huecas",
    mold: "Molde 3D Hueco Esfera Doble",
    moldType: "3D",
    chocolate: "Ruby RB2",
    chocolateType: "Ruby",
    filling: "Ganache",
    tempMelt: "44-45°C",
    tempCool: "26-27°C",
    tempWork: "29.2°C",
    crystHours: "16h @ 15°C",
    difficulty: "Maestro Chocolatero",
    pips: "•••",
    aw: 0.50,
    shellThickness: "2.0 mm",
    ingredients: [
      "350g Cobertura Ruby",
      "Colorantes nacarados plateados y rubí",
      "Alcohol técnico para disolución"
    ],
    steps: [
      "Matizar el interior de la esfera con lustre comestible.",
      "Encamisar dos veces para conferirle estabilidad estructural de 2mm.",
      "Desmoldar cuidadosamente usando guantes térmicos.",
      "Soldar en placa tibia dejando un orificio de 4mm para rellenar con licor o ganache."
    ],
    tip: "Ideales para coctelería o postres de emplatado interactivo con sopletes."
  },
  {
    id: 28,
    title: "Bombón Corona de Mandarina y Crema de Almendras",
    chapter: 3,
    chapterName: "Tabletas Rellenas y Figuras Huecas",
    mold: "Policarbonato Corona Real",
    moldType: "Clásico",
    chocolate: "Con Leche 38%",
    chocolateType: "Leche",
    filling: "Gelée",
    tempMelt: "45-48°C",
    tempCool: "27-28°C",
    tempWork: "30°C",
    crystHours: "12h @ 16°C",
    difficulty: "Intermedio",
    pips: "••",
    aw: 0.72,
    shellThickness: "0.8 mm",
    ingredients: [
      "220g Cobertura Leche",
      "80g Puré concentrado mandarina siciliana",
      "70g Pasta pura de almendra Marcona",
      "2g Pectina cítrica"
    ],
    steps: [
      "Encamisar el molde corona.",
      "Cocer el geleé de mandarina a punto de hebra floja.",
      "Dosificar primero la crema de almendra y luego la gota cítrica.",
      "Sellar con cobertura de leche."
    ],
    tip: "La almendra Marcona otorga un cuerpo graso que arropa la vivacidad de la mandarina."
  },
  {
    id: 29,
    title: "Bombón Cúbico de Coco Tostado y Ron Blanco",
    chapter: 3,
    chapterName: "Tabletas Rellenas y Figuras Huecas",
    mold: "Policarbonato Cubo Pequeño",
    moldType: "Clásico",
    chocolate: "Blanco 34%",
    chocolateType: "Blanco",
    filling: "Ganache",
    tempMelt: "42-45°C",
    tempCool: "26-27°C",
    tempWork: "28.5°C",
    crystHours: "14h @ 16°C",
    difficulty: "Iniciación",
    pips: "•",
    aw: 0.69,
    shellThickness: "0.8 mm",
    ingredients: [
      "220g Cobertura Blanca",
      "80g Leche de coco 85% extracto",
      "20g Coco tostado finísimo",
      "20ml Ron agrícola blanco"
    ],
    steps: [
      "Emulsionar la leche de coco tibia con el chocolate blanco.",
      "Añadir el ron y el coco dorado.",
      "Encamisar los cubos en chocolate blanco inmaculado.",
      "Dosificar a 27°C y cerrar la base."
    ],
    tip: "Tostar el coco a 150°C durante 12 minutos para activar los aceites esenciales aromáticos."
  },
  {
    id: 30,
    title: "Mini Lingote de Trufa Negra de Invierno y Chocolate 75%",
    chapter: 3,
    chapterName: "Tabletas Rellenas y Figuras Huecas",
    mold: "Policarbonato Lingote Micro",
    moldType: "Clásico",
    chocolate: "Negro 70%",
    chocolateType: "Negro",
    filling: "Ganache",
    tempMelt: "50-55°C",
    tempCool: "28-29°C",
    tempWork: "32°C",
    crystHours: "16h @ 16°C",
    difficulty: "Maestro Chocolatero",
    pips: "•••",
    aw: 0.67,
    shellThickness: "0.75 mm",
    ingredients: [
      "220g Cobertura Negra 75% Tanzania",
      "100g Nata líquida infusionada con 8g Tuber melanosporum fresca",
      "25g Miel",
      "30g Mantequilla trufada"
    ],
    steps: [
      "Rallar la trufa fresca dentro de la nata y dejar madurar 48 horas hermética.",
      "Colar por estameña y confeccionar ganache untuosa a 35°C.",
      "Encamisar lingotes con perfil fino de chocolate negro potente.",
      "Rellenar y sellar al día siguiente."
    ],
    tip: "La trufa negra fresca posee afinidad natural con las notas tánicas y maderosas del cacao de Tanzania."
  },

  // 31 to 40: Rellenos Especiales de Licor, Gelées y Frutas
  {
    id: 31,
    title: "Bombón Líquido de Kirsch con Cereza Amarena",
    chapter: 4,
    chapterName: "Rellenos de Licor, Gelées y Frutas",
    mold: "Policarbonato Magnético Domo Profundo",
    moldType: "Magnético",
    chocolate: "Negro 70%",
    chocolateType: "Negro",
    filling: "Licor",
    tempMelt: "50-52°C",
    tempCool: "28-29°C",
    tempWork: "31.5°C",
    crystHours: "24h @ 16°C",
    difficulty: "Maestro Chocolatero",
    pips: "•••",
    aw: 0.70,
    shellThickness: "1.8 mm",
    ingredients: [
      "250g Cobertura Negra 70%",
      "80ml Kirschwasser destilado 40°",
      "120g Jarabe de azúcar a 68° Brix",
      "28 Cerezas amarenas confitadas"
    ],
    steps: [
      "Crear una camisa gruesa (2mm) y sellar microporos con una segunda pasada ligera.",
      "Colocar una pequeña cereza amarena en cada celda.",
      "Mezclar el kirsch con el jarabe saturado a 20°C.",
      "Dosificar el líquido con embudo dosificador.",
      "Obturar con técnica de sello caliente indirecto."
    ],
    tip: "El jarabe de azúcar saturado formará con las semanas una microcorteza interna cristalina tradicional."
  },
  {
    id: 32,
    title: "Diamante de Whisky Ahumado y Ganache Intensa",
    chapter: 4,
    chapterName: "Rellenos de Licor, Gelées y Frutas",
    mold: "Policarbonato Magnético Diamante",
    moldType: "Magnético",
    chocolate: "Negro 70%",
    chocolateType: "Negro",
    filling: "Licor",
    tempMelt: "50-55°C",
    tempCool: "28-29°C",
    tempWork: "31.8°C",
    crystHours: "14h @ 16°C",
    difficulty: "Intermedio",
    pips: "••",
    aw: 0.65,
    shellThickness: "0.8 mm",
    ingredients: [
      "220g Cobertura Negra 72%",
      "80g Nata",
      "35ml Whisky Islay single malt de turba",
      "25g Mantequilla"
    ],
    steps: [
      "Hacer ganache clásica.",
      "Añadir el whisky turbado a 32°C para preservar los fenoles ahumados.",
      "Encamisar diamante con chocolate negro de alto brillo.",
      "Dosificar y dejar formar película superficial antes de cerrar."
    ],
    tip: "Los whiskies de la isla de Islay aportan notas marinas y ahumadas sublimes."
  },
  {
    id: 33,
    title: "Gota de Cointreau y Naranja Confitada",
    chapter: 4,
    chapterName: "Rellenos de Licor, Gelées y Frutas",
    mold: "Policarbonato Gota Lacrimosa",
    moldType: "Clásico",
    chocolate: "Negro 70%",
    chocolateType: "Negro",
    filling: "Licor",
    tempMelt: "50-52°C",
    tempCool: "28-29°C",
    tempWork: "31.5°C",
    crystHours: "12h @ 16°C",
    difficulty: "Iniciación",
    pips: "•",
    aw: 0.68,
    shellThickness: "0.85 mm",
    ingredients: [
      "200g Cobertura Negra",
      "90g Pasta de piel de naranja confitada artesanal",
      "30ml Licor Cointreau o triple sec",
      "15g Glucosa"
    ],
    steps: [
      "Triturar las pieles confitadas con el licor hasta formar un puré brillante.",
      "Encamisar gotas en chocolate negro.",
      "Mangar el gel cítrico alcohólico.",
      "Sellar con cobertura atemperada."
    ],
    tip: "La combinación atemporal de naranja amarga y chocolate oscuro nunca defrauda."
  },
  {
    id: 34,
    title: "Cono de Limoncello Artesanal y Chocolate Blanco",
    chapter: 4,
    chapterName: "Rellenos de Licor, Gelées y Frutas",
    mold: "Policarbonato Cono Truncado",
    moldType: "Clásico",
    chocolate: "Blanco 34%",
    chocolateType: "Blanco",
    filling: "Licor",
    tempMelt: "42-45°C",
    tempCool: "26-27°C",
    tempWork: "28.5°C",
    crystHours: "14h @ 16°C",
    difficulty: "Intermedio",
    pips: "••",
    aw: 0.70,
    shellThickness: "0.85 mm",
    ingredients: [
      "220g Cobertura Blanca",
      "60g Nata",
      "30ml Limoncello de Sorrento",
      "Zeste de limón amarillo",
      "20g Mantequilla"
    ],
    steps: [
      "Confeccionar la ganache blanca.",
      "Integrar el limoncello frío gota a gota.",
      "Encamisar con chocolate blanco.",
      "Mangar el relleno a 26°C y cerrar la base."
    ],
    tip: "El alto contenido de manteca láctea suaviza la potencia etílica del limoncello."
  },
  {
    id: 35,
    title: "Bombón de Mezcal Joven con Sal de Gusano y Ganache 65%",
    chapter: 4,
    chapterName: "Rellenos de Licor, Gelées y Frutas",
    mold: "Policarbonato Semiesfera Maya",
    moldType: "Clásico",
    chocolate: "Negro 70%",
    chocolateType: "Negro",
    filling: "Licor",
    tempMelt: "50-52°C",
    tempCool: "28-29°C",
    tempWork: "31.5°C",
    crystHours: "16h @ 16°C",
    difficulty: "Maestro Chocolatero",
    pips: "•••",
    aw: 0.67,
    shellThickness: "0.8 mm",
    ingredients: [
      "220g Cobertura Negra 65% México",
      "85g Nata",
      "35ml Mezcal espadín artesanal",
      "2g Sal de gusano y chile de Oaxaca"
    ],
    steps: [
      "Espolvorear una pizca de sal de gusano en el fondo del molde.",
      "Encamisar con chocolate oscuro de notas herbales.",
      "Emulsionar la ganache y aromatizar con el mezcal a 30°C.",
      "Rellenar y sellar asegurando hermetismo."
    ],
    tip: "Las notas a maguey cocido y humo armonizan fascinantemente con el cacao autóctono mexicano."
  },
  {
    id: 36,
    title: "Bombón de Vino Oporto Reducido con Frutos Negros",
    chapter: 4,
    chapterName: "Rellenos de Licor, Gelées y Frutas",
    mold: "Policarbonato Barrilito",
    moldType: "Clásico",
    chocolate: "Negro 70%",
    chocolateType: "Negro",
    filling: "Gelée",
    tempMelt: "50-52°C",
    tempCool: "28-29°C",
    tempWork: "31.5°C",
    crystHours: "16h @ 16°C",
    difficulty: "Intermedio",
    pips: "••",
    aw: 0.72,
    shellThickness: "0.8 mm",
    ingredients: [
      "230g Cobertura Negra 70%",
      "150ml Vino Oporto Tawny 10 años",
      "60g Moras y grosellas trituradas",
      "3g Pectina"
    ],
    steps: [
      "Reducir el oporto con los frutos negros a fuego lento hasta textura sirope espeso.",
      "Gelificar ligeramente con la pectina.",
      "Encamisar barrilitos en cobertura negra profunda.",
      "Dosificar a 24°C y obturar."
    ],
    tip: "La madera noble y las notas pasificadas del Oporto elevan la fruta silvestre."
  },
  {
    id: 37,
    title: "Esfera de Champaña Rosé y Fresa Silvestre",
    chapter: 4,
    chapterName: "Rellenos de Licor, Gelées y Frutas",
    mold: "Policarbonato Esfera 26mm",
    moldType: "Clásico",
    chocolate: "Ruby RB2",
    chocolateType: "Ruby",
    filling: "Licor",
    tempMelt: "44-45°C",
    tempCool: "26-27°C",
    tempWork: "29.2°C",
    crystHours: "14h @ 16°C",
    difficulty: "Maestro Chocolatero",
    pips: "•••",
    aw: 0.73,
    shellThickness: "0.85 mm",
    ingredients: [
      "220g Cobertura Ruby",
      "50ml Champagne Rosé brut",
      "60g Puré concentrado de fresas silvestres",
      "40g Manteca de cacao"
    ],
    steps: [
      "Cocer ligeramente el puré de fresa y desglasar con la champaña fría.",
      "Unir con chocolate Ruby fundido a 32°C.",
      "Encamisar esferas Ruby con brillo de diamante.",
      "Dosificar a 27°C y cerrar la base con soplete templador."
    ],
    tip: "Un bombón festivo por antonomasia de coloración rosa natural sin colorantes artificiales."
  },
  {
    id: 38,
    title: "Media Esfera de Calvados y Puré de Manzana Asada",
    chapter: 4,
    chapterName: "Rellenos de Licor, Gelées y Frutas",
    mold: "Policarbonato Semiesfera Clásica",
    moldType: "Clásico",
    chocolate: "Con Leche 38%",
    chocolateType: "Leche",
    filling: "Caramelo",
    tempMelt: "45-48°C",
    tempCool: "27-28°C",
    tempWork: "30°C",
    crystHours: "12h @ 16°C",
    difficulty: "Intermedio",
    pips: "••",
    aw: 0.69,
    shellThickness: "0.8 mm",
    ingredients: [
      "210g Cobertura Leche",
      "100g Manzana reineta asada y tamizada",
      "25ml Destilado de Calvados de Normandía",
      "30g Mantequilla de Bretaña"
    ],
    steps: [
      "Mezclar el puré de manzana tibia con la mantequilla y el licor Calvados.",
      "Encamisar en cobertura con leche caramelizada.",
      "Rellenar la cavidad con precisión.",
      "Sellar con raspado doble."
    ],
    tip: "El destilado de manzana madura aporta una calidez aromática única al paladar."
  },
  {
    id: 39,
    title: "Bombón de Vermut Rojo y Piel de Naranja Amarga",
    chapter: 4,
    chapterName: "Rellenos de Licor, Gelées y Frutas",
    mold: "Policarbonato Magnético Disco",
    moldType: "Magnético",
    chocolate: "Negro 70%",
    chocolateType: "Negro",
    filling: "Licor",
    tempMelt: "50-52°C",
    tempCool: "28-29°C",
    tempWork: "31.5°C",
    crystHours: "14h @ 16°C",
    difficulty: "Intermedio",
    pips: "••",
    aw: 0.68,
    shellThickness: "0.8 mm",
    ingredients: [
      "220g Cobertura Negra 70%",
      "70g Nata",
      "35ml Vermut rojo reserva artesano",
      "Ralladura naranja amarga amarga"
    ],
    steps: [
      "Infusionar los botánicos del vermut y la piel de naranja.",
      "Crear emulsión cremosa.",
      "Encamisar en chocolate negro brillante.",
      "Dosificar a 28°C y sellar."
    ],
    tip: "El ajenjo y las hierbas alpinas del vermut desengrasan el cacao al instante."
  },
  {
    id: 40,
    title: "Lingote de Baileys Artesanal y Café Moka",
    chapter: 4,
    chapterName: "Rellenos de Licor, Gelées y Frutas",
    mold: "Policarbonato Lingote Clásico",
    moldType: "Clásico",
    chocolate: "Con Leche 38%",
    chocolateType: "Leche",
    filling: "Ganache",
    tempMelt: "45-48°C",
    tempCool: "27-28°C",
    tempWork: "30°C",
    crystHours: "12h @ 16°C",
    difficulty: "Iniciación",
    pips: "•",
    aw: 0.67,
    shellThickness: "0.8 mm",
    ingredients: [
      "220g Cobertura Leche",
      "60g Crema de whisky irlandés",
      "25g Espresso denso concentrado",
      "20g Mantequilla pomada"
    ],
    steps: [
      "Realizar ganache emulsionando café con chocolate con leche a 35°C.",
      "Integrar la crema de whisky fría y homogeneizar.",
      "Encamisar lingotes.",
      "Dosificar y sellar."
    ],
    tip: "La fórmula favorita para acompañar servicios de café de especialidad."
  },

  // 41 to 50: Creaciones de Autor y Alta Chocolatería
  {
    id: 41,
    title: "Bombón de Tahini Tostado, Miel y Sal Marina",
    chapter: 5,
    chapterName: "Creaciones de Autor y Alta Chocolatería",
    mold: "Policarbonato Cúpula Arábiga",
    moldType: "Clásico",
    chocolate: "Con Leche 38%",
    chocolateType: "Leche",
    filling: "Praliné",
    tempMelt: "45-48°C",
    tempCool: "27-28°C",
    tempWork: "29.8°C",
    crystHours: "16h @ 16°C",
    difficulty: "Intermedio",
    pips: "••",
    aw: 0.59,
    shellThickness: "0.85 mm",
    ingredients: [
      "200g Cobertura Leche",
      "120g Tahini de sésamo tostado a la piedra",
      "40g Miel de azahar cruda",
      "3g Sal marina gruesa"
    ],
    steps: [
      "Integrar a mano el tahini puro con la miel hasta textura plástica sedosa.",
      "Encamisar en chocolate con leche cremoso.",
      "Mangar el relleno y coronar cada cavidad con 2 escamas de sal.",
      "Cerrar la base."
    ],
    tip: "El amargor vegetal del sésamo tostado corta la dulzura de la miel láctea."
  },
  {
    id: 42,
    title: "Bombón Botánico de Enebro, Cardamomo y Ganache Blanca",
    chapter: 5,
    chapterName: "Creaciones de Autor y Alta Chocolatería",
    mold: "Policarbonato Magnético Faceta Botánica",
    moldType: "Magnético",
    chocolate: "Blanco 34%",
    chocolateType: "Blanco",
    filling: "Ganache",
    tempMelt: "42-45°C",
    tempCool: "26-27°C",
    tempWork: "28.5°C",
    crystHours: "16h @ 16°C",
    difficulty: "Maestro Chocolatero",
    pips: "•••",
    aw: 0.69,
    shellThickness: "0.8 mm",
    ingredients: [
      "220g Cobertura Blanca",
      "90g Nata",
      "6 Bayas de enebro machacadas",
      "2 Cápsulas de cardamomo verde",
      "20ml Ginebra seca"
    ],
    steps: [
      "Infusionar los botánicos 12 horas en nata fría.",
      "Colar y calentar a 50°C; volcar sobre el chocolate blanco.",
      "Agregar la ginebra a 30°C y emulsionar.",
      "Encamisar el molde facetado y rellenar."
    ],
    tip: "Una recreación molecular y golosa de un Gin-Tonic seco de alta coctelería."
  },
  {
    id: 43,
    title: "Faceta de Trufa Blanca y Miel de Acacia en Chocolate Gold",
    chapter: 5,
    chapterName: "Creaciones de Autor y Alta Chocolatería",
    mold: "Policarbonato Prisma Octogonal",
    moldType: "Clásico",
    chocolate: "Gold Caramelo",
    chocolateType: "Gold",
    filling: "Ganache",
    tempMelt: "42-45°C",
    tempCool: "26-27°C",
    tempWork: "29.5°C",
    crystHours: "18h @ 15°C",
    difficulty: "Maestro Chocolatero",
    pips: "•••",
    aw: 0.67,
    shellThickness: "0.8 mm",
    ingredients: [
      "240g Cobertura Gold",
      "80g Nata pura de granja",
      "3g Trufa blanca de Alba (Tuber magnatum)",
      "30g Miel de acacia"
    ],
    steps: [
      "Laminar la trufa blanca en la nata caliente y sellar herméticamente.",
      "Emulsionar con la cobertura Gold rica en notas de caramelo tostado.",
      "Encamisar el molde prismático.",
      "Rellenar y dejar cristalizar lentamente."
    ],
    tip: "La trufa blanca de Alba es extremadamente etérea; consúmase en los primeros 7 días."
  },
  {
    id: 44,
    title: "Domo de Maracuyá, Plátano Flambeado y Caramelo",
    chapter: 5,
    chapterName: "Creaciones de Autor y Alta Chocolatería",
    mold: "Policarbonato Domo 30mm",
    moldType: "Clásico",
    chocolate: "Negro 70%",
    chocolateType: "Negro",
    filling: "Caramelo",
    tempMelt: "50-52°C",
    tempCool: "28-29°C",
    tempWork: "31.5°C",
    crystHours: "14h @ 16°C",
    difficulty: "Intermedio",
    pips: "••",
    aw: 0.70,
    shellThickness: "0.8 mm",
    ingredients: [
      "220g Cobertura Negra",
      "80g Puré plátano flambeado con ron y canela",
      "40g Puré de maracuyá ácido",
      "60g Azúcar rubio para caramelo"
    ],
    steps: [
      "Caramelizar el plátano y desglasar con maracuyá logrando compota untuosa.",
      "Encamisar en chocolate negro fino.",
      "Verter una capa de caramelo y sellar.",
      "Desmoldar tras cristalización total."
    ],
    tip: "La acidez cortante del maracuyá equilibra la densidad dulce del plátano cocinado."
  },
  {
    id: 45,
    title: "Bombón Crujiente de Kéfir Liofilizado y Té Jazmín",
    chapter: 5,
    chapterName: "Creaciones de Autor y Alta Chocolatería",
    mold: "Policarbonato Magnético Flor",
    moldType: "Magnético",
    chocolate: "Blanco 34%",
    chocolateType: "Blanco",
    filling: "Ganache",
    tempMelt: "42-45°C",
    tempCool: "26-27°C",
    tempWork: "28.5°C",
    crystHours: "14h @ 16°C",
    difficulty: "Maestro Chocolatero",
    pips: "•••",
    aw: 0.65,
    shellThickness: "0.8 mm",
    ingredients: [
      "200g Cobertura Blanca",
      "80g Nata con flores de té jazmín",
      "20g Kéfir lácteo liofilizado en polvo",
      "15g Manteca de cacao crujiente"
    ],
    steps: [
      "Pintar pétalos con manteca blanca marfil y amarillo pálido.",
      "Encamisar con chocolate blanco.",
      "Hacer ganache aromática de jazmín e integrar el polvo crujiente de kéfir a 25°C.",
      "Rellenar y obturar."
    ],
    tip: "El kéfir aporta notas fermentadas lácticas innovadoras muy apreciadas en vanguardia."
  },
  {
    id: 46,
    title: "Tableta Geométrica de Aceite de Oliva Virgen Extra y Sal",
    chapter: 5,
    chapterName: "Creaciones de Autor y Alta Chocolatería",
    mold: "Molde Tableta Arquitectónica",
    moldType: "Tableta",
    chocolate: "Negro 70%",
    chocolateType: "Negro",
    filling: "Ganache",
    tempMelt: "50-52°C",
    tempCool: "28-29°C",
    tempWork: "31.5°C",
    crystHours: "16h @ 16°C",
    difficulty: "Intermedio",
    pips: "••",
    aw: 0.52,
    shellThickness: "1.2 mm",
    ingredients: [
      "280g Cobertura Negra 70% Picual",
      "70ml Aceite de Oliva Virgen Extra cosecha temprana (AOVE)",
      "30g Manteca de cacao pura",
      "Flor de sal"
    ],
    steps: [
      "Encamisar la tableta arquitectónica.",
      "Emulsionar a 32°C el AOVE lentamente sobre el chocolate negro hasta lograr una ganache líquida aceitosa homogénea.",
      "Dosificar a temperatura ambiente y cristalizar.",
      "Cerrar con una fina película de cobertura negra."
    ],
    tip: "El AOVE temprano monovarietal Picual ofrece aromas a tomatera y hierba recién cortada incomparables."
  },
  {
    id: 47,
    title: "Pirámide de Azafrán, Naranja y Chocolate Negro 72%",
    chapter: 5,
    chapterName: "Creaciones de Autor y Alta Chocolatería",
    mold: "Policarbonato Pirámide Egipcia",
    moldType: "Clásico",
    chocolate: "Negro 70%",
    chocolateType: "Negro",
    filling: "Ganache",
    tempMelt: "50-55°C",
    tempCool: "28-29°C",
    tempWork: "31.8°C",
    crystHours: "14h @ 16°C",
    difficulty: "Maestro Chocolatero",
    pips: "•••",
    aw: 0.68,
    shellThickness: "0.8 mm",
    ingredients: [
      "220g Cobertura Negra 72%",
      "90g Nata",
      "0.2g Hebras de azafrán puro DO La Mancha",
      "Zeste de naranja dulce",
      "25g Miel"
    ],
    steps: [
      "Macerar el azafrán en la nata caliente durante 1 hora hasta tinte dorado.",
      "Formar la ganache y encamisar las pirámides asegurando vértices impolutos.",
      "Dosificar el relleno aromático a 28.5°C.",
      "Sellar con doble rasqueta."
    ],
    tip: "El azafrán noble no requiere cocción prolongada para soltar su picrocrocina y safranal característicos."
  },
  {
    id: 48,
    title: "Bombón de Té Chai Especiado con Crujiente de Canela",
    chapter: 5,
    chapterName: "Creaciones de Autor y Alta Chocolatería",
    mold: "Policarbonato Cojín Oriental",
    moldType: "Clásico",
    chocolate: "Con Leche 38%",
    chocolateType: "Leche",
    filling: "Ganache",
    tempMelt: "45-48°C",
    tempCool: "27-28°C",
    tempWork: "30°C",
    crystHours: "12h @ 16°C",
    difficulty: "Iniciación",
    pips: "•",
    aw: 0.65,
    shellThickness: "0.85 mm",
    ingredients: [
      "220g Cobertura Leche",
      "90g Nata infusionada con canela de Ceilán, jengibre, clavo y pimienta",
      "30g Pailleté feuilletine con canela"
    ],
    steps: [
      "Infusionar la mezcla de especias chai en la nata.",
      "Colar y emulsionar sobre el chocolate con leche.",
      "Añadir el crujiente en la base del bombón.",
      "Encamisar, rellenar y sellar."
    ],
    tip: "Aromatización reconfortante con excelente persistencia retronasal."
  },
  {
    id: 49,
    title: "Bombón de Sésamo Negro y Ciruela Japonesa Umeboshi",
    chapter: 5,
    chapterName: "Creaciones de Autor y Alta Chocolatería",
    mold: "Policarbonato Piedra Zen",
    moldType: "Clásico",
    chocolate: "Negro 70%",
    chocolateType: "Negro",
    filling: "Gelée",
    tempMelt: "50-52°C",
    tempCool: "28-29°C",
    tempWork: "31.5°C",
    crystHours: "16h @ 16°C",
    difficulty: "Maestro Chocolatero",
    pips: "•••",
    aw: 0.71,
    shellThickness: "0.8 mm",
    ingredients: [
      "220g Cobertura Negra",
      "90g Pasta pura de sésamo negro tostado",
      "40g Pulpa ácida y salada de ciruela umeboshi",
      "30g Mantequilla de cacao"
    ],
    steps: [
      "Pintar un trazo caligráfico negro mate con pincel de bambú.",
      "Encamisar en chocolate negro fino.",
      "Mangar una fina perla de pasta de umeboshi y completar con praliné de sésamo negro.",
      "Sellar y reposar a 16°C."
    ],
    tip: "La ciruela umeboshi introduce una dimensión umami salina que revoluciona el cacao."
  },
  {
    id: 50,
    title: "Lingote Imperial de Oro Comestible, Vainilla de Tahití y Porcelana Criollo",
    chapter: 5,
    chapterName: "Creaciones de Autor y Alta Chocolatería",
    mold: "Policarbonato Magnético Lingote Imperial",
    moldType: "Magnético",
    chocolate: "Negro 70%",
    chocolateType: "Negro",
    filling: "Ganache",
    tempMelt: "50-52°C",
    tempCool: "28-29°C",
    tempWork: "31.5°C",
    crystHours: "24h @ 15°C",
    difficulty: "Maestro Chocolatero",
    pips: "•••",
    aw: 0.65,
    shellThickness: "0.7 mm",
    ingredients: [
      "250g Cobertura Cacao Criollo Porcelana de Venezuela 70%",
      "90g Nata con 1 vaina Vainilla de Tahití grand cru",
      "30g Azúcar invertido",
      "Hojas de oro puro 24 quilates"
    ],
    steps: [
      "Aplicar con cuidado una hoja de oro puro en el centro de la cavidad magnética.",
      "Realizar el atemperado más riguroso del cacao criollo (31.5°C) respetando la ausencia de cizalla excesiva.",
      "Encamisar para obtener una camisa de 1mm de sonido cristalino incomparable.",
      "Emulsionar la ganache aromática con vainilla de Tahití rica en notas anisadas y florales.",
      "Dosificar a 28°C, reposar 24h y sellar con doble rasqueta caliente."
    ],
    tip: "La obra cumbre del recetario: el cacao Criollo Porcelana aporta una acidez de frutos secos y flores sin rastro de astringencia amarga."
  }
];
