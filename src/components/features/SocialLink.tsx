import Link from "next/link";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

export function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <Link
      href={href}
      className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary transition-colors duration-300"
    >
      {icon}
    </Link>
  );
}
