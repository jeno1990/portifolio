"use client";

import { resumeData } from "@/data/resume";
import { GlassCard } from "@/components/ui/GlassCard";
import { motion } from "framer-motion";
import { GraduationCap, Award, HeartHandshake } from "lucide-react";

export function SkillsEducationSection() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10" id="more">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-[10vw] md:text-7xl font-bold text-white/10 uppercase tracking-tighter -ml-2 mb-8 select-none pointer-events-none">
          More
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Education */}
          <GlassCard className="p-6 h-full">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-primary" />
              <h3 className="text-xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {resumeData.education.map((edu) => (
                <div key={edu.id} className="relative pl-4 border-l-2 border-primary/30">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                  <h4 className="font-semibold text-foreground/90">{edu.degree}</h4>
                  <p className="text-sm text-primary/80 my-1">{edu.institution}</p>
                  <p className="text-xs text-foreground/50 mb-2">{edu.duration} | {edu.gpa}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Certifications */}
          <GlassCard className="p-6 h-full">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-primary" />
              <h3 className="text-xl font-bold">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {resumeData.certificates.map((cert, i) => (
                <li key={i} className="flex gap-3 text-sm text-foreground/80">
                  <span className="text-primary mt-0.5">•</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* Volunteering */}
          <GlassCard className="p-6 h-full">
            <div className="flex items-center gap-3 mb-6">
              <HeartHandshake className="text-primary" />
              <h3 className="text-xl font-bold">Volunteering</h3>
            </div>
            <div className="space-y-6">
              {resumeData.volunteer.map((vol) => (
                <div key={vol.id}>
                  <h4 className="font-semibold text-foreground/90 text-sm">{vol.role}</h4>
                  <p className="text-xs text-primary/80 my-1">{vol.organization}</p>
                  <p className="text-xs text-foreground/60 leading-relaxed mt-2">{vol.description}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </motion.div>
    </section>
  );
}
