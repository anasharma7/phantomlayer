"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mediaEpisodes } from "@/lib/data/homepage";

function Waveform() {
  const prefersReducedMotion = useReducedMotion();
  const bars = [3, 5, 8, 6, 9, 7, 4, 6, 8, 5, 3, 7];

  return (
    <div className="flex h-12 items-end justify-center gap-1" aria-hidden>
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className="w-1 rounded-full bg-gradient-to-t from-accent-violet/40 to-accent-cyan/80"
          style={{ height: `${height * 4}px` }}
          animate={
            prefersReducedMotion
              ? undefined
              : { scaleY: [1, 1.4, 0.8, 1.2, 1] }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.08,
                  ease: "easeInOut",
                }
          }
        />
      ))}
    </div>
  );
}

export function MediaPodcast() {
  return (
    <AnimatedSection
      id="media"
      className="relative mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32"
    >
      <AnimatedItem>
        <SectionHeading
          label="Media"
          title="The Phantom Signal"
          description="Long-form conversations on AI security, offensive research, and the cultural forces reshaping the internet."
        />
      </AnimatedItem>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <AnimatedItem>
          <div className="glow-border flex h-full flex-col justify-between rounded-2xl bg-gradient-to-br from-surface-elevated to-surface p-8 md:p-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan/80">
                Now Playing
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold leading-tight md:text-3xl">
                {mediaEpisodes[0].title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {mediaEpisodes[0].description}
              </p>
              {mediaEpisodes[0].guests && (
                <p className="mt-4 font-mono text-xs text-text-muted">
                  with {mediaEpisodes[0].guests}
                </p>
              )}
            </div>

            <div className="mt-8">
              <Waveform />
              <div className="mt-6 flex items-center justify-between">
                <span className="font-mono text-sm text-accent-cyan">
                  {mediaEpisodes[0].duration}
                </span>
                <Link
                  href="#"
                  className="rounded-full bg-accent-violet/20 px-5 py-2 font-mono text-xs uppercase tracking-wider text-accent-violet transition-all hover:bg-accent-violet/30"
                >
                  Listen
                </Link>
              </div>
            </div>
          </div>
        </AnimatedItem>

        <div className="space-y-3">
          {mediaEpisodes.slice(1).map((episode) => (
            <AnimatedItem key={episode.id}>
              <Link
                href="#"
                className="group flex gap-5 rounded-xl border border-border bg-surface/40 p-5 transition-all hover:border-accent-violet/25 hover:bg-surface-elevated/60"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-accent-violet/10 font-mono text-sm font-medium text-accent-violet">
                  {episode.episode}
                </div>
                <div className="min-w-0">
                  <h4 className="font-display text-base font-medium text-foreground transition-colors group-hover:text-accent-cyan">
                    {episode.title}
                  </h4>
                  <p className="mt-1 line-clamp-2 text-sm text-text-secondary">
                    {episode.description}
                  </p>
                  <span className="mt-2 inline-block font-mono text-[11px] text-text-muted">
                    {episode.duration}
                  </span>
                </div>
              </Link>
            </AnimatedItem>
          ))}

          <AnimatedItem>
            <Link
              href="#"
              className="flex items-center justify-center rounded-xl border border-dashed border-border py-6 font-mono text-xs uppercase tracking-[0.2em] text-text-muted transition-colors hover:border-accent-cyan/30 hover:text-accent-cyan"
            >
              Browse all episodes
            </Link>
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
}
