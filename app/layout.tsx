import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LoyerLegal.be - Vérifiez si votre loyer est illégal",
  description: "35% des loyers en Belgique dépassent le maximum légal. Vérifiez gratuitement en 2 minutes et récupérez votre argent.",
  keywords: "loyer illégal, Belgique, code du logement, propriétaire, surpaye loyer, bruxelles, anvers, loyer légal",
  authors: [{ name: "LoyerLegal.be" }],
  openGraph: {
    title: "LoyerLegal.be - Vérifiez si votre loyer est illégal",
    description: "35% des loyers en Belgique dépassent le maximum légal. Vérifiez gratuitement.",
    type: "website",
    url: "https://loyerlegal.be",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
