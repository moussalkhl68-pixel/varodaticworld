import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import { siteConfig } from "@/lib/siteConfig";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  metadataBase: new URL("https://varodaticiptv.pro"),
  title: {
    default: "Varodatic IPTV — 26,000+ Channels in 4K | Free Trial",
    template: "%s | Varodatic IPTV",
  },
  description: "Discover Varodatic IPTV with 26,000+ channels, 4K streaming, fast setup, and a free trial. Stream smarter with premium live TV and VOD.",
  keywords: [
    "varodatic iptv",
    "best iptv subscription 2026",
    "iptv 4k streaming",
    "iptv free trial",
    "buy iptv subscription",
    "iptv no buffering",
    "26000 channels iptv",
  ],
  authors: [{ name: "Varodatic IPTV" }],
  creator: "Varodatic IPTV",
  alternates: {
    languages: {
      "en": "https://varodaticiptv.pro",
      "es": "https://varodaticiptv.pro/es",
      "x-default": "https://varodaticiptv.pro",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Varodatic IPTV",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@varodaticiptv",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    other: [
      { rel: "mask-icon", url: "/icon.svg", color: "#00E5FF" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Define Organization Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.brand.name,
    url: `https://${siteConfig.brand.domain}`,
    logo: `https://${siteConfig.brand.domain}/logo.png`,
    description: siteConfig.brand.tagline,
  };

  return (
    <html lang={siteConfig.brand.language} className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className={`${inter.variable} ${montserrat.variable} antialiased selection:bg-primary selection:text-black`}>
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
