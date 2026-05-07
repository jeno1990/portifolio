import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        <h1 className="text-8xl md:text-[12rem] font-black text-foreground/20">404</h1>
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Project Not Found
          </h2>
          <p className="text-lg text-foreground/60">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            View All Projects
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 border border-foreground/20 rounded-full font-medium hover:bg-foreground/5 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
