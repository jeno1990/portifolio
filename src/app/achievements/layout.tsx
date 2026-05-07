import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements & Milestones",
  description: "My journey through competitive programming, hackathons, and professional certifications. From 800+ solved algorithmic challenges to mentoring teams in AI hackathons.",
};

export default function AchievementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
