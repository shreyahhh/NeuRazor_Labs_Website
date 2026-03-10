"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedGrid } from "@/components/ui/AnimatedGrid";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-4 pt-28 pb-16">
      <AnimatedGrid />
      <div className="absolute inset-0 bg-hero-gradient opacity-90 pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center gap-12">
        {/* Headline + CTA */}
        <div className="max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[0.06em] text-[#f9fafb] leading-[1.05]"
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
          className="mt-6 text-base sm:text-lg text-[#a1a1a1] max-w-2xl mx-auto"
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

        {/* Hub-and-spoke diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="relative w-full max-w-4xl aspect-[4/2] rounded-3xl border border-white/10 bg-white/5/5 bg-gradient-to-tr from-white/5 via-white/0 to-indigo-500/10 backdrop-blur-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.14),transparent_55%)] pointer-events-none" />
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            {/* Center core */}
            <motion.div
              className="relative flex items-center justify-center rounded-full border border-indigo-400/50 bg-black/60 px-8 py-6 shadow-[0_0_40px_rgba(99,102,241,0.5)]"
              animate={{ boxShadow: ["0 0 30px rgba(99,102,241,0.4)", "0 0 55px rgba(99,102,241,0.7)", "0 0 30px rgba(99,102,241,0.4)"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-[11px] tracking-[0.25em] uppercase text-indigo-300/80">
                  NeuRazor
                </span>
                <span className="text-lg sm:text-xl font-semibold text-white">
                  AI Core
                </span>
              </div>
            </motion.div>

            {/* Spokes */}
            <div className="absolute inset-10">
              {/* Top-right: Skill Tests */}
              <motion.div
                className="absolute right-0 top-0 flex flex-col items-start gap-2"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
              >
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-indigo-400/70 to-transparent translate-x-[-40px]" />
                <div className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 shadow-[0_0_25px_rgba(99,102,241,0.25)]">
                  <p className="text-xs font-medium text-indigo-100 tracking-[0.16em] uppercase">
                    Skill Tests
                  </p>
                  <p className="mt-1 text-[11px] text-slate-300">
                    Cognitive, problem-solving & domain tasks calibrated by AI.
                  </p>
                </div>
              </motion.div>

              {/* Bottom-right: Behavioral Analysis */}
              <motion.div
                className="absolute right-2 bottom-2 flex flex-col items-start gap-2"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              >
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent translate-x-[-40px]" />
                <div className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 shadow-[0_0_25px_rgba(34,211,238,0.25)]">
                  <p className="text-xs font-medium text-cyan-100 tracking-[0.16em] uppercase">
                    Behavioral Analysis
                  </p>
                  <p className="mt-1 text-[11px] text-slate-300">
                    Micro-choices, reaction time and persistence mapped to traits.
                  </p>
                </div>
              </motion.div>

              {/* Left: Predictive Insights */}
              <motion.div
                className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-end gap-2"
                animate={{ x: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-400/70 to-transparent translate-x-[40px]" />
                <div className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 shadow-[0_0_25px_rgba(168,85,247,0.25)]">
                  <p className="text-xs font-medium text-purple-100 tracking-[0.16em] uppercase">
                    Predictive Insights
                  </p>
                  <p className="mt-1 text-[11px] text-slate-300">
                    Readiness, ramp-up time and role fit scored in one dashboard.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
