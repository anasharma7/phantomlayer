import type { Metadata } from "next";

import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Cyber Lab",
  description: "Offensive security writeups, AI experiments, and GIS projects.",
};

export default function LabPage() {
  return (
    <main className="flex-1">
      <PageHeader
        label="Experiments"
        title="Cyber Lab"
        description="Interactive project archive — PortSwigger labs, AI security, geospatial work."
      />
    </main>
  );
}
