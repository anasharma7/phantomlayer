"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function AnimatedSection({
  children,
  className = "",
  id,
}: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
    >
      {children}
    </motion.section>
  );
}

interface AnimatedItemProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedItem({ children, className = "" }: AnimatedItemProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      transition={defaultTransition}
    >
      {children}
    </motion.div>
  );
}
