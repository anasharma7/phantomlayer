import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-accent-cyan/90 to-accent-violet/90 text-void font-medium shadow-[0_0_32px_rgba(139,124,246,0.25)] hover:shadow-[0_0_40px_rgba(78,205,196,0.3)] hover:brightness-110",
  secondary:
    "glass-panel text-text-secondary hover:text-foreground hover:border-accent-violet/30",
  ghost:
    "text-text-muted hover:text-foreground border border-transparent hover:border-border",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm tracking-wide transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
