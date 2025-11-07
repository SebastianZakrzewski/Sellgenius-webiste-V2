"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Target, TrendingUp, Headphones, ShoppingCart } from "lucide-react";

export default function Home() {
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
      icon: ArrowDown,
      onClick: handleGeniusAdsClick
    },
    {
      title: "GeniusSales",
      icon: ArrowDown,
      onClick: handleGeniusSalesClick
    },
    {
      title: "GeniusSupport",
      icon: ArrowDown,
      onClick: handleGeniusSupportClick
    },
    {
      title: "GeniusShop",
      icon: ArrowDown,
      onClick: handleGeniusShopClick
    },
  ];
  return (
    <main className="flex flex-col">
      {/* Sekcja Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center p-24 pt-32 bg-[#000000]">
        <div className="z-10 max-w-5xl w-full items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center -mb-12 relative"
            >
              <div className="relative">
                <Image
                  src="/images/image.png"
                  alt="Hero Image"
                  width={400}
                  height={300}
                  className="object-contain"
                  priority
                />
                {/* Gradient overlay w kolorach napisów */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] mix-blend-lighten opacity-100"
                  style={{
                    maskImage: 'url(/images/image.png)',
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskImage: 'url(/images/image.png)',
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    filter: 'brightness(1.2)',
                  }}
                />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 leading-tight">
              <div className="text-[#FFFFFF] mb-2">Sztuczna inteligencja, która</div>
              <div className="bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] bg-clip-text text-transparent mb-2">
                sprzedaje, wspiera i rozwija Twój
              </div>
              <div className="bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] bg-clip-text text-transparent">
                biznes
              </div>
            </h1>
            <p className="text-lg md:text-xl text-center text-[#BBBBBB] mb-8 max-w-3xl mx-auto font-normal">
              Dzięki zaawansowanej sztucznej inteligencji Twój biznes może osiągnąć niespotykane dotąd wyniki
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center"
            >
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] hover:from-[#22D3EE] hover:to-[#3B82F6] text-[#000000] border-0 shadow-lg font-normal rounded-md"
              >
                Rozpocznij teraz
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
              <span className="text-[#FFFFFF]">Przyszłość Twojego biznesu </span>
              <span className="bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] bg-clip-text text-transparent">
                zaczyna się tutaj
              </span>
            </h2>
            <p className="text-lg md:text-xl text-center text-[#BBBBBB] max-w-3xl mx-auto font-normal">
              Kompleksowe rozwiązania AI dla każdego aspektu Twojego biznesu
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[160px] gap-y-[120px] max-w-2xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="relative w-[270px] h-[270px] bg-gradient-to-b from-[#22D3EE] to-[#3B82F6] rounded flex flex-col items-center justify-start pt-8 p-4 cursor-pointer mx-auto"
                  onClick={product.onClick}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-[#000000] mb-8">
                    {product.title}
                  </h3>
                  <div className="mt-auto mb-6">
                    <div className="w-10 h-10 bg-[#000000] rounded-full flex items-center justify-center">
                      <product.icon className="h-5 w-5 text-[#FFFFFF]" />
                    </div>
                  </div>
                </motion.div>
                <button
                  onClick={product.onClick}
                  className="mt-4 text-[#FFFFFF] uppercase font-semibold hover:text-[#22D3EE] transition-colors duration-300"
                >
                  ODKRYJ
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
