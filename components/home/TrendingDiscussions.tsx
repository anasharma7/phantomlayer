import Link from "next/link";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { CategoryBadge } from "@/components/ui/CategoryBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { trendingDiscussions } from "@/lib/data/homepage";

export function TrendingDiscussions() {
  return (
    <AnimatedSection
      id="discussions"
      className="relative mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_30%_at_80%_50%,rgba(78,205,196,0.04),transparent)]" />

      <AnimatedItem>
        <SectionHeading
          label="Trending Discussions"
          title="Where the community converges"
          description="Live discourse on AI security, offensive research ethics, and the psychology of digital systems."
        />
      </AnimatedItem>

      <div className="space-y-3">
        {trendingDiscussions.map((discussion) => (
          <AnimatedItem key={discussion.id}>
            <Link
              href="#"
              className="group flex flex-col gap-4 rounded-xl border border-border bg-surface/50 p-5 transition-all duration-300 hover:border-accent-cyan/20 hover:bg-surface-elevated/80 md:flex-row md:items-center md:justify-between md:p-6"
            >
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <CategoryBadge category={discussion.tag} />
                  <span className="font-mono text-[10px] text-text-muted">
                    {discussion.lastActive}
                  </span>
                </div>
                <h3 className="font-display text-lg font-medium text-foreground transition-colors group-hover:text-accent-cyan md:text-xl">
                  {discussion.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-text-secondary">
                  {discussion.excerpt}
                </p>
                <p className="mt-3 font-mono text-xs text-text-muted">
                  @{discussion.author}
                </p>
              </div>

              <div className="flex shrink-0 gap-6 font-mono text-xs uppercase tracking-wider text-text-muted md:text-right">
                <div>
                  <span className="block text-lg font-medium text-foreground">
                    {discussion.replies}
                  </span>
                  <span>Replies</span>
                </div>
                <div>
                  <span className="block text-lg font-medium text-foreground">
                    {discussion.views.toLocaleString()}
                  </span>
                  <span>Views</span>
                </div>
              </div>
            </Link>
          </AnimatedItem>
        ))}
      </div>

      <AnimatedItem>
        <div className="mt-10 text-center">
          <Link
            href="#"
            className="font-mono text-xs uppercase tracking-[0.2em] text-accent-violet transition-colors hover:text-accent-cyan"
          >
            View all discussions →
          </Link>
        </div>
      </AnimatedItem>
    </AnimatedSection>
  );
}
