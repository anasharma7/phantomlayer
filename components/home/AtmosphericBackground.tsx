"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AtmosphericBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-void" />

      <div className="grid-overlay absolute inset-0 opacity-40" />

      <div
        className={`absolute -left-1/4 top-0 h-[70vh] w-[70vw] rounded-full bg-[radial-gradient(ellipse,rgba(139,124,246,0.18)_0%,transparent_70%)] ${prefersReducedMotion ? "" : "animate-drift"}`}
      />
      <div
        className={`absolute -right-1/4 top-1/4 h-[60vh] w-[60vw] rounded-full bg-[radial-gradient(ellipse,rgba(78,205,196,0.12)_0%,transparent_70%)] ${prefersReducedMotion ? "" : "animate-drift-slow"}`}
      />
      <div
        className={`absolute bottom-0 left-1/3 h-[50vh] w-[50vw] rounded-full bg-[radial-gradient(ellipse,rgba(199,125,255,0.08)_0%,transparent_70%)] ${prefersReducedMotion ? "" : "animate-pulse-glow"}`}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void/20 to-void" />

      {!prefersReducedMotion && (
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent"
          initial={{ top: "-10%" }}
          animate={{ top: "110%" }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,124,246,0.08),transparent)]" />
    </div>
  );
}
