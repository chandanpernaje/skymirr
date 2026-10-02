import { useState } from 'react';
import { SKYMIRR_DATA } from '../data/skymirrData';
import { ExternalLink, Play, Pause, ArrowRight, ShieldCheck } from 'lucide-react';

export function ScrollingPartnerMarquee() {
  const [isPaused, setIsPaused] = useState(false);
  // Duplicate list 3 times to guarantee continuous, seamless infinite loop without gaps
  const duplicatedPartners = [
    ...SKYMIRR_DATA.partners,
    ...SKYMIRR_DATA.partners,
    ...SKYMIRR_DATA.partners,
  ];

  return (
    <div className="py-7 sm:py-8 bg-white border-y border-slate-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-3 sm:mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
            Authorized Global Retail &amp; Distributors
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 hidden sm:inline-block">
            {isPaused ? 'Paused' : 'Auto-Scrolling Network'}
          </span>
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1 rounded-md text-slate-400 hover:text-blue-600 hover:bg-slate-100 transition-colors cursor-pointer"
            title={isPaused ? 'Resume scrolling' : 'Pause scrolling'}
            aria-label={isPaused ? 'Resume scrolling' : 'Pause scrolling'}
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Infinite Scrolling Track with High-Fidelity Edge Fades */}
      <div
        className="relative w-full overflow-hidden mask-fade"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`animate-marquee flex items-center gap-4 py-2 ${
            isPaused ? '[animation-play-state:paused]' : ''
          }`}
        >
          {duplicatedPartners.map((partner, idx) => (
            <a
              key={idx}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 w-44 sm:w-48 h-18 sm:h-20 bg-slate-50/90 hover:bg-white border border-slate-200 hover:border-blue-400 rounded-xl px-4 py-2 flex items-center justify-center transition-all duration-200 hover:shadow-md group shadow-2xs"
              title={`${partner.name} - ${partner.category}`}
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="max-h-10 sm:max-h-11 max-w-full object-contain filter group-hover:scale-106 transition-transform duration-300"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
