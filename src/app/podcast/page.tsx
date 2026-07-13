import type { Metadata } from "next";
import Link from "next/link";
import { Headphones, Youtube } from "lucide-react";

import { ContentCard } from "@/components/shared/content-card";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { podcastEpisodes } from "@/data/podcast";

export const metadata: Metadata = {
  title: "Podcast",
  description: "Episodes exploring cyber culture, AI, and internet-native systems.",
};

export default function PodcastPage() {
  const episodes = podcastEpisodes.filter((episode) => episode.published);

  return (
    <main className="flex-1">
      <PageHeader
        label="Media"
        title="Podcast"
        description="Conversations on platform abuse, AI red teaming, and the systems shaping the modern internet."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8">
          {episodes.map((episode) => (
            <div
              key={episode.slug}
              className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end"
            >
              <ContentCard
                item={episode}
                href={`/podcast/${episode.slug}`}
                meta={`Ep. ${episode.episode} · ${episode.duration}`}
              />
              <div className="flex gap-2 lg:flex-col">
                {episode.spotifyUrl && (
                  <Button asChild variant="outline" size="sm">
                    <Link href={episode.spotifyUrl} target="_blank" rel="noopener noreferrer">
                      <Headphones aria-hidden />
                      Spotify
                    </Link>
                  </Button>
                )}
                {episode.youtubeUrl && (
                  <Button asChild variant="outline" size="sm">
                    <Link href={episode.youtubeUrl} target="_blank" rel="noopener noreferrer">
                      <Youtube aria-hidden />
                      YouTube
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
