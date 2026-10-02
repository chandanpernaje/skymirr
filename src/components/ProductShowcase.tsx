import { useState } from 'react';
import { SKYMIRR_DATA, Product } from '../data/skymirrData';
import { ArrowUpRight, Award, ShieldCheck, Check, Info } from 'lucide-react';

interface ProductShowcaseProps {
  onOpenQuote: (productName?: string) => void;
}

export function ProductShowcase({ onOpenQuote }: ProductShowcaseProps) {
  const [selectedProductId, setSelectedProductId] = useState<string>('sky5g-router');
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [displayMode, setDisplayMode] = useState<'photo' | 'blueprint'>('photo');

  const currentProduct =
    SKYMIRR_DATA.products.find((p) => p.id === selectedProductId) || SKYMIRR_DATA.products[0];

  return (
    <section id="sky5g" className="py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Anti-Slop Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-blue-700 tracking-wider uppercase mb-2 font-mono">
              03. Hardware Portfolio &amp; Antennas
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-['Poppins'] tracking-tight [text-wrap:balance]">
              Production-Grade RF Systems
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              From carrier-certified 5G CPE routers to global ultra-wideband whip antennas and biomedical implants.
            </p>
          </div>

          {/* Product Selector Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 border border-slate-200 rounded-xl mt-6 md:mt-0 overflow-x-auto max-w-full">
            {SKYMIRR_DATA.products.map((p) => {
              const isSelected = p.id === selectedProductId;
              return (
                <button
                  key={p.id}
                  onClick={() => {
                    setSelectedProductId(p.id);
                    setActiveHotspot(null);
                  }}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {p.name.replace('™', '')}
                </button>
              );
            })}
          </div>
        </div>

        {/* Marquee Product Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 lg:p-10 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Hardware Interactive Stage */}
            <div className="lg:col-span-6 relative">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono text-slate-500 font-semibold uppercase tracking-wider">
                  Hardware Inspector
                </span>
                <div className="flex items-center gap-1 p-1 bg-white rounded-lg border border-slate-200 shadow-xs">
                  <button
                    onClick={() => setDisplayMode('photo')}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                      displayMode === 'photo'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Studio Photo
                  </button>
                  <button
                    onClick={() => setDisplayMode('blueprint')}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                      displayMode === 'blueprint'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Interactive Blueprint
                  </button>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center p-6 overflow-hidden">
                <div className="absolute inset-0 rf-grid-dense opacity-40" />

                {displayMode === 'photo' ? (
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <img
                      src={currentProduct.image}
                      alt={currentProduct.name}
                      className="max-h-full max-w-full object-contain filter drop-shadow-2xl"
                    />
                  </div>
                ) : currentProduct.id === 'sky5g-router' ? (
                  <div className="relative z-10 w-full max-w-[340px] flex flex-col items-center">
                    {/* Antennas */}
                    <div className="relative w-full h-16 flex justify-around px-8">
                      <div className="w-2.5 h-16 bg-gradient-to-t from-slate-700 to-cyan-400 rounded-t-sm rotate-[-12deg]" />
                      <div className="w-2.5 h-18 bg-gradient-to-t from-slate-700 to-cyan-300 rounded-t-sm rotate-[-4deg]" />
                      <div className="w-2.5 h-18 bg-gradient-to-t from-slate-700 to-cyan-300 rounded-t-sm rotate-[4deg]" />
                      <div className="w-2.5 h-16 bg-gradient-to-t from-slate-700 to-cyan-400 rounded-t-sm rotate-[12deg]" />
                    </div>

                    {/* Router Body */}
                    <div className="w-full h-44 rounded-xl bg-gradient-to-b from-slate-800 via-slate-900 to-[#070e1e] border border-slate-700 shadow-2xl p-5 flex flex-col justify-between relative">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold tracking-tight text-white font-['Poppins']">
                          SkyMirr Sky5G™
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          T-Mobile &amp; T-Priority
                        </span>
                      </div>

                      {/* Display readout */}
                      <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                        <div className="flex justify-between items-center text-[10px] font-mono text-cyan-400">
                          <span>Wi-Fi 7 · 320MHz</span>
                          <span>MuLCAT® ENGINE</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-900 rounded-full mt-2 overflow-hidden flex gap-1">
                          <div className="h-full w-1/3 bg-cyan-400 rounded-full" />
                          <div className="h-full w-1/3 bg-cyan-400 rounded-full" />
                          <div className="h-full w-1/3 bg-sky-400 rounded-full" />
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-[9px] font-mono text-slate-400 border-t border-slate-800 pt-2">
                        <span>Dual SIM · 2.5G WAN</span>
                        <span>Up to 512 Clients</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Antenna or Embedded Component Graphic */
                  <div className="relative z-10 flex flex-col items-center justify-center">
                    <div className="w-48 h-48 rounded-full border border-cyan-500/20 flex items-center justify-center animate-pulse">
                      <div className="w-36 h-36 rounded-full border border-sky-400/30 flex items-center justify-center">
                        <div className="flex flex-col items-center">
                          <div className="w-4 h-44 bg-gradient-to-b from-[#112852] to-[#0c1a36] border-x border-cyan-400/40 rounded-t-sm flex items-center justify-center">
                            <span className="text-[8px] font-mono text-cyan-300 rotate-90 select-none">
                              {currentProduct.name}
                            </span>
                          </div>
                          <div className="w-6 h-6 rounded bg-slate-800 border border-slate-600 my-0.5" />
                          <div className="w-5 h-6 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-700 rounded-b-sm" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Clickable Hotspots */}
                {displayMode === 'blueprint' &&
                  currentProduct.hotspots &&
                  currentProduct.hotspots.map((hotspot, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveHotspot(idx === activeHotspot ? null : idx)}
                      style={{ top: `${hotspot.y}%`, left: `${hotspot.x}%` }}
                      className="absolute z-20 -translate-x-1/2 -translate-y-1/2 group"
                      title={hotspot.title}
                    >
                      <span className="relative flex h-5 w-5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-cyan-500 text-slate-950 text-[10px] font-bold items-center justify-center border border-white shadow-lg">
                          +
                        </span>
                      </span>
                    </button>
                  ))}

                {/* Hotspot Tooltip overlay */}
                {displayMode === 'blueprint' && activeHotspot !== null && currentProduct.hotspots && (
                  <div className="absolute inset-x-4 bottom-4 z-30 p-3 rounded-lg bg-slate-900/95 border border-cyan-500/60 shadow-xl backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold text-cyan-300">
                        {currentProduct.hotspots[activeHotspot].title}
                      </div>
                      <button
                        onClick={() => setActiveHotspot(null)}
                        className="text-[10px] text-slate-400 hover:text-white"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="text-[11px] text-slate-300 mt-1">
                      {currentProduct.hotspots[activeHotspot].desc}
                    </div>
                  </div>
                )}
              </div>

              {currentProduct.award && (
                <div className="mt-4 flex items-center gap-2 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium">
                  <Award className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>
                    <strong className="font-bold">{currentProduct.award}</strong> · Recognized for 5G antenna engineering
                  </span>
                </div>
              )}
            </div>

            {/* Product Details & Specifications */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-blue-700 tracking-wider uppercase">
                  {currentProduct.category.toUpperCase()} SPECIFICATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-['Poppins'] mt-1">
                  {currentProduct.name}
                </h3>
                <p className="text-blue-700 text-sm font-semibold mt-1">{currentProduct.tagline}</p>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">{currentProduct.description}</p>
              </div>

              {/* Key Features List */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wide">Key Features</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentProduct.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Table in Clean White */}
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                <div className="text-xs font-bold text-slate-900 mb-3 flex items-center justify-between">
                  <span>Technical Specifications</span>
                  <span className="text-[10px] font-mono text-slate-500 font-semibold">LAB CALIBRATED</span>
                </div>

                <div className="divide-y divide-slate-100 text-xs">
                  {Object.entries(currentProduct.specs).map(([key, val]) => (
                    <div key={key} className="py-2 flex items-baseline justify-between gap-4">
                      <span className="text-slate-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="text-slate-900 font-mono font-bold text-right tabular-nums">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenQuote(currentProduct.name)}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center gap-2 shadow-sm shadow-blue-500/20"
                >
                  Request Sample / Pricing
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenQuote(`${currentProduct.name} Datasheet`)}
                  className="px-5 py-2.5 text-xs font-semibold text-slate-800 hover:text-blue-700 bg-white border border-slate-300 rounded-lg transition-colors shadow-sm"
                >
                  Download Engineering Datasheet (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
