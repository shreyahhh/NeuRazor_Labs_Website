import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NeuRazor Labs",
  description:
    "25-minute assessments. Cognitive competencies, drive & agility. Request a demo.",
  icons: {
    icon: "/images/neurazor-logo.png",
    apple: "/images/neurazor-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased font-sans bg-[#050505] text-[#ededed] min-h-screen selection:bg-indigo-500/30`}
      >
        <Navbar />
        <main className="bg-gradient-to-b from-black via-[#050505] to-[#050505]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
