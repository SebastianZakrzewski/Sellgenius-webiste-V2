"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen bg-[#000000] relative flex flex-col items-center justify-center p-8">
        <div className="flex flex-col items-center gap-4">
          {/* Logo with letter G overlay */}
          <div className="relative w-full max-w-xl" style={{ height: '30vh' }}>
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
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-3xl md:text-4xl font-bold text-white">G</span>
            </motion.div>
          </div>

          {/* SELLGENIUS text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase text-center"
            style={{ 
              fontFamily: '"Cassio BC", sans-serif',
              color: '#FFFFFF',
              letterSpacing: '0.15em'
            }}
          >
            SELLGENIUS
          </motion.h1>

          {/* INTELIGENCJA DLA BIZNESU text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-xl md:text-2xl lg:text-3xl font-medium uppercase text-center"
            style={{
              color: '#4284A8',
              letterSpacing: '0.4em',
              textShadow: '0 0 10px rgba(66, 132, 168, 0.5), 0 0 20px rgba(66, 132, 168, 0.3)'
            }}
          >
            INTELIGENCJA DLA BIZNESU.
          </motion.p>
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
