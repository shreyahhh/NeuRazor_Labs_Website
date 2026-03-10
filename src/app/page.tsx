import { Hero } from "@/components/Hero";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { ArrowRightCircle, BrainCircuit, FileText, MessageCircle } from "lucide-react";

function EngineSection() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="max-w-3xl">
          <p className="text-[11px] tracking-[0.26em] uppercase text-slate-400">
            The Hiring Pipeline
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-50">
            <GradientText>Modular campaigns</GradientText> that mirror your real hiring flow.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl">
            Turn on CV parsing, add assessments and AI-led interviews in one flow. Each campaign is
            a simple, configurable pipeline—not just a single test.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,1fr] gap-5">
          {/* Pipeline visualization */}
          <GlassCard className="p-5 sm:p-6">
            <p className="text-[11px] tracking-[0.24em] uppercase text-slate-400 mb-4">
              Campaign engine
            </p>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-sky-300">
                    <FileText className="w-4 h-4" />
                    CV Parser
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Turn unstructured resumes into consistent, comparable candidate profiles.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-indigo-300">
                    <BrainCircuit className="w-4 h-4" />
                    Cognitive games
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Short, signal-rich tasks that capture problem solving and attention.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-emerald-300">
                    <MessageCircle className="w-4 h-4" />
                    AI interviews
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Role-specific conversations that surface judgment and communication.
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-dashed border-white/15 bg-black/60 px-4 py-3 flex items-center justify-between gap-3">
                <p className="text-[11px] text-slate-300 max-w-md">
                  Define a campaign once—NeuRazor orchestrates modules, scoring and progression for
                  each candidate.
                </p>
                <ArrowRightCircle className="hidden sm:block w-8 h-8 text-indigo-300" />
              </div>
            </div>
          </GlassCard>

          {/* Campaign summary card (high level, no deep config) */}
          <GlassCard className="p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <p className="text-[11px] tracking-[0.24em] uppercase text-slate-400 mb-2">
                How teams use NeuRazor
              </p>
              <h3 className="text-sm font-semibold text-slate-100">
                One campaign link for your role.
              </h3>
              <p className="mt-2 text-[11px] text-slate-300">
                Candidates move from CV parsing to assessments and AI interviews in a single,
                guided experience—no manual scheduling, no separate tools.
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

function ValidationSection() {
  return (
    <section id="validation" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="max-w-3xl">
          <p className="text-[11px] tracking-[0.26em] uppercase text-slate-400">
            Why teams choose NeuRazor
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-50">
            Built for high‑stakes, repeatable hiring.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl">
            NeuRazor combines structured assessments, consistent scoring and clear reports so your
            team can move from gut feel to confident decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <GlassCard className="p-5 sm:p-6 flex flex-col gap-3">
            <p className="text-[11px] tracking-[0.24em] uppercase text-slate-400">
              Structured signal
            </p>
            <h3 className="text-sm font-semibold text-slate-100">
              Beyond resumes and unstructured interviews.
            </h3>
            <p className="text-[11px] text-slate-300">
              Each candidate follows the same flow, so you get comparable data instead of one‑off
              impressions.
            </p>
          </GlassCard>

          <GlassCard className="p-5 sm:p-6 flex flex-col gap-3">
            <p className="text-[11px] tracking-[0.24em] uppercase text-slate-400">
              Clear readouts
            </p>
            <h3 className="text-sm font-semibold text-slate-100">
              Simple summaries for hiring panels.
            </h3>
            <p className="text-[11px] text-slate-300">
              NeuRazor presents strengths, risks and overall fit in a way that busy leaders can act
              on quickly.
            </p>
          </GlassCard>
        </div>

        <GlassCard className="p-5 sm:p-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[11px] tracking-[0.24em] uppercase text-slate-400">
              Objectivity by design
            </p>
            <p className="mt-2 text-sm text-slate-100">
              Scores are standardized and competency-based.
            </p>
            <p className="mt-1 text-[11px] text-slate-300 max-w-xl">
              Each candidate’s outcome is built from a clear blend of skills and behaviors, so your
              shortlists are consistent and comparable.
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <EngineSection />
      <ValidationSection />
    </>
  );
}

