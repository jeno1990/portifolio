"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Mail, User, MessageSquare, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate sending (replace with actual email service like EmailJS, SendGrid, etc.)
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto relative z-10 w-full" id="contact">
      <SectionHeader title="Get In Touch" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Card Container */}
        <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-3xl p-8 md:p-12">
          
          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-medium text-center text-foreground mb-8">
            Send Me a Message
          </h3>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm text-foreground/60">
                  <User size={16} />
                  <span>Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  required
                  className="w-full bg-transparent border-b border-white/10 py-3 px-1 text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm text-foreground/60">
                  <Mail size={16} />
                  <span>Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  required
                  className="w-full bg-transparent border-b border-white/10 py-3 px-1 text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm text-foreground/60">
                <MessageSquare size={16} />
                <span>Message</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                required
                rows={5}
                className="w-full bg-transparent border-b border-white/10 py-3 px-1 text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="group relative px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold uppercase tracking-wider text-sm hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="flex items-center gap-2">
                  {status === "sending" ? "Sending..." : status === "success" ? "Sent!" : "Send Message"}
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-4 text-sm text-foreground/40">Or connect with me on</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6">
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-primary/30 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} className="text-foreground/60 group-hover:text-primary transition-colors" />
            </a>

            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-primary/30 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <FaGithub size={20} className="text-foreground/60 group-hover:text-primary transition-colors" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-primary/30 transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail size={20} className="text-foreground/60 group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
