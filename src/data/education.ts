import { Education } from "@/types";

export const education: Education[] = [
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
];
