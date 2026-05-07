import { Achievement } from "@/types";

export const achievements: Achievement[] = [
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
