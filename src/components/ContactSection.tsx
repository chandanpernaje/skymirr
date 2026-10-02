import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { SKYMIRR_DATA } from '../data/skymirrData';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setError('Please provide a valid corporate email address.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-[#F8FAFC] border-t border-slate-200 relative overflow-hidden rf-grid">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Corporate Contacts & Facilities */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-bold text-blue-700 tracking-wider uppercase mb-2 font-mono flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Direct Telecommunications Hotline</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-['Poppins'] tracking-tight [text-wrap:balance]">
                CONNECT WITH AN EXPERT
              </h2>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Contact the SkyMirr Team for Sales Support or Technical Guidance.
              </p>
            </div>

            {/* Direct Telephone Hotline Card matching skymirr.com 321-393-1039 */}
            <a
              href="tel:321-393-1039"
              className="group block p-5 rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 text-white shadow-lg shadow-blue-600/20 hover:shadow-xl hover:scale-[1.01] transition-all cursor-pointer border border-blue-500/30"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white border border-white/25">
                    <Phone className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-cyan-200 font-bold tracking-wider block">
                      Direct Executive Hotline
                    </span>
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-white block">
                      321-393-1039
                    </span>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-xs font-semibold bg-white/20 px-3.5 py-2 rounded-xl border border-white/20 group-hover:bg-white group-hover:text-blue-700 transition-colors font-['Poppins']">
                  <span>Call Directly</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>

            {/* Corporate Location Cards */}
            <div className="space-y-3.5 pt-2">
              <div className="bg-white border border-slate-200 rounded-xl p-4.5 shadow-xs flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-blue-700 font-mono uppercase">Global Headquarters (USA)</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5 font-['Poppins']">{SKYMIRR_DATA.company.headquarters}</div>
                  <div className="text-xs text-slate-600 mt-1 leading-snug">
                    Corporate Engineering &amp; Operations Center · Melbourne, Florida
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4.5 shadow-xs flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-blue-700 font-mono uppercase">R&amp;D Anechoic Facility (Asia-Pacific)</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5 font-['Poppins']">{SKYMIRR_DATA.company.rdLab}</div>
                  <div className="text-xs text-slate-600 mt-1 leading-snug">
                    Global Microwave Testing Complex · High-frequency spherical chamber
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4.5 shadow-xs flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-blue-700 font-mono uppercase">Sales &amp; Channel Inquiries</div>
                  <a
                    href={`mailto:${SKYMIRR_DATA.company.salesEmail}`}
                    className="text-sm font-bold text-slate-900 hover:text-blue-600 mt-0.5 block transition-colors font-mono"
                  >
                    {SKYMIRR_DATA.company.salesEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Form matching skymirr.com */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mx-auto shadow-sm">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950 font-['Poppins']">
                  Message Sent Successfully
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-['Poppins']">
                  Thank you, <span className="text-slate-900 font-semibold">{formData.name}</span>. The SkyMirr solutions
                  team will contact you at <span className="text-blue-700 font-mono font-medium">{formData.email}</span> shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-sm shadow-blue-500/20 cursor-pointer font-['Poppins']"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-xl font-bold text-slate-950 font-['Poppins']">
                    CONNECT WITH AN EXPERT
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Contact the SkyMirr Team for Sales Support or Technical Guidance
                  </p>
                </div>

                {error && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-['Poppins']">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-['Poppins']">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Phone *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-['Poppins']">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-['Poppins']">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Message *"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-blue-600/25 flex items-center justify-center gap-2 cursor-pointer font-['Poppins']"
                  >
                    <span>{loading ? 'Submitting...' : 'connect'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
