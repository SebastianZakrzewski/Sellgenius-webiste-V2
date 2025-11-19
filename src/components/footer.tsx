"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const footerLinks = {
    services: [
      { label: "GeniusAds", href: "/products/ads" },
      { label: "GeniusSales", href: "/products/sales" },
      { label: "GeniusSupport", href: "/products/support" },
      { label: "GeniusShop", href: "/products/shop" },
    ],
    company: [
      { label: "O nas", href: "/company/about" },
      { label: "Kariera", href: "/company/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Kontakt", href: "/company/contact" },
    ],
    support: [
      { label: "Centrum pomocy", href: "/support/help" },
      { label: "Dokumentacja", href: "/support/docs" },
      { label: "Status systemu", href: "/support/status" },
      { label: "Zgłoś błąd", href: "/support/report" },
    ],
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div>
              <Link href="/" className="inline-block mb-6">
                <span className="text-2xl font-bold uppercase tracking-wider">
                  Sell<span className="text-gradient">Genius</span>
                </span>
              </Link>
              <p className="text-gray-400 mb-8 max-w-sm leading-relaxed text-sm">
                Przekształcamy biznesy w maszyny do generowania przychodów dzięki zaawansowanej sztucznej inteligencji
              </p>
              
              {/* Company Information */}
              <div className="mb-6 space-y-2 text-sm text-gray-400">
                <p className="font-medium text-white">SellGenius Ltd</p>
                <p>Company No: 16446823</p>
                <p>Registered in England & Wales</p>
                <p className="leading-relaxed">
                  4th Floor, Silverstream House,<br />
                  45 Fitzroy Street, Fitzrovia,<br />
                  London, W1T 6EB, United Kingdom
                </p>
                <p>
                  Email: <a href="mailto:SellGenius.info@gmail.com" className="hover:text-cyan-400 transition-colors">SellGenius.info@gmail.com</a>
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                {[Facebook, Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-white font-semibold mb-6">Usługi</h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-white font-semibold mb-6">Firma</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h4 className="text-white font-semibold mb-6">Wsparcie</h4>
              <ul className="space-y-4">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-12 border-t border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white font-semibold text-xl mb-3">
              Bądź na bieżąco z najnowszymi trendami AI
            </h3>
            <p className="text-gray-400 mb-6 text-sm">
              Otrzymuj ekskluzywne informacje o nowych funkcjach i najlepszych praktykach
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Twój adres email"
                className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                required
              />
              <Button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-md transition-colors"
              >
                Subskrybuj
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 pb-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 SellGenius Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Polityka prywatności
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
              Regulamin
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-white text-sm transition-colors">
              Ciasteczka
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

