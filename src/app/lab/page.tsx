import type { Metadata } from "next";

import { ContentCard } from "@/components/shared/content-card";
import { ContentGrid } from "@/components/shared/content-grid";
import { PageHeader } from "@/components/shared/page-header";
import { TagList } from "@/components/shared/tag-list";
import { getPublished, sortByDateDesc } from "@/lib/content";
import { labProjects } from "@/data/lab";

export const metadata: Metadata = {
  title: "Cyber Lab",
  description: "Offensive security writeups, AI experiments, and GIS projects.",
};

const statusLabels = {
  active: "In Progress",
  complete: "Complete",
  archived: "Archived",
} as const;

export default function LabPage() {
  const projects = sortByDateDesc(getPublished(labProjects));

  return (
    <main className="flex-1">
      <PageHeader
        label="Experiments"
        title="Cyber Lab"
        description="Interactive project archive — PortSwigger labs, AI security experiments, and geospatial work."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <ContentGrid columns={3}>
          {projects.map((project) => (
            <div key={project.slug} className="flex flex-col gap-3">
              <ContentCard
                item={project}
                href={`/lab/${project.slug}`}
                meta={statusLabels[project.status]}
              />
              {project.stack && (
                <TagList tags={project.stack} className="flex flex-wrap gap-2 px-1" />
              )}
            </div>
          ))}
        </ContentGrid>
      </section>
    </main>
  );
}
