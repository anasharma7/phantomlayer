import Link from "next/link";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { CategoryBadge } from "@/components/ui/CategoryBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredSignals } from "@/lib/data/homepage";

export function FeaturedSignals() {
  return (
    <AnimatedSection
      id="signals"
      className="relative mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32"
    >
      <AnimatedItem>
        <SectionHeading
          label="Featured Signals"
          title="Research & intelligence at the edge"
          description="Curated analysis spanning AI security, threat intelligence, and the systems shaping digital trust."
        />
      </AnimatedItem>

      <div className="grid gap-5 md:grid-cols-2">
        {featuredSignals.map((signal, index) => (
          <AnimatedItem key={signal.id}>
            <Link
              href="#"
              className={`group glow-border block rounded-2xl bg-surface-elevated/60 p-6 transition-all duration-300 hover:bg-surface-elevated hover:shadow-[0_0_48px_rgba(139,124,246,0.08)] md:p-8 ${
                index === 0 ? "md:col-span-2 md:grid md:grid-cols-[1fr_auto] md:gap-8" : ""
              }`}
            >
              <div>
                <CategoryBadge category={signal.category} />
                <h3
                  className={`mt-4 font-display font-semibold leading-snug text-foreground transition-colors group-hover:text-accent-cyan ${
                    index === 0 ? "text-2xl md:text-3xl" : "text-xl"
                  }`}
                >
                  {signal.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
                  {signal.excerpt}
                </p>
              </div>
              <div
                className={`mt-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-wider text-text-muted ${
                  index === 0 ? "md:mt-0 md:flex-col md:items-end md:justify-end" : ""
                }`}
              >
                <span>{signal.date}</span>
                <span className="text-accent-violet/60">·</span>
                <span>{signal.readTime}</span>
              </div>
            </Link>
          </AnimatedItem>
        ))}
      </div>
    </AnimatedSection>
  );
}
