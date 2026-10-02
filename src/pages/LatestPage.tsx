import { useState } from 'react';
import { WaveCanvas } from '../components/WaveCanvas';
import { Calendar, ArrowRight, X, Sparkles, Newspaper, BookOpen, Layers } from 'lucide-react';

export interface LatestItem {
  id: string;
  title: string;
  date: string;
  category: 'press' | 'blog';
  image: string;
  isLogoThumb?: boolean;
  excerpt: string;
  content: string;
}

export const LATEST_ITEMS: LatestItem[] = [
  {
    id: 'pr-ces2026',
    title: 'SkyMirr To Showcase Breakthrough Wireless Technologies At CES 2026',
    date: 'December 29, 2025',
    category: 'press',
    image: '/images/blogs/skymirr-post-thumb-new.jpg',
    isLogoThumb: true,
    excerpt:
      "MELBOURNE, FL — December 29, 2025 — SkyMirr, a leading innovator in antenna-first wireless and IoT connectivity solutions, announced today that it will showcase its latest lineup of high-performance technologies at CES 2026 in Las Vegas. Attendees will have the opportunity to see SkyMirr's...",
    content:
      "MELBOURNE, FL — December 29, 2025 — SkyMirr, a leading innovator in antenna-first wireless and IoT connectivity solutions, announced today that it will showcase its latest lineup of high-performance technologies at CES 2026 in Las Vegas.\n\nAttendees will have the opportunity to see SkyMirr's award-winning Sky5G Router, the SkyBlade™ antenna series, and live spherical anechoic chamber test demonstrations showing how MuLCAT® positive coupling control eliminates blind spots in commercial and industrial IoT deployments.",
  },
  {
    id: 'pr-tmobile',
    title: "SkyMirr's Sky5G Router Achieves Certification On T-Mobile's Network And T-Priority",
    date: 'December 11, 2025',
    category: 'press',
    image: '/images/blogs/skymirr-post-thumb-new.jpg',
    isLogoThumb: true,
    excerpt:
      "MELBOURNE, FL — December 11, 2025 — SkyMirr, a leader in IoT/wireless innovation, today announced that its advanced 5G wireless router, Sky5G™, has officially achieved certification for use on T-Mobile's network and T-Priority mission-critical public safety services.",
    content:
      "MELBOURNE, FL — December 11, 2025 — SkyMirr, a leader in IoT/wireless innovation, today announced that its advanced 5G wireless router, Sky5G™, has officially achieved certification for use on T-Mobile's network and T-Priority mission-critical public safety services.\n\nThis certification guarantees seamless compatibility, priority queuing, and verified low-latency performance for enterprise, rural, and first-responder deployments across North America.",
  },
  {
    id: 'pr-ces-honoree',
    title: "SkyMirr's Sky5G™ Wireless Router Named CES 2026 Innovation Awards® Honoree",
    date: 'November 6, 2025',
    category: 'press',
    image: '/images/blogs/skymirr-post-thumb-new.jpg',
    isLogoThumb: true,
    excerpt:
      "MELBOURNE, FL — November 6, 2025 — SkyMirr, an antenna-first technology company redefining wireless performance through its breakthrough MuLCAT® (Multi-Layer Coupling Controlled Antenna Technology), is honored to announce that its Sky5G™ Wireless Router has been named a CES® 2026 Innovation Awards Honoree.",
    content:
      "MELBOURNE, FL — November 6, 2025 — SkyMirr, an antenna-first technology company redefining wireless performance through its breakthrough MuLCAT® (Multi-Layer Coupling Controlled Antenna Technology), is honored to announce that its Sky5G™ Wireless Router has been named a CES® 2026 Innovation Awards Honoree.\n\nThe CTA jury commended SkyMirr's internal antenna array which delivers 42% farther reach to cell towers and 2x coverage area compared to typical competitive CPE gateways.",
  },
  {
    id: 'pr-mwc',
    title: 'SkyMirr Launches Sky5G Router At MWC — Setting A New Standard For 5G Connectivity',
    date: 'March 2025',
    category: 'press',
    image: '/images/blogs/skymirr-post-thumb-new.jpg',
    isLogoThumb: true,
    excerpt:
      'SkyMirr Launches Sky5G Router at MWC — Setting a New Standard for 5G Connectivity. Breakthrough MuLCAT® antenna technology powers longer reach, higher throughput, and unmatched reliability across rural, urban, and industrial IoT networks.',
    content:
      'BARCELONA — Mobile World Congress — SkyMirr today launched its flagship Sky5G Router (TCPA 117), setting a new benchmark for 5G fixed wireless broadband and mobile gateway performance. Leveraging proprietary MuLCAT® electromagnetic positive coupling control, the router delivers unprecedented signal gain across 600 MHz to 6 GHz without bulky external antenna poles.',
  },
  {
    id: 'pr-skyblade',
    title: "SkyMirr Introduces SkyBlade, The World's First True Global 5G Ultra-Wideband Antenna",
    date: 'March 2025',
    category: 'press',
    image: '/images/blogs/skymirr-post-thumb-new.jpg',
    isLogoThumb: true,
    excerpt:
      "SkyMirr, a leading Florida-based provider of high-performance RF devices, proudly announces the SkyBlade, the world's best ultra-wideband external connectorized antenna designed to function seamlessly across all global 4G and 5G sub-6 frequency bands...",
    content:
      "MELBOURNE, FL — March 2025 — SkyMirr announced the commercial release of the SkyBlade™ antenna family, including the TAMP161, TAMP154, and TAMP141. Designed as a universal drop-in antenna for enterprise cellular gateways and connected vehicles, SkyBlade delivers an industry-first continuous radiation efficiency >80% across the entire 600 MHz to 6000 MHz spectrum.",
  },
  {
    id: 'pr-series-a',
    title: 'SkyMirr Secures $7.3M Series A Investment Led By Solyco Capital',
    date: 'January 2025',
    category: 'press',
    image: '/images/blogs/skymirr-post-thumb-new.jpg',
    isLogoThumb: true,
    excerpt:
      'This strategic investment will accelerate SkyMirr’s growth in the rapidly expanding IoT and wireless communications markets. Solyco Capital will provide not only financial backing but also critical business and operational guidance to propel SkyMirr’s innovative technologies...',
    content:
      "MELBOURNE, FL — January 2025 — SkyMirr, Inc. announced the successful closing of a $7.3 Million Series A financing round led by Solyco Capital. The funding supports the expansion of SkyMirr's automated manufacturing facilities in Bac Ninh, Vietnam and Incheon, Korea, and accelerates commercial deployments of the Sky5G router and SkyTracker IoT platform with Tier-1 carriers and enterprise partners.",
  },
  {
    id: 'blog-ai-iot',
    title: 'Applying AI-Driven Wireless Technology In The Internet Of Things To Solve Problems In Energy, Biomedical, And Communications',
    date: 'November 2025',
    category: 'blog',
    image: '/images/blogs/ai-driven1.jpg',
    isLogoThumb: false,
    excerpt:
      'Over the past decade or so, the concept of the Internet of Things (IoT) has gained significant popularity worldwide for many applications, referring to a network of various devices equipped with sensors as well as data integration and management software...',
    content:
      'Over the past decade or so, the concept of the Internet of Things (IoT) has gained significant popularity worldwide for many applications, referring to a network of various devices equipped with sensors as well as data integration and management software, communicating with each other, often wirelessly.\n\nHowever, real-world deployment challenges persist in hostile electromagnetic environments: utility sub-stations with massive metallic interference, deep indoor commercial basements, and mobile freight containers.\n\nSkyMirr applies positive coupling control principles and machine-learning tuning to dynamically adapt antenna impedance matching in real time. This ensures stable packet delivery, minimal battery drain, and continuous sensor reporting across smart grid metering, continuous patient biosensors, and cold-chain asset telemetry.',
  },
  {
    id: 'blog-mulcat',
    title: 'SkyMirr Introduces Its Patent-Pending Multi-Layer Coupling Controlled Antenna Technology',
    date: 'November 2025',
    category: 'blog',
    image: '/images/blogs/Patent-Pending-Multi-Layer1.jpg',
    isLogoThumb: false,
    excerpt:
      'Existing RF technology lacks the capability to meet the IoT demands overall, including wireless healthcare, energy, communications, etc. These significant service application fields require a much better RF technology than existing ones...',
    content:
      "Traditional antenna engineering has long treated mutual coupling between tightly packed radiation elements as a detrimental parasitic effect to be minimized through physical separation or lossy decoupling networks. In compact 5G routers and mobile IoT devices, this physical separation is impossible.\n\nDr. Eric (Youngmin) Jo and the SkyMirr R&D team overturned this dogma by developing MuLCAT® (Multi-Layer Coupling Controlled Antenna Technology). Instead of fighting mutual coupling, MuLCAT utilizes controlled multi-layer electromagnetic resonance to constructively couple radiating elements.\n\nThis delivers greater than 100% operational bandwidth, up to 92% increase in recognition distance, and more than 65% higher forward gain without increasing device form factor.",
  },
  {
    id: 'blog-biotech',
    title: 'SkyMirr Inc. Develops Advanced RF Technology For Bio-Tech Medical Breakthrough',
    date: 'April 2025',
    category: 'blog',
    image: '/images/blogs/Clinical-services.jpg',
    isLogoThumb: false,
    excerpt:
      'SkyMirr\'s CEO, Eric (Youngmin) Jo notes: "A leading Asian Bio-Tech company contacted us with a challenge to provide a high-performing RF solution for its medical tracking unit. They explained other companies had difficulties to deliver the product..."',
    content:
      "Medical technology and in-body diagnostics require ultra-miniaturized transceivers that function reliably while surrounded by biological tissue, saline solutions, and operating room shielding.\n\nSkyMirr's CEO, Eric (Youngmin) Jo notes: 'A leading Asian Bio-Tech company contacted us with a challenge to provide a high-performing RF solution for its medical tracking unit. They explained other companies had difficulties to deliver the product at the desired performance and small size level they needed.'\n\nSkyMirr engineered the MAEP 103, an ultra-compact NFC coil and Sub-GHz antenna array engineered specifically to penetrate dense tissue and metallic surgical environments. The breakthrough enabled continuous patient telemetry with zero signal degradation.",
  },
  {
    id: 'blog-expanded-portfolio',
    title: 'SkyMirr Expands Its Antenna Portfolio With New High-Performance 4G/5G And Wi-Fi Solutions',
    date: 'September 2026',
    category: 'blog',
    image: '/images/blogs/skymirr-next-gen-antennas.jpg',
    isLogoThumb: false,
    excerpt:
      'As wireless connectivity continues to evolve, antenna performance remains a critical foundation for delivering reliable coverage, higher throughput, and consistent network performance. From 5G broadband and Fixed Wireless Access (FWA) to high-density Wi-Fi 7 environments...',
    content:
      'As wireless connectivity continues to evolve, antenna performance remains a critical foundation for delivering reliable coverage, higher throughput, and consistent network performance. From 5G broadband and Fixed Wireless Access (FWA) to high-density Wi-Fi 7 environments, next-generation connected devices require sophisticated RF antenna design.\n\nSkyMirr’s newly expanded antenna portfolio introduces high-efficiency, multi-band solutions that address today’s most demanding deployment environments. Powered by proprietary MuLCAT® (Multi-Layer Coupling Controlled Antenna Technology), these antennas overcome common RF challenges such as port-to-port interference, radiation degradation in compact form factors, and signal fading at cell boundaries.\n\nKey additions include the flagship TAMP161 4G/5G MIMO Broadband Omnidirectional Module, the high-gain TAMP154 Directional Panel for rural fixed wireless access, and the versatile TAMP159 Wi-Fi 6E/7 external antenna offering wideband coverage across 2.4 GHz, 5 GHz, and 6 GHz spectrums.',
  },
  {
    id: 'blog-antenna-first',
    title: 'Antenna-First Design: Why Real-World 5G Performance Starts At The RF Layer',
    date: 'January 2026',
    category: 'blog',
    image: '/images/blogs/blog-antenna1.jpg',
    isLogoThumb: false,
    excerpt:
      "SkyMirr's Sky5G CPE platform was developed with a simple engineering premise: In real-world wireless deployments, performance is often limited not by the modem or software stack, but by the antenna subsystem.",
    content:
      "In modern wireless engineering, device manufacturers often spend millions integrating the fastest baseband silicon and newest modem chipsets, only to package them with compromised off-the-shelf antenna elements tucked into tight enclosures.\n\nAt SkyMirr, we believe in 'Antenna-First Design.' The fundamental laws of electromagnetics govern signal propagation: no software algorithm or modem optimization can recover signal energy lost at the antenna interface.\n\nBy designing the antenna geometry and coupling mechanisms simultaneously with the enclosure, circuit trace routing, and thermal dissipators, SkyMirr achieves unmatched isolation (>25 dB) and efficiency (>85%) across 600 MHz to 6000 MHz. The result is the Sky5G router reaching cell towers up to 42% farther than conventional CPEs.",
  },
];

