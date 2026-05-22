import { FeaturedSignals } from "@/components/home/FeaturedSignals";
import { HeroSection } from "@/components/home/HeroSection";
import { MediaPodcast } from "@/components/home/MediaPodcast";
import { TrendingDiscussions } from "@/components/home/TrendingDiscussions";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturedSignals />
        <TrendingDiscussions />
        <MediaPodcast />
      </main>
      <SiteFooter />
    </>
  );
}
