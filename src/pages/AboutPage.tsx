import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Target, Zap, Building2, MapPin, Globe2, Activity } from 'lucide-react';
import { SKYMIRR_DATA } from '../data/skymirrData';

export function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="bg-white font-sans selection:bg-blue-900 selection:text-white pb-20">
      
      {/* 1. IMMERSIVE HERO */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950">
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
          <img 
            src="/images/enterprise_facility.jpg" 
            alt="Advanced Research Facility" 
            className="w-full h-full object-cover object-center opacity-40 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 w-full pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl space-y-6"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-md">
              <Building2 className="w-4 h-4 text-cyan-400" />
              <span className="text-[11px] sm:text-xs font-mono tracking-[0.2em] text-cyan-300 uppercase font-bold">
                Company Overview
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] text-white font-display">
              Pioneering The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                RF Frontier.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light max-w-2xl">
              {SKYMIRR_DATA.company.mission}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CORPORATE MANIFESTO (Edge to Edge) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 font-display leading-[1.1]">
                A Legacy of <br/><span className="text-blue-600">Innovation.</span>
              </h2>
              <div className="w-20 h-1 bg-blue-600" />
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Founded by industry veterans from Taoglas and Samsung Electronics, SkyMirr was established with a singular vision: to solve the physical limitations of modern telecommunications through advanced electromagnetic engineering. 
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Our patented MuLCAT® technology is not just an incremental improvement—it is a fundamental reinvention of how RF signals are propagated, captured, and controlled.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative aspect-square sm:aspect-[4/3] rounded-2xl bg-slate-100 overflow-hidden shadow-2xl"
            >
              <img 
                src="/images/enterprise_facility.jpg" 
                alt="SkyMirr Lab" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-widest font-bold mb-3 border border-white/20 rounded">
                  Incheon, South Korea
                </div>
                <h3 className="text-2xl font-bold text-white font-display">Songdo Bio-IT Complex</h3>
                <p className="text-slate-300 text-sm mt-2">State-of-the-art 3D RF Anechoic Chamber & Advanced Measurement Suite.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. FAST FACTS GRID */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Globe2 className="w-6 h-6" />
              </div>
              <h4 className="text-3xl font-black text-slate-900 font-mono mb-2">2021</h4>
              <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Year Founded</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <h4 className="text-3xl font-black text-slate-900 font-mono mb-2">35+</h4>
              <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Patents Held</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="text-3xl font-black text-slate-900 font-mono mb-2">CES '26</h4>
              <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Innovation Honoree</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-3xl font-black text-slate-900 font-mono mb-2">Tier-1</h4>
              <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Carrier Certified</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. GLOBAL PRESENCE */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
           <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl sm:text-5xl font-black font-display mb-6">Global Operations</h2>
             <p className="text-slate-400 text-lg font-light">Supporting worldwide telecommunications infrastructure from our strategic hubs.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             
             <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-10 rounded-2xl">
               <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center text-blue-400 mb-6">
                 <MapPin className="w-6 h-6" />
               </div>
               <h3 className="text-2xl font-bold font-display mb-2">United States HQ</h3>
               <p className="text-slate-400 mb-6">Corporate Headquarters, Sales, and Executive Operations.</p>
               <address className="not-italic text-sm text-slate-300 font-mono leading-loose">
                 SkyMirr Technologies, Inc.<br/>
                 930 S. Harbor City Blvd, Suite 403<br/>
                 Melbourne, FL 32901<br/>
                 USA
               </address>
             </div>

             <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-10 rounded-2xl">
               <div className="w-12 h-12 bg-cyan-900/50 rounded-lg flex items-center justify-center text-cyan-400 mb-6">
                 <MapPin className="w-6 h-6" />
               </div>
               <h3 className="text-2xl font-bold font-display mb-2">South Korea R&D</h3>
               <p className="text-slate-400 mb-6">Advanced Electromagnetic Research and Development Facility.</p>
               <address className="not-italic text-sm text-slate-300 font-mono leading-loose">
                 Songdo Bio-IT Complex<br/>
                 Incheon<br/>
                 South Korea
               </address>
             </div>

           </div>
        </div>
      </section>

    </div>
  );
}