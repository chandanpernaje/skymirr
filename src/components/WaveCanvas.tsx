import { useEffect, useRef } from 'react';

interface WaveCanvasProps {
  opacity?: number;
  speed?: number;
  className?: string;
}

export function WaveCanvas({ opacity = 0.25, speed = 1, className = '' }: WaveCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    let step = 0;
    const waves = [
      { frequency: 0.008, amplitude: 35, phase: 0, color: 'rgba(2, 132, 199, 0.25)' },
      { frequency: 0.012, amplitude: 25, phase: 2, color: 'rgba(37, 99, 235, 0.20)' },
      { frequency: 0.005, amplitude: 45, phase: 4, color: 'rgba(14, 116, 144, 0.18)' },
    ];

    const render = () => {
      step += 0.018 * speed;
      ctx.clearRect(0, 0, width, height);

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = wave.color;

        for (let x = 0; x < width; x += 3) {
          const y =
            height / 2 +
            Math.sin(x * wave.frequency + step + wave.phase) * wave.amplitude +
            Math.cos(x * 0.003 - step * 0.5) * (wave.amplitude * 0.4);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();

        // Draw electromagnetic phase nodes
        for (let x = 40; x < width; x += 120) {
          const y =
            height / 2 +
            Math.sin(x * wave.frequency + step + wave.phase) * wave.amplitude +
            Math.cos(x * 0.003 - step * 0.5) * (wave.amplitude * 0.4);

          ctx.beginPath();
          ctx.arc(x, y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(56, 189, 248, 0.7)';
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ opacity }}
    />
  );
}
