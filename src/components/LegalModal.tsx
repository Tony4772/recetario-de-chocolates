import React, { useState } from "react";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: "privacy" | "terms" | "credits";
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  initialTab = "credits",
}) => {
  const [activeTab, setActiveTab] = useState<"privacy" | "terms" | "credits">(initialTab);

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
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-[0px_24px_48px_-12px_rgba(35,20,14,0.35)] flex flex-col border border-[#d3c3be]/45 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 bg-[#f6f3f0] border-b border-[#817470]/15 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-label-technical text-[10.5px] uppercase tracking-wider text-[#775a00] font-bold bg-[#fed269]/25 px-2 py-0.5 rounded border border-[#fed269]/40">
                Aviso Legal y Titularidad
              </span>
              <span className="font-label-technical text-[10.5px] text-[#4f4541] uppercase tracking-wider">
                EBYZOM E.I.R.L.
              </span>
            </div>
            <h2 className="font-headline-md text-[24px] font-serif font-bold text-[#1b1c1a]">
              Información Legal &amp; Propiedad
            </h2>
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

        {/* Tab Navigation */}
        <div className="flex border-b border-[#d3c3be]/35 bg-[#f0edea]/60 px-6 gap-2">
          <button
            onClick={() => setActiveTab("credits")}
            className={`py-3 px-3 font-label-technical text-[11px] uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              activeTab === "credits"
                ? "border-[#271812] text-[#1b1c1a] font-bold"
                : "border-transparent text-[#817470] hover:text-[#1b1c1a]"
            }`}
          >
            Créditos y Propiedad
          </button>
          <button
            onClick={() => setActiveTab("privacy")}
            className={`py-3 px-3 font-label-technical text-[11px] uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              activeTab === "privacy"
                ? "border-[#271812] text-[#1b1c1a] font-bold"
                : "border-transparent text-[#817470] hover:text-[#1b1c1a]"
            }`}
          >
            Política de Privacidad
          </button>
          <button
            onClick={() => setActiveTab("terms")}
            className={`py-3 px-3 font-label-technical text-[11px] uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              activeTab === "terms"
                ? "border-[#271812] text-[#1b1c1a] font-bold"
                : "border-transparent text-[#817470] hover:text-[#1b1c1a]"
            }`}
          >
            Términos y Condiciones
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 text-[#1b1c1a] font-sans text-[13.5px] leading-relaxed">
          {activeTab === "credits" && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#fed269]/15 border border-[#fed269]/40 flex items-start gap-3">
                <span className="material-symbols-outlined text-[#775a00] text-[26px] shrink-0 mt-0.5">
                  verified
                </span>
                <div>
                  <h3 className="font-serif font-bold text-[17px] text-[#1b1c1a] mb-1">
                    Declaración Expresa de Autoría y Propiedad
                  </h3>
                  <p className="text-[#4f4541] text-[13px] leading-relaxed">
                    Se hace constar de manera fehaciente que esta plataforma digital, la concepción del compendio gastronómico,
                    las formulaciones cristalográficas, algoritmos de dosimetría térmica y toda la arquitectura del sistema
                    son <strong>idea original y propiedad exclusiva de EBYZOM E.I.R.L.</strong>
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-serif font-bold text-[16px] text-[#1b1c1a] mb-2">
                  1. Titularidad del Proyecto y Derechos Reservados
                </h4>
                <p className="text-[#4f4541] leading-relaxed">
                  <strong>EBYZOM E.I.R.L.</strong> ostenta la plena y exclusiva titularidad de todos los derechos de propiedad intelectual,
                  derechos de autor, secretos comerciales, marcas, bases de datos técnicas, curvas térmicas y diseños de interfaz
                  incorporados en la presente aplicación web <em>Atelier Cacao - Fernandina de Jagua</em>.
                </p>
              </div>

              <div>
                <h4 className="font-serif font-bold text-[16px] text-[#1b1c1a] mb-2">
                  2. Créditos del Compendio Gastronómico y Técnico
                </h4>
                <ul className="list-disc list-inside space-y-1.5 text-[#4f4541]">
                  <li><strong>Concepción e Idea Original:</strong> EBYZOM E.I.R.L.</li>
                  <li><strong>Curaduría Técnica y Fórmulas de Molde:</strong> Equipo Técnico de EBYZOM E.I.R.L.</li>
                  <li><strong>Modelado Cristalográfico y Dosimetría:</strong> EBYZOM E.I.R.L.</li>
                  <li><strong>Desarrollo de Software y Diseño de UI:</strong> EBYZOM E.I.R.L.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-serif font-bold text-[16px] text-[#1b1c1a] mb-2">
                  3. Prohibición de Reproducción No Autorizada
                </h4>
                <p className="text-[#4f4541] leading-relaxed">
                  Queda estrictamente prohibida la copia total o parcial, reproducción comercial, scraping automatizado, ingeniería inversa,
                  distribución o comercialización no autorizada de las fórmulas, métodos y software propiedad de <strong>EBYZOM E.I.R.L.</strong>
                  sin consentimiento previo, expreso y por escrito.
                </p>
              </div>
            </div>
          )}

          {activeTab === "privacy" && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#f6f3f0] border border-[#d3c3be]/40">
                <span className="font-label-technical text-[10.5px] uppercase tracking-wider text-[#775a00] font-bold block mb-1">
                  Responsable del Tratamiento de Datos
                </span>
                <p className="text-[#1b1c1a] font-medium text-[14px]">
                  <strong>EBYZOM E.I.R.L.</strong> es la persona jurídica titular y responsable del tratamiento
                  de cualquier dato proporcionado o procesado en esta plataforma.
                </p>
              </div>

              <div>
                <h4 className="font-serif font-bold text-[16px] text-[#1b1c1a] mb-2">
                  1. Finalidad y Recopilación de Datos
                </h4>
                <p className="text-[#4f4541] leading-relaxed">
                  La aplicación recopila únicamente la información estrictamente necesaria para la prestación del servicio técnico:
                  suscripciones al boletín de obrador, preferencias de escala de recetas y configuraciones en almacenamiento local del navegador.
                  <strong>EBYZOM E.I.R.L.</strong> no vende, cede ni transfiere datos de usuarios a terceros con fines publicitarios.
                </p>
              </div>

              <div>
                <h4 className="font-serif font-bold text-[16px] text-[#1b1c1a] mb-2">
                  2. Privacidad de Fórmulas y Preferencias Locales
                </h4>
                <p className="text-[#4f4541] leading-relaxed">
                  Las marcas de verificación de mise-en-place, historial de cálculos de lotes de molde y notas personalizadas se procesan
                  localmente en el dispositivo del usuario para garantizar máxima velocidad y total privacidad en el taller.
                </p>
              </div>

              <div>
                <h4 className="font-serif font-bold text-[16px] text-[#1b1c1a] mb-2">
                  3. Ejercicio de Derechos ARCO
                </h4>
                <p className="text-[#4f4541] leading-relaxed">
                  Cualquier usuario puede solicitar el acceso, rectificación, cancelación u oposición al tratamiento de sus datos
                  dirigiendo una comunicación formal al departamento legal de <strong>EBYZOM E.I.R.L.</strong>
                </p>
              </div>
            </div>
          )}

          {activeTab === "terms" && (
            <div className="space-y-4">
              <div>
                <h4 className="font-serif font-bold text-[16px] text-[#1b1c1a] mb-2">
                  1. Aceptación de los Términos
                </h4>
                <p className="text-[#4f4541] leading-relaxed">
                  El acceso y utilización del compendio técnico implica la aceptación plena e incondicional de los presentes términos
                  establecidos por <strong>EBYZOM E.I.R.L.</strong>
                </p>
              </div>

              <div>
                <h4 className="font-serif font-bold text-[16px] text-[#1b1c1a] mb-2">
                  2. Uso Profesional y Académico
                </h4>
                <p className="text-[#4f4541] leading-relaxed">
                  Las formulaciones están destinadas para uso en obradores profesionales, pastelerías artesanales y estudiantes
                  de chocolatería. <strong>EBYZOM E.I.R.L.</strong> garantiza el rigor de las proporciones fisicoquímicas y curvas
                  de temperatura indicadas según las normas higiénico-sanitarias y cristalográficas estándar.
                </p>
              </div>

              <div>
                <h4 className="font-serif font-bold text-[16px] text-[#1b1c1a] mb-2">
                  3. Jurisdicción y Legislación Aplicable
                </h4>
                <p className="text-[#4f4541] leading-relaxed">
                  Cualquier controversia relacionada con la titularidad, propiedad intelectual o uso de esta aplicación
                  se regirá por la legislación mercantil y civil aplicable a <strong>EBYZOM E.I.R.L.</strong>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#f6f3f0] border-t border-[#817470]/15 flex items-center justify-between">
          <span className="font-label-technical text-[10px] text-[#817470] uppercase">
            © 2025 EBYZOM E.I.R.L. • Todos los derechos reservados
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#271812] hover:bg-[#31302f] text-white rounded-lg font-label-technical text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
