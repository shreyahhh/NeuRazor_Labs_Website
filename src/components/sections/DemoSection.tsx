"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function DemoSection() {
  return (
    <section id="demo" className="py-24 px-4 scroll-mt-24">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-[#ededed]">
            Ready to see it in action?
          </h2>
          <p className="mt-4 text-[#a1a1a1]">
            Request a demo and we’ll show you how 25 minutes can replace hours of guesswork.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
