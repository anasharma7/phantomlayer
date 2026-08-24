import { cn } from "@/lib/utils";

interface ContentGridProps {
  children: React.ReactNode;
  columns?: 2 | 3;
  className?: string;
}

const columnClasses = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
} as const;

export function ContentGrid({
  children,
  columns = 2,
  className,
}: ContentGridProps) {
  return (
    <div className={cn("grid gap-6", columnClasses[columns], className)}>
      {children}
    </div>
  );
}
