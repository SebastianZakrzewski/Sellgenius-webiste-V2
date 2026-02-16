"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import Image from "next/image";

type Star = {
  id: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
};

export function OverviewSection() {
  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: 38 }, (_, i) => ({
        id: i,
        top: 14 + ((i * 17) % 62),
        size: 1 + (i % 3) * 0.7,
        duration: 14 + (i % 7) * 2.4,
        delay: (i % 9) * 0.55,
        drift: 8 + (i % 5) * 3,
        opacity: 0.2 + (i % 4) * 0.12,
      })),
    []
  );

  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-28">
      {/* Recreated "Agenciai-like" ambient background in site palette (cyan/blue). */}
      <div className="pointer-events-none absolute inset-0">
        {/* Milky-way flow from left to right (small particles + soft nebula), hero-inspired */}
        <motion.div
          className="absolute left-[-35%] top-[28%] h-20 w-[72%] rounded-full bg-[linear-gradient(90deg,transparent_0%,rgba(34,211,238,0.08)_40%,rgba(56,189,248,0.05)_62%,transparent_100%)] blur-2xl"
          animate={{ x: ["0%", "78%"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute left-[-38%] top-[52%] h-16 w-[74%] rounded-full bg-[linear-gradient(90deg,transparent_0%,rgba(14,165,233,0.07)_44%,rgba(37,99,235,0.05)_68%,transparent_100%)] blur-2xl"
          animate={{ x: ["0%", "82%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear", delay: 1.8 }}
        />

        {stars.map((star) => (
          <motion.span
            key={star.id}
            className="absolute rounded-full bg-cyan-200"
            style={{
              top: `${star.top}%`,
              left: "-6%",
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              boxShadow: "0 0 6px rgba(34, 211, 238, 0.28)",
            }}
            animate={{
              x: ["0vw", "114vw"],
              y: [0, -star.drift, 0, star.drift * 0.6, 0],
              opacity: [0, star.opacity, star.opacity, 0],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "linear",
              delay: star.delay,
            }}
          />
        ))}

        <div className="absolute inset-0 bg-[radial-gradient(1400px_700px_at_50%_-15%,rgba(34,211,238,0.08),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_0%_20%,rgba(6,182,212,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_100%_25%,rgba(37,99,235,0.07),transparent_62%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0.78)_34%,rgba(0,0,0,0.92)_68%,#000_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.015)_0%,transparent_30%,rgba(0,0,0,0.58)_68%,#000_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid items-center gap-10 lg:grid-cols-2"
        >
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">
              Kim jestem?
            </p>
            <h2 className="mb-5 text-3xl font-semibold leading-tight text-white md:text-5xl">
              Specjalizuję się w automatyzacji procesów i wdrażaniu rozwiązań AI
            </h2>
            <p className="text-base leading-relaxed text-white/80 md:text-lg">
              Pomagam firmom działać szybciej i mądrzej. Analizuję Twoje procesy, dobieram odpowiednie narzędzia i wdrażam dopasowane rozwiązania — od automatyzacji sprzedaży po integracje z ChatGPT, n8n czy Make. Koniec z powtarzalnymi zadaniami.
            </p>
            <button className="mt-8 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:from-cyan-500 hover:via-blue-600 hover:to-indigo-700">
              Poznaj mnie
            </button>
          </div>

          <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md flex flex-col items-center">
            <div className="relative group">
              {/* Poświata wokół zdjęcia */}
              <div
                className="absolute -inset-4 rounded-2xl blur-3xl transition-all duration-300 group-hover:opacity-100 opacity-75"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(34,211,238,0.35) 0%, rgba(59,130,246,0.25) 40%, rgba(99,102,241,0.15) 70%, transparent 100%)",
                  boxShadow: "0 0 100px rgba(34,211,238,0.25), 0 0 150px rgba(59,130,246,0.15)",
                }}
              />
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/20 bg-black/20 backdrop-blur-sm shadow-[0_0_50px_rgba(34,211,238,0.2),0_0_80px_rgba(59,130,246,0.1)]">
                <Image
                  src="/images/IMG_4364 (1).jpeg"
                  alt="Sebastian Zakrzewski"
                  width={1200}
                  height={1600}
                  className="h-full w-full object-cover object-bottom grayscale group-hover:grayscale-0 transition-all duration-500"
                  priority={false}
                />
              </div>
            </div>
            <p className="mt-6 text-xl font-semibold text-white tracking-wide">
              Founder Sebastian Zakrzewski
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
