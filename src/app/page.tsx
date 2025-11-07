"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Sekcja Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center p-24 pt-32 bg-[#000000]">
        <div className="z-10 max-w-5xl w-full items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center -mb-12 relative"
            >
              <div className="relative">
                <Image
                  src="/images/image.png"
                  alt="Hero Image"
                  width={400}
                  height={300}
                  className="object-contain"
                  priority
                />
                {/* Gradient overlay w kolorach napisów */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] mix-blend-lighten opacity-100"
                  style={{
                    maskImage: 'url(/images/image.png)',
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskImage: 'url(/images/image.png)',
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    filter: 'brightness(1.2)',
                  }}
                />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 leading-tight">
              <div className="text-[#FFFFFF] mb-2">Sztuczna inteligencja, która</div>
              <div className="bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] bg-clip-text text-transparent mb-2">
                sprzedaje, wspiera i rozwija Twój
              </div>
              <div className="bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] bg-clip-text text-transparent">
                biznes
              </div>
            </h1>
            <p className="text-lg md:text-xl text-center text-[#BBBBBB] mb-8 max-w-3xl mx-auto font-normal">
              Dzięki zaawansowanej sztucznej inteligencji Twój biznes może osiągnąć niespotykane dotąd wyniki
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center"
            >
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] hover:from-[#22D3EE] hover:to-[#3B82F6] text-[#000000] border-0 shadow-lg font-normal rounded-md"
              >
                Rozpocznij teraz
              </Button>
            </motion.div>
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
