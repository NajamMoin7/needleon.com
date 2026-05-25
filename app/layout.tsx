import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CartProvider } from "@/components/cart/CartProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://needleon.com"),
  title: {
    default: "NeedleOn — Boutique Ready-to-Wear & Custom Stitching",
    template: "%s · NeedleOn",
  },
  description:
    "NeedleOn is a modern boutique offering curated ready-to-wear and bespoke custom stitching. Hand-finished pieces, made to fit you.",
  openGraph: {
    title: "NeedleOn — Boutique Ready-to-Wear & Custom Stitching",
    description:
      "Curated boutique ready-to-wear and bespoke stitching. Cash on Delivery & Easypaisa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-ink-700">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
