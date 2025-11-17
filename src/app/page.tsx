import { HeroSection } from "@/components/hero-section";
import { OverviewSection } from "@/components/overview-section";
import { PromoVideoSection } from "@/components/promo-video-section";
import { ProductsPreviewSection } from "@/components/products-preview-section";
import { BenefitsSection } from "@/components/benefits-section";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <OverviewSection />
      <ProductsPreviewSection />
      <PromoVideoSection />
      <BenefitsSection />
      <CTASection />
    </main>
  );
}
