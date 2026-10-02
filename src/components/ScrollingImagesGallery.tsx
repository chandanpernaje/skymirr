import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageZoomModal } from './ImageZoomModal';
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  ShieldCheck,
  Zap,
  Sparkles,
  Layers,
  Activity,
  Play,
  Pause,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Radio,
  Sliders,
  Maximize2,
  X,
  Compass,
  MoveHorizontal
} from 'lucide-react';

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
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'antennas-gallery',
    title: 'SkyBlade™ Ultra-Wideband Antennas',
    category: 'Antenna Systems',
    badge: 'Carrier Validated',
    image: '/images/antennas-new.jpg',
    tagline: 'Multi-layer coupling omnidirectional whip array covering 617 to 5925 MHz with stable azimuth radiation',
    highlight: '6.0 dBi Peak Gain · VSWR < 2.0:1',
    description: 'Engineered with proprietary MuLCAT® multi-layer coupling that eliminates destructive phase interference between adjacent cellular and Wi-Fi bands. Delivers sustained high-efficiency transmission across all 4G LTE, 5G NR (FR1), and Wi-Fi 6E/7 frequency allocations.',
    specs: [
      { label: 'Frequency Range', value: '617 – 5925 MHz' },
      { label: 'Peak Gain', value: '6.0 dBi' },
      { label: 'VSWR', value: '< 2.0:1 Typ.' },
      { label: 'Radiation Pattern', value: 'Omni 360° Azimuth' },
    ],
  },
  {
    id: 'routers-gallery',
    title: 'Sky5G™ CPE Wireless Router (TCPA-117)',
    category: 'Carrier Gateway',
    badge: 'CES® 2026 Honoree',
    image: '/images/5g-routers.jpg',
    tagline: 'Carrier-certified 5G Sub-6 & Wi-Fi 7 gateway with integrated MuLCAT® array for +42% cell-edge reach',
    highlight: 'T-Priority Ready · AT&T & T-Mobile Certified',
    description: 'High-speed fixed wireless access gateway designed for mission-critical enterprise failover, retail branch deployments, and first responder command centers. Powered by dual internal MuLCAT® antennas that extract clean signal from weak suburban and rural cell towers.',
    specs: [
      { label: 'Cellular Technology', value: '5G Sub-6 NSA/SA' },
      { label: 'Wi-Fi Standard', value: 'Wi-Fi 7 (802.11be)' },
      { label: 'Ethernet Ports', value: '2.5G WAN + 4x GbE LAN' },
      { label: 'Carrier Certs', value: 'AT&T, T-Mobile, PTCRB' },
    ],
  },
  {
    id: 'trackers-gallery',
    title: 'SkyTrack™ Industrial Asset Trackers',
    category: 'Industrial IoT',
    badge: 'ATEX Zone 2',
    image: '/images/asset-trackers.jpg',
    tagline: 'Ruggedized IP68 cellular GPS telemetry terminal with internally decoupled MuLCAT® micro-antennas',
    highlight: '7-Year Battery Life · Multi-Constellation GNSS',
    description: 'Ultra-low-power industrial sensor gateway providing real-time location, temperature, shock, and battery diagnostics for heavy equipment, rail cars, cold-chain cargo, and offshore energy infrastructure.',
    specs: [
      { label: 'Cellular Bands', value: 'LTE-M & NB-IoT Global' },
      { label: 'Ingress Protection', value: 'IP68 & MIL-STD-810H' },
      { label: 'Battery Capacity', value: 'Up to 7 Years Autonomous' },
      { label: 'Positioning', value: 'GPS, GLONASS, Galileo, BeiDou' },
    ],
  },
  {
    id: 'mimo-gallery',
    title: 'SkyBlade™ TAMP161 Broadband MIMO',
    category: 'Vehicle & Transit',
    badge: 'MIL-STD-810H',
    image: '/images/our-products.png',
    tagline: 'Dual cross-polarized omnidirectional antenna module engineered for emergency response & transport fleets',
    highlight: 'IP67 Submersible · High Shock & Vibration',
    description: 'Rugged low-profile aerodynamic rooftop antenna delivering simultaneous high-throughput cellular uplink and dual-band Wi-Fi connectivity for public safety vehicles, transit buses, and autonomous mobile robotics.',
    specs: [
      { label: 'Configuration', value: '4x4 MIMO Cellular + 2x2 Wi-Fi' },
      { label: 'Housing Grade', value: 'Impact Resistant Xenoy™' },
      { label: 'Submersion', value: 'IP67 Ingress Rated' },
      { label: 'Cable Length', value: 'Low-loss RG-58 / CFD200' },
    ],
  },
  {
    id: 'next-gen-gallery',
    title: 'Next-Gen MuLCAT® Multi-Resonance Arrays',
    category: 'Electromagnetic R&D',
    badge: 'Patent-Pending',
    image: '/images/skymirr-next-gen-antennas.jpg',
    tagline: 'Next-generation compact broadband modules prototyped in our Songdo Incheon 3D microwave chamber',
    highlight: 'Multi-Layer Constructive Resonance',
    description: 'Breakthrough electromagnetic topology utilizing tightly-spaced dielectric resonators that turn mutual coupling into constructive radiation power. Enables sub-miniature antenna form factors with octave bandwidths previously deemed impossible by the Chu-Harrington limit.',
    specs: [
      { label: 'Bandwidth Ratio', value: '10:1 Continuous' },
      { label: 'Efficiency Gain', value: '+65% over Dipoles' },
      { label: 'R&D Facility', value: 'Songdo 3D Anechoic Lab' },
      { label: 'Key Patent', value: 'Multi-Layer Reactive Coupling' },
    ],
  },
];

