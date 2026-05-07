import { IconType } from "react-icons";

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  title: string;
  summary: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
  relatedProjects?: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  type: "web" | "mobile";
  techStack: string;
  role: string;
  duration: string;
  description: string;
  link: string;
  image: string;
  images?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  gpa: string;
  courses: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface TechSkill {
  name: string;
  icon: IconType;
  color: string;
}

export interface TechCategory {
  category: string;
  skills: TechSkill[];
}

export interface Volunteer {
  id: string;
  role: string;
  organization: string;
  location: string;
  duration: string;
  description: string;
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  extraInfo?: string;
  image: string;
  link?: string;
  linkText?: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  projects: Project[];
  education: Education[];
  skills: SkillCategory[];
  volunteer: Volunteer[];
  certificates: string[];
}
