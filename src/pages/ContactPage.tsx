import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactPage() {
  return (
    <div className="bg-slate-50 font-sans selection:bg-blue-900 selection:text-white">
      {/* 1. IMMERSIVE HERO */}
      <section className="relative w-full h-[50vh] min-h-[400px] sm:min-h-[500px] flex items-center justify-center overflow-hidden bg-white">
        
        {/* Parallax Background */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src="/images/contact_hero.jpg" 
            alt="Global Connectivity Headquarters" 
            className="w-full h-full object-cover object-center opacity-[0.15]"
          />
          {/* Gradients to blend into white content below */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-white/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 w-full pt-16 sm:pt-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl space-y-6"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 backdrop-blur-md shadow-sm">
              <Mail className="w-4 h-4 text-blue-600" />
              <span className="text-[11px] sm:text-xs font-mono tracking-[0.2em] text-blue-700 uppercase font-bold">
                Direct Engineering Consultation
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-black tracking-tighter leading-[1.05] text-slate-900 font-display">
              Connect With <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                An Expert.
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light max-w-2xl border-l-[3px] border-blue-500 pl-4">
              Call our Melbourne Florida headquarters directly at <strong className="text-slate-900 font-bold">321-393-1039</strong> or submit an RFP for volume procurement, custom antenna design, and carrier evaluation units.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-20 relative z-30 pb-24">
         <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
           <ContactSection />
         </div>
      </div>
    </div>
  );
}
