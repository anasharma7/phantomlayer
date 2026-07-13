import type { Metadata } from "next";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

import { PageHeader } from "@/components/shared/page-header";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect via GitHub, LinkedIn, Substack, and social channels.",
};

const contactLinks = [
  {
    label: "Email",
    value: siteConfig.author.email,
    href: `mailto:${siteConfig.author.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com",
    href: siteConfig.links.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com",
    href: siteConfig.links.linkedin,
    icon: Linkedin,
  },
  {
    label: "X / Twitter",
    value: "x.com",
    href: siteConfig.links.twitter,
    icon: Twitter,
  },
] as const;

export default function ContactPage() {
  return (
    <main className="flex-1">
      <PageHeader
        label="Signals"
        title="Contact"
        description="Open channels for collaboration, research exchange, and speaking inquiries."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2">
          {contactLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="glass-panel group flex items-center gap-4 rounded-xl p-6 transition-colors hover:border-[var(--border-strong)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-[var(--border)] bg-surface text-accent transition-colors group-hover:glow-accent">
                <link.icon className="size-5" aria-hidden />
              </span>
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">
                  {link.label}
                </span>
                <span className="mt-1 block font-display text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                  {link.value}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
