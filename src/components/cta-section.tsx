"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function CTASection() {
  return (
    <section id="kontakt" className="min-h-screen bg-black flex flex-col items-center justify-center py-24 px-8 relative overflow-hidden">
      {/* Ambient Light Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-indigo-950/20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Gotowy na <span className="text-gradient">transformację</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Dołącz do firm, które już wykorzystują moc AI do zwiększania sprzedaży i optymalizacji procesów biznesowych.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-500 hover:via-blue-600 hover:to-indigo-700 px-8 py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 uppercase tracking-wide shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-105 active:scale-95 text-white flex items-center gap-2"
            >
              Rozpocznij teraz
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              className="px-8 py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 uppercase tracking-wide border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-400/50 text-white hover:scale-105 active:scale-95 flex items-center gap-2 backdrop-blur-sm"
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
