"use client";

import { motion } from "framer-motion";

export function Loader() {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-indigo-500/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-12 h-12 rounded-full border-2 border-t-indigo-500 border-r-transparent border-b-transparent border-l-transparent"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
