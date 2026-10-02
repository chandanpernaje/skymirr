import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  ShieldCheck,
  Zap,
  Waves,
  Activity,
  RefreshCw,
  ArrowRight,
  Eye,
  Sparkles,
  Play,
  Pause,
  Maximize2,
  X,
  Volume2,
  VolumeX,
  Video
} from 'lucide-react';
import { SKYMIRR_DATA } from '../data/skymirrData';

interface MulcatDeepDiveProps {
  onNavigate?: (page: string) => void;
}

export function MulcatDeepDive({ onNavigate }: MulcatDeepDiveProps = {}) {
  const [mode, setMode] = useState<'conventional' | 'mulcat'>('mulcat');
  const [activeLayer, setActiveLayer] = useState<number>(1);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  const videoSrc = '/videos/Discover_SkyMirr.mp4';
  const videoPoster = '/images/disocver-skymirr.jpg';

  const handlePlayToggle = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  const handleOpenModal = () => {
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
    setIsVideoModalOpen(true);
  };

  const handleCloseModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setIsVideoModalOpen(false);
  };

  const layers = [
    {
      num: 1,
      title: 'Layer 1: High-Q Dielectric Substrate',
      function: 'Low-loss micro-engineered dielectric that holds stable electromagnetic charge distribution with zero thermal drift.',
    },
    {
      num: 2,
      title: 'Layer 2: Multi-Layer Coupling Resonators',
      function: 'The core MuLCAT® innovation: precisely spaced conductive geometries that convert parasitic field overlap into constructive radiation.',
    },
    {
      num: 3,
      title: 'Layer 3: Decoupled Ground & Horizon Director',
      function: 'Directs peak radiated energy toward terrestrial cell towers along the azimuth rather than wasting energy vertically into space.',
    },
  ];

  return (
    <section id="technology" className="scroll-mt-20 py-20 sm:py-24 bg-[#F8FAFC] relative overflow-hidden rf-grid border-t border-slate-200">
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-500/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header matching DISCOVER SKYMIRR on skymirr.com with authentic lab photo & playable video */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-slate-600" />
              <span>DISCOVER SKYMIRR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display tracking-tight uppercase leading-tight [text-wrap:balance]">
              TAKE A CLOSER LOOK....
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed [text-wrap:balance] font-sans">
              {SKYMIRR_DATA.mulcatTechnology.lead}{' '}
              <span className="text-slate-800 font-semibold">{SKYMIRR_DATA.mulcatTechnology.mechanism}</span>
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono">
              <button
                onClick={handleOpenModal}
                className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-sm shadow-sm flex items-center gap-2 cursor-pointer transition-all uppercase tracking-wider active:scale-98"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Watch Lab Demonstration Video</span>
              </button>
              <span className="text-slate-500 font-semibold">
                Songdo 3D Anechoic Facility
              </span>
            </div>
          </motion.div>

          {/* 100% Working Interactive Video Player for SkyMirr 3D Anechoic Microwave R&D Laboratory */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="aspect-[16/10] rounded-3xl overflow-hidden border-2 border-slate-300 hover:border-blue-500 shadow-xl bg-slate-950 relative group transition-all duration-300">
              {/* Native HTML5 Video Player */}
              <video
                ref={videoRef}
                src={videoSrc}
                poster={videoPoster}
                controls
                playsInline
                preload="metadata"
                controlsList="nodownload"
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
                className="w-full h-full object-cover relative z-10"
              />

              {/* Overlay Play Button (Shown when not actively playing via native controls) */}
              {!isVideoPlaying && (
                <div
                  onClick={handlePlayToggle}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-950/40 hover:bg-slate-950/30 transition-all cursor-pointer backdrop-blur-[2px]"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-sm bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center shadow-lg transition-all transform hover:scale-105 active:scale-95 group-hover:ring-2 group-hover:ring-slate-400/50">
                    <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-white ml-1" />
                  </div>
                  <span className="mt-3 px-3 py-1 rounded-sm bg-black/70 backdrop-blur-md text-white font-mono text-xs font-bold border border-white/20 uppercase tracking-widest shadow-sm">
                    Click to Play R&amp;D Video
                  </span>
                </div>
              )}

              {/* Floating Facility Badges */}
              <div className="absolute top-3 left-3 z-30 pointer-events-none">
                <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-200 bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-sm border border-slate-700/50 uppercase tracking-wider block shadow-sm">
                  SkyMirr 3D Anechoic Microwave R&amp;D Laboratory
                </span>
              </div>

              <div className="absolute top-3 right-3 z-30">
                <button
                  onClick={handleOpenModal}
                  className="p-2 rounded-sm bg-slate-950/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-all cursor-pointer shadow-md flex items-center gap-1.5 text-xs font-mono"
                  title="Expand Theater Mode"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline text-[10px] uppercase tracking-wider">Expand</span>
                </button>
              </div>

              <div className="absolute bottom-2 left-3 right-3 z-30 pointer-events-none flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-300 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                  Songdo Bio-IT Complex · Incheon
                </span>
                <span className="text-[10px] font-mono text-cyan-400 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                  MuLCAT® Near-Field Verified
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interactive Physics Simulator Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left: Physics Schematic Display */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 shadow-md relative overflow-hidden"
          >
            {/* Mode Switcher */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 mb-6">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
                Electromagnetic Field Simulation
              </span>
              <div className="flex items-center gap-1 p-1 bg-slate-50 rounded-sm border border-slate-200 self-start sm:self-auto">
                <button
                  onClick={() => setMode('conventional')}
                  className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer ${
                    mode === 'conventional'
                      ? 'bg-slate-300 text-slate-800 shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Conventional Antennas
                </button>
                <button
                  onClick={() => setMode('mulcat')}
                  className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer ${
                    mode === 'mulcat'
                      ? 'bg-slate-800 text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  SkyMirr MuLCAT®
                </button>
              </div>
            </div>

            {/* Interactive Schematic Diagram - Fully responsive on all mobile viewports */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-slate-950 rounded-2xl border border-slate-900 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
              <div className="absolute inset-0 rf-grid-dense opacity-30" />

              {mode === 'conventional' ? (
                /* Destructive Coupling Graphic */
                <div className="relative z-10 w-full flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center gap-4 sm:gap-14">
                    {/* Element A */}
                    <div className="flex flex-col items-center">
                      <div className="w-3 sm:w-4 h-24 sm:h-32 bg-slate-700 rounded-sm border border-slate-600 relative">
                        <div className="absolute -inset-1 border border-dashed border-rose-500/40 rounded animate-pulse" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 mt-2">Radiator A</span>
                    </div>

                    {/* Interference Zone */}
                    <div className="flex flex-col items-center text-center max-w-[120px] sm:max-w-[150px]">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-rose-500/60 bg-rose-500/10 flex items-center justify-center animate-ping pointer-events-none" />
                      <div className="text-[9px] sm:text-[10px] font-mono text-rose-400 font-bold mt-2">
                        DESTRUCTIVE COUPLING
                      </div>
                      <div className="text-[8px] sm:text-[9px] text-slate-400 mt-1 leading-tight hidden xs:block">
                        Out-of-phase mutual capacitance creates return loss
                      </div>
                    </div>

                    {/* Element B */}
                    <div className="flex flex-col items-center">
                      <div className="w-3 sm:w-4 h-24 sm:h-32 bg-slate-700 rounded-sm border border-slate-600 relative">
                        <div className="absolute -inset-1 border border-dashed border-rose-500/40 rounded animate-pulse" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 mt-2">Radiator B</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* MuLCAT Constructive Wave Reinforcement Graphic */
                <div className="relative z-10 w-full flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center gap-4 sm:gap-12">
                    {/* Element A */}
                    <div className="flex flex-col items-center">
                      <div className="w-3 sm:w-4 h-24 sm:h-32 bg-gradient-to-t from-cyan-900 to-cyan-400 rounded-sm border border-cyan-400/80 shadow-md shadow-cyan-500/30" />
                      <span className="text-[9px] sm:text-[10px] font-mono text-cyan-400 mt-2">Layer 1</span>
                    </div>

                    {/* Controlled Coupling Resonator */}
                    <div className="flex flex-col items-center text-center max-w-[130px] sm:max-w-[170px]">
                      <div className="relative w-14 h-14 sm:w-18 sm:h-18 rounded-full border border-cyan-400/80 bg-cyan-500/20 flex items-center justify-center shadow-lg shadow-cyan-400/20">
                        <Waves className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-300 animate-pulse" />
                        <div className="absolute inset-0 rounded-full border border-cyan-300/40 animate-ping pointer-events-none" />
                      </div>
                      <div className="text-[9px] sm:text-[10px] font-mono text-cyan-300 font-bold mt-2">
                        CONSTRUCTIVE COUPLING
                      </div>
                      <div className="text-[8px] sm:text-[9px] text-cyan-100/70 mt-1 leading-tight hidden xs:block">
                        Positive phase alignment multiplies gain (+65%)
                      </div>
                    </div>

                    {/* Element B */}
                    <div className="flex flex-col items-center">
                      <div className="w-3 sm:w-4 h-24 sm:h-32 bg-gradient-to-t from-sky-900 to-sky-400 rounded-sm border border-sky-400/80 shadow-md shadow-sky-500/30" />
                      <span className="text-[9px] sm:text-[10px] font-mono text-sky-400 mt-2">Layer 2</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom State Bar: Responsive flex wrapping */}
              <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between gap-2 text-[9px] sm:text-[10px] font-mono">
                <span className="text-slate-400 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800 truncate">
                  {mode === 'conventional' ? 'VSWR: 3.5:1 (DETUNED)' : 'VSWR: 1.4:1 (MATCHED)'}
                </span>
                <span className="text-cyan-400 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800 truncate">
                  {mode === 'conventional' ? 'EFFICIENCY: 38%' : 'EFFICIENCY: 94%'}
                </span>
              </div>
            </div>

            {/* Explanation Kicker */}
            <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span>Status: <strong className="text-slate-900">{mode === 'conventional' ? 'Phase Conflict' : 'Phase Synchronized'}</strong></span>
              <span className="font-mono text-blue-700 font-bold">Patent-Pending Multi-Layer Topology</span>
            </div>
          </motion.div>

          {/* Right: Interactive Layer Inspector */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Interactive Multi-Layer Decomposition</span>
            </div>

            <div className="space-y-3">
              {layers.map((layer) => {
                const isSelected = activeLayer === layer.num;
                return (
                  <button
                    key={layer.num}
                    onClick={() => setActiveLayer(layer.num)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all border cursor-pointer ${
                      isSelected
                        ? 'bg-blue-50/80 border-blue-600 shadow-sm ring-1 ring-blue-600/30'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-bold text-slate-900 flex items-center gap-2.5 font-['Poppins']">
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                            isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {layer.num}
                        </span>
                        <span>{layer.title}</span>
                      </div>
                      {isSelected && <Zap className="w-4 h-4 text-blue-600 shrink-0" />}
                    </div>
                    <div className="text-xs text-slate-600 mt-2 pl-8 leading-relaxed">
                      {layer.function}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* 5 Core Advantages Grid matching skymirr.com */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-1">
              Verified Physical Performance
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-['Poppins'] uppercase">
              The 5 MuLCAT® Engineering Advantages
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SKYMIRR_DATA.mulcatTechnology.advantages.map((adv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white border border-slate-200 hover:border-blue-400 rounded-2xl p-5 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 font-mono font-bold text-xs flex items-center justify-center mb-3">
                    0{idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-['Poppins'] leading-snug">
                    {adv.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Video Player Modal for SkyMirr 3D Anechoic Microwave R&D Laboratory */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/30 border border-blue-500/50 flex items-center justify-center text-cyan-400">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold tracking-wider block">
                      SkyMirr Laboratory Showcase · 3D Anechoic Chamber
                    </span>
                    <h3 className="text-base sm:text-xl font-bold text-white font-['Poppins']">
                      Songdo Bio-IT Complex Microwave R&amp;D Center
                    </h3>
                  </div>
                </div>

                <button
                  onClick={handleCloseModal}
                  className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors cursor-pointer"
                  aria-label="Close video player"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* High-Definition Video Player Stage */}
              <div className="aspect-video bg-black relative flex items-center justify-center">
                <video
                  ref={modalVideoRef}
                  src={videoSrc}
                  poster={videoPoster}
                  autoPlay
                  controls
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Modal Footer with Engineering Telemetry */}
              <div className="p-4 sm:p-6 bg-slate-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono">
                <div className="space-y-1">
                  <span className="text-slate-400 block">
                    Proprietary Multi-Layer Coupling (MuLCAT®) RF Radiation Verification
                  </span>
                  <span className="text-cyan-300 font-bold block">
                    Full-Spectrum Electromagnetic Wave Conformal Testing · Incheon, South Korea
                  </span>
                </div>

                <button
                  onClick={handleCloseModal}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-md shadow-blue-600/30 cursor-pointer"
                >
                  Close Theater View
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
