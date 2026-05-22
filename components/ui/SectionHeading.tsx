interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl md:mb-16">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan/80">
        {label}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
