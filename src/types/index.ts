export interface DeveloperProfile {
  name: string;
  role: string;
  degree: string;
  university: string;
  location: string;
  status: string;
  stack: string[];
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    certification: string;
    thesis: string;
  };
}

export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  outcome: string;
  keyFeatures: string[];
  techStack: string[];
  liveUrl?: string;
  mockupPath: string;
  galleryImages?: { url: string; label: string }[];
  caseStudy: {
    challenge: string;
    approach: string;
    solution: string;
    keyFeatures: string[];
    outcome: string;
    techStack: string[];
  };
}

export interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}
