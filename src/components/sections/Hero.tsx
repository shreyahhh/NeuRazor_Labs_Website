"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedGrid } from "@/components/ui/AnimatedGrid";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-4 pt-24 pb-16">
      <AnimatedGrid />
      <div className="absolute inset-0 bg-hero-gradient opacity-90 pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#ededed] leading-[1.1]"
        >
          Decode Talent.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Decide with Confidence.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-lg sm:text-xl text-[#a1a1a1] max-w-xl mx-auto"
        >
          25-minute assessments. Cognitive competencies, drive & agility—without the noise.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="#demo"
            data-cta
            className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-500/30 hover:from-indigo-400 hover:to-purple-400 hover:shadow-indigo-500/50 transition-all hover:scale-105 cta-glow"
          >
            Request a Demo
          </Link>
          <Link
            href="#assessment"
            className="rounded-full border-2 border-white/10 px-8 py-4 text-base font-semibold text-[#ededed] hover:border-indigo-400/50 hover:text-indigo-400 transition-colors"
          >
            Learn more
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
