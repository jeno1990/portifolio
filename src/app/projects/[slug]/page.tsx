import { resumeData } from "@/data/resume";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { StarryBackground } from "@/components/ui/StarryBackground";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all projects
export function generateStaticParams() {
  return resumeData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = resumeData.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col pt-12 pb-24 px-6 md:px-12 lg:px-24">
      <StarryBackground />
      
      {/* Navigation */}
      <div className="w-full max-w-5xl mx-auto mb-16 relative z-10">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back</span>
        </Link>
      </div>

      {/* Title */}
      <div className="w-full max-w-5xl mx-auto text-center mb-24 relative z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-foreground flex items-center justify-center gap-6">
          {project.title}
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-white transition-colors">
            <ExternalLink size={40} className="md:w-12 md:h-12" />
          </a>
        </h1>
      </div>

      {/* Content Columns */}
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-16 relative z-10 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-16">
          <h3 className="text-xl font-bold text-foreground/80">Year</h3>
          <p className="text-lg text-foreground/60">{project.year}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-16">
          <h3 className="text-xl font-bold text-foreground/80">Tech & Technique</h3>
          <p className="text-lg text-foreground/60">{project.techStack}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-16">
          <h3 className="text-xl font-bold text-foreground/80">Description</h3>
          <p className="text-lg text-foreground/60 leading-relaxed">
            {project.description}
          </p>
        </div>

        {project.role && (
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-16">
            <h3 className="text-xl font-bold text-foreground/80">My Role</h3>
            <p className="text-lg text-foreground/60 leading-relaxed">
              {project.role}
            </p>
          </div>
        )}
      </div>

      {/* Showcase Image(s) */}
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12 relative z-10">
        {/* @ts-ignore - images property might not exist on all projects yet */}
        {(project.images && project.images.length > 0 ? project.images : [project.image]).map((imgSrc: string, idx: number) => (
          <div key={idx} className="w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-background/50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={imgSrc} 
              alt={`${project.title} screenshot ${idx + 1}`} 
              className="w-full h-full object-cover object-top"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
