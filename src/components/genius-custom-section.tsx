"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Zap } from "lucide-react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const customFeatures = [
  {
    icon: Target,
    title: "Precyzyjne dopasowanie",
    description: "Agent AI zaprojektowany specjalnie pod potrzeby Twojej firmy i procesów biznesowych.",
  },
  {
    icon: Sparkles,
    title: "Indywidualna konfiguracja",
    description: "Każdy aspekt agenta dostosowany do Twoich wymagań i specyfiki branży.",
  },
  {
    icon: Zap,
    title: "Zaawansowana automatyzacja",
    description: "Kompleksowe rozwiązania automatyzujące kluczowe procesy w Twojej organizacji.",
  },
];

export function GeniusCustomSection() {
  return (
    <section className="bg-black py-24 px-8 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Potrzebujesz czegoś <span className="text-gradient">bardziej indywidualnego?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            GeniusCustom to indywidualny agent AI dla firm, które pragną czegoś bardziej precyzyjnego. 
            Zaprojektowany specjalnie pod Twoje potrzeby, procesy i cele biznesowe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {customFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-start p-8 rounded-xl glass glass-hover group"
              >
                <div className="mb-6 p-3 rounded-lg bg-white/5 group-hover:bg-cyan-500/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-100 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/products">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-xl glass glass-hover group cursor-pointer">
              <span className="text-lg font-semibold text-white group-hover:text-cyan-100 transition-colors">
                Dowiedz się więcej o GeniusCustom
              </span>
              <ArrowUpRight className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}



