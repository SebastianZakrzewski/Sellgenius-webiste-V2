"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useNavbar } from "./navbar-context";
import { ChevronDown, Menu, X } from "lucide-react";

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

export function Navbar2() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { sidebarOpen, setSidebarOpen } = useNavbar();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      Object.values(dropdownRefs.current).forEach((ref) => {
        if (ref && !ref.contains(event.target as Node)) {
          setOpenDropdown(null);
        }
      });
    };

    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        sidebarOpen
      ) {
        setSidebarOpen(false);
        setOpenMobileSubmenu(null);
      }
    };

    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen, setSidebarOpen]);

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleMobileSubmenuToggle = (label: string) => {
    setOpenMobileSubmenu(openMobileSubmenu === label ? null : label);
  };

  const closeMobileMenu = () => {
    setSidebarOpen(false);
    setOpenMobileSubmenu(null);
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
            ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-border/50"
            : "bg-background"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="SellGenius Home"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative h-10 w-auto"
              >
                <Image
                  src="/images/logo.png"
                  alt="SellGenius Logo"
                  width={2160}
                  height={576}
                  className="h-10 w-auto object-contain"
                  quality={100}
                  priority
                  unoptimized
                />
              </motion.div>
              <span className="text-xl font-semibold text-foreground group-hover:text-cyan-400 transition-colors duration-200">
                SellGenius
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  ref={(el) => {
                    dropdownRefs.current[item.label] = el;
                  }}
                  className="relative"
                  onMouseEnter={() => item.items && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.items ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className={cn(
                          "flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-cyan-400 rounded-lg transition-all duration-200",
                          openDropdown === item.label && "text-cyan-400"
                        )}
                        aria-expanded={openDropdown === item.label}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            openDropdown === item.label && "rotate-180"
                          )}
                        />
                      </button>

                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-56 bg-card/95 backdrop-blur-md border border-border rounded-lg shadow-xl py-2 z-50"
                          >
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-foreground/80 hover:text-cyan-400 hover:bg-accent/50 transition-colors duration-200"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-cyan-400 rounded-lg transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA & Mobile Menu Button */}
            <div className="flex items-center gap-4">
              {/* Desktop CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-500 hover:via-blue-600 hover:to-indigo-700 text-black px-6 py-2 rounded-lg font-semibold transition-all duration-300 uppercase text-sm"
              >
                POROZMAWIAJMY
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 text-foreground/80 hover:text-cyan-400 transition-colors duration-200"
                aria-label="Toggle navigation menu"
                aria-expanded={sidebarOpen}
              >
                <AnimatePresence mode="wait">
                  {sidebarOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] lg:hidden"
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              ref={mobileMenuRef}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed left-0 top-16 bottom-0 w-80 bg-background border-r border-border z-[56] overflow-y-auto lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Navigation */}
                <nav className="flex-1 p-6 pt-8">
                  <ul className="space-y-2">
                    {navItems.map((item) => (
                      <li key={item.label}>
                        {item.items ? (
                          <>
                            <button
                              onClick={() => handleMobileSubmenuToggle(item.label)}
                              className={cn(
                                "w-full flex items-center justify-between px-4 py-3 text-base font-medium text-foreground hover:text-cyan-400 hover:bg-accent rounded-lg transition-all duration-200",
                                openMobileSubmenu === item.label && "text-cyan-400 bg-accent"
                              )}
                              aria-expanded={openMobileSubmenu === item.label}
                            >
                              <span>{item.label}</span>
                              <ChevronDown
                                className={cn(
                                  "h-5 w-5 transition-transform duration-200",
                                  openMobileSubmenu === item.label && "rotate-180"
                                )}
                              />
                            </button>
                            <AnimatePresence>
                              {openMobileSubmenu === item.label && (
                                <motion.ul
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="pl-4 mt-2 space-y-1 overflow-hidden"
                                >
                                  {item.items.map((subItem) => (
                                    <li key={subItem.label}>
                                      <Link
                                        href={subItem.href}
                                        onClick={closeMobileMenu}
                                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-cyan-400 hover:bg-accent rounded-lg transition-colors duration-200"
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
                            onClick={closeMobileMenu}
                            className="block px-4 py-3 text-base font-medium text-foreground hover:text-cyan-400 hover:bg-accent rounded-lg transition-all duration-200"
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile Footer CTA */}
                <div className="p-6 border-t border-border">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={closeMobileMenu}
                    className="w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-500 hover:via-blue-600 hover:to-indigo-700 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 uppercase text-sm"
                  >
                    POROZMAWIAJMY
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

