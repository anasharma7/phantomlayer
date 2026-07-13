import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { getCategoryLabel } from "@/lib/categories";
import type { ContentMeta } from "@/types/content";

interface ContentCardProps {
  item: ContentMeta;
  href: string;
  meta?: string;
}

export function ContentCard({ item, href, meta }: ContentCardProps) {
  const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="glass-panel group relative flex flex-col rounded-xl p-6 transition-colors hover:border-[var(--border-strong)]">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="outline">{getCategoryLabel(item.category)}</Badge>
        {item.featured && <Badge variant="secondary">Featured</Badge>}
      </div>

      <h2 className="font-display mt-4 text-xl font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
        <Link href={href} className="after:absolute after:inset-0">
          {item.title}
        </Link>
      </h2>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {item.description}
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] pt-4">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted">
          <Calendar className="size-3" aria-hidden />
          <time dateTime={item.date}>{formattedDate}</time>
          {meta && (
            <>
              <span aria-hidden>·</span>
              <span>{meta}</span>
            </>
          )}
        </div>
        <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-accent opacity-0 transition-opacity group-hover:opacity-100">
          Read
          <ArrowRight className="size-3" aria-hidden />
        </span>
      </div>
    </article>
  );
}
