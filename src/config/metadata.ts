import { Metadata } from "next";
import { personalInfo } from "@/data";

export const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com";

export const defaultMetadata: Metadata = {
  title: {
    default: `${personalInfo.name} - ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.summary,
  keywords: [
    "Full Stack Developer",
    "Machine Learning",
    "AI Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: personalInfo.name, url: baseUrl }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.summary,
    siteName: personalInfo.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.summary,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export function generateProjectMetadata(project: {
  title: string;
  description: string;
  slug: string;
}): Metadata {
  const url = `${baseUrl}/projects/${project.slug}`;
  
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      type: "article",
      url,
      title: project.title,
      description: project.description,
      siteName: personalInfo.name,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
    },
  };
}
