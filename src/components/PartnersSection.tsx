import { motion } from 'framer-motion';
import { SKYMIRR_DATA } from '../data/skymirrData';
import { ExternalLink, ShieldCheck, CheckCircle2, Handshake } from 'lucide-react';

interface PartnersSectionProps {
  onNavigate?: (page: string) => void;
}

export function PartnersSection({ onNavigate }: PartnersSectionProps = {}) {
  const onlinePartners = SKYMIRR_DATA.partners.filter((p) => p.category === 'Online Partner');
  const distributors = SKYMIRR_DATA.partners.filter((p) => p.category === 'Distributor');

  return (
    <section id="partners-grid" className="scroll-mt-20 py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-200 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-mono font-bold tracking-wider uppercase mb-3">
            <Handshake className="w-3.5 h-3.5 text-blue-600" />
            <span>Authorized Sales Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight uppercase [text-wrap:balance]">
            OUR PARTNERS
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed [text-wrap:balance]">
            Products can be purchased through our distributors and online partners.
          </p>
        </motion.div>

        {/* Group 1: Online Partners with Staggered Entrance */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
              <span>Online Partners</span>
            </h3>
            <span className="text-xs font-mono text-slate-500">Official Marketplaces</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {onlinePartners.map((partner, idx) => (
              <motion.a
                key={idx}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group bg-white hover:bg-slate-50 border border-slate-200 hover:border-blue-400 rounded-2xl p-3.5 sm:p-4 flex flex-col items-center justify-between text-center transition-all duration-300 h-36 shadow-xs hover:shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-full h-16 flex items-center justify-center p-2 bg-slate-50/80 rounded-xl overflow-hidden group-hover:bg-white transition-colors">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="max-h-10 max-w-full object-contain group-hover:scale-108 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="w-full flex items-center justify-between text-[11px] text-slate-800 font-bold pt-2 font-display">
                  <span className="truncate">{partner.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors shrink-0 ml-1" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Group 2: Partners & Distributors with Staggered Entrance */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
              <span>Partners &amp; Distributors</span>
            </h3>
            <span className="text-xs font-mono text-slate-500">Global Supply Chain</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {distributors.map((partner, idx) => (
              <motion.a
                key={idx}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group bg-white hover:bg-slate-50 border border-slate-200 hover:border-cyan-500 rounded-2xl p-3.5 sm:p-4 flex flex-col items-center justify-between text-center transition-all duration-300 h-36 shadow-xs hover:shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-full h-16 flex items-center justify-center p-2 bg-slate-50/80 rounded-xl overflow-hidden group-hover:bg-white transition-colors">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="max-h-10 max-w-full object-contain group-hover:scale-108 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="w-full flex items-center justify-between text-[11px] text-slate-800 font-bold pt-2 font-display">
                  <span className="truncate">{partner.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-600 transition-colors shrink-0 ml-1" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
