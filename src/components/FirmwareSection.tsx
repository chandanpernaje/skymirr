import { useState } from 'react';
import { Download, CheckCircle2, Shield, FileText, ArrowRight } from 'lucide-react';
import { SKYMIRR_DATA } from '../data/skymirrData';

export function FirmwareSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    seriesNumber: '',
    existingVersion: '',
  });
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDownloadSuccess(true);
    }, 600);
  };

  return (
    <section id="firmware" className="py-20 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Subtitle & Firmware Info matching skymirr.com */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest block">
              Device Lifecycle &amp; Security Maintenance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-['Poppins'] tracking-tight uppercase">
              DOWNLOAD LATEST FIRMWARE
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Please fill the below information to download the latest firmware vesrion for your Sky5G™ Wireless Router (TCPA-117) and carrier-certified cellular modems.
            </p>

            <div className="pt-2 space-y-3">
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase block font-bold">Latest Release</span>
                  <span className="text-sm font-bold text-slate-900 font-mono">TCPA-117 Build v2.4.1-rc3</span>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  AT&amp;T &amp; T-Mobile Certified
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>SHA-256 Digitally Signed Cryptographic Image</span>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Form matching skymirr.com */}
          <div className="lg:col-span-6">
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              {downloadSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 font-['Poppins']">
                    Firmware Package Ready
                  </h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you, {formData.name || 'Engineer'}. Your official Sky5G™ v2.4.1 firmware image has been prepared with full cryptographic checksums.
                  </p>
                  <button
                    onClick={() => setDownloadSuccess(false)}
                    className="mt-4 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl transition-all shadow-md shadow-blue-600/20 cursor-pointer font-['Poppins']"
                  >
                    Download Another Version
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 font-['Poppins']">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 text-slate-900 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1 font-['Poppins']">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 text-slate-900 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1 font-['Poppins']">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="corporate@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 text-slate-900 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1 font-['Poppins']">
                        Product Series Number *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. TCPA-117-XXXX"
                        value={formData.seriesNumber}
                        onChange={(e) => setFormData({ ...formData, seriesNumber: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 text-slate-900 transition-colors font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1 font-['Poppins']">
                        Existing VersionNumber
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. v2.1.0"
                        value={formData.existingVersion}
                        onChange={(e) => setFormData({ ...formData, existingVersion: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 text-slate-900 transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-blue-600/25 flex items-center justify-center gap-2 cursor-pointer font-['Poppins'] mt-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>{loading ? 'Validating...' : 'download'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
