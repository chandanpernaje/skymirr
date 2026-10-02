import { motion } from 'framer-motion';
import { SKYMIRR_DATA } from '../data/skymirrData';
import { Store, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface CustomerSuccessSectionProps {
  onOpenQuote: (productName?: string) => void;
}

export function CustomerSuccessSection({ onOpenQuote }: CustomerSuccessSectionProps) {
  const scenario = SKYMIRR_DATA.customerSuccess;

  return (
    <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-200 relative overflow-hidden rf-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-mono font-bold tracking-wider uppercase mb-3">
            <Store className="w-3.5 h-3.5 text-blue-600" />
            <span>{scenario.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight uppercase [text-wrap:balance]">
            {scenario.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed [text-wrap:balance]">
            Case Study: How a nationwide multi-location retail chain avoided costly fiber deployment delays using SkyMirr Sky5G™ routers and MuLCAT® wireless fabric.
          </p>
        </motion.div>

        {/* Bento Grid: Challenge, Solution, Result & Official Photo with Framer Motion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Challenge & Solution */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Real retail case study photo with responsive height & perfect image fit */}
            <div className="h-56 sm:h-64 lg:h-72 w-full rounded-3xl overflow-hidden border border-slate-200 shadow-sm relative group bg-slate-900">
              <img
                src="/images/retail-main.jpg"
                alt="Retail Expansion Without Connectivity Delays"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-5">
                <span className="text-xs font-mono font-bold text-cyan-200 uppercase tracking-wider block">
                  Enterprise Retail Deployment · Nationwide Rollout
                </span>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-600 uppercase mb-2">
                <span className="w-2 h-2 rounded-full bg-rose-600" />
                <span>The Challenge</span>
              </div>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                {scenario.challenge}
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-700 uppercase mb-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>The SkyMirr Solution</span>
              </div>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                {scenario.solution}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Verified Outcome & Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 bg-gradient-to-br from-blue-600 via-blue-700 to-sky-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="text-xs font-mono font-bold text-sky-200 uppercase tracking-wider mb-2">
                Verified Outcome
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display leading-snug">
                Zero Retail Downtime Across 10 Launch Sites
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 mt-3 leading-relaxed">
                {scenario.result}
              </p>
            </div>

            <div className="pt-6 border-t border-blue-400/40 mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {scenario.metrics.map((m, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-xs rounded-xl p-3 text-center border border-white/20">
                    <div className="text-base sm:text-lg font-bold font-mono text-white">{m.value}</div>
                    <div className="text-[10px] text-blue-100 font-medium mt-0.5 leading-tight">{m.label}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onOpenQuote('Enterprise Retail FWA Gateway')}
                className="w-full py-3.5 px-4 bg-white hover:bg-blue-50 text-blue-700 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-md active:scale-98 cursor-pointer font-display"
              >
                <span>Deploy Retail &amp; Enterprise Gateways</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
