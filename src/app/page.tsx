"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Gradient line configuration
const gradientLines = [
  {
    id: 1,
    position: "left-0",
    delay: 0.1,
    opacity: "opacity-30 md:opacity-60 lg:opacity-100",
    visibility: "block",
    description: "Far left edge"
  },
  {
    id: 2,
    position: "left-[8%] sm:left-[10%] md:left-[12%] lg:left-[18%] xl:left-[22%]",
    delay: 0.2,
    opacity: "opacity-100",
    visibility: "hidden sm:block",
    description: "Left side of content"
  },
  {
    id: 3,
    position: "left-1/2 -translate-x-1/2",
    delay: 0.3,
    opacity: "opacity-100",
    visibility: "block",
    description: "Center separator"
  },
  {
    id: 4,
    position: "right-[8%] sm:right-[10%] md:right-[12%] lg:right-[18%] xl:right-[22%]",
    delay: 0.4,
    opacity: "opacity-100",
    visibility: "hidden sm:block",
    description: "Right side of graphic"
  },
  {
    id: 5,
    position: "right-0",
    delay: 0.5,
    opacity: "opacity-30 md:opacity-60 lg:opacity-100",
    visibility: "block",
    description: "Far right edge"
  }
];

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-[85vh] md:min-h-screen bg-[#000000] relative flex flex-col items-center justify-center p-8 pt-[1.6rem] overflow-hidden">
        {/* Gradient Lines */}
        {gradientLines.map((line) => (
          <motion.div
            key={line.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: line.delay }}
            className={`absolute ${line.position} top-0 bottom-0 w-[1px] sm:w-[1.5px] md:w-[2px] bg-gradient-to-b from-cyan-300 via-sky-400 to-emerald-400 z-0 ${line.opacity} ${line.visibility} will-change-[opacity]`}
            style={{
              boxShadow: '0 0 8px rgba(34, 211, 238, 0.3), 0 0 16px rgba(34, 211, 238, 0.2), 0 0 24px rgba(16, 185, 129, 0.1)',
              filter: 'blur(0.5px)',
            }}
            aria-hidden="true"
          />
        ))}
        
        <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto px-4 relative z-10">
          {/* Logo with letter G overlay */}
          <div className="relative w-full max-w-xl h-[25vh] md:h-[30vh]">
            <Image
              src="/images/hero.png"
              alt="Hero"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            {/* Letter G in center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-xl md:text-2xl font-semibold text-white">G</span>
            </motion.div>
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
      {/* Placeholder sections for scrolling */}
      <section className="min-h-screen bg-[#000000]">
      </section>
      <section className="min-h-screen bg-[#000000]">
      </section>
    </main>
  );
}
