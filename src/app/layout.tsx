import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Content Doctor - Ethical Medical Authority",
  description: "India's pioneer in ethical medical communication and authority-based practice positioning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased selection:bg-blue-200 selection:text-black dark:selection:bg-blue-900 dark:selection:text-white`}>
        <SmoothScroll>
          <Navigation />
          {children}
          <WhatsAppButton />
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
