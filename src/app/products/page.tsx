"use client";

import { motion } from "framer-motion";

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
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
              <div className="text-[#FFFFFF] mb-2">Przyszłość Twojego biznesu</div>
              <div className="bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] bg-clip-text text-transparent">
                zaczyna się tutaj
              </div>
            </h2>
            <p className="text-lg md:text-xl text-center text-[#BBBBBB] max-w-3xl mx-auto font-normal">
              Kompleksowe rozwiązania AI dla każdego aspektu Twojego biznesu
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="relative rounded-lg flex flex-col p-8 cursor-pointer shadow-xl min-h-[500px]"
                  style={{
                    background: `linear-gradient(to bottom, #22D3EE, #3B82F6, #22D3EE)`,
                    boxShadow: '0 10px 40px rgba(34, 211, 238, 0.2)',
                  }}
                  onClick={product.onClick}
                >
                  <h3 className="text-2xl font-bold text-[#000000] mb-6 text-left">
                    {product.title}
                  </h3>
                  
                  <div className="space-y-6 text-left flex-1">
                    <p className="text-[#000000] text-sm leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="pt-2 space-y-3">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
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

