import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Target } from 'lucide-react';
import { ImageZoomModal } from './ImageZoomModal';

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  image: string;
  tagline: string;
  highlight: string;
  specs: { label: string; value: string }[];
  description: string;
  navigateTarget?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'antennas-gallery',
    title: 'SkyBlade™ Ultra-Wideband Antennas',
    category: 'Antenna Systems',
    badge: 'Carrier Validated',
    image: '/images/antennas-new.jpg',
    tagline: 'Multi-layer coupling omnidirectional whip array covering 617 to 5925 MHz',
    highlight: '6.0 dBi Peak Gain · VSWR < 2.0:1',
    description: 'Engineered with proprietary MuLCAT® multi-layer coupling that eliminates destructive phase interference between adjacent cellular and Wi-Fi bands.',
    specs: [
      { label: 'Frequency Range', value: '617 – 5925 MHz' },
      { label: 'Peak Gain', value: '6.0 dBi' },
      { label: 'VSWR', value: '< 2.0:1 Typ.' },
      { label: 'Radiation Pattern', value: 'Omni 360° Azimuth' },
    ],
    navigateTarget: 'antennas',
  },
  {
    id: 'routers-gallery',
    title: 'Sky5G™ CPE Wireless Router',
    category: 'Carrier Gateway',
    badge: 'CES® 2026 Honoree',
    image: '/images/5g-routers.jpg',
    tagline: 'Carrier-certified 5G Sub-6 & Wi-Fi 7 gateway with integrated MuLCAT® array',
    highlight: 'T-Priority Ready · AT&T & T-Mobile Certified',
    description: 'High-speed fixed wireless access gateway designed for mission-critical enterprise failover, retail branch deployments, and first responder command centers.',
    specs: [
      { label: 'Cellular Technology', value: '5G Sub-6 NSA/SA' },
      { label: 'Wi-Fi Standard', value: 'Wi-Fi 7 (802.11be)' },
      { label: 'Ethernet Ports', value: '2.5G WAN + 4x GbE LAN' },
      { label: 'Carrier Certs', value: 'AT&T, T-Mobile, PTCRB' },
    ],
    navigateTarget: 'routers',
  },
  {
    id: 'trackers-gallery',
    title: 'SkyTrack™ Asset Trackers',
    category: 'Industrial IoT',
    badge: 'ATEX Zone 2',
    image: '/images/asset-trackers.jpg',
    tagline: 'Ruggedized IP68 cellular GPS telemetry terminal',
    highlight: '7-Year Battery Life · Multi-Constellation GNSS',
    description: 'Ultra-low-power industrial sensor gateway providing real-time location, temperature, shock, and battery diagnostics for heavy equipment.',
    specs: [
      { label: 'Cellular Bands', value: 'LTE-M & NB-IoT Global' },
      { label: 'Ingress Protection', value: 'IP68 & MIL-STD-810H' },
      { label: 'Battery Capacity', value: 'Up to 7 Years Autonomous' },
      { label: 'Positioning', value: 'GPS, GLONASS, Galileo, BeiDou' },
    ],
    navigateTarget: 'trackers',
  },
  {
    id: 'mimo-gallery',
    title: 'SkyBlade™ Broadband MIMO',
    category: 'Vehicle & Transit',
    badge: 'MIL-STD-810H',
    image: '/images/our-products.png',
    tagline: 'Dual cross-polarized omnidirectional antenna module',
    highlight: 'IP67 Submersible · High Shock & Vibration',
    description: 'Rugged low-profile aerodynamic rooftop antenna delivering simultaneous high-throughput cellular uplink and dual-band Wi-Fi connectivity.',
    specs: [
      { label: 'Configuration', value: '4x4 MIMO Cellular + 2x2 Wi-Fi' },
      { label: 'Housing Grade', value: 'Impact Resistant Xenoy™' },
      { label: 'Submersion', value: 'IP67 Ingress Rated' },
      { label: 'Cable Length', value: 'Low-loss RG-58 / CFD200' },
    ],
    navigateTarget: 'antennas',
  },
];

const STICKY_CARD_COLORS = [
  'bg-blue-50 border-blue-100 text-slate-900',
  'bg-pink-50 border-pink-100 text-slate-900',
  'bg-sky-50 border-sky-100 text-slate-900',
  'bg-indigo-50 border-indigo-100 text-slate-900',
];

interface ScrollingImagesGalleryProps {
  onOpenQuote: (productName?: string) => void;
  onNavigate?: (page: string) => void;
}

