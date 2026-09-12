import React, { useEffect } from 'react';
import { PERSONAL_INFO, BIOGRAPHY, EXPERIENCES, EDUCATION, SKILL_CATEGORIES } from '../data/portfolioData';
import {
  X,
  Printer,
  Download,
  Mail,
  MapPin,
  Github,
  Linkedin,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

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
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div
        id="resume-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[90vh]"
      >
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950/80 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white text-sm">
              Curriculum Vitae — {PERSONAL_INFO.name}
            </span>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
              Updated 2026
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              id="btn-print-resume"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              id="btn-close-resume-modal"
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="p-8 sm:p-10 overflow-y-auto space-y-8 bg-slate-950 text-slate-200 font-sans text-sm leading-relaxed">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-base text-indigo-400 font-medium mt-0.5">
                {PERSONAL_INFO.role}
              </p>
              <p className="text-xs text-slate-400 mt-2 max-w-xl">
                {BIOGRAPHY.summary}
              </p>
            </div>

            <div className="text-xs space-y-1 font-mono text-slate-400 shrink-0">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-slate-500" />
                <span>github.com/ashtikarhimani</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-slate-500" />
                <span>linkedin.com/in/himani-ashtikar</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold border-b border-slate-800/80 pb-1">
              Professional Work Experience
            </h2>

            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <span className="font-bold text-white text-base">
                        {exp.role}
                      </span>{' '}
                      <span className="text-indigo-400 font-semibold">
                        @ {exp.company}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {exp.period} | {exp.location}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300">{exp.description}</p>

                  <ul className="space-y-1 pt-1">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-indigo-400 font-bold shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical Arsenal */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold border-b border-slate-800/80 pb-1">
              Technical Proficiencies & Stack
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="bg-slate-900/50 p-3 rounded-xl border border-slate-800/80">
                  <div className="font-bold text-white mb-1.5">{cat.title}</div>
                  <div className="text-slate-300 font-mono text-[11px] leading-relaxed">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold border-b border-slate-800/80 pb-1">
              Education & Honors
            </h2>

            {EDUCATION.map((edu) => (
              <div key={edu.id} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-white">{edu.degree}</span>{' '}
                  <span className="text-indigo-400">— {edu.institution}</span>
                  {edu.honors && (
                    <span className="text-slate-400 block font-mono text-[11px] mt-0.5">
                      {edu.honors}
                    </span>
                  )}
                </div>
                <span className="font-mono text-slate-400">{edu.period}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Himani Ashtikar • Confidential CV Document</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
