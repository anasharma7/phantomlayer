import { Badge } from "@/components/ui/badge";

interface PageHeaderProps {
  label: string;
  title: string;
  description: string;
}

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <header className="border-b border-[var(--border)] bg-surface/30 py-20 pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Badge variant="outline" className="mb-6">
          {label}
        </Badge>
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {description}
        </p>
      </div>
    </header>
  );
}
