"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="grid-overlay absolute inset-0 opacity-60" />

      <motion.div
        className="absolute -left-1/4 top-1/4 h-[480px] w-[480px] rounded-full blur-[120px]"
        style={{ background: "rgba(45, 212, 191, 0.15)" }}
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-1/4 top-0 h-[400px] w-[400px] rounded-full blur-[100px]"
        style={{ background: "rgba(139, 92, 246, 0.1)" }}
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent"
      />

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.15]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hero-dots"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.5" fill="currentColor" className="text-foreground" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>

      <div className="absolute inset-x-0 top-[38%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </div>
  );
}
