"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";

export function Footer() {
  const footerLinks = {
    products: [
      { label: "GeniusAds", href: "/products/ads" },
      { label: "GeniusSales", href: "/products/sales" },
      { label: "GeniusSupport", href: "/products/support" },
      { label: "GeniusShop", href: "/products/shop" },
    ],
    company: [
      { label: "O nas", href: "/company/about" },
      { label: "Kariera", href: "/company/careers" },
      { label: "Kontakt", href: "/company/contact" },
      { label: "Blog", href: "/blog" },
    ],
    resources: [
      { label: "Dokumentacja", href: "/resources/docs" },
      { label: "Case Studies", href: "/resources/cases" },
      { label: "Pomoc", href: "/resources/help" },
      { label: "Polityka Prywatności", href: "/legal/privacy" },
    ],
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold uppercase tracking-wider">
                Sell<span className="text-gradient">Genius</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
              Zwiększ sprzedaż i optymalizuj procesy dzięki zaawansowanej analityce danych i inteligentnej automatyzacji.
            </p>
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

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-6">Produkty</h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
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

          <div>
            <h4 className="text-white font-semibold mb-6">Zasoby</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
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

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SellGenius. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
              Regulamin
            </Link>
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Polityka Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

