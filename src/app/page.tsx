"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Palette, Code } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-4">
            Welcome to SellGenius Website V2
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            Next.js 14 + Tailwind CSS + shadcn/ui + Radix UI + Framer Motion + Lucide Icons
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="default" className="gap-2">
                <Sparkles className="h-4 w-4" />
                Default Button
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" className="gap-2">
                <Zap className="h-4 w-4" />
                Outline Button
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="secondary" className="gap-2">
                <Palette className="h-4 w-4" />
                Secondary Button
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="ghost" className="gap-2">
                <Code className="h-4 w-4" />
                Ghost Button
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
