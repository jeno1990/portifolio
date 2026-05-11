"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lora } from "next/font/google";
import { projects } from "@/data";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const teaserFont = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export function SelectedProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  const previewProject = hoveredProject
    ? projects.find((p) => p.id === hoveredProject)
    : null;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10 w-full" id="projects">
      <SectionHeader title="Projects" />

      <div className="flex flex-col relative w-full">
        {/* Left Side: Project List */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {displayedProjects.map((project, index) => {
            const isHovered = hoveredProject === project.id;
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group border-b border-white/10 last:border-b-0 py-8 relative"
              >
                <Link href={`/projects/${project.slug}`} className="block w-full">
                  <div className="flex items-start gap-4">
                    <span className="text-sm font-medium text-foreground/40 mt-2 font-mono">
                      _{String(index + 1).padStart(2, '0')}.
                    </span>
                    <div className="flex flex-col">
                      <h3 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter transition-colors duration-300 flex items-center gap-4 ${isHovered ? 'text-primary drop-shadow-[0_0_10px_rgba(14,165,233,0.5)]' : 'text-foreground/50 group-hover:text-foreground/70'}`}>
                        {project.title.split(' ')[0]} {project.title.split(' ')[1] || ''} 
                        <ExternalLink className={`opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ${isHovered ? 'text-white' : ''}`} size={32} />
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-3 mt-4 text-sm text-foreground/40 font-medium">
                        {project.techStack?.split(', ').map((tech, i, arr) => (
                          <div key={tech} className="flex items-center gap-3">
                            <span>{tech}</span>
                            {i < arr.length - 1 && <span className="w-1.5 h-1.5 rounded-full bg-foreground/20" />}
                          </div>
                        ))}
                      </div>

                      <p
                        className={`lg:hidden mt-4 text-[0.9375rem] leading-snug text-foreground/65 line-clamp-2 transition-colors duration-300 ${teaserFont.className} ${isHovered ? "text-foreground/85" : ""}`}
                      >
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}

          {/* See More / Show Less Button */}
          {projects.length > 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center pt-8"
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-foreground/60 hover:text-primary border border-white/10 hover:border-primary/30 rounded-full transition-all duration-300"
              >
                <span>{showAll ? "Show Less" : `See More Projects (${projects.length - 3})`}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                />
              </button>
            </motion.div>
          )}
        </div>

        {/* Right Side: Image preview + teaser (large screens) */}
        <div className="hidden lg:block absolute right-0 top-0 w-5/12 h-full pointer-events-none">
          <div className="sticky top-32 w-full flex flex-col gap-4">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-white/[0.02]">
              <AnimatePresence mode="wait">
                {previewProject && (
                  <motion.div
                    key={previewProject.id}
                    initial={{ opacity: 0, scale: 0.97, x: 16 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.97, x: -12 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={previewProject.image}
                      alt={previewProject.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 0vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              {previewProject && (
                <motion.div
                  key={`${previewProject.id}-caption`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="rounded-2xl border border-white/[0.07] bg-background/40 px-5 py-4 backdrop-blur-md"
                >
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary/90 mb-2">
                    About
                  </p>
                  <p
                    className={`text-[0.95rem] sm:text-base leading-snug text-foreground/80 line-clamp-2 ${teaserFont.className}`}
                  >
                    {previewProject.subtitle}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
