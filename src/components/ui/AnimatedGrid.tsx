"use client";

import { motion } from "framer-motion";

export function AnimatedGrid() {
  const lines = 20;
  const lineEls = Array.from({ length: lines }, (_, i) => (
    <motion.div
      key={i}
      className="absolute h-px w-full bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"
      style={{
        top: `${(i / (lines - 1)) * 100}%`,
        left: 0,
      }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 3 + (i % 3),
        repeat: Infinity,
        delay: i * 0.1,
      }}
    />
  ));

  const cols = 24;
  const colEls = Array.from({ length: cols }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-px h-full bg-gradient-to-b from-transparent via-indigo-500/15 to-transparent"
      style={{
        left: `${(i / (cols - 1)) * 100}%`,
        top: 0,
      }}
      animate={{
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: 4 + (i % 2),
        repeat: Infinity,
        delay: i * 0.05,
      }}
    />
  ));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {lineEls}
      {colEls}
    </div>
  );
}
