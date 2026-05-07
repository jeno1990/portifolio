"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function SelectedProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10 w-full" id="projects">
      <SectionHeader title="Projects" />

      <div className="flex flex-col relative w-full">
        {/* Left Side: Project List */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {projects.map((project, index) => {
            const isHovered = hoveredProject === project.id;
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
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
                        {/* We use just the first two words for the big display based on the screenshot, 
                            or we can use the full title if it's short like 'Electro EV', 'Epikcart', 'Resume Roaster' */}
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
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Right Side: Image Preview (Only visible on large screens) */}
        <div className="hidden lg:block absolute right-0 top-0 w-5/12 h-full pointer-events-none">
          <div className="sticky top-32 w-full aspect-[4/3] rounded-lg overflow-hidden">
            <AnimatePresence>
              {hoveredProject && (
                <motion.div
                  key={hoveredProject}
                  initial={{ opacity: 0, scale: 0.95, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, x: 20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full rounded-xl overflow-hidden"
                >
                  <Image
                    src={projects.find(p => p.id === hoveredProject)?.image || ''}
                    alt="Project Preview"
                    fill
                    className="object-cover object-top shadow-2xl"
                    sizes="(max-width: 1024px) 0vw, 40vw"
                  />
                  {/* Overlay gradient to blend it slightly with the dark background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent rounded-xl border border-white/10" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
