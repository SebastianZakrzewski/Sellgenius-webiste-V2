"use client";

import Image from "next/image";

export function HeroSection() {
  return (
    <section className="min-h-[85vh] md:min-h-screen bg-[#000000] relative flex flex-col items-center justify-start p-2 md:p-4 pt-2 md:pt-4 overflow-hidden">
      {/* Logo - poza kontenerem z max-w-4xl */}
      <div className="relative w-full max-w-[98vw] md:max-w-[95vw] h-[75vh] md:h-[85vh] mb-2 relative z-10 -mt-12 md:-mt-16">
        <Image
          src="/images/log.png"
          alt="Hero"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 98vw, (max-width: 1200px) 95vw, 2000px"
        />
      </div>

      <div className="flex flex-col items-center gap-2 md:gap-3 max-w-4xl mx-auto px-2 relative z-10">
        {/* SELLGENIUS text */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-semibold uppercase text-center -mt-48 md:-mt-80"
          style={{ 
            fontFamily: '"Cassio BC", sans-serif',
            color: '#FFFFFF',
            letterSpacing: '0.2em'
          }}
        >
          SELLGENIUS
        </h1>

        {/* INTELIGENCJA DLA BIZNESU text */}
        <p
          className="text-lg md:text-xl lg:text-2xl font-normal uppercase text-center mt-1 md:mt-2"
          style={{
            color: '#4284A8',
            letterSpacing: '0.5em',
            textShadow: '0 0 10px rgba(66, 132, 168, 0.5), 0 0 20px rgba(66, 132, 168, 0.3)'
          }}
        >
          INTELIGENCJA DLA BIZNESU.
        </p>

        {/* Description - shortened for better conversion */}
        <p className="text-base md:text-lg text-gray-200 text-center max-w-2xl leading-relaxed mt-1 md:mt-2">
          Zwiększ sprzedaż i optymalizuj procesy dzięki zaawansowanej analityce danych.
        </p>

        {/* CTA Button */}
        <div className="mt-2 md:mt-3">
          <button
            className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-500 hover:from-cyan-200 hover:via-sky-300 hover:to-indigo-400 px-8 py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 uppercase tracking-wide shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 active:scale-95 text-black"
          >
            Rozpocznij teraz
          </button>
        </div>
      </div>
    </section>
  );
}

