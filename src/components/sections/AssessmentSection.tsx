"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Brain, Zap, BarChart3 } from "lucide-react";

const PREVIEW_STEPS = [
  "NeuRazor AI is generating a cognitive reasoning scenario…",
  "Question 3 · Time-pressured trade-off decision.",
  "Calibrating difficulty based on previous responses…",
  "Surfacing predictive insights for ramp-up time.",
];

export function AssessmentSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [previewIndex, setPreviewIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  // Simple live-typing effect for the step-by-step preview
  useEffect(() => {
    const fullText = PREVIEW_STEPS[previewIndex];
    let i = 0;

    setTypedText("");
    const interval = setInterval(() => {
      i += 1;
      setTypedText(fullText.slice(0, i));
      if (i >= fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setPreviewIndex((prev) => (prev + 1) % PREVIEW_STEPS.length);
        }, 1600);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [previewIndex]);

  return (
    <section id="assessment" className="relative py-24 px-4" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[0.18em] uppercase text-[#e5e7eb]">
            Assessment Dashboard
          </h2>
          <p className="mt-4 text-[#ededed]/70 max-w-2xl mx-auto">
            One short, adaptive assessment. A live, AI-driven dashboard that translates behavior
            into decision-ready signals.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 auto-rows-[minmax(180px,auto)]">
          {/* Large tile: 25 Minutes + animated core visual */}
          <ScrollReveal delay={0.1} className="md:col-span-2 lg:row-span-2">
            <motion.div
              className="h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 lg:p-8 flex flex-col justify-between overflow-hidden relative shadow-[0_0_0_1px_rgba(148,163,184,0.25)]"
              whileHover={{ borderColor: "rgba(99, 102, 241, 0.35)", scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="flex items-center gap-2 text-indigo-300 font-semibold tracking-[0.16em] uppercase text-xs">
                <Zap className="w-5 h-5" />
                25 Minutes · Infinite Insight
              </div>
              <div className="mt-4 flex-1 min-h-[220px] rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.22),transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),transparent_55%)]" />
                <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 px-4">
                  {/* Central pulse */}
                  <motion.div
                    className="relative flex items-center justify-center rounded-full border border-indigo-400/60 bg-black/70 px-7 py-6 shadow-[0_0_45px_rgba(79,70,229,0.7)]"
                    animate={{
                      boxShadow: [
                        "0 0 40px rgba(79,70,229,0.55)",
                        "0 0 65px rgba(79,70,229,0.85)",
                        "0 0 40px rgba(79,70,229,0.55)",
                      ],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-[10px] tracking-[0.25em] uppercase text-indigo-200/90">
                        Live
                      </span>
                      <span className="text-base font-semibold text-white">
                        Assessment Session
                      </span>
                    </div>
                  </motion.div>

                  {/* Step-by-step preview with typing */}
                  <div className="max-w-xs w-full rounded-2xl border border-white/15 bg-black/70 px-4 py-4 shadow-[0_0_35px_rgba(15,23,42,0.9)]">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-2">
                      Assessment preview
                    </p>
                    <div className="text-sm text-slate-100 min-h-[54px] font-mono leading-relaxed">
                      <span className="inline-block w-1.5 h-4 bg-emerald-400/80 rounded-sm mr-2 align-middle" />
                      <span>{typedText}</span>
                      <motion.span
                        className="inline-block w-1 h-4 bg-slate-200 ml-1 align-middle"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Adaptive difficulty & question mix tuned in real-time.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Cognitive Competencies */}
          <ScrollReveal delay={0.2}>
            <motion.div
              className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col justify-center shadow-[0_0_0_1px_rgba(148,163,184,0.25)]"
              whileHover={{ borderColor: "rgba(99, 102, 241, 0.35)", scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Brain className="w-9 h-9 text-indigo-300 mb-3" />
              <h3 className="text-lg font-semibold text-[#f9fafb] tracking-[0.08em] uppercase">
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
              className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col justify-center shadow-[0_0_0_1px_rgba(148,163,184,0.25)]"
              whileHover={{ borderColor: "rgba(99, 102, 241, 0.35)", scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <h3 className="text-lg font-semibold text-[#f9fafb] tracking-[0.08em] uppercase">
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

          {/* Assessment dashboard: skills snapshot */}
          <ScrollReveal delay={0.4} className="lg:col-span-2">
            <motion.div
              className="h-full min-h-[200px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col justify-center relative overflow-hidden shadow-[0_0_0_1px_rgba(148,163,184,0.25)]"
              whileHover={{ borderColor: "rgba(99, 102, 241, 0.35)", scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#f9fafb] tracking-[0.08em] uppercase">
                    Assessment dashboard
                  </h3>
                  <p className="text-sm text-[#e5e7eb]/60 mt-1">
                    One view of cognitive, behavioral and potential scores—ready for your next hiring
                    decision.
                  </p>
                </div>
                <div className="hidden sm:flex items-center justify-center rounded-2xl border border-indigo-400/40 bg-black/60 px-4 py-3">
                  <BarChart3 className="w-6 h-6 text-indigo-300" />
                </div>
              </div>

              {/* Progressive bar graph */}
              <div className="space-y-3">
                {[
                  { label: "Problem Solving", value: 92, tone: "from-indigo-500 to-cyan-400" },
                  { label: "Learning Agility", value: 88, tone: "from-cyan-400 to-emerald-400" },
                  { label: "Ownership & Drive", value: 81, tone: "from-purple-500 to-indigo-400" },
                ].map((skill) => (
                  <div key={skill.label} className="space-y-1">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>{skill.label}</span>
                      <span className="text-slate-400">{skill.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#020617] overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.tone}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.value}%` } : { width: 0 }}
                        transition={{ duration: 1.4, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Research & validation badges */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 flex items-center gap-4 shadow-[0_0_0_1px_rgba(148,163,184,0.25)]">
            <div className="h-10 w-10 rounded-full border border-emerald-300/60 bg-emerald-400/10 shadow-[0_0_25px_rgba(16,185,129,0.6)]" />
            <div>
              <p className="text-[11px] tracking-[0.22em] uppercase text-slate-400">
                Research & Validation
              </p>
              <p className="text-sm text-slate-100">
                Featured in <span className="font-semibold">Springer 2024</span> on applied talent
                assessment.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 flex items-center gap-4 shadow-[0_0_0_1px_rgba(148,163,184,0.25)]">
            <div className="h-10 w-10 rounded-full border border-sky-300/60 bg-sky-400/10 shadow-[0_0_25px_rgba(56,189,248,0.6)]" />
            <div>
              <p className="text-[11px] tracking-[0.22em] uppercase text-slate-400">
                Independent recognition
              </p>
              <p className="text-sm text-slate-100">
                Named in the <span className="font-semibold">Luminous Top 10</span> for assessment
                innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
