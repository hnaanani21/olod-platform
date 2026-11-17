import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OLOD — One Life One Dream",
  description: "Le premier réseau social collaboratif mondial augmenté par l'IA, dédié à la transformation des rêves en réalisations concrètes.",
  keywords: ["OLOD", "One Life One Dream", "réseau social", "IA", "rêves", "projets", "matching", "dreamers"],
  authors: [{ name: "DIGITHS", url: "https://digiths.com" }],
  openGraph: {
    title: "OLOD — One Life One Dream",
    description: "Transformez vos rêves en réalité grâce à l'intelligence artificielle et une communauté mondiale de Dreamers.",
    type: "website",
    locale: "fr_FR",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased min-h-screen">
        <div className="stars-bg" aria-hidden="true" />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
