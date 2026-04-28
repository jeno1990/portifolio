"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HorizontalScrollContainerProps {
  children: React.ReactNode;
  title: string;
}

export function HorizontalScrollContainer({ children, title }: HorizontalScrollContainerProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Section Title Background */}
        <div className="absolute top-20 left-10 text-[12vw] font-bold text-white/5 whitespace-nowrap pointer-events-none select-none -z-10">
          {title}
        </div>
        
        <motion.div style={{ x }} className="flex gap-10 px-24 pb-10">
          {children}
        </motion.div>
      </div>
    </section>
  );
}
