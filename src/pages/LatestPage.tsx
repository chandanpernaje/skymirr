import { SKYMIRR_DATA } from '../data/skymirrData';
import { WaveCanvas } from '../components/WaveCanvas';
import { FirmwareSection } from '../components/FirmwareSection';
import { Award, ShieldCheck, Newspaper, ArrowRight, ExternalLink, Calendar, Download } from 'lucide-react';

interface LatestPageProps {
  onOpenQuote: (productName?: string) => void;
  onNavigate: (page: string) => void;
}

export function LatestPage({ onOpenQuote, onNavigate }: LatestPageProps) {
  const news = SKYMIRR_DATA.news;

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Header */}
      <section className="relative py-16 bg-gradient-to-b from-[#001738] via-[#05224D] to-[#001738] text-white overflow-hidden">
        <WaveCanvas opacity={0.16} speed={0.8} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase mb-2">
              Corporate Press &amp; Releases
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              The Latest @ SkyMirr
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Official carrier certifications, award recognitions, firmware release updates, and telecommunications industry announcements.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Headline Cards */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-xs font-bold text-blue-700 tracking-wider uppercase font-mono mb-2">
          Carrier Milestones &amp; Honors
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-950 mb-10">
          Recent Announcements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 hover:border-blue-400 rounded-2xl p-6 transition-all hover:shadow-xl flex flex-col justify-between group shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs font-bold text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200/60">
                    {item.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold font-display text-slate-950 group-hover:text-blue-600 transition-colors leading-snug">
                  {item.title}
                </h3>

                <div className="text-[11px] font-semibold text-blue-700 font-mono mt-1">
                  Source: {item.publication}
                </div>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onOpenQuote('Press Inquiry & Technical Details')}
                  className="text-xs font-semibold text-blue-700 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>Request Full Press Packet</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Firmware Center */}
      <FirmwareSection />
    </div>
  );
}
