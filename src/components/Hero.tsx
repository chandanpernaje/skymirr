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
    },
  ];

  // Auto-rotate hero slider every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  // Auto-rotate ticker every 5 seconds
  useEffect(() => {
    const tickerTimer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % tickerItems.length);
    }, 5000);
    return () => clearInterval(tickerTimer);
  }, [tickerItems.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextTicker = () => setTickerIndex((prev) => (prev + 1) % tickerItems.length);
  const prevTicker = () => setTickerIndex((prev) => (prev - 1 + tickerItems.length) % tickerItems.length);

  return (
    <div className="w-full pt-16 sm:pt-20 bg-slate-950 flex flex-col">
      {/* 1. IMMERSIVE ANIMATED HERO SLIDER */}
      <section
        className="relative w-full h-[75vh] min-h-[600px] overflow-hidden group select-none flex-1"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            </div>

            {/* Slide Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 w-full mt-10">
                <div className="max-w-2xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/40 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-bold tracking-wider uppercase mb-6 backdrop-blur-md"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{slides[currentSlide].badge}</span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-4xl sm:text-5xl lg:text-7xl font-black text-white font-display tracking-tight uppercase leading-[1.1] mb-6 drop-shadow-xl"
                  >
                    {slides[currentSlide].title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-xl mb-10 drop-shadow-md"
                  >
                    {slides[currentSlide].description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                  >
                    <button
                      onClick={() => onNavigate(slides[currentSlide].ctaLink.replace('#', ''))}
                      className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-widest uppercase rounded-lg transition-all duration-300 shadow-lg shadow-blue-900/50 hover:shadow-blue-600/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer font-sans"
                    >
                      <span>{slides[currentSlide].ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={onOpenQuote}
                      className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs tracking-widest uppercase rounded-lg transition-all duration-300 border border-white/20 backdrop-blur-sm hover:border-white/40 flex items-center justify-center gap-2 cursor-pointer font-sans"
                    >
                      <span>Connect with an Expert</span>
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex justify-between items-end pointer-events-none max-w-7xl mx-auto">
          {/* Scroll Indicator */}
          <div className="pointer-events-auto hidden sm:block">
             <ScrollingMouse targetId="products-overview" />
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-4 pointer-events-auto bg-black/40 backdrop-blur-md p-2 rounded-xl border border-white/10">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-lg hover:bg-white/10 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2 px-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    currentSlide === idx ? 'w-8 h-2 bg-blue-500' : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-lg hover:bg-white/10 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="w-px h-6 bg-white/20 mx-2" />

            <button
              onClick={() => setIsPaused(!isPaused)}
              className="w-10 h-10 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>
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
      
      {/* 3. CERTIFICATIONS RIBBON (Moved from old editorial section) */}
      <section id="products-overview" className="bg-white border-b border-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[11px] sm:text-xs uppercase tracking-widest font-semibold text-slate-500 font-mono">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>T-Mobile &amp; AT&amp;T Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>T-Priority First Responders</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>CES® 2026 Innovation Honoree</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Patented MuLCAT® Technology</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
