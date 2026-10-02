import { Award, ShieldCheck, Newspaper, ExternalLink } from 'lucide-react';
import { SKYMIRR_DATA } from '../data/skymirrData';

export function NewsSection() {
  return (
    <section className="py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header matching THE LATEST@SKYMIRR on skymirr.com */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-blue-700 tracking-wider uppercase mb-2 font-mono">
            Blogs &amp; Press Releases
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-['Poppins'] tracking-tight [text-wrap:balance]">
            THE LATEST@SKYMIRR
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            The latest certifications, product releases, technology whitepapers, and carrier approvals from SkyMirr.
          </p>
        </div>

        {/* Certifications Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12">
          {SKYMIRR_DATA.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-blue-400 hover:shadow-xs transition-colors"
            >
              <div>
                <div className="text-xs font-mono text-blue-700 font-bold">{cert.category}</div>
                <div className="text-sm font-bold text-slate-900 mt-1 font-['Poppins']">{cert.name}</div>
              </div>
              <div className="text-[11px] text-slate-500 mt-2 leading-snug">{cert.detail}</div>
            </div>
          ))}
        </div>

        {/* News & Press Releases Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKYMIRR_DATA.news.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-lg transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span>{item.date}</span>
                  <span className="font-mono text-blue-700 text-[10px] uppercase font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-950 font-['Poppins'] leading-snug group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-slate-500 mt-2">{item.publication}</div>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">{item.summary}</p>
              </div>

              <div className="pt-4 border-t border-slate-200 mt-6 flex items-center justify-between text-xs text-blue-700 font-mono font-semibold">
                <span>Verified Release</span>
                <span className="text-slate-500 font-normal">SkyMirr Comms</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
