"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="min-h-[85vh] md:min-h-screen bg-[#000000] relative flex flex-col items-center justify-center p-8 pt-[1.6rem]">
      <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto px-4 relative z-10">
        {/* Logo */}
        <div className="relative w-full max-w-xl h-[25vh] md:h-[30vh]">
          <Image
            src="/images/hero.png"
            alt="Hero"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>

        {/* SELLGENIUS text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold uppercase text-center"
          style={{ 
            fontFamily: '"Cassio BC", sans-serif',
            color: '#FFFFFF',
            letterSpacing: '0.2em'
          }}
        >
          SELLGENIUS
        </motion.h1>

        {/* INTELIGENCJA DLA BIZNESU text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-lg md:text-xl lg:text-2xl font-normal uppercase text-center"
          style={{
            color: '#4284A8',
            letterSpacing: '0.5em',
            textShadow: '0 0 10px rgba(66, 132, 168, 0.5), 0 0 20px rgba(66, 132, 168, 0.3)'
          }}
        >
          INTELIGENCJA DLA BIZNESU.
        </motion.p>

        {/* Description - shortened for better conversion */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="text-base md:text-lg text-gray-200 text-center max-w-2xl leading-relaxed"
        >
          Zwiększ sprzedaż i optymalizuj procesy dzięki zaawansowanej analityce danych.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="mt-4"
        >
          <button
            className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-500 hover:from-cyan-200 hover:via-sky-300 hover:to-indigo-400 px-8 py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 uppercase tracking-wide shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 active:scale-95 text-black"
          >
            Rozpocznij teraz
          </button>
        </motion.div>
      </div>
    </section>
  );
}

