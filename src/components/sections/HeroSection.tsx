"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { personalInfo, experience } from "@/data";
import { SocialLink } from "@/components/features/SocialLink";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "ML Engineer",
  "Mobile App Developer",
  "Backend Developer",
  "Problem Solver",
];

export function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Get current company from experience data
  const currentCompany = experience[0]?.company || "Arifone";

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = isDeleting ? 500 : 2000;

    if (!isDeleting && displayedText === currentRole) {
      setTimeout(() => setIsDeleting(true), pauseDuration);
      return;
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentRole.substring(0, displayedText.length - 1)
          : currentRole.substring(0, displayedText.length + 1),
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 py-20"
      id="home"
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[auto_1fr] gap-12 lg:gap-20 items-center">
        {/* Left Side - Social Links */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="hidden lg:flex flex-col gap-6 items-center"
        >
          <div className="flex flex-col gap-6">
            <SocialLink
              href={`https://${personalInfo.github}`}
              icon={<FaGithub size={22} />}
            />
            <SocialLink
              href={`https://${personalInfo.linkedin}`}
              icon={<FaLinkedin size={22} />}
            />
            <SocialLink
              href={`mailto:${personalInfo.email}`}
              icon={<Mail size={22} />}
            />
          </div>
          <div className="w-[2px] h-24 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <p className="text-primary font-mono text-sm md:text-base">
              Hi, my name is
            </p>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              {personalInfo.name.split(" ")[0]}.
            </h1>
          </motion.div>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-16 md:h-20 flex items-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground/60">
              <span className="font-mono text-primary mr-2">&gt;</span>
              {displayedText}
              <span className="inline-block w-[3px] h-8 md:h-10 bg-primary ml-1 animate-pulse" />
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl"
          >
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
              I'm a software engineer who loves building elegant solutions to
              complex problems. Specializing in full-stack development and
              machine learning, I turn ideas into reality. Currently working at{" "}
              <span className="text-primary font-semibold">
                {currentCompany}
              </span>
              .
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-primary px-8 font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50"
            >
              <span className="flex items-center gap-2">
                View My Work
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </button>

            <button
              onClick={() => window.open("/files/resume.pdf", "_blank")}
              className="group inline-flex h-12 items-center justify-center rounded-md border-2 border-primary px-8 font-medium text-primary transition-all duration-300 hover:bg-primary/10"
            >
              <span className="flex items-center gap-2">
                <FileText size={18} />
                Resume
              </span>
            </button>
          </motion.div>

          {/* Mobile Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex lg:hidden gap-4 pt-4"
          >
            <SocialLink
              href={`https://${personalInfo.github}`}
              icon={<FaGithub size={20} />}
            />
            <SocialLink
              href={`https://${personalInfo.linkedin}`}
              icon={<FaLinkedin size={20} />}
            />
            <SocialLink
              href={`mailto:${personalInfo.email}`}
              icon={<Mail size={20} />}
            />
          </motion.div>

          {/* Code Decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="hidden md:block pt-8"
          >
            <div className="font-mono text-xs text-foreground/30 space-y-1">
              <div>
                <span className="text-primary">const</span> developer = {"{"}
              </div>
              <div className="pl-4">
                name:{" "}
                <span className="text-primary/80">
                  "{personalInfo.name.split(" ")[0]}"
                </span>
                ,
              </div>
              <div className="pl-4">
                skills: [<span className="text-primary/80">"Full Stack"</span>,{" "}
                <span className="text-primary/80">"ML"</span>,{" "}
                <span className="text-primary/80">"Cloud"</span>],
              </div>
              <div className="pl-4">
                passion:{" "}
                <span className="text-primary/80">
                  "Building great products"
                </span>
              </div>
              <div>{"}"}</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-foreground/40 uppercase tracking-widest font-mono">
          Scroll
        </span>
        <div className="w-[2px] h-12 bg-foreground/20 relative overflow-hidden">
          <motion.div
            className="w-full h-1/2 bg-primary absolute top-0"
            animate={{ y: [0, 24, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
