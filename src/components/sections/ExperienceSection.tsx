"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

export function ExperienceSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10 w-full" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-[10vw] md:text-7xl font-bold text-white/10 uppercase tracking-tighter -ml-2 mb-8 select-none pointer-events-none">
          Experience
        </h2>
      </motion.div>

      <div className="flex flex-col gap-2 relative">
        {resumeData.experience.map((exp, index) => {
          const isHovered = hoveredId === exp.id;
          const isFaded = hoveredId !== null && hoveredId !== exp.id;

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative cursor-default py-6 px-4 md:px-8 -mx-4 md:-mx-8 rounded-2xl transition-all duration-500 ease-out flex flex-col lg:flex-row lg:items-center justify-between hover:bg-white/[0.02]"
              style={{
                opacity: isFaded ? 0.3 : 1,
                transform: isHovered ? "translateX(16px)" : "translateX(0)",
              }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-12 w-full">
                
                {/* Date */}
                <div className="text-foreground/40 font-mono text-xs md:text-sm shrink-0 w-32 tracking-wider">
                  {exp.duration}
                </div>

                {/* Role & Company */}
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className={`text-2xl md:text-4xl font-light tracking-tight transition-colors duration-500 ${isHovered ? 'text-primary drop-shadow-[0_0_15px_rgba(14,165,233,0.4)]' : 'text-foreground'}`}>
                    {exp.role}
                  </span>
                  <span className="text-white/20 font-light text-xl">@</span>
                  <span className={`text-xl md:text-3xl font-medium tracking-tight transition-colors duration-500 ${isHovered ? 'text-white' : 'text-foreground/50'}`}>
                    {exp.company}
                  </span>
                </div>

              </div>

              {/* Tags (Right side) - Hidden by default, smooth slide-in on hover */}
              {/* @ts-ignore */}
              {exp.relatedProjects && exp.relatedProjects.length > 0 && (
                <div 
                  className={`flex items-center gap-3 mt-4 lg:mt-0 shrink-0 transition-all duration-500 ease-out
                    ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none lg:absolute lg:right-8'}
                  `}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    {/* @ts-ignore */}
                    {exp.relatedProjects.map((project, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1.5 text-xs font-semibold tracking-wide text-primary/80 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-md"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
