import Link from "next/link";
import { footerColumns } from "@/lib/data/homepage";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface/80">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(139,124,246,0.06),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="font-display text-2xl font-semibold tracking-tight"
            >
              Phantom<span className="text-accent-cyan">Layer</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              A next-generation platform for cyber intelligence, AI security
              discourse, and research into the future internet.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-12">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-cyan/70">
                  {column.title}
                </h3>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-text-muted transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-text-muted">
            © {year} PhantomLayer. All signals reserved.
          </p>
          <div className="flex gap-6 font-mono text-[11px] uppercase tracking-wider text-text-muted">
            <Link href="#" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Status
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
