"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export default function ProductsPage() {
  const handleGeniusAdsClick = () => {
    // router.push('/genius-ads')
    console.log('GeniusAds clicked');
  };

  const handleGeniusSalesClick = () => {
    // router.push('/genius-sales')
    console.log('GeniusSales clicked');
  };

  const handleGeniusSupportClick = () => {
    // router.push('/genius-support')
    console.log('GeniusSupport clicked');
  };

  const handleGeniusShopClick = () => {
    // router.push('/genius-shop')
    console.log('GeniusShop clicked');
  };

  const products = [
    {
      title: "GeniusAds",
      description: "Automatyzacja tworzenia i optymalizacji kampanii reklamowych. Inteligentne targetowanie, analiza wydajności i maksymalizacja ROI.",
      features: [
        "Automatyczne tworzenie reklam",
        "Optymalizacja kampanii w czasie rzeczywistym",
        "Zaawansowana analityka i raportowanie",
        "Targetowanie precyzyjne"
      ],
      onClick: handleGeniusAdsClick
    },
    {
      title: "GeniusSales",
      description: "Wsparcie procesów sprzedażowych od lead generation po zamknięcie transakcji. CRM zintegrowany z AI dla maksymalnej efektywności.",
      features: [
        "Generowanie i kwalifikacja leadów",
        "Automatyzacja follow-up",
        "Personalizacja ofert",
        "Prognozowanie sprzedaży"
      ],
      onClick: handleGeniusSalesClick
    },
    {
      title: "GeniusSupport",
      description: "Inteligentny chatbot i system wsparcia klienta dostępny 24/7. Szybkie rozwiązywanie problemów i zwiększanie satysfakcji klientów.",
      features: [
        "Chatbot dostępny 24/7",
        "Automatyczne rozwiązywanie problemów",
        "Integracja z bazą wiedzy",
        "Analiza sentymentu klientów"
      ],
      onClick: handleGeniusSupportClick
    },
    {
      title: "GeniusShop",
      description: "Kompleksowa automatyzacja sklepu internetowego. Zarządzanie produktami, zamówieniami i klientami z wykorzystaniem AI.",
      features: [
        "Automatyczne zarządzanie produktami",
        "Optymalizacja cen dynamicznych",
        "Personalizacja doświadczeń zakupowych",
        "Zarządzanie zapasami"
      ],
      onClick: handleGeniusShopClick
    },
  ];


  return (
    <main className="flex flex-col">
      {/* Sekcja Produktów */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-48 pb-24 px-24 bg-[#000000]">
        <div className="max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
              <div className="text-[#FFFFFF] mb-4">Przyszłość Twojego biznesu</div>
              <div className="bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] bg-clip-text text-transparent">
                zaczyna się tutaj
              </div>
            </h2>
            <p className="text-lg md:text-xl text-center text-[#BBBBBB] max-w-3xl mx-auto font-normal mb-12">
              Kompleksowe rozwiązania AI dla każdego aspektu Twojego biznesu
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
              <button
                className="px-6 py-3 bg-[#FFFFFF] text-[#000000] rounded-3xl font-normal text-base hover:opacity-90 transition-opacity"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
              >
                Kontakt ze sprzedażą
              </button>
              <button
                className="px-6 py-3 bg-[#1A1A1A] text-[#FFFFFF] rounded-3xl font-normal text-base hover:opacity-90 transition-opacity flex items-center gap-2"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
              >
                Zacznij tworzyć
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto mt-16">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col h-full"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="relative rounded-lg flex flex-col p-10 cursor-pointer shadow-xl h-full"
                  style={{
                    background: `linear-gradient(to bottom, #22D3EE, #3B82F6, #22D3EE)`,
                    boxShadow: '0 10px 40px rgba(34, 211, 238, 0.2)',
                  }}
                  onClick={product.onClick}
                >
                  <h3 className="text-2xl font-bold text-[#000000] mb-4 text-left">
                    {product.title}
                  </h3>
                  
                  <div className="flex justify-center mb-8">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        product.onClick();
                      }}
                      className="w-10 h-10 bg-[#000000] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                      aria-label="Dowiedz się więcej"
                    >
                      <ArrowDown className="w-5 h-5 text-[#FFFFFF]" />
                    </button>
                  </div>
                  
                  <div className="space-y-8 text-left flex-1">
                    <p className="text-[#000000] text-sm leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="pt-4 space-y-4">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="text-[#000000] text-sm mt-0.5">•</span>
                          <p className="text-[#000000] text-sm leading-relaxed">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

