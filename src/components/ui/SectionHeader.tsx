"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  className?: string;
}

export function SectionHeader({ title, className = "" }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-20 ${className}`}
    >
      <h2 className="text-[10vw] md:text-7xl font-bold text-white/10 uppercase tracking-tighter -ml-2 mb-8 select-none pointer-events-none">
        {title}
      </h2>
    </motion.div>
  );
}
