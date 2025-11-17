"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="min-h-screen bg-[#000000] flex flex-col items-center justify-center py-24 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Gotowy na <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-500 bg-clip-text text-transparent">transformację</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Dołącz do firm, które już wykorzystują moc AI do zwiększania sprzedaży i optymalizacji procesów biznesowych.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-500 hover:from-cyan-200 hover:via-sky-300 hover:to-indigo-400 px-8 py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 uppercase tracking-wide shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 active:scale-95 text-black flex items-center gap-2"
            >
              Rozpocznij teraz
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              className="px-8 py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 uppercase tracking-wide border-2 border-cyan-400 text-white hover:bg-cyan-400/10 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              Kontakt ze sprzedażą
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

