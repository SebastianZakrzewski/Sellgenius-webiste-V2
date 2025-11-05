"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Palette, Code } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Główna sekcja */}
      <section className="flex min-h-screen flex-col items-center justify-center p-24 pt-32">
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
      </section>

      {/* Sekcje placeholder do testowania scrollowania */}
      <section className="min-h-screen flex items-center justify-center p-24 bg-muted/10">
        <div className="max-w-4xl w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">Sekcja Placeholder 1</h2>
          <p className="text-muted-foreground text-center mb-8">
            Scrolluj w dół, aby zobaczyć przełączanie między tekstem a logo w navbarze.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4">Placeholder {item}</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center p-24">
        <div className="max-w-4xl w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">Sekcja Placeholder 2</h2>
          <p className="text-muted-foreground text-center mb-8">
            Kontynuuj scrollowanie, aby przetestować funkcjonalność navbar.
          </p>
          <div className="space-y-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4">Item {item}</h3>
                <p className="text-muted-foreground">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center p-24 bg-muted/10">
        <div className="max-w-4xl w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">Sekcja Placeholder 3</h2>
          <p className="text-muted-foreground text-center">
            Scrolluj w górę, aby zobaczyć jak logo przełącza się z powrotem na tekst.
          </p>
        </div>
      </section>
    </main>
  );
}
