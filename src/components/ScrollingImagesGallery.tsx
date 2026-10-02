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
  navigateTarget?: string;
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
    navigateTarget: 'antennas',
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
    navigateTarget: 'routers',
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
    navigateTarget: 'trackers',
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
    navigateTarget: 'antennas',
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
    navigateTarget: 'products',
  },
];

interface ScrollingImagesGalleryProps {
  onOpenQuote: (productName?: string) => void;
  onNavigate?: (page: string) => void;
}

export function ScrollingImagesGallery({ onOpenQuote, onNavigate }: ScrollingImagesGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Horizontal Scroll Carousel Ref & Mouse Dragging State
  const scrollTrackRef = useRef<HTMLDivElement | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const touchStartXRef = useRef<number | null>(null);

  // Hover state for Applications Accordion
  const [hoveredApp, setHoveredApp] = useState<string>('app-edu');
  const [hoveredProduct, setHoveredProduct] = useState<string>('antennas-gallery');

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
    <section id="interactive-showcase" className="scroll-mt-20 py-10 sm:py-12 bg-sky-50 relative overflow-hidden border-t border-sky-100 text-slate-900">
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
          className="flex flex-col items-center text-center gap-6 mb-12"
        >
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-sm bg-white border border-sky-200 text-sky-800 text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-sky-600 animate-pulse" />
              <span>WHEN IT HAS TO CONNECT, IT HAS TO BE SKYMIRR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight uppercase [text-wrap:balance]">
              PRODUCTS
            </h2>
            <p className="text-sky-800 font-sans text-sm sm:text-base mt-2 max-w-2xl leading-relaxed mx-auto">
              We develop/manufacture advanced RF technology-based products that better our lives, such as cost-effective, better performing, broadband wireless communications for everyone and medical applications that treat serious disease far more effectively
            </p>
          </div>
        </motion.div>

          {/* Products Accordion Layout */}
          <div className="flex flex-col lg:flex-row h-[600px] lg:h-[500px] w-full gap-4 mt-8">
            {GALLERY_ITEMS.map((item, idx) => {
              const isHovered = hoveredProduct === item.id;
              
              const themeColors = [
                { border: 'border-sky-400/30', bg: 'bg-sky-600/90', text: 'group-hover:text-sky-200' },
                { border: 'border-indigo-400/30', bg: 'bg-indigo-600/90', text: 'group-hover:text-indigo-200' },
                { border: 'border-emerald-400/30', bg: 'bg-emerald-600/90', text: 'group-hover:text-emerald-200' },
                { border: 'border-amber-400/30', bg: 'bg-amber-600/90', text: 'group-hover:text-amber-200' },
                { border: 'border-purple-400/30', bg: 'bg-purple-600/90', text: 'group-hover:text-purple-200' }
              ];
              const theme = themeColors[idx % themeColors.length];

              return (
                <motion.div
                  key={item.id}
                  layout
                  onHoverStart={() => setHoveredProduct(item.id)}
                  onClick={() => setHoveredProduct(item.id)}
                  animate={{ flex: isHovered ? 4 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="group relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl cursor-pointer w-full bg-white"
                >
                  {/* Clean Studio Background */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-white pointer-events-none" />
                  <div className="absolute w-64 h-64 rounded-full bg-sky-50 blur-3xl pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-contain p-8 mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-90' : 'opacity-70'}`} />
                  
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
                        {item.category}
                      </motion.span>
                    </div>
                    
                    <motion.h4 
                      layout="position"
                      className={`text-xl lg:text-3xl font-black font-display text-white transition-colors whitespace-nowrap ${theme.text}`}
                    >
                      {item.title}
                    </motion.h4>
                    
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: 10 }}
                          animate={{ opacity: 1, height: 'auto', y: 0 }}
                          exit={{ opacity: 0, height: 0, y: 10 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2"
                        >
                          <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 md:line-clamp-3">
                            {item.description}
                          </p>
                          <div className="mt-4 flex flex-col sm:flex-row gap-3">
                            <button
                              onClick={(e) => { e.stopPropagation(); onOpenQuote(item.title); }}
                              className="w-full sm:w-auto py-2.5 px-5 rounded bg-white text-slate-900 font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:bg-slate-100 transition-colors shadow flex items-center justify-center gap-1.5"
                            >
                              Request Datasheet
                            </button>
                            {onNavigate && (
                              <button
                                onClick={(e) => { e.stopPropagation(); onNavigate(item.navigateTarget || 'products'); }}
                                className="w-full sm:w-auto py-2.5 px-5 rounded bg-slate-800 border border-slate-600 text-white font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:bg-slate-700 transition-colors shadow flex items-center justify-center gap-1.5"
                              >
                                View All
                              </button>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

        {/* Advanced Deployment Use Cases Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <div className="flex flex-col items-center text-center mb-8">

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight uppercase [text-wrap:balance]">
              APPLICATIONS
            </h3>
            <p className="text-sky-800 font-sans text-sm mt-1 max-w-2xl leading-relaxed mx-auto">
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
                  onClick={() => setHoveredApp(app.id)}
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
