import React from "react";

interface HeaderProps {
  currentTab: "catalog" | "recipe-detail" | "curves" | "molds" | "fillings";
  setCurrentTab: (tab: "catalog" | "recipe-detail" | "curves" | "molds" | "fillings") => void;
  onOpenSearch: () => void;
  onOpenDosimetry: () => void;
  onOpenLimaGuide?: () => void;
  selectedRecipeId?: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  onOpenSearch,
  onOpenDosimetry,
  onOpenLimaGuide,
}) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#fcf9f6]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#817470]/10">
      <div className="h-20 max-w-[1380px] mx-auto px-3 sm:px-6 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <button
            onClick={() => setCurrentTab("catalog")}
            className="flex items-center gap-2 sm:gap-2.5 text-left group cursor-pointer focus:outline-none"
          >
            <img
              alt="Atelier Cacao Logo"
              className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-Z1Iu9_kWSVWa50o88Jt0ZzYxXUaLmgmokVqHuL97ZhCiGxJr4GP6TNxb-unMaLHajN5nK1Qq_pnoERO5qGE1k97N8aHhhuwU7o5MfV9ad36PBhoa7AAePK_s3D1VfELvouaJ2Ppdy30EC0ZYSMEc2-iX0D9YoB-BAPNZxyM4I1qn5thH1RNcP7Mjc0VJZ59ibW-Ce0Zzke3R_wTVs1zsKF1eeZbQ8Hu8ukefJu-wUzcmORU6ccMF"
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-[16px] sm:text-[20px] font-bold tracking-tight text-[#1b1c1a] leading-none">
                Atelier Cacao
              </span>
              <span className="font-label-technical text-[8.5px] sm:text-[10px] tracking-widest text-[#817470] uppercase mt-0.5">
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
        <div className="flex items-center gap-1.5 sm:gap-2 flex-1 max-w-[130px] min-[420px]:max-w-[180px] sm:max-w-xs lg:max-w-sm ml-auto mr-1 sm:mr-2">
          <button
            type="button"
            onClick={onOpenSearch}
            className="w-full pl-8 sm:pl-9 pr-2 sm:pr-12 py-1.5 bg-[#f0edea] text-[12.5px] sm:text-[13px] text-left font-sans text-[#1b1c1a] rounded-lg hover:bg-[#eae8e5] focus:outline-none focus:ring-1 focus:ring-[#817470] relative flex items-center transition-colors cursor-pointer group"
          >
            <span className="material-symbols-outlined absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 text-[#817470] group-hover:text-[#1b1c1a] text-[17px] sm:text-[18px]">
              search
            </span>
            <span className="text-[#817470] truncate group-hover:text-[#4f4541]">
              <span className="hidden sm:inline">Buscar bombón, molde, origen...</span>
              <span className="sm:hidden">Buscar...</span>
            </span>
            <kbd className="hidden sm:inline-block absolute right-2.5 top-1/2 -translate-y-1/2 font-label-technical text-[10px] text-[#817470] bg-[#e5e2df] px-1.5 py-0.5 rounded shadow-2xs">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Right Action & Insumos Lima */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          {onOpenLimaGuide && (
            <button
              type="button"
              onClick={onOpenLimaGuide}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 bg-[#fed269]/25 hover:bg-[#fed269]/40 text-[#775a00] border border-[#fed269]/60 rounded-lg font-label-technical text-[10.5px] sm:text-[11px] uppercase tracking-wider transition-all cursor-pointer font-bold shadow-2xs active:scale-95"
              title="Guía de insumos, sustitutos y proveedores en Lima, Perú"
            >
              <span>🇵🇪</span>
              <span className="hidden sm:inline">Insumos Lima</span>
              <span className="sm:hidden">Lima</span>
            </button>
          )}

          <button
            type="button"
            onClick={onOpenDosimetry}
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#271812] text-white rounded-lg font-label-temperature text-[13px] shadow-[0_4px_14px_rgba(35,20,14,0.12)] hover:bg-[#31302f] transition-all cursor-pointer active:scale-95"
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
        {onOpenLimaGuide && (
          <button
            onClick={onOpenLimaGuide}
            className="px-2.5 py-1 rounded whitespace-nowrap bg-[#fed269]/35 text-[#775a00] font-bold flex items-center gap-1 shrink-0 border border-[#fed269]/60"
          >
            <span>🇵🇪</span>
            <span>Insumos Lima</span>
          </button>
        )}
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
