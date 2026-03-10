"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden px-4 pt-28 pb-20">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.2),transparent_55%),radial-gradient(circle_at_bottom,_rgba(20,184,166,0.2),transparent_55%)]" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-12 lg:flex-row lg:items-center">
        {/* Left: main narrative */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex-1 space-y-7"
        >
          <p className="text-[11px] tracking-[0.28em] uppercase text-slate-400">
            The science of high-stakes hiring
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-semibold leading-tight tracking-tight text-slate-50">
            Evidence-Based Hiring,{" "}
            <GradientText className="font-semibold">
              Powered by Multimodal AI.
            </GradientText>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
            Stop relying on inflated resumes. NeuRazor uses peer-reviewed cognitive
            assessments, adaptive games and AI roleplay to surface the top{" "}
            <span className="font-semibold text-slate-100">1% of talent</span>{" "}
            automatically—so every hiring decision is defensible.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/connect"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(56,189,248,0.35)] hover:from-indigo-400 hover:to-teal-300 hover:shadow-[0_24px_80px_rgba(56,189,248,0.55)] transition-all"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#validation"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-xs font-medium text-slate-100 hover:border-indigo-400/70 hover:text-indigo-200 transition-colors"
            >
              Read the Research (Springer 2024)
            </Link>
          </div>

          {/* Risk & trust micro-copy */}
          <div className="flex flex-wrap items-center gap-4 pt-2 text-[11px] text-slate-400">
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Standardized, competency-based scoring.</span>
            </div>
          </div>
        </motion.div>

        {/* Right: engine preview / glass panel */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
          className="flex-1 max-w-lg mx-auto"
        >
          <GlassCard className="relative p-5 sm:p-6 lg:p-7 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(20,184,166,0.18),transparent_55%)] pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <p className="text-[11px] tracking-[0.24em] uppercase text-slate-400">
                The NeuRazor Engine
              </p>
              <p className="text-sm text-slate-200">
                One campaign link. NeuRazor handles the rest—from parsing CVs to
                cognitive games and AI-led interviews.
              </p>

              <div className="mt-3 space-y-3 text-xs text-slate-200/90">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>CV parser turns resumes into structured signals.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  <span>Cognitive games benchmark candidates on role-fit traits.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>AI roleplay simulates high-stakes conversations and decisions.</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

