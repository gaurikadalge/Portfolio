import React from 'react';
import { ArrowDown, Download, ExternalLink, Sparkles, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-[#FBFBFA]"
    >
      {/* Radiant Sunburst / Warm Golden Glow Layer behind the portrait */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[680px] h-[680px] sm:w-[880px] sm:h-[880px] lg:w-[1050px] lg:h-[1050px] rounded-full pointer-events-none hero-glow-layer z-0"
        aria-hidden="true"
      />

      {/* Subtle background engineering grid pattern */}
      <div 
        className="absolute inset-0 bg-subtle-grid-pattern opacity-40 pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full flex-1 flex flex-col justify-between">
        {/* Top Script Accent + Availability Pill */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 sm:pt-6 mb-2 sm:mb-4">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 border border-stone-200/90 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide text-stone-800">
              {PERSONAL_INFO.statusText}
            </span>
          </div>

          {/* Editorial Script Accent: "Hey, there" */}
          <div className="text-center sm:text-right">
            <span className="font-editorial-script text-4xl sm:text-5xl lg:text-6xl text-[#1C1A18] tracking-tight">
              Hey, there
            </span>
          </div>
        </div>

        {/* Central Composition: Left Title - Center Portrait - Right Subtitle */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-8 my-auto pt-4 pb-8">
          {/* Left Column: Bold Editorial Headline */}
          <div className="lg:col-span-4 z-20 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-1">
              <h2 className="font-display-hero text-4xl sm:text-6xl xl:text-7xl uppercase leading-[0.95] text-[#0F0E0D] tracking-tight">
                I AM
              </h2>
              <h1 className="font-display-hero text-5xl sm:text-7xl xl:text-8xl uppercase leading-[0.95] text-[#0F0E0D] tracking-tight">
                GAURI
              </h1>
            </div>

            <p className="mt-5 text-sm sm:text-base text-stone-600 font-normal leading-relaxed max-w-md mx-auto lg:mx-0">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Quick Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-stone-100 text-stone-800 border border-stone-200">
                <Sparkles size={12} className="text-amber-600" />
                9.2 CGPA • VIT Pune
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200">
                <Award size={12} className="text-amber-600" />
                Patent Pending
              </span>
            </div>
          </div>

          {/* Center Column: Portrait overlapping seamlessly into the bottom fade */}
          <div className="lg:col-span-4 z-10 flex justify-center order-1 lg:order-2">
            <div className="relative w-64 sm:w-80 md:w-96 lg:w-[420px] max-w-full">
              {/* Subtle halo ring */}
              <div 
                className="absolute inset-0 rounded-full bg-amber-400/20 blur-3xl scale-95 pointer-events-none"
                aria-hidden="true"
              />

              {/* Portrait image with smooth bottom blend */}
              <div className="relative overflow-visible">
                <img
                  src="/gauri-hero.png"
                  alt="Gauri Vijay Kadalge — Portrait"
                  className="w-full h-auto object-contain filter drop-shadow-md select-none transition-transform duration-700 hover:scale-[1.01]"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Roles, Specialty & Quick Description */}
          <div className="lg:col-span-4 z-20 text-center lg:text-left order-3">
            <div className="space-y-1">
              <h3 className="font-display-hero text-2xl sm:text-3xl xl:text-4xl uppercase leading-tight text-[#0F0E0D] tracking-tight">
                AI SYSTEMS &
              </h3>
              <h3 className="font-display-hero text-2xl sm:text-3xl xl:text-4xl uppercase leading-tight text-[#0F0E0D] tracking-tight text-amber-700">
                ROBOTICS DEV
              </h3>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-stone-600 font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
              Specialized in Multi-Agent LLMs, Hybrid RAG pipelines, Autonomous ROS2 Robotics, and FinTech systems. B.Tech Computer Science & Artificial Intelligence at Vishwakarma Institute of Technology.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#0F0E0D] hover:bg-stone-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowDown size={14} />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 transition-all shadow-sm hover:shadow hover:-translate-y-0.5"
              >
                <Download size={14} className="text-amber-600" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Academic Snapshot Pill */}
            <div className="mt-6 pt-5 border-t border-stone-200/80 flex items-center justify-center lg:justify-start gap-4 text-xs text-stone-500">
              <span>B.Tech AI '27</span>
              <span>•</span>
              <a 
                href={PERSONAL_INFO.contact.github}
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-black inline-flex items-center gap-1 font-semibold text-stone-700"
              >
                GitHub Repos <ExternalLink size={12} />
              </a>
              <span>•</span>
              <a 
                href={PERSONAL_INFO.contact.linkedin}
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-black inline-flex items-center gap-1 font-semibold text-stone-700"
              >
                LinkedIn <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Bar — Editorial Counter Cards (Real Data Only) */}
        <div className="pt-8 pb-2 border-t border-stone-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div 
                key={idx}
                className="glass-panel-subtle rounded-2xl p-4 sm:p-5 transition-transform hover:-translate-y-0.5 duration-200"
              >
                <div className="font-display-hero text-2xl sm:text-3xl lg:text-4xl text-[#0F0E0D]">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm font-medium text-stone-500 tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
