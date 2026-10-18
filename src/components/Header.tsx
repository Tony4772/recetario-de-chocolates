import React from "react";

interface HeaderProps {
  currentTab: "catalog" | "recipe-detail" | "curves" | "molds" | "fillings";
  setCurrentTab: (tab: "catalog" | "recipe-detail" | "curves" | "molds" | "fillings") => void;
  onOpenSearch: () => void;
  onOpenDosimetry: () => void;
  selectedRecipeId?: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  onOpenSearch,
  onOpenDosimetry,
}) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#fcf9f6]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#817470]/10">
      <div className="h-20 max-w-[1380px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <button
            onClick={() => setCurrentTab("catalog")}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
          >
            <img
              alt="Atelier Cacao Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-Z1Iu9_kWSVWa50o88Jt0ZzYxXUaLmgmokVqHuL97ZhCiGxJr4GP6TNxb-unMaLHajN5nK1Qq_pnoERO5qGE1k97N8aHhhuwU7o5MfV9ad36PBhoa7AAePK_s3D1VfELvouaJ2Ppdy30EC0ZYSMEc2-iX0D9YoB-BAPNZxyM4I1qn5thH1RNcP7Mjc0VJZ59ibW-Ce0Zzke3R_wTVs1zsKF1eeZbQ8Hu8ukefJu-wUzcmORU6ccMF"
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-[20px] font-bold tracking-tight text-[#1b1c1a] leading-none">
                Atelier Cacao
              </span>
              <span className="font-label-technical text-[10px] tracking-widest text-[#817470] uppercase mt-0.5">
                Fernandina de Jagua
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1 text-[13px] font-medium font-sans">
          <button
            onClick={() => setCurrentTab("catalog")}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              currentTab === "catalog"
                ? "bg-[#eae8e5] text-[#1b1c1a] font-semibold"
                : "text-[#4f4541] hover:text-[#1b1c1a] hover:bg-[#f0edea]"
            }`}
          >
            Catálogo de Recetas (50+)
          </button>
          <button
            onClick={() => setCurrentTab("molds")}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              currentTab === "molds"
                ? "bg-[#eae8e5] text-[#1b1c1a] font-semibold"
                : "text-[#4f4541] hover:text-[#1b1c1a] hover:bg-[#f0edea]"
            }`}
          >
            Guía de Moldes
          </button>
          <button
            onClick={() => setCurrentTab("curves")}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              currentTab === "curves"
                ? "bg-[#eae8e5] text-[#1b1c1a] font-semibold"
                : "text-[#4f4541] hover:text-[#1b1c1a] hover:bg-[#f0edea]"
            }`}
          >
            Curvas de Atemperado
          </button>
          <button
            onClick={() => setCurrentTab("fillings")}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              currentTab === "fillings"
                ? "bg-[#eae8e5] text-[#1b1c1a] font-semibold"
                : "text-[#4f4541] hover:text-[#1b1c1a] hover:bg-[#f0edea]"
            }`}
          >
            Rellenos &amp; Ganaches
          </button>
        </nav>

        {/* Search Command Box */}
        <div className="flex items-center gap-2 flex-1 max-w-xs lg:max-w-sm ml-auto mr-2">
          <button
            type="button"
            onClick={onOpenSearch}
            className="w-full pl-9 pr-12 py-1.5 bg-[#f0edea] text-[13px] text-left font-sans text-[#1b1c1a] rounded-lg hover:bg-[#eae8e5] focus:outline-none focus:ring-1 focus:ring-[#817470] relative flex items-center transition-colors cursor-pointer group"
          >
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#817470] group-hover:text-[#1b1c1a] text-[18px]">
              search
            </span>
            <span className="text-[#817470] truncate group-hover:text-[#4f4541]">
              Buscar bombón, molde, origen...
            </span>
            <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 font-label-technical text-[10px] text-[#817470] bg-[#e5e2df] px-1.5 py-0.5 rounded shadow-2xs">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Right Action & Profile */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <button
            type="button"
            onClick={onOpenDosimetry}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#271812] text-white rounded-lg font-label-temperature text-[13px] shadow-[0_4px_14px_rgba(35,20,14,0.12)] hover:bg-[#31302f] transition-all cursor-pointer active:scale-95"
          >
            <span className="material-symbols-outlined text-[17px] text-[#fed269]">
              calculate
            </span>
            <span>Calculadora de Atemperado</span>
          </button>
        </div>
      </div>

      {/* Mobile Secondary Nav Bar */}
      <div className="xl:hidden flex items-center gap-1 px-4 py-1.5 border-t border-[#817470]/10 overflow-x-auto text-[12px] bg-[#f6f3f0]">
        <button
          onClick={() => setCurrentTab("catalog")}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${
            currentTab === "catalog"
              ? "bg-[#271812] text-white font-medium"
              : "text-[#4f4541]"
          }`}
        >
          Catálogo (50+)
        </button>
        <button
          onClick={() => setCurrentTab("curves")}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${
            currentTab === "curves"
              ? "bg-[#271812] text-white font-medium"
              : "text-[#4f4541]"
          }`}
        >
          Curvas &amp; Dosimetría
        </button>
        <button
          onClick={() => setCurrentTab("molds")}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${
            currentTab === "molds"
              ? "bg-[#271812] text-white font-medium"
              : "text-[#4f4541]"
          }`}
        >
          Guía de Moldes
        </button>
        <button
          onClick={() => setCurrentTab("fillings")}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${
            currentTab === "fillings"
              ? "bg-[#271812] text-white font-medium"
              : "text-[#4f4541]"
          }`}
        >
          Rellenos &amp; Ganaches
        </button>
      </div>
    </header>
  );
};
