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
  title: "Korpai - Prospectez avec l'IA",
  description: "Créez des vidéos de prospection IA ultra-personnalisées pour vos prospects",
  metadataBase: new URL("https://korpai.xyz"), // ✅ Ajout pour la gestion des URL absolues
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="TON_CODE" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://korpai.xyz/" /> {/* ✅ Balise canonical */}
        <title>Korpai - Prospectez avec l&apos;IA</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
