import { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Shield } from 'lucide-react';
import { SKYMIRR_DATA } from '../data/skymirrData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

export function QuoteModal({ isOpen, onClose, preselectedProduct }: QuoteModalProps) {
  const [product, setProduct] = useState(preselectedProduct || 'Sky5G™ Wireless Router');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [volume, setVolume] = useState('10-50 units');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (preselectedProduct) {
      setProduct(preselectedProduct);
    }
  }, [preselectedProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !company.trim()) {
      setError('Please fill in your name, corporate email, and organization.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 transition-colors"
          aria-label="Close Dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 mx-auto shadow-sm">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-display">
              Quote Request Dispatched
            </h3>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              Your inquiry for <strong className="text-slate-900">{product}</strong> ({volume}) has been prioritized.
              A SkyMirr RF technical sales executive will contact <span className="text-slate-800 font-mono font-medium">{email}</span> within 24 hours.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2 text-[11px] font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-sm uppercase tracking-widest transition-colors shadow-sm"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="border-b border-slate-200 pb-3">
              <div className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-widest">
                Direct Engineering Procurement
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display mt-0.5">
                Request Hardware Quote &amp; Samples
              </h3>
            </div>

            {error && (
              <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Target Product</label>
              <select
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-sm text-slate-900 focus:outline-none focus:border-slate-800 focus:bg-white focus:ring-1 focus:ring-slate-800"
              >
                {SKYMIRR_DATA.products.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name} — {p.tagline}
                  </option>
                ))}
                <option value="All Hardware Categories">All Hardware Categories / Evaluation Suite</option>
                <option value="Anechoic Chamber Lab Services">Anechoic Chamber Lab Testing (Songdo)</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-800 focus:bg-white focus:ring-1 focus:ring-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="sarah@enterprise.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-800 focus:bg-white focus:ring-1 focus:ring-slate-800"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Organization *</label>
                <input
                  type="text"
                  required
                  placeholder="Carrier / OEM Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-800 focus:bg-white focus:ring-1 focus:ring-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Projected Units</label>
                <select
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-sm text-slate-900 focus:outline-none focus:border-slate-800 focus:bg-white focus:ring-1 focus:ring-slate-800"
                >
                  <option value="1-5 evaluation units">1-5 Evaluation Units</option>
                  <option value="10-50 units">10 - 50 Units</option>
                  <option value="100-500 units">100 - 500 Units</option>
                  <option value="1,000+ units">1,000+ Units (Bulk Enterprise)</option>
                </select>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div className="text-[11px] text-slate-500 flex items-center gap-1 font-mono uppercase tracking-widest">
                <Shield className="w-3.5 h-3.5 text-slate-400" />
                <span>Tier-1 Carrier Pricing</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="px-5 py-2.5 text-[11px] uppercase tracking-widest font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-sm transition-colors flex items-center gap-1.5 shadow-sm active:scale-[0.98] disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Request Formal Quote'}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
