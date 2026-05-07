import { SkillCategory, TechCategory } from "@/types";
import { 
  SiPython, SiJavascript, SiTypescript, SiDart, SiGo,
  SiFlutter, SiReact, SiNextdotjs, SiSpring,
  SiNodedotjs, SiFastapi, SiFlask,
  SiTensorflow, SiPytorch,
  SiMongodb, SiPostgresql, SiMysql, SiFirebase,
  SiGit, SiJira, SiSlack, SiDocker
} from "react-icons/si";
import { FaBrain, FaRobot, FaDatabase, FaJava, FaAws } from "react-icons/fa";

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "Java", "Javascript/Typescript", "Dart", "Golang"],
  },
  {
    category: "Frameworks",
    items: ["Flutter", "React.js", "Next.js", "React Native", "Spring"],
  },
  {
    category: "Back-end Development",
    items: ["Node.js", "Golang", "FastAPI", "Flask"],
  },
  {
    category: "Machine Learning & AI",
    items: [
      "ML Algorithms",
      "NLP",
      "Retrieval-Augmented Generation (RAG)",
      "Tensorflow",
      "Pytorch",
      "Model Evaluation & Optimization",
      "Embeddings",
    ],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Vector DB", "Firebase"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Jira", "Slack", "Docker", "AWS"],
  },
  {
    category: "Soft Skills",
    items: ["Teamwork", "Perseverance", "Communication"],
  },
];

export const techStackWithIcons: TechCategory[] = [
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

export const certificates = [
  "Supervised Machine Learning: Regression and Classification",
  "Advanced Learning Algorithms",
  "Back End Development and APIs",
];
