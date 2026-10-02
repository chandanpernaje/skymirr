import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Radio, Network, Cpu, HeartPulse, ArrowRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { SKYMIRR_DATA } from '../data/skymirrData';

const ICONS = {
  ShieldCheck,
  Radio,
  Network,
  Cpu,
};

interface SolutionsSectionProps {
  onNavigate?: (page: string) => void;
  onOpenQuote?: (solutionName?: string) => void;
}

export function SolutionsSection({ onNavigate, onOpenQuote }: SolutionsSectionProps = {}) {
  const hardwareMedia = [
    {
      title: 'Antenna Systems',
      subtitle: 'Broadband & Wi-Fi 7 Omnis',
      image: '/images/antennas-new.jpg',
      badge: '617-5925 MHz',
      description: 'Patented MuLCAT® omnidirectional whips providing stable horizon radiation across all major 4G/5G and Wi-Fi 7 bands.',
    },
    {
      title: '5G CPE Gateways',
      subtitle: 'Sky5G™ Wireless Router',
      image: '/images/5g-routers.jpg',
      badge: 'AT&T & T-Mobile Certified',
      description: 'Enterprise wireless gateway built with dual internal MuLCAT® antennas for exceptional suburban and rural tower reach.',
    },
    {
      title: 'Industrial Telemetry',
      subtitle: 'SkyTrack™ Asset Trackers',
      image: '/images/asset-trackers.jpg',
      badge: 'IP68 & 7-Year Battery',
      description: 'Autonomous global tracking terminals with integrated MuLCAT® GPS and cellular patch modules.',
    },
  ];

  return (
    <section id="applications" className="scroll-mt-20 py-20 sm:py-24 bg-white relative overflow-hidden rf-grid border-t border-slate-200">
      {/* Ambient Radial Lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-500/6 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-[450px] h-[300px] bg-cyan-500/6 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header matching skymirr.com APPLICATIONS with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-mono font-bold tracking-wider uppercase mb-3">
            <Radio className="w-3.5 h-3.5 text-blue-600" />
            <span>Real-World Deployments &amp; Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight uppercase [text-wrap:balance]">
            APPLICATIONS
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed [text-wrap:balance]">
            We develop and manufacture advanced RF technology-based products that better our lives: such as cost-effective,
            better performing, broadband wireless communications for everyone and medical applications that treat serious disease far more effectively.
          </p>

          {onNavigate && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => onNavigate('applications')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-800 font-mono underline underline-offset-4 cursor-pointer"
              >
                <span>View All Application Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </motion.div>

        {/* 3-Column Interactive Hardware Media Preview with Staggered Fade and Slide-In */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {hardwareMedia.map((media, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={() => onNavigate ? onNavigate('products') : null}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer flex flex-col justify-between"
            >
              {/* Unobstructed Image Stage */}
              <div className="relative aspect-[16/10] w-full overflow-hidden p-4 sm:p-5 flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800">
                <div className="absolute inset-0 rf-grid opacity-20 pointer-events-none" />
                <img
                  src={media.image}
                  alt={media.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 relative z-10 filter drop-shadow-md"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 text-[10px] font-mono font-bold text-cyan-300 bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-800 uppercase tracking-wider z-20">
                  {media.badge}
                </span>
              </div>

              {/* Card Footer Bar */}
              <div className="p-5 bg-slate-900/95 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                    {media.title}
                  </span>
                  <span className="text-sm font-bold text-white font-display">
                    {media.subtitle}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0 ml-3">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4 Application Cards with Staggered Entrance Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKYMIRR_DATA.solutions.map((sol, idx) => {
            const IconComponent = ICONS[sol.icon as keyof typeof ICONS] || Radio;
            return (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white border border-slate-200 hover:border-blue-500 rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between hover:shadow-xl group shadow-xs relative overflow-hidden"
              >
                {/* Subtle top rim accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60">
                      Validated RF Solution
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-display group-hover:text-blue-700 transition-colors">
                    {sol.title}
                  </h3>
                  <div className="text-xs font-semibold text-blue-600 mt-1 font-mono">{sol.tagline}</div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">{sol.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 font-mono">
                    Key Performance Metrics
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {sol.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 text-[11px] text-slate-800 font-mono font-semibold text-center truncate shadow-2xs group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-colors"
                        title={metric}
                      >
                        {metric}
                      </div>
                    ))}
                  </div>

                  {onOpenQuote && (
                    <div className="mt-4 pt-2 flex justify-end">
                      <button
                        onClick={() => onOpenQuote(`${sol.title} Architecture`)}
                        className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer font-display"
                      >
                        <span>Inquire About {sol.title}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Long-Term Medical & Healthcare Research Box with Entrance Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 bg-gradient-to-r from-blue-900 via-[#0A2540] to-blue-950 text-white rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl border border-blue-500/20 relative overflow-hidden"
        >
          <div className="pointer-events-none absolute right-0 top-0 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full" />

          <div className="flex items-start gap-4 sm:gap-5 relative z-10">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-600/40 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0 shadow-lg">
              <HeartPulse className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-widest block mb-1">
                Biomedical Electromagnetic Science
              </span>
              <h4 className="text-lg sm:text-2xl font-bold text-white font-display">
                Pioneering Wireless Bio-Sensors &amp; Medical Disease Therapies
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                Beyond cellular telecommunications, SkyMirr applies MuLCAT® near-field coupling physics to ultra-compact
                biocompatible sensor coils (BioTrack™ MAEP103). Company revenues directly support ongoing research into
                non-invasive electromagnetic cancer detection and localized thermal ablation therapies.
              </p>
            </div>
          </div>

          <div className="shrink-0 text-left md:text-right relative z-10 w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-blue-800">
            <span className="text-xs font-mono font-bold text-cyan-300 block">Biomedical RF Research Division</span>
            <span className="text-xs text-slate-400 block mt-0.5">ISO 13485 Pipeline · Cancer Ablation</span>
            {onNavigate && (
              <button
                onClick={() => onNavigate('applications')}
                className="mt-3 w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl transition-all shadow-md shadow-blue-600/30 flex items-center justify-center gap-1.5 cursor-pointer font-display"
              >
                <span>Read Medical Research</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
