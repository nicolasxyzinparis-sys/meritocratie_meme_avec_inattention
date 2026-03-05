import React from "react"
import type { Metadata } from "next";
import { Lora, Source_Sans_3, Dancing_Script } from "next/font/google";

import "./globals.css";

const _lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});
const _sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const _dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-cursive",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "More Meritocracy in Party Politics: Implementing Selection Protocols Robust Against Biases",
  description:
    "A journalistic exploration of how behavioral economics and protocol design can improve political party selection processes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
