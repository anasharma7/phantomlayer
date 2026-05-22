import type { Metadata } from "next";

import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Podcast",
  description: "Episodes exploring cyber culture, AI, and internet-native systems.",
};

export default function PodcastPage() {
  return (
    <main className="flex-1">
      <PageHeader
        label="Media"
        title="Podcast"
        description="Episode cards with Spotify and YouTube embeds — next phase."
      />
    </main>
  );
}
