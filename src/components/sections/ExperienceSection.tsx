"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { experience } from "@/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ExperienceSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10 w-full" id="experience">
      <SectionHeader title="Experience" />

      <div className="flex flex-col gap-10">
        {experience.map((exp, index) => {
          const isHovered = hoveredId === exp.id;

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="space-y-3 group"
            >
              {/* Company + Duration */}
              <div className="flex items-center gap-3 text-xs md:text-sm uppercase tracking-wider text-foreground/40 font-semibold">
                <span>{exp.company}</span>
                <span className="text-foreground/20">•</span>
                <span className="font-mono normal-case">{exp.duration}</span>
              </div>

              {/* Role */}
              <h3 className="text-xl md:text-2xl font-medium text-foreground/70 group-hover:text-foreground transition-colors duration-300">
                {exp.role}
              </h3>

              {/* Location + Projects */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="text-sm text-foreground/50">{exp.location}</span>
                
                {exp.relatedProjects && exp.relatedProjects.length > 0 && (
                  <>
                    <span className="text-foreground/20">•</span>
                    <div className="flex flex-wrap gap-2">
                      {exp.relatedProjects.map((project, i) => (
                        <span
                          key={i}
                          className={`text-xs px-2 py-1 rounded transition-all duration-300 ${
                            isHovered
                              ? 'bg-primary/10 text-primary border border-primary/20'
                              : 'bg-foreground/5 text-foreground/40 border border-transparent'
                          }`}
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
