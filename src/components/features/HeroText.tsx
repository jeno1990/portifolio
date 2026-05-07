"use client";

import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { personalInfo } from "@/data";

export function HeroText() {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    
    const xPct = clientX / width - 0.5;
    const yPct = clientY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
    
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0);
  };

  const background = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.15), transparent 80%)`;

  return (
    <div style={{ perspective: 2000 }} className="w-full flex justify-center relative z-10 my-8">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-4xl relative group cursor-default"
      >
        <motion.div 
          className="absolute inset-0 rounded-[3rem] md:rounded-[5rem] pointer-events-none z-0"
          style={{ background }}
        />

        <div 
          className="absolute inset-0 rounded-[3rem] md:rounded-[5rem] border border-white/20 bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-3xl shadow-[inset_0_0_80px_rgba(255,255,255,0.05),0_30px_60px_rgba(0,0,0,0.6)] pointer-events-none"
        />
        
        <div className="absolute inset-y-0 left-1/4 w-1/4 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[3rem] md:rounded-[5rem] mix-blend-overlay" />
        <div className="absolute inset-y-0 right-1/4 w-1/6 bg-gradient-to-l from-transparent via-white/20 to-transparent skew-x-[-12deg] opacity-60 rounded-[3rem] md:rounded-[5rem] pointer-events-none mix-blend-overlay" />

        <div className="absolute inset-0 rounded-[3rem] md:rounded-[5rem] shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)] pointer-events-none" />

        <div 
          className="relative z-10 space-y-5 p-8 md:p-14 flex flex-col items-start text-left"
          style={{ transform: "translateZ(80px)" }}
        >
          <h2 className="text-lg md:text-xl text-foreground/80 font-medium tracking-wide drop-shadow-md flex items-center gap-3">
            <span className="w-8 h-[2px] bg-primary rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]"></span>
            Hi, I&apos;m Nigatu
          </h2>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/30 py-1 drop-shadow-2xl leading-[1.1]">
            {personalInfo.title.split('&').map((part, i, arr) => (
              <span key={i}>
                {part.trim()}
                {i < arr.length - 1 && <span className="text-primary block md:inline md:mx-4 drop-shadow-[0_0_15px_rgba(14,165,233,0.8)]">&</span>}
              </span>
            ))}
          </h1>
          <div className="relative mt-4">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-transparent rounded-full shadow-[0_0_15px_rgba(14,165,233,0.5)]"></div>
            <p className="text-sm md:text-base text-foreground/70 max-w-2xl font-mono leading-relaxed pl-6 py-1 tracking-tight drop-shadow-md">
              {personalInfo.summary}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
