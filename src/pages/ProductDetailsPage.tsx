import { useEffect, useState } from 'react';
import { SKYMIRR_DATA } from '../data/skymirrData';
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
    <div className="pt-24 pb-20 bg-[#F9FAFB] min-h-screen font-display">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-10 pt-4">
          <button onClick={() => onNavigate('home')} className="hover:text-blue-600">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <button onClick={() => onNavigate('products')} className="hover:text-blue-600">Products</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            {product.isNew && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-bold tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Now Available
              </div>
            )}
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0FA5E9] tracking-tight">
              {product.name.replace('SkyBlade™ ', '').replace('BioTrack™ ', '').replace('SkyTrack™ ', '')}
            </h1>
            
            <h2 className="text-xl sm:text-2xl text-slate-700 font-medium">
              {product.tagline}
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              {product.description}
            </p>

            {/* Quick Specs inline */}
            <div className="flex flex-wrap gap-4 py-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white border border-blue-100 rounded-xl shadow-xs text-sm font-semibold text-slate-700">
                <div className="text-blue-500">📈</div>
                {product.specs.gain ? `${product.specs.gain}` : 'High Efficiency'}
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                <div className="text-blue-500">{"('A')"}</div>
                {product.specs.frequency || 'Multi-band'}
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <div className="text-blue-500">📏</div>
                {product.specs.dimensions || 'Compact Form Factor'}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button 
                onClick={() => onOpenQuote(product.name)}
                className="px-6 py-3 bg-[#0FA5E9] hover:bg-[#0284C7] text-white font-semibold text-sm rounded-full transition-colors flex items-center gap-2 shadow-md shadow-sky-500/20 cursor-pointer"
              >
                <span>Contact Us Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button 
                onClick={() => window.open(product.datasheetUrl || '#', '_blank')}
                className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm rounded-full border border-slate-200 transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Download Datasheet</span>
                <Download className="w-4 h-4 text-slate-400" />
              </button>

              <button 
                onClick={() => onOpenQuote(product.name)}
                className="px-6 py-3 bg-[#0FA5E9] hover:bg-[#0284C7] text-white font-semibold text-sm rounded-full transition-colors flex items-center gap-2 shadow-md shadow-sky-500/20 cursor-pointer"
              >
                <span>Pre-order Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button 
                onClick={() => onOpenQuote(product.name)}
                className="px-6 py-3 bg-[#0FA5E9] hover:bg-[#0284C7] text-white font-semibold text-sm rounded-full transition-colors flex items-center gap-2 shadow-md shadow-sky-500/20 cursor-pointer"
              >
                <span>Buy Online</span>
                <ShoppingCart className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full max-w-md lg:max-w-xl">
            <div className="relative aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center">
              {product.image ? (
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain filter drop-shadow-2xl"
                />
              ) : (
                <div className="text-slate-300">No Image Available</div>
              )}
            </div>
          </div>
          
        </div>

        {/* Detailed Sections (Intro, App, Performance) */}
        <div className="mt-20 max-w-4xl">
          {product.introduction && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h3>
              <p className="text-slate-600 leading-relaxed text-lg">{product.introduction}</p>
            </div>
          )}

          {product.application && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Application</h3>
              <p className="text-slate-600 leading-relaxed text-lg">{product.application}</p>
            </div>
          )}
        </div>

        {product.gallery && product.gallery.length > 0 && (
          <div className="mt-16 max-w-6xl mx-auto">
            <h3 className="text-3xl font-black font-display text-slate-900 mb-8 flex items-center gap-4">
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
        <div className="mt-16 pt-16 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-12">
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
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
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
          <div className="mt-16 pt-16 border-t border-slate-200">
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
  );
}
