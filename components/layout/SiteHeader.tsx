"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { navLinks } from "@/lib/data/homepage";

export function SiteHeader() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.header
      className="fixed top-0 z-50 w-full border-b border-border/50 glass-panel"
      initial={prefersReducedMotion ? false : { y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-8">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          Phantom<span className="text-accent-cyan">Layer</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wider text-text-muted transition-colors hover:text-accent-cyan"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#"
          className="rounded-full border border-accent-violet/30 bg-accent-violet/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-accent-violet transition-all hover:border-accent-violet/50 hover:bg-accent-violet/20"
        >
          Sign In
        </Link>
      </div>
    </motion.header>
  );
}
