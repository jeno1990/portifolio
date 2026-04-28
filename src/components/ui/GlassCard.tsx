import { ReactNode } from "react";
import { cn } from "@/lib/utils"; // Assuming we will create this

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl overflow-hidden",
        "before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
        className
      )}
    >
      {/* Subtle top glare */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      {children}
    </div>
  );
}
