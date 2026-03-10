"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Turnstile } from "@/components/ui/Turnstile";

const ROLES = ["Marketing", "Sales", "Engineering", "Product", "Operations", "Design"];

const STEPS = [
  { id: "role", title: "What role are you hiring for?", type: "pills" as const, options: ROLES },
  { id: "company", title: "Company name", type: "text" as const, placeholder: "Acme Inc." },
  { id: "email", title: "Work email", type: "email" as const, placeholder: "you@company.com" },
  { id: "message", title: "Anything else we should know?", type: "textarea" as const, placeholder: "Optional" },
];

export function WorkWithUsSection() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const currentStepConfig = STEPS[step];
  const isLastStep = step === STEPS.length - 1;
  const siteKey = typeof process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY === "string";
  const canSubmit = !siteKey || turnstileToken != null;

  const handleNext = async () => {
    if (isLastStep) {
      if (!canSubmit) return;
      setSubmitting(true);
      setSubmitError(null);
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            message: formData.message,
            type: "work-with-us",
            role: formData.role,
            company: formData.company,
            turnstileToken: turnstileToken ?? undefined,
          }),
        });
        const data = await res.json();
        if (!res.ok) {
          setSubmitError(data?.error ?? "Something went wrong.");
          setSubmitting(false);
          return;
        }
        setSubmitted(true);
      } catch {
        setSubmitError("Network error. Please try again.");
      }
      setSubmitting(false);
      return;
    }
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const handleBack = () => setStep((s) => Math.max(0, s - 1));

  const handlePillSelect = (value: string) => {
    setFormData((prev) => ({ ...prev, role: value }));
  };

  return (
    <section id="work-with-us" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="lg:sticky lg:top-32">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#ededed]">
              Work with Us
            </h2>
            <p className="mt-4 text-[#a1a1a1] max-w-md">
              We’re building a culture where talent insight matters more than resumes.
              Join us as a client, partner, or candidate—and see what we can do for you.
            </p>
            <p className="mt-6 text-sm text-[#a1a1a1]/80">
              Step {step + 1} of {STEPS.length}
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2} className="flex flex-col">
          <div className="rounded-2xl border border-white/10 bg-[#070a18] p-6 sm:p-8 min-h-[320px] flex flex-col">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center flex-1 text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#ededed]">
                    We’ll be in touch
                  </h3>
                  <p className="text-[#a1a1a1] mt-2">
                    A team member will reach out within 1–2 business days.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={currentStepConfig.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col flex-1"
                >
                  <h3 className="text-xl font-semibold text-[#ededed] mb-6">
                    {currentStepConfig.title}
                  </h3>

                  {currentStepConfig.type === "pills" && (
                    <div className="flex flex-wrap gap-3">
                      {(currentStepConfig.options as string[]).map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handlePillSelect(option)}
                          className={cn(
                            "rounded-full px-5 py-2.5 text-sm font-medium border-2 transition-all",
                            formData.role === option
                              ? "border-indigo-400 bg-indigo-500/20 text-indigo-300"
                              : "border-white/10 bg-white/5 text-[#a1a1a1] hover:border-white/20"
                          )}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}

                  {currentStepConfig.type === "text" && (
                    <input
                      type="text"
                      placeholder={currentStepConfig.placeholder}
                      value={formData[currentStepConfig.id] ?? ""}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, [currentStepConfig.id]: e.target.value }))
                      }
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[#ededed] placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                  )}

                  {currentStepConfig.type === "email" && (
                    <input
                      type="email"
                      placeholder={currentStepConfig.placeholder}
                      value={formData[currentStepConfig.id] ?? ""}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, [currentStepConfig.id]: e.target.value }))
                      }
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[#ededed] placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                  )}

                  {currentStepConfig.type === "textarea" && (
                    <>
                      <textarea
                        placeholder={currentStepConfig.placeholder}
                        value={formData[currentStepConfig.id] ?? ""}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, [currentStepConfig.id]: e.target.value }))
                        }
                        rows={4}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[#ededed] placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                      />
                      <div className="mt-4">
                        <Turnstile
                          onVerify={setTurnstileToken}
                          onExpire={() => setTurnstileToken(null)}
                          onError={() => setTurnstileToken(null)}
                          id="work-with-us-turnstile"
                        />
                      </div>
                    </>
                  )}

                  {submitError && (
                    <p className="mt-3 text-sm text-red-400">{submitError}</p>
                  )}

                  <div className="mt-auto pt-8 flex justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      disabled={step === 0}
                      className="text-[#a1a1a1] hover:text-[#ededed] disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={isLastStep && (!canSubmit || submitting)}
                      data-cta
                      className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-2.5 text-sm font-medium text-white inline-flex items-center gap-2 cta-glow disabled:opacity-50 disabled:cursor-not-allowed hover:from-indigo-400 hover:to-purple-400 transition-all"
                    >
                      {submitting ? "Sending…" : isLastStep ? "Submit" : "Next"}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
