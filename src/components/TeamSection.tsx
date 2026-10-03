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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight uppercase [text-wrap:balance]">
              The Engineers &amp; Pioneers Behind SkyMirr
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed [text-wrap:balance]">
              Decades of world-class electromagnetic physics, microwave engineering, and telecommunications leadership.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-slate-100/80 backdrop-blur-md border border-slate-200/60 rounded-2xl mt-6 md:mt-0 flex-wrap relative shadow-inner">
            {[
              { id: 'all', label: 'All', count: SKYMIRR_DATA.team.length },
              { id: 'leadership', label: 'Executive Team', count: SKYMIRR_DATA.team.filter(m => m.category === 'leadership').length },
              { id: 'board', label: 'Board of Directors', count: SKYMIRR_DATA.team.filter(m => m.category === 'board').length },
              { id: 'advisory', label: 'Advisory Board', count: SKYMIRR_DATA.team.filter(m => m.category === 'advisory').length }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`relative px-4 py-2 text-xs font-bold rounded-xl transition-all duration-300 cursor-pointer ${
                  activeCategory === tab.id
                    ? 'text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                {activeCategory === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl shadow-md"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {tab.label} <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${activeCategory === tab.id ? 'bg-white/20' : 'bg-slate-200 text-slate-500'}`}>{tab.count}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Team Grid with Staggered Entrance and Floating Hover */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
            hidden: {}
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          {filteredTeam.map((member, index) => (
            <motion.div
              key={index}
              layoutId={`member-card-${member.name.replace(/\s+/g, '-')}`}
              variants={{
                hidden: { opacity: 0, y: 60, scale: 0.9, rotateX: 15 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1, 
                  rotateX: 0,
                  transition: { type: "spring", stiffness: 100, damping: 15, mass: 1.2 } 
                }
              }}
              whileHover={{ 
                y: -15, 
                scale: 1.02, 
                boxShadow: "0 30px 60px -12px rgba(37, 99, 235, 0.25), 0 18px 36px -18px rgba(37, 99, 235, 0.15)"
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedMember(member)}
              className="bg-white/70 backdrop-blur-xl border border-white/50 hover:border-blue-300/50 rounded-[2rem] p-6 sm:p-8 transition-all duration-500 flex flex-col justify-between group shadow-[0_8px_30px_rgb(0,0,0,0.04)] cursor-pointer relative overflow-hidden"
              style={{ transformPerspective: 1000 }}
            >
              {/* Dynamic Animated Gradient Background - Always slightly visible, glows on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-cyan-50/50 opacity-100 group-hover:from-blue-100/60 group-hover:via-white/50 group-hover:to-cyan-100/60 transition-all duration-700 pointer-events-none" />
              
              {/* Top animated border line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out z-20" />
              
              {/* Decorative floating shapes inside the card */}
              <motion.div 
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                className="absolute -top-12 -right-12 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-400/20 transition-colors pointer-events-none" 
              />
              <motion.div 
                animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                className="absolute -bottom-8 -left-8 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl group-hover:bg-cyan-400/20 transition-colors pointer-events-none" 
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex flex-col items-center text-center mb-6 relative">
                  {/* Portrait photo - Made larger and centered for a more premium "badge" look */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-white border-4 border-white shadow-[0_8px_16px_-6px_rgba(0,0,0,0.1)] relative group-hover:border-blue-100 group-hover:shadow-[0_12px_24px_-8px_rgba(59,130,246,0.4)] group-hover:scale-105 transition-all duration-500 mb-4 z-10">
                    <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay" />
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-black text-blue-600 font-display text-2xl bg-slate-50">
                        {getInitials(member.name)}
                      </div>
                    )}
                  </div>
                  
                  {/* Connective line from photo to text (decorative) */}
                  <div className="w-0.5 h-6 bg-gradient-to-b from-blue-200 to-transparent absolute top-[6.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex-1 min-w-0 mt-2">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:to-cyan-600 transition-all duration-300">
                      {member.name}
                    </h3>
                    <div className="text-sm font-bold text-blue-600 mt-1.5 leading-snug">
                      {member.role}
                    </div>
                    <div className="inline-block mt-2 px-3 py-1 rounded-full bg-slate-100/80 border border-slate-200 text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase tracking-widest shadow-inner group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200 transition-colors duration-300">
                      {member.category === 'leadership'
                        ? 'Executive Team'
                        : member.category === 'board'
                        ? 'Board of Directors'
                        : 'Advisory Board'}
                    </div>
                  </div>
                </div>

                {/* Brief bio excerpt */}
                {member.bio && (
                  <p className="text-sm text-slate-600 font-light line-clamp-3 leading-relaxed mb-6 relative z-10 text-center flex-1">
                    {member.bio}
                  </p>
                )}

                <div className="pt-5 border-t border-slate-200/50 flex items-center justify-center text-xs text-slate-500 relative z-10 group-hover:border-blue-200 transition-colors duration-300 w-full">
                  <div className="flex items-center gap-2 font-bold text-blue-600 group-hover:text-blue-700">
                    <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Read</span>
                    <span className="relative">
                      Profile
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
                    </span>
                    <ChevronRight className="w-4 h-4 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Detailed Member Bio Modal with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-50 bg-slate-950/60 flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div 
              layoutId={`member-card-${selectedMember.name.replace(/\s+/g, '-')}`}
              initial={{ scale: 0.9, opacity: 0, y: 40, rotateX: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40, rotateX: -10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-[2rem] max-w-2xl w-full shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden relative flex flex-col max-h-[90vh]"
            >
              {/* Modal Header with Animated Gradient and Glow */}
              <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 p-6 sm:p-8 text-white relative overflow-hidden shrink-0">
                {/* Decorative background effects */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
                
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full text-slate-300 hover:text-white bg-white/5 hover:bg-white/20 transition-all duration-300 backdrop-blur-md border border-white/10 cursor-pointer z-10 hover:rotate-90 hover:scale-110"
                  aria-label="Close Modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 relative z-10">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-800 border-4 border-white/10 shrink-0 shadow-[0_0_30px_rgba(59,130,246,0.3)] relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    {selectedMember.image ? (
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover object-top relative z-0 group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-bold text-white font-display text-2xl relative z-0">
                        {getInitials(selectedMember.name)}
                      </div>
                    )}
                  </div>

                  <div className="text-center sm:text-left mt-2 sm:mt-0 flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                      {selectedMember.name}
                    </h3>
                    <div className="text-sm sm:text-base font-semibold text-cyan-400 mt-1">
                      {selectedMember.role}
                    </div>
                    <div className="inline-block mt-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[11px] font-mono text-slate-300 uppercase tracking-wider shadow-inner">
                      SkyMirr Technologies · {selectedMember.category}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto bg-slate-50/50 flex-1">
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-500" />
                    Executive Biography
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                    {selectedMember.bio}
                  </p>
                </div>

                <div className="pt-6 mt-2 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-500 font-mono bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                    Melbourne, FL &amp; Incheon, Korea
                  </span>
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5 cursor-pointer"
                  >
                    Close Profile
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
