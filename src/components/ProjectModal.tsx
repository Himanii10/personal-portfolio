import React, { useEffect } from 'react';
import { Project } from '../types';
import {
  X,
  Github,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  BarChart3,
  ShieldCheck,
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        id="project-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden my-8"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 bg-slate-950/60 border-b border-slate-800">
          <div className="space-y-1.5 pr-6">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800">
                {project.categoryLabel}
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                • {project.systemTag}
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-slate-300">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            id="btn-close-project-modal"
            aria-label="Close project modal"
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Key Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
            {project.metrics.map((metric, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-bold text-indigo-400 font-mono">
                  {metric.value}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400">
              System Overview
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="text-xs font-mono uppercase text-rose-400 font-semibold flex items-center gap-1.5">
                <span>Problem Statement</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="text-xs font-mono uppercase text-emerald-400 font-semibold flex items-center gap-1.5">
                <span>Architecture & Solution</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.solutionArchitecture}
              </p>
            </div>
          </div>

          {/* Key Engineering Highlights */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400">
              Key Capabilities & Engineering Feats
            </h4>
            <ul className="grid grid-cols-1 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="space-y-2.5">
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400">
              Tech Stack & Infrastructure
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-800 text-slate-200 border border-slate-700/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between p-5 bg-slate-950/70 border-t border-slate-800">
          <div className="text-xs font-mono text-slate-500">
            ID: {project.id}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-medium border border-slate-700 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition-colors"
              >
                <span>Live Demonstration</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
