"use client";

import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { siteConfig } from "@/config/site.config";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  
  const { active, scrolled, handleNavigate } = useScrollSpy({
    navItems: siteConfig.nav,
    pathname,
  });

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[100]"
    >
      <nav 
        className={`flex items-center gap-1 p-1.5 rounded-full border border-white/10 transition-all duration-300 ${
          scrolled 
            ? "bg-background/60 backdrop-blur-2xl shadow-2xl shadow-black/50" 
            : "bg-background/20 backdrop-blur-lg"
        }`}
      >
        {siteConfig.nav.map((item) => (
          <button
            key={item.name}
            onClick={() => handleNavigate(item.id, router)}
            className={`relative px-4 py-2 text-sm md:text-base font-medium rounded-full transition-colors outline-none ${
              active === item.id 
                ? "text-primary-foreground" 
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            {active === item.id && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-primary/80 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{item.name}</span>
          </button>
        ))}
      </nav>
    </motion.div>
  );
}
