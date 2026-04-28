import { resumeData } from "@/data/resume";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 px-6 border-t border-white/5 relative z-10 mt-auto backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Name and Copyright */}
        <div className="flex items-center gap-2 text-sm text-foreground/60 font-medium tracking-wide">
          <span className="font-bold text-foreground">NT</span>
          <span>•</span>
          <span>&copy; {currentYear} Nigatu Tisyano</span>
        </div>

        {/* Center: Built with text */}
        <div className="text-sm text-foreground/50 flex items-center gap-1.5">
          Built with <span className="text-red-500 text-base">❤️</span> using Next.js & Tailwind
        </div>

        {/* Right Side: Social Links */}
        <div className="flex items-center gap-6 text-foreground/50">
          <a 
            href={`https://${resumeData.personalInfo.github}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a 
            href={`https://${resumeData.personalInfo.linkedin}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a 
            href={`mailto:${resumeData.personalInfo.email}`} 
            className="hover:text-foreground transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
        
      </div>
    </footer>
  );
}
