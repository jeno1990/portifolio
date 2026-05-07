import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "proj0",
    slug: "stock-intelligence",
    title: "Stock Intelligence",
    subtitle: "North American Stock Market Analysis Platform",
    year: "2024",
    type: "web",
    techStack: "Next.js, Golang, WebSockets, Tailwind CSS",
    role: "Co-developed the platform by contributing to both the frontend and backend. Built the high-performance backend infrastructure with Golang to handle real-time market data and live chats. Designed and implemented the interactive frontend dashboard using Next.js and Tailwind CSS.",
    duration: "08/2024 – Present",
    description:
      "Stock Intelligence is a comprehensive platform for North American stock market analysis. It provides real-time data, market trends, stock quotes, expert analysis, and breaking market news. The platform features an intuitive dashboard for tracking S&P 500, Dow Jones, and Nasdaq, alongside interactive charts, live community discussions for individual stocks, and a curated newsroom.",
    link: "https://www.stockintelligence.com/",
    image: "/projects/stock-intelegence-1.png",
    images: [
      "/projects/stock-intelegence-1.png",
      "/projects/stock-intelegence-2.png"
    ],
  },
  {
    id: "proj_skillbridge",
    slug: "skill-bridge",
    title: "SkillBridge",
    subtitle: "AI-Driven Educational Platform",
    year: "2023",
    type: "mobile",
    techStack: "Flutter, Android, iOS, Node.js, LLMs, RAG",
    role: "Spearheaded the mobile application development from inception to launch. Played a pivotal leadership role in designing and implementing AI-driven features, specifically integrating Large Language Models (LLMs) for content embedding and architecting Retrieval-Augmented Generation (RAG) operations in seamless coordination with the core Node.js backend.",
    duration: "01/2023 – 08/2024",
    description:
      "SkillBridge is an innovative, AI-powered educational platform designed to enhance the learning experience for university exams in Ethiopia. The platform leverages advanced machine learning techniques, including Retrieval-Augmented Generation (RAG) and custom-embedded models, to deliver highly personalized and context-aware educational content directly to students through a high-performance Flutter mobile application.",
    link: "https://skillbridge.academy/en",
    image: "/projects/skill-bridge-1.png",
    images: [
      "/projects/skill-bridge-1.png",
      "/projects/skill-bridge-2.png"
    ],
  },
  {
    id: "proj_rateeat",
    slug: "rate-eat",
    title: "RateEat",
    subtitle: "Restaurant Discovery & Review Platform",
    year: "2023",
    type: "mobile",
    techStack: "Flutter, Android, iOS, Node.js, Google Maps API",
    role: "Engineered complex map integrations and geospatial queries to discover nearby places and capture user ratings. Extended the Node.js backend to meticulously track user preferences, implementing data analysis pipelines to power intelligent, personalized restaurant suggestions.",
    duration: "01/2023 – 08/2024",
    description:
      "RateEat is a dynamic restaurant discovery and review platform that empowers users to find, rate, and review dining experiences. The application utilizes robust geospatial mapping features to seamlessly locate nearby eateries and features an intelligent recommendation engine that analyzes user interaction patterns to suggest tailored dining options.",
    link: "https://rateeat.app/en",
    image: "/projects/rate-eat-1.jpg",
    images: [
      "/projects/rate-eat-1.jpg",
      "/projects/rate-eat-2.jpg",
      "/projects/rate-eat-3.jpg"
    ],
  },
  {
    id: "proj_beu",
    slug: "beu-delivery",
    title: "beU Delivery",
    subtitle: "Food & Service Delivery Platform",
    year: "2022",
    type: "mobile",
    techStack: "Flutter, Android, iOS, Node.js",
    role: "Started my career here and stayed to develop and scale the core product. Contributed significantly to both the mobile application and backend systems, driving user growth to over 100K downloads on the Google Play Store.",
    duration: "07/2022 – 01/2023",
    description:
      "beU Delivery is a highly popular food and service delivery platform operating in Ethiopia. Built with a robust Flutter mobile application and a scalable Node.js backend, the platform provides seamless ordering, real-time tracking, and efficient delivery logistics, proudly serving more than 100 thousand customers.",
    link: "https://beudelivery.com/",
    image: "/projects/beu.png",
    images: [
      "/projects/beu.png"
    ],
  },
  {
    id: "proj1",
    slug: "intelligent-job-search",
    title: "Intelligent Job Search Automation Platform",
    subtitle: "RAG-Powered Agentic Application",
    year: "2025",
    type: "web",
    techStack: "Flask, Next.js, LangChain, Tailwind CSS, Apify",
    role: "Designed and developed the end-to-end automation system, integrating web scraping with LangGraph AI agents for content extraction and filtering. Built both the Python backend and Next.js frontend interfaces.",
    duration: "07/2025 – 08/2025",
    description:
      "An intelligent automation system designed to streamline the job search process. It scrapes job postings using Apify/Selenium, filters them with AI (Mistral-7B + LangChain) based on location/experience criteria, and delivers personalized results via WhatsApp/Telegram daily notifications. Built with a Flask API, Next.js frontend, and LangGraph agents for intelligent content extraction and summarization workflows.",
    link: "#",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"],
  },
  {
    id: "proj2",
    slug: "cloud-native-ai-content",
    title: "Cloud-Native AI-Powered Content Classification",
    subtitle: "Machine Learning / Cloud Architecture",
    year: "2025",
    type: "web",
    techStack: "Django, PostgreSQL, Redis, Celery, AWS ECS",
    role: "Architected the cloud-native infrastructure and integrated Facebook's BART-large-mnli model for classification. Developed asynchronous processing pipelines using Redis and Celery.",
    duration: "06/2025 – 08/2025",
    description:
      "An intelligent private note application utilizing Facebook's BART-large-mnli model on Amazon SageMaker to automatically classify content sensitivity. The project showcases a robust cloud-native microservices architecture deployed on AWS ECS, utilizing Django, PostgreSQL, Redis, and Celery for asynchronous AI processing.",
    link: "#",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"],
  },
];
