import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_0_1px_rgba(148,163,184,0.3)]",
        "transition-transform transition-colors duration-300 ease-out",
        "hover:border-indigo-400/70 hover:shadow-[0_0_40px_rgba(79,70,229,0.55)] hover:scale-[1.02]",
        className
      )}
    >
      {children}
    </div>
  );
}

