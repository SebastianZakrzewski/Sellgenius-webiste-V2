"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Bot, Globe } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Szkolenia z AI",
    description: "Uczymy, jak wykorzystywać AI w sprzedaży i obsłudze klienta — od automatyzacji po chatboty.\n\nPraktycznie, na realnych procesach biznesowych.",
    icon: GraduationCap,
    href: "/services/training",
    gradient: "from-cyan-400 to-blue-500"
  },
  {
    title: "Automatyzacje i AI dla firm",
    description: "Tworzymy systemy, które automatyzują sprzedaż i obsługę klienta.\n\nWirtualni pracownicy AI działają 24/7, porządkują proces i dbają o każdą szansę sprzedażową. Sprawdzamy skuteczność automatyzacji i jej wpływ na wynik.",
    icon: Bot,
    href: "/services/automation",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    title: "Strony i sklepy internetowe",
    description: "Budujemy strony i sklepy jako element systemu sprzedaży.\n\nZintegrowane z CRM, automatyzacjami i chatbotami — realnie wspierają konwersję i mierzenie efektów.",
    icon: Globe,
    href: "/services/development",
    gradient: "from-indigo-600 to-purple-600"
  }
];

export function ServicesSection() {
  return (
    <section id="jak-mozemy-ci-pomoc" className="relative py-24 px-8 bg-black overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Jak możemy Ci <span className="text-gradient">pomóc?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Najpierw przeanalizujemy, jak działa Twój biznes, potem doradzimy i dobierzemy właściwe narzędzia, zaprojektujemy i wdrożymy automatyzacje oraz rozwiązania AI. Każde wdrożenie jest przez nas analizowane i oceniane – analityka jest więc wbudowana w proces od początku, co pozwala mierzyć realne efekty.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <Link href={service.href} className="block h-full">
                  <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] flex flex-col">
                    {/* Icon Container */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow group-hover:text-gray-300 transition-colors whitespace-pre-line">
                      {service.description}
                    </p>

                    <div className="flex items-center text-cyan-400 font-semibold text-sm group-hover:text-cyan-300 transition-colors mt-auto">
                      Dowiedz się więcej
                      <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
