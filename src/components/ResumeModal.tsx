import React, { useEffect } from 'react';
import { X, Download, FileText, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="min-h-full flex items-center justify-center p-4 sm:p-6">
        <div
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden transform transition-all my-8 animate-in fade-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 sm:p-8 bg-stone-900 text-white relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>

            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
              <Sparkles size={14} />
              <span>Verified Candidate Credentials</span>
            </div>
            <h3 className="font-display-hero text-2xl sm:text-3xl text-white">
              Download Professional Resumes
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-300">
              Select the resume tailored to your team's engineering domain, or view the default comprehensive profile.
            </p>
          </div>

          {/* Resume Options List */}
          <div className="p-6 sm:p-8 space-y-4">
            {PERSONAL_INFO.resumes.map((resume, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  resume.recommended
                    ? 'bg-amber-50/50 border-amber-300 shadow-xs'
                    : 'bg-stone-50 border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div className={`p-3 rounded-xl shrink-0 ${
                    resume.recommended ? 'bg-amber-100 text-amber-800' : 'bg-stone-200 text-stone-700'
                  }`}>
                    <FileText size={22} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-display-hero text-base text-stone-900">
                        {resume.title}
                      </h4>
                      {resume.recommended && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-stone-950">
                          Recommended
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-stone-600 mt-1">
                      {resume.description}
                    </p>
                    <span className="text-[11px] font-mono text-stone-400 mt-1 block">
                      {resume.filename}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:shrink-0">
                  <a
                    href={resume.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full text-stone-600 hover:text-black hover:bg-white border border-stone-200 transition-colors"
                    title="Preview in new tab"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={resume.path}
                    download={resume.filename}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#0F0E0D] hover:bg-stone-800 transition-all shadow-sm hover:shadow"
                  >
                    <Download size={14} className="text-amber-400" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-amber-600" />
              <span>Authentic academic & professional records</span>
            </span>
            <button
              onClick={onClose}
              className="text-stone-700 hover:text-black font-semibold uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
