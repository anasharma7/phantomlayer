import type { Metadata } from "next";

import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: "Story, philosophy, and interdisciplinary focus.",
};

const focusAreas = [
  "Offensive Security",
  "AI Safety & Red Teaming",
  "Trust & Safety Systems",
  "Digital Identity",
  "Geospatial Intelligence",
  "Platform Abuse Research",
] as const;

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageHeader
        label="Profile"
        title="About"
        description="Cyber researcher mapping the collision of offensive security, AI-era trust systems, and internet-native culture."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I&apos;m {siteConfig.name} — a researcher and builder working at the
            intersection of cybersecurity, artificial intelligence, and the
            systems that govern how people trust each other online.
          </p>
          <p>
            This platform is an intelligence archive: long-form research on how
            adversaries exploit platforms, how AI shifts the economics of
            deception, and how defenders can think in systems rather than
            silos.
          </p>
          <p>
            My work spans offensive security labs, AI red teaming experiments,
            geospatial OSINT, and the policy-adjacent questions that emerge when
            technology outpaces governance.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Focus Areas
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <li key={area}>
                <Badge variant="outline">{area}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
