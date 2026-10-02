import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { SearchModal } from './components/SearchModal';
import { ArrowUp } from 'lucide-react';

// Distinct Pages
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { ApplicationsPage } from './pages/ApplicationsPage';
import { PartnersPage } from './pages/PartnersPage';

import { AboutPage } from './pages/AboutPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';
import { DesignServicesPage } from './pages/DesignServicesPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { LatestPage } from './pages/LatestPage';

export type PageId =
  | 'home'
  | 'products'
  | 'antennas'
  | 'routers'
  | 'trackers'
  | 'technology'
  | 'applications'
  | 'partners'
  | 'about'
  | 'team'
  | 'contact'
  | 'design-services'
  | 'latest'
  | 'the-latest'
  | 'press-releases'
  | 'blogs'
  | `product/${string}`;

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string>('Sky5G™ Wireless Router');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for Back-to-Top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global Keyboard Shortcut listener (⌘K / Ctrl+K) for instant search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Sync page state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (!hash || hash === 'home') {
        setCurrentPage('home');
      } else if (hash === 'products') {
        setCurrentPage('products');
      } else if (hash === 'antennas') {
        setCurrentPage('antennas');
      } else if (hash === 'routers' || hash === 'tcpa-117') {
        setCurrentPage('routers');
      } else if (hash === 'trackers' || hash === 'asset-trackers') {
        setCurrentPage('trackers');
      } else if (hash === 'technology') {
        setCurrentPage('technology');
      } else if (hash === 'applications') {
        setCurrentPage('applications');
      } else if (hash === 'partners') {
        setCurrentPage('partners');
      } else if (hash === 'about' || hash === 'team') {
        setCurrentPage('about');
      } else if (hash === 'contact') {
        setCurrentPage('contact');
      } else if (hash === 'design-services' || hash === 'design') {
        setCurrentPage('design-services');
      } else if (hash === 'latest' || hash === 'the-latest' || hash === 'press-releases' || hash === 'blogs') {
        setCurrentPage(hash as PageId);
      } else if (hash.startsWith('product/')) {
        setCurrentPage(hash as PageId);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    const validPage = page as PageId;
    setCurrentPage(validPage);
    window.location.hash = validPage === 'home' ? '' : validPage;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (productName?: string) => {
    if (productName) {
      setSelectedProductForQuote(productName);
    }
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-['Poppins'] selection:bg-blue-600/20 selection:text-blue-900">
      {/* Top Navigation with Active Page Highlighting & Search Trigger */}
      <Navbar
        activePage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Main Authentic Multi-Page Router Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage onOpenQuote={handleOpenQuote} onNavigate={handleNavigate} />
        )}
        {(currentPage === 'products' || currentPage === 'antennas' || currentPage === 'routers' || currentPage === 'trackers') && (
          <ProductsPage 
            onOpenQuote={handleOpenQuote} 
            onNavigate={handleNavigate} 
            initialCategory={
              currentPage === 'antennas' ? 'antenna' :
              currentPage === 'routers' ? 'router' :
              currentPage === 'trackers' ? 'tracker' : 'all'
            }
          />
        )}
        {currentPage === 'technology' && (
          <TechnologyPage onOpenQuote={handleOpenQuote} onNavigate={handleNavigate} />
        )}
        {currentPage === 'applications' && (
          <ApplicationsPage onOpenQuote={handleOpenQuote} onNavigate={handleNavigate} />
        )}
        {currentPage === 'partners' && (
          <PartnersPage onOpenQuote={handleOpenQuote} />
        )}
        {currentPage === 'about' && (
          <AboutPage onOpenQuote={handleOpenQuote} onNavigate={handleNavigate} />
        )}
        {currentPage === 'team' && (
          <TeamPage onOpenQuote={handleOpenQuote} onNavigate={handleNavigate} />
        )}
        {currentPage === 'contact' && (
          <ContactPage />
        )}
        {currentPage === 'design-services' && (
          <DesignServicesPage onOpenQuote={handleOpenQuote} onNavigate={handleNavigate} />
        )}
        {(currentPage === 'latest' || currentPage === 'the-latest' || currentPage === 'press-releases' || currentPage === 'blogs') && (
          <LatestPage 
            initialCategory={
              currentPage === 'press-releases' ? 'press' :
              currentPage === 'blogs' ? 'blogs' : 'all'
            }
            onOpenQuote={handleOpenQuote}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage.startsWith('product/') && (
          <ProductDetailsPage 
            productId={currentPage.replace('product/', '')}
            onOpenQuote={handleOpenQuote} 
            onNavigate={handleNavigate} 
          />
        )}
      </main>

      {/* Corporate Footer matching skymirr.com */}
      <Footer onNavigate={handleNavigate} />

      {/* 100% Working Smooth Back to Top Floating Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer flex items-center justify-center group"
          title="Scroll back to top"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* Instant Real-Time Global Search Modal (⌘K / Ctrl+K) */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onNavigate={handleNavigate}
        onOpenQuote={handleOpenQuote}
      />

      {/* Global Quote / RFP Evaluation Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedProduct={selectedProductForQuote}
      />
    </div>
  );
}
