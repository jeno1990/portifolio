
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 px-6 border-t border-white/5 relative z-10 mt-auto backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
        
        {/* Left Side: Name and Copyright */}
        <div className="flex items-center gap-2 text-sm text-foreground/60 font-medium tracking-wide">
          <span className="font-bold text-foreground">NT</span>
          <span>•</span>
          <span>&copy; {currentYear} Nigatu Tisyano</span>
        </div>

        {/* Built with text */}
        <div className="text-sm text-foreground/50 flex items-center gap-1.5">
          Built with <span className="text-red-500 text-base">❤️</span> using Next.js & Tailwind
        </div>
        
      </div>
    </footer>
  );
}
