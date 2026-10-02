import React, { useState, useEffect, useRef } from 'react';
import { Linkedin, X, ChevronRight, Sparkles, Award } from 'lucide-react';
import { WaveCanvas } from '../components/WaveCanvas';
import { TeamSection } from '../components/TeamSection';

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  linkedin: string;
  bullets?: string[];
  text?: string;
  fullBio: string;
}

export const TeamPage: React.FC = () => {
  const [selectedBio, setSelectedBio] = useState<TeamMember | null>(null);
  const [visibleCards, setVisibleCards] = useState<Record<number, boolean>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for smooth scroll-triggered slide-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleCards((prev) => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.team-card-animate');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);





  let cardIndex = 0;

  return (
    <div ref={containerRef} className="pt-24 pb-20 bg-white overflow-x-hidden relative">
      
      {/* Ambient Floating Glow Orbs */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-gradient-to-br from-sky-400/10 to-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Page Header Banner */}
      <section className="relative py-16 bg-gradient-to-b from-[#001738] via-[#05224D] to-[#001738] text-white overflow-hidden">
        <WaveCanvas opacity={0.16} speed={0.8} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase mb-2">
              Team &amp; Leadership
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Team & Leadership
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Our visionary leaders guiding SkyMirr's innovative breakthroughs.
            </p>
          </div>
        </div>
      </section>

      {/* Complete Official Team Section with 14 Portraits & Bio Modals */}
      <TeamSection />

      {/* ========================================================
          FULL BIO MODAL WITH SMOOTH FADE & SLIDE ANIMATION
          ======================================================== */}
      {selectedBio && (
        <div
          onClick={() => setSelectedBio(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white/95 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full border border-slate-200/80 animate-slide-up"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-blue-50/40">
              <div className="flex items-center gap-4">
                <img
                  src={selectedBio.photo}
                  alt={selectedBio.name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-md bg-blue-600"
                />
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-950 font-display">
                    {selectedBio.name}
                  </h3>
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wide bg-blue-100/70 px-2.5 py-0.5 rounded-full inline-block mt-0.5">
                    {selectedBio.role}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedBio(null)}
                className="p-2.5 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-200/60 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {selectedBio.fullBio}
              </p>

              {selectedBio.bullets && (
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-500 mb-3 tracking-wider">
                    Key Credentials &amp; Accomplishments
                  </h4>
                  <ul className="space-y-2.5 text-xs text-slate-600">
                    {selectedBio.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                        <span className="leading-relaxed font-medium">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-5 px-6 bg-slate-50/90 border-t border-slate-100 flex items-center justify-between">
              <a
                href={selectedBio.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0077b5] hover:underline"
              >
                <Linkedin className="w-4 h-4 fill-current" />
                <span>View LinkedIn Profile</span>
              </a>

              <button
                onClick={() => setSelectedBio(null)}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all cursor-pointer shadow-sm hover:-translate-y-0.5"
              >
                Close Bio
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};