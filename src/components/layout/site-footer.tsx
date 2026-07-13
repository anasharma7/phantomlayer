import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Separator } from "@/components/ui/separator";

const socialLinks = [
  { label: "GitHub", href: siteConfig.links.github, icon: Github },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: Linkedin },
  { label: "X", href: siteConfig.links.twitter, icon: Twitter },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight">
              {siteConfig.name}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <link.icon className="size-4" aria-hidden />
                </Link>
              ))}
            </div>
          </div>
          <nav
            className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3"
            aria-label="Footer"
          >
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-accent"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <Separator className="my-10" />
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
            © {year} {siteConfig.name}. All signals reserved.
          </p>
          <p className="font-mono text-[11px] text-muted">
            Built for the AI-era web.
          </p>
        </div>
      </div>
    </footer>
  );
}
