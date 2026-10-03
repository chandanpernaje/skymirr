import React, { useState, useEffect, useRef } from "react";
import { WaveCanvas } from '../components/WaveCanvas';
import { Quote, Sparkles, CheckCircle2, TrendingUp, Heart, Network, ArrowRight, Zap, ShieldCheck, Activity, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TechnologyPageProps {
  onOpenQuote: (productName?: string) => void;
  onNavigate: (page: string) => void;
}

export function TechnologyPage({ onOpenQuote, onNavigate }: TechnologyPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Advanced scroll effects for hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="bg-white overflow-hidden font-sans selection:bg-blue-900 selection:text-white">
      
      {/* 1. IMMERSIVE FORTUNE 500 HERO SECTION */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-950">
        
        {/* Parallax Background */}
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
          <img 
            src="/images/enterprise_hero.jpg" 
            alt="Advanced Network Connectivity" 
            className="w-full h-full object-cover object-center opacity-40 mix-blend-screen"
          />
          {/* Gradients to blend into content below */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 w-full pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-mono tracking-[0.2em] text-cyan-300 uppercase font-bold">
                Proprietary RF Architecture
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] text-white font-display">
              The Engine of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
                Connectivity.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light max-w-2xl">
              Meet <strong className="text-white font-medium">MuLCAT™</strong> — Multi-Layer Coupling Controlled Antenna Technology. Unbreakable, lightning-fast, and engineered from the ground up for the global 5G and IoT infrastructure.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => {
                  document.getElementById("hardware-reveal")?.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-sm font-bold tracking-wide transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] flex items-center gap-2 group"
              >
                Discover MuLCAT
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transition Band */}
      <div className="w-full h-24 bg-gradient-to-b from-slate-950 to-white" />

      {/* 2. MASSIVE HARDWARE REVEAL (Radisys / Peplink Style Edge-to-Edge) */}
      <section id="hardware-reveal" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Text Side (Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl sm:text-5xl font-black text-slate-900 font-display tracking-tight leading-[1.1]">
                  Mastering the <br/><span className="text-blue-600">Coupling Effect.</span>
                </h2>
                <p className="mt-6 text-lg text-slate-600 leading-relaxed font-light">
                  In traditional RF engineering, components inevitably affect each other—a phenomenon known as the "coupling" effect, which typically degrades signal quality. 
                  <br/><br/>
                  <strong className="text-slate-900 font-medium">MuLCAT™ turns this weakness into an advantage.</strong> We engineered a multi-layer architecture that harnesses <i>positive</i> coupling, drastically amplifying overall device performance beyond physical limitations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900">Total Optimization</h4>
                  <p className="text-sm text-slate-500">Perfectly synced internal resonance across all frequencies.</p>
                </div>
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900">Tier-One Trust</h4>
                  <p className="text-sm text-slate-500">Deployed and trusted by global enterprises demanding flawless connectivity.</p>
                </div>
              </div>
            </motion.div>

            {/* Immersive Hardware Render Side (Right) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden group shadow-2xl"
            >
              <div className="aspect-[4/3] sm:aspect-[4/4] lg:aspect-[4/5] relative">
                <img 
                  src="/images/hardware_render.jpg" 
                  alt="SkyMirr Enterprise Router and Antenna" 
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                />
                
                {/* Tech Annotations / Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10" />
                
                <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
                   <div>
                     <div className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Hardware Presentation</div>
                     <h3 className="text-white font-display text-2xl font-bold">5G Ultra Series</h3>
                   </div>
                   <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-colors text-white">
                     <ChevronRight className="w-5 h-5" />
                   </button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* 3. PERFORMANCE METRICS (High Contrast Corporate Grid) */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight">
              Unprecedented <span className="text-cyan-400">Metrics.</span>
            </h2>
            <p className="mt-4 text-slate-400 text-lg">
              Benchmarked across terrestrial wireless systems and critical healthcare devices, MuLCAT™ provides measurable, undeniable leaps in efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {/* Metric 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-10 rounded-2xl shadow-xl flex flex-col items-center text-center group"
            >
              <div className="text-6xl font-black font-mono text-white mb-2 group-hover:text-blue-400 transition-colors">
                &gt;100<span className="text-3xl">%</span>
              </div>
              <div className="h-px w-12 bg-slate-700 my-4 group-hover:bg-blue-500 transition-colors" />
              <h4 className="text-lg font-bold text-slate-200 uppercase tracking-wider mb-2">Bandwidth Increase</h4>
              <p className="text-sm text-slate-500">Massive throughput improvements compared to legacy antenna arrays.</p>
            </motion.div>

            {/* Metric 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-10 rounded-2xl shadow-xl flex flex-col items-center text-center group"
            >
              <div className="text-6xl font-black font-mono text-white mb-2 group-hover:text-cyan-400 transition-colors">
                &gt;92<span className="text-3xl">%</span>
              </div>
              <div className="h-px w-12 bg-slate-700 my-4 group-hover:bg-cyan-500 transition-colors" />
              <h4 className="text-lg font-bold text-slate-200 uppercase tracking-wider mb-2">Recognition Distance</h4>
              <p className="text-sm text-slate-500">Enhanced signal integrity resulting in nearly double the effective range.</p>
            </motion.div>

            {/* Metric 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-10 rounded-2xl shadow-xl flex flex-col items-center text-center group"
            >
              <div className="text-6xl font-black font-mono text-white mb-2 group-hover:text-indigo-400 transition-colors">
                &gt;65<span className="text-3xl">%</span>
              </div>
              <div className="h-px w-12 bg-slate-700 my-4 group-hover:bg-indigo-500 transition-colors" />
              <h4 className="text-lg font-bold text-slate-200 uppercase tracking-wider mb-2">Higher Gain</h4>
              <p className="text-sm text-slate-500">Positive coupling mechanics directly multiply the base antenna gain.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRY APPLICATIONS (Edge-to-Edge staggered grid) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-display">
              Empowering Every Industry
            </h2>
            <div className="w-20 h-1 bg-blue-600 mt-6" />
          </div>

          <div className="space-y-6">
            
            {/* Feature Row 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => onNavigate('products')}
            >
              <div className="w-full md:w-1/3 bg-blue-50 p-8 flex flex-col justify-center border-r border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                <Network className="w-10 h-10 text-blue-600 group-hover:text-white mb-6" />
                <h3 className="text-2xl font-bold font-display mb-2">Terrestrial Wireless</h3>
                <span className="text-sm font-mono uppercase tracking-widest opacity-60">01</span>
              </div>
              <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                <p className="text-slate-600 text-lg leading-relaxed group-hover:text-slate-900 transition-colors">
                  Eliminate dead zones and drastically improve broadband access. Our optimized antenna architectures redefine what is physically possible in enterprise network deployments and private 5G campus networks.
                </p>
              </div>
            </motion.div>

            {/* Feature Row 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => onNavigate('applications')}
            >
              <div className="w-full md:w-1/3 bg-cyan-50 p-8 flex flex-col justify-center border-r border-slate-100 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-500">
                <Heart className="w-10 h-10 text-cyan-600 group-hover:text-white mb-6" />
                <h3 className="text-2xl font-bold font-display mb-2">Wireless Healthcare</h3>
                <span className="text-sm font-mono uppercase tracking-widest opacity-60">02</span>
              </div>
              <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                <p className="text-slate-600 text-lg leading-relaxed group-hover:text-slate-900 transition-colors">
                  Secure, unbreakable connectivity for critical healthcare devices. MuLCAT™ ensures medical telemetry data transmission distances are maximized with absolute zero packet loss when lives are on the line.
                </p>
              </div>
            </motion.div>

            {/* Feature Row 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => onNavigate('products')}
            >
              <div className="w-full md:w-1/3 bg-indigo-50 p-8 flex flex-col justify-center border-r border-slate-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
                <TrendingUp className="w-10 h-10 text-indigo-600 group-hover:text-white mb-6" />
                <h3 className="text-2xl font-bold font-display mb-2">AI & IoT Integration</h3>
                <span className="text-sm font-mono uppercase tracking-widest opacity-60">03</span>
              </div>
              <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                <p className="text-slate-600 text-lg leading-relaxed group-hover:text-slate-900 transition-colors">
                  Adopt AI-driven modules to maximize total system performance. Whether it's massive IoT sensor deployments or smart city infrastructure, our technology scales efficiently without bottlenecking.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. FOOTER QUOTE */}
      <section className="py-24 bg-white border-t border-slate-200">
         <div className="max-w-4xl mx-auto text-center px-6">
           <Quote className="w-12 h-12 text-slate-200 mx-auto mb-8" />
           <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 leading-tight mb-8">
             "Whether It Be Radio, LAN, Or Otherwise, An Antenna Is Extremely Important."
           </h3>
           <div className="flex items-center justify-center gap-4">
             <div className="w-12 h-px bg-slate-300" />
             <span className="text-slate-500 font-mono text-sm tracking-widest uppercase">PIMFG.com</span>
             <div className="w-12 h-px bg-slate-300" />
           </div>
         </div>
      </section>

    </div>
  );
}
