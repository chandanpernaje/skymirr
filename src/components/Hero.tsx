import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Play, Pause, ChevronLeft, ChevronRight, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextTicker = () => {
    setTickerIndex((prev) => (prev + 1) % tickerItems.length);
  };

  const prevTicker = () => {
    setTickerIndex((prev) => (prev - 1 + tickerItems.length) % tickerItems.length);
  };

  return (
    <div className="w-full pt-16 sm:pt-20 bg-white">
      {/* 1. FULL-WIDTH WIDESCREEN HERO SLIDER WITH 100% VISIBLE IMAGES */}
      <section
        className="w-full relative overflow-hidden bg-slate-950 group select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Natural Full-Width Scaling - Zero Letterboxing, Zero Cropping */}
        <div className="w-full relative flex items-center justify-center">
          <img
            key={currentSlide}
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-auto block max-w-full object-contain transition-opacity duration-500 ease-in-out"
            loading="eager"
          />

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-sm bg-black/60 hover:bg-slate-900 text-white backdrop-blur-md border border-white/10 transition-all flex items-center justify-center cursor-pointer shadow-lg hover:scale-105 active:scale-95"
            aria-label="Previous Slide"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-sm bg-black/60 hover:bg-slate-900 text-white backdrop-blur-md border border-white/10 transition-all flex items-center justify-center cursor-pointer shadow-lg hover:scale-105 active:scale-95"
            aria-label="Next Slide"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Play / Pause Toggle Button */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 px-3 py-1.5 rounded-sm bg-black/60 hover:bg-slate-900 text-white text-xs font-mono backdrop-blur-md border border-white/10 transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
            title={isPaused ? 'Resume Auto-Slide' : 'Pause Auto-Slide'}
          >
            {isPaused ? (
              <>
                <Play className="w-3.5 h-3.5 text-slate-300" />
                <span className="hidden sm:inline text-[11px] tracking-widest uppercase">Play</span>
              </>
            ) : (
              <>
                <Pause className="w-3.5 h-3.5 text-slate-300" />
                <span className="hidden sm:inline text-[11px] tracking-widest uppercase">Pause</span>
              </>
            )}
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/10">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all rounded-sm cursor-pointer ${
                  currentSlide === idx
                    ? 'w-6 h-1.5 bg-slate-300'
                    : 'w-2 h-1.5 bg-white/30 hover:bg-white'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. LATEST @ SKYMIRR LIVE TICKER (MATCHING SKYMIRR.COM) */}
      <section className="bg-slate-950 border-y border-slate-800 text-white py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 overflow-hidden flex-1">
            {/* Ticker Badge */}
            <div className="shrink-0 bg-slate-800 border border-slate-700 text-white text-[10px] font-bold font-mono px-3 py-1 rounded-sm uppercase tracking-widest flex items-center gap-1.5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Latest</span>
            </div>

            {/* Rotating Headline */}
            <div className="truncate text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors">
              <button
                onClick={() => onNavigate('latest')}
                className="text-left truncate hover:underline cursor-pointer"
              >
                {tickerItems[tickerIndex].title}
              </button>
            </div>
          </div>

          {/* Ticker Controls */}
          <div className="flex items-center gap-1 shrink-0 text-slate-500">
            <button
              onClick={prevTicker}
              className="p-1 rounded-sm hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
              aria-label="Previous announcement"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[10px] font-mono tracking-widest text-slate-500 px-1">
              0{tickerIndex + 1}/0{tickerItems.length}
            </span>
            <button
              onClick={nextTicker}
              className="p-1 rounded-sm hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
              aria-label="Next announcement"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. SIGNAL WITHOUT LIMITS EDITORIAL SECTION (EXACT SKYMIRR.COM COPY & DESIGN) */}
      <section className="py-20 sm:py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-slate-400 uppercase block mb-4">
            Antenna-First 5G &amp; RF Connectivity
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 font-display tracking-tight uppercase leading-none">
            Signal Without Limits
          </h1>
          <p className="text-base sm:text-lg text-slate-500 mt-6 max-w-2xl mx-auto leading-relaxed font-sans">
            We develop and manufacture advanced RF technology-based products that better connect the world, such as cost-effective better-performing broadband wireless for everyone.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('technology')}
              className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-widest uppercase rounded-md transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer font-sans active:scale-95"
            >
              <span>How do we do that?</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-8 py-3.5 bg-slate-50 hover:bg-white text-slate-800 font-semibold text-xs tracking-widest uppercase rounded-md transition-all duration-300 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer font-sans active:scale-95"
            >
              <span>Connect with an Expert</span>
            </button>
          </div>

          {/* Hardware Certification Ribbon */}
          <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[11px] uppercase tracking-wider font-semibold text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
              <span>T-Mobile &amp; AT&amp;T Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
              <span>T-Priority First Responders</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
              <span>CES® 2026 Innovation Honoree</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
              <span>Patented MuLCAT® Technology</span>
            </div>
          </div>

          {/* Animated Mouse Scroll Indicator */}
          <div className="mt-12 flex justify-center">
            <ScrollingMouse targetId="products-overview" />
          </div>
        </div>
      </section>
    </div>
  );
}
