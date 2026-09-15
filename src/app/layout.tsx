import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import Background from "@/app/_components/Background";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
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
    description: "Engineering the on-chain future — protocols, full-stack products and interfaces that feel alive.",
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f6fb" },
    { media: "(prefers-color-scheme: dark)", color: "#05060f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Background />
          <Navbar />
          <div className="relative flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
