import { ChevronDown } from 'lucide-react';

interface ScrollingMouseProps {
  targetId?: string;
  label?: string;
  className?: string;
}

export function ScrollingMouse({
  targetId = 'products-overview',
  label = 'Scroll to explore',
  className = '',
}: ScrollingMouseProps) {
  const handleClick = () => {
    // Find target element with fallback to products section
    const el =
      (targetId ? document.getElementById(targetId) : null) ||
      document.getElementById('products-overview') ||
      document.getElementById('products-grid') ||
      document.getElementById('interactive-showcase');

    if (el) {
      const headerOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 focus:outline-none ${className}`}
      aria-label="Scroll down to explore"
    >
      {/* Animated Mouse Chassis with Interactive Glow */}
      <div className="relative w-6 h-10 rounded-full border-2 border-slate-400 group-hover:border-blue-600 bg-white/95 backdrop-blur-xs p-1 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:shadow-blue-500/20 flex justify-center group-hover:scale-105">
        {/* Animated Scrolling Wheel */}
        <div className="w-1.5 h-2.5 bg-blue-600 rounded-full animate-scroll-wheel shadow-xs shadow-blue-500/50" />
      </div>

      {/* Label and Downward Animated Indicator */}
      <div className="flex items-center gap-1 text-[10px] font-mono font-bold tracking-widest uppercase text-slate-500 group-hover:text-blue-600 transition-colors">
        <span>{label}</span>
        <ChevronDown className="w-3.5 h-3.5 text-blue-600 animate-bounce" />
      </div>
    </button>
  );
}
