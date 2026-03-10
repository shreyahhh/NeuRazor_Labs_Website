"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050712]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#a1a1a1]">
          © {new Date().getFullYear()} NeuRazor Labs. All rights reserved.
        </p>
        <Link
          href="/connect"
          className="text-sm text-slate-400 hover:text-indigo-400 transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </footer>
  );
}
