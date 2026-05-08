"use client";

import { motion } from "framer-motion";
import { techStackWithIcons } from "@/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TechStackSection() {
  return (
    <section
      className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10 w-full"
      id="skills"
    >
      <SectionHeader title="Skills" />

      <div className="flex flex-col gap-10">
        {techStackWithIcons.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="space-y-3"
          >
            {/* Category Label */}
            <h3 className="text-xs md:text-sm uppercase tracking-wider text-foreground/40 font-semibold">
              {group.category}
            </h3>

            {/* Skills Row */}
            <div className="flex flex-wrap gap-x-6 gap-y-4">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="inline-flex items-center gap-2 group"
                >
                  <skill.icon
                    size={18}
                    className="text-foreground/50 group-hover:text-foreground transition-colors duration-300"
                    style={{ color: skill.color }}
                  />
                  <span className="text-sm md:text-base text-foreground/70 group-hover:text-foreground transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
