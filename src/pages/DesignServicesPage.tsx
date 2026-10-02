import { WaveCanvas } from '../components/WaveCanvas';
import { PenTool, Target, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

interface DesignServicesPageProps {
  onOpenQuote: (productName?: string) => void;
  onNavigate: (page: string) => void;
}

export function DesignServicesPage({ onOpenQuote, onNavigate }: DesignServicesPageProps) {
  const services = [
    {
      id: 'custom-antenna',
      title: 'Custom Antenna Design',
      icon: PenTool,
      description: 'SkyMirr develops bespoke antenna solutions tailored to specific project requirements, ranging from embedded 5G modules to ruggedized industrial and IoT applications.',
      features: ['Embedded 5G Modules', 'Ruggedized Industrial IoT', 'Bespoke Form Factors'],
    },
    {
      id: 'rf-consulting',
      title: 'System-Level RF Consulting',
      icon: Target,
      description: 'Expert guidance on integrating RF technology into products. We help clients solve complex signal challenges and optimize physical-layer RF performance.',
      features: ['Signal Integrity Optimization', 'Interference Mitigation', 'Board-Level Integration'],
    },
    {
      id: 'tuning-integration',
      title: 'Tuning & Integration Support',
      icon: Cpu,
      description: 'Beyond initial design, we offer comprehensive support for tuning and system integration to ensure that devices perform reliably in real-world field conditions rather than just in simulations.',
      features: ['Real-World Field Testing', 'Impedance Matching', 'OTA Chamber Validation'],
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
              Engineering & Consulting
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-['Poppins'] tracking-tight text-white leading-tight">
              Design Services
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Leveraging our proprietary MuLCAT® (Multi-Layer Coupling Controlled Antenna Technology) to achieve higher isolation, better radiation efficiency, and optimized performance in challenging RF environments.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Poppins'] text-slate-950 mb-4">
            Antenna-First Design Philosophy
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We prioritize physical-layer RF performance to improve connectivity, throughput, and link stability, working across sectors including broadband wireless, enterprise connectivity, surveillance, and industrial IoT to reduce time-to-market while enhancing product performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 flex flex-col group">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-['Poppins'] text-slate-950 mb-3 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all cursor-pointer font-['Poppins']"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
