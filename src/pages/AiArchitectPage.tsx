import { AiRfAdvisorSection } from '../components/AiRfAdvisorSection';
import { WaveCanvas } from '../components/WaveCanvas';
import { Sparkles, Cpu, Radio, ShieldCheck } from 'lucide-react';

interface AiArchitectPageProps {
  onOpenQuote: (productName?: string) => void;
}

export function AiArchitectPage({ onOpenQuote }: AiArchitectPageProps) {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Header */}
      <section className="relative py-16 bg-gradient-to-b from-[#001738] via-[#05224D] to-[#001738] text-white overflow-hidden">
        <WaveCanvas opacity={0.16} speed={0.8} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>Gemini 3.8 Flash Powered RF Synthesis</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              SkyMirr AI RF Deployment Architect
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Synthesize optimal antenna placements, link margins, carrier band configurations (T-Mobile &amp; AT&amp;T), and hardware bills of materials for your enterprise deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Main AI Advisor Workspace */}
      <AiRfAdvisorSection onOpenQuoteWithAiResult={onOpenQuote} />
    </div>
  );
}
