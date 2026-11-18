import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle2, Cpu, Layers, Target, AlertCircle } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="min-h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div 
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden transform transition-all my-8 animate-in fade-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Banner */}
          <div className="relative h-48 sm:h-64 bg-stone-900 overflow-hidden">
            <img
              src={project.imageThumbnail}
              alt={project.title}
              className="w-full h-full object-cover opacity-40 filter saturate-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Floating Info in Banner */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 text-stone-950">
                    {project.category}
                  </span>
                  {project.metric && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-md">
                      {project.metric}
                    </span>
                  )}
                </div>
                <h3 className="font-display-hero text-2xl sm:text-3xl text-white">
                  {project.title}
                </h3>
              </div>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-stone-900 bg-white hover:bg-stone-100 shadow-md transition-transform hover:scale-105"
                >
                  <Github size={15} />
                  <span>GitHub Repository</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
            {/* Overview */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
                Project Overview
              </h4>
              <p className="text-base text-stone-700 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Problem Statement & Objectives Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Problem */}
              <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
                <div className="flex items-center gap-2 text-stone-900 font-bold mb-2">
                  <AlertCircle size={18} className="text-amber-600" />
                  <h4 className="text-sm uppercase tracking-wide">Problem Statement</h4>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              {/* Objectives */}
              <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
                <div className="flex items-center gap-2 text-stone-900 font-bold mb-2">
                  <Target size={18} className="text-amber-600" />
                  <h4 className="text-sm uppercase tracking-wide">System Objectives</h4>
                </div>
                <ul className="space-y-2 text-sm text-stone-600">
                  {project.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* System Architecture */}
            <div className="bg-amber-50/50 rounded-2xl p-6 border border-amber-200/60">
              <div className="flex items-center gap-2 text-stone-900 font-bold mb-3">
                <Layers size={18} className="text-amber-700" />
                <h4 className="text-sm uppercase tracking-wide">System Architecture & Pipeline</h4>
              </div>
              <p className="text-sm text-stone-700 leading-relaxed">
                {project.systemArchitecture}
              </p>
            </div>

            {/* Technologies Grouped */}
            <div>
              <div className="flex items-center gap-2 text-stone-900 font-bold mb-4">
                <Cpu size={18} className="text-amber-600" />
                <h4 className="text-xs uppercase tracking-wider text-stone-500">
                  Technologies & Frameworks
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.technologiesUsed.map((group, idx) => (
                  <div key={idx} className="bg-stone-50 rounded-xl p-4 border border-stone-200">
                    <h5 className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                      {group.domain}
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-white text-stone-700 border border-stone-200 shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                Key Engineering Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200/80">
                    <CheckCircle2 size={16} className="text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-700">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Results */}
            {project.verifiedResults.length > 0 && (
              <div className="bg-emerald-50/60 rounded-2xl p-5 border border-emerald-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                  Verified Results & Milestones
                </h4>
                <ul className="space-y-1.5">
                  {project.verifiedResults.map((res, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-emerald-950 font-medium">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Footer CTAs */}
          <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-stone-500">
              Verified Project Data from Resume & Public GitHub
            </span>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#0F0E0D] hover:bg-stone-800 rounded-full transition-colors shadow-sm"
                >
                  <Github size={14} />
                  <span>View Source Code</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-stone-700 hover:text-black bg-white border border-stone-200 rounded-full transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
