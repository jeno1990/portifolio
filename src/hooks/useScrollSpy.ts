import { useState, useEffect, useRef } from "react";

interface NavItem {
  readonly name: string;
  readonly id: string;
}

interface UseScrollSpyOptions {
  navItems: readonly NavItem[];
  pathname: string;
  offsetFraction?: number;
}

export function useScrollSpy({ navItems, pathname, offsetFraction = 1 / 3 }: UseScrollSpyOptions) {
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
      
      const scrollPosition = window.scrollY + window.innerHeight * offsetFraction;

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
  }, [pathname, navItems, offsetFraction]);

  const handleNavigate = (id: string, router: any) => {
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

  return {
    active,
    scrolled,
    handleNavigate,
  };
}
