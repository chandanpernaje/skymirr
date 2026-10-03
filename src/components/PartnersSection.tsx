import { motion } from 'framer-motion';
import { SKYMIRR_DATA } from '../data/skymirrData';
import { Globe2, Network } from 'lucide-react';

interface PartnersSectionProps {
  onNavigate?: (page: string) => void;
}

export function PartnersSection({ onNavigate }: PartnersSectionProps = {}) {
  const allPartners = SKYMIRR_DATA.partners;

  return (
    <section id="partners-grid" className="scroll-mt-20 pt-24 sm:pt-32 pb-12 sm:pb-16 bg-white relative overflow-hidden font-sans border-t border-slate-100">
      {/* Background Tech Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-50 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-bold tracking-[0.2em] uppercase mb-6 shadow-sm">
              <Globe2 className="w-3.5 h-3.5 text-blue-600" />
              <span>Global Ecosystem</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 font-display tracking-tight mb-6">
              Authorized <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Channels</span>
            </h2>
            
            <p className="text-slate-600 text-lg font-light leading-relaxed max-w-2xl mx-auto">
              SkyMirr hardware is deployed worldwide through our elite network of verified distributors, carriers, and digital marketplaces.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
             <div className="bg-white border border-slate-100 px-6 py-4 rounded-full flex items-center gap-4 shadow-sm inline-flex">
               <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                 <Network className="w-5 h-5" />
               </div>
               <div className="flex items-baseline gap-2">
                 <div className="text-2xl font-black text-slate-900">{allPartners.length}+</div>
                 <div className="text-xs text-slate-500 uppercase tracking-widest font-mono font-bold">Partners</div>
               </div>
             </div>
          </motion.div>
        </div>

        {/* CREATIVE INFINITE SCROLLING MARQUEE */}
        <div className="relative w-full overflow-hidden mt-8 mask-fade-edges pb-8 pt-4">
          <motion.div
            className="flex items-center gap-6 sm:gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30, // Adjust speed here
            }}
          >
            {/* We duplicate the array to allow for seamless infinite scrolling */}
            {[...allPartners, ...allPartners, ...allPartners, ...allPartners].map((partner, idx) => (
              <motion.a
                key={idx}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.05 }}
                className="shrink-0 w-48 sm:w-56 h-32 sm:h-36 rounded-2xl flex flex-col items-center justify-center p-6 bg-white border border-slate-200 hover:border-blue-400 transition-colors duration-300 overflow-hidden shadow-sm hover:shadow-xl group relative cursor-pointer"
              >
                {/* Creative Hover Sweep Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/0 via-blue-50/50 to-blue-50/0 group-hover:from-blue-50 group-hover:via-blue-100/50 group-hover:to-blue-50 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
                
                {/* Category Tag on Hover */}
                <div className="absolute top-2.5 left-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0 z-20">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-blue-700 bg-white border border-blue-100 px-2 py-1 rounded shadow-sm">
                    {partner.category}
                  </span>
                </div>
                
                {/* Logo */}
                <div className="relative z-10 w-full h-full flex items-center justify-center bg-white rounded-xl p-3 border border-slate-50 group-hover:border-white shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300 mix-blend-multiply drop-shadow-sm group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
