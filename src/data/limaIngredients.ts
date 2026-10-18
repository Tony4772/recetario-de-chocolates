export interface LocalSupplyPoint {
  zone: string;
  name: string;
  address: string;
  specialty: string;
  notes: string;
}

export interface PeruvianChocBrand {
  brand: string;
  variety: string;
  cacaoPct: string;
  origin: string;
  meltTemp: string;
  coolTemp: string;
  workTemp: string;
  availabilityInLima: string;
}

export const PERUVIAN_CHOC_BRANDS: PeruvianChocBrand[] = [
  {
    brand: "Cacaosuyo / Shatell / Bakau (Alta Gama Bean-to-Bar)",
    variety: "Piura Blanco / Chuncho Cusco 70%",
    cacaoPct: "70%",
    origin: "Piura / Cusco",
    meltTemp: "50-52°C",
    coolTemp: "28-29°C",
    workTemp: "31.5°C",
    availabilityInLima: "Tiendas especializadas gourmet (Miraflores, San Isidro), Wong, ferias de cacao (Salón del Cacao y Chocolate) y distribuidores directos.",
  },
  {
    brand: "Negusa Profesional (Línea Bitter)",
    variety: "Gotas Cobertura Bitter 55% y 70%",
    cacaoPct: "55-70%",
    origin: "Cacao nacional de San Martín y Junín",
    meltTemp: "45-48°C",
    coolTemp: "27-28°C",
    workTemp: "30-31°C",
    availabilityInLima: "Máxima disponibilidad: Mercado Central (Jr. Huallaga), Makro, Fadicor, D'Pastel y tiendas de repostería en todos los distritos de Lima.",
  },
  {
    brand: "Belcolade Origen Perú (Puratos)",
    variety: "Cacao Selección Perú 64-71%",
    cacaoPct: "64-71%",
    origin: "San Martín / Tingo María",
    meltTemp: "48-50°C",
    coolTemp: "28-29°C",
    workTemp: "31°C",
    availabilityInLima: "Distribuidores de panadería y chocolatería fina (Puratos Perú, Fadicor, D'Pastel, distribuidoras de Lince y Cercado).",
  },
  {
    brand: "Cordillera / Carozzi Perú",
    variety: "Línea Profesional Cacao Fino de Aroma",
    cacaoPct: "58-65%",
    origin: "Valles interandinos y selva alta",
    meltTemp: "46-48°C",
    coolTemp: "27-28°C",
    workTemp: "30.5°C",
    availabilityInLima: "Tiendas de insumos de repostería en Lima Norte, Sur, Este y Centro (Mercado de Magdalena, Mercado Central).",
  },
  {
    brand: "La Ibérica (Arequipa / Tiendas en Lima)",
    variety: "Chocolates Fondant y Coberturas Bitter en Barra",
    cacaoPct: "52-70%",
    origin: "Valle de La Convención, Cusco (Chuncho)",
    meltTemp: "48-50°C",
    coolTemp: "28-29°C",
    workTemp: "31°C",
    availabilityInLima: "Tiendas propias en Jockey Plaza, San Miguel, Miraflores, Real Plaza Salaverry, Wong y Vivanda.",
  },
];

