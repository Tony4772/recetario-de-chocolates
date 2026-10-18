import React, { useState } from "react";
import { Recipe, RECIPES_DATA } from "../data/recipes";

interface RecipeDetailViewProps {
  recipeId: number;
  onBackToCatalog: () => void;
  onSelectRecipeById: (id: number) => void;
}

export const RecipeDetailView: React.FC<RecipeDetailViewProps> = ({
  recipeId,
  onBackToCatalog,
  onSelectRecipeById,
}) => {
  const [scale, setScale] = useState<number>(1);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});

  const recipe = RECIPES_DATA.find((r) => r.id === recipeId) || RECIPES_DATA[0];

  const prevRecipe = RECIPES_DATA.find((r) => r.id === recipe.id - 1);
  const nextRecipe = RECIPES_DATA.find((r) => r.id === recipe.id + 1);

  // Helper to parse gram values in ingredients and scale them
  const scaleIngredient = (ingText: string, multiplier: number) => {
    if (multiplier === 1) return ingText;
    // Match patterns like "200g Cobertura..." or "150g Azúcar..." or "3g Flor..."
    return ingText.replace(/^(\d+(?:\.\d+)?)\s*g\b/i, (_, amount) => {
      const scaled = Math.round(parseFloat(amount) * multiplier * 10) / 10;
      return `${scaled}g`;
    });
  };

  const toggleIngredientCheck = (idx: number) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <div className="w-full flex flex-col">
      <section className="max-w-[1100px] mx-auto px-4 sm:px-6 pt-6 pb-16 w-full">
        {/* Navigation Bar / Print Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#817470]/15 print:hidden">
          <button
            onClick={onBackToCatalog}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f0edea] hover:bg-[#eae8e5] text-[#1b1c1a] font-label-technical text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            <span>Volver al Catálogo</span>
          </button>

          <div className="flex items-center gap-2">
            {prevRecipe && (
              <button
                onClick={() => onSelectRecipeById(prevRecipe.id)}
                className="px-3 py-1.5 rounded-lg bg-[#f0edea] hover:bg-[#eae8e5] text-[#4f4541] font-label-technical text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
              >
                ← #{prevRecipe.id}
              </button>
            )}
            <span className="font-label-technical text-[11px] text-[#817470]">
              {recipe.id} de {RECIPES_DATA.length}
            </span>
            {nextRecipe && (
              <button
                onClick={() => onSelectRecipeById(nextRecipe.id)}
                className="px-3 py-1.5 rounded-lg bg-[#f0edea] hover:bg-[#eae8e5] text-[#4f4541] font-label-technical text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
              >
                #{nextRecipe.id} →
              </button>
            )}
            <button
              onClick={() => window.print()}
              className="ml-2 px-4 py-1.5 bg-[#271812] hover:bg-[#31302f] text-white rounded-lg font-label-technical text-[11px] uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              <span>Imprimir Ficha</span>
            </button>
          </div>
        </div>

        {/* Master Recipe Card */}
        <div className="bg-white rounded-2xl border border-[#d3c3be]/45 shadow-md p-6 sm:p-10 space-y-8">
          {/* Header Block */}
          <div className="border-b border-[#817470]/15 pb-6">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="font-label-technical text-[11px] text-[#775a00] font-bold uppercase tracking-wider bg-[#fed269]/25 px-2.5 py-0.5 rounded">
                  Fórmula de Taller #{String(recipe.id).padStart(2, "0")}
                </span>
                <span className="text-[#817470]">•</span>
                <span className="font-label-technical text-[11px] text-[#4f4541] uppercase tracking-wider">
                  Capítulo {recipe.chapter}: {recipe.chapterName}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-700">
                <span className="font-label-technical text-[11px] font-bold uppercase">
                  {recipe.difficulty}
                </span>
                <span className="text-sm">{recipe.pips}</span>
              </div>
            </div>

            <h1 className="font-headline-lg text-[28px] sm:text-[38px] font-serif font-bold text-[#1b1c1a] leading-tight mt-2">
              {recipe.title}
            </h1>
            <p className="font-body-md text-[14px] sm:text-[15px] text-[#4f4541] mt-2">
              Molde específico: <strong className="text-[#1b1c1a]">{recipe.mold}</strong> ({recipe.moldType}) • Base:{" "}
              <strong className="text-[#1b1c1a]">{recipe.chocolate}</strong> • Relleno:{" "}
              <strong className="text-[#1b1c1a]">{recipe.filling}</strong>
            </p>
          </div>

          {/* Crystallographic Curve Banner */}
          <div className="bg-[#f6f3f0] p-5 sm:p-6 rounded-xl border border-[#d3c3be]/40">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <span className="font-label-technical text-[11px] uppercase tracking-widest text-[#775a00] font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">thermostat</span>
                Curva Cristalográfica Requerida para {recipe.chocolate}
              </span>
              <span className="font-label-technical text-[10.5px] text-[#817470] uppercase">
                Cristalización Estable Polimórfica Beta V
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white p-3.5 rounded-lg border border-[#817470]/10 shadow-xs flex flex-col justify-between">
                <span className="font-label-technical text-[10px] text-[#817470] uppercase font-bold">
                  1. Fusión Total de Cristales
                </span>
                <span className="font-headline-sm text-[24px] font-serif font-bold text-[#ba1a1a] mt-1">
                  {recipe.tempMelt}
                </span>
                <span className="font-body-sm text-[11px] text-[#4f4541] mt-1">
                  Disuelve todos los cristales inestables I al VI.
                </span>
              </div>

              <div className="bg-white p-3.5 rounded-lg border border-[#817470]/10 shadow-xs flex flex-col justify-between">
                <span className="font-label-technical text-[10px] text-[#817470] uppercase font-bold">
                  2. Siembra y Pre-cristalización
                </span>
                <span className="font-headline-sm text-[24px] font-serif font-bold text-[#0066cc] mt-1">
                  {recipe.tempCool}
                </span>
                <span className="font-body-sm text-[11px] text-[#4f4541] mt-1">
                  Siembra rápida de embriones cristalinos β V.
                </span>
              </div>

              <div className="bg-white p-3.5 rounded-lg border border-[#817470]/10 shadow-xs flex flex-col justify-between">
                <span className="font-label-technical text-[10px] text-[#817470] uppercase font-bold">
                  3. Temperatura de Trabajo
                </span>
                <span className="font-headline-sm text-[24px] font-serif font-bold text-[#775a00] mt-1">
                  {recipe.tempWork}
                </span>
                <span className="font-body-sm text-[11px] text-[#4f4541] mt-1">
                  Vertido en molde sin destruir los cristales.
                </span>
              </div>
            </div>
          </div>

          {/* Technical Specs Bento */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-[#f0edea] p-3.5 rounded-lg border border-[#d3c3be]/30">
              <span className="font-label-technical text-[10px] text-[#817470] uppercase block">
                Reposo Cristalización
              </span>
              <span className="font-serif font-bold text-[16px] text-[#1b1c1a]">
                {recipe.crystHours}
              </span>
            </div>

            <div className="bg-[#f0edea] p-3.5 rounded-lg border border-[#d3c3be]/30">
              <span className="font-label-technical text-[10px] text-[#817470] uppercase block">
                Actividad de Agua (aw)
              </span>
              <span className="font-serif font-bold text-[16px] text-[#775a00]">
                {recipe.aw ? `aw ${recipe.aw}` : "aw < 0.70"}
              </span>
            </div>

            <div className="bg-[#f0edea] p-3.5 rounded-lg border border-[#d3c3be]/30">
              <span className="font-label-technical text-[10px] text-[#817470] uppercase block">
                Espesor Camisa
              </span>
              <span className="font-serif font-bold text-[16px] text-[#1b1c1a]">
                {recipe.shellThickness || "0.8 mm"}
              </span>
            </div>

            <div className="bg-[#f0edea] p-3.5 rounded-lg border border-[#d3c3be]/30">
              <span className="font-label-technical text-[10px] text-[#817470] uppercase block">
                Tipo de Molde
              </span>
              <span className="font-serif font-bold text-[16px] text-[#1b1c1a]">
                {recipe.moldType}
              </span>
            </div>
          </div>

          {/* Scaler Toolbar */}
          <div className="flex items-center justify-between p-3.5 bg-[#f6f3f0] rounded-xl border border-[#d3c3be]/35 print:hidden">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#775a00] text-[20px]">
                scale
              </span>
              <span className="font-label-technical text-[11px] uppercase tracking-wider text-[#1b1c1a] font-bold">
                Escalado de Lote en Obrador
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              {[
                { factor: 1, label: "1x (1 Placa)" },
                { factor: 2, label: "2x" },
                { factor: 3, label: "3x" },
                { factor: 5, label: "5x" },
              ].map((s) => (
                <button
                  key={s.factor}
                  onClick={() => setScale(s.factor)}
                  className={`px-3 py-1 rounded font-label-technical text-[11px] uppercase transition-colors cursor-pointer ${
                    scale === s.factor
                      ? "bg-[#271812] text-white font-bold"
                      : "bg-[#e5e2df] text-[#4f4541] hover:bg-[#dcdad7]"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Formulation & Procedure Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2">
            {/* Ingredients Column (5 cols) */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#817470]/15">
                <h3 className="font-headline-sm text-[20px] font-serif font-bold text-[#1b1c1a] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#775a00] text-[20px]">
                    receipt_long
                  </span>
                  Ingredientes ({scale}x)
                </h3>
                <span className="font-label-technical text-[10px] text-[#817470] uppercase">
                  Mise en place
                </span>
              </div>

              <ul className="space-y-2.5">
                {recipe.ingredients.map((ing, idx) => {
                  const isChecked = !!checkedIngredients[idx];
                  return (
                    <li
                      key={idx}
                      onClick={() => toggleIngredientCheck(idx)}
                      className={`p-2.5 rounded-lg border transition-all cursor-pointer flex items-start gap-2.5 text-[13px] ${
                        isChecked
                          ? "bg-[#e5e2df]/60 border-emerald-300 line-through text-[#817470]"
                          : "bg-[#fcf9f6] border-[#d3c3be]/35 text-[#1b1c1a] hover:bg-[#f6f3f0]"
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px] text-[#775a00] shrink-0 mt-0.5">
                        {isChecked ? "check_box" : "check_box_outline_blank"}
                      </span>
                      <span className="font-medium leading-relaxed">
                        {scaleIngredient(ing, scale)}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Procedure Column (7 cols) */}
            <div className="md:col-span-7 space-y-4">
              <div className="pb-2 border-b border-[#817470]/15">
                <h3 className="font-headline-sm text-[20px] font-serif font-bold text-[#1b1c1a] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#775a00] text-[20px]">
                    schema
                  </span>
                  Procedimiento de Taller Paso a Paso
                </h3>
              </div>

              <div className="space-y-4">
                {recipe.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-[#fcf9f6] border border-[#d3c3be]/35 flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#271812] text-white font-label-technical text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="font-body-sm text-[13.5px] text-[#1b1c1a] leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Master Chocolatier Tip Card */}
          <div className="bg-[#fadcd2]/30 p-5 rounded-xl border border-[#fadcd2] flex items-start gap-3.5">
            <span className="material-symbols-outlined text-[#775a00] text-[24px] shrink-0 mt-0.5">
              diamond
            </span>
            <div>
              <span className="font-label-technical text-[11.5px] uppercase tracking-wider text-[#1b1c1a] font-bold block mb-1">
                Nota Técnica del Maestro Chocolatero
              </span>
              <p className="font-body-sm text-[13.5px] text-[#4f4541] leading-relaxed">
                {recipe.tip}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
