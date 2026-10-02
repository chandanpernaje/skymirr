import { useState, useEffect } from 'react';
import { SKYMIRR_DATA, Product } from '../data/skymirrData';
import { WaveCanvas } from '../components/WaveCanvas';
import { ArrowRight, CheckCircle2, Radio, Shield, Cpu, ChevronRight, Layers, ZoomIn } from 'lucide-react';
import { ImageZoomModal } from '../components/ImageZoomModal';
import { TiltCard } from '../components/TiltCard';

interface ProductsPageProps {
  onOpenQuote: (productName?: string) => void;
  onNavigate: (page: string) => void;
  initialCategory?: 'all' | 'antenna' | 'router' | 'tracker' | 'embedded';
}

export function ProductsPage({ onOpenQuote, onNavigate, initialCategory = 'all' }: ProductsPageProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'antenna' | 'router' | 'tracker' | 'embedded'>(initialCategory);

  useEffect(() => {
    setActiveCategory(initialCategory);
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

  const categories = [
    { id: 'all', label: 'All Products', count: SKYMIRR_DATA.products.length },
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
    <div className="pt-24 pb-20 bg-white">
      {/* Page Header Banner */}
      <section className="relative py-16 bg-gradient-to-b from-[#001738] via-[#05224D] to-[#001738] text-white overflow-hidden">
        <WaveCanvas opacity={0.16} speed={0.8} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase mb-2">
              SkyMirr Hardware Catalog
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Products Built From The Field Outward
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Explore SkyMirr’s patented MuLCAT® 5G CPE routers, ultra-wideband omnidirectional antennas, and ruggedized IoT asset trackers certified for carrier networks worldwide.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex items-center gap-2 mt-8 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-white/10 hover:bg-white/20 text-slate-200 border border-white/10'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-black/30 text-slate-300'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Product Showcase (Shown only for 'all' or 'router' category) */}
      {(activeCategory === 'all' || activeCategory === 'router') && (
        <section className="py-10 sm:py-12 bg-[#F8FAFC] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs font-bold text-blue-700 tracking-wider uppercase mb-2 font-mono">
              Featured Hardware
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display mb-8">
              Sky5G™ Wireless Router (TCPA-117)
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left: Router Hardware Card with Click-to-Zoom */}
              <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm overflow-hidden group">
                <div
                  onClick={() =>
                    openZoom(
                      '/images/5g-routers.jpg',
                      'Sky5G™ Wireless Router (TCPA-117)',
                      'Carrier-Certified 5G Sub-6 & Wi-Fi 7 Enterprise Gateway',
                      [
                        { label: 'Bands', value: 'Sub-6 GHz & Wi-Fi 7' },
                        { label: 'Carrier', value: 'AT&T & T-Mobile' },
                        { label: 'Antenna', value: 'Dual Internal MuLCAT®' },
                      ],
                      'CES® 2026 Innovation Awards Honoree'
                    )
                  }
                  className="relative aspect-[16/11] bg-slate-900 rounded-xl overflow-hidden flex items-center justify-center p-4 cursor-zoom-in group/featured"
                  title="Click to zoom in high-resolution"
                >
                  <img
                    src="/images/5g-routers.jpg"
                    alt="Sky5G Wireless Router (TCPA-117)"
                    className="w-full h-full object-contain group-hover/featured:scale-106 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-mono border border-white/20">
                    Model: TCPA-117 · FCC ID: 2BXXX-TCPA117
                  </div>

                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold flex items-center gap-1 shadow-md opacity-0 group-hover/featured:opacity-100 transition-opacity">
                    <ZoomIn className="w-3 h-3" />
                    <span>Zoom / Inspect</span>
                  </div>
                </div>
              </div>

              {/* Right: Key Specs & Features */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-1">
                    CES® 2026 Innovation Awards Honoree
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-display">
                    Next-Generation Carrier-Grade Fixed Wireless Access
                  </h3>
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                    Engineered specifically for challenging RF environments where traditional routers fail to connect.
                    Equipped with dual internal patented MuLCAT® antennas providing unmatched constructive phase alignment.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <div className="text-xs text-slate-500 font-mono">Cell Edge Reach</div>
                    <div className="text-xl font-extrabold text-blue-700 font-mono mt-1">+42% Range</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <div className="text-xs text-slate-500 font-mono">Throughput</div>
                    <div className="text-xl font-extrabold text-slate-900 font-mono mt-1">Multi-Gigabit</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => onOpenQuote('Sky5G™ Wireless Router (TCPA-117)')}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl transition-all shadow-md shadow-blue-600/25 flex items-center gap-2 cursor-pointer font-display"
                  >
                    <span>Request Evaluation Unit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Filterable Product Grid */}
      <section className="py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-black font-display text-slate-950">
              {activeCategory === 'all'
                ? 'All SkyMirr Hardware'
                : categories.find((c) => c.id === activeCategory)?.label}
            </h2>
            <span className="text-xs font-mono text-slate-500">
              Showing {filteredProducts.length} certified models
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => (
              <TiltCard key={product.id} index={idx}>
                <div>
                  {/* Product Image Box with Click-to-Zoom Trigger */}
                    <div
                      onClick={() => onNavigate(`product/${product.id}`)}
                      className="relative aspect-[16/11] bg-white border-b border-slate-100 flex items-center justify-center p-6 cursor-pointer group/cardImage"
                      title="View product details"
                    >
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover/cardImage:scale-108 transition-transform duration-300 filter drop-shadow-md"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-2xl bg-blue-100/60 text-blue-600 flex items-center justify-center">
                        <Radio className="w-8 h-8" />
                      </div>
                    )}

                    {product.award && (
                      <div className="absolute top-3 left-3 bg-blue-600 text-white font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {product.award}
                      </div>
                    )}
                    
                    {/* NEW Ribbon */}
                    {product.isNew && (
                      <div className="absolute -top-1 -right-1 overflow-hidden w-24 h-24">
                        <div className="absolute top-4 -right-8 bg-red-600 text-white font-bold text-[10px] py-1 px-10 transform rotate-45 shadow-md tracking-wider">
                          NEW
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-[11px] font-mono text-blue-700 font-bold uppercase tracking-wider mb-1">
                      {product.category === 'router'
                        ? '5G CPE Gateway'
                        : product.category === 'antenna'
                        ? 'Ultra-Wideband Antenna'
                        : product.category === 'tracker'
                        ? 'Industrial Asset Tracker'
                        : 'Embedded Array'}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-[#034B9C] mb-3 text-center transition-colors">
                      {product.name.replace('SkyBlade™ ', '').replace('BioTrack™ ', '').replace('SkyTrack™ ', '')}
                    </h3>
                    <p className="text-sm font-semibold text-slate-800 text-center leading-relaxed">
                      {product.tagline || product.description}
                    </p>

                    {/* Features and Specs removed to match skymirr.com clean grid design */}
                  </div>
                </div>

                  {/* Action Bar */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => onNavigate(`product/${product.id}`)}
                      className="w-full py-3 px-4 bg-[#0FA5E9] hover:bg-[#0284C7] text-white font-semibold text-sm rounded-full transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md font-display"
                    >
                      <span>View Product</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
              </TiltCard>
            ))}
          </div>
        </div>
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
