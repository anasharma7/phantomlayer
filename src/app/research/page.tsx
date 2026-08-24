import type { Metadata } from "next";

import { ContentCard } from "@/components/shared/content-card";
import { ContentGrid } from "@/components/shared/content-grid";
import { PageHeader } from "@/components/shared/page-header";
import { getPublished, sortByDateDesc } from "@/lib/content";
import { researchPosts } from "@/data/research";

export const metadata: Metadata = {
  title: "Research",
  description: "Long-form essays and analysis on cyber, AI, and digital culture.",
};

export default function ResearchPage() {
  const posts = sortByDateDesc(getPublished(researchPosts));

  return (
    <main className="flex-1">
      <PageHeader
        label="Archive"
        title="Research"
        description="Long-form essays on offensive security, AI-era trust systems, and internet-native culture."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <ContentGrid>
          {posts.map((post) => (
            <ContentCard
              key={post.slug}
              item={post}
              href={`/research/${post.slug}`}
              meta={post.readingTime}
            />
          ))}
        </ContentGrid>
      </section>
    </main>
  );
}
