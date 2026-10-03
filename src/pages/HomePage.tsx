import { Hero } from '../components/Hero';
import { ScrollingImagesGallery } from '../components/ScrollingImagesGallery';

import { PartnersSection } from '../components/PartnersSection';
import { MulcatDeepDive } from '../components/MulcatDeepDive';

interface HomePageProps {
  onOpenQuote: (productName?: string) => void;
  onNavigate: (page: string) => void;
}

export function HomePage({ onOpenQuote, onNavigate }: HomePageProps) {
  return (
    <div className="w-full bg-white">
      {/* 1. HERO SLIDER (Preserved 100% full-image visibility) + Live Ticker + SIGNAL WITHOUT LIMITS + Animated Mouse */}
      <Hero onOpenQuote={() => onOpenQuote()} onNavigate={onNavigate} />


      {/* 3. PREMIUM INTERACTIVE HARDWARE SHOWCASE & CLICK-MOVE SLIDER (Deep-tech aerospace dark theme + Spec Inspector) */}
      <ScrollingImagesGallery onOpenQuote={onOpenQuote} onNavigate={onNavigate} />



      {/* 5. OUR PARTNERS */}
      <div className="border-t border-slate-200">
        <PartnersSection onNavigate={onNavigate} />
      </div>

      {/* 6. DISCOVER SKYMIRR / TAKE A CLOSER LOOK.... (3D Anechoic Lab Demonstration Video + Responsive MuLCAT® Simulator + 5 Advantages) */}
      <MulcatDeepDive onNavigate={onNavigate} />




    </div>
  );
}
