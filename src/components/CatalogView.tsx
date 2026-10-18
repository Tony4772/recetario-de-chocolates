import React, { useState, useMemo } from "react";
import { Recipe, RECIPES_DATA } from "../data/recipes";

interface CatalogViewProps {
  onSelectRecipe: (recipe: Recipe) => void;
  onOpenFullRecipe: (recipeId: number) => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  onSelectRecipe,
  onOpenFullRecipe,
}) => {
  const [search, setSearch] = useState("");
  const [moldFilter, setMoldFilter] = useState<string>("all");
  const [cacaoFilter, setCacaoFilter] = useState<string>("all");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all");
  const [fillingFilter, setFillingFilter] = useState<string>("all");
  const [chapterFilter, setChapterFilter] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");

  // Filter recipes dynamically
  const filteredRecipes = useMemo(() => {
    const q = search.toLowerCase().trim();
    return RECIPES_DATA.filter((r) => {
      // Text match
      const textMatch =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.mold.toLowerCase().includes(q) ||
        r.chocolate.toLowerCase().includes(q) ||
        r.filling.toLowerCase().includes(q) ||
        r.ingredients.some((ing) => ing.toLowerCase().includes(q));

      // Mold quick filter
      const moldMatch =
        moldFilter === "all" ||
        r.moldType === moldFilter ||
        r.mold.toLowerCase().includes(moldFilter.toLowerCase());

      // Cacao quick filter
      const cacaoMatch =
        cacaoFilter === "all" ||
        r.chocolateType === cacaoFilter ||
        r.chocolate.toLowerCase().includes(cacaoFilter.toLowerCase());

      // Difficulty filter
      const diffMatch =
        difficultyFilter === "all" || r.difficulty === difficultyFilter;

      // Filling filter
      const fillMatch =
        fillingFilter === "all" || r.filling === fillingFilter;

      // Chapter filter
      const chapterMatch =
        chapterFilter === "all" || String(r.chapter) === chapterFilter;

      return (
        textMatch &&
        moldMatch &&
        cacaoMatch &&
        diffMatch &&
        fillMatch &&
        chapterMatch
      );
    });
  }, [
    search,
    moldFilter,
    cacaoFilter,
    difficultyFilter,
    fillingFilter,
    chapterFilter,
  ]);

  const resetAllFilters = () => {
    setSearch("");
    setMoldFilter("all");
    setCacaoFilter("all");
    setDifficultyFilter("all");
    setFillingFilter("all");
    setChapterFilter("all");
  };

  return (
    <div className="w-full flex flex-col">
      {/* Subtle Ambient Glow Element */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#fadcd2]/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute top-48 left-10 w-80 h-80 bg-[#ffdf99]/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

        {/* Hero Title & Compendium Presentation */}
        <section className="max-w-[1380px] mx-auto px-4 sm:px-6 pt-8 pb-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f0edea] rounded-full mb-4 border border-[#d3c3be]/30">
                <span className="w-2 h-2 rounded-full bg-[#775a00]"></span>
                <span className="font-label-technical text-[10.5px] tracking-widest uppercase text-[#4f4541] font-bold">
                  Compendio Técnico Completo • Volumen I
                </span>
              </div>
              <h1 className="font-display-hero text-[34px] sm:text-[44px] lg:text-[54px] font-serif text-[#1b1c1a] tracking-tight mb-4 leading-tight">
                El Gran Recetario de Bombones y Figuras en Molde
              </h1>
              <p className="font-body-lg text-[16px] sm:text-[18px] text-[#4f4541] leading-relaxed font-light font-sans">
                50 creaciones magistrales de alta chocolatería formuladas con
                rigor cristalográfico, encamisado milimétrico y emulsiones
                equilibradas para moldes profesionales de policarbonato, moldes
                magnéticos y silicona platino.
              </p>
            </div>

            {/* Metric Counter Card */}
            <div className="bg-[#f6f3f0] p-6 rounded-xl flex items-center gap-6 shadow-[0px_12px_32px_-4px_rgba(35,20,14,0.06)] shrink-0 border border-[#d3c3be]/40">
              <div>
                <div className="font-headline-lg text-[32px] sm:text-[36px] font-serif text-[#1b1c1a] leading-none mb-1 font-bold">
                  50
                </div>
                <div className="font-label-technical text-[10px] text-[#817470] uppercase tracking-wider">
                  Fórmulas Catalogadas
                </div>
              </div>
              <div className="w-px h-10 bg-[#d3c3be]/40"></div>
              <div>
                <div className="font-headline-lg text-[32px] sm:text-[36px] font-serif text-[#775a00] leading-none mb-1 font-bold">
                  ±0.5°C
                </div>
                <div className="font-label-technical text-[10px] text-[#817470] uppercase tracking-wider">
                  Tolerancia Térmica
                </div>
              </div>
            </div>
          </div>

          {/* Quick Selector Tabs: Mold & Chocolate Base */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Quick Mold Type Picker */}
            <div className="bg-white p-4 rounded-xl shadow-xs border border-[#d3c3be]/35">
              <span className="font-label-technical text-[10px] text-[#817470] uppercase tracking-widest block mb-2.5 flex items-center gap-1.5 font-bold">
                <span className="material-symbols-outlined text-[15px] text-[#775a00]">
                  interests
                </span>
                Arquitectura de Molde Principal
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Todos los moldes", val: "all" },
                  { label: "Policarbonato Magnético", val: "Magnético" },
                  { label: "Policarbonato Clásico", val: "Clásico" },
                  { label: "Moldes 3D Huecos", val: "3D" },
                  { label: "Moldes de Tableta", val: "Tableta" },
                ].map((item) => (
                  <button
                    key={item.val}
                    type="button"
                    onClick={() => setMoldFilter(item.val)}
                    className={`px-3 py-1.5 rounded-lg font-label-technical text-[10.5px] uppercase tracking-wider transition-all cursor-pointer ${
                      moldFilter === item.val
                        ? "bg-[#271812] text-white shadow-xs"
                        : "bg-[#f0edea] text-[#4f4541] hover:bg-[#eae8e5]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Chocolate Base Picker */}
            <div className="bg-white p-4 rounded-xl shadow-xs border border-[#d3c3be]/35">
              <span className="font-label-technical text-[10px] text-[#817470] uppercase tracking-widest block mb-2.5 flex items-center gap-1.5 font-bold">
                <span className="material-symbols-outlined text-[15px] text-[#775a00]">
                  grain
                </span>
                Perfil de Cobertura Base
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Todas las coberturas", val: "all" },
                  { label: "Negro 70%+", val: "Negro" },
                  { label: "Con Leche 38%", val: "Leche" },
                  { label: "Blanco 34%", val: "Blanco" },
                  { label: "Ruby RB2", val: "Ruby" },
                  { label: "Gold Caramelo", val: "Gold" },
                ].map((item) => (
                  <button
                    key={item.val}
                    type="button"
                    onClick={() => setCacaoFilter(item.val)}
                    className={`px-3 py-1.5 rounded-lg font-label-technical text-[10.5px] uppercase tracking-wider transition-all cursor-pointer ${
                      cacaoFilter === item.val
                        ? "bg-[#271812] text-white shadow-xs"
                        : "bg-[#f0edea] text-[#4f4541] hover:bg-[#eae8e5]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Interactive Control Deck & Filter Rail */}
      <section className="max-w-[1380px] w-full mx-auto px-4 sm:px-6 pb-6">
        <div className="bg-[#f6f3f0] p-4 sm:p-5 rounded-2xl shadow-[0px_12px_32px_-4px_rgba(35,20,14,0.04)] space-y-3.5 border border-[#d3c3be]/40">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Live Instant Search */}
            <div className="relative flex-1 max-w-lg">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#817470] text-[20px]">
                search
              </span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-2 bg-white text-[#1b1c1a] rounded-xl text-[14px] font-sans focus:outline-none focus:ring-1 focus:ring-[#817470] placeholder:text-[#817470] border border-[#d3c3be]/40 transition-all"
                placeholder="Filtrar por ingrediente (ej. Avellana, Matcha, Yuzu), molde o técnica..."
                type="text"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#817470] hover:text-[#1b1c1a] text-xs font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Filter Dropdowns Row */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Difficulty Filter */}
              <div className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-xl border border-[#d3c3be]/40 shadow-2xs">
                <span className="material-symbols-outlined text-[17px] text-[#817470]">
                  tune
                </span>
                <select
                  value={difficultyFilter}
                  onChange={(e) => setDifficultyFilter(e.target.value)}
                  className="bg-transparent text-[13px] font-sans text-[#1b1c1a] focus:outline-none cursor-pointer pr-1"
                >
                  <option value="all">Cualquier Nivel</option>
                  <option value="Iniciación">Iniciación (Apprenti)</option>
                  <option value="Intermedio">Intermedio (Compagnon)</option>
                  <option value="Maestro Chocolatero">Maestro Chocolatero</option>
                </select>
              </div>

              {/* Filling Type Filter */}
              <div className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-xl border border-[#d3c3be]/40 shadow-2xs">
                <span className="material-symbols-outlined text-[17px] text-[#817470]">
                  layers
                </span>
                <select
                  value={fillingFilter}
                  onChange={(e) => setFillingFilter(e.target.value)}
                  className="bg-transparent text-[13px] font-sans text-[#1b1c1a] focus:outline-none cursor-pointer pr-1"
                >
                  <option value="all">Todos los Rellenos</option>
                  <option value="Ganache">Ganache</option>
                  <option value="Praliné">Praliné</option>
                  <option value="Caramelo">Caramelo</option>
                  <option value="Gelée">Gelée frutal</option>
                  <option value="Gianduja">Gianduja</option>
                  <option value="Licor">Licor / Destilados</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-[#e5e2df] p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setViewMode("cards")}
                  className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                    viewMode === "cards"
                      ? "bg-white text-[#1b1c1a] shadow-xs"
                      : "text-[#817470] hover:text-[#1b1c1a]"
                  }`}
                  title="Vista Cuadrícula"
                >
                  <span className="material-symbols-outlined text-[19px]">
                    grid_view
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("table")}
                  className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                    viewMode === "table"
                      ? "bg-white text-[#1b1c1a] shadow-xs"
                      : "text-[#817470] hover:text-[#1b1c1a]"
                  }`}
                  title="Vista Tabla Técnica"
                >
                  <span className="material-symbols-outlined text-[19px]">
                    view_list
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Chapter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 border-t border-[#d3c3be]/30 pt-2.5">
            <span className="font-label-technical text-[10px] uppercase tracking-widest text-[#817470] whitespace-nowrap mr-1 font-bold">
              Capítulos:
            </span>
            {[
              { id: "all", label: "Todos (1-50)" },
              { id: "1", label: "I. Clásicos Policarbonato (1-10)" },
              { id: "2", label: "II. Geometría & Color (11-20)" },
              { id: "3", label: "III. Tabletas & Figuras Huecas (21-30)" },
              { id: "4", label: "IV. Rellenos Líquidos & Gelées (31-40)" },
              { id: "5", label: "V. Creaciones de Autor (41-50)" },
            ].map((ch) => (
              <button
                key={ch.id}
                type="button"
                onClick={() => setChapterFilter(ch.id)}
                className={`px-3 py-1 rounded-full text-[12px] whitespace-nowrap transition-all cursor-pointer font-sans ${
                  chapterFilter === ch.id
                    ? "bg-[#271812] text-white font-semibold"
                    : "bg-[#f0edea] text-[#4f4541] hover:bg-[#eae8e5]"
                }`}
              >
                {ch.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Display Area */}
      <main className="max-w-[1380px] w-full mx-auto px-4 sm:px-6 pb-20">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <span className="font-headline-sm text-[22px] font-serif font-bold text-[#1b1c1a]">
              Compendio de Fórmulas
            </span>
            <span className="font-label-technical text-[10.5px] bg-[#eae8e5] text-[#1b1c1a] px-2.5 py-0.5 rounded-full font-bold">
              {filteredRecipes.length} Mostradas
            </span>
          </div>
          <span className="font-body-sm text-[12.5px] text-[#817470] hidden sm:inline">
            Haga clic en una tarjeta para desplegar el dossier térmico
          </span>
        </div>

        {/* CARDS VIEW GRID */}
        {viewMode === "cards" && filteredRecipes.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRecipes.map((r) => {
              // Badge color logic
              let diffBadgeClass = "text-[#4f4541] bg-[#f0edea]";
              if (r.difficulty === "Iniciación")
                diffBadgeClass = "text-[#4f4541] bg-[#eae8e5]";
              if (r.difficulty === "Intermedio")
                diffBadgeClass = "text-[#775a00] bg-[#fed269]/30";
              if (r.difficulty === "Maestro Chocolatero")
                diffBadgeClass = "text-white bg-[#271812]";

              return (
                <div
                  key={r.id}
                  onClick={() => onSelectRecipe(r)}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0px_12px_32px_-4px_rgba(35,20,14,0.06)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer border border-[#d3c3be]/30 hover:border-[#817470]/40"
                >
                  <div className="p-5 flex-1 flex flex-col">
                    {/* Header Meta */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-label-technical text-[12px] text-[#775a00] font-bold">
                        #{String(r.id).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-label-technical text-[9.5px] uppercase tracking-wider px-2 py-0.5 rounded-full font-bold ${diffBadgeClass}`}
                      >
                        {r.difficulty}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-headline-sm text-[18px] font-serif font-bold text-[#1b1c1a] mb-1.5 leading-snug group-hover:text-[#775a00] transition-colors line-clamp-2">
                      {r.title}
                    </h3>

                    {/* Subtitle Chapter */}
                    <span className="font-body-sm text-[12px] text-[#817470] mb-4 line-clamp-1">
                      {r.chapterName}
                    </span>

                    {/* Specs Shelf */}
                    <div className="space-y-2 mt-auto pt-4 border-t border-[#d3c3be]/25 font-body-sm text-[12.5px]">
                      <div className="flex items-center justify-between">
                        <span className="text-[#817470] flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[15px] text-[#817470]">
                            interests
                          </span>{" "}
                          Molde
                        </span>
                        <span className="font-medium text-[#1b1c1a] text-right truncate max-w-[155px]">
                          {r.mold}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#817470] flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[15px] text-[#817470]">
                            grain
                          </span>{" "}
                          Base
                        </span>
                        <span className="font-medium text-[#1b1c1a]">
                          {r.chocolate}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#817470] flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[15px] text-[#817470]">
                            device_thermostat
                          </span>{" "}
                          Temp. Trabajo
                        </span>
                        <span className="font-label-technical text-[11px] text-[#1b1c1a] font-bold bg-[#f0edea] px-2 py-0.5 rounded">
                          {r.tempWork}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Strip */}
                  <div className="bg-[#f6f3f0] px-5 py-3 flex items-center justify-between border-t border-[#d3c3be]/20 group-hover:bg-[#f0edea] transition-colors">
                    <span className="font-label-technical text-[10px] text-[#817470] uppercase tracking-wider flex items-center gap-1">
                      <span className="material-symbols-outlined text-[15px]">
                        schedule
                      </span>{" "}
                      {r.crystHours}
                    </span>
                    <span className="font-label-technical text-[11px] uppercase tracking-wider text-[#775a00] font-bold flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                      Ver Fórmula{" "}
                      <span className="material-symbols-outlined text-[13px]">
                        arrow_forward
                      </span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TABLE VIEW */}
        {viewMode === "table" && filteredRecipes.length > 0 && (
          <div className="overflow-x-auto bg-white rounded-2xl shadow-xs border border-[#d3c3be]/40">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f6f3f0] text-label-technical text-[10.5px] font-bold text-[#817470] uppercase tracking-wider border-b border-[#d3c3be]/30">
                  <th className="p-4">#</th>
                  <th className="p-4">Creación Gastronómica</th>
                  <th className="p-4">Molde Específico</th>
                  <th className="p-4">Cobertura / Base</th>
                  <th className="p-4">Zona Térmica</th>
                  <th className="p-4">Cristalización</th>
                  <th className="p-4">Dificultad</th>
                  <th className="p-4 text-right">Procedimiento</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d3c3be]/20 font-body-sm text-[13px]">
                {filteredRecipes.map((r) => (
                  <tr
                    key={r.id}
                    onClick={() => onSelectRecipe(r)}
                    className="hover:bg-[#f0edea]/60 transition-colors cursor-pointer"
                  >
                    <td className="p-4 font-label-technical text-[12px] text-[#775a00] font-bold">
                      #{String(r.id).padStart(2, "0")}
                    </td>
                    <td className="p-4">
                      <div className="font-semibold text-[#1b1c1a]">
                        {r.title}
                      </div>
                      <div className="text-[#817470] text-[12px] font-normal">
                        {r.filling} • {r.chapterName}
                      </div>
                    </td>
                    <td className="p-4 text-[#4f4541]">{r.mold}</td>
                    <td className="p-4">
                      <span className="inline-block px-2 py-0.5 rounded text-[12px] bg-[#f0edea] text-[#1b1c1a] font-medium">
                        {r.chocolate}
                      </span>
                    </td>
                    <td className="p-4 font-label-technical text-[11px] text-[#1b1c1a]">
                      {r.tempWork} (F: {r.tempMelt})
                    </td>
                    <td className="p-4 text-[#4f4541]">{r.crystHours}</td>
                    <td className="p-4">
                      <span className="font-label-technical text-[10px] uppercase tracking-wider font-bold">
                        {r.difficulty}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button
                        type="button"
                        className="px-3 py-1 bg-[#f0edea] text-[#1b1c1a] hover:bg-[#271812] hover:text-white rounded font-label-technical text-[10px] uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Ficha
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Empty State Notification */}
        {filteredRecipes.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl shadow-xs p-8 border border-[#d3c3be]/40">
            <span className="material-symbols-outlined text-[48px] text-[#817470] mb-3 block">
              cookie
            </span>
            <h3 className="font-headline-sm text-[22px] font-serif text-[#1b1c1a] mb-2 font-bold">
              No se hallaron fórmulas concordantes
            </h3>
            <p className="font-body-md text-[14px] text-[#4f4541] max-w-md mx-auto mb-6">
              Pruebe ajustando los filtros de relleno, tipo de molde o términos
              de búsqueda botánica.
            </p>
            <button
              onClick={resetAllFilters}
              className="px-5 py-2.5 bg-[#271812] text-white font-label-technical text-[11px] uppercase tracking-wider rounded-lg hover:bg-[#31302f] transition-colors cursor-pointer"
              type="button"
            >
              Restablecer Filtros
            </button>
          </div>
        )}
      </main>
    </div>
  );
};
