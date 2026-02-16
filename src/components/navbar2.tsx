"use client";

import { useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useNavbar } from "./navbar-context";
import { X } from "lucide-react";

const navItems = [
  { label: "Automatyzacja", href: "/solutions/business" },
  { label: "Szkolenia", href: "/products" },
  { label: "Zespol", href: "/company/about" },
  { label: "Blog", href: "/blog" },
  { label: "Case Study", href: "/resources/cases" },
  { label: "Kontakt", href: "/company/contact" },
];

export function Navbar2() {
  const { sidebarOpen, setSidebarOpen } = useNavbar();

  const closeMobileMenu = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-x-0 top-5 z-[60] mx-auto hidden h-[52px] w-[calc(100%-40px)] max-w-[1100px] items-center rounded-[50px] border border-white/20 bg-black/20 px-6 backdrop-blur-2xl lg:flex"
      >
        <div className="flex w-full items-center justify-between">
          <Link href="/" className="inline-flex items-center font-semibold text-xl text-white transition-colors hover:text-cyan-400" aria-label="SellGenius Home">
            SellGenius
          </Link>

          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[18px] font-light text-white transition-colors duration-200 hover:text-cyan-400"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button className="rounded-[50px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:from-cyan-500 hover:via-blue-600 hover:to-indigo-700">
            Porozmawiajmy
          </button>
        </div>
      </motion.nav>

      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed right-10 top-9 z-[61] rounded-md bg-transparent p-0 text-white md:top-[42px] lg:hidden"
        aria-label="Toggle navigation menu"
        aria-expanded={sidebarOpen}
      >
        <AnimatePresence mode="wait">
          {sidebarOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-[26px] w-[26px]" strokeWidth={1.5} />
            </motion.div>
          ) : (
            <motion.svg
              key="menu"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.15 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="26"
              height="26"
              fill="none"
            >
              <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={cn("fixed inset-0 z-[60] flex bg-black lg:hidden")}
          >
            <nav className="flex w-full flex-col gap-6 px-10 pt-[86px]">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="text-base font-normal text-white transition-colors duration-200 hover:text-cyan-400"
                >
                  {item.label}
                </Link>
              ))}

              <button
                onClick={closeMobileMenu}
                className="mt-4 rounded-[50px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:from-cyan-500 hover:via-blue-600 hover:to-indigo-700"
              >
                Porozmawiajmy
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

