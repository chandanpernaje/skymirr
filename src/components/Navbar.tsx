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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
          scrolled
            ? 'bg-white/85 backdrop-blur-xl border-slate-200/50 shadow-lg py-2'
            : 'bg-white/50 backdrop-blur-md border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo matching https://skymirr.com/ */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group shrink-0 cursor-pointer text-left"
          >
            <img
              src="/images/skymirr-logo-footer.png"
              alt="SkyMirr"
              className="h-8 sm:h-9 w-auto object-contain transition-all duration-500 group-hover:opacity-80 brightness-0 opacity-90"
            />
          </button>

          {/* Desktop Navigation Links from https://skymirr.com/ */}
          <nav className="hidden xl:flex items-center gap-6 text-[13px] tracking-wide font-semibold text-slate-600 uppercase">
            <button
              onClick={() => handleNavClick('home')}
              className={`transition-colors cursor-pointer tracking-wider ${
                activePage === 'home' ? 'text-slate-900 font-bold border-b border-slate-900 pb-1' : 'hover:text-slate-900'
              }`}
            >
              Home
            </button>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('products')}
                className={`flex items-center gap-1.5 py-1.5 transition-colors cursor-pointer tracking-wider ${
                  activePage === 'products' ? 'text-slate-900 font-bold border-b border-slate-900 pb-1' : 'hover:text-slate-900'
                }`}
              >
                <span>Products</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 transition-transform" />
              </button>

              {productsDropdownOpen && (
                <div className="absolute top-full left-0 w-52 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <button
                    onClick={() => handleNavClick('products')}
                    className="w-full text-left block px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors tracking-wide"
                  >
                    All Products
                  </button>
                  <button
                    onClick={() => handleNavClick('antennas')}
                    className="w-full text-left block px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors tracking-wide"
                  >
                    Antennas
                  </button>
                  <button
                    onClick={() => handleNavClick('routers')}
                    className="w-full text-left block px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors tracking-wide"
                  >
                    Routers (Sky5G™)
                  </button>
                  <button
                    onClick={() => handleNavClick('trackers')}
                    className="w-full text-left block px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors tracking-wide"
                  >
                    Asset Trackers
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('technology')}
              className={`transition-colors cursor-pointer tracking-wider ${
                activePage === 'technology' ? 'text-slate-900 font-bold border-b border-slate-900 pb-1' : 'hover:text-slate-900'
              }`}
            >
              Technology
            </button>



            <button
              onClick={() => handleNavClick('design-services')}
              className={`transition-colors cursor-pointer tracking-wider ${
                activePage === 'design-services' ? 'text-slate-900 font-bold border-b border-slate-900 pb-1' : 'hover:text-slate-900'
              }`}
            >
              Design Services
            </button>

            <button
              onClick={() => handleNavClick('partners')}
              className={`transition-colors cursor-pointer tracking-wider ${
                activePage === 'partners' ? 'text-slate-900 font-bold border-b border-slate-900 pb-1' : 'hover:text-slate-900'
              }`}
            >
              Our Partners
            </button>



            <button
              onClick={() => handleNavClick('about')}
              className={`transition-colors cursor-pointer tracking-wider ${
                activePage === 'about' ? 'text-slate-900 font-bold border-b border-slate-900 pb-1' : 'hover:text-slate-900'
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`transition-colors cursor-pointer tracking-wider ${
                activePage === 'contact' ? 'text-slate-900 font-bold border-b border-slate-900 pb-1' : 'hover:text-slate-900'
              }`}
            >
              Contact Us
            </button>
          </nav>

          {/* Right Header Actions & Global Search Bar Trigger */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Desktop Instant Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/60 hover:bg-white backdrop-blur-sm border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-mono transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5 group"
              title="Search SkyMirr platform (⌘K / Ctrl+K)"
              aria-label="Search SkyMirr platform"
            >
              <Search className="w-3.5 h-3.5 text-slate-700 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline font-medium text-slate-500 group-hover:text-slate-700 font-sans">
                Search
              </span>
              <kbd className="hidden sm:inline px-1.5 py-0.5 text-[10px] font-bold bg-white text-slate-500 rounded-sm border border-slate-300 shadow-sm">
                ⌘K
              </kbd>
            </button>

            {/* Phone as shown on skymirr.com */}
            <a
              href="tel:321-393-1039"
              className="hidden xl:flex items-center gap-1.5 text-xs font-mono font-bold text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-sm border border-slate-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-slate-700" />
              <span>321-393-1039</span>
            </a>
            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 xl:hidden transition-colors border border-slate-200"
              aria-label="Toggle Mobile Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
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
                      onClick={() => handleNavClick('products')}
                      className="block w-full text-left py-1 hover:text-blue-600 cursor-pointer"
                    >
                      All Products Overview
                    </button>
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
                onClick={() => handleNavClick('partners')}
                className={`text-left py-3 transition-colors ${
                  activePage === 'partners' ? 'text-blue-700 font-bold' : 'hover:text-blue-600'
                }`}
              >
                Our Partners &amp; Distributors
              </button>



              <button
                onClick={() => handleNavClick('about')}
                className={`text-left py-3 transition-colors ${
                  activePage === 'about' ? 'text-blue-700 font-bold' : 'hover:text-blue-600'
                }`}
              >
                About Us &amp; Leadership
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
