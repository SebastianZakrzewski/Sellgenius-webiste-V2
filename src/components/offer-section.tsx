"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap, BarChart3, Target } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Zwiększona sprzedaż",
    description:
      "Automatyzacja procesów sprzedażowych i inteligentne targetowanie prowadzą do wyższych przychodów.",
  },
  {
    icon: Zap,
    title: "Optymalizacja procesów",
    description:
      "AI analizuje i optymalizuje każdy aspekt Twojego biznesu, oszczędzając czas i zasoby.",
  },
  {
    icon: BarChart3,
    title: "Zaawansowana analityka",
    description:
      "Szczegółowe raporty i prognozy oparte na danych pomagają w podejmowaniu lepszych decyzji.",
  },
  {
    icon: Target,
    title: "Precyzyjne targetowanie",
    description:
      "Inteligentne algorytmy docierają do właściwych klientów w odpowiednim momencie.",
  },
  {
    icon: Zap,
    title: "Automatyzacja 24/7",
    description:
      "Nasze rozwiązania działają non-stop, zapewniając ciągłą obsługę i optymalizację.",
  },
  {
    icon: TrendingUp,
    title: "Maksymalizacja ROI",
    description:
      "Każda inwestycja w nasze rozwiązania przynosi mierzalne korzyści finansowe.",
  },
];

export function OfferSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1400px_700px_at_50%_-15%,rgba(34,211,238,0.06),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_100%_30%,rgba(37,99,235,0.05),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_0%_70%,rgba(6,182,212,0.05),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">
            Oferta
          </p>
          <h2 className="mb-5 text-3xl font-semibold leading-tight text-white md:text-5xl">
            Dlaczego <span className="text-gradient">SellGenius?</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            Kluczowe korzyści, które przyniesie Twojemu biznesowi
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                className="group flex flex-col rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/5"
              >
                <div className="mb-4 p-3 rounded-lg bg-white/5 transition-colors duration-300 group-hover:bg-cyan-500/20">
                  <Icon className="h-6 w-6 text-cyan-400 transition-all duration-300 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-cyan-100">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70 transition-colors group-hover:text-white/80">
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
