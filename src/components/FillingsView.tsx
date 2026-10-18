import React, { useState, useMemo } from "react";
import { RECIPES_DATA, Recipe } from "../data/recipes";

interface FillingsViewProps {
  onSelectRecipe: (recipe: Recipe) => void;
  onOpenFullRecipe: (recipeId: number) => void;
}

interface FillingFamilyInfo {
  name: "Ganache" | "Praliné" | "Caramelo" | "Gelée" | "Gianduja" | "Licor";
  title: string;
  subtitle: string;
  awRange: string;
  optimalCastTemp: string;
  shelfLife: string;
  emulsionNotes: string;
  scientificRule: string;
}

const FILLING_FAMILIES: Record<string, FillingFamilyInfo> = {
  Ganache: {
    name: "Ganache",
    title: "Ganaches Emulsionadas (Agua en Aceite / Aceite en Agua)",
    subtitle: "Emulsión fina de cobertura y base acuosa (nata, puré de fruta, infusión)",
    awRange: "aw 0.72 - 0.82",
    optimalCastTemp: "28° - 29.5°C",
    shelfLife: "3 a 6 semanas (16°C, 60% HR)",
    emulsionNotes:
      "Formar un núcleo elástico y brillante batiendo desde el centro en círculos concéntricos. Afinar con túrmix de inmersión sin incorporar aire ni micro-burbujas.",
    scientificRule:
      "La temperatura de vertido nunca debe superar los 30°C para no desestabilizar los cristales Beta V de la camisa de chocolate.",
  },
  Praliné: {
    name: "Praliné",
    title: "Pralinés y Pastas de Frutos Secos Tostados",
    subtitle: "Caramelización en seco y molienda coloidal de avellana, almendra o pistacho",
    awRange: "aw 0.20 - 0.35",
    optimalCastTemp: "26° - 28°C",
    shelfLife: "6 a 12 meses (sistema anhidro)",
    emulsionNotes:
      "Al no contener agua libre, el praliné es microbiológicamente ultra-estable. Puede enriquecerse con manteca de cacao para estructurar el corte.",
    scientificRule:
      "Añadir entre un 10% y un 15% de chocolate atemperado al praliné puro antes de dosificar para asegurar cristalización homogénea y evitar exudación de aceites.",
  },
  Caramelo: {
    name: "Caramelo",
    title: "Caramelos Blandos y Toffees de Mantequilla",
    subtitle: "Cocción de sacarosa/glucosa desglasada con nata rica y mantequilla de calidad",
    awRange: "aw 0.60 - 0.68",
    optimalCastTemp: "27° - 29°C",
    shelfLife: "2 a 3 meses",
    emulsionNotes:
      "Cocinar el azúcar hasta el punto deseado (180-185°C para rubio profundo), desglasar con nata caliente y emulsionar con mantequilla fría a 40°C.",
    scientificRule:
      "El punto de desglasado define la viscosidad final: viscosidad media-baja facilita el sellado hermético sin micro-cavidades de aire.",
  },
  Gelée: {
    name: "Gelée",
    title: "Gelées de Frutas Ácidas y Pectinas",
    subtitle: "Concentrados de pulpa gelificados con pectina amarilla o pectina NH",
    awRange: "aw 0.75 - 0.85",
    optimalCastTemp: "26° - 28°C",
    shelfLife: "3 a 4 semanas",
    emulsionNotes:
      "Requiere acidez controlada (pH 3.2 - 3.5 con ácido cítrico) para disparar la red de gelificación de la pectina de alto metoxilo.",
    scientificRule:
      "Frecuentemente utilizado en interiores bicolores superpuestos con ganaches densas o pralinés crocantes.",
  },
  Gianduja: {
    name: "Gianduja",
    title: "Giandujas Tradicionales Piamontesas",
    subtitle: "Mezcla de avellana IGP refinada con cobertura de chocolate con leche o negro",
    awRange: "aw 0.25 - 0.38",
    optimalCastTemp: "25° - 27°C",
    shelfLife: "6 a 9 meses",
    emulsionNotes:
      "La grasa de la avellana (ácido oleico) tiene un punto de fusión muy bajo. La manteca de cacao proporciona el punto de chasquido necesario.",
    scientificRule:
      "Pre-cristalizar la gianduja a 26°C antes del dosificado en molde para prevenir el florecimiento de grasa grumosa.",
  },
  Licor: {
    name: "Licor",
    title: "Rellenos Líquidos con Alcohol y Destilados Nobles",
    subtitle: "Jarabe de azúcar sobresaturado con formación de costra o ganaches licorosas",
    awRange: "aw 0.65 - 0.75",
    optimalCastTemp: "24° - 26°C",
    shelfLife: "2 a 4 meses",
    emulsionNotes:
      "El etanol reduce la tensión superficial y actúa como conservante natural frente al desarrollo fúngico.",
    scientificRule:
      "En bombonería de costra, se vierte jarabe caliente a 105°C en cajas de almidón de maíz templado a 30°C.",
  },
};

