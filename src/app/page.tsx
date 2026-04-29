"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsEducationSection } from "@/components/sections/SkillsEducationSection";
import { resumeData } from "@/data/resume";
import Link from "next/link";

function HeroText() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1500 }} className="w-full flex justify-center relative z-10 my-8">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-4xl relative group cursor-default"
      >
        {/* Cylinder Glass Background */}
        <div 
          className="absolute inset-0 rounded-[4rem] md:rounded-[6rem] border border-white/20 bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] pointer-events-none"
        />
        
        {/* Glass Reflections (Curvature effect) */}
        <div className="absolute inset-y-0 left-1/4 w-1/4 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[4rem] md:rounded-[6rem]" />
        <div className="absolute inset-y-0 right-1/4 w-1/6 bg-gradient-to-l from-transparent via-white/10 to-transparent skew-x-[-12deg] opacity-50 rounded-[4rem] md:rounded-[6rem] pointer-events-none" />

        {/* Content (Pushed forward in 3D space) */}
        <div 
          className="relative z-10 space-y-6 p-10 md:p-16 flex flex-col items-start text-left"
          style={{ transform: "translateZ(60px)" }}
        >
          <h2 className="text-xl md:text-2xl text-foreground/80 font-medium tracking-wide drop-shadow-md flex items-center gap-3">
            <span className="w-8 h-[2px] bg-primary rounded-full"></span>
            Hi, I&apos;m Nigatu
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground/80 to-foreground/40 py-2 drop-shadow-2xl leading-[1.1]">
            {resumeData.personalInfo.title.split('&').map((part, i, arr) => (
              <span key={i}>
                {part.trim()}
                {i < arr.length - 1 && <span className="text-primary block md:inline md:mx-4">&</span>}
              </span>
            ))}
          </h1>
          <div className="relative mt-8">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/80 to-transparent rounded-full"></div>
            <p className="text-sm md:text-base text-foreground/60 max-w-2xl font-mono leading-loose pl-6 py-1 tracking-tight">
              {resumeData.personalInfo.summary}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

import { TechStackSection } from "@/components/sections/TechStackSection";
import { SelectedProjectsSection } from "@/components/sections/SelectedProjectsSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pb-24">
        <div className="max-w-5xl mx-auto w-full z-10 flex flex-col items-center text-center">
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
              <SocialLink href={`https://${resumeData.personalInfo.github}`} icon={<FaGithub size={20} />} />
              <SocialLink href={`https://${resumeData.personalInfo.linkedin}`} icon={<FaLinkedin size={20} />} />
              <SocialLink href={`mailto:${resumeData.personalInfo.email}`} icon={<Mail size={20} />} />
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

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary transition-colors duration-300"
    >
      {icon}
    </Link>
  );
}
