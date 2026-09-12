export type ProjectCategory = 'all' | 'fullstack' | 'ai' | 'cloud' | 'devtools';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'fullstack' | 'ai' | 'cloud' | 'devtools';
  categoryLabel: string;
  summary: string;
  fullDescription: string;
  problemStatement: string;
  solutionArchitecture: string;
  keyFeatures: string[];
  technologies: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  accentColor: string;
  systemTag: string;
}

export interface SkillItem {
  name: string;
  level: 'Intermediate' | 'Advanced' | 'Expert';
  experienceYears: number;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  color: string;
  skills: SkillItem[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Open Source';
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  honors?: string;
  highlights: string[];
}

export interface ProfessionalLink {
  platform: string;
  label: string;
  url: string;
  handle: string;
  icon: string;
  description: string;
  stats?: string;
  badge?: string;
  primary?: boolean;
}
