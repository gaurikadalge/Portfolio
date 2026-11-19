import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F0E0D] text-white pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b border-stone-800">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-1.5">
              <span className="font-brand text-2xl font-black text-white">
                {PERSONAL_INFO.brandName}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            </div>

            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              {PERSONAL_INFO.name} — B.Tech Computer Science (Artificial Intelligence) at Vishwakarma Institute of Technology, Pune.
            </p>

            <div className="pt-2 text-xs text-stone-500">
              Building intelligent software systems, multi-agent AI pipelines, and autonomous robotic solutions.
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
              Navigation
            </div>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About & Education</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects Explorer</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Technical Skills</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
              <li><a href="#achievements" className="hover:text-white transition-colors">Achievements & Patent</a></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
              Connect
            </div>
            <div className="flex flex-col space-y-2 text-xs text-stone-400">
              <a
                href={PERSONAL_INFO.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Github size={14} />
                <span>github.com/gaurikadalge</span>
              </a>
              <a
                href={PERSONAL_INFO.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Linkedin size={14} />
                <span>linkedin.com/in/gauri-kadalge-2847b3336</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.contact.email}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={14} />
                <span>{PERSONAL_INFO.contact.email}</span>
              </a>
            </div>

            {/* Back to top button */}
            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors"
              >
                <span>Back to Top</span>
                <ArrowUp size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with</span>
            <Heart size={12} className="text-amber-500 fill-amber-500 inline" />
            <span>using React, TypeScript & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
