"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface NavbarContextType {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export function NavbarProvider({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <NavbarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbar() {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
}

