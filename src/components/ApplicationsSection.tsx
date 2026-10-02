import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface ApplicationsSectionProps {
  onNavigate?: (page: string) => void;
}

export function ApplicationsSection({ onNavigate }: ApplicationsSectionProps) {
  const applications = [
    {
      id: 'industrial',
      title: 'INDUSTRIAL',
      image: '/images/slider1.jpg',
    },
    {
      id: 'residential',
      title: 'RESIDENTIAL',
      image: '/images/retail-main.jpg',
    },
    {
      id: 'logistics',
      title: 'LOGISTICS',
      image: '/images/asset-trackers.jpg',
    },
  ];

  return (
    <section id="applications" className="py-20 sm:py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight uppercase [text-wrap:balance]">
            APPLICATIONS
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed [text-wrap:balance]">
            We develop/manufacture advanced RF technology-based products that better our lives, such as cost-effective, better performing, broadband wireless communications for everyone and medical applications that treat serious disease far more effectively
          </p>
        </div>

        {/* Applications Grid / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {applications.map((app, idx) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              onClick={() => onNavigate ? onNavigate('applications') : null}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all h-[400px]"
            >
              <div className="absolute inset-0 bg-slate-900">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
              </div>
              
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Title Text */}
              <div className="absolute bottom-8 left-0 right-0 text-center px-4">
                <h3 className="text-2xl font-black text-white font-display tracking-wider uppercase drop-shadow-md">
                  {app.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {onNavigate && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => onNavigate('applications')}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all cursor-pointer font-display"
            >
              <span>View All Applications</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
