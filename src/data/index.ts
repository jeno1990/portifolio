import { ResumeData } from "@/types";
import { personalInfo } from "./personal";
import { experience } from "./experience";
import { projects } from "./projects";
import { education } from "./education";
import { skills, certificates } from "./skills";
import { volunteer } from "./volunteer";

export const resumeData: ResumeData = {
  personalInfo,
  experience,
  projects,
  education,
  skills,
  volunteer,
  certificates,
};

export { personalInfo } from "./personal";
export { experience } from "./experience";
export { projects } from "./projects";
export { education } from "./education";
export { skills, techStackWithIcons, certificates } from "./skills";
export { volunteer } from "./volunteer";
export { achievements } from "./achievements";
