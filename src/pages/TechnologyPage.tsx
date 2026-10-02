import { WaveCanvas } from '../components/WaveCanvas';
import { Quote, Sparkles, CheckCircle2, TrendingUp, Heart, Network, ArrowRight } from 'lucide-react';

interface TechnologyPageProps {
  onOpenQuote: (productName?: string) => void;
  onNavigate: (page: string) => void;
}

export function TechnologyPage({ onOpenQuote, onNavigate }: TechnologyPageProps) {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Page Header */}
      <section className="relative py-16 bg-gradient-to-b from-[#001738] via-[#05224D] to-[#001738] text-white overflow-hidden">
        <WaveCanvas opacity={0.16} speed={0.8} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase mb-2">
              Technology
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-['Poppins'] tracking-tight text-white leading-tight">
              MuLCAT® Technology
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed font-medium">
              SkyMirr's Unique MuLCAT® (Multi-Layer Coupling Controlled Antenna Technology) Is The Advanced RF Technology That Can Improve Wireless Connectivity Significantly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 max-w-7xl mx-auto px-6 space-y-20">
        
        {/* WHY NOW? */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <div className="text-xs font-bold text-blue-700 tracking-wider uppercase font-mono mb-2">
              The Need for Innovation
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-['Poppins'] leading-tight">
              WHY NOW?
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Recent 5G ramp-up in Terrestrial Communication, Satellite communication service launch, and new Wireless healthcare, are all requiring high performing trustworthy RF technology than the existing solutions.
            </p>
          </div>
        </div>

        {/* WHAT IS MulCAT? */}
        <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-700 tracking-wider uppercase font-mono mb-4">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Core Mechanism</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-['Poppins'] leading-tight mb-6">
              WHAT IS MuLCAT®?
            </h2>
            <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed max-w-4xl">
              <p>
                <strong>MuLCAT® (Multi-Layer Coupling Controlled Antenna Technology)</strong> is a unique RF technology that can improve the performance of the RF device significantly by controlling the mutual couplings between each RF element.
              </p>
              <p>
                Antennas radiate EM energy, therefore each component affects each other. We call it the "coupling" effect. Most couplings in antenna systems act negatively.
              </p>
              <div className="p-5 bg-blue-50 border border-blue-200 rounded-2xl text-blue-900 font-semibold shadow-inner">
                MuLCAT® is designed to use <em>positive couplings</em> to maximize the antenna performance.
              </div>
              <p>
                SkyMirr products with MuLCAT® are already winning in several global customers who desired to replace untrustworthy products or failed to find a suitable working solution.
              </p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="max-w-4xl mx-auto text-center py-10">
          <Quote className="w-12 h-12 text-blue-200 mx-auto mb-6" />
          <blockquote className="text-2xl sm:text-3xl font-bold font-['Poppins'] text-slate-900 italic leading-snug">
            "Whether it be radio, LAN, or otherwise, an antenna is extremely important."
          </blockquote>
          <div className="mt-6 text-sm font-mono font-bold text-slate-500 uppercase tracking-widest">
            — PIMFG.com
          </div>
        </div>

        {/* Decades of Experience & Performance Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Experience */}
          <div className="space-y-6">
            <div className="text-xs font-bold text-blue-700 tracking-wider uppercase font-mono">
              MuLCAT® Advantages
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-['Poppins'] leading-tight">
              AFTER DECADES OF ANTENNA DEV EXPERIENCE
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              The world best Engineers in SkyMirr have developed hundreds of antenna/RF products in the last few decades and shipped over hundred-millions products to global top tier customers.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              The team found out the best technology, MuLCAT, to maximize the system performance by controlling coupling between antenna components.
            </p>
          </div>

          {/* Right: Performance Improvements */}
          <div className="bg-slate-900 rounded-3xl p-8 shadow-xl text-white border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl"></div>
            
            <h3 className="text-xl font-bold font-['Poppins'] text-cyan-400 mb-6 relative z-10">
              MuLCAT® CAN IMPROVE THE PERFORMANCE
            </h3>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-cyan-300" />
                </div>
                <div>
                  <div className="text-2xl font-black font-mono text-white">&gt;100%</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Band-width</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Network className="w-5 h-5 text-cyan-300" />
                </div>
                <div>
                  <div className="text-2xl font-black font-mono text-white">&gt;92%</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Data Recognition Distance</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-cyan-300" />
                </div>
                <div>
                  <div className="text-2xl font-black font-mono text-white">&gt;65%</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider mt-1 leading-snug">
                    Higher Gain in terrestrial wireless systems and wireless healthcare devices
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* WITH MULCAT */}
        <div className="bg-blue-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl shadow-blue-600/20 relative overflow-hidden text-center">
          {/* Subtle animated waves could go here in a full deployment */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-800 to-transparent opacity-50 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black font-['Poppins'] mb-8 tracking-wide">
              WITH MuLCAT®
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <CheckCircle2 className="w-6 h-6 text-cyan-300 mb-4" />
                <p className="text-sm font-medium leading-relaxed">
                  Terrestrial wireless connectivity can be significantly improved.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <CheckCircle2 className="w-6 h-6 text-cyan-300 mb-4" />
                <p className="text-sm font-medium leading-relaxed">
                  Wireless healthcare devices can improve the data transmission distance significantly.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <CheckCircle2 className="w-6 h-6 text-cyan-300 mb-4" />
                <p className="text-sm font-medium leading-relaxed">
                  AI can be adopted to maximize the system performance.
                </p>
              </div>
            </div>
            
            <div className="mt-10">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-3.5 bg-white text-blue-700 hover:bg-slate-50 font-bold text-sm rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mx-auto cursor-pointer font-['Poppins']"
              >
                <span>Discuss MuLCAT® Implementation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
