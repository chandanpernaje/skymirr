import React, { useState, useEffect, useRef } from 'react';
import { SKYMIRR_DATA, Product } from '../data/skymirrData';
import { ArrowRight, CheckCircle2, Radio, Shield, Cpu, ChevronRight, Layers, ZoomIn, Search, Filter } from 'lucide-react';
import { ImageZoomModal } from '../components/ImageZoomModal';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

interface ProductsPageProps {
  onOpenQuote: (productName?: string) => void;
  onNavigate: (page: string) => void;
  initialCategory?: 'all' | 'antenna' | 'router' | 'tracker' | 'embedded';
}

export function ProductsPage({ onOpenQuote, onNavigate, initialCategory = 'all' }: ProductsPageProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'antenna' | 'router' | 'tracker' | 'embedded'>(initialCategory === 'all' ? 'antenna' : initialCategory);
  const containerRef = useRef<HTMLDivElement>(null);

  // Advanced scroll effects for hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    setActiveCategory(initialCategory === 'all' ? 'antenna' : initialCategory);
  }, [initialCategory]);

  const [zoomModalData, setZoomModalData] = useState<{
    isOpen: boolean;
    imageSrc: string;
    title: string;
    subtitle?: string;
    specs?: { label: string; value: string }[];
    highlight?: string;
  }>({
    isOpen: false,
    imageSrc: '',
    title: '',
  });

  const categories = [
    { id: 'antenna', label: 'Antennas', count: SKYMIRR_DATA.products.filter((p) => p.category === 'antenna').length },
    { id: 'router', label: '5G Routers', count: SKYMIRR_DATA.products.filter((p) => p.category === 'router').length },
    { id: 'tracker', label: 'Asset Trackers', count: SKYMIRR_DATA.products.filter((p) => p.category === 'tracker').length },
    { id: 'embedded', label: 'Embedded Modules', count: SKYMIRR_DATA.products.filter((p) => p.category === 'embedded').length },
  ];

  const filteredProducts =
    activeCategory === 'all'
      ? SKYMIRR_DATA.products
      : SKYMIRR_DATA.products.filter((p) => p.category === activeCategory);

  return (
    <div ref={containerRef} className="bg-slate-50 font-sans min-h-screen selection:bg-blue-900 selection:text-white">
      
      {/* 1. IMMERSIVE CATALOG HERO */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-950">
        
        {/* Parallax Background */}
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
          <img 
            src="/images/enterprise_hero.jpg" 
            alt="Advanced Hardware Catalog" 
            className="w-full h-full object-cover object-center opacity-30 mix-blend-screen grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 w-full pt-24 sm:pt-16 pb-12 flex justify-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl flex flex-col items-center gap-6 sm:gap-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <Layers className="w-4 h-4 text-blue-400" />
              <span className="text-[11px] sm:text-xs font-mono tracking-[0.2em] text-blue-300 uppercase font-bold">
                Enterprise Hardware Catalog
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 font-sans">
              {activeCategory === 'router' ? 'Sky5G Wireless Router' :
               activeCategory === 'tracker' ? 'SkyTracker (LIPA122)' :
               activeCategory === 'embedded' ? 'Embedded Modules' :
               'SkyMirr Antennas'}
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-sans max-w-2xl px-4 sm:px-0">
              {activeCategory === 'router' ? 'Unleashing Reliable Connectivity Anywhere' :
               activeCategory === 'tracker' ? 'Unmatched Real-Time IoT Asset Tracking' :
               activeCategory === 'embedded' ? 'Ultra Compact Wireless Solutions for Seamless Integration' :
               'High-Performance Antenna Solutions for Every Connection'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH BAR (Sticky on Desktop) */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 hide-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`shrink-0 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === cat.id
                      ? 'bg-slate-900 text-white shadow-lg'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                      activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-300/50 text-slate-500'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-2 text-slate-400">
               <Search className="w-4 h-4" />
               <span className="text-xs font-mono uppercase tracking-widest">Global Catalog</span>
            </div>
            
          </div>
        </div>
      </div>

      {/* 3. HARDWARE GRID */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-12 border-b border-slate-200 pb-6">
           <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900">
             {activeCategory === 'all'
               ? 'All Systems & Modules'
               : categories.find((c) => c.id === activeCategory)?.label}
           </h2>
           <span className="text-xs font-mono text-slate-500 uppercase tracking-widest font-bold bg-slate-200 px-3 py-1 rounded-full">
             {filteredProducts.length} Results
           </span>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 60, rotateX: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 60, rotateX: -15 }}
                transition={{ type: "spring", stiffness: 100, damping: 15, mass: 1.2, delay: idx * 0.1 }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.02, 
                  boxShadow: "0 30px 60px -12px rgba(37, 99, 235, 0.25), 0 18px 36px -18px rgba(37, 99, 235, 0.15)"
                }}
                whileTap={{ scale: 0.97 }}
                className="group relative bg-white/70 backdrop-blur-xl border border-white/50 hover:border-blue-300/50 rounded-[2rem] transition-all duration-500 overflow-hidden flex flex-col h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] cursor-pointer"
                style={{ transformPerspective: 1000 }}
              >
                {/* Dynamic Animated Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-cyan-50/50 opacity-100 group-hover:from-blue-100/60 group-hover:via-white/50 group-hover:to-cyan-100/60 transition-all duration-700 pointer-events-none z-0" />
                
                {/* Top animated border line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out z-20" />
                
                {/* Decorative floating shapes */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

                {/* Image Section */}
                <div 
                  onClick={() => onNavigate(`product/${product.id}`)}
                  className="relative w-full aspect-[4/3] flex items-center justify-center p-8 cursor-pointer overflow-hidden z-10"
                >
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 relative z-10 drop-shadow-xl"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-3xl bg-white shadow-lg border border-blue-100 text-blue-400 flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:text-blue-600 transition-all duration-500">
                      <Radio className="w-10 h-10" />
                    </div>
                  )}

                  {/* Badges */}
                  <div className="absolute top-5 left-5 z-20 flex flex-col gap-2 pointer-events-none">
                    {product.award && (
                      <span className="bg-blue-600/90 backdrop-blur-sm border border-blue-500 text-white font-mono text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                        {product.award}
                      </span>
                    )}
                    {product.isNew && (
                      <span className="bg-cyan-100/90 backdrop-blur-sm border border-cyan-200 text-cyan-800 font-mono text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg w-fit">
                        New Release
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Section - Centered Text Alignment */}
                <div className="px-6 sm:px-8 pb-6 flex-1 flex flex-col items-center text-center relative z-10">
                  
                  {/* Category Pill */}
                  <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200 transition-colors duration-300">
                    {product.category === 'router'
                      ? '5G CPE Gateway'
                      : product.category === 'antenna'
                      ? 'Ultra-Wideband Antenna'
                      : product.category === 'tracker'
                      ? 'Industrial Asset Tracker'
                      : 'Embedded Array'}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-black font-display text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:to-cyan-600 transition-all duration-300">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm font-light text-slate-600 leading-relaxed flex-1 w-full max-w-sm">
                    {product.tagline || product.description}
                  </p>
                  
                  {/* Tech Specs Micro-Grid */}
                  {(product.bands && product.bands.length > 0) && (
                     <div className="mt-5 pt-4 border-t border-slate-200/50 flex flex-wrap justify-center gap-2 w-full">
                       {product.bands.slice(0,3).map(band => (
                         <span key={band} className="text-[10px] font-mono font-medium px-2.5 py-1 bg-slate-100/80 border border-slate-200/60 text-slate-600 rounded-md shadow-inner group-hover:bg-white group-hover:border-blue-100 group-hover:text-blue-700 transition-colors">
                           {band}
                         </span>
                       ))}
                     </div>
                  )}
                </div>

                {/* Persistent Action Bar */}
                <div className="p-1 mx-6 mb-6 border-t border-slate-200/50 relative z-10 group-hover:border-blue-200 transition-colors duration-300">
                  <button
                    onClick={() => onNavigate(`product/${product.id}`)}
                    className="w-full py-3 px-4 bg-transparent text-slate-500 hover:text-blue-700 font-bold text-[11px] uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer font-display"
                  >
                    <span className="group-hover:-translate-x-1 transition-transform">View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-600" />
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Global Image Zoom Lightbox Modal */}
      <ImageZoomModal
        isOpen={zoomModalData.isOpen}
        onClose={() => setZoomModalData((prev) => ({ ...prev, isOpen: false }))}
        imageSrc={zoomModalData.imageSrc}
        title={zoomModalData.title}
        subtitle={zoomModalData.subtitle}
        specs={zoomModalData.specs}
        highlight={zoomModalData.highlight}
      />
    </div>
  );
}
