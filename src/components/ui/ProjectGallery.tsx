"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col relative z-10 space-y-12 pb-32">
      {images.map((imgSrc, idx) => (
        <GalleryCard key={idx} imgSrc={imgSrc} idx={idx} title={title} total={images.length} />
      ))}
    </div>
  );
}

function GalleryCard({ imgSrc, idx, title, total }: { imgSrc: string; idx: number; title: string, total: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      className="w-full h-[80vh] md:h-[90vh] sticky top-24 flex items-center justify-center p-4"
      style={{
        zIndex: 10 + idx, // Ensure later cards stack on top
      }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-full relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group cursor-crosshair bg-background/80 backdrop-blur-3xl"
      >
        {/* Subtle glass reflection overlay */}
        <div className="absolute inset-0 pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/10 to-transparent mix-blend-overlay" />
        
        {/* Counter badge */}
        <div className="absolute top-6 right-6 z-20 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white/70 text-sm font-mono tracking-widest pointer-events-none">
          {idx + 1} / {total}
        </div>

        {/* Blurred background image layer to fill empty spaces nicely */}
        <div className="absolute inset-0 z-0 pointer-events-none blur-3xl scale-110 opacity-30">
          <Image 
            src={imgSrc} 
            alt="" 
            fill 
            className="object-cover"
            aria-hidden="true"
          />
        </div>

        {/* Main Image containing its aspect ratio */}
        <div className="relative z-10 w-full h-full p-2 md:p-8 transition-transform duration-700 ease-out group-hover:scale-[1.02] drop-shadow-2xl">
          <Image 
            src={imgSrc} 
            alt={`${title} screenshot ${idx + 1}`} 
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            priority={idx === 0}
          />
        </div>
      </motion.div>
    </div>
  );
}
