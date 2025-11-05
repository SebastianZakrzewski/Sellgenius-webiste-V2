"use client";

import { useNavbar } from "./navbar-context";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export function LayoutContent({ children }: { children: ReactNode }) {
  const { sidebarOpen } = useNavbar();

  return (
    <motion.div
      animate={{
        marginLeft: sidebarOpen ? "16rem" : "0", // w-64 = 16rem = 256px
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}

