import React, { useState, useEffect, useRef } from "react";
import { RECIPES_DATA, Recipe } from "../data/recipes";

interface SearchCommandModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRecipe: (recipe: Recipe) => void;
  onNavigateTab: (tab: "catalog" | "curves" | "molds" | "fillings") => void;
}

export const SearchCommandModal: React.FC<SearchCommandModalProps> = ({
  isOpen,
  onClose,
  onSelectRecipe,
  onNavigateTab,
}) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Keyboard navigation & close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const filtered = !q
    ? RECIPES_DATA.slice(0, 8)
    : RECIPES_DATA.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.mold.toLowerCase().includes(q) ||
          r.chocolate.toLowerCase().includes(q) ||
          r.filling.toLowerCase().includes(q) ||
          r.ingredients.some((ing) => ing.toLowerCase().includes(q))
      ).slice(0, 10);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#31302f]/60 backdrop-blur-sm flex items-start justify-center p-3 sm:p-6 pt-16 sm:pt-24"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-[0px_24px_48px_-12px_rgba(35,20,14,0.35)] flex flex-col border border-[#d3c3be]/45 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#817470]/15 flex items-center gap-3 bg-[#f6f3f0]">
          <span className="material-symbols-outlined text-[#817470] text-[22px]">
            search
          </span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Buscar por bombón, molde, origen, cobertura o ingrediente..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-[15px] font-sans text-[#1b1c1a] focus:outline-none placeholder:text-[#817470]"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-[#817470] hover:text-[#1b1c1a] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">clear</span>
            </button>
          )}
          <kbd className="hidden sm:inline-block font-label-technical text-[10px] text-[#817470] bg-[#e5e2df] px-2 py-0.5 rounded shadow-2xs">
            ESC
          </kbd>
        </div>

        {/* Quick Section Shortcuts */}
        <div className="p-3 bg-[#f0edea]/70 border-b border-[#d3c3be]/30 flex items-center gap-2 overflow-x-auto text-[11px] font-label-technical uppercase tracking-wider">
          <span className="text-[#817470] shrink-0 font-bold">Ir directo a:</span>
          <button
            onClick={() => {
              onNavigateTab("catalog");
              onClose();
            }}
            className="px-2.5 py-1 rounded bg-white hover:bg-[#eae8e5] text-[#1b1c1a] border border-[#d3c3be]/30 transition-colors cursor-pointer shrink-0"
          >
            Catálogo 50+
          </button>
          <button
            onClick={() => {
              onNavigateTab("curves");
              onClose();
            }}
            className="px-2.5 py-1 rounded bg-white hover:bg-[#eae8e5] text-[#1b1c1a] border border-[#d3c3be]/30 transition-colors cursor-pointer shrink-0"
          >
            Curvas Térmicas
          </button>
          <button
            onClick={() => {
              onNavigateTab("molds");
              onClose();
            }}
            className="px-2.5 py-1 rounded bg-white hover:bg-[#eae8e5] text-[#1b1c1a] border border-[#d3c3be]/30 transition-colors cursor-pointer shrink-0"
          >
            Guía de Moldes
          </button>
          <button
            onClick={() => {
              onNavigateTab("fillings");
              onClose();
            }}
            className="px-2.5 py-1 rounded bg-white hover:bg-[#eae8e5] text-[#1b1c1a] border border-[#d3c3be]/30 transition-colors cursor-pointer shrink-0"
          >
            Rellenos
          </button>
        </div>

        {/* Search Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-[#817470]">
              <span className="material-symbols-outlined text-[36px] text-[#817470]/50 block mb-2">
                sentiment_dissatisfied
              </span>
              <p className="font-body-md text-[14px]">
                No encontramos fórmulas para &ldquo;{query}&rdquo;
              </p>
              <p className="font-body-sm text-[12px] text-[#817470] mt-1">
                Prueba buscando por tipo de chocolate (Negro, Ruby), molde (Magnético) o relleno (Ganache, Caramelo).
              </p>
            </div>
          ) : (
            filtered.map((recipe) => (
              <div
                key={recipe.id}
                onClick={() => {
                  onSelectRecipe(recipe);
                  onClose();
                }}
                className="p-3 rounded-xl hover:bg-[#f6f3f0] border border-transparent hover:border-[#d3c3be]/40 transition-all cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#271812] text-white flex items-center justify-center font-serif text-[13px] font-bold shrink-0">
                    {recipe.id}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[14px] text-[#1b1c1a] group-hover:text-[#775a00] transition-colors">
                      {recipe.title}
                    </h4>
                    <p className="font-body-sm text-[12px] text-[#817470]">
                      {recipe.chocolate} • {recipe.mold} • {recipe.filling}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-label-technical text-[10px] uppercase bg-[#fed269]/20 text-[#775a00] px-2 py-0.5 rounded font-bold">
                    {recipe.tempWork}
                  </span>
                  <span className="material-symbols-outlined text-[16px] text-[#817470] group-hover:translate-x-0.5 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#f6f3f0] border-t border-[#817470]/15 flex items-center justify-between text-[11px] font-label-technical text-[#817470] uppercase">
          <span>{filtered.length} fórmulas encontradas</span>
          <span>Presiona ESC para salir</span>
        </div>
      </div>
    </div>
  );
};
