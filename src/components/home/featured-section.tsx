import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ContentCard } from "@/components/shared/content-card";
import { ContentGrid } from "@/components/shared/content-grid";
import { Button } from "@/components/ui/button";
import { getFeatured, getPublished } from "@/lib/content";
import { labProjects } from "@/data/lab";
import { researchPosts } from "@/data/research";

export function FeaturedSection() {
  const featuredResearch = getFeatured(getPublished(researchPosts), 2);
  const featuredLab = getFeatured(getPublished(labProjects), 1);

  return (
    <section className="border-t border-[var(--border)] bg-surface/30 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
              Latest Signals
            </p>
            <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              From the Archive
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link href="/research">
              View all research
              <ArrowRight />
            </Link>
          </Button>
        </div>

        <ContentGrid columns={3} className="mt-12">
          {featuredResearch.map((post) => (
            <ContentCard
              key={post.slug}
              item={post}
              href={`/research/${post.slug}`}
              meta={post.readingTime}
            />
          ))}
          {featuredLab.map((project) => (
            <ContentCard
              key={project.slug}
              item={project}
              href={`/lab/${project.slug}`}
              meta="In Progress"
            />
          ))}
        </ContentGrid>
      </div>
    </section>
  );
}
