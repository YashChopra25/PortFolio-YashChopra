import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/app/_components/Nav";
import Footer from "@/app/_components/Footer";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const siteUrl = "https://yashchopraportfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yash Chopra | Full Stack & Web3 Developer",
    template: "%s | Yash Chopra",
  },
  description:
    "Portfolio of Yash Chopra — Full Stack & Web3 engineer building on Solana, Ethereum and Robinhood Chain with Next.js, Rust and Solidity.",
  keywords: [
    "Yash Chopra",
    "Portfolio",
    "Full Stack Developer",
    "Web3 Developer",
    "Blockchain Engineer",
    "Solana Developer",
    "Solidity Developer",
    "Robinhood Chain",
    "React Developer",
    "Next.js Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Yash Chopra" }],
  creator: "Yash Chopra",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Yash Chopra Portfolio",
    title: "Yash Chopra | Full Stack & Web3 Developer",
    description: "Full Stack & Web3 engineer building smart contracts, Solana programs and full-stack products.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yash Chopra Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Chopra | Full Stack & Web3 Developer",
    description: "Full Stack & Web3 engineer building on Solana, Ethereum and Robinhood Chain.",
    creator: "@YashChopra25",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0e10",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <div className="flex min-h-screen flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
