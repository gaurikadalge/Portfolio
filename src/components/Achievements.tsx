import React from 'react';
import { Trophy, Award, BookCheck, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Patent':
        return <ShieldAlert className="text-amber-600" size={20} />;
      case 'Competition':
        return <Trophy className="text-amber-600" size={20} />;
      case 'Certification':
        return <BookCheck className="text-amber-600" size={20} />;
      default:
        return <Award className="text-amber-600" size={20} />;
    }
  };

  return (
    <section id="achievements" className="py-24 sm:py-32 bg-stone-50/60 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">
              <Sparkles size={14} />
              <span>Honors & Intellectual Property</span>
            </div>
            <h2 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#0F0E0D]">
              ACHIEVEMENTS & RESEARCH
            </h2>
          </div>

          <p className="text-sm sm:text-base text-stone-600 max-w-md">
            National hackathon podium finishes, patented IoT research, regional autonomous robotics finals, and professional specializations.
          </p>
        </div>

        {/* Timeline / Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Top Badge & Date Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-amber-50 border border-amber-200/60">
                      {getCategoryIcon(item.category)}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                      {item.category}
                    </span>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-amber-100 text-amber-900 border border-amber-200">
                    {item.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-display-hero text-xl text-[#0F0E0D] leading-snug">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-amber-800 mt-1">
                  {item.organization} • {item.date}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights List */}
                <div className="mt-4 pt-4 border-t border-stone-100 space-y-2">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-600">
                      <CheckCircle2 size={13} className="text-amber-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
