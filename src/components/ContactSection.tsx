import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
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
    }, 800);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/40 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-50/40 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Corporate Contacts & Facilities */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] sm:text-xs font-mono font-bold tracking-[0.15em] uppercase shadow-sm mb-6">
                <Phone className="w-3.5 h-3.5" />
                <span>Global Support Network</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight leading-tight">
                Connect With <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Our Experts.</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed font-light">
                Whether you're exploring enterprise deployments or custom RF solutions, our engineering team is ready to assist you.
              </p>
            </div>

            {/* Direct Telephone Hotline Card */}
            <a
              href="tel:321-393-1039"
              className="group block p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-blue-950 text-white shadow-2xl shadow-blue-900/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-slate-800 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[30px] rounded-full group-hover:bg-blue-400/30 transition-colors" />
              
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-mono uppercase text-blue-300 font-bold tracking-[0.2em] block mb-1">
                      Executive Hotline
                    </span>
                    <span className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight group-hover:text-cyan-300 transition-colors">
                      321-393-1039
                    </span>
                  </div>
                </div>
              </div>
            </a>

            {/* Corporate Location Cards */}
            <div className="space-y-4">
              <div className="bg-white hover:bg-slate-50 border border-slate-100 hover:border-blue-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-blue-50/50 border border-blue-100/50 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs font-bold text-blue-600 font-mono uppercase tracking-widest mb-1">USA Headquarters</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 font-display">{SKYMIRR_DATA.company.headquarters}</div>
                  <div className="text-xs sm:text-sm text-slate-500 mt-1 leading-snug font-light">
                    Corporate Engineering &amp; Operations Center <br />Melbourne, Florida
                  </div>
                </div>
              </div>

              <div className="bg-white hover:bg-slate-50 border border-slate-100 hover:border-cyan-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-cyan-50/50 border border-cyan-100/50 flex items-center justify-center text-cyan-600 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs font-bold text-cyan-600 font-mono uppercase tracking-widest mb-1">Asia-Pacific R&amp;D</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 font-display">{SKYMIRR_DATA.company.rdLab}</div>
                  <div className="text-xs sm:text-sm text-slate-500 mt-1 leading-snug font-light">
                    Global Microwave Testing Complex <br />High-frequency spherical chamber
                  </div>
                </div>
              </div>

              <div className="bg-white hover:bg-slate-50 border border-slate-100 hover:border-indigo-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-indigo-50/50 border border-indigo-100/50 flex items-center justify-center text-indigo-600 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs font-bold text-indigo-600 font-mono uppercase tracking-widest mb-1">Digital Inquiries</div>
                  <a
                    href={`mailto:${SKYMIRR_DATA.company.salesEmail}`}
                    className="text-sm sm:text-base font-bold text-slate-900 hover:text-indigo-600 block transition-colors font-mono"
                  >
                    {SKYMIRR_DATA.company.salesEmail}
                  </a>
                  <div className="text-xs sm:text-sm text-slate-500 mt-1 leading-snug font-light">
                    Direct access to sales & channel partnerships
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 relative"
          >
            {/* Soft decorative shadow behind the form */}
            <div className="absolute inset-0 bg-blue-600/5 translate-y-4 translate-x-4 rounded-[2.5rem] blur-xl" />
            
            <div className="relative bg-white border border-slate-100 rounded-[2.5rem] p-6 sm:p-10 shadow-2xl shadow-slate-200/50 overflow-hidden">
              {/* Form header accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500" />
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mx-auto shadow-inner relative">
                    <div className="absolute inset-0 rounded-full border border-blue-200 animate-[ping_2s_ease-out_infinite]" />
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-slate-900 font-display tracking-tight mb-2">
                      Inquiry Received
                    </h3>
                    <p className="text-base text-slate-500 max-w-sm mx-auto leading-relaxed font-light">
                      Thank you, <span className="text-slate-900 font-bold">{formData.name}</span>. Our solutions team will contact you at <span className="text-blue-600 font-mono">{formData.email}</span> within one business day.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', message: '' });
                    }}
                    className="px-6 py-3 text-sm font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 rounded-xl transition-colors font-display"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 font-display tracking-tight">
                      Submit an RFP or Inquiry
                    </h3>
                    <p className="text-sm text-slate-500 mt-1 font-light">
                      Complete the form below for immediate technical support or volume procurement.
                    </p>
                  </div>

                  {error && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-rose-50 border border-rose-100 text-sm text-rose-700 font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                      {error}
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 font-display uppercase tracking-wider">
                        Full Name <span className="text-blue-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-slate-50/50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all font-medium"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 font-display uppercase tracking-wider">
                        Phone Number <span className="text-blue-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-slate-50/50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 font-display uppercase tracking-wider">
                      Corporate Email <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-slate-50/50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all font-medium"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 font-display uppercase tracking-wider">
                      Project Details <span className="text-blue-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell us about your technical requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-slate-50/50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all resize-none font-medium"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm uppercase tracking-widest rounded-xl transition-all shadow-lg hover:shadow-blue-600/30 flex items-center justify-center sm:justify-start gap-3 cursor-pointer group disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span>{loading ? 'Processing...' : 'Submit Inquiry'}</span>
                      {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
