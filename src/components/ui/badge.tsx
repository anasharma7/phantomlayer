import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-widest transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-[var(--border)] bg-accent-muted text-accent",
        secondary:
          "border-[var(--border)] bg-secondary-muted text-secondary",
        outline: "border-[var(--border)] text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
