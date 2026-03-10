"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Brain, Zap } from "lucide-react";

export function AssessmentSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="assessment" className="relative py-24 px-4" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ededed]">
            The Assessment
          </h2>
          <p className="mt-4 text-[#ededed]/70 max-w-2xl mx-auto">
            One short assessment. Clear insight. No guesswork.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 auto-rows-[minmax(180px,auto)]">
          {/* Large tile: 25 Minutes + video placeholder */}
          <ScrollReveal delay={0.1} className="md:col-span-2 lg:row-span-2">
            <motion.div
              className="h-full rounded-2xl border border-white/10 bg-[#070a18] backdrop-blur-md p-6 lg:p-8 flex flex-col justify-between overflow-hidden relative"
              whileHover={{ borderColor: "rgba(99, 102, 241, 0.35)" }}
            >
              <div className="flex items-center gap-2 text-indigo-400 font-semibold">
                <Zap className="w-5 h-5" />
                25 Minutes. Infinite Insight.
              </div>
              <div className="mt-4 flex-1 min-h-[200px] rounded-xl bg-[#050712]/80 border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center">
                  <motion.div
                    className="w-20 h-20 rounded-full border-2 border-indigo-400/50 flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="text-xs text-[#ededed]/60">Play</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Cognitive Competencies */}
          <ScrollReveal delay={0.2}>
            <motion.div
              className="h-full rounded-2xl border border-white/10 bg-[#070a18] backdrop-blur-md p-6 flex flex-col justify-center"
              whileHover={{ borderColor: "rgba(99, 102, 241, 0.35)" }}
            >
              <Brain className="w-10 h-10 text-indigo-400 mb-3" />
              <h3 className="text-lg font-semibold text-[#ededed]">
                Cognitive Competencies
              </h3>
              <p className="text-sm text-[#ededed]/60 mt-1">
                Logic, attention, memory—mapped to your roles.
              </p>
            </motion.div>
          </ScrollReveal>

          {/* Drive & Agility - progress bar */}
          <ScrollReveal delay={0.3}>
            <motion.div
              className="h-full rounded-2xl border border-white/10 bg-[#070a18] backdrop-blur-md p-6 flex flex-col justify-center"
              whileHover={{ borderColor: "rgba(99, 102, 241, 0.35)" }}
            >
              <h3 className="text-lg font-semibold text-[#ededed]">
                Drive & Agility
              </h3>
              <p className="text-sm text-[#ededed]/60 mt-1 mb-4">
                Learning Agility
              </p>
              <div className="h-2 rounded-full bg-[#1a1a1a] overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "85%" } : { width: 0 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Candidate Profile */}
          <ScrollReveal delay={0.4} className="lg:col-span-2">
            <motion.div
              className="h-full min-h-[160px] rounded-2xl border border-white/10 bg-[#070a18] backdrop-blur-md p-6 flex flex-col justify-center relative overflow-hidden"
              whileHover={{ borderColor: "rgba(99, 102, 241, 0.35)" }}
            >
              <h3 className="text-lg font-semibold text-[#ededed]">
                Candidate Profile
              </h3>
              <p className="text-sm text-[#ededed]/60 mt-1">
                Insight flows from the assessment into a single, actionable profile.
              </p>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