export const LIMA_SUPPLY_POINTS: LocalSupplyPoint[] = [
  {
    zone: "Lima Centro (Epicentro Mayorista de Repostería)",
    name: "Jirón Huallaga y Jr. Andahuaylas (Alrededores del Mercado Central)",
    address: "Jr. Huallaga cdras. 6, 7 y 8 / Jr. Ucayali / Jr. Andahuaylas, Cercado de Lima",
    specialty: "Moldes de policarbonato profesionales (Chocolate World y genéricos), coberturas en gotas o bloques por kilo (Negusa, Belcolade, Cordillera), manteca de cacao pura desodorizada, glucosa en balde, sorbitol, pectinas, termómetros infrarrojos, cajas y cápsulas para bombones.",
    notes: "Los mejores precios de Lima por mayor y menor. Visitar las galerías comerciales dedicadas a la repostería.",
  },
  {
    zone: "Lima Sur / Miraflores",
    name: "Mercado N° 1 de Surquillo",
    address: "Lizardo Montero / Paseo de la República, Surquillo (alt. estación Ricardo Palma del Metropolitano)",
    specialty: "Frutos secos frescos al peso de primerísima calidad (castañas amazónicas de Madre de Dios, pecanas de Ica peladas y enteras), sal rosada de Maras, pulpas frescas de maracuyá, aguaymanto, lúcuma y mango.",
    notes: "Ideal para comprar frutos secos recién cosechados sin enranciar y frutas frescas para pulpas y mermeladas de relleno.",
  },
  {
    zone: "Tiendas Especializadas con Delivery",
    name: "Fadicor / D'Pastel / Dulces & Sabores",
    address: "Sedes en Lince (Av. Petit Thouars), Los Olivos, San Borja y San Juan de Lurigancho",
    specialty: "Pectina NH termo-reversible, glucosa de maíz pura, colorantes liposolubles para manteca de cacao, transfer serigrafiados para chocolate, moldes magnéticos con base de acero inox.",
    notes: "Cuentan con catálogo virtual y entrega por delivery a cualquier distrito de Lima Metropolitana.",
  },
  {
    zone: "Supermercados & Cadenas Mayoristas",
    name: "Makro / Wong / Vivanda",
    address: "Múltiples sedes en todo Lima Metropolitana",
    specialty: "Crema de leche UHT Laive o Gloria de 35% de materia grasa (indispensable para ganaches firmes), mantequilla sin sal de Cajamarca, glucosa comercial, azúcar refinada blanca.",
    notes: "Acceso inmediato y seguro a lácteos con la cadena de frío certificada.",
  },
];

/**
 * Key substitutions: Sorted from most specific multi-word phrase to shorter terms
 * to avoid partial substring anomalies.
 */
