import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Akash L | AI & Cybersecurity Engineer",
  description: "III Year CSE student building autonomous AI security systems, full-stack apps, and ML-powered products. Creator of Vayuntra — TRL-4 AI cybersecurity defense platform.",
  keywords: ["Akash L","AI Engineer","Cybersecurity","Full Stack","Vayuntra","FastAPI","React","Machine Learning","MSME Hackathon"],
  authors: [{ name: "Akash L" }],
  openGraph: {
    title: "Akash L | AI & Cybersecurity Engineer",
    description: "Building intelligent systems at the intersection of AI and security.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
