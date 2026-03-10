"use client";

import { motion } from "framer-motion";

export function GameMockup() {
  return (
    <motion.div
      className="relative rounded-2xl border border-white/10 bg-[#070a18] p-8 shadow-2xl"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center justify-center gap-4 min-h-[180px]">
        <span className="text-[#a1a1a1] text-sm font-medium">Assessment</span>
        <span className="text-2xl font-semibold text-[#ededed]">25 min</span>
      </div>
    </motion.div>
  );
}
