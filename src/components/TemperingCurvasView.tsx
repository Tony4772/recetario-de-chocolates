import React, { useState, useMemo } from "react";

interface ChocolateProfile {
  name: string;
  pct: string;
  subName: string;
  dotColor: string;
  meltRange: string;
  coolRange: string;
  workRange: string;
  polyStatus: string;
  shrink: string;
  visc: string;
  meltpoint: string;
  alertTitle: string;
  alertDesc: string;
  nodeMeltY: number;
  nodeCoolY: number;
  nodeWorkY: number;
  pathD: string;
  areaD: string;
}

const CHOCOLATE_DATA: Record<string, ChocolateProfile> = {
  noir: {
    name: "Negro",
    pct: "65-72%",
    subName: "Noir Cacao",
    dotColor: "bg-[#fadcd2]",
    meltRange: "45° - 50°C",
    coolRange: "27° - 28°C",
    workRange: "31° - 32°C",
    polyStatus: "Polimorfismo V Estable",
    shrink: "2.1% ± 0.2",
    visc: "1.8 Pa·s",
    meltpoint: "34.5°C",
    alertTitle: "Ventana Térmica de Seguridad: Chocolate Negro",
    alertDesc:
      "Si supera 32.5°C durante el vertido en el molde, destruirá los gérmenes cristalinos. Mantenga en atemperadora a 31.5°C constantes.",
    nodeMeltY: 22,
    nodeCoolY: 115,
    nodeWorkY: 95,
    pathD: "M 60 22 C 160 22, 220 115, 300 115 C 380 115, 420 95, 480 95",
    areaD:
      "M 60 22 C 160 22, 220 115, 300 115 C 380 115, 420 95, 480 95 L 480 150 L 60 150 Z",
  },
  lait: {
    name: "Con Leche",
    pct: "38-42%",
    subName: "Lait Alpin",
    dotColor: "bg-[#775a00]",
    meltRange: "45° - 48°C",
    coolRange: "26° - 27°C",
    workRange: "29° - 30°C",
    polyStatus: "Sensible a Grasa Láctea",
    shrink: "1.8% ± 0.2",
    visc: "2.2 Pa·s",
    meltpoint: "33.5°C",
    alertTitle: "Ventana Térmica de Seguridad: Con Leche",
    alertDesc:
      "La grasa butírica de la leche interfiere con el empaquetamiento de la manteca de cacao. Nunca supere los 30.5°C de trabajo.",
    nodeMeltY: 34,
    nodeCoolY: 122,
    nodeWorkY: 104,
    pathD: "M 60 34 C 160 34, 220 122, 300 122 C 380 122, 420 104, 480 104",
    areaD:
      "M 60 34 C 160 34, 220 122, 300 122 C 380 122, 420 104, 480 104 L 480 150 L 60 150 Z",
  },
  blanc: {
    name: "Blanco",
    pct: "33-35%",
    subName: "Ivoire Pur",
    dotColor: "bg-[#dcdad7]",
    meltRange: "40° - 45°C",
    coolRange: "25° - 26°C",
    workRange: "28° - 29°C",
    polyStatus: "Alta Proporción Láctea",
    shrink: "1.5% ± 0.1",
    visc: "2.5 Pa·s",
    meltpoint: "32.8°C",
    alertTitle: "Ventana Térmica de Seguridad: Blanco",
    alertDesc:
      "Al no contener licor de cacao, el punto de quemado de las proteínas lácteas es muy bajo. No exceder 45°C en la fase de fusión.",
    nodeMeltY: 48,
    nodeCoolY: 128,
    nodeWorkY: 110,
    pathD: "M 60 48 C 160 48, 220 128, 300 128 C 380 128, 420 110, 480 110",
    areaD:
      "M 60 48 C 160 48, 220 128, 300 128 C 380 128, 420 110, 480 110 L 480 150 L 60 150 Z",
  },
  ruby: {
    name: "Ruby",
    pct: "47.3%",
    subName: "RB1 Acidulé",
    dotColor: "bg-[#ffb597]",
    meltRange: "43° - 45°C",
    coolRange: "26° - 27°C",
    workRange: "28.5° - 29.5°C",
    polyStatus: "Ácido Cítrico Natural",
    shrink: "1.7% ± 0.2",
    visc: "2.1 Pa·s",
    meltpoint: "33.2°C",
    alertTitle: "Ventana Térmica de Seguridad: Ruby RB1",
    alertDesc:
      "Extremadamente higroscópico y reactivo al calor. Temperaturas superiores a 45°C oxidan los pigmentos flavonoides apagando su tono rosado.",
    nodeMeltY: 44,
    nodeCoolY: 122,
    nodeWorkY: 107,
    pathD: "M 60 44 C 160 44, 220 122, 300 122 C 380 122, 420 107, 480 107",
    areaD:
      "M 60 44 C 160 44, 220 122, 300 122 C 380 122, 420 107, 480 107 L 480 150 L 60 150 Z",
  },
  gold: {
    name: "Gold",
    pct: "30.4%",
    subName: "Caramélisé",
    dotColor: "bg-[#ecc15a]",
    meltRange: "42° - 45°C",
    coolRange: "25.5° - 26.5°C",
    workRange: "28° - 29°C",
    polyStatus: "Reacción Maillard Activa",
    shrink: "1.6% ± 0.2",
    visc: "2.6 Pa·s",
    meltpoint: "32.5°C",
    alertTitle: "Ventana Térmica de Seguridad: Gold Caramelo",
    alertDesc:
      "La caramelización del suero y azúcar acelera el espesamiento. Trabaje a 28.5°C con movimientos enérgicos para evitar cristalización prematura.",
    nodeMeltY: 46,
    nodeCoolY: 125,
    nodeWorkY: 110,
    pathD: "M 60 46 C 160 46, 220 125, 300 125 C 380 125, 420 110, 480 110",
    areaD:
      "M 60 46 C 160 46, 220 125, 300 125 C 380 125, 420 110, 480 110 L 480 150 L 60 150 Z",
  },
};

