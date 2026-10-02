import { useState } from 'react';
import { SKYMIRR_DATA } from '../data/skymirrData';
import { WaveCanvas } from '../components/WaveCanvas';
import { ScrollingPartnerMarquee } from '../components/ScrollingPartnerMarquee';
import { ExternalLink, Handshake, Shield, CheckCircle2, ArrowRight, Building, Mail, Phone, User } from 'lucide-react';

interface PartnersPageProps {
  onOpenQuote: (productName?: string) => void;
}

export function PartnersPage({ onOpenQuote }: PartnersPageProps) {
  const [partnerType, setPartnerType] = useState<'all' | 'Online Partner' | 'Distributor'>('all');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onlinePartners = SKYMIRR_DATA.partners.filter((p) => p.category === 'Online Partner');
  const distributors = SKYMIRR_DATA.partners.filter((p) => p.category === 'Distributor');

  const filteredPartners =
    partnerType === 'all'
      ? SKYMIRR_DATA.partners
      : SKYMIRR_DATA.partners.filter((p) => p.category === partnerType);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Header */}
      <section className="relative py-16 bg-gradient-to-b from-[#001738] via-[#05224D] to-[#001738] text-white overflow-hidden">
        <WaveCanvas opacity={0.16} speed={0.8} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase mb-2">
              Global Distribution Network
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Our Partners &amp; Distributors
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              SkyMirr hardware is distributed and retailed through premier enterprise distributors and authorized online marketplaces worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Infinite Scrolling Ribbon */}
      <div className="border-b border-slate-200">
        <ScrollingPartnerMarquee />
      </div>

      {/* Partner Logos Catalog */}
      <section className="py-10 sm:py-12 max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl font-bold font-display text-slate-950">
              Authorized Sales Channels
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Purchase genuine SkyMirr hardware through our verified retail and distribution partners.
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => setPartnerType('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                partnerType === 'all' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Channels ({SKYMIRR_DATA.partners.length})
            </button>
            <button
              onClick={() => setPartnerType('Online Partner')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                partnerType === 'Online Partner' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Online Partners ({onlinePartners.length})
            </button>
            <button
              onClick={() => setPartnerType('Distributor')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                partnerType === 'Distributor' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Distributors ({distributors.length})
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredPartners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-slate-200 hover:border-blue-400 rounded-2xl p-5 flex flex-col items-center justify-center text-center transition-all hover:shadow-md group shadow-xs relative aspect-[4/3]"
            >
              <div className="w-full h-12 flex items-center justify-center mb-2">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="max-h-10 max-w-[120px] object-contain transition-all duration-300"
                />
              </div>
              <div className="text-xs font-bold text-slate-800 font-display group-hover:text-blue-600 transition-colors">
                {partner.name}
              </div>
              <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                {partner.category}
              </div>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-3 h-3 text-blue-600" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Become a Partner Application Form */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="text-center max-w-xl mx-auto mb-8">
              <div className="text-xs font-bold text-blue-700 tracking-wider uppercase font-mono mb-2">
                Channel Expansion
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-950">
                Become an Authorized SkyMirr Partner
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Join our global distribution ecosystem. Benefit from tiered wholesale pricing, direct field application engineering support, and carrier lead referrals.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-emerald-950 font-display">
                  Partnership Application Received
                </h4>
                <p className="text-xs text-emerald-700 mt-1 max-w-md mx-auto">
                  Thank you for your interest in partnering with SkyMirr. A senior channel manager will contact your organization within 1 business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Telecom Solutions"
                      className="w-full text-xs text-slate-900 bg-slate-50 border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Partner Category *</label>
                    <select
                      className="w-full text-xs text-slate-900 bg-slate-50 border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600"
                    >
                      <option>Value-Added Reseller (VAR)</option>
                      <option>Regional / Global Distributor</option>
                      <option>System Integrator (SI)</option>
                      <option>Telecom Carrier Channel</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      className="w-full text-xs text-slate-900 bg-slate-50 border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Business Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="w-full text-xs text-slate-900 bg-slate-50 border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Geographical Territory &amp; Market Focus</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your current distribution coverage (e.g. North American enterprise broadband, public safety fleets, European IoT)..."
                    className="w-full text-xs text-slate-900 bg-slate-50 border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-blue-600/20 cursor-pointer"
                >
                  Submit Channel Partner Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
