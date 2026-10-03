import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Play, Pause, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollingMouse } from './ScrollingMouse';
import { SKYMIRR_DATA } from '../data/skymirrData';

interface HeroProps {
  onOpenQuote: () => void;
  onNavigate: (page: string) => void;
}

export function Hero({ onOpenQuote, onNavigate }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [tickerIndex, setTickerIndex] = useState(0);

  const slides = SKYMIRR_DATA.heroSlides;
  const tickerItems = [
    {
      title: 'SkyMirr Sky5G Router Achieves AT&T Network Certification, Expanding Carrier Choice for Reliable Connectivity',
      tag: 'AT&T Certified',
    },
    {
      title: 'SkyMirr Expands Its Antenna Portfolio with New High-Performance 4G/5G and Wi-Fi Solutions',
      tag: 'Antenna Portfolio',
    },
    {
      title: 'Introducing SkyMirr’s Next Generation Antennas – Powered by MulCAT® Technology',
      tag: 'MuLCAT® Launch',
    },
    {
      title: 'Antenna-First Design: Why Real-World 5G Performance Starts at the RF Layer',
      tag: 'Technical Whitepaper',
    }
  ];

  const [page, setPage] = useState(0);

  // Auto-rotate hero slider every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, page, slides.length]);

  // Auto-rotate ticker every 5 seconds
  useEffect(() => {
    const tickerTimer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % tickerItems.length);
    }, 5000);
    return () => clearInterval(tickerTimer);
  }, [tickerItems.length]);

  const paginate = (newDirection: number) => {
    setPage(page + newDirection);
  };

  const nextTicker = () => setTickerIndex((prev) => (prev + 1) % tickerItems.length);
  const prevTicker = () => setTickerIndex((prev) => (prev - 1 + tickerItems.length) % tickerItems.length);

  const imageIndex = ((page % slides.length) + slides.length) % slides.length;

  // Seamless crossfade transition (no black screen)
  const variants = {
    enter: {
      opacity: 0,
      scale: 1.02
    },
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1
    },
    exit: {
      zIndex: 0,
      opacity: 0,
      scale: 1
    }
  };

  return (
    <div className="w-full pt-16 sm:pt-20 bg-slate-950 flex flex-col">
      {/* 1. SEAMLESS CROSSFADING HERO SLIDER */}
      <section
        className="relative w-full overflow-hidden group select-none flex-1 bg-slate-950"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Invisible placeholder for perfect aspect ratio uncropped sizing */}
        <img
          src={slides[0].image}
          className="w-full h-auto invisible opacity-0 pointer-events-none block"
          alt="Layout Placeholder"
        />

        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={page}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: 1.2, ease: "easeOut" }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slides[imageIndex].image}
              alt={slides[imageIndex].title}
              className="w-full h-full object-cover object-center pointer-events-none"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        {/* Scroll Indicator Only (Removed < > ... controls as requested) */}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 z-20 flex justify-end items-end pointer-events-none max-w-7xl mx-auto">
          <div className="pointer-events-auto hidden sm:block">
             <ScrollingMouse targetId="products-overview" />
          </div>
        </div>
      </section>

      {/* 2. LATEST @ SKYMIRR LIVE TICKER */}
      <section className="bg-slate-950 border-t border-slate-800 text-white py-3 px-4 sm:px-6 relative z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 overflow-hidden flex-1">
            <div className="shrink-0 bg-slate-800 border border-slate-700 text-white text-[10px] font-bold font-mono px-3 py-1 rounded-sm uppercase tracking-widest flex items-center gap-1.5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Latest</span>
            </div>

            <div className="truncate text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors">
              <AnimatePresence mode="wait">
                <motion.button
                  key={tickerIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onClick={() => onNavigate('latest')}
                  className="text-left truncate hover:underline cursor-pointer"
                >
                  {tickerItems[tickerIndex].title}
                </motion.button>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center gap-1 shrink-0 text-slate-500">
            <button
              onClick={prevTicker}
              className="p-1 rounded-sm hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[10px] font-mono tracking-widest text-slate-500 px-1">
              0{tickerIndex + 1}/0{tickerItems.length}
            </span>
            <button
              onClick={nextTicker}
              className="p-1 rounded-sm hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
