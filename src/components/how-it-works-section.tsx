"use client";

import { motion } from "framer-motion";
import { Settings, Zap, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Konfiguracja",
    description: "Szybka integracja z Twoimi systemami i dostosowanie do potrzeb biznesowych.",
    icon: Settings,
    color: "from-cyan-400 to-cyan-600"
  },
  {
    number: "02",
    title: "Automatyzacja",
    description: "AI zaczyna działać 24/7, obsługując klientów i optymalizując procesy.",
    icon: Zap,
    color: "from-blue-400 to-blue-600"
  },
  {
    number: "03",
    title: "Optymalizacja",
    description: "Ciągłe uczenie się i dostosowywanie do zmieniających się potrzeb rynku.",
    icon: TrendingUp,
    color: "from-indigo-400 to-indigo-600"
  },
  {
    number: "04",
    title: "Wyniki",
    description: "Mierzalne rezultaty: wyższa konwersja, większa sprzedaż i zadowoleni klienci.",
    icon: CheckCircle2,
    color: "from-purple-400 to-purple-600"
  }
];

export function HowItWorksSection() {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center py-24 px-8 relative overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            Jak to <span className="text-gradient">działa?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Prosty proces w 4 krokach, który przekształci Twój biznes
          </p>
        </motion.div>

        {/* Timeline - Desktop View */}
        <div className="hidden lg:block relative">
          {/* Connecting Line Background */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/40 to-indigo-500/20 transform -translate-y-1/2" />
          
          {/* Animated Progress Line */}
          <motion.div
            className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 transform -translate-y-1/2"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          <div className="grid grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex flex-col items-center"
                >
                  {/* Step Card */}
                  <div className="relative mb-6">
                    {/* Glow Effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-20 blur-xl`}
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.3, 0.2],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    />
                    
                    {/* Icon Container */}
                    <motion.div 
                      className={`relative rounded-2xl bg-gradient-to-br ${step.color} p-6 glass glass-hover group cursor-pointer`}
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                      
                      {/* Step Number Badge */}
                      <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-black border-2 border-cyan-400 flex items-center justify-center">
                        <span className="text-xs font-bold text-cyan-400">{step.number}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="text-center max-w-[250px]">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-100 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow (except last) */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-10"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    >
                      <motion.div
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3
                        }}
                      >
                        <ArrowRight className="w-6 h-6 text-cyan-400/60" />
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet View - Vertical Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connecting Line (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/30 to-transparent" />
                )}

                <div className="flex gap-6 items-start">
                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    <motion.div
                      className={`rounded-xl bg-gradient-to-br ${step.color} p-4 glass glass-hover`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-black border-2 border-cyan-400 flex items-center justify-center">
                      <span className="text-xs font-bold text-cyan-400">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
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

