"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { GlassCard } from "@/components/ui/GlassCard";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto relative z-10 w-full" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50 tracking-tight uppercase">
          Experience
        </h2>
      </motion.div>

      <div className="flex flex-col gap-8">
        {resumeData.experience.map((exp, index) => (
          <motion.div
            key={exp.id}
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
                  delay: 0.1 // Slight delay for smoother stagger when scrolling fast
                } 
              }
            }}
          >
            <GlassCard className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 group">
              <div className="flex items-start md:items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <Briefcase size={28} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{exp.role}</h3>
                  <p className="text-xl text-foreground/70 font-medium">{exp.company}</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 text-foreground/50 text-sm md:text-base md:items-end">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{exp.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
