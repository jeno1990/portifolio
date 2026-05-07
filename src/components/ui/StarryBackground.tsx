"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function StarryBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate random stars only on the client to avoid hydration mismatch
    // Reduced from 150 to 50 for better performance
    const generatedStars: Star[] = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // Random X position percentage
      y: Math.random() * 100, // Random Y position percentage
      size: Math.random() * 3 + 1, // Random size between 1px and 4px
      duration: Math.random() * 30 + 15, // Float duration between 15s and 45s
      delay: Math.random() * -30, // Random negative delay so they start at different points
    }));
    setStars(generatedStars);
  }, []);

  if (stars.length === 0) {
    // Render a plain black background before hydration
    return <div className="fixed inset-0 z-[-1] bg-[#020202]" />;
  }

  return (
    <div className="fixed inset-0 z-[-1] bg-[#020202] overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white will-change-transform"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            boxShadow: `0 0 ${star.size + 2}px rgba(255, 255, 255, 0.6)`,
          }}
          animate={{
            y: ["0%", "-100vh"],
            opacity: [0.1, 0.8, 0.1],
          }}
          transition={{
            y: {
              duration: star.duration,
              repeat: Infinity,
              ease: "linear",
            },
            opacity: {
              duration: star.duration / 2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
            },
            delay: star.delay,
          }}
        />
      ))}
      {/* Subtle background glow to add depth */}
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-[120px]" />
    </div>
  );
}
