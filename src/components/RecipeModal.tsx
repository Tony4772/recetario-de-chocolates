import React, { useState } from "react";
import { Recipe } from "../data/recipes";
import { isNutRecipe } from "./CatalogView";
import { getLimaAdaptedIngredient } from "../data/limaIngredients";

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
  onOpenFullRecipe: (recipeId: number) => void;
  onOpenLimaGuide?: () => void;
}

export const RecipeModal: React.FC<RecipeModalProps> = ({
  recipe,
  onClose,
  onOpenFullRecipe,
  onOpenLimaGuide,
}) => {
  const [peruMode, setPeruMode] = useState<boolean>(true);
  if (!recipe) return null;

  const handlePrintRecipe = () => {
    document.body.classList.add("printing-recipe-modal");
    const cleanup = () => {
      document.body.classList.remove("printing-recipe-modal");
      window.removeEventListener("afterprint", cleanup);
    };
    window.addEventListener("afterprint", cleanup);
    window.print();
    setTimeout(cleanup, 1500);
  };

  return (
    <div
      id="printable-recipe-modal"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#31302f]/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="printable-recipe-sheet bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] sm:max-h-[90vh] overflow-y-auto shadow-[0px_20px_48px_-8px_rgba(35,20,14,0.25)] flex flex-col border border-[#d3c3be]/40 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="p-4 sm:p-6 bg-[#f6f3f0] border-b border-[#817470]/15 flex items-start justify-between relative gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="font-label-technical text-[11px] text-[#775a00] font-bold uppercase tracking-wider">
                Receta #{String(recipe.id).padStart(2, "0")}
              </span>
              {isNutRecipe(recipe) && (
                <span className="font-label-technical text-[10px] text-[#775a00] font-bold uppercase tracking-wider bg-[#fed269]/25 px-2 py-0.5 rounded border border-[#fed269]/40 flex items-center gap-1">
                  <span>🌰</span>
                  <span>Con Frutos Secos</span>
                </span>
              )}
              <span className="text-[#817470]">•</span>
              <span className="font-label-technical text-[11px] text-[#4f4541] uppercase tracking-wider">
                {recipe.chapterName}
              </span>
            </div>
            <h2 className="font-headline-md text-[20px] sm:text-[24px] font-serif font-bold text-[#1b1c1a] leading-snug">
              {recipe.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#eae8e5] text-[#1b1c1a] flex items-center justify-center hover:bg-[#d3c3be] transition-colors cursor-pointer shrink-0"
            type="button"
            aria-label="Cerrar modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
          {/* Visual Thermal Curve Gauge Component */}
          <div className="bg-[#f6f3f0] p-4 sm:p-5 rounded-xl border border-[#d3c3be]/40">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-3">
              <span className="font-label-technical text-[10.5px] uppercase tracking-widest text-[#817470] font-bold">
                Curva Cristalográfica Requerida (°C)
              </span>
              <span className="font-label-technical text-[10.5px] font-bold text-[#1b1c1a] uppercase bg-[#e5e2df] px-2 py-0.5 rounded self-start sm:self-auto">
                {recipe.chocolate}
              </span>
            </div>
            <div className="relative py-2">
              <div className="flex items-center justify-between text-center relative z-10">
                <div className="bg-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg shadow-xs border border-[#817470]/10 flex-1 mx-0.5 sm:mx-1">
                  <span className="block text-label-technical text-[9px] sm:text-[10px] text-[#817470] uppercase">
                    1. Fusión
                  </span>
                  <span className="font-headline-sm text-[15px] sm:text-[18px] text-[#ba1a1a] font-serif font-bold">
                    {recipe.tempMelt}
                  </span>
                </div>
                <div className="w-4 sm:w-12 h-0.5 bg-[#d3c3be]/80 hidden sm:block"></div>
                <div className="bg-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg shadow-xs border border-[#817470]/10 flex-1 mx-0.5 sm:mx-1">
                  <span className="block text-label-technical text-[9px] sm:text-[10px] text-[#817470] uppercase">
                    2. Pre-Cristal
                  </span>
                  <span className="font-headline-sm text-[15px] sm:text-[18px] text-[#0066cc] font-serif font-bold">
                    {recipe.tempCool}
                  </span>
                </div>
                <div className="w-4 sm:w-12 h-0.5 bg-[#d3c3be]/80 hidden sm:block"></div>
                <div className="bg-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg shadow-xs border border-[#817470]/10 flex-1 mx-0.5 sm:mx-1">
                  <span className="block text-label-technical text-[9px] sm:text-[10px] text-[#817470] uppercase">
                    3. Trabajo Beta V
                  </span>
                  <span className="font-headline-sm text-[15px] sm:text-[18px] text-[#775a00] font-serif font-bold">
                    {recipe.tempWork}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Parameters Bento */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
            <div className="bg-[#f0edea] p-3 rounded-lg border border-[#d3c3be]/30">
              <span className="font-label-technical text-[10px] text-[#817470] uppercase block mb-1">
                Molde Requerido
              </span>
              <span className="font-body-sm text-[13px] font-semibold text-[#1b1c1a] block truncate">
                {recipe.mold}
              </span>
            </div>
            <div className="bg-[#f0edea] p-3 rounded-lg border border-[#d3c3be]/30">
              <span className="font-label-technical text-[10px] text-[#817470] uppercase block mb-1">
                Cristalización
              </span>
              <span className="font-body-sm text-[13px] font-semibold text-[#1b1c1a]">
                {recipe.crystHours}
              </span>
            </div>
            <div className="bg-[#f0edea] p-3 rounded-lg border border-[#d3c3be]/30">
              <span className="font-label-technical text-[10px] text-[#817470] uppercase block mb-1">
                Dificultad
              </span>
              <span className="font-body-sm text-[13px] font-semibold text-[#775a00]">
                {recipe.difficulty}
              </span>
            </div>
            <div className="bg-[#f0edea] p-3 rounded-lg border border-[#d3c3be]/30">
              <span className="font-label-technical text-[10px] text-[#817470] uppercase block mb-1">
                Familia Relleno
              </span>
              <span className="font-body-sm text-[13px] font-semibold text-[#1b1c1a]">
                {recipe.filling}
              </span>
            </div>
          </div>

          {/* Two Columns: Formula & Procedure */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Formulation Column */}
            <div>
              <div className="flex items-center justify-between mb-2.5 flex-wrap gap-2">
                <h4 className="font-headline-sm text-[18px] font-serif text-[#1b1c1a] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#775a00] text-[20px]">
                    receipt_long
                  </span>
                  Ingredientes &amp; Proporción
                </h4>
                <button
                  type="button"
                  onClick={() => setPeruMode((prev) => !prev)}
                  className={`px-2.5 py-1 rounded-lg text-[10.5px] font-label-technical uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1 border ${
                    peruMode
                      ? "bg-[#271812] text-white border-[#271812] shadow-xs"
                      : "bg-[#f0edea] text-[#4f4541] border-[#d3c3be]/40 hover:bg-[#eae8e5]"
                  }`}
                  title="Alternar entre fórmula europea y adaptación para conseguir en Lima, Perú"
                >
                  <span>🇵🇪</span>
                  <span>{peruMode ? "Insumos Lima (Activo)" : "Adaptar a Lima"}</span>
                </button>
              </div>

              {peruMode && (
                <div className="p-2.5 rounded-lg bg-[#fed269]/20 border border-[#fed269]/40 mb-3 text-[11.5px] text-[#775a00] leading-snug space-y-1">
                  <div className="flex items-center justify-between">
                    <strong className="block font-semibold">🇵🇪 Adaptado para conseguir en Lima:</strong>
                    {onOpenLimaGuide && (
                      <button
                        type="button"
                        onClick={onOpenLimaGuide}
                        className="underline text-[11px] font-bold cursor-pointer hover:text-[#1b1c1a]"
                      >
                        Guía de Compras →
                      </button>
                    )}
                  </div>
                  <span className="text-[#4f4541] block">
                    {recipe.whereToBuyLima || "Mercado Central (Jr. Huallaga), Surquillo N°1 o Makro."}
                  </span>
                </div>
              )}

              <ul className="space-y-2 font-body-sm text-[13px] text-[#4f4541]">
                {(peruMode && recipe.peruIngredients
                  ? recipe.peruIngredients
                  : recipe.ingredients.map((ing) =>
                      peruMode ? getLimaAdaptedIngredient(ing) : ing
                    )
                ).map((ing, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#775a00] mt-0.5 shrink-0">
                      {peruMode ? "storefront" : "check_circle"}
                    </span>
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step-by-Step Procedure */}
            <div>
              <h4 className="font-headline-sm text-[18px] font-serif text-[#1b1c1a] mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#775a00] text-[20px]">
                  schema
                </span>
                Técnica de Obrador
              </h4>
              <ol className="space-y-2.5 font-body-sm text-[13px] text-[#4f4541] list-decimal list-inside leading-relaxed">
                {recipe.steps.map((st, i) => (
                  <li key={i} className="pl-1 leading-relaxed">
                    {st}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Pro Chef Tip Box */}
          <div className="bg-[#eae8e5]/70 p-4 rounded-xl flex items-start gap-3 border border-[#d3c3be]/40">
            <span className="material-symbols-outlined text-[#775a00] shrink-0 mt-0.5">
              diamond
            </span>
            <div>
              <span className="font-label-technical text-[11px] uppercase tracking-wider text-[#1b1c1a] font-bold block mb-0.5">
                Nota de Desmoldeo y Pulido
              </span>
              <p className="font-body-sm text-[13px] text-[#4f4541]">
                {recipe.tip}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 sm:p-4 bg-[#f6f3f0] border-t border-[#817470]/15 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
          <span className="font-label-technical text-[9.5px] sm:text-[10px] text-[#817470] uppercase">
            Atelier Cacao • Idea y Propiedad Exclusiva de EBYZOM E.I.R.L.
          </span>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => onOpenFullRecipe(recipe.id)}
              className="px-4 py-2 bg-[#271812] text-white rounded-lg font-label-technical text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#31302f] transition-colors cursor-pointer shadow-xs active:scale-95"
              type="button"
            >
              <span className="material-symbols-outlined text-[16px] text-[#fed269]">
                menu_book
              </span>
              <span>Abrir Ficha de Taller Completa</span>
            </button>
            <button
              className="px-3.5 py-2 bg-[#e5e2df] text-[#1b1c1a] rounded-lg font-label-technical text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#d3c3be] transition-colors cursor-pointer active:scale-95"
              onClick={handlePrintRecipe}
              type="button"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              <span>Imprimir</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