interface ScrollingImagesGalleryProps {
  onOpenQuote: (productName?: string) => void;
  onNavigate?: (page: string) => void;
}

export function ScrollingImagesGallery({ onOpenQuote, onNavigate }: ScrollingImagesGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Horizontal Scroll Carousel Ref & Mouse Dragging State
  const scrollTrackRef = useRef<HTMLDivElement | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const touchStartXRef = useRef<number | null>(null);

  // Hover state for Applications Accordion
  const [hoveredApp, setHoveredApp] = useState<string>('app-edu');

  // Auto-advance if playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % GALLERY_ITEMS.length;
        scrollToCard(next);
        return next;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const scrollToCard = (index: number) => {
    if (scrollTrackRef.current) {
      const cardWidth = 280;
      scrollTrackRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const nextSlide = () => {
    const next = (activeIndex + 1) % GALLERY_ITEMS.length;
    setActiveIndex(next);
    scrollToCard(next);
  };

  const prevSlide = () => {
    const prev = (activeIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setActiveIndex(prev);
    scrollToCard(prev);
  };

  const scrollTrack = (direction: 'left' | 'right') => {
    if (scrollTrackRef.current) {
      const offset = 300;
      scrollTrackRef.current.scrollBy({
        left: direction === 'left' ? -offset : offset,
        behavior: 'smooth',
      });
    }
  };

  // Drag-to-scroll handlers for desktop mouse
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollTrackRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - scrollTrackRef.current.offsetLeft);
    setScrollLeftState(scrollTrackRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollTrackRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollTrackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollTrackRef.current.scrollLeft = scrollLeftState - walk;
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartXRef.current = null;
  };

  const activeProduct = GALLERY_ITEMS[activeIndex];

  return (
    <section id="interactive-showcase" className="scroll-mt-20 py-20 sm:py-24 bg-sky-50 relative overflow-hidden border-t border-sky-100 text-slate-900">
      {/* Radiant High-Tech Ambient Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-white/40 blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 right-10 w-[500px] h-[350px] bg-blue-100/50 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute inset-0 rf-grid-dense opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white border border-sky-200 text-sky-800 text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-sky-600 animate-pulse" />
              <span>Interactive Hardware Slider &amp; Spec Inspector</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight uppercase [text-wrap:balance]">
              CORE HARDWARE &amp; TECHNOLOGY SHOWCASE
            </h2>
            <p className="text-sky-800 font-sans text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Explore authentic SkyMirr carrier-grade antennas, 5G gateways, and IoT devices. Click, drag to scroll, or swipe to inspect verified RF specifications.
            </p>
          </div>

          {/* Slider Controls: Counter, Play/Pause, Next/Prev */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-sm px-3.5 py-2 font-mono text-xs text-slate-500 shadow-sm">
              <span className="font-bold text-sky-700">0{activeIndex + 1}</span>
              <span className="text-slate-400">/</span>
              <span>0{GALLERY_ITEMS.length}</span>
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`p-2.5 rounded-sm border transition-all cursor-pointer shadow-sm ${
                isPlaying
                  ? 'bg-sky-100 border-sky-300 text-sky-800'
                  : 'bg-white border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-300'
              }`}
              title={isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
              aria-label={isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>

            <button
              onClick={prevSlide}
              className="p-2.5 rounded-sm bg-white border border-slate-200 text-slate-600 hover:text-sky-700 hover:border-sky-300 transition-all cursor-pointer active:scale-95 shadow-sm"
              aria-label="Previous hardware slide"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <button
              onClick={nextSlide}
              className="p-2.5 rounded-sm bg-slate-900 border border-slate-800 text-white hover:bg-slate-800 transition-all cursor-pointer active:scale-95 shadow-sm"
              aria-label="Next hardware slide"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Click-to-Move Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar"
        >
          {GALLERY_ITEMS.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveIndex(idx);
                  scrollToCard(idx);
                }}
                className={`shrink-0 px-4 py-2 rounded-sm text-xs font-semibold font-sans transition-all flex items-center gap-2 cursor-pointer border tracking-wide uppercase ${
                  isActive
                    ? 'bg-slate-800 border-slate-600 text-white shadow-sm scale-102'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800 hover:border-slate-700'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-slate-300 animate-ping' : 'bg-slate-600'}`} />
                <span>{item.category}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Featured Click-Move Active Display Card (Premium Desktop & Mobile Bento) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="rounded-none bg-white border border-slate-200 p-5 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden transition-all duration-500"
        >
          {/* Subtle Accent Glow Ring */}
          <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 bg-sky-100/50 blur-[100px] rounded-full" />
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] bg-sky-200" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: 100% Correctly Fitted Hardware Photography in High-Tech Studio Enclosure */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="w-full relative aspect-[16/11] sm:aspect-[16/10] rounded-sm bg-gradient-to-b from-slate-950 via-[#0a0a0a] to-slate-950 border border-slate-800 p-4 sm:p-6 flex items-center justify-center overflow-hidden group shadow-inner">
                {/* Blueprint grid inside viewport */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" />

                {/* Subtle Radial Pedestal Glow behind hardware */}
                <div className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-slate-800/20 blur-3xl pointer-events-none" />

                {/* The Unobstructed Hardware Image with 100% Fit */}
                <img
                  src={activeProduct.image}
                  alt={activeProduct.title}
                  key={activeProduct.image}
                  className="max-h-full max-w-full object-contain relative z-10 transition-all duration-500 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] group-hover:scale-104 cursor-zoom-in"
                  onClick={() => setSelectedItem(activeProduct)}
                  loading="lazy"
                />

                {/* Floating Micro-Badges: Non-obstructive positioning */}
                <div className="absolute top-3 left-3 z-20">
                  <span className="px-2.5 py-1 rounded-sm text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700 shadow-sm">
                    {activeProduct.badge}
                  </span>
                </div>

                <div className="absolute top-3 right-3 z-20">
                  <button
                    onClick={() => setSelectedItem(activeProduct)}
                    className="p-2 rounded-sm bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition-all shadow-md cursor-pointer flex items-center gap-1.5 text-xs font-mono"
                    title="Enlarge & Inspect Details"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline text-[10px] uppercase tracking-wider">Inspect</span>
                  </button>
                </div>

                {/* Bottom Hardware Tagline Bar */}
                <div className="absolute bottom-2.5 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
                  <span className="text-[10px] font-mono font-semibold text-slate-500 bg-slate-950 px-2 py-0.5 rounded-sm border border-slate-800 uppercase tracking-wide">
                    MuLCAT® Physical Layer
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-300 bg-slate-950 px-2 py-0.5 rounded-sm border border-slate-800 uppercase tracking-wide">
                    {activeProduct.highlight.split('·')[0]}
                  </span>
                </div>
              </div>

              {/* Quick Slide Dots Indicator */}
              <div className="flex items-center justify-center gap-2 mt-4 w-full">
                {GALLERY_ITEMS.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveIndex(idx);
                      scrollToCard(idx);
                    }}
                    className={`h-1.5 rounded-sm transition-all cursor-pointer ${
                      activeIndex === idx ? 'w-8 bg-slate-400' : 'w-2 bg-slate-800 hover:bg-slate-600'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Technical Specifications & Commercial Inquiries */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-widest">
                    {activeProduct.category}
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="text-xs font-mono text-slate-500">SkyMirr Engineering Spec</span>
                </div>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight uppercase [text-wrap:balance]">
                  {activeProduct.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed font-sans">
                  {activeProduct.description}
                </p>
              </div>

              {/* 4-Cell Engineering Specs Grid with Mobile Responsive Alignment */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {activeProduct.specs.map((spec, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-sm bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors"
                  >
                    <span className="text-[10px] font-mono text-slate-500 uppercase block tracking-wider">
                      {spec.label}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 font-mono mt-0.5 block truncate">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Highlight Pill */}
              <div className="p-3.5 rounded-sm bg-sky-50 border border-sky-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                  <span className="text-xs font-mono font-bold text-sky-800">
                    {activeProduct.highlight}
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase text-sky-600 font-semibold shrink-0">
                  Carrier Grade
                </span>
              </div>

              {/* Call-to-Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onOpenQuote(activeProduct.title)}
                  className="w-full sm:w-auto flex-1 py-3 px-6 rounded-md bg-slate-900 hover:bg-slate-800 text-white font-bold text-[11px] font-sans tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-95 group"
                >
                  <span>Request Engineering Datasheet</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {onNavigate && (
                  <button
                    onClick={() => onNavigate('products')}
                    className="w-full sm:w-auto py-3 px-5 rounded-md bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-700 text-[11px] font-semibold font-sans uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95 group"
                  >
                    <span>View All Products</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Advanced Deployment Use Cases Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <div className="flex flex-col mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white border border-sky-200 text-sky-800 text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-sm self-start">
              <Compass className="w-3.5 h-3.5 text-sky-600" />
              <span>Use Cases</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-sky-700 uppercase leading-tight">
              APPLICATIONS
            </h3>
            <p className="text-sky-800 font-sans text-sm mt-1 max-w-2xl leading-relaxed">
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
              
              // Map colors to tailwind classes since dynamic string interpolation for colors can be stripped by JIT
              const colorMap = {
                blue: { border: 'border-blue-400/30', bg: 'bg-blue-600/90', text: 'group-hover:text-blue-200' },
                cyan: { border: 'border-cyan-400/30', bg: 'bg-cyan-600/90', text: 'group-hover:text-cyan-200' },
                emerald: { border: 'border-emerald-400/30', bg: 'bg-emerald-600/90', text: 'group-hover:text-emerald-200' },
                amber: { border: 'border-amber-400/30', bg: 'bg-amber-600/90', text: 'group-hover:text-amber-200' }
              };
              const theme = colorMap[app.color as keyof typeof colorMap];

              return (
                <motion.div
                  key={app.id}
                  layout
                  onHoverStart={() => setHoveredApp(app.id)}
                  onClick={() => onNavigate?.('applications')}
                  animate={{ flex: isHovered ? 4 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="group relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl cursor-pointer w-full"
                >
                  <img
                    src={app.img}
                    alt={app.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-80" />
                  
                  {/* Text Content */}
                  <motion.div 
                    layout="position"
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <div className="overflow-hidden flex">
                      <motion.span 
                        layout="position"
                        className={`px-2.5 py-1 rounded-md backdrop-blur-sm text-white text-[10px] font-mono font-bold uppercase tracking-wider mb-2 inline-block shadow-md ${theme.bg} ${theme.border} whitespace-nowrap`}
                      >
                        {app.tagline}
                      </motion.span>
                    </div>
                    
                    <motion.h4 
                      layout="position"
                      className={`text-xl lg:text-3xl font-black font-display text-white transition-colors whitespace-nowrap ${theme.text}`}
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
                          className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-2 md:line-clamp-none max-w-sm"
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

      {/* Lightbox Modal for Enlarge Image & Engineering Inspection with Zoom & Pan */}
      <ImageZoomModal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        imageSrc={selectedItem?.image || ''}
        title={selectedItem?.title || ''}
        subtitle={selectedItem?.category}
        specs={selectedItem?.specs}
        highlight={selectedItem?.highlight}
      />
    </section>
  );
}
