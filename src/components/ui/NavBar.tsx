"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
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
    <>
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

      <motion.button
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        onClick={() => handleNavigate("contact", router)}
        className="fixed top-6 right-6 z-[100] group inline-flex h-11 items-center gap-2 rounded-full border border-primary/40 bg-background/70 px-4 text-sm font-medium text-foreground backdrop-blur-xl transition-all duration-300 hover:border-primary hover:bg-primary/15 hover:text-primary"
        aria-label="Jump to contact section"
      >
        <Mail size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
        <span className="hidden sm:inline">Contact Me</span>
      </motion.button>
    </>
  );
}
