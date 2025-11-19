import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar2 } from "@/components/navbar2";
import { NavbarProvider } from "@/components/navbar-context";
import { LayoutContent } from "@/components/layout-content";
import { ChatWidget } from "@/components/chat-widget";

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
          <Navbar2 />
          <LayoutContent>{children}</LayoutContent>
          <ChatWidget />
        </NavbarProvider>
      </body>
    </html>
  );
}
