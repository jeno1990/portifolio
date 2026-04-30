"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Maximize2, X } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Achievements Data
const achievements = [
  {
    id: "dsa",
    title: "Mastering Algorithms & Data Structures",
    subtitle: "800+ Problems Solved",
    description: "Since 2021, I have rigorously trained in competitive programming, solving over 800 complex algorithmic challenges across LeetCode, HackerRank, and Codeforces. This dedication not only sharpened my problem-solving skills but also earned me multiple badges and a top ranking.",
    extraInfo: "This experience directly enabled me to give back to the community by teaching Data Structures and Algorithms to high school and university students at the A2SV Camp.",
    image: "/projects/leetcode.png", 
    link: "https://leetcode.com/u/jenoP/",
    linkText: "View LeetCode Profile",
  },
  {
    id: "hackathon",
    title: "Generative AI for Africa Hackathon",
    subtitle: "Project Mentor & Organizer",
    description: "Organized the AI for Impact Hackathon in collaboration with the Ministry of Innovation of Ethiopia and Addis Ababa University. I played a key role in mentoring teams and guiding their AI-driven solutions.",
    extraInfo: "Successfully mentored a team that ranked Top 40 out of over 800 teams from 47 different African countries.",
    image: "/projects/hackathon.png", 
  },
  {
    id: "certifications",
    title: "Advanced Machine Learning Specializations",
    subtitle: "Professional Certifications",
    description: "Completed rigorous coursework in Supervised Machine Learning, Regression and Classification, Advanced Learning Algorithms, and Back End Development & APIs.",
    extraInfo: "These certifications solidify my foundational knowledge in both modern AI architecture and robust backend systems.",
    image: "/projects/course-era-deeplearning.png", 
  }
];

export default function AchievementsPage() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto relative z-10 flex flex-col items-center">
      
      {/* Back to Home Navigation */}
      <div className="w-full flex justify-start mb-16">
        <Link 
          href="/#more" 
          className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to home</span>
        </Link>
      </div>

      {/* Header */}
      <div className="text-center mb-24 max-w-3xl">
        <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Milestones & Victories</p>
        <h1 className="text-5xl md:text-7xl font-black mb-6">
          My <span className="text-primary">Achievements</span>
        </h1>
        <p className="text-foreground/60 text-lg md:text-xl">
          From code to peaks, every achievement tells a story of dedication, perseverance, and continuous learning.
        </p>
      </div>

      {/* Achievement Cards */}
      <div className="w-full space-y-16">
        {achievements.map((item, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <GlassCard 
              key={item.id} 
              className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} overflow-hidden group min-h-[450px]`}
            >
              {/* Corner Anchored Image Section */}
              <div className="w-full md:w-1/2 min-h-[300px] relative bg-gradient-to-br from-white/5 to-transparent overflow-hidden">
                <div 
                  className={`absolute top-12 bottom-0 cursor-pointer transition-transform duration-500 group-hover:-translate-y-2
                    ${isEven ? 'left-12 right-[-20%] group-hover:-translate-x-2' : 'right-12 left-[-20%] group-hover:translate-x-2'}
                  `}
                  onClick={() => setExpandedImage(item.image)}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={`object-cover object-left-top shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10
                      ${isEven ? 'rounded-tl-2xl' : 'rounded-tr-2xl'}
                    `}
                  />
                  {/* Expand Icon Overlay */}
                  <div className={`absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center
                    ${isEven ? 'rounded-tl-2xl' : 'rounded-tr-2xl'}
                  `}>
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white shadow-2xl">
                      <Maximize2 className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-background/20">
                <h3 className="text-2xl md:text-4xl font-bold mb-2">{item.title}</h3>
                <p className="text-primary font-medium mb-6">{item.subtitle}</p>
                
                <p className="text-foreground/80 leading-relaxed mb-4">
                  {item.description}
                </p>
                <p className="text-foreground/50 leading-relaxed text-sm mb-8">
                  {item.extraInfo}
                </p>

                {item.link && (
                  <Link 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors w-fit mt-auto"
                  >
                    {item.linkText || "View Detail"}
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </GlassCard>
          );
        })}
      </div>

      {/* Full Screen Expand Modal */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-12"
            onClick={() => setExpandedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50 bg-black/50 p-2 rounded-full backdrop-blur-md">
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full max-w-7xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={expandedImage}
                alt="Expanded view"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
