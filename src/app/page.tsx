"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsEducationSection } from "@/components/sections/SkillsEducationSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { SelectedProjectsSection } from "@/components/sections/SelectedProjectsSection";
import { HeroText } from "@/components/features/HeroText";
import { SocialLink } from "@/components/features/SocialLink";
import { personalInfo } from "@/data";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pb-24" id="home">
        <div className="max-w-5xl mx-auto w-full z-10 flex flex-col items-center text-center mt-20 md:mt-24">
          <HeroText />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-12 flex flex-wrap gap-4 justify-center"
          >
            <button
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-primary px-8 font-medium text-primary-foreground duration-300 hover:bg-primary/90 outline-none"
            >
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20" />
              </div>
              <span className="flex items-center gap-2">
                <FileText size={18} />
                Explore Portfolio
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            <div className="flex items-center gap-4 px-4">
              <SocialLink href={`https://${personalInfo.github}`} icon={<FaGithub size={20} />} />
              <SocialLink href={`https://${personalInfo.linkedin}`} icon={<FaLinkedin size={20} />} />
              <SocialLink href={`mailto:${personalInfo.email}`} icon={<Mail size={20} />} />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-foreground/40 uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-foreground/20 relative overflow-hidden">
            <motion.div
              className="w-full h-1/2 bg-primary absolute top-0"
              animate={{ y: [0, 48] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      </section>

      <TechStackSection />

      <div id="experience">
        <ExperienceSection />
      </div>
      
      <SelectedProjectsSection />
      <SkillsEducationSection />
    </main>
  );
}
