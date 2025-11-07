import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { NavbarProvider } from "@/components/navbar-context";
import { LayoutContent } from "@/components/layout-content";
import { MessageCircle } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SellGenius Website",
  description: "SellGenius Website V2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="dark">
      <body className={inter.className}>
        <NavbarProvider>
          <Navbar />
          <LayoutContent>{children}</LayoutContent>
          {/* Floating Chat Button */}
          <button
            className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 z-50"
            aria-label="Chat"
          >
            <MessageCircle className="w-6 h-6 text-[#000000]" />
          </button>
        </NavbarProvider>
      </body>
    </html>
  );
}
