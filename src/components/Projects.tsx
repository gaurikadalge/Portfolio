import React, { useState } from 'react';
import { Github, ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'AI / ML / LLM',
    'FinTech',
    'Hardware & Robotics',
    'IoT & Research',
    'Software Engineering',
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-stone-50/50 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header - Inspired by Madison reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">
              <Sparkles size={14} />
              <span>Engineered Systems</span>
            </div>
            <h2 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#0F0E0D]">
              RECENT PROJECTS
            </h2>
          </div>

          <p className="text-sm sm:text-base text-stone-600 max-w-md">
            Production-grade software architectures, multi-agent AI pipelines, and hardware robotics engineered with verified metrics.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider flex items-center gap-1.5 mr-2">
              <Filter size={13} /> Filter:
            </span>
            {categories.map((cat) => {
              const count = cat === 'All' 
                ? PROJECTS.length 
                : PROJECTS.filter(p => p.category === cat).length;

              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-[#0F0E0D] text-white shadow-sm'
                      : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isSelected ? 'bg-stone-700 text-white' : 'bg-stone-100 text-stone-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Thumbnail Image Container */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-stone-100">
                  <img
                    src={project.imageThumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter saturate-[0.85] group-hover:saturate-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-white/95 text-stone-900 shadow-sm backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Metric / Verified Badge */}
                  {project.metric && (
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold bg-stone-950/85 text-amber-300 backdrop-blur-md border border-amber-400/20 shadow-sm">
                        {project.metric}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="font-display-hero text-xl text-[#0F0E0D] group-hover:text-amber-800 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-stone-100 text-stone-700 border border-stone-200/80"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-stone-50 text-stone-500">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-stone-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F0E0D] hover:text-amber-700 transition-colors group/btn"
                >
                  <span>View Details</span>
                  <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                    title="View GitHub Repository"
                  >
                    <Github size={17} />
                  </a>
                ) : (
                  <span className="text-[11px] font-medium text-stone-400">
                    System Architecture
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
