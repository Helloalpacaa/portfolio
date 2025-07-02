// Basic portfolio data types
export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  phone?: string;
  location?: string;
  avatar?: string;
  resume?: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}
export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number; // 1-100
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  createdAt: Date;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  technologies: string[];
  current: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

// Component props types
export interface NavigationItem {
  name: string;
  href: string;
}

export interface StatsItem {
  num: number;
  text: string;
}
