"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AISystemSection() {
  return (
    <section className="relative py-24 px-8 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-900/10 via-black to-black pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6">
            Wdróż wirtualnych pracowników AI do swojej firmy
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            SellGenius wdraża automatyzacje i agentów AI dla małych i średnich firm — zarówno usługowych, jak i e-commerce — które chcą uporządkować procesy, zwiększyć wydajność i przestać tracić czas na ręczną pracę.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Projektujemy systemy, które działają w tle: obsługują klientów, kwalifikują zapytania, automatyzują follow-up, porządkują CRM, generują oferty, tworzą dokumenty, pilnują zadań i przekazują sprawy do człowieka tylko wtedy, gdy to ma sens.
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            To nie jest pojedynczy chatbot.
            <br />
            To spójny mechanizm łączący sprzedaż, obsługę, marketing i operacje w jeden działający system — dopasowany do Twojej firmy.
          </p>

          <Link
            href="/#jak-mozemy-ci-pomoc"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-500 hover:via-blue-600 hover:to-indigo-700 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 uppercase tracking-wide text-white shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-105 active:scale-95"
          >
            Oferta
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
