import { Experience } from "@/types";

export const experience: Experience[] = [
  {
    id: "exp1",
    role: "Backend Developer (Part-time)",
    company: "Arifone",
    location: "Toronto, Canada",
    duration: "08/2024 – 09/2025",
    responsibilities: [
      "Developed robust back-end components for the web application using Golang and Node.js.",
      "Co-developed StockIntelligence, contributing to both the frontend (React.js) and backend (Golang).",
      "Optimized third-party API integration by implementing smart caching and update strategies, significantly improving backend response efficiency.",
    ],
    relatedProjects: ["Stock Intelligence"],
  },
  {
    id: "exp2",
    role: "Software Developer",
    company: "Africa to Silicon Valley (A2SV)",
    location: "Addis Ababa, Ethiopia",
    duration: "01/2023 – 08/2024",
    responsibilities: [
      "Played a pivotal role in the end-to-end development of the SkillBridge project, an AI-driven educational platform for Ethiopian University exams.",
      "Enhanced AI-driven content generation by implementing Retrieval-Augmented Generation (RAG) and fine-tuning language models with custom datasets.",
      "Developed and launched a high-performance mobile application for both iOS and Android users with Flutter.",
      "Contributed to the development of 6+ commercial applications, collaborating on backend infrastructure using Go (Golang) and Node.js, as well as frontend development for mobile and web.",
    ],
    relatedProjects: ["SkillBridge", "RateEat"],
  },
  {
    id: "exp3",
    role: "Mobile App Developer",
    company: "beU Delivery",
    location: "Addis Ababa, Ethiopia",
    duration: "07/2022 – 01/2023",
    responsibilities: [
      "Contributed to the development of the beU Delivery mobile app, a food and service delivery platform used by more than 100 thousand customers in Ethiopia.",
    ],
    relatedProjects: ["beU Delivery"],
  },
];
