import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Activity, Play, Maximize2, X, Video, ShieldCheck, Zap, Pause } from 'lucide-react';
import { SKYMIRR_DATA } from '../data/skymirrData';
import ReactPlayer from 'react-player';

interface MulcatDeepDiveProps {
  onNavigate?: (page: string) => void;
}

export function MulcatDeepDive({ onNavigate }: MulcatDeepDiveProps = {}) {
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect when the video container scrolls into the viewport
  const isInView = useInView(containerRef, { margin: "-20% 0px" });

  const videoSrc = '/videos/Discover_SkyMirr.mp4';
  const videoPoster = '/images/discover-skymirr.jpg';

  // Auto-play / pause based on scroll position!
  useEffect(() => {
    if (!videoRef.current) return;
    
    // When the component comes into view, automatically play the video (must be muted for browser policy)
    if (isInView && !isVideoModalOpen) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => setIsVideoPlaying(true)).catch(e => console.log("Autoplay prevented:", e));
      }
    } else {
      // Pause it when it leaves the screen to save resources
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  }, [isInView, isVideoModalOpen]);

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

  return (
    <section id="technology" className="pt-12 sm:pt-16 pb-24 sm:pb-32 bg-white relative overflow-hidden font-sans border-t border-slate-100">
      {/* Subtle Premium White Background Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-50 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Creative Apple-Style Typography */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-bold tracking-[0.2em] uppercase shadow-sm">
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              <span>Discover SkyMirr</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 font-display tracking-tight leading-[1.05]">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">MuLCAT®</span><br/> Advantage.
            </h2>
            
            <div className="relative pl-6 border-l-[3px] border-blue-500 rounded-sm">
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                {SKYMIRR_DATA.mulcatTechnology.lead}{' '}
                <strong className="text-slate-900 font-bold">{SKYMIRR_DATA.mulcatTechnology.mechanism}</strong>
              </p>
            </div>

            {/* Creative Clean Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Verified Performance</h4>
                <p className="text-sm text-slate-500 font-light">Tested in our Songdo 3D Anechoic Facility.</p>
              </div>
              
              <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <Activity className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">10x Usable Bandwidth</h4>
                <p className="text-sm text-slate-500 font-light">Broadband multi-resonance without costly circuitry.</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate?.('technology')}
                className="font-bold text-blue-600 hover:text-blue-800 uppercase tracking-wider text-sm flex items-center gap-2 group transition-colors"
              >
                Read Full Whitepaper
                <span className="w-6 h-px bg-blue-600 group-hover:w-10 transition-all duration-300" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Interactive Video Player */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative rounded-[2rem] bg-slate-900 border border-slate-200 overflow-hidden shadow-2xl group ring-4 ring-white aspect-[4/3] sm:aspect-[16/10]"
          >
            <video 
              src={videoSrc}
              poster={videoPoster}
              controls
              preload="metadata"
              controlsList="nodownload"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Optional Overlay Gradient to make it look premium */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
