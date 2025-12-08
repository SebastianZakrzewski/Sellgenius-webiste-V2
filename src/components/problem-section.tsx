"use client";

import { motion } from "framer-motion";
import { Clock, Moon, Repeat } from "lucide-react";
import Image from "next/image";

const painPoints = [
  {
    icon: Clock,
    title: "Utracona sprzedaż",
    description: "Długi czas odpowiedzi drastycznie obniża konwersję.",
  },
  {
    icon: Moon,
    title: "Brak dostępności",
    description: "Klienci są aktywni 24/7, a Twój zespół musi odpoczywać.",
  },
  {
    icon: Repeat,
    title: "Rutynowe zadania",
    description: "Powtarzalne pytania marnują kreatywny potencjał pracowników.",
    image: "/images/r1.png",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-black py-24 px-8 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background Gradient Blob - Matching BenefitsSection */}
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
            Twoi klienci <span className="text-gradient">nie będą czekać.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            W świecie natychmiastowych reakcji, każda minuta zwłoki to stracona szansa. 
            Agenci AI zapewniają wsparcie, którego oczekuje nowoczesny rynek – natychmiast i bez przerwy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            // Sprawdzamy czy element ma zdjęcie, aby zmienić układ
            const hasImage = !!point.image;
            
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`flex flex-col items-start rounded-xl glass glass-hover group relative overflow-hidden ${
                  hasImage ? "p-0" : "p-8"
                }`}
              >
                <div className="relative z-10 w-full h-full flex flex-col">
                  {/* Jeśli jest zdjęcie, wyświetlamy je na górze bez marginesów */}
                  {point.image ? (
                    <div className="relative w-full aspect-video overflow-hidden">
                      <Image
                        src={point.image}
                        alt={point.title}
                        width={800}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                      {/* Gradient overlay na zdjęciu dla lepszej czytelności ikon */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                    </div>
                  ) : (
                    // Standardowy nagłówek dla kart bez zdjęcia
                    <div className="mb-6 p-3 rounded-lg bg-white/5 group-hover:bg-cyan-500/20 transition-colors duration-300 inline-flex mx-8 mt-8">
                      <Icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300" />
                    </div>
                  )}

                  <div className={`flex flex-col flex-1 ${hasImage ? "p-6 pt-4" : "px-8 pb-8"}`}>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-100 transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
