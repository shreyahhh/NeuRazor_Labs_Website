"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, TrendingUp, Mic2, ArrowLeft } from "lucide-react";
import { Turnstile } from "@/components/ui/Turnstile";

const OPTIONS = [
  {
    id: "client" as const,
    label: "Client",
    description: "Enterprise demos, pilot programs, and talent assessment partnerships.",
    icon: Building2,
    cta: "Discuss a partnership",
  },
  {
    id: "investor" as const,
    label: "Investor",
    description: "Learn about our vision, traction, and roadmap.",
    icon: TrendingUp,
    cta: "Schedule a conversation",
  },
  {
    id: "media" as const,
    label: "Media",
    description: "Press inquiries, interviews, and story angles.",
    icon: Mic2,
    cta: "Get in touch",
  },
];

export default function ConnectPage() {
  const [selected, setSelected] = useState<"client" | "investor" | "media" | null>(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const siteKey = typeof process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY === "string";
  const canSend = !siteKey || turnstileToken != null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected || !email || !canSend) return;
    setSending(true);
    setSendError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          message,
          type: selected,
          turnstileToken: turnstileToken ?? undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setSendError(data?.error ?? "Something went wrong.");
        setSending(false);
        return;
      }
      setSent(true);
      setEmail("");
      setMessage("");
      setTurnstileToken(null);
    } catch {
      setSendError("Network error. Please try again.");
    }
    setSending(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(#6366f1 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-[0.2em] mb-3">
            Contact
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#ededed] tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-4 text-slate-400 max-w-lg mx-auto">
            Choose how you’d like to connect. We’ll respond within 1–2 business days.
          </p>
        </motion.header>

        {!sent ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
            >
              {OPTIONS.map((opt) => {
                const Icon = opt.icon;
                const isActive = selected === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelected(opt.id)}
                    className={`text-left p-6 rounded-2xl border transition-all duration-300 ${
                      isActive
                        ? "border-indigo-400/50 bg-indigo-500/10 shadow-lg shadow-indigo-500/5"
                        : "border-white/10 bg-[#070a18] hover:border-white/20 hover:bg-white/[0.03]"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                        isActive ? "bg-indigo-500/20 text-indigo-400" : "bg-white/5 text-slate-400"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-[#ededed] mb-1">{opt.label}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{opt.description}</p>
                  </button>
                );
              })}
            </motion.div>

            <AnimatePresence mode="wait">
              {selected && (
                <motion.div
                  key={selected}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="rounded-2xl border border-white/10 bg-[#070a18] p-6 sm:p-8 max-w-xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                      {(() => {
                        const Opt = OPTIONS.find((o) => o.id === selected)!;
                        const Icon = Opt.icon;
                        return (
                          <>
                            <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <h2 className="font-semibold text-[#ededed]">{Opt.label}</h2>
                              <p className="text-xs text-slate-500">{Opt.cta}</p>
                            </div>
                          </>
                        );
                      })()}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="connect-email" className="block text-sm text-slate-300 mb-1.5">
                          Email
                        </label>
                        <input
                          id="connect-email"
                          type="email"
                          required
                          placeholder="you@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[#ededed] placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="connect-message" className="block text-sm text-slate-300 mb-1.5">
                          Message
                        </label>
                        <textarea
                          id="connect-message"
                          placeholder="Tell us a bit about what you're looking for..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={4}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[#ededed] placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent resize-none"
                        />
                      </div>
                      <Turnstile
                        onVerify={setTurnstileToken}
                        onExpire={() => setTurnstileToken(null)}
                        onError={() => setTurnstileToken(null)}
                        id="connect-turnstile"
                      />
                      {sendError && (
                        <p className="text-sm text-red-400">{sendError}</p>
                      )}
                      <button
                        type="submit"
                        disabled={!email || !canSend || sending}
                        className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 py-3.5 text-sm font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed hover:from-indigo-400 hover:to-purple-400 transition-all"
                      >
                        {sending ? "Sending…" : "Send message"}
                      </button>
                    </form>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {!selected && (
              <p className="text-center text-slate-500 text-sm">
                Select Client, Investor, or Media above to open the form.
              </p>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 rounded-2xl border border-white/10 bg-[#070a18] max-w-md mx-auto"
          >
            <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-6 text-indigo-400">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-[#ededed] mb-2">Message sent</h2>
            <p className="text-slate-400 text-sm mb-8">
              We’ll get back to you within 1–2 business days.
            </p>
            <button
              type="button"
              onClick={() => setSent(false)}
              className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Send another message
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
