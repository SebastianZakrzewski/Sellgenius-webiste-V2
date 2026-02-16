"use client";

import { motion } from "framer-motion";
import { MessageSquare, ShoppingCart, Activity, Database, ArrowRight, Play, Phone, Workflow } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function VirtualAssistantSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#050505] py-24 lg:py-32">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -left-[10%] top-[20%] h-[600px] w-[600px] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute right-[0%] bottom-[0%] h-[800px] w-[800px] rounded-full bg-cyan-900/10 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl leading-tight">
                Wdróż wirtualnych <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                  pracowników AI
                </span>{" "}
                <br />
                do swojej firmy
              </h2>
              <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed leading-relaxed">
                Chatboty i voiceboty, które obsługują klientów 24/7, kwalifikują leady i dowożą sprzedaż — bez chaosu i ręcznej roboty.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] border-0 h-14 px-8 text-lg rounded-xl transition-all hover:scale-105"
              >
                Umów konsultację
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-cyan-400/50 h-14 px-8 text-lg rounded-xl backdrop-blur-sm transition-all hover:scale-105"
              >
                <Play className="mr-2 h-5 w-5" />
                Zobacz demo
              </Button>
            </div>

            {/* Feature Icons */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <MessageSquare className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-sm font-medium text-gray-300">Inteligentny Chat</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  <Phone className="h-5 w-5 text-cyan-400" />
                </div>
                <span className="text-sm font-medium text-gray-300">Voicebot AI</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <Workflow className="h-5 w-5 text-purple-400" />
                </div>
                <span className="text-sm font-medium text-gray-300">Automatyzacja</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[600px] lg:max-w-none lg:h-[600px] flex items-center justify-center"
          >
            {/* Holographic Circle Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[500px] h-[500px] border border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute w-[400px] h-[400px] border border-blue-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            </div>

            {/* Main Image Container */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
               <div className="relative w-full h-full max-h-[600px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm shadow-2xl shadow-blue-900/20">
                  <Image
                    src="/wirtualna.png"
                    alt="Futuristic AI Assistant"
                    fill
                    className="object-cover object-top grayscale"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Overlay Gradient at bottom for text readability if needed */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
               </div>

               {/* Floating UI Elements */}
               <FloatingCard
                 icon={<MessageSquare className="h-5 w-5 text-cyan-400" />}
                 title="Asystent AI"
                 text="W czym mogę pomóc?"
                 className="absolute -left-4 top-[20%] lg:-left-12"
                 delay={0.4}
               />
               
               <FloatingCard
                 icon={<Activity className="h-5 w-5 text-green-400" />}
                 title="Status"
                 text="System aktywny"
                 className="absolute -right-4 top-[15%] lg:-right-8"
                 delay={0.6}
               />

               <FloatingCard
                 icon={<Database className="h-5 w-5 text-purple-400" />}
                 title="CRM"
                 text="Lead zapisany"
                 className="absolute -left-4 bottom-[20%] lg:-left-8"
                 delay={0.8}
               />

               <FloatingCard
                 icon={<ShoppingCart className="h-5 w-5 text-blue-400" />}
                 title="Sprzedaż"
                 text="Nowe zamówienie"
                 className="absolute -right-4 bottom-[25%] lg:-right-12"
                 delay={1.0}
               />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FloatingCard({ icon, title, text, className, delay }: { icon: React.ReactNode; title: string; text: string; className?: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, x: 0 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`hidden sm:flex items-center gap-3 rounded-xl border border-white/10 bg-black/80 px-4 py-3 shadow-xl backdrop-blur-md ${className}`}
    >
      <div className="rounded-lg bg-white/5 p-2 border border-white/5">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">{title}</span>
        <span className="text-sm font-medium text-white">{text}</span>
      </div>
    </motion.div>
  );
}