export const PERU_INGREDIENT_EQUIVALENTS: [string, string][] = [
  // European Chocolates -> Peruvian Couvertures
  ["Cobertura Negra 70% Guanaja", "Cobertura Negra 70% Cacao Nativo (Piura o Cusco / Negusa Bitter)"],
  ["Cobertura Negra 70% Araguani", "Cobertura Negra 70% Cacao San Martín o Negusa Bitter 70%"],
  ["Cobertura Negra 64% Manjari", "Cobertura Negra 64-65% Cacao Chuncho Cusco (La Ibérica / Cacaosuyo)"],
  ["Cobertura Blanca 35% Ivoire", "Cobertura Blanca Nacional 34% Manteca de Cacao (La Ibérica / Negusa / Belcolade)"],
  ["Guanaja", "Cacao Nativo 70% (Piura o Cusco) o Negusa Bitter"],
  ["Araguani", "Cacao 70% de San Martín o Ucayali"],
  ["Manjari", "Cacao Chuncho Cusco 64%"],
  ["Ivoire", "Cobertura Blanca Nacional 34% (La Ibérica / Belcolade / Negusa)"],
  ["Dulcey", "Cobertura Blanca horneada a 120°C (caramelizada)"],
  ["Opalys", "Cobertura Blanca 33% manteca pura"],

  // Salts & Mineral notes
  ["Flor de sal de Guérande", "Sal Rosada de Maras fina (Cusco)"],
  ["Sal de Guérande", "Sal Rosada de Maras (Cusco)"],

  // Nuts & Pralines -> Peruvian Nuts
  ["Praliné de avellana IGP Piamonte 60%", "Praliné de Pecanas de Ica tostadas 60% o Castaña Amazónica"],
  ["Praliné de avellana IGP Piamonte", "Praliné de Pecanas de Ica tostadas o Castaña Amazónica"],
  ["Praliné de avellana", "Praliné de Pecanas de Ica o pasta artesanal de maní tostado"],
  ["Avellanas enteras IGP Piamonte", "Pecanas enteras de Ica o Castañas Amazónicas de Madre de Dios"],
  ["Avellana IGP Piamonte", "Pecana de Ica o Castaña Amazónica"],
  ["Pasta pura de pistacho verde de Bronte DOP", "Pasta artesanal de pecanas tostadas o pasta pura de maní 100%"],
  ["Pasta pura de pistacho", "Pasta de pecanas tostadas de Ica o pasta de maní"],
  ["Pistachos verdes de Bronte DOP", "Pecanas de Ica troceadas o maní tostado artesanal"],
  ["Pasta pura de almendra Marcona", "Pasta de pecanas tostadas de Ica o pasta de almendra nacional"],
  ["Almendras Marcona", "Pecanas de Ica o almendras tostadas nacionales"],
  ["Nueces de macadamia", "Castañas amazónicas (nueces de Brasil) tostadas de Madre de Dios"],

  // Spices & Flavors
  ["Haba tonka rallada finamente", "Algarrobina pura de Piura o esencia natural de vainilla con canela de Oxapampa"],
  ["Haba tonka", "Algarrobina pura de Piura o vainilla natural de Oxapampa"],
  ["Té Matcha ceremonial de Kioto", "Café de especialidad de Villa Rica o maca tostada en polvo"],
  ["Té Matcha", "Café de especialidad de Villa Rica o maca tostada"],

  // Dairy & Fats
  ["Nata líquida 35% MG", "Crema de leche Laive o Gloria 35% MG (o crema fresca de establo pasteurizada)"],
  ["Mantequilla noisette tostada", "Mantequilla pura de Cajamarca dorada a fuego suave en sartén"],
  ["Mantequilla noisette", "Mantequilla pura de Cajamarca dorada a fuego suave en sartén"],

  // Fruits
  ["Puré de frambuesa fresca", "Pulpa reducida de maracuyá criollo fresco o aguaymanto colado"],
  ["Puré de frambuesa", "Pulpa de maracuyá criollo concentrada o aguaymanto colado"],
  ["Puré de mango", "Pulpa de Mango Kent maduro fresco licuado y reducido"],
  ["Pulpa de maracuyá", "Maracuyá criollo fresco colado y reducido"],
  ["Frambuesa liofilizada crujiente", "Aguaymanto deshidratado o nibs de cacao caramelizados"],
  ["Puré grosella y mora", "Pulpa de fresas de Huaral o aguaymanto colado"],
  ["Moras y grosellas trituradas", "Fresas de Huaral picadas o zarzamora silvestre"],
  ["Ciruela umeboshi", "Camu camu amazónico o pulpa ácida de carambola"],
  ["Jugo puro de Yuzu japonés", "Zumo fresco de limón sutil peruano con un toque de jugo de mandarina dulce"],

  // Liquors
  ["Kirschwasser destilado 40°", "Pisco Quebranta de Ica 42°"],
  ["Kirschwasser", "Pisco Quebranta"],
  ["Whisky Islay single malt de turba", "Pisco Mosto Verde o Cañazo artesanal añejado"],
  ["Crema de whisky irlandés", "Crema de Pisco artesanal o licor de cacao peruano"],
  ["Destilado de Calvados de Normandía", "Pisco Acholado macerado con manzana del valle de Cañete"],
  ["Licor Cointreau o triple sec", "Triple Sec comercial (Wong/Makro) o macerado de cáscaras de naranja en Pisco"],
  ["Grand Marnier", "Pisco Acholado macerado con naranja Huando y canela"],
];

/**
 * Intelligent helper to convert ingredient lists to easily sourceable Lima, Peru ingredients
 */
export function getLimaAdaptedIngredient(ing: string): string {
  let adapted = ing;
  for (const [foreign, peru] of PERU_INGREDIENT_EQUIVALENTS) {
    if (adapted.toLowerCase().includes(foreign.toLowerCase())) {
      const regex = new RegExp(escapeRegExp(foreign), "gi");
      adapted = adapted.replace(regex, peru);
    }
  }
  return adapted;
}

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