interface LatestPageProps {
  initialCategory?: 'all' | 'press' | 'blogs';
  onOpenQuote?: (productName?: string) => void;
  onNavigate?: (page: string) => void;
}

export function LatestPage({ initialCategory = 'all', onOpenQuote, onNavigate }: LatestPageProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'press' | 'blogs'>(initialCategory);
  const [selectedItem, setSelectedItem] = useState<LatestItem | null>(null);

  const filteredItems = LATEST_ITEMS.filter((item) => {
    if (activeCategory === 'press') return item.category === 'press';
    if (activeCategory === 'blogs') return item.category === 'blog';
    return true;
  });

  const pressCount = LATEST_ITEMS.filter((i) => i.category === 'press').length;
  const blogCount = LATEST_ITEMS.filter((i) => i.category === 'blog').length;

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen text-slate-900">
      {/* Header Banner - Exactly matching Technology, About, Products header banner styling */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#001738] via-[#05224D] to-[#001738] text-white overflow-hidden shadow-xl">
        <WaveCanvas opacity={0.16} speed={0.8} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl text-left space-y-2">
            <div className="text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase">
              Corporate Press &amp; Media Center
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              The Latest @ SkyMirr
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3 font-sans">
              All the latest corporate news, technology milestones, carrier certifications, award recognitions, and engineering blogs from SkyMirr.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Section Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="space-y-1 text-left">
            <div className="text-xs font-bold text-blue-700 tracking-wider uppercase font-mono">
              Press Releases &amp; Whitepapers
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-950 tracking-tight">
              {activeCategory === 'press' ? 'Press Releases' : activeCategory === 'blogs' ? 'Technical Blogs & Insights' : 'All Announcements & Insights'}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer flex items-center gap-2 ${
                activeCategory === 'all'
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-200/80'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All ({LATEST_ITEMS.length})</span>
            </button>

            <button
              onClick={() => setActiveCategory('press')}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer flex items-center gap-2 ${
                activeCategory === 'press'
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-200/80'
              }`}
            >
              <Newspaper className="w-3.5 h-3.5" />
              <span>Press Releases ({pressCount})</span>
            </button>

            <button
              onClick={() => setActiveCategory('blogs')}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer flex items-center gap-2 ${
                activeCategory === 'blogs'
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-200/80'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Blogs ({blogCount})</span>
            </button>
          </div>
        </div>

        {/* Articles Cards Grid / List */}
        <div className="space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col md:flex-row items-stretch gap-6 sm:gap-8 group text-left"
            >
              {/* Thumbnail Container */}
              <div
                className={`w-full md:w-64 h-48 sm:h-52 rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-4 border transition-all duration-300 ${
                  item.isLogoThumb
                    ? 'bg-gradient-to-b from-slate-50 to-white border-slate-200/80 group-hover:border-blue-300 shadow-xs'
                    : 'bg-slate-100 border-slate-200/80'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full ${
                    item.isLogoThumb ? 'object-contain max-h-24 w-auto' : 'object-cover rounded-lg'
                  } group-hover:scale-105 transition-transform duration-500 ease-out`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/skymirr-logo-3d-hd.png';
                  }}
                />
              </div>

              {/* Content Box */}
              <div className="flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border ${
                        item.category === 'press'
                          ? 'bg-blue-50 text-blue-800 border-blue-200'
                          : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      }`}
                    >
                      {item.category === 'press' ? 'Press Release' : 'Engineering Whitepaper'}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-display text-slate-950 group-hover:text-blue-600 transition-colors leading-snug tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed line-clamp-3 font-normal">
                    {item.excerpt}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 group-hover:bg-blue-600 text-white text-xs font-bold font-sans transition-all duration-300 cursor-pointer shadow-sm hover:shadow-blue-500/25 hover:-translate-y-0.5"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reading Modal */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full border border-slate-200 animate-slide-up text-left"
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-blue-700 font-bold bg-blue-100/70 px-3 py-1 rounded-full">
                  {selectedItem.category === 'press' ? 'SkyMirr Official Press Release' : 'SkyMirr Technical Whitepaper'}
                </span>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-2.5 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-200/60 transition-colors cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scroll Content */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
              {!selectedItem.isLogoThumb && (
                <div className="rounded-2xl overflow-hidden border border-slate-200 max-h-64 shadow-xs">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  <span>{selectedItem.date}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-display tracking-tight leading-snug">
                  {selectedItem.title}
                </h3>
              </div>

              <div className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed space-y-4 whitespace-pre-line pt-4 border-t border-slate-100 font-normal">
                {selectedItem.content}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 px-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-mono text-slate-500 text-[11px]">
                SkyMirr Corporate Media &amp; Publications
              </span>
              <button
                onClick={() => setSelectedItem(null)}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold font-sans transition-all cursor-pointer shadow-sm hover:-translate-y-0.5"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


