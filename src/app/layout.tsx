import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import Navbar from "@/app/_components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Yash Chopra | Full Stack & Web3 Developer",
    template: "%s | Yash Chopra"
  },
  description: "Advanced Portfolio of Yash Chopra - Full Stack & Web3 Developer specializing in React, Next.js, and Blockchain technologies.",
  keywords: [
    "Yash Chopra",
    "Portfolio",
    "Full Stack Developer",
    "Web3 Developer",
    "Blockchain Engineer",
    "React Developer",
    "Next.js Portfolio",
    "Software Engineer"
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
    url: "https://yashchopra.vercel.app", // Fallback URL
    siteName: "Yash Chopra Portfolio",
    title: "Yash Chopra | Full Stack & Web3 Developer",
    description: "Building exceptional digital experiences with a focus on Web3, Performance, and Design.",
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
    description: "Full Stack & Web3 Developer specializing in high-performance web applications.",
    creator: "@YashChopra25",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body className={`${inter.className} transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
