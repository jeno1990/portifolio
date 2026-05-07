"use client";

import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsEducationSection } from "@/components/sections/SkillsEducationSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { SelectedProjectsSection } from "@/components/sections/SelectedProjectsSection";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <TechStackSection />
      
      <div id="experience">
        <ExperienceSection />
      </div>
      
      <SelectedProjectsSection />
      <SkillsEducationSection />
    </main>
  );
}
