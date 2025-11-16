"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";
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
          "fixed top-0 left-0 right-0 z-[60] transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-md shadow-sm"
            : "bg-background"
        )}
      >
        <div className="flex items-center justify-between h-16">
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
                    className="text-xl font-semibold text-foreground whitespace-nowrap text-center"
                    style={{ marginLeft: '24px', marginTop: '24px' }}
                  >
                    SellGenius
                  </motion.span>
                ) : (
                  <motion.div
                    key="logo"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-auto"
                    style={{ height: '64px', marginLeft: '24px', marginTop: '48px' }}
                  >
                    <Image
                      src="/images/logo.png"
                      alt="SellGenius Logo"
                      width={2160}
                      height={576}
                      className="w-auto object-contain"
                      style={{ height: '64px' }}
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
              className={cn(
                "p-2 text-foreground hover:bg-accent rounded-md transition-colors",
                sidebarOpen && "bg-accent"
              )}
              aria-label="Toggle navigation sidebar"
              aria-expanded={sidebarOpen}
            >
              {sidebarOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="flex items-center gap-4 pr-6 lg:pr-8">
            <button
              className="bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] hover:from-[#22D3EE] hover:to-[#3B82F6] text-[#1e40af] px-6 py-2 rounded-lg font-semibold transition-all duration-300 uppercase mt-4"
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
              className="fixed inset-0 z-[54]"
              onClick={closeSidebar}
            />

            {/* Sidebar */}
            <motion.div
              ref={sidebarRef}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed left-0 top-16 bottom-0 w-64 bg-background z-[55] overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Sidebar Navigation */}
                <nav className="flex-1 p-4 pt-6">
                  <ul className="space-y-1">
                    {navItems.map((item) => (
                      <li key={item.label}>
                        {item.items ? (
                          <>
                            <button
                              onClick={() => handleSubmenuToggle(item.label)}
                              className={cn(
                                "group w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground hover:bg-accent rounded-md transition-colors",
                                openSubmenu === item.label && "bg-accent"
                              )}
                            >
                              <span>{item.label}</span>
                              <ChevronRight
                                className={cn(
                                  "h-4 w-4 opacity-0 group-hover:opacity-100 transition-all",
                                  openSubmenu === item.label && "rotate-90 opacity-100"
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
                                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
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
                            className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-accent rounded-md transition-colors"
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Sidebar Footer */}
                <div className="p-4 border-t border-border">
                  <button
                    onClick={closeSidebar}
                    className="w-full bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] hover:from-[#22D3EE] hover:to-[#3B82F6] text-[#1e40af] px-6 py-2 rounded-lg font-semibold transition-all duration-300 uppercase"
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
