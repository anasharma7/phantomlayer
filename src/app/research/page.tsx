import type { Metadata } from "next";

import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Research",
  description: "Long-form essays and analysis on cyber, AI, and digital culture.",
};

export default function ResearchPage() {
  return (
    <main className="flex-1">
      <PageHeader
        label="Archive"
        title="Research"
        description="MDX-powered articles with categories and tags — scaffolded for Phase 2."
      />
    </main>
  );
}
