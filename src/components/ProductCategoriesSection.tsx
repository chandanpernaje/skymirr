import { useState } from 'react';
import { motion } from 'framer-motion';
import { SKYMIRR_DATA } from '../data/skymirrData';
import { ArrowRight, CheckCircle2, ShieldCheck, ChevronRight, Sparkles, Layers, ZoomIn } from 'lucide-react';
import { ImageZoomModal } from './ImageZoomModal';

interface ProductCategoriesProps {
  onOpenQuote: (productName?: string) => void;
  onNavigate?: (page: string) => void;
}

export function ProductCategoriesSection({ onOpenQuote, onNavigate }: ProductCategoriesProps) {
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

  const openZoom = (
    imageSrc: string,
    title: string,
    subtitle?: string,
    specs?: { label: string; value: string }[],
    highlight?: string
  ) => {
    setZoomModalData({
      isOpen: true,
      imageSrc,
      title,
      subtitle,
      specs,
      highlight,
    });
  };

  return (
    <section id="products-grid" className="scroll-mt-20 py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-200 relative overflow-hidden">
      <div id="products-overview" className="absolute -top-24 pointer-events-none" />
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-500/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header with Framer Motion Entrance Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <Layers className="w-3.5 h-3.5 text-slate-600" />
            <span>Core Hardware Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display tracking-tight uppercase leading-tight [text-wrap:balance]">
            WHEN IT HAS TO CONNECT, IT HAS TO BE SKYMIRR
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-3xl mx-auto leading-relaxed [text-wrap:balance]">
            We develop/manufacture advanced RF technology-based products that better our lives, such as cost-effective, better performing, broadband wireless communications for everyone and medical applications that treat serious disease far more effectively.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <h3 className="text-xl sm:text-2xl font-black font-display text-slate-800 tracking-wider">
              PRODUCTS
            </h3>
            {onNavigate && (
              <button
                onClick={() => onNavigate('products')}
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer font-mono uppercase tracking-widest underline underline-offset-4 transition-colors"
              >
                <span>View Full Catalog</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </motion.div>

        {/* 3 Main Product Categories with Staggered Framer Motion Fade and Slide-In */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {SKYMIRR_DATA.productCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border border-slate-200 hover:border-slate-400 rounded-xl overflow-hidden transition-all duration-500 flex flex-col justify-between group shadow-sm hover:shadow-2xl hover:-translate-y-1.5 relative cursor-pointer"
            >
              {/* Subtle top rim light */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* 100% Complete Product Image Stage with Interactive Zoom/Magnify Trigger */}
                <div
                  onClick={() =>
                    openZoom(
                      cat.image,
                      cat.title,
                      cat.subtitle,
                      cat.items.map((it) => ({ label: 'Model', value: it })),
                      'Carrier Certified Hardware'
                    )
                  }
                  className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-200/80 flex items-center justify-center p-4 sm:p-5 cursor-zoom-in group/stage"
                  title="Click to zoom and inspect in High-Resolution"
                >
                  {/* Subtle Blueprint Grid inside viewport */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none" />

                  {/* Soft Radial Ambient Behind Product */}
                  <div className="absolute w-36 h-36 rounded-full bg-slate-800/20 blur-2xl pointer-events-none" />

                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="max-h-full max-w-full object-contain relative z-10 group-hover/stage:scale-105 transition-transform duration-500 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
                    loading="lazy"
                  />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="text-[10px] font-mono font-bold text-slate-200 bg-slate-900/90 px-2.5 py-1 rounded-sm border border-slate-700/50 uppercase tracking-widest block shadow-sm">
                      {cat.subtitle}
                    </span>
                  </div>

                  {/* Interactive Zoom Magnifier Pill on Hover */}
                  <div className="absolute top-3 right-3 z-20 opacity-0 group-hover/stage:opacity-100 transition-opacity duration-200">
                    <div className="px-2.5 py-1 rounded-sm bg-slate-800 text-white font-mono text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 shadow-md">
                      <ZoomIn className="w-3 h-3" />
                      <span>Zoom / Inspect</span>
                    </div>
                  </div>
                </div>

                {/* Clean Description & Specification Area */}
                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 font-display uppercase tracking-tight group-hover:text-slate-600 transition-colors">
                      {cat.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed min-h-[3rem] font-sans">
                      {cat.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-slate-800 uppercase tracking-widest font-mono flex items-center justify-between">
                      <span>Key Hardware Models</span>
                      <span className="text-[10px] text-slate-500 font-semibold font-mono">Carrier Grade</span>
                    </div>
                    {cat.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('products');
                    } else {
                      onOpenQuote(cat.title);
                    }
                  }}
                  className="w-full py-3.5 text-[11px] font-semibold text-slate-800 bg-slate-50 hover:bg-slate-900 hover:text-white uppercase tracking-widest rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm cursor-pointer active:scale-95 border border-slate-200 hover:border-slate-800 group-hover:bg-slate-900 group-hover:text-white"
                >
                  <span>Explore Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>


      </div>

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
    </section>
  );
}
