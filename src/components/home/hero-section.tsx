"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight, Radio } from "lucide-react";
import { motion } from "framer-motion";

import { HeroBackground } from "@/components/home/hero-background";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const interestTags = [
  "Offensive Security",
  "AI Safety",
  "Trust & Safety",
  "Digital Identity",
  "Platform Abuse",
  "Geospatial Systems",
] as const;

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pt-24">
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex max-w-4xl flex-col"
        >
          <motion.div variants={fadeUp} custom={0}>
            <Badge variant="default" className="mb-8 gap-2">
              <Radio className="size-3 animate-pulse" aria-hidden />
              {siteConfig.identity.status}
            </Badge>
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="font-mono text-xs uppercase tracking-[0.35em] text-muted"
          >
            {siteConfig.identity.headline}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            custom={2}
            className="font-display mt-4 text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-foreground">{siteConfig.name}</span>
            <span className="mt-2 block text-gradient-accent">
              Intelligence Archive
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={3}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            {siteConfig.identity.statement}
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Button asChild size="lg">
              <Link href="/research">
                Explore Research
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/lab">Enter Cyber Lab</Link>
            </Button>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            custom={5}
            className="mt-14 flex flex-wrap gap-2"
            aria-label="Focus areas"
          >
            {interestTags.map((tag) => (
              <li key={tag}>
                <span className="glass-panel inline-block rounded-md px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {tag}
                </span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="size-4 text-accent/70" aria-hidden />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
