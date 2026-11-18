import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FBFBFA] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">
            <Sparkles size={14} />
            <span>Let's Build Together</span>
          </div>
          <h2 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#0F0E0D]">
            GET IN TOUCH
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Whether you are exploring opportunities in Agentic AI, Autonomous Robotics, FinTech, or looking for an engineer to architect resilient systems—I'd love to connect.
          </p>
        </div>

        {/* Contact Container */}
        <div className="max-w-3xl mx-auto glass-panel rounded-3xl p-8 sm:p-12 shadow-sm border border-stone-200 text-center">
          {/* Email Box */}
          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/90 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-amber-100 text-amber-900">
                <Mail size={22} />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
                  Direct Email
                </div>
                <div className="text-base sm:text-lg font-mono font-bold text-stone-900">
                  {PERSONAL_INFO.contact.email}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleCopyEmail}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 transition-colors shadow-2xs"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.contact.email}?subject=Collaboration%20Inquiry%20via%20Portfolio`}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#0F0E0D] hover:bg-stone-800 transition-colors shadow-sm"
              >
                <span>Compose</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white hover:bg-stone-50 border border-stone-200 transition-all shadow-2xs hover:shadow-sm flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-stone-100 text-stone-900 group-hover:bg-amber-100 group-hover:text-amber-900 transition-colors">
                  <Github size={20} />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    GitHub
                  </div>
                  <div className="text-sm font-bold text-stone-900">
                    @gaurikadalge
                  </div>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-stone-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white hover:bg-stone-50 border border-stone-200 transition-all shadow-2xs hover:shadow-sm flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-stone-100 text-stone-900 group-hover:bg-amber-100 group-hover:text-amber-900 transition-colors">
                  <Linkedin size={20} />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    LinkedIn
                  </div>
                  <div className="text-sm font-bold text-stone-900">
                    in/gauri-kadalge
                  </div>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-stone-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-200/80 text-xs text-stone-500">
            Based in Pune, India • Open to full-time Software, AI/ML, and Robotics engineering roles.
          </div>
        </div>
      </div>
    </section>
  );
};
