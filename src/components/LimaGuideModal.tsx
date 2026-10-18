import React, { useState } from "react";
import {
  LIMA_SUPPLY_POINTS,
  PERUVIAN_CHOC_BRANDS,
  PERU_INGREDIENT_EQUIVALENTS,
} from "../data/limaIngredients";

interface LimaGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LimaGuideModal: React.FC<LimaGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<"suppliers" | "chocolates" | "substitutes">(
    "suppliers"
  );

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#31302f]/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-[0px_24px_48px_-12px_rgba(35,20,14,0.35)] flex flex-col border border-[#d3c3be]/45 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 bg-[#f6f3f0] border-b border-[#817470]/15 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="font-label-technical text-[10.5px] uppercase tracking-wider text-[#775a00] font-bold bg-[#fed269]/25 px-2.5 py-0.5 rounded border border-[#fed269]/40 flex items-center gap-1">
                <span>🇵🇪</span>
                <span>Guía Oficial para Chocolateros en Lima</span>
              </span>
              <span className="text-[#817470] text-xs">•</span>
              <span className="font-label-technical text-[10.5px] text-[#4f4541] uppercase tracking-wider">
                EBYZOM E.I.R.L.
              </span>
            </div>
            <h2 className="font-headline-md text-[24px] font-serif font-bold text-[#1b1c1a]">
              Insumos, Coberturas y Proveedores en Lima, Perú
            </h2>
            <p className="font-body-sm text-[13px] text-[#4f4541] mt-1">
              Cómo elaborar bombones y tabletas de nivel internacional utilizando coberturas peruanas
              e insumos disponibles en mercados, distribuidoras y tiendas de Lima.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#eae8e5] text-[#1b1c1a] flex items-center justify-center hover:bg-[#d3c3be] transition-colors cursor-pointer"
            type="button"
            aria-label="Cerrar modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Climate Warning Alert (Specific to Lima) */}
        <div className="bg-[#fadcd2]/40 p-4 border-b border-[#fadcd2] flex items-start gap-3">
          <span className="material-symbols-outlined text-[#ba1a1a] text-[22px] shrink-0 mt-0.5">
            thermostat
          </span>
          <div className="text-[12.5px] text-[#360f00]">
            <strong className="block font-semibold">
              Regla de Oro para el Clima de Lima (Humedad &gt; 80%):
            </strong>
            <span>
              Lima tiene una humedad relativa muy alta (80-90%). El azúcar absorbe humedad ambiente
              provocando condensación superficial (sugar bloom) y pérdida de brillo en los moldes.
              Trabaje en un espacio con <strong>aire acondicionado o deshumidificador a 18-20°C y menos de 60% de humedad</strong>.
            </span>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex border-b border-[#d3c3be]/35 bg-[#f0edea]/60 px-6 gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab("suppliers")}
            className={`py-3 px-3 font-label-technical text-[11px] uppercase tracking-wider border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === "suppliers"
                ? "border-[#271812] text-[#1b1c1a] font-bold"
                : "border-transparent text-[#817470] hover:text-[#1b1c1a]"
            }`}
          >
            📍 Dónde Comprar en Lima
          </button>
          <button
            onClick={() => setActiveTab("chocolates")}
            className={`py-3 px-3 font-label-technical text-[11px] uppercase tracking-wider border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === "chocolates"
                ? "border-[#271812] text-[#1b1c1a] font-bold"
                : "border-transparent text-[#817470] hover:text-[#1b1c1a]"
            }`}
          >
            🍫 Coberturas Peruanas Recomendadas
          </button>
          <button
            onClick={() => setActiveTab("substitutes")}
            className={`py-3 px-3 font-label-technical text-[11px] uppercase tracking-wider border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === "substitutes"
                ? "border-[#271812] text-[#1b1c1a] font-bold"
                : "border-transparent text-[#817470] hover:text-[#1b1c1a]"
            }`}
          >
            🔄 Tabla de Sustituciones Locales
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-6 sm:p-8 space-y-6">
          {activeTab === "suppliers" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {LIMA_SUPPLY_POINTS.map((pt, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#f6f3f0] border border-[#d3c3be]/40 flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-label-technical text-[9.5px] uppercase tracking-wider text-[#775a00] font-bold block mb-1">
                        {pt.zone}
                      </span>
                      <h4 className="font-serif font-bold text-[16px] text-[#1b1c1a] mb-1">
                        {pt.name}
                      </h4>
                      <p className="font-body-sm text-[12px] text-[#817470] flex items-center gap-1 mb-2">
                        <span className="material-symbols-outlined text-[15px]">location_on</span>
                        {pt.address}
                      </p>
                      <div className="text-[12.5px] text-[#4f4541] mb-2">
                        <strong>Especialidad:</strong> {pt.specialty}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-[#d3c3be]/25 text-[11.5px] text-[#775a00] font-medium">
                      💡 {pt.notes}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "chocolates" && (
            <div className="space-y-4">
              <p className="text-[13px] text-[#4f4541]">
                Perú produce algunos de los mejores cacaos del mundo (Cacao Blanco de Piura, Chuncho del Cusco,
                San Martín, Ucayali). Estas coberturas están formuladas con manteca de cacao pura y se atemperan
                perfectamente en molde:
              </p>
              <div className="space-y-3">
                {PERUVIAN_CHOC_BRANDS.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-[#d3c3be]/40 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="max-w-md">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-label-technical text-[10px] uppercase tracking-wider bg-[#271812] text-white px-2 py-0.5 rounded font-bold">
                          {item.cacaoPct}
                        </span>
                        <h4 className="font-serif font-bold text-[15px] text-[#1b1c1a]">
                          {item.brand}
                        </h4>
                      </div>
                      <p className="text-[12px] text-[#775a00] font-medium">
                        {item.variety} ({item.origin})
                      </p>
                      <p className="text-[12px] text-[#4f4541] mt-1">
                        <strong>Disponibilidad:</strong> {item.availabilityInLima}
                      </p>
                    </div>

                    <div className="bg-[#f6f3f0] p-2.5 rounded-lg border border-[#d3c3be]/30 flex items-center gap-3 shrink-0 text-center">
                      <div>
                        <span className="font-label-technical text-[9px] text-[#817470] block">Fusión</span>
                        <span className="font-label-temperature text-[12px] text-[#ba1a1a] font-bold">{item.meltTemp}</span>
                      </div>
                      <div className="w-px h-6 bg-[#d3c3be]/40"></div>
                      <div>
                        <span className="font-label-technical text-[9px] text-[#817470] block">Cristal</span>
                        <span className="font-label-temperature text-[12px] text-[#0066cc] font-bold">{item.coolTemp}</span>
                      </div>
                      <div className="w-px h-6 bg-[#d3c3be]/40"></div>
                      <div>
                        <span className="font-label-technical text-[9px] text-[#817470] block">Trabajo</span>
                        <span className="font-label-temperature text-[12px] text-[#775a00] font-bold">{item.workTemp}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "substitutes" && (
            <div className="space-y-4">
              <p className="text-[13px] text-[#4f4541]">
                Si una receta del compendio pide un ingrediente europeo o de difícil importación,
                utilice estos sustitutos peruanos equivalentes que además ofrecen un sabor aún más rico:
              </p>
              <div className="overflow-x-auto rounded-xl border border-[#d3c3be]/40">
                <table className="w-full text-left text-[12.5px]">
                  <thead className="bg-[#f0edea] text-[#817470] font-label-technical text-[10px] uppercase">
                    <tr>
                      <th className="p-3">Ingrediente Extranjero / Complejo</th>
                      <th className="p-3">Equivalente Perfecto en Lima, Perú</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#d3c3be]/25">
                    {PERU_INGREDIENT_EQUIVALENTS.map(([foreign, local], i) => (
                      <tr key={i} className="hover:bg-[#f6f3f0]">
                        <td className="p-3 font-medium text-[#1b1c1a]">{foreign}</td>
                        <td className="p-3 text-[#775a00] font-semibold flex items-center gap-1.5">
                          <span>🇵🇪</span>
                          <span>{local}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#f6f3f0] border-t border-[#817470]/15 flex items-center justify-between text-[11px] font-label-technical text-[#817470] uppercase">
          <span>Atelier Cacao • EBYZOM E.I.R.L. Lima - Perú</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#271812] hover:bg-[#31302f] text-white rounded-lg font-bold transition-colors cursor-pointer"
          >
            Cerrar Guía
          </button>
        </div>
      </div>
    </div>
  );
};
