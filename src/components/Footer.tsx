import React, { useState } from "react";
import { LegalModal } from "./LegalModal";

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenCredits?: () => void;
  onOpenTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<"privacy" | "terms" | "credits">("credits");

  const handleOpenLegal = (tab: "privacy" | "terms" | "credits") => {
    setLegalTab(tab);
    setLegalModalOpen(true);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 4000);
  };

  return (
    <>
      <footer className="w-full bg-[#f6f3f0] mt-12 border-t border-[#817470]/15 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        {/* Ownership Highlight Banner */}
        <div className="w-full bg-[#271812] text-white py-3.5 px-4 sm:px-6">
          <div className="max-w-[1380px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#fed269] text-[20px]">
                copyright
              </span>
              <p className="font-sans text-[13px] text-[#f3f0ed]">
                Esta plataforma web, su concepto y compendio son <strong className="text-white font-semibold">idea y propiedad exclusiva de EBYZOM E.I.R.L.</strong>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleOpenLegal("credits")}
                className="font-label-technical text-[10.5px] uppercase tracking-wider text-[#fed269] hover:underline cursor-pointer"
              >
                Ver Créditos y Titularidad
              </button>
              <span className="text-[#817470] text-xs">•</span>
              <button
                type="button"
                onClick={() => handleOpenLegal("privacy")}
                className="font-label-technical text-[10.5px] uppercase tracking-wider text-[#ddc1b6] hover:underline cursor-pointer"
              >
                Política de Privacidad
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Col 1: Brand Info & Corporate Owner */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-headline-sm text-[20px] text-[#1b1c1a] font-serif font-bold">
                  Atelier Cacao
                </h4>
                <span className="font-label-technical text-[9px] uppercase px-1.5 py-0.5 rounded bg-[#271812] text-[#fed269] font-bold">
                  EBYZOM E.I.R.L.
                </span>
              </div>
              <p className="font-body-sm text-[13px] text-[#4f4541] mb-3 leading-relaxed font-sans">
                Biblioteca técnica y compendio de bombonería fina artesanal para chocolateros profesionales y pasteleros de atelier.
              </p>
              <div className="p-3 rounded-lg bg-[#f0edea] border border-[#d3c3be]/40 mb-3 text-[12px] text-[#4f4541]">
                <span className="font-bold text-[#1b1c1a] block mb-0.5">Propiedad y Gestión:</span>
                <span>Concebida, diseñada, formulada y operada en su totalidad por <strong>EBYZOM E.I.R.L.</strong></span>
              </div>
              <div className="flex flex-col gap-1 text-label-technical text-[10px] text-[#817470] uppercase tracking-wider font-bold">
                <span>54 Fórmulas Registradas para Policarbonato</span>
                <span>Métodos Cristalográficos Beta V</span>
              </div>
            </div>

            {/* Col 2: Glossary */}
            <div>
              <h4 className="font-label-temperature text-[13px] text-[#1b1c1a] uppercase tracking-wider mb-2.5 font-bold">
                Glosario de Chocolatería
              </h4>
              <ul className="space-y-2 font-body-sm text-[13px] text-[#4f4541] font-sans">
                <li>
                  <strong className="text-[#1b1c1a] font-semibold">Cristales Beta V:</strong> Estructura polimórfica estable que aporta brillo espejo y chasquido.
                </li>
                <li>
                  <strong className="text-[#1b1c1a] font-semibold">Siembra (Seeding):</strong> Método de inducción de cristales mediante adición de habas o manteca templada.
                </li>
                <li>
                  <strong className="text-[#1b1c1a] font-semibold">Emulsión Ganache:</strong> Unión bifásica equilibrada entre lípidos lácteos/cacao y fase acuosa.
                </li>
                <li>
                  <strong className="text-[#1b1c1a] font-semibold">Encamisado:</strong> Capa de cobertura fina proyectada y drenada en cavidades de molde.
                </li>
              </ul>
            </div>

            {/* Col 3: Tempering Curves Reference */}
            <div>
              <h4 className="font-label-temperature text-[13px] text-[#1b1c1a] uppercase tracking-wider mb-2.5 font-bold">
                Temperaturas de Curva (°C)
              </h4>
              <div className="space-y-2 text-label-technical text-[11px] text-[#1b1c1a]">
                <div className="p-2 rounded bg-[#f0edea] border border-[#d3c3be]/30">
                  <span className="font-bold block text-[#1b1c1a]">Negro (Noir 65-72%)</span>
                  <span className="text-[#817470] font-normal text-[10.5px]">Fusión: 50-55°C | Cristal: 28-29°C | Trabajo: 31-32°C</span>
                </div>
                <div className="p-2 rounded bg-[#f0edea] border border-[#d3c3be]/30">
                  <span className="font-bold block text-[#1b1c1a]">Con Leche (Lait 36-40%)</span>
                  <span className="text-[#817470] font-normal text-[10.5px]">Fusión: 45-48°C | Cristal: 27-28°C | Trabajo: 29-30°C</span>
                </div>
                <div className="p-2 rounded bg-[#f0edea] border border-[#d3c3be]/30">
                  <span className="font-bold block text-[#1b1c1a]">Blanco &amp; Ruby</span>
                  <span className="text-[#817470] font-normal text-[10.5px]">Fusión: 40-45°C | Cristal: 26-27°C | Trabajo: 28-29°C</span>
                </div>
              </div>
            </div>

            {/* Col 4: Newsletter */}
            <div>
              <h4 className="font-label-temperature text-[13px] text-[#1b1c1a] uppercase tracking-wider mb-2.5 font-bold">
                Newsletter de Atelier
              </h4>
              <p className="font-body-sm text-[13px] text-[#4f4541] mb-3 leading-relaxed">
                Cuadernos técnicos mensuales, curvas térmicas de cosechas estacionales y botánica del cacao.
              </p>
              {subscribed ? (
                <div className="p-3 bg-[#e5e2df] rounded-lg text-emerald-800 text-[12px] font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  <span>¡Suscripción confirmada! Te enviaremos el cuaderno técnico nº 1.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                  <input
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-3 py-2 bg-[#fcf9f6] text-[13px] text-[#1b1c1a] rounded-lg border border-[#817470]/30 focus:outline-none focus:ring-1 focus:ring-[#817470] placeholder:text-[#817470]"
                    placeholder="chef@atelier.com"
                    type="email"
                  />
                  <button
                    className="px-4 py-2 bg-[#271812] text-white rounded-lg font-label-technical text-[11px] uppercase tracking-wider hover:bg-[#31302f] transition-colors cursor-pointer"
                    type="submit"
                  >
                    Subscribirse
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Legal Links Bar */}
          <div className="pt-4 border-t border-[#817470]/15 flex flex-wrap items-center justify-between gap-4 text-[12px] text-[#4f4541]">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-medium text-[#1b1c1a]">EBYZOM E.I.R.L.</span>
              <span className="text-[#817470]">•</span>
              <button
                type="button"
                onClick={() => handleOpenLegal("credits")}
                className="hover:text-[#1b1c1a] underline transition-colors cursor-pointer"
              >
                Créditos y Autoría
              </button>
              <span className="text-[#817470]">•</span>
              <button
                type="button"
                onClick={() => handleOpenLegal("privacy")}
                className="hover:text-[#1b1c1a] underline transition-colors cursor-pointer"
              >
                Política de Privacidad
              </button>
              <span className="text-[#817470]">•</span>
              <button
                type="button"
                onClick={() => handleOpenLegal("terms")}
                className="hover:text-[#1b1c1a] underline transition-colors cursor-pointer"
              >
                Términos del Compendio
              </button>
            </div>

            <div className="flex items-center gap-4 font-label-technical text-[10px] uppercase text-[#817470] font-bold">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#775a00]"></span>
                Precisión Térmica ±0.5°C
              </span>
              <span>Compendio Profesional ISO-22000</span>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-3 mt-3 border-t border-[#817470]/10 flex flex-col md:flex-row items-center justify-between text-[#817470] text-[11.5px] gap-2">
            <p>
              © 2025 <strong>EBYZOM E.I.R.L.</strong> Todos los derechos reservados. Esta web, sus contenidos, algoritmos y fórmulas son idea y propiedad exclusiva de EBYZOM E.I.R.L.
            </p>
            <span className="font-label-technical text-[10px] uppercase tracking-wider text-[#775a00] font-bold">
              Propiedad Intelectual Protegida
            </span>
          </div>
        </div>
      </footer>

      {/* Interactive Legal Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        initialTab={legalTab}
      />
    </>
  );
};
