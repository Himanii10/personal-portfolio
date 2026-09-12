import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ArrowRight,
  Sparkles,
  Terminal,
  Copy,
  Check,
  Code2,
  Cpu,
  Layers
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  const codeSnippet = `// engineer.config.ts
export const engineer = {
  name: "Himani Ashtikar",
  role: "Full-Stack Software Engineer",
  experienceYears: 5,
  stack: ["TypeScript", "React 19", "Go", "Next.js", "Docker", "Postgres"],
  principles: ["Sub-50ms latency", "Strict type-safety", "Resilient cloud"],
  availability: "Open for senior & staff engineering roles",
  hire: () => contact("ashtikarhimani@gmail.com")
};`;

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2200);
  };

  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient subtle gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[300px] bg-cyan-500/10 blur-[110px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Primary CTA */}
          <div className="lg:col-span-7 space-y-7">
            {/* Status indicator pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PERSONAL_INFO.status}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-sm md:text-base font-mono text-indigo-400 font-semibold tracking-wide">
                HELLO, WORLD! I AM
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {PERSONAL_INFO.name}
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 flex items-center gap-2">
                <span>{PERSONAL_INFO.role}</span>
              </h2>
            </div>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                id="hero-cta-projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all cursor-pointer"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                id="hero-cta-resume"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800/90 border border-slate-700/90 text-slate-200 hover:text-white font-medium text-sm transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Resume & CV</span>
              </button>

              <a
                href="#contact"
                id="hero-cta-contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl hover:bg-slate-900/80 text-slate-300 hover:text-white font-medium text-sm transition-all"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Link Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                Profiles:
              </span>
              <a
                href="https://github.com/ashtikarhimani"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-social-github"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-700 text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-slate-200" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/himani-ashtikar"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-social-linkedin"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-700 text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:ashtikarhimani@gmail.com"
                id="hero-social-email"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-700 text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-rose-400" />
                <span>Email</span>
              </a>
              <a
                href="https://leetcode.com/u/himani_ashtikar"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-social-leetcode"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-700 text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                <Code2 className="w-3.5 h-3.5 text-amber-400" />
                <span>LeetCode</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Spec Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl shadow-black/60 overflow-hidden">
              {/* Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    engineer.config.ts
                  </span>
                </div>
                <button
                  onClick={copyCodeToClipboard}
                  id="btn-copy-code-snippet"
                  title="Copy configuration snippet"
                  className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-1 rounded bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Body */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto selection:bg-indigo-600/40">
                <div className="text-slate-500">// TypeScript configuration definition</div>
                <div>
                  <span className="text-purple-400">export const</span>{' '}
                  <span className="text-yellow-300">engineer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-cyan-300">name</span>:{' '}
                  <span className="text-emerald-300">"Himani Ashtikar"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-300">title</span>:{' '}
                  <span className="text-emerald-300">"Full-Stack Software Engineer"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-300">experience</span>:{' '}
                  <span className="text-amber-400">5</span>,{' '}
                  <span className="text-slate-500">// years in production</span>
                </div>
                <div className="pl-4">
                  <span className="text-cyan-300">focus</span>: [
                  <span className="text-emerald-300">"Distributed Systems"</span>,{' '}
                  <span className="text-emerald-300">"React 19"</span>,{' '}
                  <span className="text-emerald-300">"Cloud"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-cyan-300">status</span>:{' '}
                  <span className="text-emerald-300">"Ready for impact"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-300">contact</span>:{' '}
                  <span className="text-purple-400">() =&gt;</span>{' '}
                  <span className="text-emerald-300">"ashtikarhimani@gmail.com"</span>
                </div>
                <div>&#125;;</div>

                <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-slate-400 text-xs">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Typecheck: Passed (0 errors)</span>
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">v1.0.0</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Strip Bento */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition-colors">
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-indigo-400">
              {PERSONAL_INFO.yearsOfExperience}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
              Years of Production Exp.
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Full-stack & distributed systems</p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition-colors">
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-cyan-400">
              {PERSONAL_INFO.projectsCompleted}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
              Shipped Projects & Tools
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Web, APIs, microservices</p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition-colors">
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-emerald-400">
              {PERSONAL_INFO.productionUptime}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
              Production Availability
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Reliable resilient architectures</p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition-colors">
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-purple-400">
              {PERSONAL_INFO.openSourceContributions}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
              GitHub Contributions
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Open source & toolchains</p>
          </div>
        </div>

      </div>
    </section>
  );
};
