import Link from "next/link";
import { ProductsPreviewSection } from "@/components/products-preview-section";
import { BenefitsSection } from "@/components/benefits-section";
import { ChevronLeft } from "lucide-react";

export const metadata = {
  title: "Automatyzacje i AI dla firm | SellGenius",
  description: "Rozwiązania AI i automatyzacji dla Twojej firmy - GeniusAds, GeniusSales, GeniusSupport, GeniusShop. Kluczowe korzyści dla Twojego biznesu.",
};

export default function AutomationPage() {
  return (
    <main className="flex flex-col">
      <div className="fixed top-24 left-6 z-50">
        <Link
          href="/#jak-mozemy-ci-pomoc"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium"
        >
          <ChevronLeft className="w-4 h-4" />
          Wróć do oferty
        </Link>
      </div>
      <ProductsPreviewSection />
      <BenefitsSection />
    </main>
  );
}
