import type { Metadata } from "next";

import { ContentCard } from "@/components/shared/content-card";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
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
  const projects = labProjects.filter((project) => project.published);

  return (
    <main className="flex-1">
      <PageHeader
        label="Experiments"
        title="Cyber Lab"
        description="Interactive project archive — PortSwigger labs, AI security experiments, and geospatial work."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.slug} className="flex flex-col gap-3">
              <ContentCard
                item={project}
                href={`/lab/${project.slug}`}
                meta={statusLabels[project.status]}
              />
              {project.stack && (
                <ul className="flex flex-wrap gap-2 px-1" aria-label="Tech stack">
                  {project.stack.map((tech) => (
                    <li key={tech}>
                      <Badge variant="outline" className="text-[9px]">
                        {tech}
                      </Badge>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
