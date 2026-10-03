import { useEffect, useState } from 'react';
import { SKYMIRR_DATA } from '../data/skymirrData';
import { WaveCanvas } from '../components/WaveCanvas';
import { ArrowRight, Download, ShoppingCart, CheckCircle2, ChevronRight, Maximize2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductDetailsPageProps {
  productId: string;
  onOpenQuote: (productName?: string) => void;
  onNavigate: (page: string) => void;
}

export function ProductDetailsPage({ productId, onOpenQuote, onNavigate }: ProductDetailsPageProps) {
  const product = SKYMIRR_DATA.products.find((p) => p.id === productId);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [productId]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <button onClick={() => onNavigate('products')} className="mt-4 text-blue-600 hover:underline">
          Return to Products
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-display bg-white selection:bg-blue-600/30 selection:text-blue-900">
      
      {/* Immersive Light Sky Blue Hero Section */}
      <section className="relative pt-24 pb-12 lg:pb-16 bg-sky-50 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-sky-50 to-white z-0" />
          <WaveCanvas opacity={0.1} speed={0.6} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <button onClick={() => onNavigate('home')} className="hover:text-blue-600 transition-colors">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <button onClick={() => onNavigate('products')} className="hover:text-blue-600 transition-colors">Products</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-800 font-bold">{product.name}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center items-center justify-between gap-10 lg:gap-12">
            
            {/* Left Content (Text & Actions) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 space-y-7 text-left w-full"
            >
              <div className="space-y-4">
                {product.isNew && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-[11px] font-bold tracking-wide uppercase font-mono backdrop-blur-md shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                    New Release
                  </div>
                )}
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 font-display tracking-tight leading-[1.15]">
                  {product.name}
                </h1>
                
                <h2 className="text-lg sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 font-bold font-display">
                  {product.tagline}
                </h2>
              </div>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
                {product.description}
              </p>

              {/* Quick Specs inline - Glassmorphism */}
              <div className="flex flex-wrap items-center gap-3 py-2">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-slate-200/60 rounded-xl shadow-sm text-[11px] uppercase tracking-wider text-slate-700">
                  <span className="text-blue-600 font-mono font-bold">Gain:</span>
                  <span className="font-semibold">{product.specs.gain ? `${product.specs.gain}` : 'High Efficiency'}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-slate-200/60 rounded-xl shadow-sm text-[11px] uppercase tracking-wider text-slate-700">
                  <span className="text-cyan-600 font-mono font-bold">Freq:</span>
                  <span className="font-semibold">{product.specs.frequency || 'Multi-band'}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-slate-200/60 rounded-xl shadow-sm text-[11px] uppercase tracking-wider text-slate-700">
                  <span className="text-indigo-600 font-mono font-bold">Form:</span>
                  <span className="font-semibold">{product.specs.dimensions || 'Compact'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">

                <button 
                  onClick={() => window.open(product.datasheetUrl || 'https://skymirr.com', '_blank')}
                  className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-widest rounded-xl border border-slate-200 transition-all duration-300 flex items-center gap-3 cursor-pointer shadow-sm"
                >
                  <span>Datasheet</span>
                  <Download className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </motion.div>

            {/* Right Image (Floating Glass Showcase) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="flex-1 w-full max-w-md lg:max-w-xl relative"
            >
              {/* Glowing Aura Background */}
              <div className="absolute inset-0 bg-sky-200/50 blur-[120px] rounded-full pointer-events-none" />
              
              <div className="bg-white/40 backdrop-blur-3xl rounded-[3rem] p-8 sm:p-12 border border-white/60 shadow-xl flex items-center justify-center relative overflow-hidden group">
                {/* Decorative border highlight */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30" />
                
                <div className="aspect-[4/3] w-full flex items-center justify-center relative z-10">
                  {product.image ? (
                    <motion.img 
                      whileHover={{ scale: 1.15, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain filter drop-shadow-2xl"
                    />
                  ) : (
                    <div className="text-slate-400 font-mono text-xs">No Image Available</div>
                  )}
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Light Details Section */}
      <div className="bg-slate-50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Detailed Sections (Intro, App) */}
          <div className="max-w-4xl mx-auto space-y-12">
            {product.introduction && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-2xl lg:text-3xl font-black font-display text-slate-900 flex items-center gap-4">
                  Introduction
                  <div className="h-px bg-slate-200 flex-1" />
                </h3>
                <p className="text-slate-600 leading-relaxed text-base lg:text-lg font-sans">{product.introduction}</p>
              </motion.div>
            )}

            {product.application && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-2xl lg:text-3xl font-black font-display text-slate-900 flex items-center gap-4">
                  Applications
                  <div className="h-px bg-slate-200 flex-1" />
                </h3>
                <p className="text-slate-600 leading-relaxed text-base lg:text-lg font-sans">{product.application}</p>
              </motion.div>
            )}
          </div>

        {product.gallery && product.gallery.length > 0 && (
          <div className="mt-12 lg:mt-16 max-w-6xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-black font-display text-slate-900 mb-6 lg:mb-8 flex items-center gap-4">
              Product Gallery
              <div className="h-px bg-slate-200 flex-1" />
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.gallery.map((imgSrc, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedImage(imgSrc)}
                  className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(15,165,233,0.15)] hover:border-sky-300 transition-all duration-300 flex items-center justify-center overflow-hidden cursor-pointer group relative h-80"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <img 
                    src={imgSrc} 
                    alt={`${product.name} gallery image ${idx + 1}`} 
                    className="max-h-full max-w-full w-auto object-contain drop-shadow-xl group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-700 ease-out relative z-10" 
                  />
                  
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20 text-sky-600">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </motion.div>
              ))}
            </div>

            <AnimatePresence>
              {selectedImage && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
                  onClick={() => setSelectedImage(null)}
                >
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all duration-300 hover:rotate-90 z-[101]"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <motion.img
                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    src={selectedImage}
                    alt="Expanded gallery"
                    className="max-h-[90vh] max-w-[90vw] object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.1)] rounded-2xl cursor-default"
                    onClick={(e) => e.stopPropagation()}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
        
        {/* Full Features & Specs Details further down */}
        <div className="mt-12 lg:mt-16 pt-12 lg:pt-16 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h3>
            <ul className="space-y-3">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Technical Specifications</h3>
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <table className="w-full text-sm text-left">
                <tbody>
                  {Object.entries(product.specs).map(([key, value], idx) => (
                    <tr key={key} className={idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="py-3 px-4 font-semibold text-slate-700 capitalize w-1/3 border-b border-slate-100">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </td>
                      <td className="py-3 px-4 text-slate-600 border-b border-slate-100">
                        {value as string}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-white">
                    <td className="py-3 px-4 font-semibold text-slate-700 w-1/3">Supported Bands</td>
                    <td className="py-3 px-4 text-slate-600">{product.bands.join(', ')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Performance Data Table */}
        {product.performanceData && product.performanceData.length > 0 && (
          <div className="mt-12 lg:mt-16 pt-12 lg:pt-16 border-t border-slate-200">
            {product.performanceData[0].metric ? (
              <>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Performance & Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.performanceData.map((data, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm">
                      <h4 className="font-bold text-slate-800 text-lg">{data.metric}</h4>
                      <p className="text-slate-600 mt-1">{data.value}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Performance: Gain and Efficiency</h3>
                <div className="bg-white rounded-2xl border border-slate-200 overflow-x-auto shadow-sm">
                  <table className="w-full text-sm text-center">
                    <thead className="bg-blue-50/50 text-blue-900 border-b border-blue-100">
                      <tr>
                        <th className="py-4 px-4 font-bold border-r border-slate-100">Metric</th>
                        {product.performanceData.map((data, idx) => (
                          <th key={idx} className="py-4 px-4 font-semibold">{data.frequency} MHz</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100 bg-white">
                        <td className="py-3 px-4 font-bold text-slate-700 border-r border-slate-100 text-left">Efficiency [%]</td>
                        {product.performanceData.map((data, idx) => (
                          <td key={idx} className="py-3 px-4 text-slate-600">{data.efficiency || '-'}</td>
                        ))}
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-700 border-r border-slate-100 text-left">Peak Gain [dBi]</td>
                        {product.performanceData.map((data, idx) => (
                          <td key={idx} className="py-3 px-4 text-slate-600 font-medium text-emerald-600">{data.peakGain || '-'}</td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        )}

      </div>
      </div>
    </div>
  );
}
