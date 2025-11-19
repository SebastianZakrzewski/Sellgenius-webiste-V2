"use client";

import { useMemo, useState, useEffect } from "react";
import { ArrowRight, ArrowUpRight, Shield, Zap, TrendingUp } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring, useScroll, AnimatePresence } from "framer-motion";

// Color constants
const COLORS = {
  cyan: {
    primary: "#00F0FF", // Brighter Neon Cyan
    rgba: (opacity: number) => `rgba(0, 240, 255, ${opacity})`,
  },
  blue: {
    primary: "#0066FF", // Electric Blue
    rgba: (opacity: number) => `rgba(0, 102, 255, ${opacity})`,
  },
  indigo: {
    primary: "#0022AA", // Deep Royal Blue (replacing purple-indigo)
    rgba: (opacity: number) => `rgba(0, 34, 170, ${opacity})`,
  },
  white: {
    primary: "#FFFFFF",
    rgba: (opacity: number) => `rgba(255, 255, 255, ${opacity})`,
  }
} as const;

const GRADIENT_COLORS = {
  cyan: COLORS.cyan.rgba(0.25),
  blue: COLORS.blue.rgba(0.2),
} as const;

const Particle = ({ 
  data, 
  mouseX, 
  mouseY 
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
        ease: "linear"
      }}
    />
  );
};

// Parametric Wave Component - Optimized
const ParametricWave = ({
  index,
  centerX,
  centerY,
  baseRadius,
  amplitude,
  color,
  direction,
  phaseShift = 0
}: {
  index: number;
  centerX: number;
  centerY: number;
  baseRadius: number;
  amplitude: number;
  color: string;
  direction: number;
  phaseShift?: number;
}) => {
  // Generate the path data for a sine wave wrapped around a circle
  // OPTIMIZATION: Reduced steps from 360 to 180 (half resolution, visually similar)
  const pathData = useMemo(() => {
    const points = [];
    const steps = 180; 
    const frequency = 6 + (index % 3); 
    
    for (let i = 0; i <= steps; i++) {
      const theta = (i / steps) * Math.PI * 2;
      const r = baseRadius + amplitude * Math.sin(frequency * theta + phaseShift);
      
      const x = centerX + r * Math.cos(theta);
      const y = centerY + r * Math.sin(theta);
      
      points.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
    }
    
    points.push("Z");
    return points.join(" ");
  }, [centerX, centerY, baseRadius, amplitude, index, phaseShift]);

  return (
    <motion.path
      d={pathData}
      stroke={color}
      strokeWidth={1.5}
      fill="none"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0.3, 0.6, 0.3],
        rotate: [0, 360 * direction],
        scale: [1, 1.02, 1] 
      }}
      transition={{
        opacity: { duration: 3 + (index % 2), repeat: Infinity, ease: "easeInOut", delay: index * 0.05 },
        rotate: { duration: 60 + (index % 10), repeat: Infinity, ease: "linear" },
        scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 }
      }}
      style={{
        originX: "50%", 
        originY: "50%",
        willChange: "transform, opacity" // CSS Hint for optimization
      }}
    />
  );
};

// Wrapper to handle rotation correctly
const RotatingWaveGroup = ({ 
  children, 
  direction, 
  duration 
}: { 
  children: React.ReactNode; 
  direction: number; 
  duration: number; 
}) => {
  return (
    <motion.g
      animate={{ rotate: 360 * direction }}
      transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
      style={{ 
        originX: "960px", 
        originY: "800px",
        willChange: "transform" 
      }} 
    >
      {children}
    </motion.g>
  );
};

// Slides Data
const slides = [
  {
    overline: "TRANSFORMACJA CYFROWA",
    titlePrefix: "Wdrażanie",
    titleHighlight: "AI",
    titleSuffix: "dla biznesu",
    description: "Odkryj potencjał sztucznej inteligencji. Pomagamy firmom zintegrować najnowsze technologie AI, aby zautomatyzować procesy i zwiększyć wydajność."
  },
  {
    overline: "INTELIGENTNA AUTOMATYZACJA",
    titlePrefix: "Tworzenie",
    titleHighlight: "Agentów AI",
    titleSuffix: "",
    description: "Autonomiczni agenci, którzy pracują dla Ciebie 24/7. Od obsługi klienta po skomplikowane analizy danych – nasi agenci rewolucjonizują sposób pracy."
  },
  {
    overline: "MIERZALNE WYNIKI",
    titlePrefix: "Zwiększanie",
    titleHighlight: "Sprzedaży",
    titleSuffix: "",
    description: "Wykorzystaj dane i predykcję, aby dotrzeć do właściwych klientów w odpowiednim czasie. SellGenius to klucz do rekordowych wyników sprzedaży."
  }
];

