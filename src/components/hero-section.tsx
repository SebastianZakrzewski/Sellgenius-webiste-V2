"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { ToolsMarqueeSection } from "./tools-marquee-section";
import { HeroArtwork } from "./hero-artwork";

const COLORS = {
  blue: {
    rgba: (opacity: number) => `rgba(0, 102, 255, ${opacity})`,
  },
} as const;

const Particle = ({
  data,
  mouseX,
  mouseY,
}: {
  data: { x: number; y: number; size: number; duration: number; delay: number };
  mouseX: any;
  mouseY: any;
}) => {
  const x = useTransform(mouseX, [-1, 1], [-10 * (data.size / 2), 10 * (data.size / 2)]);
  const y = useTransform(mouseY, [-1, 1], [-10 * (data.size / 2), 10 * (data.size / 2)]);

  return (
    <motion.div
      className="absolute rounded-full bg-white/20 will-change-transform"
      style={{
        left: `${data.x}%`,
        top: `${data.y}%`,
        width: data.size,
        height: data.size,
        x,
        y,
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: data.duration,
        repeat: Infinity,
        delay: data.delay,
        ease: "linear",
      }}
    />
  );
};

export function HeroSection() {
  const [particles, setParticles] = useState<
    { x: number; y: number; size: number; duration: number; delay: number }[]
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 120 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set((e.clientX - centerX) / centerX);
      mouseY.set((e.clientY - centerY) / centerY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const tiltX = useTransform(mouseYSpring, [-0.5, 0.5], [1, -1]);
  const tiltY = useTransform(mouseXSpring, [-0.5, 0.5], [-1, 1]);

  return (
    <section className="min-h-[85vh] md:min-h-screen bg-black relative flex flex-col justify-center p-4 md:p-8 pt-20 md:pt-24 pb-28 md:pb-36 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p, i) => (
          <Particle key={`particle-${i}`} data={p} mouseX={mouseX} mouseY={mouseY} />
        ))}
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: "50%",
            top: "50%",
            width: "800px",
            height: "800px",
            background: `radial-gradient(circle, ${COLORS.blue.rgba(0.3)} 0%, transparent 70%)`,
            transform: "translate(-50%, -50%)",
            willChange: "transform, opacity",
          }}
        />
      </div>

      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-center w-full">
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight mb-4 leading-[1.1]">
                AI i automatyzacja dla firm, które chcą działać szybciej i mądrzej
              </h1>

              <p className="text-lg md:text-xl text-white/90 font-medium mb-5">
                Automatyzujemy procesy biznesowe i wdrażamy rozwiązania AI
              </p>

              <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl">
                Koniec z powtarzalnymi zadaniami. Zajmiemy się analizą Twoich procesów, pomożemy wybrać odpowiednie narzędzia i wdrożymy dopasowane rozwiązania.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <button className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-500 hover:via-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-lg text-base font-bold transition-all duration-300 uppercase tracking-wide flex items-center gap-2 shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_50px_rgba(59,130,246,0.4)] hover:-translate-y-1">
                  Rozpocznij teraz
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button className="px-8 py-4 rounded-lg text-base font-bold transition-all duration-300 uppercase tracking-wide border border-cyan-500/30 hover:border-cyan-400/60 hover:bg-cyan-500/10 text-white flex items-center gap-2 group backdrop-blur-sm">
                  Zobacz demo
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="flex items-center justify-center lg:justify-end overflow-visible"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              rotateX: tiltX,
              rotateY: tiltY,
            }}
          >
            <HeroArtwork />
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20">
        <ToolsMarqueeSection embedded />
      </div>
    </section>
  );
}
