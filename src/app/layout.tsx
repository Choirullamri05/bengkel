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
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bengkellasssmedan.web.id"),
  title: {
    default: `Bengkel Las Medan | ${siteConfig.name} - Kanopi, Pagar, Railing`,
    template: `%s | ${siteConfig.shortName} Medan`,
  },
  description:
    "Bengkel las terpercaya di Medan & Deli Serdang. Spesialis kanopi, pagar besi, railing tangga, teralis jendela, folding gate. Pengerjaan rapi, harga bersaing, garansi konstruksi. Hubungi kami sekarang!",
  keywords: [
    // Primary keywords
    "bengkel las medan",
    "tukang las medan",
    "jasa las medan",
    // Service keywords
    "kanopi medan",
    "kanopi minimalis medan",
    "pagar besi medan",
    "pagar minimalis medan",
    "railing tangga medan",
    "teralis jendela medan",
    "folding gate medan",
    "pintu lipat medan",
    "las besi medan",
    // Location variants
    "bengkel las deli serdang",
    "bengkel las sunggal",
    "bengkel las binjai",
    "jasa las deli serdang",
    "tukang las sunggal",
    // Brand
    "bengkel las senang senang",
    "bengkel las ss medan",
    // Long tails
    "jasa pembuatan kanopi medan murah",
    "harga pagar besi medan 2025",
    "bengkel las terdekat medan",
    "welding service medan",
  ],
  authors: [{ name: siteConfig.name, url: "https://bengkellasssmedan.web.id" }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "https://bengkellasssmedan.web.id",
  },
  openGraph: {
    title: `Bengkel Las Medan | ${siteConfig.name}`,
    description:
      "Bengkel las terpercaya di Medan. Spesialis kanopi, pagar besi, railing, teralis & folding gate. Garansi konstruksi, survey gratis!",
    url: "https://bengkellasssmedan.web.id",
    siteName: siteConfig.name,
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1440,
        height: 1024,
        alt: `${siteConfig.name} - Jasa Las Profesional di Medan`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Bengkel Las Medan | ${siteConfig.name}`,
    description:
      "Bengkel las terpercaya di Medan. Spesialis kanopi, pagar besi, railing, teralis & folding gate.",
    images: ["/images/hero-bg.jpg"],
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
    "geo.region": "ID-SU",
    "geo.placename": "Medan, Sumatera Utara",
    "geo.position": "3.585014;98.592019",
    "ICBM": "3.585014, 98.592019",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Preconnect for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Resource hints */}
        <link rel="preload" as="image" href="/images/hero-bg.webp" type="image/webp" />
      </head>
      <body className="min-h-screen bg-white antialiased">
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
