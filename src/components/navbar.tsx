"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useNavbar } from "./navbar-context";

interface NavItem {
  label: string;
  href?: string;
  items?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Products",
    items: [
      { label: "Product Overview", href: "/products" },
      { label: "Features", href: "/products/features" },
      { label: "Pricing", href: "/products/pricing" },
    ],
  },
  {
    label: "Solutions",
    items: [
      { label: "For Business", href: "/solutions/business" },
      { label: "For Developers", href: "/solutions/developers" },
      { label: "Enterprise", href: "/solutions/enterprise" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Documentation", href: "/resources/docs" },
      { label: "Blog", href: "/resources/blog" },
      { label: "Case Studies", href: "/resources/cases" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About Us", href: "/company/about" },
      { label: "Careers", href: "/company/careers" },
      { label: "Contact", href: "/company/contact" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { sidebarOpen, setSidebarOpen } = useNavbar();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
        setOpenSubmenu(null);
      }
    };

    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen, setSidebarOpen]);

  const handleSubmenuToggle = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[60] transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-black/60 backdrop-blur-xl border-white/5 shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo and Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="relative flex items-center justify-center"
              style={{ height: '192px', width: '100%' }}
            >
              <AnimatePresence mode="wait">
                {!isScrolled ? (
                  <motion.span
                    key="text"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="text-xl md:text-2xl font-bold text-white whitespace-nowrap text-center tracking-wider uppercase"
                    style={{ marginLeft: '24px', marginTop: '24px' }}
                  >
                    Sell<span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500">Genius</span>
                  </motion.span>
                ) : (
                  <motion.div
                    key="logo"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-auto"
                    style={{ height: '100px', marginLeft: '24px', marginTop: '48px' }}
                  >
                    <Image
                      src="/images/logo.png"
                      alt="SellGenius Logo"
                      width={2160}
                      height={576}
                      className="w-auto object-contain"
                      style={{ height: '100px' }}
                      quality={100}
                      priority
                      unoptimized
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </Link>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="group"
              style={{ marginTop: '24px' }}
              aria-label="Toggle navigation sidebar"
              aria-expanded={sidebarOpen}
            >
              <svg className="h-7 w-7 transition-colors duration-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {/* Battery body - unified rounded rectangle */}
                <rect 
                  x="2" 
                  y="7" 
                  width="16" 
                  height="10" 
                  rx="2" 
                  ry="2" 
                  stroke="#808080"
                  fill="none"
                  className="group-hover:stroke-white transition-all duration-300"
                />
                {/* Charge indicator bar - unified rounded rectangle */}
                <rect 
                  x={sidebarOpen ? "12" : "4"} 
                  y="9" 
                  width="1.5" 
                  height="6" 
                  rx="0.75" 
                  ry="0.75"
                  fill="#808080"
                  className="group-hover:fill-white transition-all duration-300"
                />
              </svg>
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="flex items-center gap-4 pr-6 lg:pr-8">
            <button
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-500 hover:via-blue-600 hover:to-indigo-700 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300 uppercase mt-4 shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              POROZMAWIAJMY
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Invisible overlay for closing sidebar on outside click */}
            <div
              className="fixed inset-0 z-[54] bg-black/50 backdrop-blur-sm"
              onClick={closeSidebar}
            />

            {/* Sidebar */}
            <motion.div
              ref={sidebarRef}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed left-0 top-20 md:top-24 bottom-0 w-72 bg-black/95 backdrop-blur-xl border-r border-white/10 z-[55] overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Sidebar Navigation */}
                <nav className="flex-1 p-4 pt-12">
                  <ul className="space-y-2">
                    {navItems.map((item) => (
                      <li key={item.label}>
                        {item.items ? (
                          <>
                            <button
                              onClick={() => handleSubmenuToggle(item.label)}
                              className={cn(
                                "group w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300",
                                openSubmenu === item.label && "bg-white/5 text-white"
                              )}
                            >
                              <span>{item.label}</span>
                              <ChevronRight
                                className={cn(
                                  "h-4 w-4 text-gray-500 group-hover:text-white transition-all",
                                  openSubmenu === item.label && "rotate-90 text-white"
                                )}
                              />
                            </button>
                            <AnimatePresence>
                              {openSubmenu === item.label && (
                                <motion.ul
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="pl-4 mt-1 space-y-1 overflow-hidden"
                                >
                                  {item.items.map((subItem) => (
                                    <li key={subItem.label}>
                                      <Link
                                        href={subItem.href}
                                        onClick={closeSidebar}
                                        className="block px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-300"
                                      >
                                        {subItem.label}
                                      </Link>
                                    </li>
                                  ))}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            href={item.href || "#"}
                            onClick={closeSidebar}
                            className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300"
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Sidebar Footer */}
                <div className="p-4 border-t border-white/10">
                  <button
                    onClick={closeSidebar}
                    className="w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-500 hover:via-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 uppercase shadow-lg"
                  >
                    POROZMAWIAJMY
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
