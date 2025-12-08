import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { ProductsPreviewSection } from "@/components/products-preview-section";
import { GeniusCustomSection } from "@/components/genius-custom-section";
import { PromoVideoSection } from "@/components/promo-video-section";
import { BenefitsSection } from "@/components/benefits-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <HowItWorksSection />
      <ProductsPreviewSection />
      <GeniusCustomSection />
      <PromoVideoSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
