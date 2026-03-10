"use client";

import Image from "next/image";
import { Linkedin, ArrowUpRight } from "lucide-react";

const FOUNDERS = [
  {
    id: "sibin",
    name: "Sibin Sabu",
    role: "Co-Founder",
    tag: "STRATEGY & VISION",
    description:
      "Driving the vision for NeuRazor Labs. Expert in talent strategy and organizational psychology, focused on building the future of hiring tech through deep behavioral insights.",
    linkedin: "https://linkedin.com/in/sibinsabu",
    image: "/founders/Sibin_Sabu.jpg",
    accent: "cyan",
  },
  {
    id: "srinivas",
    name: "Srinivas Venkatesan",
    role: "Co-Founder",
    tag: "TECH & PRODUCT",
    description:
      "Leading technical innovation and product architecture. Committed to creating seamless, gamified diagnostic tools that provide deep, unbiased talent insights at scale.",
    linkedin: "https://linkedin.com/in/srinivas-v",
    image: "/founders/srinivas.jpg",
    accent: "teal",
  },
];

export function FoundersSection() {
  return (
    <section
      id="founders"
      className="relative overflow-hidden py-24 pb-32 selection:bg-[#00D2FF]/30 scroll-mt-24"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(#00D2FF 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Header */}
      <div className="relative pt-8 px-6 max-w-7xl mx-auto z-10 text-center mb-16">
        <h2
          className="text-6xl md:text-9xl font-black tracking-tighter italic opacity-[0.02] absolute top-0 left-1/2 -translate-x-1/2 select-none pointer-events-none whitespace-nowrap"
          aria-hidden
        >
          NEURAZOR LABS
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold relative z-10 tracking-tight text-[#ededed]">
          Meet the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#00F2EA]">
            Founders
          </span>
        </h1>
      </div>

      {/* Two rounded boxes side by side: together they span full width */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {FOUNDERS.map((founder) => (
            <div
              key={founder.id}
              className="rounded-xl border border-white/10 bg-[#070a18] overflow-hidden flex flex-row min-h-[280px] sm:min-h-[320px]"
            >
              <div className="relative w-40 sm:w-48 md:w-52 flex-shrink-0 aspect-square overflow-hidden">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 208px"
                />
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1 min-w-0">
                <span
                  className={`font-bold text-[9px] tracking-[0.3em] uppercase block mb-1 ${
                    founder.accent === "teal" ? "text-[#00F2EA]" : "text-[#00D2FF]"
                  }`}
                >
                  {founder.tag}
                </span>
                <h3 className="text-lg font-bold mb-1 tracking-tight text-[#ededed]">
                  {founder.name}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed flex-1 mb-3 line-clamp-4">
                  {founder.description}
                </p>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-[9px] font-bold text-slate-400 tracking-[0.15em] transition-colors ${
                    founder.accent === "teal"
                      ? "hover:text-[#00F2EA]"
                      : "hover:text-[#00D2FF]"
                  }`}
                >
                  <Linkedin size={10} /> CONNECT <ArrowUpRight size={8} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
