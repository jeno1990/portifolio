"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Project page error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-black text-foreground/20">Error</h1>
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Failed to Load Project
          </h2>
          <p className="text-foreground/60">
            There was a problem loading this project.
          </p>
        </div>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={reset}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/#projects"
            className="px-6 py-3 border border-foreground/20 rounded-full font-medium hover:bg-foreground/5 transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
