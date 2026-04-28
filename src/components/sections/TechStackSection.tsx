"use client";

import { motion } from "framer-motion";
import { 
  SiPython, SiJavascript, SiTypescript, SiDart, SiGo,
  SiFlutter, SiReact, SiNextdotjs, SiSpring,
  SiNodedotjs, SiFastapi, SiFlask,
  SiTensorflow, SiPytorch,
  SiMongodb, SiPostgresql, SiMysql, SiFirebase,
  SiGit, SiJira, SiSlack, SiDocker
} from "react-icons/si";
import { FaBrain, FaRobot, FaDatabase, FaJava, FaAws } from "react-icons/fa";

const techStack = [
  {
    category: "LANGUAGES",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
      { name: "Golang", icon: SiGo, color: "#00ADD8" },
    ]
  },
  {
    category: "FRAMEWORKS",
    skills: [
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Spring", icon: SiSpring, color: "#6DB33F" },
    ]
  },
  {
    category: "BACKEND",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Golang", icon: SiGo, color: "#00ADD8" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Flask", icon: SiFlask, color: "#000000" },
    ]
  },
  {
    category: "AI & ML",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "NLP", icon: FaBrain, color: "#FF9800" },
      { name: "RAG", icon: FaRobot, color: "#4CAF50" },
    ]
  },
  {
    category: "DATABASE",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Vector DB", icon: FaDatabase, color: "#00BCD4" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ]
  },
  {
    category: "TOOLS",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Jira", icon: SiJira, color: "#0052CC" },
      { name: "Slack", icon: SiSlack, color: "#4A154B" },
    ]
  }
];

export function TechStackSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto relative z-10 w-full" id="skills">
      <div className="flex flex-col gap-16">
        {techStack.map((group) => (
          <motion.div 
            key={group.category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { 
                  duration: 0.6, 
                  ease: "easeOut",
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                } 
              }
            }}
            className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16 lg:gap-24"
          >
            {/* Category Title */}
            <div className="w-full md:w-64 lg:w-72 flex-shrink-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground/80 tracking-tight">
                {group.category}
              </h2>
            </div>
            
            {/* Skills Grid/Flex */}
            <div className="flex flex-wrap gap-x-8 gap-y-6 pt-2 md:pt-4">
              {group.skills.map((skill) => (
                <motion.div 
                  key={skill.name} 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                  }}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <skill.icon 
                    size={24} 
                    className="text-foreground/60 transition-colors duration-300"
                    style={{ color: skill.color }}
                  />
                  <span className="text-lg font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
