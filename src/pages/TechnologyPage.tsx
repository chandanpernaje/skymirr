import React, { useState, useEffect, useRef } from "react";
import { WaveCanvas } from '../components/WaveCanvas';
import { Quote, Sparkles, CheckCircle2, TrendingUp, Heart, Network, ArrowRight, Zap, ShieldCheck, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { SKYMIRR_DATA } from '../data/skymirrData';

interface TechnologyPageProps {
  onOpenQuote: (productName?: string) => void;
  onNavigate: (page: string) => void;
}

export function TechnologyPage({ onOpenQuote, onNavigate }: TechnologyPageProps) {
  const [visibleCards, setVisibleCards] = useState<Record<number, boolean>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.1 },
    );

    const cards = document.querySelectorAll(".tech-card-animate");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="pt-24 pb-20 bg-white overflow-x-hidden relative"
    >
      {/* Background Floating Gradient Orbs */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-gradient-to-br from-sky-400/10 to-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Page Header Banner */}
      <section className="relative py-16 bg-gradient-to-b from-[#001738] via-[#05224D] to-[#001738] text-white overflow-hidden">
        <WaveCanvas opacity={0.16} speed={0.8} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase mb-2">
              RF Core Innovation
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Technology
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              MuLCAT™: Multi-Layer Coupling Controlled Antenna Technology (Patents Pending)
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pt-10 sm:pt-12 space-y-12 sm:space-y-14 relative z-10">
          {/* ========================================================
              PART 1: MuLCAT™ Technology
              ======================================================== */}
          <div className="space-y-10">
            <div className="max-w-3xl animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-xs font-mono font-bold text-blue-800 uppercase tracking-wider mb-3">
                Core Architecture
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-950 font-display tracking-tight">
                MuLCAT™ Technology
              </h2>
              <p className="mt-3 text-base sm:text-lg font-semibold text-slate-700 leading-relaxed">
                SkyMirr's Unique MuLCAT™ (Multi-Layer Coupling Controlled Antenna
                Technology) Is The Advanced RF Technology That Can Improve
                Wireless Connectivity Significantly
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              {/* Left Column: Why Now & What is MuLCAT */}
              <div
                data-index={0}
                className={`tech-card-animate lg:col-span-6 space-y-6 transition-all duration-700 ease-out ${visibleCards[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              >
                <div className="glass-panel-light rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.12)] hover:border-blue-400 transition-all duration-300 group">
                  <h3 className="font-bold text-slate-950 uppercase tracking-wider font-mono text-xs flex items-center gap-2 mb-3">
                    <Zap className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                    WHY NOW?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Recent 5G ramp-up in Terrestrial Communication, Satellite
                    communication service launch, and new Wireless healthcare, are
                    all requiring high performing trustworthy RF technology than
                    the existing solutions.
                  </p>
                </div>

                <div className="glass-panel-light rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.12)] hover:border-blue-400 transition-all duration-300 group">
                  <h3 className="font-bold text-slate-950 uppercase tracking-wider font-mono text-xs flex items-center gap-2 mb-3">
                    <ShieldCheck className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                    WHAT IS MuLCAT™
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    MuLCAT™ (Multi-Layer Coupling Controlled Antenna Technology)
                    is unique RF technology that can improve the performance of
                    the RF device significantly by controlling the mutual
                    couplings between each RF element.
                  </p>
                </div>

                {/* Bullet points */}
                <div className="space-y-3.5">
                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/90 border border-slate-200/80 shadow-2xs hover:border-blue-300 transition-all">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0 mt-1.5 shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                    <span className="text-slate-700 text-xs sm:text-sm font-medium">
                      Antennas radiate EM energy therefore each components affect
                      each other. We call it "coupling" effect. Most of couplings
                      in antenna systems act negatively.
                    </span>
                  </div>
                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/90 border border-slate-200/80 shadow-2xs hover:border-blue-300 transition-all">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0 mt-1.5 shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                    <span className="text-slate-700 text-xs sm:text-sm font-medium">
                      MuLCAT™ is designed to use positive couplings to maximize
                      the antenna performance.
                    </span>
                  </div>
                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/90 border border-slate-200/80 shadow-2xs hover:border-blue-300 transition-all">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0 mt-1.5 shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                    <span className="text-slate-700 text-xs sm:text-sm font-medium">
                      SkyMirr products with MuLCAT™ are already winning in several
                      global customers who desired to replace untrustworthy
                      products or failed to find a suitable working solution.
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: MULCAT TECHNOLOGY Diagram */}
              <div
                data-index={1}
                className={`tech-card-animate lg:col-span-6 transition-all duration-700 ease-out ${visibleCards[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              >
                <div className="glass-panel-light rounded-3xl border border-slate-200/80 p-6 sm:p-10 flex flex-col items-center justify-between h-full shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_rgba(37,99,235,0.15)] transition-all duration-500 group">
                  <div className="text-center mb-6">
                    <h3 className="text-sm sm:text-base font-black text-slate-950 uppercase tracking-wider font-mono">
                      MULCAT TECHNOLOGY
                    </h3>
                    <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-100/80 px-3.5 py-1 rounded-full mt-2 inline-block border border-blue-200">
                      (PATENT &amp; TRADEMARK PENDING)
                    </span>
                  </div>

                  <div className="w-full my-4 rounded-2xl overflow-hidden border border-slate-200/80 p-4 bg-white shadow-inner relative group-hover:scale-102 transition-transform duration-700">
                    <img
                      src="/images/mulcat.jpg"
                      alt="MuLCAT Technology Patent & Trademark Pending Diagram"
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              PART 2: MuLCAT™ Advantages
              ======================================================== */}
          <div className="space-y-10 pt-10 sm:pt-12 border-t border-slate-200/80">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-xs font-mono font-bold text-blue-800 uppercase tracking-wider mb-3">
                Performance Matrix
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-950 font-display tracking-tight">
                MuLCAT™ Advantages
              </h2>
              <p className="mt-2 text-sm sm:text-base font-semibold text-slate-600">
                MuLCAT™ Is Winning / Unique Technology
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              {/* Left Column: Visual Diagram */}
              <div
                data-index={2}
                className={`tech-card-animate lg:col-span-5 transition-all duration-700 ease-out ${visibleCards[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              >
                <div className="glass-panel-light rounded-3xl border border-slate-200/80 p-6 sm:p-8 h-full flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_rgba(37,99,235,0.15)] transition-all duration-500 group">
                  <img
                    src="/images/technology2.jpg"
                    alt="MuLCAT Compact Ant for Wireless Health & Terrestrial Comm"
                    className="w-full h-auto object-contain rounded-2xl group-hover:scale-103 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Right Column: Experience, Stat Badges, and Action Blocks */}
              <div
                data-index={3}
                className={`tech-card-animate lg:col-span-7 space-y-8 transition-all duration-700 ease-out ${visibleCards[3] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              >
                <div className="glass-panel-light rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                  <h3 className="font-bold text-slate-950 text-xs sm:text-sm uppercase tracking-wider mb-2 font-mono flex items-center gap-2">
                    <Activity className="w-4 h-4 text-blue-600" />
                    AFTER DECADES OF ANTENNA DEV EXPERIENCE
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    The world's best Engineers at SkyMirr have developed hundreds
                    of antenna/RF products in the last few decades and shipped
                    over hundred-millions products to global top-tier customers.
                    The team found out the best technology, MuLCAT, to maximize
                    system performance by controlling coupling between antenna
                    components.
                  </p>
                </div>

                {/* Performance Heading & Stat Badges */}
                <div className="space-y-4">
                  <h3 className="font-bold text-slate-950 text-xs sm:text-sm uppercase tracking-wider font-mono">
                    MuLCAT™ CAN IMPROVE THE PERFORMANCE
                  </h3>

                  {/* 3 Circular Stat Badges */}
                  <div className="grid grid-cols-3 gap-4 max-w-lg">
                    {/* Badge 1 */}
                    <div className="aspect-square rounded-3xl bg-slate-900 text-white flex flex-col items-center justify-center p-3 text-center shadow-[0_10px_25px_rgba(15,23,42,0.25)] hover:scale-105 hover:bg-gradient-to-br hover:from-slate-900 hover:to-blue-950 transition-all duration-300">
                      <span className="text-xl sm:text-3xl font-black font-mono leading-none text-sky-400">
                        &gt;100%
                      </span>
                      <span className="text-[10px] sm:text-xs font-bold mt-2 leading-tight tracking-wider uppercase text-slate-300">
                        Bandwidth
                      </span>
                    </div>

                    {/* Badge 2 */}
                    <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex flex-col items-center justify-center p-3 text-center shadow-[0_10px_25px_rgba(37,99,235,0.3)] hover:scale-105 transition-all duration-300">
                      <span className="text-xl sm:text-3xl font-black font-mono leading-none text-sky-100">
                        &gt;92%
                      </span>
                      <span className="text-[9px] sm:text-[11px] font-bold mt-2 leading-tight tracking-wider uppercase text-blue-100">
                        Recognition Distance
                      </span>
                    </div>

                    {/* Badge 3 */}
                    <div className="aspect-square rounded-3xl bg-slate-900 text-white flex flex-col items-center justify-center p-3 text-center shadow-[0_10px_25px_rgba(15,23,42,0.25)] hover:scale-105 hover:bg-gradient-to-br hover:from-slate-900 hover:to-indigo-950 transition-all duration-300">
                      <span className="text-xl sm:text-3xl font-black font-mono leading-none text-sky-300">
                        &gt;65%
                      </span>
                      <span className="text-[10px] sm:text-xs font-bold mt-2 leading-tight tracking-wider uppercase text-slate-300">
                        Higher Gain
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 font-mono italic">
                    * Benchmarked in terrestrial wireless systems and wireless
                    healthcare devices
                  </p>
                </div>

                {/* WITH MuLCAT Heading */}
                <div className="space-y-4">
                  <h3 className="font-bold text-slate-950 text-xs sm:text-sm uppercase tracking-wider font-mono">
                    WITH MuLCAT™
                  </h3>

                  {/* 3 Vibrant Gradient Action Boxes */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white border border-blue-400/30 rounded-2xl p-5 text-xs font-semibold text-center shadow-[0_8px_20px_rgba(37,99,235,0.25)] hover:scale-105 transition-all duration-300 flex items-center justify-center">
                      Terrestrial wireless connectivity can be significantly
                      improved.
                    </div>
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white border border-blue-400/30 rounded-2xl p-5 text-xs font-semibold text-center shadow-[0_8px_20px_rgba(37,99,235,0.25)] hover:scale-105 transition-all duration-300 flex items-center justify-center">
                      Wireless healthcare devices can improve data transmission
                      distance significantly.
                    </div>
                    <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white border border-blue-400/30 rounded-2xl p-5 text-xs font-semibold text-center shadow-[0_8px_20px_rgba(37,99,235,0.25)] hover:scale-105 transition-all duration-300 flex items-center justify-center">
                      AI can be adopted to maximize total system performance.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 text-center">
              <p className="text-xs sm:text-sm font-semibold text-slate-700 italic glass-panel-light py-4 px-6 rounded-2xl border border-slate-200/80 max-w-2xl mx-auto shadow-sm">
                "Whether It Be Radio, LAN, Or Otherwise, An Antenna Is Extremely
                Important." —{" "}
                <a
                  href="https://www.pimfg.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 not-italic hover:underline font-bold"
                >
                  PIMFG.com
                </a>
              </p>
            </div>
          </div>
        </div>

      {/* 5 Core Advantages Section */}
      <div className="py-10 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55 }}
              className="text-center max-w-2xl mx-auto mb-10"
            >
              <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-1">
                Verified Physical Performance
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight uppercase [text-wrap:balance]">
                The 5 MuLCAT® Engineering Advantages
              </h3>
            </motion.div>

            <div className="relative">
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 pb-12 pt-8 px-4 sm:px-8" style={{ perspective: '1200px' }}>
                {SKYMIRR_DATA.mulcatTechnology.advantages.map((adv, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, z: -100, rotateY: 15 }}
                    whileInView={{ opacity: 1, z: 0, rotateY: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.8, delay: idx * 0.15, type: "spring", stiffness: 80 }}
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: -8,
                      rotateX: 8,
                      z: 50,
                      boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.25)"
                    }}
                    className="group w-full sm:w-[300px] lg:w-[320px] bg-white/90 backdrop-blur-xl border border-slate-200/80 hover:border-blue-400/80 rounded-[2rem] p-8 transition-all duration-300 shadow-xl flex flex-col hover:bg-white"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div style={{ transform: 'translateZ(30px)' }}>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white text-blue-600 font-mono font-black text-xl flex items-center justify-center mb-6 shadow-inner transition-colors duration-500">
                        0{idx + 1}
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 font-display leading-snug mb-4">
                        {adv.title}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed font-medium">
                        {adv.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
