import { useRef, MouseEvent, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  index?: number;
}

export function TiltCard({ children, className = "", onClick, index = 0 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);
  
  // Spotlight effect following the mouse
  const spotlightX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const spotlightY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  const spotlightBackground = useMotionTemplate`radial-gradient(circle at ${spotlightX} ${spotlightY}, rgba(56, 189, 248, 0.15) 0%, transparent 60%)`;
  
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
      className={`h-full ${className}`}
    >
      <motion.div
        ref={ref}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          rotateX, 
          rotateY, 
          transformStyle: "preserve-3d" 
        }}
        className="relative h-full w-full bg-white border border-slate-200 hover:border-blue-400/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-2xl flex flex-col justify-between group cursor-pointer"
      >
        {/* Animated Spotlight Overlay */}
        <motion.div 
          className="pointer-events-none absolute inset-0 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: spotlightBackground }}
        />
        
        {/* 3D Content Wrapper */}
        <div style={{ transform: "translateZ(30px)" }} className="h-full flex flex-col justify-between relative z-10 bg-white">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
