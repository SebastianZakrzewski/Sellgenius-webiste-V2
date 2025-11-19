"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowUpRight, Shield, Zap, TrendingUp } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";

// Color constants
const COLORS = {
  cyan: {
    primary: "#22D3EE",
    rgba: (opacity: number) => `rgba(34, 211, 238, ${opacity})`,
  },
  blue: {
    primary: "#3B82F6",
    rgba: (opacity: number) => `rgba(59, 130, 246, ${opacity})`,
  },
  indigo: {
    primary: "#6366F1",
    rgba: (opacity: number) => `rgba(99, 102, 241, ${opacity})`,
  },
  white: {
    primary: "#FFFFFF",
    rgba: (opacity: number) => `rgba(255, 255, 255, ${opacity})`,
  }
} as const;

const GRADIENT_COLORS = {
  cyan: COLORS.cyan.rgba(0.25),
  blue: COLORS.blue.rgba(0.2),
  indigo: COLORS.indigo.rgba(0.25),
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
  const x = useTransform(mouseX, [-1, 1], [-20 * (data.size / 2), 20 * (data.size / 2)]);
  const y = useTransform(mouseY, [-1, 1], [-20 * (data.size / 2), 20 * (data.size / 2)]);

  return (
    <motion.div
      className="absolute rounded-full bg-white/20"
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

// Parametric Wave Component
const ParametricWave = ({
  index,
  total,
  centerX,
  centerY,
  baseRadius,
  amplitude,
  color,
  direction,
  phaseShift = 0
}: {
  index: number;
  total: number;
  centerX: number;
  centerY: number;
  baseRadius: number;
  amplitude: number;
  color: string;
  direction: number;
  phaseShift?: number;
}) => {
  // Generate the path data for a sine wave wrapped around a circle
  const pathData = useMemo(() => {
    const points = [];
    const steps = 360; // Resolution
    // Use different frequencies for different lines to create organic interference
    const frequency = 6 + (index % 3); 
    
    for (let i = 0; i <= steps; i++) {
      const theta = (i / steps) * Math.PI * 2;
      // Variable amplitude based on position to create "lobes"
      const r = baseRadius + amplitude * Math.sin(frequency * theta + phaseShift);
      
      const x = centerX + r * Math.cos(theta);
      const y = centerY + r * Math.sin(theta);
      
      points.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`);
    }
    
    // Close the loop
    points.push("Z");
    return points.join(" ");
  }, [centerX, centerY, baseRadius, amplitude, index, phaseShift]);

  return (
    <motion.path
      d={pathData}
      stroke={color}
      strokeWidth={1.5}
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ 
        pathLength: 1, 
        opacity: [0.3, 0.6, 0.3],
        rotate: [0, 360 * direction],
        scale: [1, 1.02, 1] // Subtle breathing per line
      }}
      transition={{
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 3 + (index % 2), repeat: Infinity, ease: "easeInOut", delay: index * 0.05 },
        rotate: { duration: 60 + (index % 10), repeat: Infinity, ease: "linear" },
        scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 }
      }}
      style={{
        originX: "50%", // Rotate around center (relative to the SVG viewBox, we need to be careful here)
        originY: "50%", // SVG transform origin is tricky, usually better to rotate a Group
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
      style={{ originX: "960px", originY: "800px" }} // Center of the 1920x1600 viewBox
    >
      {children}
    </motion.g>
  );
};

export function HeroSection() {
  const [windowWidth, setWindowWidth] = useState(1920);

  // Particle System
  const [particles, setParticles] = useState<{ x: number; y: number; size: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map(() => ({
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
  const y = useTransform(scrollY, [0, 1000], [0, 400]); // Parallax for whole content

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set((clientX - centerX) / centerX);
      mouseY.set((clientY - centerY) / centerY);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const stats = [
    { value: "500+", label: "firm ufa nam" },
    { value: "98%", label: "zadowolenia klientów" },
    { value: "3x", label: "wzrost ROI średnio" },
  ];

  const trustIndicators = [
    { icon: Shield, text: "Bezpieczne dane" },
    { icon: Zap, text: "GDPR Compliant" },
    { icon: TrendingUp, text: "24/7 Support" },
  ];

  // Responsive viewBox
  const viewBox = "0 0 1920 1600";
  const centerX = 960;
  const centerY = 800;

  // 3D Tilt Effect
  const tiltX = useTransform(mouseYSpring, [-0.5, 0.5], [2, -2]); 
  const tiltY = useTransform(mouseXSpring, [-0.5, 0.5], [-2, 2]); 

  return (
    <section className="min-h-[85vh] md:min-h-screen bg-black relative flex flex-col items-center justify-center p-4 md:p-8 pt-20 md:pt-24 overflow-hidden perspective-1000">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 overflow-hidden z-0 pointer-events-none"
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
          y // Parallax scroll
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
                style={{ originX: `${centerX}px`, originY: `${centerY}px` }}
              >
                {/* Layer 1: Inner high-frequency waves (Cyan) */}
                <RotatingWaveGroup direction={1} duration={40}>
                  {Array.from({ length: 12 }).map((_, i) => (
                     <ParametricWave
                      key={`inner-${i}`}
                      index={i}
                      total={12}
                      centerX={centerX}
                      centerY={centerY}
                      baseRadius={200}
                      amplitude={40}
                      color={COLORS.cyan.primary}
                      direction={1}
                      phaseShift={(i / 12) * Math.PI * 2}
                    />
                  ))}
                </RotatingWaveGroup>

                {/* Layer 2: Middle waves (Blue) - Counter Rotating */}
                <RotatingWaveGroup direction={-1} duration={50}>
                  {Array.from({ length: 16 }).map((_, i) => (
                     <ParametricWave
                      key={`mid-${i}`}
                      index={i}
                      total={16}
                      centerX={centerX}
                      centerY={centerY}
                      baseRadius={280}
                      amplitude={60}
                      color={COLORS.blue.primary}
                      direction={-1}
                      phaseShift={(i / 16) * Math.PI * 2}
                    />
                  ))}
                </RotatingWaveGroup>

                {/* Layer 3: Outer large waves (Indigo/White mix) */}
                <RotatingWaveGroup direction={1} duration={60}>
                  {Array.from({ length: 20 }).map((_, i) => (
                     <ParametricWave
                      key={`outer-${i}`}
                      index={i}
                      total={20}
                      centerX={centerX}
                      centerY={centerY}
                      baseRadius={380}
                      amplitude={50}
                      color={i % 3 === 0 ? COLORS.white.primary : COLORS.indigo.primary}
                      direction={1}
                      phaseShift={(i / 20) * Math.PI * 2}
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
            />

          </svg>
        </motion.div>

        {/* Gradient Overlays - Atmospheric Glow */}
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
              }}
            />
        </div>
      </motion.div>

      {/* Content Container */}
      <div className="flex flex-col items-center gap-4 md:gap-6 max-w-5xl mx-auto px-4 relative z-10">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase text-center leading-tight tracking-widest"
            style={{ 
              fontFamily: '"Cassio BC", sans-serif',
            }}
          >
            <span className="text-white block md:inline md:mr-4">SELL</span>
            <span className="text-gradient">
              GENIUS
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl font-normal uppercase text-center mt-2 md:mt-4 glow-text"
          style={{
            color: '#4284A8',
            letterSpacing: '0.4em',
          }}
        >
          INTELIGENCJA DLA BIZNESU.
        </motion.p>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-base md:text-lg lg:text-xl text-gray-300 text-center max-w-3xl leading-relaxed mt-2 md:mt-4"
        >
          Zwiększ sprzedaż i optymalizuj procesy dzięki zaawansowanej analityce danych.
        </motion.p>

        {/* Social Proof Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-8 md:mt-10"
        >
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-400 mt-1 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-4 md:mt-6"
        >
          {trustIndicators.map((indicator) => {
            const Icon = indicator.icon;
            return (
              <div
                key={indicator.text}
                className="flex items-center gap-2 px-4 py-2 rounded-lg glass transition-all duration-300"
              >
                <Icon className="w-4 h-4 text-cyan-400" />
                <span className="text-xs md:text-sm text-gray-300">{indicator.text}</span>
              </div>
            );
          })}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-8 md:mt-10"
        >
          {/* Primary CTA */}
          <button
            className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-500 hover:via-blue-600 hover:to-indigo-700 px-8 md:px-10 py-4 md:py-5 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 uppercase tracking-wide shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black text-white flex items-center gap-2 group"
          >
            Rozpocznij teraz
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
          </button>

          {/* Secondary CTA */}
          <button
            className="px-8 md:px-10 py-4 md:py-5 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 uppercase tracking-wide border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-400/50 text-white hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black flex items-center gap-2 group backdrop-blur-sm"
          >
            Zobacz demo
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" aria-hidden="true" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
