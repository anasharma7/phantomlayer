import { FeaturedSection } from "@/components/home/featured-section";
import { HeroSection } from "@/components/home/hero-section";

export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <FeaturedSection />
    </main>
  );
}
