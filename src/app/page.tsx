import { HeroSection } from "@/components/hero-section";
import { OverviewSection } from "@/components/overview-section";
import { ServicesSection } from "@/components/services-section";
import { AISystemSection } from "@/components/ai-system-section";
import { PromoVideoSection } from "@/components/promo-video-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <OverviewSection />
      <ServicesSection />
      <AISystemSection />
      <PromoVideoSection />
      <CTASection />
      <Footer />
    </main>
  );
}
