import React, { useState } from 'react';
import { PROFESSIONAL_PROFILES, PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Github,
  Linkedin,
  Code2,
  Twitter,
  ExternalLink,
  Copy,
  Check,
  Send,
  Sparkles,
  MessageSquare,
  Clock,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    purpose: 'fulltime',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      setFormState({
        name: '',
        email: '',
        purpose: 'fulltime',
        subject: '',
        message: '',
      });
      setTimeout(() => setSubmittedSuccess(false), 6000);
    }, 800);
  };

  const getProfileIcon = (icon: string) => {
    switch (icon) {
      case 'Github':
        return <Github className="w-5 h-5 text-white" />;
      case 'Linkedin':
        return <Linkedin className="w-5 h-5 text-cyan-400" />;
      case 'Mail':
        return <Mail className="w-5 h-5 text-rose-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-amber-400" />;
      case 'Twitter':
        return <Twitter className="w-5 h-5 text-sky-400" />;
      default:
        return <ExternalLink className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2">
              <MessageSquare className="w-4 h-4" />
              <span>Connect & Collaborate</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Professional Profiles & Inquiries
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Interested in discussing an engineering role, technical consulting, or architectural collaboration? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Professional Profile Hub (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-bold text-white mb-2">
              Direct Professional Profiles
            </h3>

            {PROFESSIONAL_PROFILES.map((profile) => (
              <div
                key={profile.platform}
                id={`profile-card-${profile.platform.toLowerCase()}`}
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-slate-700 transition-all gap-4"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getProfileIcon(profile.icon)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-white text-sm">
                        {profile.platform}
                      </h4>
                      {profile.badge && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {profile.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-indigo-400 font-mono mt-0.5">
                      {profile.handle}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      {profile.description}
                    </p>
                    {profile.stats && (
                      <p className="text-[11px] font-mono text-slate-500 mt-1">
                        {profile.stats}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 sm:self-center">
                  {profile.platform === 'Email' ? (
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button
                        onClick={handleCopyEmail}
                        id="btn-copy-email-contact"
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-400" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                      <a
                        href={profile.url}
                        className="inline-flex items-center justify-center p-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  ) : (
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`link-profile-${profile.platform.toLowerCase()}`}
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 hover:border-indigo-500 transition-all w-full sm:w-auto"
                    >
                      <span>Visit</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Quick Availability Badge */}
            <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-900/60 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-indigo-400" />
                <span>Typical response time: Under 24 hours</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Active</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Send Direct Inquiry
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill out the form below or write directly to{' '}
                  <span className="text-indigo-400 font-mono">{PERSONAL_INFO.email}</span>.
                </p>
              </div>

              {submittedSuccess && (
                <div
                  id="contact-form-success-banner"
                  className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs flex items-start gap-2.5 animate-in fade-in"
                >
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400" />
                  <div>
                    <strong className="font-semibold block text-white">
                      Message Sent Successfully!
                    </strong>
                    <span>
                      Thank you for reaching out. A confirmation has been logged and I will reply shortly.
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-xs font-mono text-slate-400 mb-1.5"
                    >
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="Alex Turner"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="form-email"
                      className="block text-xs font-mono text-slate-400 mb-1.5"
                    >
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="form-purpose"
                    className="block text-xs font-mono text-slate-400 mb-1.5"
                  >
                    INQUIRY PURPOSE
                  </label>
                  <select
                    id="form-purpose"
                    value={formState.purpose}
                    onChange={(e) =>
                      setFormState({ ...formState, purpose: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-indigo-500"
                  >
                    <option value="fulltime">Full-Time Senior / Staff Engineering Role</option>
                    <option value="contract">Architectural Consulting or Contract</option>
                    <option value="advisory">Technical Advisory or Board Advice</option>
                    <option value="other">General Engineering Question / Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="form-subject"
                    className="block text-xs font-mono text-slate-400 mb-1.5"
                  >
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    id="form-subject"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    placeholder="Engineering role at [Company] / Project discussion"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="form-message"
                    className="block text-xs font-mono text-slate-400 mb-1.5"
                  >
                    MESSAGE *
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Describe the opportunity, technical challenge, or project scope..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="btn-submit-contact-form"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-md shadow-indigo-600/30 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Transmitting Message...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
