"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap, BarChart3, Target } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Zwiększona sprzedaż",
      description: "Automatyzacja procesów sprzedażowych i inteligentne targetowanie prowadzą do wyższych przychodów."
    },
    {
      icon: Zap,
      title: "Optymalizacja procesów",
      description: "AI analizuje i optymalizuje każdy aspekt Twojego biznesu, oszczędzając czas i zasoby."
    },
    {
      icon: BarChart3,
      title: "Zaawansowana analityka",
      description: "Szczegółowe raporty i prognozy oparte na danych pomagają w podejmowaniu lepszych decyzji."
    },
    {
      icon: Target,
      title: "Precyzyjne targetowanie",
      description: "Inteligentne algorytmy docierają do właściwych klientów w odpowiednim momencie."
    },
    {
      icon: Zap,
      title: "Automatyzacja 24/7",
      description: "Nasze rozwiązania działają non-stop, zapewniając ciągłą obsługę i optymalizację."
    },
    {
      icon: TrendingUp,
      title: "Maksymalizacja ROI",
      description: "Każda inwestycja w nasze rozwiązania przynosi mierzalne korzyści finansowe."
    }
  ];

  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center py-24 px-8 relative overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            Dlaczego <span className="text-gradient">SellGenius?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Kluczowe korzyści, które przyniesie Twojemu biznesowi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-start p-6 rounded-xl glass glass-hover group"
              >
                <div className="mb-4 p-3 rounded-lg bg-white/5 group-hover:bg-cyan-500/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-100 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
