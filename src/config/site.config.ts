import { personalInfo } from "@/data";

export const siteConfig = {
  name: personalInfo.name,
  title: personalInfo.title,
  description: personalInfo.summary,
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com",
  email: personalInfo.email,
  links: {
    github: `https://${personalInfo.github}`,
    linkedin: `https://${personalInfo.linkedin}`,
    email: `mailto:${personalInfo.email}`,
  },
  nav: [
    { name: "Home", id: "home", href: "/" },
    { name: "Skills", id: "skills", href: "/#skills" },
    { name: "Experience", id: "experience", href: "/#experience" },
    { name: "Projects", id: "projects", href: "/#projects" },
    { name: "More", id: "more", href: "/#more" },
  ],
} as const;
