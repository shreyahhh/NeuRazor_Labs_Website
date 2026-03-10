"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050712]/90 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <motion.span
            className="relative flex shrink-0"
animate={{
                filter: [
                  "brightness(1) drop-shadow(0 0 0 transparent)",
                  "brightness(1.2) drop-shadow(0 0 8px rgba(99, 102, 241, 0.5))",
                  "brightness(1) drop-shadow(0 0 0 transparent)",
                ],
              }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatDelay: 0,
            }}
          >
            <Image
              src="/images/neurazor-logo.png"
              alt="NeuRazor Labs"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              priority
            />
          </motion.span>
          <span className="hidden sm:inline text-lg font-semibold text-[#ededed]">
            NeuRazor Labs
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#assessment"
            className="text-sm text-slate-200 hover:text-indigo-400 transition-colors"
          >
            Assessment
          </Link>
          <Link
            href="#work-with-us"
            className="text-sm text-slate-200 hover:text-indigo-400 transition-colors"
          >
            Work with Us
          </Link>
          <Link
            href="#founders"
            className="text-sm text-slate-200 hover:text-indigo-400 transition-colors"
          >
            Founders
          </Link>
          <Link
            href="/connect"
            className="text-sm text-slate-200 hover:text-indigo-400 transition-colors"
          >
            Connect
          </Link>
          <Link
            href="#demo"
            data-cta
            className={cn(
              "rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 hover:from-indigo-400 hover:to-purple-400 transition-all cta-glow"
            )}
          >
            Request a Demo
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-[#ededed]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-white/10 bg-[#050712]/95 backdrop-blur-md px-4 py-4 flex flex-col gap-4"
        >
          <Link href="#assessment" className="text-[#ededed]/90" onClick={() => setMobileOpen(false)}>
            Assessment
          </Link>
          <Link href="#work-with-us" className="text-[#ededed]/90" onClick={() => setMobileOpen(false)}>
            Work with Us
          </Link>
          <Link href="#founders" className="text-[#ededed]/90" onClick={() => setMobileOpen(false)}>
            Founders
          </Link>
          <Link href="/connect" className="text-[#ededed]/90" onClick={() => setMobileOpen(false)}>
            Connect
          </Link>
          <Link
            href="#demo"
            data-cta
            className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-2.5 text-sm font-medium text-white text-center"
            onClick={() => setMobileOpen(false)}
          >
            Request a Demo
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