export function HeroSection() {
  // Particle System
  const [particles, setParticles] = useState<{ x: number; y: number; size: number; duration: number; delay: number }[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  // Mouse position state for Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 120 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set((clientX - centerX) / centerX);
      mouseY.set((clientY - centerY) / centerY);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Responsive viewBox
  const viewBox = "0 0 1920 1600";
  const centerX = 960;
  const centerY = 800;

  // 3D Tilt Effect
  const tiltX = useTransform(mouseYSpring, [-0.5, 0.5], [1, -1]);
  const tiltY = useTransform(mouseXSpring, [-0.5, 0.5], [-1, 1]); 

  return (
    <section className="min-h-[85vh] md:min-h-screen bg-black relative flex flex-col justify-center p-4 md:p-8 pt-20 md:pt-24 overflow-hidden perspective-1000">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 overflow-hidden z-0 pointer-events-none will-change-transform"
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
          y 
        }}
      >
        <motion.div className="w-full h-full relative">
          {/* Particles Layer */}
          <div className="absolute inset-0 z-0">
            {particles.map((p, i) => (
              <Particle 
                key={`particle-${i}`} 
                data={p} 
                mouseX={mouseX} 
                mouseY={mouseY} 
              />
            ))}
          </div>

          <svg
            className="absolute inset-0 w-full h-full"
            viewBox={viewBox}
            preserveAspectRatio="xMidYMid slice"
            aria-label="Geometric logo visualization background"
            role="img"
            style={{ willChange: "transform" }}
          >
            <defs>
              <filter id="glowStrong" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glowSoft" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              
              {/* Gradients */}
              <linearGradient id="gradCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={COLORS.cyan.primary} stopOpacity="1" />
                <stop offset="100%" stopColor={COLORS.blue.primary} stopOpacity="0.5" />
              </linearGradient>
            </defs>

            {/* Main Logo Composition */}
            <g filter="url(#glowStrong)" style={{ transformOrigin: `${centerX}px ${centerY}px` }}>
              {/* Core breathing animation */}
              <motion.g
                animate={{ scale: [0.98, 1.02, 0.98] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{ 
                  originX: `${centerX}px`, 
                  originY: `${centerY}px`,
                  willChange: "transform"
                }}
              >
                {/* Inner high-frequency waves (Cyan) */}
                <RotatingWaveGroup direction={1} duration={40}>
                  {Array.from({ length: 8 }).map((_, i) => (
                     <ParametricWave
                      key={`inner-${i}`}
                      index={i}
                      centerX={centerX}
                      centerY={centerY}
                      baseRadius={400}
                      amplitude={40}
                      color={COLORS.cyan.primary}
                      direction={1}
                      phaseShift={(i / 8) * Math.PI * 2}
                    />
                  ))}
                </RotatingWaveGroup>

                {/* Middle waves (Blue) */}
                <RotatingWaveGroup direction={-1} duration={50}>
                  {Array.from({ length: 12 }).map((_, i) => (
                     <ParametricWave
                      key={`mid-${i}`}
                      index={i}
                      centerX={centerX}
                      centerY={centerY}
                      baseRadius={500}
                      amplitude={60}
                      color={COLORS.blue.primary}
                      direction={-1}
                      phaseShift={(i / 12) * Math.PI * 2}
                    />
                  ))}
                </RotatingWaveGroup>

                {/* Outer large waves */}
                <RotatingWaveGroup direction={1} duration={60}>
                  {Array.from({ length: 16 }).map((_, i) => (
                     <ParametricWave
                      key={`outer-${i}`}
                      index={i}
                      centerX={centerX}
                      centerY={centerY}
                      baseRadius={600}
                      amplitude={50}
                      color={i % 3 === 0 ? COLORS.white.primary : COLORS.indigo.primary}
                      direction={1}
                      phaseShift={(i / 16) * Math.PI * 2}
                    />
                  ))}
                </RotatingWaveGroup>
              </motion.g>
            </g>
            
            {/* Central Glow */}
            <motion.circle
               cx={centerX}
               cy={centerY}
               r={100}
               fill="url(#gradCyan)"
               filter="url(#glowSoft)"
               initial={{ opacity: 0 }}
               animate={{ opacity: [0.1, 0.2, 0.1], scale: [0.8, 1.2, 0.8] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               style={{ willChange: "opacity, transform" }}
            />

          </svg>
        </motion.div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0">
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
                willChange: "transform, opacity"
              }}
            />
        </div>
      </motion.div>

      {/* Content Container - Text Slider */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center w-full">
        <div className="max-w-4xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              {/* Overline with accent */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-[2px] w-12 bg-cyan-400" />
                <span className="text-cyan-400 tracking-[0.2em] uppercase text-sm font-bold">
                  {slides[currentSlide].overline}
                </span>
                <div className="h-[2px] w-12 bg-cyan-400" />
              </div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
                {slides[currentSlide].titlePrefix}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  {slides[currentSlide].titleHighlight}
                </span>
                {slides[currentSlide].titleSuffix && <br />}
                {slides[currentSlide].titleSuffix}
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
                {slides[currentSlide].description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-6">
                <button
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-lg text-base font-bold transition-all duration-300 uppercase tracking-wide flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1"
                >
                  Rozpocznij teraz
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  className="px-8 py-4 rounded-lg text-base font-bold transition-all duration-300 uppercase tracking-wide border border-white/20 hover:border-white/40 hover:bg-white/5 text-white flex items-center gap-2 group"
                >
                  Zobacz demo
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-16">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 transition-all duration-300 rounded-full ${
                  currentSlide === index ? "w-12 bg-cyan-400" : "w-4 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
