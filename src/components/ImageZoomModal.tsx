import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2,
  X,
  Move,
  ShieldCheck,
  Sparkles,
  Download
} from 'lucide-react';

interface ImageZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  subtitle?: string;
  specs?: { label: string; value: string }[];
  highlight?: string;
}

export function ImageZoomModal({
  isOpen,
  onClose,
  imageSrc,
  title,
  subtitle,
  specs,
  highlight,
}: ImageZoomModalProps) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Reset scale and position when opening a new image
  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen, imageSrc]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn();
      } else if (e.key === '-' || e.key === '_') {
        handleZoomOut();
      } else if (e.key === '0') {
        handleReset();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, scale]);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = () => {
    setScale((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleDoubleClick = () => {
    if (scale > 1) {
      handleReset();
    } else {
      setScale(2.2);
    }
  };

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setScale((prev) => Math.min(prev + 0.25, 4));
    } else {
      setScale((prev) => {
        const next = Math.max(prev - 0.25, 1);
        if (next === 1) setPosition({ x: 0, y: 0 });
        return next;
      });
    }
  };

  // Mouse Drag to Pan
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/90 backdrop-blur-md">
          {/* Backdrop Click */}
          <div className="fixed inset-0" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-5xl h-[88vh] bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Title & Zoom Controls */}
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between gap-4 shrink-0">
              <div className="space-y-0.5 min-w-0">
                {subtitle && (
                  <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold tracking-wider block truncate">
                    {subtitle}
                  </span>
                )}
                <h3 className="text-base sm:text-lg font-bold text-white font-display truncate">
                  {title}
                </h3>
              </div>

              {/* Action Toolbar */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                {/* Scale badge */}
                <div className="px-2.5 py-1 rounded-lg bg-slate-800 text-cyan-400 font-mono text-xs font-bold border border-slate-700">
                  {Math.round(scale * 100)}%
                </div>

                {/* Zoom Out Button */}
                <button
                  onClick={handleZoomOut}
                  disabled={scale <= 1}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-slate-200 transition-colors cursor-pointer border border-slate-700"
                  title="Zoom Out (-)"
                  aria-label="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>

                {/* Zoom In Button */}
                <button
                  onClick={handleZoomIn}
                  disabled={scale >= 4}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-slate-200 transition-colors cursor-pointer border border-slate-700"
                  title="Zoom In (+)"
                  aria-label="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>

                {/* Reset Button */}
                <button
                  onClick={handleReset}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer border border-slate-700 hidden sm:flex"
                  title="Reset Zoom (0)"
                  aria-label="Reset Zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-rose-600 text-slate-200 hover:text-white transition-colors cursor-pointer border border-slate-700 ml-1"
                  title="Close Inspector (Esc)"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Interactive Zoomable / Pannable Image Canvas */}
            <div
              ref={containerRef}
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onDoubleClick={handleDoubleClick}
              className={`flex-1 relative overflow-hidden flex items-center justify-center p-4 select-none bg-radial from-slate-900 to-slate-950 ${
                scale > 1
                  ? isDragging
                    ? 'cursor-grabbing'
                    : 'cursor-grab'
                  : 'cursor-zoom-in'
              }`}
            >
              {/* High-tech RF grid pattern */}
              <div className="absolute inset-0 rf-grid-dense opacity-25 pointer-events-none" />

              {/* Radial glow background */}
              <div className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

              {/* Hardware Image with smooth transform */}
              <div
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                  transition: isDragging ? 'none' : 'transform 0.15s ease-out',
                }}
                className="max-h-full max-w-full flex items-center justify-center pointer-events-auto"
              >
                <img
                  src={imageSrc}
                  alt={title}
                  draggable={false}
                  className="max-h-[62vh] max-w-[85vw] object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                />
              </div>

              {/* Overlay Guidance Pill */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[11px] font-mono text-slate-300 shadow-lg">
                <Move className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>
                  {scale > 1
                    ? 'Click & drag to pan · Scroll wheel or buttons to zoom'
                    : 'Double-click or scroll wheel to zoom in high definition'}
                </span>
              </div>
            </div>

            {/* Bottom Footer with Engineering Specs & Quick Actions */}
            {specs && specs.length > 0 && (
              <div className="px-5 py-3 bg-slate-950 border-t border-slate-800 shrink-0 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar">
                  {specs.slice(0, 3).map((spec, i) => (
                    <div key={i} className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                      <span className="text-slate-400 uppercase text-[10px]">{spec.label}:</span>
                      <span className="text-white font-bold">{spec.value}</span>
                    </div>
                  ))}
                  {highlight && (
                    <div className="hidden md:flex items-center gap-1 text-cyan-400 bg-cyan-950/50 px-2.5 py-1 rounded-lg border border-cyan-800/60 font-bold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{highlight}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-400 uppercase">SkyMirr Hardware Stage</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
