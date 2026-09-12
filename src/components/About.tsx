import React, { useState } from 'react';
import { BIOGRAPHY, PERSONAL_INFO } from '../data/portfolioData';
import {
  Compass,
  Cpu,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Layers,
  MapPin,
  Clock,
  Sparkles,
  FileText,
  Copy,
  Check,
} from 'lucide-react';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const principleIcons = [
    <Zap className="w-5 h-5 text-indigo-400" />,
    <Sparkles className="w-5 h-5 text-cyan-400" />,
    <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    <Layers className="w-5 h-5 text-purple-400" />,
  ];

  return (
    <section id="about" className="py-24 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2">
              <Compass className="w-4 h-4" />
              <span>Biography & Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              About Me & Engineering Journey
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Bridging scalable distributed backend architectures with intuitive, accessible frontend systems.
          </p>
        </div>

        {/* Top Grid: Narrative & Quick Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Narrative Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>The Story So Far</span>
              </h3>
              
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {BIOGRAPHY.detailedStory.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  {PERSONAL_INFO.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  PST Timezone (Available Globally)
                </span>
              </div>
            </div>
          </div>

          {/* Quick Facts / Engineering Specs (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="text-base font-bold text-white">Engineering Quick Specs</h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/50">
                  Verified
                </span>
              </div>

              <dl className="space-y-3.5 text-xs sm:text-sm">
                {BIOGRAPHY.quickFacts.map((fact, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-800/40 gap-1">
                    <dt className="text-slate-400 font-mono text-xs">{fact.label}</dt>
                    <dd className="text-slate-200 font-medium text-right">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              {/* Direct email quick action */}
              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  id="btn-about-copy-email"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700/80 text-xs font-medium text-slate-200 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Email Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Copy Email ({PERSONAL_INFO.email})</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onOpenResume}
                  id="btn-about-view-resume"
                  title="View Resume"
                  className="p-2.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Engineering Philosophy Cards (4 columns) */}
        <div className="mt-12">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white">Core Architectural Principles</h3>
            <p className="text-xs text-slate-400">How I approach every codebase, pull request, and distributed system.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {BIOGRAPHY.principles.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center">
                  {principleIcons[idx]}
                </div>
                <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
