import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  X,
  ArrowRight,
  Radio,
  FileDown,
  Layers,
  Sparkles,
  ShieldCheck,
  Zap,
  Tag,
  CornerDownLeft,
  Users,
  Building2,
  Newspaper,
  HelpCircle,
  Phone,
  Video,
  ExternalLink,
  Cpu,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { SKYMIRR_DATA, Product, TeamMember, Partner, NewsItem, Solution } from '../data/skymirrData';

export interface SearchResultItem {
  id: string;
  title: string;
  category: 'Products' | 'Technology' | 'Applications' | 'Firmware' | 'Partners' | 'Team' | 'News' | 'Company';
  subtitle: string;
  description: string;
  searchableText: string;
  tags: string[];
  actionType: 'navigate' | 'quote' | 'section' | 'external';
  target: string;
  highlight?: string;
  image?: string;
}

// Build exhaustive search index from SKYMIRR_DATA
function buildUniversalSearchIndex(): SearchResultItem[] {
  const items: SearchResultItem[] = [];

  // 1. ALL PRODUCTS (From catalog and specifications)
  SKYMIRR_DATA.products.forEach((p) => {
    const specsString = Object.entries(p.specs || {})
      .map(([k, v]) => `${k} ${v}`)
      .join(' ');
    const featuresString = (p.features || []).join(' ');
    const bandsString = (p.bands || []).join(' ');

    items.push({
      id: `prod-${p.id}`,
      title: p.name,
      category: 'Products',
      subtitle: p.tagline || `${p.category.toUpperCase()} System`,
      description: p.description,
      searchableText: `${p.name} ${p.category} ${p.tagline} ${p.description} ${p.award || ''} ${specsString} ${featuresString} ${bandsString} ${p.id}`.toLowerCase(),
      tags: [p.category, ...(p.bands || []), p.award || '', 'carrier certified', 'rf hardware'].filter(Boolean),
      actionType: 'navigate',
      target: 'products',
      highlight: p.award || (p.specs.gain ? `Gain: ${p.specs.gain} · ${p.specs.frequency || ''}` : 'Carrier Certified Hardware'),
      image: p.image,
    });
  });

  // 2. TECHNOLOGY & RF PHYSICS & LABORATORY
  items.push({
    id: 'tech-mulcat-physics',
    title: 'MuLCAT® Multi-Layer Coupling Array Technology',
    category: 'Technology',
    subtitle: 'Proprietary Constructive Electromagnetic Reinforcement',
    description: `${SKYMIRR_DATA.mulcatTechnology.lead} ${SKYMIRR_DATA.mulcatTechnology.mechanism}`,
    searchableText: `mulcat technology dielectric resonator positive coupling antenna efficiency bandwidth vswr physics rf microwave ${SKYMIRR_DATA.mulcatTechnology.lead} ${SKYMIRR_DATA.mulcatTechnology.mechanism}`.toLowerCase(),
    tags: ['mulcat', 'technology', 'dielectric', 'patent-pending', 'positive coupling', 'rf physics'],
    actionType: 'navigate',
    target: 'technology',
    highlight: 'Patent-Pending Multi-Layer Topology (+65% Gain)',
  });

  items.push({
    id: 'tech-songdo-laboratory-video',
    title: 'Songdo 3D Microwave Anechoic Chamber R&D Lab',
    category: 'Technology',
    subtitle: 'Songdo Bio-IT Complex · Incheon, South Korea',
    description: 'State-of-the-art 3D spherical anechoic microwave measurement chamber validating near-field and far-field radiation patterns.',
    searchableText: 'songdo bio-it complex incheon south korea 3d microwave anechoic chamber laboratory video testing measurement radiation patterns r&d facility'.toLowerCase(),
    tags: ['songdo', 'anechoic chamber', 'lab video', 'testing', 'incheon', 'facility'],
    actionType: 'section',
    target: 'technology',
    highlight: 'Official 3D Anechoic Chamber Lab Video',
    image: '/images/disocver-skymirr.jpg',
  });

  SKYMIRR_DATA.mulcatTechnology.advantages.forEach((adv, idx) => {
    items.push({
      id: `tech-adv-${idx}`,
      title: adv.title,
      category: 'Technology',
      subtitle: `MuLCAT® Core Advantage 0${idx + 1}`,
      description: adv.desc,
      searchableText: `${adv.title} ${adv.desc} mulcat advantage efficiency bandwidth thermal drift`.toLowerCase(),
      tags: ['mulcat', 'advantage', 'engineering', 'specification'],
      actionType: 'navigate',
      target: 'technology',
      highlight: `MuLCAT® Advantage 0${idx + 1}`,
    });
  });

  // 3. APPLICATIONS & DEPLOYMENTS
  SKYMIRR_DATA.solutions.forEach((sol) => {
    const metricsStr = (sol.metrics || []).join(' ');
    items.push({
      id: `app-${sol.id}`,
      title: sol.title,
      category: 'Applications',
      subtitle: sol.tagline,
      description: sol.description,
      searchableText: `${sol.title} ${sol.tagline} ${sol.description} ${metricsStr} ${sol.id} deployment use-case`.toLowerCase(),
      tags: ['application', 'deployment', sol.id, ...(sol.metrics || [])],
      actionType: 'navigate',
      target: 'applications',
      highlight: sol.metrics?.[0] || 'Mission-Critical Verified',
    });
  });

  // Retail case study
  items.push({
    id: 'app-retail-case-study',
    title: 'Customer Success: Retail Expansion Without Connectivity Delays',
    category: 'Applications',
    subtitle: SKYMIRR_DATA.customerSuccess.badge,
    description: `${SKYMIRR_DATA.customerSuccess.challenge} ${SKYMIRR_DATA.customerSuccess.solution}`,
    searchableText: `retail expansion case study customer success store chain pos downtime fwa fixed wireless ${SKYMIRR_DATA.customerSuccess.challenge} ${SKYMIRR_DATA.customerSuccess.solution} ${SKYMIRR_DATA.customerSuccess.result}`.toLowerCase(),
    tags: ['case study', 'retail', 'customer success', 'zero downtime', 'fwa gateway'],
    actionType: 'navigate',
    target: 'applications',
    highlight: 'Zero Retail Downtime Across 10 Launch Sites',
    image: '/images/retail-main.jpg',
  });

  // Biomedical RF Cancer Research
  items.push({
    id: 'app-biomedical-research',
    title: 'Biomedical RF Science & Medical Micro-Sensor Coils',
    category: 'Applications',
    subtitle: 'ISO 13485 Research Pipeline · Thermal Ablation & Diagnostics',
    description: 'Applying near-field coupled dielectric resonator coils for non-invasive hyperthermia, precise cancer cell thermal ablation, and deep-tissue telemetry.',
    searchableText: 'biomedical medical cancer therapy thermal ablation hyperthermia coil sensor biotrack maep103 healthcare diagnostics iso 13485'.toLowerCase(),
    tags: ['medical', 'biomedical', 'cancer', 'ablation', 'biotrack', 'sensor'],
    actionType: 'navigate',
    target: 'applications',
    highlight: 'ISO 13485 Biomedical Research Pipeline',
  });

  // 4. FIRMWARE & TECHNICAL DOWNLOADS
  items.push({
    id: 'fw-sky5g-tcpa117',
    title: 'Download Latest Firmware: Sky5G™ Router (TCPA-117)',
    category: 'Firmware',
    subtitle: 'Release v2.4.1 (Production Build 2026)',
    description: 'Official OTA carrier patch with T-Priority emergency QoS, enhanced carrier aggregation band locking, and SHA-256 integrity verification.',
    searchableText: 'firmware download sky5g router tcpa-117 v2.4.1 ota update patch t-priority qos carrier band locking sha256 checksum software'.toLowerCase(),
    tags: ['firmware', 'download', 'tcpa-117', 'ota', 'v2.4.1', 'software'],
    actionType: 'section',
    target: 'firmware',
    highlight: 'Official SkyMirr Firmware Build (Release 2026)',
  });

  items.push({
    id: 'doc-datasheet-cad-rfp',
    title: 'Engineering Datasheets, S-Parameters & CAD STEP Files',
    category: 'Firmware',
    subtitle: 'Confidential Technical Documentation',
    description: 'Request complete 3D radiation sphere plots, Gerber files, mechanical 3D STEP models, and carrier compliance reports.',
    searchableText: 'datasheet cad step file s-parameters s2p gerber 3d model radiation plot test report rfp quote documentation'.toLowerCase(),
    tags: ['datasheet', 'cad', 'step', 's-parameters', 'gerber', 'specs'],
    actionType: 'quote',
    target: 'SkyBlade™ Ultra-Wideband Antennas',
    highlight: 'Full S-Parameters & 3D Radiation Plots',
  });

  items.push({
    id: 'doc-source-code-zip',
    title: 'Download Complete Website Source Code (.ZIP)',
    category: 'Firmware',
    subtitle: 'Self-Contained Full Application Bundle (18.9 MB)',
    description: 'Download full TypeScript, React, Tailwind CSS, components, assets, animations, and documentation archive.',
    searchableText: 'download zip file source code package repo archive code full website skymirr application'.toLowerCase(),
    tags: ['zip', 'download', 'source code', 'archive', 'repo', 'package'],
    actionType: 'external',
    target: '/skymirr-website-full-source.zip',
    highlight: 'Full Source Code (.ZIP) Archive Ready',
  });

  // 5. PARTNERS & GLOBAL DISTRIBUTORS
  SKYMIRR_DATA.partners.forEach((partner, idx) => {
    items.push({
      id: `partner-${idx}`,
      title: `${partner.name} (${partner.category})`,
      category: 'Partners',
      subtitle: `Authorized ${partner.category}`,
      description: `Official distributor and channel partner supplying SkyMirr MuLCAT® antennas, routers, and evaluation kits worldwide.`,
      searchableText: `${partner.name} ${partner.category} partner distributor amazon digikey mouser winncom ptcrb 5g americas carrier buy shop order`.toLowerCase(),
      tags: ['partner', 'distributor', partner.category.toLowerCase(), partner.name.toLowerCase()],
      actionType: 'navigate',
      target: 'partners',
      highlight: `Authorized ${partner.category}`,
      image: partner.image,
    });
  });

  // Carrier certifications
  SKYMIRR_DATA.certifications.forEach((cert, idx) => {
    items.push({
      id: `cert-${idx}`,
      title: cert.name,
      category: 'Partners',
      subtitle: cert.category,
      description: cert.detail,
      searchableText: `${cert.name} ${cert.category} ${cert.detail} certification approved carrier network`.toLowerCase(),
      tags: ['certification', 'carrier', 't-mobile', 'at&t', 'ces 2026'],
      actionType: 'navigate',
      target: 'partners',
      highlight: cert.category,
    });
  });

  // 6. EXECUTIVE TEAM & SCIENTIFIC LEADERSHIP
  SKYMIRR_DATA.team.forEach((member, idx) => {
    items.push({
      id: `team-${idx}`,
      title: `${member.name}${member.credentials ? ` (${member.credentials})` : ''}`,
      category: 'Team',
      subtitle: `${member.role} · ${member.category.toUpperCase()}`,
      description: member.bio || `Executive team member leading SkyMirr's ${member.role.toLowerCase()} and RF technological innovations.`,
      searchableText: `${member.name} ${member.role} ${member.category} ${member.credentials || ''} ${member.bio || ''} leadership founder team board`.toLowerCase(),
      tags: ['team', 'leadership', member.category, member.name.toLowerCase()],
      actionType: 'navigate',
      target: 'about',
      highlight: member.role,
      image: member.image,
    });
  });

  // 7. NEWS, PRESS & AWARDS
  SKYMIRR_DATA.news.forEach((news) => {
    items.push({
      id: `news-${news.id}`,
      title: news.title,
      category: 'News',
      subtitle: `${news.publication} · ${news.date}`,
      description: news.summary,
      searchableText: `${news.title} ${news.publication} ${news.date} ${news.summary} ${news.badge} news press media award`.toLowerCase(),
      tags: ['news', 'press', news.badge.toLowerCase(), news.publication.toLowerCase()],
      actionType: 'navigate',
      target: 'latest',
      highlight: news.badge,
    });
  });

  // 8. FREQUENCY BANDS
  SKYMIRR_DATA.frequencyBands.forEach((band) => {
    items.push({
      id: `band-${band.id}`,
      title: `${band.name} (${band.range})`,
      category: 'Technology',
      subtitle: `${band.designation} · Use Case: ${band.useCase}`,
      description: `Optimized with VSWR ${band.vswr} and peak gain of ${band.gainDbi} dBi across the ${band.range} frequency spectrum.`,
      searchableText: `${band.name} ${band.range} ${band.designation} ${band.useCase} ${band.vswr} ${band.gainDbi} mhz ghz band frequency spectrum`.toLowerCase(),
      tags: ['frequency', 'band', band.range, band.name.toLowerCase(), 'rf spectrum'],
      actionType: 'navigate',
      target: 'technology',
      highlight: `Peak Gain: ${band.gainDbi} dBi · VSWR: ${band.vswr}`,
    });
  });

  // 9. COMPANY & CONTACT HOTLINE
  items.push({
    id: 'company-contact-hotline',
    title: `Connect With An Expert · Hotline: ${SKYMIRR_DATA.company.phone}`,
    category: 'Company',
    subtitle: 'Direct Technical Engineering & Sales Inquiries',
    description: `Call our technical engineering team directly at ${SKYMIRR_DATA.company.phone} or visit our corporate facilities in Melbourne, FL and Songdo, South Korea.`,
    searchableText: `phone call 321-393-1039 contact expert hotline sales support melbourne florida songdo incheon address email`.toLowerCase(),
    tags: ['contact', 'phone', 'hotline', 'expert', 'quote', 'support', '321-393-1039'],
    actionType: 'navigate',
    target: 'contact',
    highlight: `Direct Phone: ${SKYMIRR_DATA.company.phone}`,
  });

  return items;
}

