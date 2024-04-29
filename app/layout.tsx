import React from "react";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import AuthProvider from "./AuthProvider";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Trendify Clothing Store",
  description: "Trendify brings latest fashion to the market",
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
        <main className="mx-auto sm:max-w-[1344px] px-1 sm:px-6 lg:px-8">
          <AuthProvider>
            <Navbar />
            {children}
            <Footer />
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}
