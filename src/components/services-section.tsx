"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Bot, Globe } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Szkolenia z AI",
    description: "Pokażemy Ci, jak wykorzystać sztuczną inteligencję w praktyce. Bez żargonu i zbędnej teorii – tylko konkretna wiedza, którą od razu wdrożysz w swoim biznesie. Naucz się automatyzować zadania, podejmować lepsze decyzje i działać szybciej niż konkurencja.",
    icon: GraduationCap,
    href: "/services/training",
    gradient: "from-cyan-400 to-blue-500"
  },
  {
    title: "Automatyzacje i AI dla firm",
    description: "Przeanalizujemy procesy w Twoim biznesie i dobierzemy narzędzia, które naprawdę mają sens. Wdrożymy rozwiązania oparte na AI i automatyzacji – a ponieważ każdy projekt jest przez nas analizowany i oceniany, analityka i raportowanie są od samego początku częścią wdrożenia. Dashboards, metryki i wnioski z danych pomagają nam i Tobie weryfikować efekty na bieżąco.",
    icon: Bot,
    href: "/services/automation",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    title: "Budowa stron i sklepów internetowych",
    description: "Projektujemy nowoczesne strony, sklepy internetowe i aplikacje szyte na miarę Twojego biznesu. Tworzymy również platformy e-commerce, systemy CRM i ERP – wszystko zoptymalizowane pod SEO, UX i automatyzację procesów. Technologie, które naprawdę działają na Twój wynik.",
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
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow group-hover:text-gray-300 transition-colors">
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
