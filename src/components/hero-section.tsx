"use client";

import { useMemo, useState, useEffect } from "react";
import { ArrowRight, ArrowUpRight, Shield, Zap, TrendingUp } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

// TypeScript types
type NeuralNode = {
  x: number;
  y: number;
  layer: number;
};

type NeuralConnection = {
  from: NeuralNode;
  to: NeuralNode;
  delay: number; // Added random delay for staggered pulses
  duration: number; // Added random duration for more natural feel
};

type OverlayConfig = {
  x: string;
  y: string;
  size: string;
  color: "cyan" | "blue" | "indigo";
};

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
} as const;

const GRADIENT_COLORS = {
  cyan: COLORS.cyan.rgba(0.25),
  blue: COLORS.blue.rgba(0.2),
  indigo: COLORS.indigo.rgba(0.25),
} as const;

export function HeroSection() {
  const [windowWidth, setWindowWidth] = useState(1920);

  // Mouse position state for Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 120 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

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
    
    handleResize(); // Set initial value
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

  // Responsive viewBox - static is fine, SVG scales automatically
  const viewBox = "0 0 1920 1600";

  // Neural Network configuration - memoized for performance
  const neuralNetworkConfig = useMemo(() => {
    const centerX = 960;
    const layerSpacing = 600;
    const nodeSpacing = 250;
    const topMargin = 150;

    const nodes: NeuralNode[] = [
      // Input layer - left side
      { x: centerX - layerSpacing * 1.5, y: topMargin + nodeSpacing * 0, layer: 0 },
      { x: centerX - layerSpacing * 1.5, y: topMargin + nodeSpacing * 1, layer: 0 },
      { x: centerX - layerSpacing * 1.5, y: topMargin + nodeSpacing * 2, layer: 0 },
      { x: centerX - layerSpacing * 1.5, y: topMargin + nodeSpacing * 3, layer: 0 },
      { x: centerX - layerSpacing * 1.5, y: topMargin + nodeSpacing * 4, layer: 0 },
      { x: centerX - layerSpacing * 1.5, y: topMargin + nodeSpacing * 5, layer: 0 },
      
      // Hidden layer 1
      { x: centerX - layerSpacing * 0.5, y: topMargin + nodeSpacing * 0.5, layer: 1 },
      { x: centerX - layerSpacing * 0.5, y: topMargin + nodeSpacing * 1.5, layer: 1 },
      { x: centerX - layerSpacing * 0.5, y: topMargin + nodeSpacing * 2.5, layer: 1 },
      { x: centerX - layerSpacing * 0.5, y: topMargin + nodeSpacing * 3.5, layer: 1 },
      { x: centerX - layerSpacing * 0.5, y: topMargin + nodeSpacing * 4.5, layer: 1 },
      { x: centerX - layerSpacing * 0.5, y: topMargin + nodeSpacing * 5.5, layer: 1 },
      
      // Hidden layer 2
      { x: centerX + layerSpacing * 0.5, y: topMargin + nodeSpacing * 0.5, layer: 2 },
      { x: centerX + layerSpacing * 0.5, y: topMargin + nodeSpacing * 1.5, layer: 2 },
      { x: centerX + layerSpacing * 0.5, y: topMargin + nodeSpacing * 2.5, layer: 2 },
      { x: centerX + layerSpacing * 0.5, y: topMargin + nodeSpacing * 3.5, layer: 2 },
      { x: centerX + layerSpacing * 0.5, y: topMargin + nodeSpacing * 4.5, layer: 2 },
      { x: centerX + layerSpacing * 0.5, y: topMargin + nodeSpacing * 5.5, layer: 2 },
      
      // Output layer - right side
      { x: centerX + layerSpacing * 1.5, y: topMargin + nodeSpacing * 1.5, layer: 3 },
      { x: centerX + layerSpacing * 1.5, y: topMargin + nodeSpacing * 2.5, layer: 3 },
      { x: centerX + layerSpacing * 1.5, y: topMargin + nodeSpacing * 3.5, layer: 3 },
      { x: centerX + layerSpacing * 1.5, y: topMargin + nodeSpacing * 4.5, layer: 3 },
    ];

    const rawConnections = [
      // Input to Hidden 1
      { from: nodes[0], to: nodes[6] },
      { from: nodes[0], to: nodes[7] },
      { from: nodes[1], to: nodes[6] },
      { from: nodes[1], to: nodes[8] },
      { from: nodes[2], to: nodes[7] },
      { from: nodes[2], to: nodes[9] },
      { from: nodes[3], to: nodes[8] },
      { from: nodes[3], to: nodes[10] },
      { from: nodes[4], to: nodes[9] },
      { from: nodes[4], to: nodes[11] },
      { from: nodes[5], to: nodes[10] },
      { from: nodes[5], to: nodes[11] },
      
      // Hidden 1 to Hidden 2
      { from: nodes[6], to: nodes[12] },
      { from: nodes[6], to: nodes[13] },
      { from: nodes[7], to: nodes[12] },
      { from: nodes[7], to: nodes[14] },
      { from: nodes[8], to: nodes[13] },
      { from: nodes[8], to: nodes[15] },
      { from: nodes[9], to: nodes[14] },
      { from: nodes[9], to: nodes[16] },
      { from: nodes[10], to: nodes[15] },
      { from: nodes[10], to: nodes[17] },
      { from: nodes[11], to: nodes[16] },
      { from: nodes[11], to: nodes[17] },
      
      // Hidden 2 to Output
      { from: nodes[12], to: nodes[18] },
      { from: nodes[12], to: nodes[19] },
      { from: nodes[13], to: nodes[18] },
      { from: nodes[13], to: nodes[20] },
      { from: nodes[14], to: nodes[19] },
      { from: nodes[14], to: nodes[21] },
      { from: nodes[15], to: nodes[19] },
      { from: nodes[15], to: nodes[20] },
      { from: nodes[16], to: nodes[20] },
      { from: nodes[16], to: nodes[21] },
      { from: nodes[17], to: nodes[21] },
    ];

    // Add random delay and variable duration for more organic feel
    const connections: NeuralConnection[] = rawConnections.map(conn => ({
      ...conn,
      delay: Math.random() * 4, // Increased delay range
      duration: 2 + Math.random() * 1.5 // Variable duration 2-3.5s
    }));

    return { nodes, connections };
  }, []);

  const { nodes: neuralNodes, connections: neuralConnections } = neuralNetworkConfig;

  // Responsive overlay positions
  const overlays: OverlayConfig[] = useMemo(() => {
    if (windowWidth < 768) {
      return [
        { x: "20%", y: "30%", size: "300px", color: "cyan" },
        { x: "70%", y: "50%", size: "350px", color: "blue" },
        { x: "80%", y: "70%", size: "300px", color: "indigo" },
      ];
    }
    return [
      { x: "30%", y: "40%", size: "400px", color: "cyan" },
      { x: "60%", y: "50%", size: "500px", color: "blue" },
      { x: "80%", y: "70%", size: "450px", color: "indigo" },
    ];
  }, [windowWidth]);

  // Parallax transform values
  // Layer 0 (Input) - moves slightly
  const layer0X = useTransform(mouseXSpring, [-1, 1], [20, -20]);
  const layer0Y = useTransform(mouseYSpring, [-1, 1], [20, -20]);
  
  // Layer 1 (Hidden 1) - moves more
  const layer1X = useTransform(mouseXSpring, [-1, 1], [40, -40]);
  const layer1Y = useTransform(mouseYSpring, [-1, 1], [40, -40]);
  
  // Layer 2 (Hidden 2) - moves even more
  const layer2X = useTransform(mouseXSpring, [-1, 1], [60, -60]);
  const layer2Y = useTransform(mouseYSpring, [-1, 1], [60, -60]);
  
  // Layer 3 (Output) - moves the most (foreground)
  const layer3X = useTransform(mouseXSpring, [-1, 1], [80, -80]);
  const layer3Y = useTransform(mouseYSpring, [-1, 1], [80, -80]);

  // Helper to get transform for a node/layer
  const getLayerTransform = (layer: number) => {
    switch(layer) {
      case 0: return { x: layer0X, y: layer0Y };
      case 1: return { x: layer1X, y: layer1Y };
      case 2: return { x: layer2X, y: layer2Y };
      case 3: return { x: layer3X, y: layer3Y };
      default: return { x: layer0X, y: layer0Y };
    }
  };

  return (
    <section className="min-h-[85vh] md:min-h-screen bg-black relative flex flex-col items-center justify-center p-4 md:p-8 pt-20 md:pt-24 overflow-hidden perspective-1000">
      {/* Neural Network Background */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <motion.div className="w-full h-full relative">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox={viewBox}
            preserveAspectRatio="xMidYMid slice"
            aria-label="Neural network visualization background"
            role="img"
          >
            <defs>
              {/* Primary Gradient - Softer colors for elegance */}
              <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={COLORS.cyan.primary} stopOpacity="0.5" />
                <stop offset="50%" stopColor={COLORS.blue.primary} stopOpacity="0.4" />
                <stop offset="100%" stopColor={COLORS.indigo.primary} stopOpacity="0.5" />
              </linearGradient>
              
              {/* Pulse Gradient - Bright core with trailing fade */}
              <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="50%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>

              {/* Enhanced Glow filters */}
              <filter id="glowStrong">
                <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              
              <filter id="glowMedium">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              
              {/* Trail Gradient for signals */}
              <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={COLORS.cyan.primary} stopOpacity="0" />
                <stop offset="50%" stopColor={COLORS.blue.primary} stopOpacity="0.5" />
                <stop offset="100%" stopColor="white" stopOpacity="1" />
              </linearGradient>
            </defs>

            {/* Render Connections with Parallax */}
            {neuralConnections.map((connection, i) => {
              const transform = getLayerTransform(connection.from.layer);
              
              return (
                <motion.g key={`conn-group-${i}`} style={{ x: transform.x, y: transform.y }}>
                  <motion.line
                    x1={connection.from.x}
                    y1={connection.from.y}
                    x2={connection.to.x}
                    y2={connection.to.y}
                    stroke="url(#primaryGradient)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.2 }}
                    transition={{ duration: 2, delay: i * 0.02, ease: "easeInOut" }}
                  />
                  
                  {/* Comet Trail Pulse (Smudge) */}
                  {i % 3 === 0 && (
                    <g>
                      <animateMotion
                        dur={`${connection.duration}s`}
                        begin={`${connection.delay}s`}
                        repeatCount="indefinite"
                        path={`M${connection.from.x},${connection.from.y} L${connection.to.x},${connection.to.y}`}
                        rotate="auto"
                        calcMode="linear"
                      />
                      {/* Trail - long rectangle with gradient */}
                      <rect
                        x="-80"
                        y="-1"
                        width="80"
                        height="2"
                        fill="url(#trailGradient)"
                        opacity="0.8"
                      />
                      {/* Head - bright dot */}
                      <circle
                        cx="0"
                        cy="0"
                        r="2"
                        fill="#fff"
                        filter="url(#glowStrong)"
                      />
                    </g>
                  )}
                </motion.g>
              );
            })}

            {/* Render Nodes with Parallax */}
            {neuralNodes.map((node, i) => {
              const transform = getLayerTransform(node.layer);
              return (
                <motion.g key={`node-group-${i}`} style={{ x: transform.x, y: transform.y }}>
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r={node.layer === 0 || node.layer === 3 ? 5 : 3}
                    fill={COLORS.cyan.primary}
                    filter="url(#glowMedium)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: node.layer * 0.5 + i * 0.1,
                      ease: "easeInOut" 
                    }}
                  />
                </motion.g>
              );
            })}
          </svg>
        </motion.div>

        {/* Gradient Overlays - Smoother transitions */}
        <div className="absolute inset-0">
          {overlays.map((overlay, i) => (
            <motion.div
              key={`overlay-${i}`}
              className="absolute rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 8, // Slower breath
                repeat: Infinity,
                delay: i * 3,
                ease: "easeInOut",
              }}
              style={{
                left: overlay.x,
                top: overlay.y,
                width: overlay.size,
                height: overlay.size,
                background: `radial-gradient(circle, ${GRADIENT_COLORS[overlay.color]} 0%, ${COLORS.blue.rgba(0.05)} 50%, transparent 70%)`,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>
      </div>

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
