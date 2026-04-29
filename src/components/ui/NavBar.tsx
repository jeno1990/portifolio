"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { name: "Home", id: "home" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "More", id: "more" },
];

export function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const isClickScrolling = useRef(false);
  const clickScrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Determine initial active state based on hash if present
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.substring(1);
      if (navItems.some(i => i.id === hash)) {
        setActive(hash);
      }
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (pathname !== "/" || isClickScrolling.current) return;

      const sections = navItems.map(item => ({
        id: item.id,
        el: document.getElementById(item.id)
      }));
      
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const { id, el } = sections[i];
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (top <= scrollPosition) {
            setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavigate = (id: string) => {
    setActive(id);
    isClickScrolling.current = true;
    
    if (clickScrollTimeout.current) clearTimeout(clickScrollTimeout.current);
    clickScrollTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);

    if (pathname === "/") {
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${id === "home" ? "" : id}`);
    }
  };

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
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleNavigate(item.id)}
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
