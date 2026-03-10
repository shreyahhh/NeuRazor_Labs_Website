import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  from?: string;
  to?: string;
}

export function GradientText({
  children,
  className,
  from = "from-indigo-400",
  to = "to-teal-300",
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r text-transparent bg-clip-text",
        from,
        to,
        className
      )}
    >
      {children}
    </span>
  );
}

