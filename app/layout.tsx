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
    "Plus de méritocratie dans la politique partisane\u00A0: des protocoles de sélection robustes contre les biais comportementaux",
  description:
    "Une exploration journalistique de la manière dont l\u2019économie comportementale et la conception de protocoles peuvent améliorer les processus de sélection au sein des partis politiques.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
