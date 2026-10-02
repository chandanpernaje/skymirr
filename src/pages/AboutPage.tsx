import React, { useState, useEffect, useRef } from 'react';
import { Maximize2, X, Sparkles } from 'lucide-react';
import { WaveCanvas } from '../components/WaveCanvas';

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
}

export const AboutPage: React.FC = () => {
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    src: '',
    title: '',
  });

  const [visibleCards, setVisibleCards] = useState<Record<number, boolean>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for smooth scroll-triggered slide-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleCards((prev) => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.about-card-animate');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const openLightbox = (src: string, title: string) => {
    setLightbox({ isOpen: true, src, title });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const trustedLogos = [
    { name: 'Walmart', img: '/images/about/wallmart.jpg' },
    { name: 'DigiKey', img: '/images/about/digikey.jpg' },
    { name: 'Amazon', img: '/images/about/amazon.jpg' },
    { name: 'ePlus', img: '/images/about/eplus.jpg' },
    { name: 'T-Mobile', img: '/images/about/tmobile.jpg' },
    { name: 'Verizon', img: '/images/about/verizon.jpg' },
  ];

  return (
    <div ref={containerRef} className="pt-24 pb-20 bg-white overflow-x-hidden relative">
      
      {/* Background Floating Gradient Orbs */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-gradient-to-br from-sky-400/10 to-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Page Header Banner */}
      <section className="relative py-16 bg-gradient-to-b from-[#001738] via-[#05224D] to-[#001738] text-white overflow-hidden">
        <WaveCanvas opacity={0.16} speed={0.8} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase mb-2">
              Company Overview
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              World-Class Pioneers
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Decades of pioneering expertise in RF engineering, telecommunications infrastructure, and enterprise growth.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-24 relative z-10">
        
        {/* ========================================================
            SECTION 1: ABOUT SKYMIRR
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text Column */}
          <div data-index={0} className={`about-card-animate lg:col-span-7 space-y-6 glass-panel-light rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-700 ease-out ${visibleCards[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-xs font-mono font-bold text-blue-800 uppercase tracking-wider">
              Our Vision
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight font-sans">
              About SkyMirr
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans font-normal">
              <p>
                At SkyMirr, we specialize in unlocking powerful wireless performance through custom antenna solutions and system-level RF consulting. Our mission is simple: <strong className="text-slate-950 font-semibold">help innovators build smarter, more connected products—faster.</strong>
              </p>

              <p>
                From embedded 5G and asset tracker modules to rugged IoT, surveillance, and industrial applications, we design antennas and RF devices that meet real-world demands. Our engineering team moves fast, solving signal challenges with precision while reducing time-to-market and improving product performance. Whether you need a fully custom design or tuning and integration support, we deliver tested, ready-to-use solutions that work in the field, not just on paper.
              </p>

              <p>
                Our deep antenna expertise powers our high-performing devices like 5G routers, asset trackers, and more—where reliable connectivity isn't optional. We understand that performance depends on more than just the antenna itself, which is why we engineer solutions with system architecture in mind. From board layout and enclosure design to signal isolation and power efficiency, we bring a holistic system-level view that helps us make industry-leading devices and help our customers create wireless products that are both robust and market-ready.
              </p>

              <p className="font-bold text-slate-950 text-sm sm:text-base pt-2 font-mono bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
                "At SkyMirr, we don't just make antennas—we connect the world."
              </p>
            </div>
          </div>

          {/* Right Image Column (Tradeshow booth team photo) */}
          <div data-index={1} className={`about-card-animate lg:col-span-5 flex justify-center transition-all duration-700 ease-out ${visibleCards[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div
              onClick={() => openLightbox('/images/about/aboutus.jpg', 'SkyMirr Team at Showcase Booth')}
              className="glass-panel-light rounded-3xl p-4 border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:border-blue-400 transition-all duration-300 cursor-pointer group w-full max-w-lg"
            >
              <div className="rounded-2xl overflow-hidden relative border border-slate-100">
                <img
                  src="/images/about/aboutus.jpg"
                  alt="SkyMirr Team at Booth"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="p-3 rounded-2xl bg-white/90 backdrop-blur-md text-slate-950 shadow-lg transform -translate-y-1 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>
              </div>
              <div className="p-3 text-center">
                <span className="text-xs font-mono text-slate-500 font-medium">
                  SkyMirr Engineering &amp; Operations Team
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            SECTION 2: ENGINEERING AND OPERATIONS
            ======================================================== */}
        <div className="space-y-12 pt-6 border-t border-slate-200/80">
          
          {/* Section Header Banner */}
          <div className="rounded-2xl bg-executive-gradient text-white p-6 text-center shadow-lg">
            <h2 className="text-xl sm:text-2xl font-black tracking-[0.25em] uppercase font-sans">
              ENGINEERING AND OPERATIONS
            </h2>
          </div>

          {/* Block 1: R&D Capability In Place */}
          <div data-index={2} className={`about-card-animate grid grid-cols-1 lg:grid-cols-12 gap-10 items-center glass-panel-light rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-700 ease-out ${visibleCards[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="lg:col-span-6 space-y-4">
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full bg-blue-100 text-xs font-mono font-bold text-blue-800 uppercase tracking-wider mb-2">
                  Research &amp; Prototyping
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-sans tracking-tight">
                  R&amp;D Capability In Place
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  Initial R&amp;D and product development capability is ready.
                </p>
              </div>

              <div className="space-y-3.5 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/80 border border-slate-200/80 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-950 font-semibold">Location:</strong> Incheon, Korea
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/80 border border-slate-200/80 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <div className="space-y-1.5">
                    <strong className="text-slate-950 font-semibold">Equipment:</strong>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 pl-1">
                      <li>Full 3D anechoic test chamber</li>
                      <li>Network analyzers</li>
                      <li>Spectrum analyzers</li>
                      <li>Multi-meters and others</li>
                      <li>Work benches for prototyping</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* R&D Lab Chamber Image */}
            <div className="lg:col-span-6 flex justify-center">
              <div
                onClick={() => openLightbox('/images/about/Picture3.jpg', 'Full 3D Anechoic Test Chamber — Incheon, Korea')}
                className="bg-white rounded-3xl p-3 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer group w-full overflow-hidden"
              >
                <div className="rounded-2xl overflow-hidden relative border border-slate-100">
                  <img
                    src="/images/about/Picture3.jpg"
                    alt="Full 3D Anechoic Test Chamber"
                    className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-mono flex items-center gap-1.5 shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Incheon Chamber</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Block 2: Mass Production-Locked And Loaded */}
          <div data-index={3} className={`about-card-animate grid grid-cols-1 lg:grid-cols-12 gap-10 items-center glass-panel-light rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-700 ease-out ${visibleCards[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            
            {/* Left Stacked Images */}
            <div className="lg:col-span-6 space-y-4">
              <div
                onClick={() => openLightbox('/images/about/Picture4.jpg', 'Mass Production Assembly Line — Bac Ninh, Vietnam')}
                className="bg-white rounded-3xl p-3 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer group overflow-hidden"
              >
                <img
                  src="/images/about/Picture4.jpg"
                  alt="Mass Production Assembly Line"
                  className="w-full h-44 sm:h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-out border border-slate-100"
                />
              </div>

              <div
                onClick={() => openLightbox('/images/about/Picture5.png', 'Anechoic Absorber Array & RF Test Fixtures')}
                className="bg-white rounded-3xl p-3 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer group overflow-hidden"
              >
                <img
                  src="/images/about/Picture5.png"
                  alt="RF Test Fixture"
                  className="w-full h-44 sm:h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-out border border-slate-100"
                />
              </div>
            </div>

            {/* Right Bullets Column */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full bg-blue-100 text-xs font-mono font-bold text-blue-800 uppercase tracking-wider mb-2">
                  Manufacturing Supply Chain
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-sans tracking-tight">
                  Mass Production-Locked And Loaded
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/80 border border-slate-200/80 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-950 font-semibold">Contract Mfgrs IN PLACE</strong> in Vietnam and Korea
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/80 border border-slate-200/80 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-950 font-semibold">Location:</strong> Bac Ninh, Vietnam / Incheon, Korea
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/80 border border-slate-200/80 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-950 font-semibold">Entire SCM is ready including:</strong>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 pl-1 mt-1">
                      <li>Plastic molding/tooling</li>
                      <li>Metal stamping</li>
                      <li>PCB</li>
                      <li>Cable/connectors</li>
                      <li>Final assembly and test</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/80 border border-slate-200/80 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-950 font-semibold">Guaranteed low cost</strong> – efficient, well-trained line workers plus effective local supply chains
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/80 border border-slate-200/80 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-950 font-semibold">High Quality</strong> – 100% inspection for all products that will be shipped
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/80 border border-slate-200/80 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-950 font-semibold">RMA system</strong> to react to any potential quality issue in customers ASAP
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================
            SECTION 3: TRUSTED BY
            ======================================================== */}
        <div data-index={4} className={`about-card-animate space-y-6 pt-6 border-t border-slate-200/80 transition-all duration-700 ease-out ${visibleCards[4] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="rounded-2xl bg-executive-gradient text-white p-4 text-center shadow-md">
            <h2 className="text-lg sm:text-xl font-black tracking-[0.3em] uppercase font-sans">
              TRUSTED BY
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustedLogos.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel-light rounded-2xl p-4 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center h-24 group"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="max-h-12 max-w-full object-contain filter group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal with slide-in & fade animation */}
      {lightbox.isOpen && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white/95 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full border border-slate-200 animate-slide-up"
          >
            <div className="flex items-center justify-between p-5 px-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-blue-50/40">
              <h3 className="text-sm sm:text-base font-bold text-slate-950 font-sans">
                {lightbox.title}
              </h3>
              <button
                onClick={closeLightbox}
                className="p-2.5 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-200/60 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 bg-slate-50/40 flex items-center justify-center max-h-[70vh] overflow-auto">
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="max-h-[60vh] max-w-full object-contain rounded-2xl shadow-sm bg-white p-2 border border-slate-200/60"
              />
            </div>

            <div className="p-4 px-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-mono text-[11px]">SkyMirr Operations &amp; Facilities</span>
              <button
                onClick={closeLightbox}
                className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition-all cursor-pointer shadow-sm"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};