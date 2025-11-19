"use client";

import { motion } from "framer-motion";

export function OverviewSection() {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center py-24 px-8 relative overflow-hidden">
      {/* Ambient Light Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            <span className="text-gradient">
              Inteligencja dla biznesu
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            SellGenius to kompleksowa platforma AI, która przekształca sposób, w jaki prowadzisz biznes. 
            Łączymy zaawansowaną analitykę danych z inteligentną automatyzacją, aby zwiększyć Twoją sprzedaż 
            i zoptymalizować każdy aspekt działalności.
          </p>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed">
            Od kampanii reklamowych przez zarządzanie sprzedażą, aż po wsparcie klienta - 
            nasze rozwiązania AI działają 24/7, aby Twój biznes osiągał lepsze wyniki.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
