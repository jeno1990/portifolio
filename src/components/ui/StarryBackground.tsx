"use client";

import { motion } from "framer-motion";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  twinkleDuration: number;
  delay: number;
  opacity: number;
}

function seeded(index: number) {
  const x = Math.sin(index * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

const stars: Star[] = Array.from({ length: 90 }).map((_, i) => {
  const base = i + 1;
  return {
    id: i,
    x: seeded(base) * 100,
    y: seeded(base + 200) * 100,
    size: seeded(base + 400) * 2.2 + 0.8,
    twinkleDuration: seeded(base + 600) * 4 + 3.5,
    delay: seeded(base + 800) * -6,
    opacity: seeded(base + 1000) * 0.45 + 0.2,
  };
});

export function StarryBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#03050a]">
      {/* Sky gradient + subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(28,34,52,0.45),_rgba(3,5,10,0.92)_45%,_#03050a_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_transparent_35%,_rgba(0,0,0,0.45)_100%)]" />

      {/* Aurora layers */}
      <motion.div
        className="absolute -top-40 -left-28 h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-[120px]"
        animate={{ x: [0, 40, -20, 0], y: [0, 20, -10, 0], opacity: [0.12, 0.2, 0.1, 0.12] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/4 -right-32 h-[34rem] w-[34rem] rounded-full bg-cyan-400/10 blur-[130px]"
        animate={{ x: [0, -50, 20, 0], y: [0, -20, 12, 0], opacity: [0.1, 0.18, 0.08, 0.1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 left-1/3 h-[26rem] w-[26rem] rounded-full bg-emerald-300/6 blur-[120px]"
        animate={{ x: [0, -35, 18, 0], y: [0, -15, 10, 0], opacity: [0.08, 0.14, 0.06, 0.08] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Twinkling stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size + 3}px rgba(255, 255, 255, 0.45)`,
          }}
          animate={{
            opacity: [star.opacity * 0.6, star.opacity * 1.3, star.opacity * 0.6],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: star.twinkleDuration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}

      {/* Occasional meteor streaks */}
      {[0, 1, 2].map((meteor) => (
        <motion.div
          key={meteor}
          className="absolute h-[1px] w-32 bg-gradient-to-r from-white/80 to-transparent"
          style={{
            top: `${18 + meteor * 14}%`,
            left: `${65 + meteor * 7}%`,
            rotate: "-25deg",
          }}
          animate={{
            x: [0, -220],
            y: [0, 120],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            repeatDelay: 8 + meteor * 3,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