export function ScrollingImagesGallery({ onOpenQuote, onNavigate }: ScrollingImagesGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [hoveredApp, setHoveredApp] = useState<string>('app-edu');
  
  return (
    <section className="pt-12 pb-24 bg-white relative">
      {/* Radiant High-Tech Ambient Glow (Light mode version) */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-400/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-center max-w-3xl mx-auto"
        >

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display tracking-tight leading-tight">
            When It Has To Connect, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">It Has To Be SkyMirr.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-6 font-light leading-relaxed max-w-4xl mx-auto mb-16">
            We develop/manufacture advanced RF technology-based products that better our lives, such as cost-effective, better performing, broadband wireless communications for everyone and medical applications that treat serious disease far more effectively.
          </p>
        </motion.div>
      </div>

      {/* STICKY STACKING CARDS EFFECT */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        {GALLERY_ITEMS.map((item, idx) => (
          <StickyCard 
            key={item.id} 
            item={item} 
            index={idx} 
            totalCards={GALLERY_ITEMS.length} 
            colorClass={STICKY_CARD_COLORS[idx % STICKY_CARD_COLORS.length]}
            onOpenQuote={onOpenQuote}
            onNavigate={onNavigate}
            onZoom={() => setSelectedItem(item)}
          />
        ))}
      </div>

      <ImageZoomModal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        imageSrc={selectedItem?.image || ''}
        title={selectedItem?.title || ''}
        subtitle={selectedItem?.category}
        specs={selectedItem?.specs}
        highlight={selectedItem?.highlight}
      />

      {/* Advanced Deployment Use Cases Showcase (Restored) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center text-center mb-8">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight uppercase [text-wrap:balance]">
              APPLICATIONS
            </h3>
            <p className="text-blue-700 font-sans font-medium text-sm mt-2 max-w-2xl leading-relaxed mx-auto uppercase tracking-widest">
              Advanced Real-World Deployments Powered by MuLCAT®
            </p>
          </div>

          <div className="flex flex-col lg:flex-row h-[600px] lg:h-[450px] w-full gap-4">
            {[
              {
                id: 'app-edu',
                title: 'Educational',
                tagline: 'Campus Connectivity',
                desc: 'High-density Wi-Fi 7 and 5G networks for modern digital learning.',
                img: '/images/edu_tech_ai.jpg',
                color: 'blue'
              },
              {
                id: 'app-log',
                title: 'Logistics',
                tagline: 'Supply Chain',
                desc: 'Autonomous tracking and warehouse telemetry using SkyTrack™.',
                img: '/images/logistics_tech_ai.jpg',
                color: 'cyan'
              },
              {
                id: 'app-res',
                title: 'Residential',
                tagline: 'Smart Home',
                desc: 'Seamless multi-gigabit routing for the modern connected home.',
                img: '/images/residential_tech_ai.jpg',
                color: 'emerald'
              },
              {
                id: 'app-ind',
                title: 'Industrial',
                tagline: 'Smart Factory',
                desc: 'Ultra-low latency connectivity for automation and robotics.',
                img: '/images/industrial_tech_ai.jpg',
                color: 'amber'
              }
            ].map((app) => {
              const isHovered = hoveredApp === app.id;
              
              const colorMap = {
                blue: { border: 'border-blue-400/30', bg: 'bg-blue-600/90', activeText: 'text-blue-200', hoverText: 'group-hover:text-blue-200' },
                cyan: { border: 'border-cyan-400/30', bg: 'bg-cyan-600/90', activeText: 'text-cyan-200', hoverText: 'group-hover:text-cyan-200' },
                emerald: { border: 'border-emerald-400/30', bg: 'bg-emerald-600/90', activeText: 'text-emerald-200', hoverText: 'group-hover:text-emerald-200' },
                amber: { border: 'border-amber-400/30', bg: 'bg-amber-600/90', activeText: 'text-amber-200', hoverText: 'group-hover:text-amber-200' }
              };
              const theme = colorMap[app.color as keyof typeof colorMap];

              return (
                <motion.div
                  key={app.id}
                  layout
                  onHoverStart={() => setHoveredApp(app.id)}
                  onClick={() => setHoveredApp(app.id)}
                  animate={{ flex: isHovered ? 5 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="group relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg cursor-pointer w-full"
                >
                  <img
                    src={app.img}
                    alt={app.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${isHovered ? 'opacity-100 scale-105' : 'opacity-70 group-hover:opacity-100 group-hover:scale-105'}`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-80' : 'opacity-100 group-hover:opacity-80'}`} />
                  
                  {/* Text Content */}
                  <motion.div 
                    layout="position"
                    className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex flex-col justify-end"
                  >
                    <div className="overflow-hidden flex">
                      <motion.span 
                        layout="position"
                        className={`px-2 py-1 md:px-2.5 md:py-1 rounded-md backdrop-blur-sm text-white text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-wider mb-1.5 md:mb-2 inline-block shadow-md ${theme.bg} ${theme.border} whitespace-nowrap`}
                      >
                        {app.tagline}
                      </motion.span>
                    </div>
                    
                    <motion.h4 
                      layout="position"
                      className={`text-lg md:text-xl lg:text-3xl font-black font-display text-white transition-colors whitespace-nowrap ${isHovered ? theme.activeText : theme.hoverText}`}
                    >
                      {app.title}
                    </motion.h4>
                    
                    <AnimatePresence>
                      {isHovered && (
                        <motion.p
                          initial={{ opacity: 0, height: 0, y: 10 }}
                          animate={{ opacity: 1, height: 'auto', y: 0 }}
                          exit={{ opacity: 0, height: 0, y: 10 }}
                          transition={{ duration: 0.3 }}
                          className="text-xs sm:text-sm text-slate-200 mt-2 line-clamp-2 md:line-clamp-none max-w-sm"
                        >
                          {app.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Sub-component for individual sticky cards
function StickyCard({ item, index, totalCards, colorClass, onOpenQuote, onNavigate, onZoom }: any) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start top"] // Track when card enters screen to when it hits top
  });

  // Calculate dynamic top spacing so they stack beautifully
  const topOffset = `calc(10vh + ${index * 30}px)`;
  
  // Parallax the inner image based on scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
  // Scale down the card slightly as subsequent cards overlap it
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]); // Kept at 1 to prevent layout shift, stacking is sufficient

  return (
    <div className="sticky w-full" style={{ top: topOffset, marginBottom: '40px', zIndex: index }}>
      <motion.div 
        ref={cardRef}
        style={{ scale }}
        className={`relative w-full h-auto md:h-[500px] rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-black/5 ${colorClass}`}
      >
        {/* Image Side (Top on Mobile, Right on Desktop) */}
        <div className="w-full md:w-1/2 h-[300px] md:h-full relative overflow-hidden bg-black/5 cursor-pointer group order-1 md:order-2" onClick={onZoom}>
          {/* subtle animated grid background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] group-hover:scale-110 transition-transform duration-700" />
          
          <motion.div 
            style={{ y: imageY }}
            className="absolute inset-0 w-full h-full flex items-center justify-center p-6 md:p-8"
          >
            <img 
               src={item.image} 
               alt={item.title}
               className="w-full h-full object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" 
            />
          </motion.div>
          
          {/* Zoom Hint */}
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 text-slate-800 shadow-md text-[10px] font-mono font-bold tracking-widest flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Target className="w-3 h-3 text-blue-600" /> Click to Inspect
          </div>
        </div>

        {/* Content Side (Bottom on Mobile, Left on Desktop) */}
        <div className="w-full md:w-1/2 p-6 sm:p-12 flex flex-col justify-center relative z-20 order-2 md:order-1">
           <div className="inline-block px-3 py-1 rounded bg-white/50 border border-black/10 text-slate-800 text-[10px] font-mono font-bold uppercase tracking-widest w-fit mb-4 md:mb-6 shadow-sm">
             {item.category}
           </div>
           
           <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-display text-slate-900 mb-3 md:mb-4 leading-tight">
             {item.title}
           </h3>
           
           <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 md:mb-8 font-light">
             {item.description}
           </p>

           <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
             {item.specs.slice(0, 2).map((spec: any, i: number) => (
               <div key={i} className="bg-white/60 p-3 rounded-xl border border-black/5 shadow-sm">
                 <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1 font-mono font-semibold">{spec.label}</div>
                 <div className="text-xs sm:text-sm font-bold text-slate-900">{spec.value}</div>
               </div>
             ))}
           </div>

           <div className="flex flex-wrap gap-3 md:gap-4 mt-auto">
             {onNavigate && (
               <button 
                 onClick={() => onNavigate(item.navigateTarget)}
                 className="px-5 py-3 md:px-6 md:py-3 bg-white/50 text-slate-700 border border-slate-300 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2 shadow-sm"
               >
                 View All
               </button>
             )}
           </div>
        </div>
      </motion.div>
    </div>
  );
}

