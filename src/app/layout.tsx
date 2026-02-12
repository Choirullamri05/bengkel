import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { siteConfig } from "@/content/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bengkellasssmedan.web.id"),
  title: {
    default: `${siteConfig.name} | Jasa Las Profesional Medan`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "bengkel las",
    "bengkel las medan",
    "jasa las medan",
    "kanopi medan",
    "pagar besi medan",
    "railing tangga",
    "teralis jendela",
    "las besi",
    "tukang las",
    "bengkel las deli serdang",
    "kanopi minimalis",
    "pagar minimalis",
    "folding gate",
    "pintu lipat",
    "welding service medan",
    siteConfig.address.city,
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Jasa Las Profesional Medan`,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Jasa Las Profesional di Medan`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Jasa Las Profesional Medan`,
    description: siteConfig.description,
    images: ["/images/hero-bg.png"],
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
  other: {
    "theme-color": "#3b82f6",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-white antialiased">
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
