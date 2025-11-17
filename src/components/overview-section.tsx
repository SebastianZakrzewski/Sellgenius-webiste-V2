"use client";

import { motion } from "framer-motion";

export function OverviewSection() {
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
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
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

