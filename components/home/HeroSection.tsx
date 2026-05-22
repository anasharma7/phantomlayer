"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AtmosphericBackground } from "@/components/home/AtmosphericBackground";
import { Button } from "@/components/ui/Button";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/motion";

const topics = [
  "AI Security",
  "Offensive Security",
  "Digital Trust",
  "Synthetic Identity",
];

function HeroContent({ animated }: { animated: boolean }) {
  const Tag = animated ? motion.p : "p";
  const Title = animated ? motion.h1 : "h1";
  const Subtitle = animated ? motion.p : "p";
  const Actions = animated ? motion.div : "div";
  const Topics = animated ? motion.div : "div";

  const motionProps = animated
    ? { variants: fadeUp, transition: defaultTransition }
    : {};

  return (
    <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center md:min-h-screen md:px-8">
      <Tag
        className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-accent-cyan/70"
        {...(animated ? { ...motionProps } : {})}
      >
        Intelligence · Security · Culture
      </Tag>

      <Title
        className="font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        {...(animated ? { variants: fadeUp, transition: { ...defaultTransition, delay: 0.05 } } : {})}
      >
        <span className="gradient-text">PhantomLayer</span>
      </Title>

      <Subtitle
        className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary md:mt-8 md:text-xl"
        {...(animated ? { variants: fadeUp, transition: { ...defaultTransition, delay: 0.1 } } : {})}
      >
        Exploring AI, cybersecurity, digital trust, and the future internet.
      </Subtitle>

      <Actions
        className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-5"
        {...(animated ? { variants: fadeUp, transition: { ...defaultTransition, delay: 0.15 } } : {})}
      >
        <Button href="#signals" variant="primary">
          Explore Signals
        </Button>
        <Button href="#discussions" variant="secondary">
          Join Discussions
        </Button>
      </Actions>

      <Topics
        className="mt-16 flex flex-wrap items-center justify-center gap-6 font-mono text-[11px] uppercase tracking-widest text-text-muted"
        {...(animated ? { variants: fadeUp, transition: { ...defaultTransition, delay: 0.2 } } : {})}
      >
        {topics.map((topic) => (
          <span key={topic} className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-accent-violet/60" />
            {topic}
          </span>
        ))}
      </Topics>
    </div>
  );
}

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[90vh] overflow-hidden md:min-h-screen">
      <AtmosphericBackground />
      {prefersReducedMotion ? (
        <HeroContent animated={false} />
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <HeroContent animated />
        </motion.div>
      )}
    </section>
  );
}
