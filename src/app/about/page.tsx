import type { Metadata } from "next";

import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "About",
  description: "Story, philosophy, and interdisciplinary focus.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageHeader
        label="Profile"
        title="About"
        description="Personal narrative, mission, and cyber + AI philosophy — coming in the next build phase."
      />
    </main>
  );
}
