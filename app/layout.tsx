import React from "react";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Trendify Clothing Store",
  description: "Trending brings latest fashion to the market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <main className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
