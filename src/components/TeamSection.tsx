import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKYMIRR_DATA, TeamMember } from '../data/skymirrData';
import { Users, Award, X, ExternalLink, ChevronRight, User } from 'lucide-react';

export function TeamSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'leadership' | 'board' | 'advisory'>('all');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const filteredTeam =
    activeCategory === 'all'
      ? SKYMIRR_DATA.team
      : SKYMIRR_DATA.team.filter((m) => m.category === activeCategory);

  const getInitials = (name: string) => {
    return name
      .replace(/(Dr\.|Ph\.D\.|MSEE|MBA|,)/g, '')
      .trim()
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <section id="team" className="py-24 bg-[#F8FAFC] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Anti-Slop Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-blue-700 tracking-wider uppercase mb-2 font-mono">
              About Us · Executive Leadership &amp; Board
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight uppercase [text-wrap:balance]">
              The Engineers &amp; Pioneers Behind SkyMirr
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed [text-wrap:balance]">
              Decades of world-class electromagnetic physics, microwave engineering, and telecommunications leadership.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 border border-slate-200 rounded-xl mt-6 md:mt-0 flex-wrap">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All ({SKYMIRR_DATA.team.length})
            </button>
            <button
              onClick={() => setActiveCategory('leadership')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeCategory === 'leadership'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Executive Team (8)
            </button>
            <button
              onClick={() => setActiveCategory('board')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeCategory === 'board'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Board of Directors (3)
            </button>
            <button
              onClick={() => setActiveCategory('advisory')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeCategory === 'advisory'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Advisory Board (3)
            </button>
          </div>
        </div>

        {/* Team Grid with Staggered Entrance and Floating Hover */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredTeam.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1, 
                  transition: { type: "spring", stiffness: 120, damping: 20 } 
                }
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedMember(member)}
              className="bg-white border border-slate-200 hover:border-blue-400 rounded-2xl p-5 sm:p-6 transition-colors flex flex-col justify-between group shadow-sm cursor-pointer relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  {/* Portrait photo */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 shadow-xs relative group-hover:border-blue-400 group-hover:shadow-blue-200 transition-all duration-300">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top group-hover:scale-110 group-hover:rotate-1 transition-all duration-500"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-bold text-blue-700 font-display text-lg">
                        {getInitials(member.name)}
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-slate-950 font-display leading-tight group-hover:text-blue-700 transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-xs font-bold text-blue-700 mt-1 leading-snug">
                      {member.role}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-1.5">
                      {member.category === 'leadership'
                        ? 'Executive Officer'
                        : member.category === 'board'
                        ? 'Board Director'
                        : 'Advisory Member'}
                    </div>
                  </div>
                </div>

                {/* Brief bio excerpt */}
                {member.bio && (
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-2 relative z-10">
                    {member.bio}
                  </p>
                )}
              </div>

              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 relative z-10">
                <span className="font-mono text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60 font-semibold text-[10px] group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                  View Bio &amp; Background
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Detailed Member Bio Modal with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-slate-900 to-blue-950 p-6 text-white relative">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close Modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-800 border-2 border-white/20 shrink-0 shadow-md">
                    {selectedMember.image ? (
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-bold text-white font-display text-xl">
                        {getInitials(selectedMember.name)}
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold font-display text-white">
                      {selectedMember.name}
                    </h3>
                    <div className="text-sm font-semibold text-cyan-300 mt-0.5">
                      {selectedMember.role}
                    </div>
                    <div className="text-[11px] font-mono text-slate-300 uppercase tracking-wider mt-1">
                      SkyMirr Technologies · {selectedMember.category}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Executive Biography
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                    {selectedMember.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-mono">
                    Melbourne, FL &amp; Incheon, Korea
                  </span>
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