interface MoldCalcOption {
  id: string;
  label: string;
  cavities: number;
  unitWeight: number;
  isHollow: boolean;
  hasGanache: boolean;
}

const MOLD_CALC_OPTIONS: MoldCalcOption[] = [
  {
    id: "bonbon-24",
    label: "Molde 24 cavidades • Bombón Esférico/Cúpula (10g c/u)",
    cavities: 24,
    unitWeight: 10,
    isHollow: false,
    hasGanache: true,
  },
  {
    id: "bonbon-28",
    label: "Molde 28 cavidades • Diamante Prismático (12g c/u)",
    cavities: 28,
    unitWeight: 12,
    isHollow: false,
    hasGanache: true,
  },
  {
    id: "bonbon-32",
    label: "Molde 32 cavidades • Lingote Rectangular (9g c/u)",
    cavities: 32,
    unitWeight: 9,
    isHollow: false,
    hasGanache: true,
  },
  {
    id: "bar-100",
    label: "Molde de Tableta Fina Degustación (100g c/u)",
    cavities: 3,
    unitWeight: 100,
    isHollow: false,
    hasGanache: false,
  },
  {
    id: "hollow-200",
    label: "Molde Figura Hueca / Pascua (200g c/u)",
    cavities: 2,
    unitWeight: 200,
    isHollow: true,
    hasGanache: false,
  },
];

