import { ContactSection } from '../components/ContactSection';
import { WaveCanvas } from '../components/WaveCanvas';

export function ContactPage() {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Header */}
      <section className="relative py-16 bg-gradient-to-b from-[#001738] via-[#05224D] to-[#001738] text-white overflow-hidden">
        <WaveCanvas opacity={0.16} speed={0.8} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase mb-2">
              Direct Engineering Consultation
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Connect With An Expert
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Call our Melbourne Florida headquarters directly at 321-393-1039 or submit an RFP for volume procurement, custom antenna design, and carrier evaluation units.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection />
    </div>
  );
}
