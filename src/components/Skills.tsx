import React, { useState } from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Database, 
  Cpu, 
  GitBranch, 
  Layers, 
  Check
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code2 size={20} />;
      case 'BrainCircuit': return <BrainCircuit size={20} />;
      case 'Database': return <Database size={20} />;
      case 'Cpu': return <Cpu size={20} />;
      case 'GitBranch': return <GitBranch size={20} />;
      case 'Layers': return <Layers size={20} />;
      default: return <Code2 size={20} />;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 bg-stone-50/60 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#0F0E0D]">
            TECHNICAL SKILLS
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Curated toolkit built through intensive coursework, open-source contributions, patent research, and national robotics hackathons. Categorized by functional engineering discipline.
          </p>
        </div>

        {/* Tab Controls for Category Selection */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider shrink-0 transition-all ${
                activeTab === idx
                  ? 'bg-[#0F0E0D] text-white shadow-sm'
                  : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 hover:border-stone-300'
              }`}
            >
              <span className={activeTab === idx ? 'text-amber-400' : 'text-stone-500'}>
                {getCategoryIcon(cat.iconName)}
              </span>
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Spotlight */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 mb-12 shadow-sm border border-stone-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-stone-200/80">
            <div className="flex items-center gap-3.5">
              <div className="p-3.5 rounded-2xl bg-amber-100 text-amber-900">
                {getCategoryIcon(SKILL_CATEGORIES[activeTab].iconName)}
              </div>
              <div>
                <h3 className="font-display-hero text-2xl text-[#0F0E0D]">
                  {SKILL_CATEGORIES[activeTab].title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                  {SKILL_CATEGORIES[activeTab].description}
                </p>
              </div>
            </div>
          </div>

          {/* Skills Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
            {SKILL_CATEGORIES[activeTab].skills.map((skill, i) => (
              <div
                key={i}
                className={`p-3.5 rounded-2xl flex items-center justify-between gap-2 transition-all ${
                  skill.highlight
                    ? 'bg-white border-2 border-amber-300/80 shadow-xs'
                    : 'bg-stone-50/80 border border-stone-200/70 hover:bg-white'
                }`}
              >
                <span className={`text-xs sm:text-sm font-semibold ${
                  skill.highlight ? 'text-stone-900' : 'text-stone-700'
                }`}>
                  {skill.name}
                </span>
                {skill.highlight && (
                  <Check size={14} className="text-amber-600 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Comprehensive Grid of All Skill Domains */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-2xs hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-stone-100 text-stone-800">
                  {getCategoryIcon(cat.iconName)}
                </div>
                <h4 className="font-display-hero text-base text-[#0F0E0D]">
                  {cat.title}
                </h4>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                      skill.highlight
                        ? 'bg-amber-50 text-amber-900 border border-amber-200 font-semibold'
                        : 'bg-stone-50 text-stone-700 border border-stone-200'
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
