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
                  className="relative rounded-xl flex flex-col p-6 h-full cursor-pointer transition-all duration-300 glass glass-hover group border border-white/5 hover:border-cyan-500/30"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-indigo-600/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4 group-hover:text-gray-300 transition-colors">
                    {product.description}
                  </p>
                  <div className="flex items-center text-cyan-400 font-semibold text-sm group-hover:text-cyan-300">
                    Dowiedz się więcej
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
