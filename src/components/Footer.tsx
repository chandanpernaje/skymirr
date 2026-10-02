import { SKYMIRR_DATA } from '../data/skymirrData';
import { Phone, Mail, MapPin, Linkedin, Twitter, Youtube, Instagram, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    scrollToTop();
  };

  return (
    <footer className="bg-sky-50 text-slate-900 border-t border-sky-100">
      {/* Upper Footer: Logo, Quick Links, Office Locations */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info & FIND US ON SOCIAL MEDIA matching skymirr.com */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="inline-block cursor-pointer"
            >
              <img
                src={SKYMIRR_DATA.company.footerLogoUrl}
                alt={SKYMIRR_DATA.company.name}
                className="h-10 w-auto object-contain"
              />
            </button>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              SkyMirr develops and manufactures advanced RF technology-based products that better connect the world, powered by patented MuLCAT® electromagnetic innovation.
            </p>

            {/* FIND US ON SOCIAL MEDIA matching skymirr.com */}
            <div className="pt-2">
              <div className="text-xs font-bold text-sky-900 uppercase tracking-wider font-mono mb-2.5">
                FIND US ON SOCIAL MEDIA
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/skymirr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white hover:bg-pink-600 text-slate-500 hover:text-white transition-colors flex items-center justify-center border border-sky-200 cursor-pointer shadow-sm hover:shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/skymirr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white hover:bg-[#0077B5] text-slate-500 hover:text-white transition-colors flex items-center justify-center border border-sky-200 cursor-pointer shadow-sm hover:shadow-lg"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com/@skymirr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white hover:bg-rose-600 text-slate-500 hover:text-white transition-colors flex items-center justify-center border border-sky-200 cursor-pointer shadow-sm hover:shadow-lg"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com/skymirr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white hover:bg-sky-500 text-slate-500 hover:text-white transition-colors flex items-center justify-center border border-sky-200 cursor-pointer shadow-sm hover:shadow-lg"
                  aria-label="X-twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links: Navigation */}
          <div className="lg:col-span-2 space-y-3 font-sans">
            <div className="text-xs font-bold text-sky-900 uppercase tracking-wider font-mono">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-slate-600 hover:text-sky-700 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="text-slate-600 hover:text-sky-700 transition-colors cursor-pointer"
                >
                  Products Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('technology')}
                  className="text-slate-600 hover:text-sky-700 transition-colors cursor-pointer"
                >
                  MuLCAT® Technology
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('applications')}
                  className="text-slate-600 hover:text-sky-700 transition-colors cursor-pointer"
                >
                  Applications
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('partners')}
                  className="text-slate-600 hover:text-sky-700 transition-colors cursor-pointer"
                >
                  Partners &amp; Distributors
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="text-slate-600 hover:text-sky-700 transition-colors cursor-pointer"
                >
                  About Us &amp; Leadership
                </button>
              </li>
            </ul>
          </div>

          {/* Core Hardware Models */}
          <div className="lg:col-span-2 space-y-3 font-sans">
            <div className="text-xs font-bold text-sky-900 uppercase tracking-wider font-mono">
              Hardware Suite
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="text-slate-600 hover:text-sky-700 transition-colors cursor-pointer"
                >
                  SkyBlade™ Antennas
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="text-slate-600 hover:text-sky-700 transition-colors cursor-pointer"
                >
                  Sky5G™ CPE Router (TCPA-117)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="text-slate-600 hover:text-sky-700 transition-colors cursor-pointer"
                >
                  SkyTrack™ Asset Trackers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('latest')}
                  className="text-slate-600 hover:text-sky-700 transition-colors cursor-pointer"
                >
                  The Latest @ SkyMirr
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-slate-600 hover:text-sky-700 transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Corporate Offices & Contact matching skymirr.com */}
          <div className="lg:col-span-4 space-y-3 font-sans">
            <div className="text-xs font-bold text-sky-900 uppercase tracking-wider font-mono">
              Corporate Headquarters
            </div>
            <p className="text-xs text-slate-600 leading-snug">
              {SKYMIRR_DATA.company.headquarters}<br />
              Asia-Pacific Center: {SKYMIRR_DATA.company.rdLab}
            </p>
            <div className="pt-2 text-xs space-y-1 font-mono text-slate-600">
              <div className="text-sm font-bold text-slate-900">
                Phone: <a href={`tel:${SKYMIRR_DATA.company.phone}`} className="hover:underline text-blue-700">{SKYMIRR_DATA.company.phone}</a>
              </div>
              <div>
                Email: <a href={`mailto:${SKYMIRR_DATA.company.salesEmail}`} className="hover:text-blue-700 font-semibold">{SKYMIRR_DATA.company.salesEmail}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar matching SkyMirr © 2026. All Rights Reserved. */}
      <div className="border-t border-sky-200 bg-sky-100/50 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-600 font-sans">
          <div>
            SkyMirr © {new Date().getFullYear()}. All Rights Reserved. MuLCAT® is a registered trademark of SkyMirr.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-sky-800 transition-colors cursor-pointer font-medium">Privacy Policy</span>
            <span className="hover:text-sky-800 transition-colors cursor-pointer font-medium">Terms of Service</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-600 hover:text-sky-800 transition-colors font-mono cursor-pointer uppercase tracking-widest font-bold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
