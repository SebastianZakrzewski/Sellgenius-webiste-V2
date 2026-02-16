import { HeroSection } from "@/components/hero-section";
import { OverviewSection } from "@/components/overview-section";
import { OfferSection } from "@/components/offer-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <OverviewSection />
      <OfferSection />
      <CTASection />
      <Footer />
    </main>
  );
}
