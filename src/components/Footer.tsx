import React, { useState } from "react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

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
    <footer className="w-full bg-[#f6f3f0] mt-12 border-t border-[#817470]/15 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand Info */}
          <div>
            <h4 className="font-headline-sm text-[20px] text-[#1b1c1a] mb-2 font-serif font-bold">
              Atelier Cacao
            </h4>
            <p className="font-body-sm text-[13px] text-[#4f4541] mb-4 leading-relaxed font-sans">
              Biblioteca técnica y compendio de bombonería fina artesanal para chocolateros profesionales y pasteleros de atelier.
            </p>
            <div className="flex flex-col gap-1 text-label-technical text-[10px] text-[#817470] uppercase tracking-wider font-bold">
              <span>50+ Fórmulas Policarbonato</span>
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

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-[#817470]/15 flex flex-col md:flex-row items-center justify-between text-[#4f4541] text-[12px] gap-2">
          <p>© 2025 Atelier Cacao. Biblioteca Gastronómica de Bombonería para Moldes. Reservados todos los derechos.</p>
          <div className="flex items-center gap-4 font-label-technical text-[10px] uppercase text-[#817470] font-bold">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#775a00]"></span>
              Precisión Térmica ±0.5°C
            </span>
            <span>Compendio Profesional ISO-22000</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
