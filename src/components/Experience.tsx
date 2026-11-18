import React from 'react';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">
              <Sparkles size={14} />
              <span>Career Trajectory</span>
            </div>
            <h2 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#0F0E0D]">
              EXPERIENCE
            </h2>
          </div>

          <p className="text-sm sm:text-base text-stone-600 max-w-md">
            Applied engineering research with space organizations, international open-source contribution, and corporate data analytics simulations.
          </p>
        </div>

        {/* Editorial Table / Row Format — Direct Reference to Madison Layout */}
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm overflow-hidden">
          <div className="divide-y divide-stone-200/80">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 hover:bg-stone-50/70 transition-colors grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
              >
                {/* Column 1: Timeline & Type */}
                <div className="lg:col-span-3 space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-stone-500 uppercase tracking-wider">
                    <Calendar size={13} className="text-amber-600" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-stone-100 text-stone-700">
                      {exp.type}
                    </span>
                    <span className="text-xs text-stone-400 flex items-center gap-1">
                      <MapPin size={11} /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Column 2: Role & Organization */}
                <div className="lg:col-span-4 space-y-1">
                  <h3 className="font-display-hero text-xl text-[#0F0E0D]">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-amber-800">
                    {exp.organization}
                  </div>
                </div>

                {/* Column 3: Responsibilities & Tech Stack */}
                <div className="lg:col-span-5 space-y-3">
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-xs sm:text-sm text-stone-600 leading-relaxed flex items-start gap-2">
                        <span className="text-amber-600 font-bold shrink-0 mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-stone-100 text-stone-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workstation / Engineering Setup Preview — Visual homage to Madison reference */}
        <div className="mt-16 bg-stone-900 text-white rounded-3xl p-8 sm:p-10 shadow-lg overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
                <Briefcase size={14} />
                <span>Engineering Standards</span>
              </div>
              <h3 className="font-display-hero text-2xl sm:text-3xl text-white">
                TURNING SYSTEMS VISION INTO PRODUCTION
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed max-w-xl">
                Every project adheres to test-driven design, deterministic reproducibility, idempotent data loads, and verifiable benchmarks. Whether compiling ROS2 C++ packages or orchestrating multi-agent LLM fallback chains, reliability comes first.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-stone-800/80 rounded-2xl p-4 border border-stone-700">
                <div className="font-display-hero text-2xl text-amber-400">100%</div>
                <div className="text-xs text-stone-400 mt-1 uppercase">Air-gapped RAG in OFFAIR</div>
              </div>
              <div className="bg-stone-800/80 rounded-2xl p-4 border border-stone-700">
                <div className="font-display-hero text-2xl text-amber-400">0.94</div>
                <div className="text-xs text-stone-400 mt-1 uppercase">Recall@5 in RAG Assistant</div>
              </div>
              <div className="bg-stone-800/80 rounded-2xl p-4 border border-stone-700">
                <div className="font-display-hero text-2xl text-amber-400">96.0%</div>
                <div className="text-xs text-stone-400 mt-1 uppercase">Ensemble MRI Accuracy</div>
              </div>
              <div className="bg-stone-800/80 rounded-2xl p-4 border border-stone-700">
                <div className="font-display-hero text-2xl text-amber-400">&lt;50ms</div>
                <div className="text-xs text-stone-400 mt-1 uppercase">Vision Rover Latency</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
