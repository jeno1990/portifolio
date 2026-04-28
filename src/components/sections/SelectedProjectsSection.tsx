"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "@/data/resume";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function SelectedProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10 w-full" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 flex items-center gap-4"
      >
        {/* Decorative asterisk-like icon from screenshot */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
          <path d="M12 2v20M17 5l-10 14M22 12H2M19 19L5 5"/>
        </svg>
        <h2 className="text-xl md:text-2xl font-semibold tracking-widest uppercase text-foreground">
          Selected Projects
        </h2>
      </motion.div>

      <div className="flex flex-col relative w-full">
        {/* Left Side: Project List */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {resumeData.projects.map((project, index) => {
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
                      <h3 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter transition-colors duration-300 flex items-center gap-4 ${isHovered ? 'text-green-500' : 'text-foreground/20 group-hover:text-foreground/40'}`}>
                        {project.title.split(' ')[0]} {project.title.split(' ')[1] || ''} 
                        {/* We use just the first two words for the big display based on the screenshot, 
                            or we can use the full title if it's short like 'Electro EV', 'Epikcart', 'Resume Roaster' */}
                        <ExternalLink className={`opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ${isHovered ? 'text-white' : ''}`} size={32} />
                      </h3>
                      
                      <div className="flex items-center gap-3 mt-4 text-sm text-foreground/40 font-medium">
                        {project.techStack?.split(', ').slice(0, 3).map((tech, i) => (
                          <div key={tech} className="flex items-center gap-3">
                            <span>{tech}</span>
                            {i < 2 && <span className="w-1.5 h-1.5 rounded-full bg-foreground/20" />}
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
                  className="absolute inset-0 w-full h-full"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={resumeData.projects.find(p => p.id === hoveredProject)?.image || ''}
                    alt="Project Preview"
                    className="w-full h-full object-cover object-top rounded-xl shadow-2xl border border-white/10"
                  />
                  {/* Overlay gradient to blend it slightly with the dark background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent rounded-xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
