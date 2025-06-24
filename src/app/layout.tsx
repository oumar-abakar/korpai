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
  title: "Korpai - Augmentez-vous avec l'IA",
  description: "Augmentez-vous avec l'IA",
  // 🔐 C’est ici que tu peux aussi insérer la vérification, comme ça :
  // (ou bien directement dans la <head> du HTML comme ci-dessous)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* ✅ Insère ici ta balise de vérification Google */}
        <meta name="google-site-verification" content="pEdexIP5iQavEJlL1MrVfxZha2f-hg2PV2ZIE1WR8g4" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
