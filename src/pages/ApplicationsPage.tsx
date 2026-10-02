import { SKYMIRR_DATA } from '../data/skymirrData';
import { WaveCanvas } from '../components/WaveCanvas';
import { Radio, ShieldCheck, HeartPulse, Store, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

interface ApplicationsPageProps {
  onOpenQuote: (productName?: string) => void;
  onNavigate: (page: string) => void;
}

export function ApplicationsPage({ onOpenQuote, onNavigate }: ApplicationsPageProps) {
  const applications = [
    {
      id: 'broadband',
      title: 'Broadband Wireless Communications',
      category: 'Telecommunications',
      tagline: 'Bridging the Digital Divide with 42% Extended Cell Tower Reach',
      icon: Radio,
      image: '/images/slider1.jpg',
      description:
        'Deliver gigabit-class fixed wireless access (FWA) to rural communities, industrial parks, and suburban developments where fiber trenching is cost-prohibitive. SkyMirr’s Sky5G™ routers and SkyBlade™ ultra-wideband antennas lock into carrier 5G Sub-6 NSA/SA signals through dense foliage and long distances.',
      metrics: ['+42% Farther Tower Reach', '2x Sustained Speed in Fringe Zones', 'Wi-Fi 7 Tri-Band Local Mesh'],
      benefits: [
        'Rapid DIY setup without fiber trenching permits or utility delays',
        'Sub-second automated dual-SIM carrier failover (T-Mobile & AT&T)',
        'Carrier certified with enterprise remote cloud management',
      ],
    },
    {
      id: 'medical',
      title: 'Medical Disease & Cancer Therapies',
      category: 'Biomedical Engineering',
      tagline: 'Precision Microwave Diagnostics & Thermal Ablation',
      icon: HeartPulse,
      image: '/images/skymirr-next-gen-antennas.jpg',
      description:
        'SkyMirr adapts patented MuLCAT® positive dielectric coupling to create non-invasive microwave diagnostic instrumentation and cancer treatment devices. Constructive electromagnetic field focusing enables hyper-targeted thermal ablation of malignant tissue with millimeter precision while sparing surrounding healthy anatomy.',
      metrics: ['Millimeter Focused RF Energy', 'Zero Ionizing Radiation', 'Real-Time Tissue Permittivity Sensing'],
      benefits: [
        'Non-invasive early-stage tumor detection via microwave dielectric resonance',
        'Localized hyperthermia cancer therapies enhancing chemo-sensitivity',
        'Developed in partnership with leading biomedical research universities',
      ],
    },
    {
      id: 'public-safety',
      title: 'First Responders & Tactical Convoys',
      category: 'Mission-Critical Defense',
      tagline: 'T-Priority & FirstNet Resilient Communications',
      icon: ShieldCheck,
      image: '/images/slider2.jpg',
      description:
        'In disaster zones and high-priority tactical operations, cellular networks experience severe congestion. SkyMirr’s Sky5G™ router is certified for T-Priority first responders, guaranteeing prioritized bandwidth preemption and zero packet drop for live drone video, CAD telemetry, and vehicle area networks.',
      metrics: ['100% T-Priority Certified', 'Zero Packet Drop at Cell Edge', 'MIL-STD-810H Vibration Rated'],
      benefits: [
        'Band 14 (FirstNet 700 MHz) and n71 low-band priority preemption',
        'Rugged roof-mounted SkyBlade™ TAMP161 cross-polarized MIMO modules',
        'Hardware IPsec & WireGuard tunneling back to police/fire command desks',
      ],
    },
    {
      id: 'retail',
      title: 'Retail Branch & Zero-Downtime POS',
      category: 'Enterprise SD-WAN',
      tagline: 'Retail Expansion Without Fiber Deployment Delays',
      icon: Store,
      image: '/images/retail-main.jpg',
      description:
        'Avoid months of waiting for commercial fiber trenching when opening new store locations. SkyMirr delivers immediate primary multi-gigabit broadband with automated cellular backup, ensuring point-of-sale registers, cloud inventory, and guest Wi-Fi 7 never go offline.',
      metrics: ['Zero Lost Transactions', '10 Launch Sites Deployed On Time', '99.999% POS Network Availability'],
      benefits: [
        'Opens retail stores 60 to 90 days faster than fiber construction',
        'Full cloud PCI-DSS compliant firewall and guest network isolation',
        'Dual active carrier failover protects against fiber backhoe cuts',
      ],
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Header */}
      <section className="relative py-16 bg-gradient-to-b from-[#001738] via-[#05224D] to-[#001738] text-white overflow-hidden">
        <WaveCanvas opacity={0.16} speed={0.8} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase mb-2">
              Real-World Deployments
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-['Poppins'] tracking-tight text-white leading-tight">
              Applications of SkyMirr Technology
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              From global 5G broadband wireless to medical cancer ablation therapies, discover how patented MuLCAT® RF architecture powers critical human infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Main Applications List */}
      <section className="py-20 max-w-7xl mx-auto px-6 space-y-20">
        {applications.map((app, index) => {
          const Icon = app.icon;
          const isReversed = index % 2 === 1;

          return (
            <div
              key={app.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                isReversed ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Left Column: Visual Card */}
              <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900 group">
                  <div className="aspect-[16/10] overflow-hidden bg-white flex items-center justify-center">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                    <div className="flex items-center gap-3 text-white">
                      <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider font-bold">
                          {app.category}
                        </div>
                        <div className="text-base font-bold font-['Poppins']">
                          {app.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Details & Benefits */}
              <div className={`lg:col-span-6 space-y-4 ${isReversed ? 'lg:order-1' : ''}`}>
                <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider">
                  {app.tagline}
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-['Poppins'] text-slate-950">
                  {app.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {app.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 py-2">
                  {app.metrics.map((m, i) => (
                    <div key={i} className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
                      <div className="text-xs font-bold text-slate-900 font-mono">{m}</div>
                    </div>
                  ))}
                </div>

                {/* Bullet Points */}
                <div className="space-y-2 pt-2">
                  {app.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">

                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    Speak with an RF Engineer &rarr;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
