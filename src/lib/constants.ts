// Animation constants
export const ANIMATION = {
  durations: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
    verySlow: 1.0,
  },
  easings: {
    easeOut: "easeOut",
    easeIn: "easeIn",
    easeInOut: "easeInOut",
  },
  viewport: {
    once: true,
    margin: "-100px",
  },
} as const;

// Spacing scale (matches Tailwind spacing)
export const SPACING = {
  xs: "0.5rem",    // 8px
  sm: "1rem",      // 16px
  md: "1.5rem",    // 24px
  lg: "2rem",      // 32px
  xl: "3rem",      // 48px
  "2xl": "4rem",   // 64px
  "3xl": "6rem",   // 96px
  "4xl": "8rem",   // 128px
} as const;

// Typography scale
export const TYPOGRAPHY = {
  fontSize: {
    xs: "0.75rem",    // 12px
    sm: "0.875rem",   // 14px
    base: "1rem",     // 16px
    lg: "1.125rem",   // 18px
    xl: "1.25rem",    // 20px
    "2xl": "1.5rem",  // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem",  // 36px
    "5xl": "3rem",     // 48px
    "6xl": "3.75rem",  // 60px
    "7xl": "4.5rem",   // 72px
    "8xl": "6rem",     // 96px
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
} as const;

// Border radius
export const RADIUS = {
  sm: "0.25rem",    // 4px
  md: "0.5rem",     // 8px
  lg: "0.75rem",    // 12px
  xl: "1rem",       // 16px
  "2xl": "1.5rem",  // 24px
  "3xl": "2rem",    // 32px
  full: "9999px",
} as const;

// Z-index layers
export const Z_INDEX = {
  background: -1,
  base: 0,
  dropdown: 10,
  sticky: 20,
  modal: 50,
  navbar: 100,
  tooltip: 200,
} as const;

// Breakpoints (for reference, use Tailwind classes)
export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// StarryBackground config
export const STARRY_BACKGROUND = {
  starCount: 50, // Reduced from 150 for performance
  minDuration: 15,
  maxDuration: 45,
} as const;
