import { FileSearch } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="glass-panel flex flex-col items-center rounded-xl px-6 py-16 text-center">
      <FileSearch className="size-10 text-muted" aria-hidden />
      <h2 className="font-display mt-6 text-xl font-semibold tracking-tight">
        {title}
      </h2>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
