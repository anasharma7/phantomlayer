import type { SignalCategory } from "@/lib/data/homepage";

const categoryStyles: Record<SignalCategory, string> = {
  "AI Security": "text-accent-cyan border-accent-cyan/25 bg-accent-cyan/5",
  "Threat Intelligence": "text-accent-violet border-accent-violet/25 bg-accent-violet/5",
  "Offensive Security": "text-accent-magenta border-accent-magenta/25 bg-accent-magenta/5",
  "Digital Trust": "text-text-secondary border-border bg-surface-elevated/50",
  "Cyber Psychology": "text-text-secondary border-accent-violet/20 bg-accent-violet/5",
};

interface CategoryBadgeProps {
  category: string;
}

export function CategoryBadge({ category }: CategoryBadgeProps) {
  const style =
    categoryStyles[category as SignalCategory] ??
    "text-text-muted border-border bg-surface-elevated/50";

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${style}`}
    >
      {category}
    </span>
  );
}
