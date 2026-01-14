import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AGUIFA Dev Finance | Structuring Sustainable Finance for Africa",
  description: "Cabinet de conseil indépendant spécialisé en Finance de développement, en ingénierie de l'investissement privé, en appui stratégique et technique aux institutions publiques et financières pour l'Afrique.",
  keywords: "development finance, private capital, ESG, green finance, Africa, fintech, MSME, investment",
  authors: [{ name: "AGUIFA Dev Finance" }],
  openGraph: {
    title: "AGUIFA Dev Finance | Structuring Sustainable Finance for Africa",
    description: "Mobilizing capital, Building impact, Advancing development",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
