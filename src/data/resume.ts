export const resumeData = {
  personalInfo: {
    name: "Nigatu Paulos Tisyano",
    email: "nigatujeno@gmail.com",
    phone: "+1-807-357-6180",
    linkedin: "linkedin.com/in/jeno",
    github: "github.com/jeno1990",
    title: "Full Stack & ML Developer",
    summary:
      "Versatile Developer with a Master's in Computer Science and 3+ years of experience across the full software lifecycle. Combines expertise in driving the end-to-end product journey, from crafting intuitive UIs to deploying robust backend infrastructure. Skilled in enhancing applications with modern Machine Learning capabilities, including Retrieval-Augmented Generation (RAG) and intelligent agent workflows.",
  },
  experience: [
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
    },
  ],
  projects: [
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
      link: "#", // Dummy link
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop", // Dummy image
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
      link: "#", // Dummy link
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", // Dummy image
    },
    {
      id: "proj3",
      slug: "resume-roaster",
      title: "Resume Roaster",
      subtitle: "AI Resume Feedback Platform",
      year: "2024",
      type: "web",
      techStack: "GPT-4, Next.js, PostgreSQL, Prisma, Tailwind CSS",
      role: "Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS. Integrated OpenAI APIs for real-time resume feedback generation.",
      duration: "01/2024 – 04/2024",
      description:
        "Resume Roaster is a web application designed to provide tailored resume feedback and professional writing services. It integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience.",
      link: "#", // Dummy link
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop", // Dummy image
    },
  ],
  education: [
    {
      id: "edu1",
      degree: "Master of Science in Computer Science",
      institution: "Lakehead University",
      location: "Thunder Bay, Canada",
      duration: "09/2024 – 08/2025",
      gpa: "CGPA: 3.93/4",
      courses: [
        "Machine learning and deep learning",
        "Big data and Distributed Systems",
        "NLP",
        "Computer Security",
        "Cloud computing for AI and ML",
        "Blockchain Technology",
      ],
    },
    {
      id: "edu2",
      degree: "B.Sc. Electrical and Computer Engineering",
      institution: "Addis Ababa University",
      location: "Addis Ababa, Ethiopia",
      duration: "10/2017 – 07/2021",
      gpa: "CGPA: 3.5/4",
      courses: [
        "Data Structures and Algorithms",
        "Object Oriented Programming",
        "Computer Architecture",
        "Database",
        "Data Communication and Networking",
        "Operating Systems",
      ],
    },
  ],
  skills: [
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
  ],
  volunteer: [
    {
      id: "vol1",
      role: "Project Mentor",
      organization: "Generative AI for Africa Hackathon",
      location: "Addis Ababa, Ethiopia",
      duration: "08/2023 – 11/2023",
      description:
        "Organized the AI for Impact Hackathon in collaboration with the Ministry of Innovation of Ethiopia and Addis Ababa University. Mentored a team that ranked Top 40 out of 800+ teams from 47 African countries.",
    },
    {
      id: "vol2",
      role: "Teaching Assistant, Data Structures and Algorithms",
      organization: "A2SV Camp",
      location: "Addis Ababa, Ethiopia",
      duration: "04/2023 – 09/2023",
      description:
        "Volunteered to introduce high schoolers and university students to Python, data structures, and algorithms.",
    },
  ],
  certificates: [
    "Supervised Machine Learning: Regression and Classification",
    "Advanced Learning Algorithms",
    "Back End Development and APIs",
  ],
};
