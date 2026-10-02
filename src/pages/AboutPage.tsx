import { TeamSection } from '../components/TeamSection';
import { WaveCanvas } from '../components/WaveCanvas';
import { SKYMIRR_DATA } from '../data/skymirrData';
import { Building, MapPin, Award, Shield, CheckCircle2, Phone, Mail } from 'lucide-react';

interface AboutPageProps {
  onOpenQuote: (productName?: string) => void;
  onNavigate: (page: string) => void;
}

export function AboutPage({ onOpenQuote, onNavigate }: AboutPageProps) {
  const company = SKYMIRR_DATA.company;

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Header */}
      <section className="relative py-16 bg-gradient-to-b from-[#001738] via-[#05224D] to-[#001738] text-white overflow-hidden">
        <WaveCanvas opacity={0.16} speed={0.8} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase mb-2">
              Corporate Overview &amp; Leadership
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-['Poppins'] tracking-tight text-white leading-tight">
              About SkyMirr Technologies
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Pioneering antenna-first wireless technology to better connect humanity, empower enterprise continuity, and advance medical healing.
            </p>
          </div>
        </div>
      </section>



      {/* Complete Official Team Section with 14 Portraits & Bio Modals */}
      <TeamSection />
    </div>
  );
}