export const TemperingCurvasView: React.FC = () => {
  const [selectedChoco, setSelectedChoco] = useState<string>("noir");
  const [selectedMold, setSelectedMold] = useState<string>("bonbon-24");
  const [moldCount, setMoldCount] = useState<number>(3);
  const [shellRatio, setShellRatio] = useState<number>(30);

  const profile = CHOCOLATE_DATA[selectedChoco] || CHOCOLATE_DATA.noir;

  // Dosimetry calculation
  const dosimetry = useMemo(() => {
    const moldSpec =
      MOLD_CALC_OPTIONS.find((m) => m.id === selectedMold) ||
      MOLD_CALC_OPTIONS[0];
    const totalUnits = moldSpec.cavities * moldCount;
    const totalNetWeight = totalUnits * moldSpec.unitWeight;

    let shellGrams = 0;
    let ganacheGrams = 0;
    let capGrams = 0;
    let bowlBatchGrams = 0;

    if (moldSpec.hasGanache) {
      shellGrams = Math.round(totalNetWeight * (shellRatio / 100));
      capGrams = Math.round(totalNetWeight * 0.1);
      ganacheGrams = totalNetWeight - shellGrams - capGrams;
      const totalChocNeeded = shellGrams + capGrams;
      bowlBatchGrams = Math.round(totalChocNeeded * 1.25);
    } else if (moldSpec.isHollow) {
      shellGrams = totalNetWeight;
      ganacheGrams = 0;
      capGrams = 0;
      bowlBatchGrams = Math.round(totalNetWeight * 1.3);
    } else {
      shellGrams = totalNetWeight;
      ganacheGrams = 0;
      capGrams = 0;
      bowlBatchGrams = Math.round(totalNetWeight * 1.2);
    }

    const seedMin = Math.round(bowlBatchGrams * 0.2);
    const seedMax = Math.round(bowlBatchGrams * 0.25);

    return {
      totalUnits,
      shellGrams,
      ganacheGrams,
      capGrams,
      bowlBatchGrams,
      seedMin,
      seedMax,
      hasGanache: moldSpec.hasGanache,
    };
  }, [selectedMold, moldCount, shellRatio]);

  return (
    <div className="w-full flex flex-col">
      {/* Ambient Top Glow */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[840px] h-64 bg-gradient-to-b from-[#fed269]/20 via-[#fadcd2]/10 to-transparent blur-3xl pointer-events-none rounded-full"></div>

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 pt-8 pb-10">
          {/* Technical Masthead */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#817470]/15">
            <div className="flex flex-col gap-1 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#eae8e5] text-[#4f4541] font-label-technical text-[10px] uppercase tracking-widest font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#775a00]"></span>
                  Termodinámica del Cacao • Cristales Forma β (Beta V)
                </span>
                <span className="text-[#817470] font-label-technical text-[10.5px] hidden sm:inline">
                  — v3.4 Calibrada
                </span>
              </div>
              <h1 className="font-display-hero text-[32px] sm:text-[44px] lg:text-[50px] font-serif text-[#1b1c1a] tracking-tight leading-tight mt-1">
                Curvas de Cristalización &amp; Dosimetría para Moldes
              </h1>
              <p className="font-body-md text-[15px] text-[#4f4541] mt-1 font-sans leading-relaxed">
                Sistema paramétrico para el control cinético de la manteca de
                cacao. Calcula los gradientes térmicos precisos y la volumetría de
                encamisado, ganache y sellado para moldes rígidos de
                policarbonato profesional.
              </p>
            </div>

            {/* Ambient Conditions Card */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#f0edea] shadow-xs border border-[#d3c3be]/40 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#e5e2df] flex items-center justify-center text-[#271812]">
                  <span className="material-symbols-outlined text-[20px]">
                    thermostat
                  </span>
                </div>
                <div>
                  <span className="block font-label-technical text-[10px] uppercase text-[#817470] font-bold">
                    Entorno de Taller Recomendado
                  </span>
                  <span className="font-label-temperature text-[14px] font-bold text-[#1b1c1a]">
                    18.5°C – 20.0°C
                  </span>
                </div>
              </div>
              <div className="h-8 w-px bg-[#d3c3be]/60"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#e5e2df] flex items-center justify-center text-[#271812]">
                  <span className="material-symbols-outlined text-[20px]">
                    humidity_percentage
                  </span>
                </div>
                <div>
                  <span className="block font-label-technical text-[10px] uppercase text-[#817470] font-bold">
                    Humedad Higrométrica
                  </span>
                  <span className="font-label-temperature text-[14px] font-bold text-[#1b1c1a]">
                    &lt; 50% HR
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Grid: Left Curve Engine / Right Volumetric Calculator */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-8">
            {/* Left Column: Curve Controller (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Step 1: Chocolate Profile Chips */}
              <div className="p-5 rounded-xl bg-white shadow-md border border-[#d3c3be]/35 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-label-technical text-[10px] text-[#817470] uppercase tracking-wider block font-bold">
                      Paso 01 • Perfil del Grano &amp; Manteca
                    </span>
                    <h2 className="font-headline-sm text-[20px] font-serif font-bold text-[#1b1c1a]">
                      Selección de Cobertura
                    </h2>
                  </div>
                  <span className="font-label-technical text-[10.5px] text-[#4f4541] bg-[#f0edea] px-2.5 py-1 rounded font-bold">
                    5 Perfiles Polimórficos
                  </span>
                </div>

                {/* 5 Chocolate Buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {Object.entries(CHOCOLATE_DATA).map(([key, item]) => {
                    const isActive = selectedChoco === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setSelectedChoco(key)}
                        className={`flex flex-col items-start p-3 rounded-lg text-left transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#271812] text-white shadow-sm scale-[1.02]"
                            : "bg-[#f6f3f0] text-[#1b1c1a] hover:bg-[#f0edea] hover:scale-[1.01]"
                        }`}
                      >
                        <div className="flex items-center justify-between w-full mb-1">
                          <span
                            className={`w-2.5 h-2.5 rounded-full ${item.dotColor}`}
                          ></span>
                          <span
                            className={`font-label-technical text-[10px] ${
                              isActive ? "opacity-75" : "text-[#817470]"
                            }`}
                          >
                            {item.pct}
                          </span>
                        </div>
                        <span className="font-label-temperature text-[14px] font-bold leading-tight">
                          {item.name}
                        </span>
                        <span
                          className={`font-label-technical text-[10px] mt-0.5 ${
                            isActive ? "opacity-80" : "text-[#817470]"
                          }`}
                        >
                          {item.subName}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Kinetic Thermal Curve Visualizer */}
                <div className="p-5 rounded-xl bg-[#f0edea] flex flex-col gap-3 relative overflow-hidden border border-[#d3c3be]/40">
                  <div className="flex items-center justify-between z-10">
                    <span className="font-label-technical text-[10.5px] uppercase tracking-wider text-[#817470] flex items-center gap-1.5 font-bold">
                      <span className="material-symbols-outlined text-[16px] text-[#775a00]">
                        show_chart
                      </span>
                      Curva Cinética de Cristalización
                    </span>
                    <span className="font-label-technical text-[10.5px] text-white bg-[#271812] px-2.5 py-0.5 rounded-full font-bold">
                      {profile.polyStatus}
                    </span>
                  </div>

                  {/* SVG Chart */}
                  <div className="w-full h-44 relative mt-1 z-10">
                    <svg
                      className="w-full h-full overflow-visible"
                      viewBox="0 0 540 160"
                    >
                      <defs>
                        <linearGradient
                          id="curveFillGrad"
                          x1="0%"
                          x2="100%"
                          y1="0%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#ba1a1a" stopOpacity="0.25" />
                          <stop offset="50%" stopColor="#0066cc" stopOpacity="0.15" />
                          <stop offset="100%" stopColor="#775a00" stopOpacity="0.25" />
                        </linearGradient>
                      </defs>

                      {/* Horizontal Guidelines */}
                      <line
                        x1="40"
                        x2="520"
                        y1="20"
                        y2="20"
                        stroke="currentColor"
                        strokeOpacity="0.08"
                        strokeDasharray="3 3"
                      />
                      <line
                        x1="40"
                        x2="520"
                        y1="60"
                        y2="60"
                        stroke="currentColor"
                        strokeOpacity="0.08"
                        strokeDasharray="3 3"
                      />
                      <line
                        x1="40"
                        x2="520"
                        y1="100"
                        y2="100"
                        stroke="currentColor"
                        strokeOpacity="0.08"
                        strokeDasharray="3 3"
                      />
                      <line
                        x1="40"
                        x2="520"
                        y1="140"
                        y2="140"
                        stroke="currentColor"
                        strokeOpacity="0.08"
                        strokeDasharray="3 3"
                      />

                      {/* Reference Labels */}
                      <text
                        x="32"
                        y="24"
                        textAnchor="end"
                        className="fill-[#4f4541] font-label-technical text-[9px] font-bold"
                      >
                        50°C
                      </text>
                      <text
                        x="32"
                        y="64"
                        textAnchor="end"
                        className="fill-[#4f4541] font-label-technical text-[9px] font-bold"
                      >
                        40°C
                      </text>
                      <text
                        x="32"
                        y="104"
                        textAnchor="end"
                        className="fill-[#4f4541] font-label-technical text-[9px] font-bold"
                      >
                        30°C
                      </text>
                      <text
                        x="32"
                        y="144"
                        textAnchor="end"
                        className="fill-[#4f4541] font-label-technical text-[9px] font-bold"
                      >
                        20°C
                      </text>

                      {/* Dynamic Curve */}
                      <path
                        d={profile.areaD}
                        fill="url(#curveFillGrad)"
                        className="transition-all duration-500 ease-out"
                      />
                      <path
                        d={profile.pathD}
                        fill="none"
                        stroke="#271812"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        className="transition-all duration-500 ease-out"
                      />

                      {/* Nodes */}
                      <g
                        transform={`translate(60, ${profile.nodeMeltY})`}
                        className="transition-all duration-500"
                      >
                        <circle
                          r="7"
                          fill="#ffffff"
                          stroke="#ba1a1a"
                          strokeWidth="3"
                        />
                        <circle r="2.5" fill="#ba1a1a" />
                      </g>
                      <g
                        transform={`translate(300, ${profile.nodeCoolY})`}
                        className="transition-all duration-500"
                      >
                        <circle
                          r="7"
                          fill="#ffffff"
                          stroke="#0066cc"
                          strokeWidth="3"
                        />
                        <circle r="2.5" fill="#0066cc" />
                      </g>
                      <g
                        transform={`translate(480, ${profile.nodeWorkY})`}
                        className="transition-all duration-500"
                      >
                        <circle
                          r="7"
                          fill="#ffffff"
                          stroke="#775a00"
                          strokeWidth="3"
                        />
                        <circle r="2.5" fill="#775a00" />
                      </g>
                    </svg>
                  </div>

                  {/* 3 Interactive Phase Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 z-10">
                    {/* Fase 1 */}
                    <div className="p-3 rounded-lg bg-white shadow-xs border border-[#d3c3be]/30 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-label-technical text-[10px] text-[#817470] uppercase tracking-wider font-bold">
                            Fase 1
                          </span>
                          <span className="w-2 h-2 rounded-full bg-[#ba1a1a]"></span>
                        </div>
                        <span className="font-headline-sm text-[16px] font-serif font-bold text-[#1b1c1a] block leading-tight">
                          Fusión Total
                        </span>
                        <span className="font-body-sm text-[11.5px] text-[#4f4541] block mt-0.5">
                          Disolución de cristales inestables α, γ y β'.
                        </span>
                      </div>
                      <div className="mt-3 pt-2 bg-[#f6f3f0] rounded p-2 flex items-baseline justify-between border border-[#d3c3be]/20">
                        <span className="font-label-technical text-[9.5px] uppercase text-[#817470] font-bold">
                          Objetivo
                        </span>
                        <span className="font-label-temperature text-[16px] font-bold text-[#ba1a1a]">
                          {profile.meltRange}
                        </span>
                      </div>
                    </div>

                    {/* Fase 2 */}
                    <div className="p-3 rounded-lg bg-white shadow-xs border border-[#d3c3be]/30 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-label-technical text-[10px] text-[#817470] uppercase tracking-wider font-bold">
                            Fase 2
                          </span>
                          <span className="w-2 h-2 rounded-full bg-[#0066cc]"></span>
                        </div>
                        <span className="font-headline-sm text-[16px] font-serif font-bold text-[#1b1c1a] block leading-tight">
                          Inducción β V
                        </span>
                        <span className="font-body-sm text-[11.5px] text-[#4f4541] block mt-0.5">
                          Descenso rápido para sembrar núcleos cristalinos.
                        </span>
                      </div>
                      <div className="mt-3 pt-2 bg-[#f6f3f0] rounded p-2 flex items-baseline justify-between border border-[#d3c3be]/20">
                        <span className="font-label-technical text-[9.5px] uppercase text-[#817470] font-bold">
                          Punto Frío
                        </span>
                        <span className="font-label-temperature text-[16px] font-bold text-[#0066cc]">
                          {profile.coolRange}
                        </span>
                      </div>
                    </div>

                    {/* Fase 3 */}
                    <div className="p-3 rounded-lg bg-white shadow-xs border border-[#d3c3be]/30 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-label-technical text-[10px] text-[#817470] uppercase tracking-wider font-bold">
                            Fase 3
                          </span>
                          <span className="w-2 h-2 rounded-full bg-[#775a00]"></span>
                        </div>
                        <span className="font-headline-sm text-[16px] font-serif font-bold text-[#1b1c1a] block leading-tight">
                          Zona de Moldeo
                        </span>
                        <span className="font-body-sm text-[11.5px] text-[#4f4541] block mt-0.5">
                          Viscosidad ideal y cristales estables homogéneos.
                        </span>
                      </div>
                      <div className="mt-3 pt-2 bg-[#fed269]/25 rounded p-2 flex items-baseline justify-between border border-[#fed269]/40">
                        <span className="font-label-technical text-[9.5px] uppercase text-[#775a00] font-bold">
                          Trabajo Activo
                        </span>
                        <span className="font-label-temperature text-[16px] font-bold text-[#271812]">
                          {profile.workRange}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Critical Alert Window */}
                  <div className="mt-1 p-3 rounded-lg bg-[#eae8e5] flex items-start gap-2.5 border border-[#d3c3be]/40">
                    <span className="material-symbols-outlined text-[#775a00] text-[20px] mt-0.5 shrink-0">
                      warning
                    </span>
                    <div className="text-[12.5px] font-sans text-[#1b1c1a] leading-snug">
                      <span className="font-bold block text-[#1b1c1a]">
                        {profile.alertTitle}
                      </span>
                      <span className="text-[#4f4541]">{profile.alertDesc}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Molecular Parameters Bento */}
              <div className="p-5 rounded-xl bg-white shadow-md border border-[#d3c3be]/35 flex flex-col gap-3">
                <span className="font-label-technical text-[10.5px] uppercase tracking-wider text-[#817470] font-bold">
                  Parámetros Moleculares
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-lg bg-[#f6f3f0] border border-[#d3c3be]/30">
                    <span className="font-label-technical text-[10px] uppercase text-[#817470] block font-bold">
                      Contracción Volumétrica
                    </span>
                    <span className="font-headline-sm text-[20px] font-serif font-bold text-[#1b1c1a] block mt-1">
                      {profile.shrink}
                    </span>
                    <span className="font-body-sm text-[11.5px] text-[#4f4541] block mt-0.5">
                      Suficiente para expulsión espontánea de cavidad.
                    </span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#f6f3f0] border border-[#d3c3be]/30">
                    <span className="font-label-technical text-[10px] uppercase text-[#817470] block font-bold">
                      Viscosidad Óptima (Casson)
                    </span>
                    <span className="font-headline-sm text-[20px] font-serif font-bold text-[#1b1c1a] block mt-1">
                      {profile.visc}
                    </span>
                    <span className="font-body-sm text-[11.5px] text-[#4f4541] block mt-0.5">
                      Fluidez 3 a 4 gotas para espesor de cáscara milimétrico.
                    </span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#f6f3f0] border border-[#d3c3be]/30">
                    <span className="font-label-technical text-[10px] uppercase text-[#817470] block font-bold">
                      Punto de Fusión Manteca
                    </span>
                    <span className="font-headline-sm text-[20px] font-serif font-bold text-[#1b1c1a] block mt-1">
                      {profile.meltpoint}
                    </span>
                    <span className="font-body-sm text-[11.5px] text-[#4f4541] block mt-0.5">
                      Fusión limpia instantánea al calor palatino (36.5°C).
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Mold Dosimetry Calculator (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div id="dosimetry-calculator" className="p-5 rounded-xl bg-white shadow-md border border-[#d3c3be]/35 flex flex-col gap-4 scroll-mt-28">
                <div className="flex items-center justify-between pb-1 border-b border-[#d3c3be]/25">
                  <div>
                    <span className="font-label-technical text-[10px] text-[#817470] uppercase tracking-wider block font-bold">
                      Paso 02 • Dimensionamiento de Atelier
                    </span>
                    <h2 className="font-headline-sm text-[20px] font-serif font-bold text-[#1b1c1a]">
                      Calculadora de Lotes
                    </h2>
                  </div>
                  <span className="material-symbols-outlined text-[#775a00] text-[24px]">
                    calculate
                  </span>
                </div>

                {/* Mold Selector */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-label-technical text-[10.5px] text-[#1b1c1a] uppercase tracking-wider font-bold"
                    htmlFor="mold-select"
                  >
                    Tipo de Molde Policarbonato
                  </label>
                  <div className="relative">
                    <select
                      id="mold-select"
                      value={selectedMold}
                      onChange={(e) => setSelectedMold(e.target.value)}
                      className="w-full appearance-none bg-[#f0edea] px-3.5 py-2.5 rounded-lg text-[13.5px] font-sans text-[#1b1c1a] border border-[#d3c3be]/40 focus:outline-none focus:ring-1 focus:ring-[#817470] cursor-pointer pr-10"
                    >
                      {MOLD_CALC_OPTIONS.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#817470] text-[20px]">
                      arrow_drop_down
                    </span>
                  </div>
                </div>

                {/* Number of Molds Stepper */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#f0edea] border border-[#d3c3be]/30">
                  <div>
                    <label className="font-label-temperature text-[14px] font-bold text-[#1b1c1a] block">
                      Número de Moldes
                    </label>
                    <span className="font-body-sm text-[12px] text-[#4f4541] block">
                      Placas simultáneas en pase de encamisado
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setMoldCount((c) => Math.max(1, c - 1))}
                      className="w-8 h-8 rounded bg-[#e5e2df] hover:bg-[#dcdad7] text-[#1b1c1a] flex items-center justify-center font-bold transition-colors cursor-pointer text-base"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min={1}
                      max={50}
                      value={moldCount}
                      onChange={(e) =>
                        setMoldCount(
                          Math.min(50, Math.max(1, parseInt(e.target.value) || 1))
                        )
                      }
                      className="w-12 text-center font-label-temperature text-[18px] font-bold bg-transparent text-[#1b1c1a] focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setMoldCount((c) => Math.min(50, c + 1))}
                      className="w-8 h-8 rounded bg-[#e5e2df] hover:bg-[#dcdad7] text-[#1b1c1a] flex items-center justify-center font-bold transition-colors cursor-pointer text-base"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Shell Thickness Ratio Slider */}
                <div className="flex flex-col gap-2 p-3 rounded-lg bg-[#f6f3f0] border border-[#d3c3be]/30">
                  <div className="flex justify-between items-center">
                    <label
                      className="font-label-technical text-[10.5px] uppercase text-[#817470] font-bold"
                      htmlFor="shell-slider"
                    >
                      Grosor de Casquilla / Shell
                    </label>
                    <span className="font-label-temperature text-[13.5px] text-[#1b1c1a] font-bold">
                      Cáscara ({shellRatio}%)
                    </span>
                  </div>
                  <input
                    id="shell-slider"
                    type="range"
                    min={20}
                    max={45}
                    step={5}
                    value={shellRatio}
                    onChange={(e) => setShellRatio(parseInt(e.target.value))}
                    className="w-full accent-[#271812] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-label-technical text-[#817470]">
                    <span>20% (Ultra Fina 0.8mm)</span>
                    <span>30% (Standard Haute)</span>
                    <span>45% (Relleno Denso)</span>
                  </div>
                </div>

                {/* Live Output Panel */}
                <div className="p-4 rounded-xl bg-[#f0edea] flex flex-col gap-3 border border-[#d3c3be]/35">
                  <div className="flex items-baseline justify-between pb-1.5 border-b border-[#d3c3be]/25">
                    <span className="font-label-technical text-[10px] uppercase tracking-wider text-[#817470] font-bold">
                      Desglose Gravimétrico Exacto
                    </span>
                    <span className="font-label-technical text-[10.5px] text-[#775a00] font-bold">
                      {dosimetry.totalUnits} piezas en {moldCount} molde(s)
                    </span>
                  </div>

                  {/* Gross Batch Requirement */}
                  <div className="p-3.5 rounded-lg bg-[#271812] text-white flex items-center justify-between shadow-xs">
                    <div>
                      <span className="font-label-technical text-[10px] uppercase text-[#fadcd2] block tracking-wider font-bold">
                        Chocolate a Atemperar en Cuenco
                      </span>
                      <span className="font-body-sm text-[11.5px] opacity-80">
                        Incluye +25% de lastre de vaciado para evitar burbujas
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-display-hero text-[30px] font-serif font-bold text-[#fadcd2]">
                        {dosimetry.bowlBatchGrams} g
                      </span>
                    </div>
                  </div>

                  {/* Structural Stages Breakdown */}
                  <div className="space-y-2 pt-1 font-body-sm text-[13px]">
                    {/* Casquilla */}
                    <div className="flex items-center justify-between p-2 rounded bg-white border border-[#d3c3be]/25">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-xs bg-[#271812]"></span>
                        <div>
                          <span className="font-semibold block text-[#1b1c1a]">
                            1. Encamisado (Casquillas)
                          </span>
                          <span className="text-[11px] text-[#817470]">
                            Paredes y vértices de molde
                          </span>
                        </div>
                      </div>
                      <span className="font-label-temperature text-[14px] font-bold text-[#1b1c1a]">
                        {dosimetry.shellGrams} g
                      </span>
                    </div>

                    {/* Ganache / Relleno */}
                    <div className="flex items-center justify-between p-2 rounded bg-white border border-[#d3c3be]/25">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-xs bg-[#775a00]"></span>
                        <div>
                          <span className="font-semibold block text-[#1b1c1a]">
                            2. Ganache o Praliné
                          </span>
                          <span className="text-[11px] text-[#817470]">
                            Dosificar a 27°C - 29°C (dejar 1.5mm)
                          </span>
                        </div>
                      </div>
                      <span className="font-label-temperature text-[14px] font-bold text-[#1b1c1a]">
                        {dosimetry.hasGanache
                          ? `${dosimetry.ganacheGrams} g`
                          : "0 g (N/A Macizo)"}
                      </span>
                    </div>

                    {/* Sellado / Tapa */}
                    <div className="flex items-center justify-between p-2 rounded bg-white border border-[#d3c3be]/25">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-xs bg-[#817470]"></span>
                        <div>
                          <span className="font-semibold block text-[#1b1c1a]">
                            3. Obturación / Cierre (Tapa)
                          </span>
                          <span className="text-[11px] text-[#817470]">
                            Sellado plano con rasqueta a 45°
                          </span>
                        </div>
                      </div>
                      <span className="font-label-temperature text-[14px] font-bold text-[#1b1c1a]">
                        {dosimetry.hasGanache
                          ? `${dosimetry.capGrams} g`
                          : "0 g (N/A Macizo)"}
                      </span>
                    </div>
                  </div>

                  {/* Mycryo / Seed Quick Metric */}
                  <div className="p-2.5 rounded-lg bg-[#e5e2df] flex items-center justify-between border border-[#d3c3be]/30">
                    <span className="font-label-technical text-[10.5px] uppercase text-[#4f4541] flex items-center gap-1 font-bold">
                      <span className="material-symbols-outlined text-[16px] text-[#775a00]">
                        grain
                      </span>
                      Dosis de Semilla (Método Seeding 20-25%):
                    </span>
                    <span className="font-label-temperature text-[13px] font-bold text-[#1b1c1a]">
                      {dosimetry.seedMin} g – {dosimetry.seedMax} g
                    </span>
                  </div>
                </div>

                {/* Print button */}
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#eae8e5] hover:bg-[#dcdad7] text-[#1b1c1a] font-label-technical text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer border border-[#d3c3be]/40 font-bold"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    print
                  </span>
                  Imprimir Ficha Técnica de Taller
                </button>
              </div>
            </div>
          </div>

          {/* Workshop Methods Deep-Dive (3 Distinct Protocols) */}
          <div className="mt-12 flex flex-col gap-6 pt-8 border-t border-[#817470]/15">
            <div>
              <span className="font-label-technical text-[10.5px] uppercase tracking-wider text-[#817470] block font-bold">
                Metodologías de Taller
              </span>
              <h2 className="font-headline-lg text-[26px] sm:text-[32px] font-serif font-bold text-[#1b1c1a] tracking-tight">
                Tres Procedimientos Clásicos de Inducción
              </h2>
              <p className="font-body-md text-[14.5px] text-[#4f4541] max-w-3xl mt-1 leading-relaxed">
                Cada atelier selecciona su protocolo de cristalización según el
                volumen de producción y el instrumental disponible. Los 3 métodos
                persiguen el mismo objetivo físico: multiplicar los núcleos Beta V
                polimórficos estables.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Protocol 1: Seeding */}
              <div className="p-5 rounded-xl bg-white shadow-md border border-[#d3c3be]/35 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#f0edea] flex items-center justify-center text-[#271812] mb-3">
                    <span className="material-symbols-outlined text-[26px]">
                      water_drop
                    </span>
                  </div>
                  <span className="font-label-technical text-[10.5px] uppercase text-[#817470] tracking-wider font-bold">
                    Protocolo 01 • Precisión Limpia
                  </span>
                  <h3 className="font-headline-sm text-[19px] font-serif font-bold text-[#1b1c1a] mt-0.5">
                    Sembrado (Seeding)
                  </h3>
                  <p className="font-body-sm text-[13px] text-[#4f4541] mt-2 leading-relaxed">
                    Ideal para lotes de 500g a 3kg en bol de policarbonato o
                    acero inoxidable. Requiere pastillas o trozos de chocolate
                    previamente atemperados de fábrica con cristales estables
                    intactos.
                  </p>

                  {/* Step Sequence */}
                  <div className="mt-4 space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#eae8e5] text-[#1b1c1a] font-label-technical text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                        1
                      </span>
                      <p className="font-body-sm text-[12.5px] text-[#4f4541]">
                        <strong className="text-[#1b1c1a]">Fundir el 75-80%</strong>{" "}
                        del chocolate a 45-50°C hasta eliminar toda memoria
                        cristalina.
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#eae8e5] text-[#1b1c1a] font-label-technical text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                        2
                      </span>
                      <p className="font-body-sm text-[12.5px] text-[#4f4541]">
                        <strong className="text-[#1b1c1a]">
                          Añadir el 20-25% restante
                        </strong>{" "}
                        en habas sin fundir a 20°C de forma progresiva, batiendo
                        continuamente.
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#eae8e5] text-[#1b1c1a] font-label-technical text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                        3
                      </span>
                      <p className="font-body-sm text-[12.5px] text-[#4f4541]">
                        <strong className="text-[#1b1c1a]">Homogeneizar</strong>{" "}
                        hasta alcanzar la temperatura de trabajo. Retirar trozos no
                        fundidos si la temperatura desciende de 31°C.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 bg-[#f6f3f0] rounded-lg p-3 border border-[#d3c3be]/30">
                  <span className="font-label-technical text-[9.5px] uppercase text-[#817470] block font-bold">
                    Ventaja Principal
                  </span>
                  <span className="font-body-sm text-[12.5px] font-semibold text-[#1b1c1a]">
                    Mínimo ensuciamiento y cero incorporación de burbujas de aire.
                  </span>
                </div>
              </div>

              {/* Protocol 2: Tablage */}
              <div className="p-5 rounded-xl bg-white shadow-md border border-[#d3c3be]/35 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#f0edea] flex items-center justify-center text-[#271812] mb-3">
                    <span className="material-symbols-outlined text-[26px]">
                      square_foot
                    </span>
                  </div>
                  <span className="font-label-technical text-[10.5px] uppercase text-[#817470] tracking-wider font-bold">
                    Protocolo 02 • Maestría Tradicional
                  </span>
                  <h3 className="font-headline-sm text-[19px] font-serif font-bold text-[#1b1c1a] mt-0.5">
                    Tablage sobre Mármol
                  </h3>
                  <p className="font-body-sm text-[13px] text-[#4f4541] mt-2 leading-relaxed">
                    La técnica artesanal por excelencia para grandes volúmenes.
                    Emplea la inercia térmica del mármol o granito natural para
                    forzar una cristalización uniforme y ultra veloz por fricción
                    continua.
                  </p>

                  {/* Step Sequence */}
                  <div className="mt-4 space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#eae8e5] text-[#1b1c1a] font-label-technical text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                        1
                      </span>
                      <p className="font-body-sm text-[12.5px] text-[#4f4541]">
                        <strong className="text-[#1b1c1a]">Fundir al 100%</strong>{" "}
                        y verter 2/3 de la masa total directamente sobre la losa
                        limpia y seca.
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#eae8e5] text-[#1b1c1a] font-label-technical text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                        2
                      </span>
                      <p className="font-body-sm text-[12.5px] text-[#4f4541]">
                        <strong className="text-[#1b1c1a]">
                          Extender y recoger
                        </strong>{" "}
                        enérgicamente con espátula triangular y rasqueta pastelera
                        hasta notar espesamiento pastoso (27°C).
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#eae8e5] text-[#1b1c1a] font-label-technical text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                        3
                      </span>
                      <p className="font-body-sm text-[12.5px] text-[#4f4541]">
                        <strong className="text-[#1b1c1a]">Reintegrar</strong> la
                        masa fría al tercio caliente reservado en el bol para
                        estabilizar en temperatura de encamisado.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 bg-[#f6f3f0] rounded-lg p-3 border border-[#d3c3be]/30">
                  <span className="font-label-technical text-[9.5px] uppercase text-[#817470] block font-bold">
                    Ventaja Principal
                  </span>
                  <span className="font-body-sm text-[12.5px] font-semibold text-[#1b1c1a]">
                    Excelente control visual de la viscosidad y brillo satinado
                    insuperable.
                  </span>
                </div>
              </div>

              {/* Protocol 3: Mycryo */}
              <div className="p-5 rounded-xl bg-white shadow-md border border-[#d3c3be]/35 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#f0edea] flex items-center justify-center text-[#271812] mb-3">
                    <span className="material-symbols-outlined text-[26px]">
                      science
                    </span>
                  </div>
                  <span className="font-label-technical text-[10.5px] uppercase text-[#817470] tracking-wider font-bold">
                    Protocolo 03 • Tecnología Crio-Lipídica
                  </span>
                  <h3 className="font-headline-sm text-[19px] font-serif font-bold text-[#1b1c1a] mt-0.5">
                    Siembra con Manteca Mycryo
                  </h3>
                  <p className="font-body-sm text-[13px] text-[#4f4541] mt-2 leading-relaxed">
                    Método de precisión molecular mediante polvo puro de manteca
                    de cacao 100% cristalizada en forma Beta V liofilizada.
                    Máxima reproducibilidad técnica sin alterar formulación de
                    grasa.
                  </p>

                  {/* Step Sequence */}
                  <div className="mt-4 space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#eae8e5] text-[#1b1c1a] font-label-technical text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                        1
                      </span>
                      <p className="font-body-sm text-[12.5px] text-[#4f4541]">
                        <strong className="text-[#1b1c1a]">Fundir chocolate</strong>{" "}
                        a 45°C y dejar enfriar a temperatura ambiente hasta
                        exactamente 34°C (negro) o 33°C (leche/blanco).
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#eae8e5] text-[#1b1c1a] font-label-technical text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                        2
                      </span>
                      <p className="font-body-sm text-[12.5px] text-[#4f4541]">
                        <strong className="text-[#1b1c1a]">
                          Pesar exactamente 1%
                        </strong>{" "}
                        de manteca Mycryo (10g por cada 1kg de cobertura) y
                        espolvorear tamizada.
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#eae8e5] text-[#1b1c1a] font-label-technical text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                        3
                      </span>
                      <p className="font-body-sm text-[12.5px] text-[#4f4541]">
                        <strong className="text-[#1b1c1a]">
                          Remover pausadamente
                        </strong>{" "}
                        hasta que el polvo se integre y la masa alcance la
                        temperatura de moldeo (31-32°C).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 bg-[#f6f3f0] rounded-lg p-3 border border-[#d3c3be]/30">
                  <span className="font-label-technical text-[9.5px] uppercase text-[#817470] block font-bold">
                    Ventaja Principal
                  </span>
                  <span className="font-body-sm text-[12.5px] font-semibold text-[#1b1c1a]">
                    Curva directa sin necesidad de bajar a los 27°C intermedios.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quality & Release Diagnostics */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#f6f3f0] border border-[#d3c3be]/40">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#d3c3be]/30">
              <div>
                <span className="font-label-technical text-[10.5px] uppercase tracking-wider text-[#817470] font-bold">
                  Control de Calidad en Moldes
                </span>
                <h2 className="font-headline-lg text-[24px] sm:text-[30px] font-serif font-bold text-[#1b1c1a] tracking-tight">
                  Criterios de Excelencia • Desmolde Crítico
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#775a00] text-[22px]">
                  verified
                </span>
                <span className="font-label-temperature text-[14px] text-[#1b1c1a] font-bold">
                  4 Indicadores Físicos de Éxito
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Item 1: Brillo */}
              <div className="p-5 rounded-xl bg-white shadow-xs border border-[#d3c3be]/35 flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full bg-[#f0edea] flex items-center justify-center text-[#775a00]">
                  <span className="material-symbols-outlined text-[20px]">
                    auto_awesome
                  </span>
                </div>
                <h3 className="font-headline-sm text-[17px] font-serif font-bold text-[#1b1c1a]">
                  Brillo Espejo Homogéneo
                </h3>
                <p className="font-body-sm text-[12.5px] text-[#4f4541] leading-relaxed">
                  Superficie reflectante y satinada sin estrías opacas ni
                  condensación. El brillo proviene de la copia fiel del pulido
                  micrométrico del policarbonato cuando los cristales Beta V se
                  orientan paralelamente.
                </p>
                <div className="mt-auto pt-2 text-[10.5px] font-label-technical text-[#775a00] uppercase font-bold">
                  Test: Reflexión de lámpara nítida
                </div>
              </div>

              {/* Item 2: Desmolde Espontáneo */}
              <div className="p-5 rounded-xl bg-white shadow-xs border border-[#d3c3be]/35 flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full bg-[#f0edea] flex items-center justify-center text-[#775a00]">
                  <span className="material-symbols-outlined text-[20px]">
                    eject
                  </span>
                </div>
                <h3 className="font-headline-sm text-[17px] font-serif font-bold text-[#1b1c1a]">
                  Desprendimiento Libre
                </h3>
                <p className="font-body-sm text-[12.5px] text-[#4f4541] leading-relaxed">
                  Tras 15-20 minutos a 12°C - 14°C, se observa una bolsa de aire
                  oscura entre la cavidad transparente y el bombón. Al voltear el
                  molde, caen sin necesidad de golpe violento.
                </p>
                <div className="mt-auto pt-2 text-[10.5px] font-label-technical text-[#775a00] uppercase font-bold">
                  Test: Retracción &gt; 2% confirmada
                </div>
              </div>

              {/* Item 3: Snap Acústico */}
              <div className="p-5 rounded-xl bg-white shadow-xs border border-[#d3c3be]/35 flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full bg-[#f0edea] flex items-center justify-center text-[#775a00]">
                  <span className="material-symbols-outlined text-[20px]">
                    music_note
                  </span>
                </div>
                <h3 className="font-headline-sm text-[17px] font-serif font-bold text-[#1b1c1a]">
                  Chasquido Sonoro (‘Snap’)
                </h3>
                <p className="font-body-sm text-[12.5px] text-[#4f4541] leading-relaxed">
                  Fractura acústica limpia y seca al corte o mordida, revelando
                  una textura cristalina prieta sin astillas gomosas ni migas
                  irregulares.
                </p>
                <div className="mt-auto pt-2 text-[10.5px] font-label-technical text-[#775a00] uppercase font-bold">
                  Test: Corte con bisturí templado
                </div>
              </div>

              {/* Item 4: Cero Fat Bloom */}
              <div className="p-5 rounded-xl bg-white shadow-xs border border-[#d3c3be]/35 flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full bg-[#f0edea] flex items-center justify-center text-[#775a00]">
                  <span className="material-symbols-outlined text-[20px]">
                    shield
                  </span>
                </div>
                <h3 className="font-headline-sm text-[17px] font-serif font-bold text-[#1b1c1a]">
                  Ausencia de Fat Bloom
                </h3>
                <p className="font-body-sm text-[12.5px] text-[#4f4541] leading-relaxed">
                  Inmunidad absoluta frente a la migración de triglicéridos a la
                  superficie. Sin veladuras blanquecinas provocadas por
                  enfriamiento defectuoso o ganaches demasiado calientes (&gt;29°C).
                </p>
                <div className="mt-auto pt-2 text-[10.5px] font-label-technical text-[#775a00] uppercase font-bold">
                  Test: Vida útil en vitrina &gt; 90 días
                </div>
              </div>
            </div>

            {/* Quick Blade Test Micro-Guide */}
            <div className="mt-5 p-4 rounded-xl bg-[#f0edea] flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#d3c3be]/35">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#271812] text-white flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[18px]">
                    biotech
                  </span>
                </div>
                <div>
                  <span className="font-label-temperature text-[13.5px] font-bold text-[#1b1c1a] block">
                    Prueba de Espátula (Test de Cristalización Rápida)
                  </span>
                  <span className="font-body-sm text-[12.5px] text-[#4f4541]">
                    Sumerja una punta de cuchillo o papel de guitarra en el
                    chocolate templado a temperatura ambiente (20°C).
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="px-3 py-1.5 rounded-lg bg-white font-label-technical text-[10.5px] text-[#1b1c1a] border border-[#d3c3be]/30">
                  Tiempo Esperado:{" "}
                  <span className="font-bold text-[#775a00]">3 a 5 min</span>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-white font-label-technical text-[10.5px] text-[#1b1c1a] border border-[#d3c3be]/30">
                  Aspecto:{" "}
                  <span className="font-bold text-[#1b1c1a]">
                    Mate uniforme sin huella
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
