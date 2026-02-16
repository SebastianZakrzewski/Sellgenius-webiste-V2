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
    <section className="min-h-screen bg-black flex flex-col items-center justify-center py-24 px-8 relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
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
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link href={product.href}>
                <div
                  className="relative rounded-xl flex flex-col p-6 h-full cursor-pointer border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                >
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4 group-hover:text-gray-300 transition-colors">
                    {product.description}
                  </p>
                  <div className="flex items-center text-cyan-400 font-semibold text-sm group-hover:text-cyan-300 transition-colors">
                    Dowiedz się więcej
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
