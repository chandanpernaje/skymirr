import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, ArrowUpRight, Sparkles, Search } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onOpenQuote: () => void;
  onOpenSearch: () => void;
}

export function Navbar({ activePage, onNavigate, onOpenQuote, onOpenSearch }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    setAboutDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top scroll progress indicator bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-slate-100">
        <div
          className="h-full bg-slate-900 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 flex flex-col ${
          scrolled
            ? 'shadow-md border-b border-slate-200'
            : ''
        }`}
      >
        {/* Top Tier: Logo + Search */}
        <div className="bg-sky-50 py-3 sm:py-4 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 group shrink-0 cursor-pointer text-left"
            >
              <img
                src="/images/skymirr-logo-footer.png"
                alt="SkyMirr"
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain transition-all duration-500 group-hover:opacity-80"
              />
            </button>

            {/* Desktop Instant Search Trigger (looks like input field) */}
            <div className="hidden xl:flex items-center">
              <button
                onClick={onOpenSearch}
                className="flex items-center justify-between w-64 md:w-80 h-10 px-4 rounded bg-white text-slate-500 border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors cursor-text group"
                aria-label="Search"
              >
                <span className="text-sm font-sans">Search here...</span>
                <Search className="w-4 h-4 text-slate-500 group-hover:text-slate-800 transition-colors" />
              </button>
            </div>

            {/* Mobile Hamburger Button + Mobile Search */}
            <div className="flex xl:hidden items-center gap-3">
              <button
                onClick={onOpenSearch}
                className="p-2 rounded-lg text-slate-800 hover:bg-slate-200 transition-colors"
                aria-label="Search SkyMirr"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-800 hover:bg-slate-200 transition-colors border border-slate-300"
                aria-label="Toggle Mobile Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Light Blue (Navigation Links) */}
        <div className="hidden xl:block bg-sky-50 border-b border-sky-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-8 lg:gap-10 text-[12px] lg:text-[13px] tracking-widest font-bold text-slate-600 uppercase h-14">
              <button
                onClick={() => handleNavClick('home')}
                className={`transition-colors h-full flex items-center cursor-pointer pt-[2px] ${
                  activePage === 'home' ? 'text-blue-700 border-b-[3px] border-blue-700' : 'hover:text-blue-700 border-b-[3px] border-transparent'
                }`}
              >
                Home
              </button>

              {/* Products Dropdown */}
              <div
                className="relative h-full flex items-center"
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                <button
                  onClick={() => handleNavClick('products')}
                  className={`flex items-center h-full gap-1 transition-colors cursor-pointer pt-[2px] ${
                    activePage === 'products' ? 'text-blue-700 border-b-[3px] border-blue-700' : 'hover:text-blue-700 border-b-[3px] border-transparent'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-700" />
                </button>

                {productsDropdownOpen && (
                  <div className="absolute top-full left-0 w-52 bg-white shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <button
                      onClick={() => handleNavClick('antennas')}
                      className="w-full text-left block px-4 py-2 text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-50 transition-colors tracking-wide"
                    >
                      Antennas
                    </button>
                    <button
                      onClick={() => handleNavClick('routers')}
                      className="w-full text-left block px-4 py-2 text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-50 transition-colors tracking-wide"
                    >
                      Routers (Sky5G™)
                    </button>
                    <button
                      onClick={() => handleNavClick('trackers')}
                      className="w-full text-left block px-4 py-2 text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-50 transition-colors tracking-wide"
                    >
                      Asset Trackers
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick('technology')}
                className={`transition-colors h-full flex items-center cursor-pointer pt-[2px] ${
                  activePage === 'technology' ? 'text-blue-700 border-b-[3px] border-blue-700' : 'hover:text-blue-700 border-b-[3px] border-transparent'
                }`}
              >
                Technology
              </button>

              <button
                onClick={() => handleNavClick('design-services')}
                className={`transition-colors h-full flex items-center cursor-pointer pt-[2px] ${
                  activePage === 'design-services' ? 'text-blue-700 border-b-[3px] border-blue-700' : 'hover:text-blue-700 border-b-[3px] border-transparent'
                }`}
              >
                Services
              </button>

              <button
                onClick={() => handleNavClick('latest')}
                className={`transition-colors h-full flex items-center cursor-pointer pt-[2px] ${
                  (activePage === 'latest' || activePage === 'the-latest' || activePage === 'press-releases' || activePage === 'blogs') ? 'text-blue-700 border-b-[3px] border-blue-700' : 'hover:text-blue-700 border-b-[3px] border-transparent'
                }`}
              >
                The Latest@SkyMirr
              </button>

              {/* About Us Dropdown */}
              <div
                className="relative h-full flex items-center"
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
              >
                <button
                  onClick={() => handleNavClick('about')}
                  className={`flex items-center h-full gap-1 transition-colors cursor-pointer pt-[2px] ${
                    (activePage === 'about' || activePage === 'team') ? 'text-blue-700 border-b-[3px] border-blue-700' : 'hover:text-blue-700 border-b-[3px] border-transparent'
                  }`}
                >
                  <span>About Us</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-700" />
                </button>

                {aboutDropdownOpen && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <button
                      onClick={() => handleNavClick('team')}
                      className="w-full text-left block px-4 py-2 text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-50 transition-colors tracking-wide"
                    >
                      Team &amp; Leadership
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick('contact')}
                className={`transition-colors h-full flex items-center cursor-pointer pt-[2px] ${
                  activePage === 'contact' ? 'text-blue-700 border-b-[3px] border-blue-700' : 'hover:text-blue-700 border-b-[3px] border-transparent'
                }`}
              >
                Contact Us
              </button>
            </nav>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 w-full border-t border-slate-200 bg-white shadow-2xl px-6 py-6 animate-in fade-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
            {/* Mobile Search Input Trigger */}
            <div className="mb-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSearch();
                }}
                className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200 text-slate-500 text-xs font-display cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Search className="w-4 h-4 text-blue-600" />
                  <span>Search products, specs, firmware...</span>
                </div>
                <span className="text-[10px] font-mono font-bold bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-600">
                  Search
                </span>
              </button>
            </div>

            <nav className="flex flex-col text-sm font-semibold text-slate-800 divide-y divide-slate-100 font-display">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-left py-3 transition-colors ${
                  activePage === 'home' ? 'text-blue-700 font-bold' : 'hover:text-blue-600'
                }`}
              >
                Home
              </button>

              {/* Mobile Products Accordion */}
              <div className="py-2">
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="w-full flex items-center justify-between py-2 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <span className={activePage === 'products' ? 'text-blue-700 font-bold' : ''}>
                    Products
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      mobileProductsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {mobileProductsOpen && (
                  <div className="pl-4 py-2 space-y-2 text-xs font-medium text-slate-600 bg-slate-50 rounded-lg my-1">
                    <button
                      onClick={() => handleNavClick('antennas')}
                      className="block w-full text-left py-1 hover:text-blue-600 cursor-pointer"
                    >
                      Antennas (Ultra-Wideband)
                    </button>
                    <button
                      onClick={() => handleNavClick('routers')}
                      className="block w-full text-left py-1 hover:text-blue-600 cursor-pointer"
                    >
                      Routers (Sky5G™ CPE)
                    </button>
                    <button
                      onClick={() => handleNavClick('trackers')}
                      className="block w-full text-left py-1 hover:text-blue-600 cursor-pointer"
                    >
                      Asset Trackers (SkyTrack™)
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick('technology')}
                className={`text-left py-3 transition-colors ${
                  activePage === 'technology' ? 'text-blue-700 font-bold' : 'hover:text-blue-600'
                }`}
              >
                Technology (MuLCAT®)
              </button>



              <button
                onClick={() => handleNavClick('design-services')}
                className={`text-left py-3 transition-colors ${
                  activePage === 'design-services' ? 'text-blue-700 font-bold' : 'hover:text-blue-600'
                }`}
              >
                Design Services
              </button>

              <button
                onClick={() => handleNavClick('latest')}
                className={`text-left py-3 transition-colors ${
                  (activePage === 'latest' || activePage === 'the-latest' || activePage === 'press-releases' || activePage === 'blogs') ? 'text-blue-700 font-bold' : 'hover:text-blue-600'
                }`}
              >
                The Latest@SkyMirr
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className={`text-left py-3 transition-colors ${
                  activePage === 'about' ? 'text-blue-700 font-bold' : 'hover:text-blue-600'
                }`}
              >
                About Us
              </button>

              <button
                onClick={() => handleNavClick('team')}
                className={`text-left py-3 transition-colors ${
                  activePage === 'team' ? 'text-blue-700 font-bold' : 'hover:text-blue-600'
                }`}
              >
                Team &amp; Leadership
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className={`text-left py-3 transition-colors ${
                  activePage === 'contact' ? 'text-blue-700 font-bold' : 'hover:text-blue-600'
                }`}
              >
                Contact Us
              </button>
            </nav>

            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="tel:321-393-1039"
                className="w-full py-3 px-4 bg-slate-100 text-slate-800 text-xs font-mono font-bold rounded-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call Us: 321-393-1039</span>
              </a>


            </div>
          </div>
        )}
      </header>
    </>
  );
}
