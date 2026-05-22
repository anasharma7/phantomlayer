import type { Metadata } from "next";

import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect via GitHub, LinkedIn, Substack, and social channels.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <PageHeader
        label="Signals"
        title="Contact"
        description="Social and contact cards — wired in Phase 2."
      />
    </main>
  );
}
