"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function ProductsPreviewSection() {
  const products = [
    {
      title: "GeniusAds",
      description: "Automatyzacja kampanii reklamowych z inteligentnym targetowaniem i optymalizacją ROI.",
      href: "/products"
    },
    {
      title: "GeniusSales",
      description: "CRM z AI wspierający procesy sprzedażowe od lead generation po zamknięcie transakcji.",
      href: "/products"
    },
    {
      title: "GeniusSupport",
      description: "Inteligentny chatbot dostępny 24/7 dla szybkiego rozwiązywania problemów klientów.",
      href: "/products"
    },
    {
      title: "GeniusShop",
      description: "Kompleksowa automatyzacja sklepu internetowego z zarządzaniem produktami i klientami.",
      href: "/products"
    }
  ];

  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center py-24 px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            Nasze <span className="text-gradient">produkty</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Kompleksowe rozwiązania AI dla każdego aspektu Twojego biznesu
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <Link href={product.href}>
                <div
                  className="relative rounded-xl flex flex-col p-6 h-full cursor-pointer shadow-xl"
                  style={{
                    background: `linear-gradient(to bottom, #22D3EE, #3B82F6, #22D3EE)`,
                    boxShadow: '0 10px 40px rgba(34, 211, 238, 0.2)',
                  }}
                >
                  <h3 className="text-xl font-bold text-black mb-3">
                    {product.title}
                  </h3>
                  <p className="text-black text-sm leading-relaxed flex-1 mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center text-black font-semibold text-sm">
                    Dowiedz się więcej
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
