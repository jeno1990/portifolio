import { Inter } from "next/font/google";
import "./globals.css";
import FancyCursor from "@/components/ui/FancyCursor";
import { StarryBackground } from "@/components/ui/StarryBackground";
import { Footer } from "@/components/ui/Footer";
import { NavBar } from "@/components/ui/NavBar";
import { defaultMetadata } from "@/config/metadata";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-transparent text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground" suppressHydrationWarning>
        <StarryBackground />
        <FancyCursor />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