const UNIVERSAL_DATABASE = buildUniversalSearchIndex();

const POPULAR_SEARCHES = [
  'Antenna',
  '5G Router',
  'MuLCAT',
  'TCPA-117',
  'Songdo Lab',
  'Firmware',
  '617-5925 MHz',
  'Dr. Eric Jo',
  'Biomedical',
  'Retail Case Study',
  '321-393-1039',
];

const CATEGORIES = ['All', 'Products', 'Technology', 'Applications', 'Firmware', 'Partners', 'Team', 'News', 'Company'] as const;

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
  onOpenQuote: (productName?: string) => void;
}

export function SearchModal({ isOpen, onClose, onNavigate, onOpenQuote }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
      setSelectedCategory('All');
    }
  }, [isOpen]);

  // A to Z search across ALL fields with smart multi-word matching & relevance ranking
  const filteredResults = useMemo(() => {
    const rawQuery = query.trim().toLowerCase();
    if (!rawQuery) return [];

    // Split search query into individual search tokens
    const tokens = rawQuery.split(/\s+/).filter((t) => t.length > 0);

    const matches = UNIVERSAL_DATABASE.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }

      // Check if ALL tokens match anywhere in title, subtitle, description, tags, or searchable text
      const itemFullText = `${item.title} ${item.subtitle} ${item.description} ${item.tags.join(' ')} ${item.searchableText} ${item.highlight || ''}`.toLowerCase();

      return tokens.every((token) => itemFullText.includes(token));
    });

    // Sort by relevance (exact title match first, then subtitle, then description)
    return matches.sort((a, b) => {
      const aTitleExact = a.title.toLowerCase().includes(rawQuery) ? 10 : 0;
      const bTitleExact = b.title.toLowerCase().includes(rawQuery) ? 10 : 0;
      const aSub = a.subtitle.toLowerCase().includes(rawQuery) ? 5 : 0;
      const bSub = b.subtitle.toLowerCase().includes(rawQuery) ? 5 : 0;
      return bTitleExact + bSub - (aTitleExact + aSub);
    });
  }, [query, selectedCategory]);

  // Reset selectedIndex if out of bounds
  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredResults.length, selectedCategory]);

  const handleSelectResult = (item: SearchResultItem) => {
    onClose();
    if (item.actionType === 'external') {
      const link = document.createElement('a');
      link.href = item.target;
      link.download = item.target.split('/').pop() || 'download';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (item.actionType === 'navigate') {
      onNavigate(item.target);
    } else if (item.actionType === 'quote') {
      onOpenQuote(item.target);
    } else if (item.actionType === 'section') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(item.target);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredResults.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + (filteredResults.length || 1)) % (filteredResults.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredResults[selectedIndex]) {
        handleSelectResult(filteredResults[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 pt-14 sm:pt-20 bg-slate-950/85 backdrop-blur-md">
          {/* Backdrop Click */}
          <div className="fixed inset-0" onClick={onClose} />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -15 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 flex flex-col max-h-[82vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center gap-3 bg-slate-50/80">
              <Search className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search any product, keyword (A to Z), model, frequency, team, or firmware..."
                className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-sm sm:text-base font-['Poppins'] font-medium focus:outline-hidden"
              />
              {query ? (
                <button
                  onClick={() => setQuery('')}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors cursor-pointer"
                  title="Clear query"
                >
                  <X className="w-4 h-4" />
                </button>
              ) : (
                <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-slate-200/70 px-2 py-0.5 rounded border border-slate-300">
                  <span>ESC</span>
                </div>
              )}
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                title="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Filter Category Chips */}
            <div className="px-4 sm:px-5 py-2.5 border-b border-slate-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar bg-white">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-colors shrink-0 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Content Area: Initial Prompt / Filtered Results / Explicit No Product Found State */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 divide-y divide-slate-100">
              {/* STATE 1: Empty Query Prompt */}
              {!query.trim() && (
                <div className="py-8 px-4 text-center space-y-6">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3">
                      <Search className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 font-['Poppins']">
                      Universal A to Z Search Engine
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                      Search any term across products, antenna specs, 5G routers, firmware, scientific team, or frequency bands.
                    </p>
                  </div>

                  {/* Popular Search Suggestions */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase font-bold text-slate-400 tracking-wider block">
                      Popular Search Terms
                    </span>
                    <div className="flex flex-wrap justify-center gap-1.5 max-w-lg mx-auto">
                      {POPULAR_SEARCHES.map((term) => (
                        <button
                          key={term}
                          onClick={() => setQuery(term)}
                          className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 text-xs font-['Poppins'] font-medium transition-colors border border-slate-200 cursor-pointer"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                    Total indexed entries: <strong className="text-slate-700">{UNIVERSAL_DATABASE.length} hardware, scientific &amp; carrier records</strong>
                  </div>
                </div>
              )}

              {/* STATE 2: Filtered Results Found */}
              {query.trim() && filteredResults.length > 0 && (
                filteredResults.map((item, idx) => {
                  const isSelected = selectedIndex === idx;
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleSelectResult(item)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`p-3.5 sm:p-4 rounded-2xl transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                        isSelected
                          ? 'bg-blue-50/80 border border-blue-200 ring-1 ring-blue-500/20 shadow-xs'
                          : 'hover:bg-slate-50 border border-transparent'
                      }`}
                    >
                      <div className="space-y-1 flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded">
                            {item.category}
                          </span>
                          <span className="text-sm sm:text-base font-bold text-slate-950 font-['Poppins'] truncate">
                            {item.title}
                          </span>
                        </div>

                        <div className="text-xs font-medium text-slate-500 font-['Poppins'] truncate">
                          {item.subtitle}
                        </div>

                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>

                        {item.highlight && (
                          <div className="pt-1 flex items-center gap-1.5 text-[11px] font-mono font-bold text-cyan-700">
                            <ShieldCheck className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                            <span>{item.highlight}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                        <span className="text-xs font-bold text-blue-600 hidden sm:inline font-['Poppins']">
                          {item.actionType === 'quote' ? 'Request' : 'Open'}
                        </span>
                        <div
                          className={`w-7 h-7 rounded-xl flex items-center justify-center transition-colors ${
                            isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                          }`}
                        >
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  );
                })
              )}

              {/* STATE 3: Explicit "No Product / Results Found" State as requested */}
              {query.trim() && filteredResults.length === 0 && (
                <div className="py-12 px-4 text-center space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-rose-50 border border-rose-200 text-rose-500 flex items-center justify-center mx-auto shadow-xs">
                    <AlertCircle className="w-7 h-7" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 font-['Poppins']">
                      No products or results found for &ldquo;<span className="text-rose-600">{query}</span>&rdquo;
                    </h4>
                    <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                      We could not find any matching product, antenna, router model, frequency band, firmware, or team record matching your search.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 max-w-md mx-auto space-y-2">
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                      Try Searching For:
                    </span>
                    <div className="flex flex-wrap justify-center gap-1.5">
                      <button
                        onClick={() => setQuery('antenna')}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 text-xs font-mono font-semibold"
                      >
                        antenna
                      </button>
                      <button
                        onClick={() => setQuery('router')}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 text-xs font-mono font-semibold"
                      >
                        router
                      </button>
                      <button
                        onClick={() => setQuery('TCPA-117')}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 text-xs font-mono font-semibold"
                      >
                        TCPA-117
                      </button>
                      <button
                        onClick={() => setQuery('MuLCAT')}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 text-xs font-mono font-semibold"
                      >
                        MuLCAT
                      </button>
                      <button
                        onClick={() => setQuery('Songdo')}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 text-xs font-mono font-semibold"
                      >
                        Songdo
                      </button>
                      <button
                        onClick={() => setQuery('firmware')}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 text-xs font-mono font-semibold"
                      >
                        firmware
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer with Keyboard Navigation Helpers */}
            <div className="px-4 sm:px-5 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white rounded border border-slate-300 shadow-2xs">↑</kbd>
                  <kbd className="px-1.5 py-0.5 bg-white rounded border border-slate-300 shadow-2xs">↓</kbd>
                  <span>Navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white rounded border border-slate-300 shadow-2xs flex items-center gap-0.5">
                    <CornerDownLeft className="w-2.5 h-2.5" />
                  </kbd>
                  <span>Select</span>
                </span>
              </div>

              <div className="text-blue-700 font-bold">
                {query.trim()
                  ? `${filteredResults.length} ${filteredResults.length === 1 ? 'match' : 'matches'}`
                  : `${UNIVERSAL_DATABASE.length} total entries`}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
