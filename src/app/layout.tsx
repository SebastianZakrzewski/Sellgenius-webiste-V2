import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { NavbarProvider } from "@/components/navbar-context";
import { LayoutContent } from "@/components/layout-content";

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
        </NavbarProvider>
      </body>
    </html>
  );
}