export const FillingsView: React.FC<FillingsViewProps> = ({
  onSelectRecipe,
  onOpenFullRecipe,
}) => {
  const [selectedFamily, setSelectedFamily] = useState<
    "Ganache" | "Praliné" | "Caramelo" | "Gelée" | "Gianduja" | "Licor"
  >("Ganache");

  const currentInfo = FILLING_FAMILIES[selectedFamily];

  const matchingRecipes = useMemo(() => {
    return RECIPES_DATA.filter((r) => r.filling === selectedFamily);
  }, [selectedFamily]);

  return (
    <div className="w-full flex flex-col">
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 pt-8 pb-12 w-full">
        {/* Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f0edea] rounded-full mb-3 border border-[#d3c3be]/30">
              <span className="w-2 h-2 rounded-full bg-[#775a00]"></span>
              <span className="font-label-technical text-[10.5px] tracking-widest uppercase text-[#4f4541] font-bold">
                Fisicoquímica de Emulsiones y Actividad de Agua (Aw)
              </span>
            </div>
            <h1 className="font-headline-lg text-[32px] sm:text-[42px] font-serif text-[#1b1c1a] font-bold tracking-tight">
              Rellenos, Ganaches &amp; Emulsiones
            </h1>
            <p className="font-body-lg text-[15px] sm:text-[17px] text-[#4f4541] max-w-2xl mt-2 leading-relaxed">
              Formulaciones científicas para interiores de bombón: control de fase acuosa vs lípida,
              temperaturas seguras de dosificación para evitar fundir la camisa y optimización de vida útil.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="bg-[#f6f3f0] p-5 rounded-xl border border-[#d3c3be]/40 flex items-center gap-6 shrink-0 shadow-xs">
            <div>
              <div className="font-headline-sm text-[26px] font-serif font-bold text-[#1b1c1a]">
                6
              </div>
              <div className="font-label-technical text-[10px] text-[#817470] uppercase tracking-wider">
                Familias de Relleno
              </div>
            </div>
            <div className="w-px h-10 bg-[#d3c3be]/40"></div>
            <div>
              <div className="font-headline-sm text-[26px] font-serif font-bold text-[#775a00]">
                &lt; 30°C
              </div>
              <div className="font-label-technical text-[10px] text-[#817470] uppercase tracking-wider">
                Dosificación Segura
              </div>
            </div>
          </div>
        </div>

        {/* Family Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {(
            [
              "Ganache",
              "Praliné",
              "Caramelo",
              "Gelée",
              "Gianduja",
              "Licor",
            ] as const
          ).map((fam) => {
            const count = RECIPES_DATA.filter((r) => r.filling === fam).length;
            const isSelected = selectedFamily === fam;
            return (
              <button
                key={fam}
                onClick={() => setSelectedFamily(fam)}
                className={`p-3.5 rounded-xl border transition-all text-left cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#271812] text-white border-[#271812] shadow-sm ring-2 ring-[#271812]/10"
                    : "bg-white hover:bg-[#f6f3f0] text-[#1b1c1a] border-[#d3c3be]/40"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-serif font-bold text-[15px]">{fam}</span>
                  <span
                    className={`font-label-technical text-[10px] px-1.5 py-0.5 rounded ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-[#f0edea] text-[#817470]"
                    }`}
                  >
                    {count}
                  </span>
                </div>
                <span
                  className={`font-label-technical text-[9px] uppercase tracking-wider ${
                    isSelected ? "text-[#fed269]" : "text-[#817470]"
                  }`}
                >
                  {FILLING_FAMILIES[fam].awRange}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Family Details Bento */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#d3c3be]/45 shadow-sm mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#d3c3be]/30 mb-6">
            <div>
              <span className="font-label-technical text-[11px] text-[#775a00] uppercase tracking-widest font-bold block mb-1">
                Especificación Fisicoquímica
              </span>
              <h2 className="font-headline-sm text-[26px] font-serif font-bold text-[#1b1c1a]">
                {currentInfo.title}
              </h2>
              <p className="font-body-sm text-[14px] text-[#4f4541] mt-0.5">
                {currentInfo.subtitle}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-label-technical text-[11px] uppercase bg-[#fed269]/25 text-[#775a00] px-3 py-1.5 rounded-lg font-bold border border-[#fed269]/40">
                {currentInfo.awRange}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Bento Card 1 */}
            <div className="p-4 rounded-xl bg-[#f6f3f0] border border-[#d3c3be]/30">
              <span className="font-label-technical text-[10px] text-[#817470] uppercase block font-bold mb-1">
                Temperatura de Dosificación
              </span>
              <span className="font-serif font-bold text-[22px] text-[#ba1a1a]">
                {currentInfo.optimalCastTemp}
              </span>
              <p className="font-body-sm text-[12px] text-[#4f4541] mt-2 leading-relaxed">
                Por encima de este valor se funde la pared cristalizada de la cavidad,
                generando manchas grasas y pérdida de brillo.
              </p>
            </div>

            {/* Bento Card 2 */}
            <div className="p-4 rounded-xl bg-[#f6f3f0] border border-[#d3c3be]/30">
              <span className="font-label-technical text-[10px] text-[#817470] uppercase block font-bold mb-1">
                Conservación &amp; Vida Útil
              </span>
              <span className="font-serif font-bold text-[22px] text-[#775a00]">
                {currentInfo.shelfLife}
              </span>
              <p className="font-body-sm text-[12px] text-[#4f4541] mt-2 leading-relaxed">
                Condiciones de conservación óptimas: almacén a 15-18°C con humedad relativa &lt; 60%
                en cajas herméticas anti-olores.
              </p>
            </div>

            {/* Bento Card 3 */}
            <div className="p-4 rounded-xl bg-[#f6f3f0] border border-[#d3c3be]/30">
              <span className="font-label-technical text-[10px] text-[#817470] uppercase block font-bold mb-1">
                Regla de Oro Cristalográfica
              </span>
              <span className="font-serif font-bold text-[15px] text-[#1b1c1a] block mb-1">
                Cristalización Hermética
              </span>
              <p className="font-body-sm text-[12px] text-[#4f4541] leading-relaxed">
                {currentInfo.scientificRule}
              </p>
            </div>
          </div>

          {/* Emulsion Technique Tip */}
          <div className="p-4 rounded-xl bg-[#eae8e5] border border-[#d3c3be]/40 flex items-start gap-3">
            <span className="material-symbols-outlined text-[#775a00] text-[22px] mt-0.5 shrink-0">
              science
            </span>
            <div>
              <span className="font-label-technical text-[11px] uppercase tracking-wider text-[#1b1c1a] font-bold block mb-0.5">
                Protocolo de Emulsión en Obrador
              </span>
              <p className="font-body-sm text-[13px] text-[#4f4541] leading-relaxed">
                {currentInfo.emulsionNotes}
              </p>
            </div>
          </div>
        </div>

        {/* Recipes of this Family */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-headline-sm text-[22px] font-serif font-bold text-[#1b1c1a]">
              Recetas con Relleno de {selectedFamily} ({matchingRecipes.length})
            </h3>
            <span className="font-label-technical text-[11px] text-[#817470] uppercase">
              Formuladas para Policarbonato
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {matchingRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white p-5 rounded-xl border border-[#d3c3be]/35 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-label-technical text-[10px] text-[#775a00] font-bold uppercase tracking-wider">
                      Receta #{String(recipe.id).padStart(2, "0")}
                    </span>
                    <span className="font-label-technical text-[10px] text-[#817470] uppercase bg-[#f0edea] px-2 py-0.5 rounded">
                      {recipe.chocolate}
                    </span>
                  </div>

                  <h4 className="font-serif font-bold text-[17px] text-[#1b1c1a] group-hover:text-[#775a00] transition-colors mb-2 leading-snug">
                    {recipe.title}
                  </h4>

                  <p className="font-body-sm text-[12px] text-[#4f4541] line-clamp-2 mb-3">
                    {recipe.tip}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#d3c3be]/25 flex items-center justify-between">
                  <span className="font-label-technical text-[10px] text-[#817470] uppercase">
                    {recipe.moldType} • {recipe.difficulty}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onSelectRecipe(recipe)}
                      className="px-2.5 py-1 bg-[#f0edea] hover:bg-[#eae8e5] text-[#1b1c1a] rounded text-[11px] font-medium transition-colors cursor-pointer"
                      title="Vista rápida"
                    >
                      Resumen
                    </button>
                    <button
                      onClick={() => onOpenFullRecipe(recipe.id)}
                      className="px-2.5 py-1 bg-[#271812] hover:bg-[#31302f] text-white rounded text-[11px] font-medium transition-colors cursor-pointer"
                    >
                      Ficha
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
