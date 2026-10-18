import React, { useState, useMemo } from "react";
import { MOLD_CATALOG, MoldSpec } from "../data/molds";
import { RECIPES_DATA } from "../data/recipes";

interface MoldsViewProps {
  onSelectRecipeById: (recipeId: number) => void;
  onOpenDosimetryForMold?: (moldId: string) => void;
}

export const MoldsView: React.FC<MoldsViewProps> = ({
  onSelectRecipeById,
}) => {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [selectedMold, setSelectedMold] = useState<MoldSpec | null>(null);

  const moldsList = useMemo(() => Object.values(MOLD_CATALOG), []);

  const filteredMolds = useMemo(() => {
    return moldsList.filter((m) => {
      const matchType = selectedType === "all" || m.type === selectedType;
      const matchSearch =
        !search ||
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.code.toLowerCase().includes(search.toLowerCase()) ||
        m.category.toLowerCase().includes(search.toLowerCase()) ||
        m.desc.toLowerCase().includes(search.toLowerCase());
      return matchType && matchSearch;
    });
  }, [moldsList, selectedType, search]);

  const activeMold = selectedMold || filteredMolds[0] || moldsList[0];

  // Associated recipes for the active mold
  const relatedRecipes = useMemo(() => {
    if (!activeMold) return [];
    const moldWord = activeMold.name.split(" ")[0].toLowerCase();
    return RECIPES_DATA.filter(
      (r) =>
        r.mold.toLowerCase().includes(activeMold.name.toLowerCase()) ||
        r.moldType === activeMold.type ||
        r.mold.toLowerCase().includes(moldWord)
    ).slice(0, 6);
  }, [activeMold]);

  return (
    <div className="w-full flex flex-col">
      {/* Top Banner & Header */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 pt-8 pb-8 w-full">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f0edea] rounded-full mb-3 border border-[#d3c3be]/30">
              <span className="w-2 h-2 rounded-full bg-[#775a00]"></span>
              <span className="font-label-technical text-[10.5px] tracking-widest uppercase text-[#4f4541] font-bold">
                Arquitectura de Policarbonato Profesional
              </span>
            </div>
            <h1 className="font-headline-lg text-[32px] sm:text-[42px] font-serif text-[#1b1c1a] font-bold tracking-tight">
              Guía Técnica de Moldes
            </h1>
            <p className="font-body-lg text-[15px] sm:text-[17px] text-[#4f4541] max-w-2xl mt-2 leading-relaxed">
              Catálogo de placas de policarbonato virgen, moldes magnéticos con base de acero,
              piezas 3D y tabletas. Datos de contracción, gramajes milimétricos y técnicas de pulido.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="bg-[#f6f3f0] p-5 rounded-xl border border-[#d3c3be]/40 flex items-center gap-6 shrink-0 shadow-xs">
            <div>
              <div className="font-headline-sm text-[26px] font-serif font-bold text-[#1b1c1a]">
                {moldsList.length}
              </div>
              <div className="font-label-technical text-[10px] text-[#817470] uppercase tracking-wider">
                Modelos de Placa
              </div>
            </div>
            <div className="w-px h-10 bg-[#d3c3be]/40"></div>
            <div>
              <div className="font-headline-sm text-[26px] font-serif font-bold text-[#775a00]">
                100%
              </div>
              <div className="font-label-technical text-[10px] text-[#817470] uppercase tracking-wider">
                Policarbonato Inyectado
              </div>
            </div>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3 rounded-xl border border-[#d3c3be]/35 shadow-xs mb-8">
          {/* Type filters */}
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: "all", label: "Todos los Tipos" },
              { id: "Clásico", label: "Clásicos Bombonería" },
              { id: "Magnético", label: "Magnéticos Chocotransfer" },
              { id: "3D", label: "Figuras 3D / Huecas" },
              { id: "Tableta", label: "Tabletas Degustación" },
            ].map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`px-3 py-1.5 rounded-lg font-label-technical text-[11px] uppercase tracking-wider transition-colors cursor-pointer ${
                  selectedType === type.id
                    ? "bg-[#271812] text-white font-bold shadow-xs"
                    : "bg-[#f0edea] text-[#4f4541] hover:bg-[#eae8e5]"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[220px]">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#817470] text-[18px]">
              search
            </span>
            <input
              type="text"
              placeholder="Buscar molde o código CW..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-[#f0edea] rounded-lg text-[13px] text-[#1b1c1a] border border-[#d3c3be]/30 focus:outline-none focus:ring-1 focus:ring-[#817470]"
            />
          </div>
        </div>

        {/* Main Grid: Mold List + Mold Detail Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Mold Cards Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredMolds.map((mold) => {
              const isSelected = activeMold?.id === mold.id;
              return (
                <div
                  key={mold.id}
                  onClick={() => setSelectedMold(mold)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-white border-[#271812] shadow-md ring-2 ring-[#271812]/10"
                      : "bg-[#f6f3f0] hover:bg-white border-[#d3c3be]/40 hover:shadow-sm"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-label-technical text-[10px] text-[#775a00] font-bold uppercase tracking-wider bg-[#fed269]/20 px-2 py-0.5 rounded">
                        {mold.code}
                      </span>
                      <span className="font-label-technical text-[10px] text-[#817470] uppercase">
                        {mold.type}
                      </span>
                    </div>

                    <h3 className="font-headline-sm text-[18px] font-serif font-bold text-[#1b1c1a] mb-1">
                      {mold.name}
                    </h3>
                    <p className="font-body-sm text-[12px] text-[#4f4541] mb-3">
                      {mold.category} • {mold.dimensions}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#d3c3be]/30 flex items-center justify-between text-[12px]">
                    <div>
                      <span className="font-label-technical text-[10px] text-[#817470] uppercase block">
                        Cavidades
                      </span>
                      <span className="font-serif font-bold text-[#1b1c1a] text-[15px]">
                        {mold.cavities} cav.
                      </span>
                    </div>
                    <div>
                      <span className="font-label-technical text-[10px] text-[#817470] uppercase block">
                        Peso Pieza
                      </span>
                      <span className="font-serif font-bold text-[#775a00] text-[15px]">
                        {mold.totalWeight}g
                      </span>
                    </div>
                    <div>
                      <span className="font-label-technical text-[10px] text-[#817470] uppercase block">
                        Camisa
                      </span>
                      <span className="font-serif font-bold text-[#1b1c1a] text-[15px]">
                        {mold.shellWeight}g
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Active Mold Technical Inspector (5 cols) */}
          <div className="lg:col-span-5">
            {activeMold && (
              <div className="bg-white p-6 rounded-2xl border border-[#d3c3be]/45 shadow-md sticky top-24 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-label-technical text-[10.5px] uppercase tracking-wider text-[#775a00] font-bold">
                      Ficha de Molde • {activeMold.code}
                    </span>
                    <span className="font-label-technical text-[10.5px] text-[#817470] uppercase bg-[#f0edea] px-2 py-0.5 rounded">
                      {activeMold.type}
                    </span>
                  </div>
                  <h2 className="font-headline-sm text-[24px] font-serif font-bold text-[#1b1c1a]">
                    {activeMold.name}
                  </h2>
                  <p className="font-body-sm text-[13px] text-[#4f4541] mt-1">
                    {activeMold.desc}
                  </p>
                </div>

                {/* Technical Specs Bento */}
                <div className="grid grid-cols-2 gap-3 bg-[#f6f3f0] p-4 rounded-xl border border-[#d3c3be]/30">
                  <div>
                    <span className="font-label-technical text-[9.5px] text-[#817470] uppercase block">
                      Dimensiones
                    </span>
                    <span className="font-serif font-semibold text-[14px] text-[#1b1c1a]">
                      {activeMold.dimensions}
                    </span>
                  </div>
                  <div>
                    <span className="font-label-technical text-[9.5px] text-[#817470] uppercase block">
                      Espesor de Pared
                    </span>
                    <span className="font-serif font-semibold text-[14px] text-[#1b1c1a]">
                      {activeMold.thicknessMm} mm
                    </span>
                  </div>
                  <div>
                    <span className="font-label-technical text-[9.5px] text-[#817470] uppercase block">
                      Peso Encamisado
                    </span>
                    <span className="font-serif font-semibold text-[14px] text-[#ba1a1a]">
                      {activeMold.shellWeight}g
                    </span>
                  </div>
                  <div>
                    <span className="font-label-technical text-[9.5px] text-[#817470] uppercase block">
                      Capacidad Relleno
                    </span>
                    <span className="font-serif font-semibold text-[14px] text-[#775a00]">
                      {activeMold.fillingWeight}g
                    </span>
                  </div>
                </div>

                {/* Demolding Protocol */}
                <div className="space-y-1.5">
                  <h4 className="font-label-technical text-[11px] uppercase tracking-wider text-[#1b1c1a] font-bold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[17px] text-[#775a00]">
                      eject
                    </span>
                    Protocolo de Desmolde Térmico
                  </h4>
                  <p className="font-body-sm text-[13px] text-[#4f4541] bg-[#f0edea] p-3 rounded-lg border border-[#d3c3be]/25 leading-relaxed">
                    {activeMold.demoldTech}
                  </p>
                </div>

                {/* Maintenance & Cleaning */}
                <div className="space-y-1.5">
                  <h4 className="font-label-technical text-[11px] uppercase tracking-wider text-[#1b1c1a] font-bold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[17px] text-[#775a00]">
                      cleaning_services
                    </span>
                    Higiene Cristalográfica y Pulido
                  </h4>
                  <p className="font-body-sm text-[13px] text-[#4f4541] bg-[#f0edea] p-3 rounded-lg border border-[#d3c3be]/25 leading-relaxed">
                    {activeMold.cleaningGuide}
                  </p>
                </div>

                {/* Related Recipes in Compendium */}
                <div>
                  <h4 className="font-label-technical text-[11px] uppercase tracking-wider text-[#1b1c1a] font-bold mb-2 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[17px] text-[#775a00]">
                      menu_book
                    </span>
                    Recetas del Compendio Formuladas para este Molde
                  </h4>
                  <div className="space-y-1.5">
                    {relatedRecipes.map((rec) => (
                      <button
                        key={rec.id}
                        onClick={() => onSelectRecipeById(rec.id)}
                        className="w-full text-left p-2 rounded-lg bg-[#fcf9f6] hover:bg-[#eae8e5] border border-[#d3c3be]/30 flex items-center justify-between text-[12.5px] transition-colors cursor-pointer group"
                      >
                        <span className="font-medium text-[#1b1c1a] truncate group-hover:text-[#775a00]">
                          #{rec.id}. {rec.title}
                        </span>
                        <span className="material-symbols-outlined text-[16px] text-[#817470]">
                          arrow_forward
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
