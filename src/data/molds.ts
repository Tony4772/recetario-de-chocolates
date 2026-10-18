export interface MoldSpec {
  id: string;
  code: string;
  name: string;
  type: "Clásico" | "Magnético" | "3D" | "Tableta";
  cavities: number;
  totalWeight: number; // in grams
  shellWeight: number;
  fillingWeight: number;
  cacaoButterShell: number;
  dimensions: string;
  thicknessMm: string;
  desc: string;
  material: string;
  category: string;
  demoldTech: string;
  cleaningGuide: string;
}

export const MOLD_CATALOG: Record<string, MoldSpec> = {
  cupula: {
    id: "cupula",
    code: "CW1420",
    name: "Cúpula Clásica",
    type: "Clásico",
    cavities: 24,
    totalWeight: 10.0,
    shellWeight: 4.2,
    fillingWeight: 5.8,
    cacaoButterShell: 0.31,
    dimensions: "Ø28 mm · h 16 mm",
    thicknessMm: "0.8",
    desc: "CW1420 Cúpula Esférica (24 cavidades)",
    material: "Policarbonato virgen de grado alimentario",
    category: "Esferas y Domos",
    demoldTech: "Golpe rítmico en canto lateral de mesa tras 15-20 min a 14°C.",
    cleaningGuide: "Algodón 100% hidrófilo y alcohol 96°. Nunca sumergir en agua jabonosa abrasiva."
  },
  semiesfera: {
    id: "semiesfera",
    code: "CW1032",
    name: "Semiesfera",
    type: "Clásico",
    cavities: 28,
    totalWeight: 15.0,
    shellWeight: 6.0,
    fillingWeight: 9.0,
    cacaoButterShell: 0.45,
    dimensions: "Ø32 mm · h 19 mm",
    thicknessMm: "0.85",
    desc: "CW1032 Semiesfera (28 cavidades)",
    material: "Policarbonato rígido pulido espejo",
    category: "Esferas y Domos",
    demoldTech: "Desmolde autónomo con contracción > 2%.",
    cleaningGuide: "Frotado concéntrico con algodón hasta generar calor por fricción antiestática."
  },
  lingote: {
    id: "lingote",
    code: "CW1908",
    name: "Lingote Geométrico",
    type: "Clásico",
    cavities: 32,
    totalWeight: 12.0,
    shellWeight: 4.5,
    fillingWeight: 7.5,
    cacaoButterShell: 0.35,
    dimensions: "38×18 mm · h 14 mm",
    thicknessMm: "0.8",
    desc: "CW1908 Lingote Geométrico (32 cavidades)",
    material: "Policarbonato reforzado de alta inercia",
    category: "Geométricos y Prismas",
    demoldTech: "Invertir sobre papel vegetal y golpear suavemente con el mango de la espátula.",
    cleaningGuide: "Inspeccionar las esquinas rectas con torunda de algodón seco para evitar restos grasos."
  },
  cubo: {
    id: "cubo",
    code: "CW1115",
    name: "Cubo Minimalista",
    type: "Clásico",
    cavities: 24,
    totalWeight: 9.0,
    shellWeight: 3.2,
    fillingWeight: 5.8,
    cacaoButterShell: 0.25,
    dimensions: "22×22 mm · h 20 mm",
    thicknessMm: "0.75",
    desc: "CW1115 Cubo Minimalista (24 cavidades)",
    material: "Policarbonato micro-pulido",
    category: "Geométricos y Prismas",
    demoldTech: "Desmolde por choque térmico en cava a 12°C.",
    cleaningGuide: "Secado escrupuloso con aire comprimido estéril o paño de microfibra sin hilachas."
  },
  diamante: {
    id: "diamante",
    code: "CW1614",
    name: "Diamante Facetado",
    type: "Magnético",
    cavities: 28,
    totalWeight: 11.0,
    shellWeight: 4.6,
    fillingWeight: 6.4,
    cacaoButterShell: 0.35,
    dimensions: "Ø29 mm · h 17 mm",
    thicknessMm: "0.8",
    desc: "CW1614 Diamante Facetado (28 cavidades)",
    material: "Policarbonato magnético con placa base de acero",
    category: "Faceteados Magnéticos",
    demoldTech: "Retirar la placa metálica y flexionar suavemente o vibrar.",
    cleaningGuide: "Separar la base ferrosa para limpieza en seco independiente."
  },
  tableta: {
    id: "tableta",
    code: "CW2380",
    name: "Tableta Profunda Rellena",
    type: "Tableta",
    cavities: 3,
    totalWeight: 100.0,
    shellWeight: 45.0,
    fillingWeight: 55.0,
    cacaoButterShell: 3.0,
    dimensions: "150×75 mm · h 12 mm",
    thicknessMm: "1.5",
    desc: "CW2380 Tableta Degustación Rellena (3 cavidades)",
    material: "Policarbonato macizo de alta resistencia",
    category: "Tabletas y Barras",
    demoldTech: "Torsión milimétrica asistida en extremos de la placa.",
    cleaningGuide: "Pulido longitudinal con regla envuelta en bayeta de seda o microfibra."
  },
  figura3d: {
    id: "figura3d",
    code: "CW3050",
    name: "Mazorca de Cacao / Huevo 3D Hueco",
    type: "3D",
    cavities: 2,
    totalWeight: 200.0,
    shellWeight: 200.0,
    fillingWeight: 0.0,
    cacaoButterShell: 12.0,
    dimensions: "140×85 mm · 3D Doble valva",
    thicknessMm: "2.5",
    desc: "CW3050 Figura Escultural Hueca",
    material: "Doble valva con clips de fijación de acero",
    category: "Piezas 3D y Esculturas",
    demoldTech: "Apertura de clips tras retracción sonora; unión por placa templada a 45°C.",
    cleaningGuide: "Limpiar ambas valvas simétricas con alcohol y conservar unidas con film anti-polvo."
  }
};
