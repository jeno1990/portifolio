"use client";

import { motion } from "framer-motion";
import { techStackWithIcons } from "@/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TechStackSection() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10 w-full" id="skills">
      <SectionHeader title="Skills" />

      <div className="flex flex-col gap-16">
        {techStackWithIcons.map((group) => (
          <motion.div 
            key={group.category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { 
                  duration: 0.6, 
                  ease: "easeOut",
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                } 
              }
            }}
            className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16 lg:gap-24"
          >
            {/* Category Title */}
            <div className="w-full md:w-64 lg:w-72 flex-shrink-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground/80 tracking-tight">
                {group.category}
              </h2>
            </div>
            
            {/* Skills Grid/Flex */}
            <div className="flex flex-wrap gap-x-8 gap-y-6 pt-2 md:pt-4">
              {group.skills.map((skill) => (
                <motion.div 
                  key={skill.name} 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                  }}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <skill.icon 
                    size={24} 
                    className="text-foreground/60 transition-colors duration-300"
                    style={{ color: skill.color }}
                  />
                  <span className="text-lg font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
