import { WaveCanvas } from '../components/WaveCanvas';
import { PenTool, Target, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight"
            >
              Design Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed"
            >
              Leveraging our proprietary MuLCAT® (Multi-Layer Coupling Controlled Antenna Technology) to achieve higher isolation, better radiation efficiency, and optimized performance in challenging RF environments.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 sm:py-12 max-w-7xl mx-auto px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white -z-10" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          <div className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-3 font-mono">
            Our Approach
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-950 mb-6 tracking-tight">
            Antenna-First Design Philosophy
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We prioritize physical-layer RF performance to improve connectivity, throughput, and link stability, working across sectors including broadband wireless, enterprise connectivity, surveillance, and industrial IoT to reduce time-to-market while enhancing product performance.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {}
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1, 
                    transition: { type: "spring", stiffness: 100, damping: 20 } 
                  }
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02, 
                  boxShadow: "0 30px 40px -10px rgba(37, 99, 235, 0.15), 0 15px 20px -10px rgba(37, 99, 235, 0.1)"
                }}
                className="bg-white border-2 border-slate-100 hover:border-blue-400/60 rounded-[2rem] p-8 lg:p-10 transition-all duration-300 flex flex-col group shadow-lg shadow-slate-200/50 relative overflow-hidden"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Decorative circle */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-50/80 rounded-full group-hover:scale-[2.5] transition-transform duration-700 ease-in-out pointer-events-none" />

                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100/50 text-blue-600 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm border border-blue-200/50 group-hover:shadow-blue-500/30 group-hover:shadow-lg group-hover:-rotate-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-slate-950 mb-4 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 pt-6 border-t border-slate-100/80 mt-auto">
                    {service.features.map((feature, i) => (
                      <motion.div 
                        key={i} 
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-semibold cursor-default"
                      >
                        <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-colors duration-300">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <span className="group-hover:text-slate-900 transition-colors">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 text-center relative z-10"
        >
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-bold tracking-wide rounded-full shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(37,99,235,0.7)] hover:-translate-y-1 transition-all duration-300 cursor-pointer font-display uppercase group"
          >
            <span>Discuss Your Project</span>
            <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-white group-hover:text-blue-600 transition-colors">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>
        </motion.div>
      </section>
    </div>
  );
}
