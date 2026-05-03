import type { Metadata } from "next";
import DeHeroSection from "@/components/home/DeHeroSection";
import DeStatsBar from "@/components/home/DeStatsBar";
import DeFeaturesTeaserGrid from "@/components/home/DeFeaturesTeaserGrid";
import DePricingTeaser from "@/components/home/DePricingTeaser";
import DeHowVarodaticWorks from "@/components/home/DeHowVarodaticWorks";
import DeCompatibilityGrid from "@/components/home/DeCompatibilityGrid";
import DeTestimonialsCarousel from "@/components/home/DeTestimonialsCarousel";
import DeLatestBlogs from "@/components/home/DeLatestBlogs";
import DeFAQAccordion from "@/components/home/DeFAQAccordion";
import DeFinalCTABanner from "@/components/home/DeFinalCTABanner";
import LocaleTickerBanner from "@/components/seo/LocaleTickerBanner";

export const metadata: Metadata = {
  title: "Varodatic IPTV Schweiz — Gratis Testen 2026",
  description:
    "IPTV Abonnement Schweiz mit 26'000+ Live-Sendern in 4K. SRF, DAZN, Sky Sport inklusive. Gratis Testen — sofortige Aktivierung. Ab CHF 35.",
  keywords:
    "varodatic iptv schweiz, bestes iptv schweiz 2026, iptv abonnement schweiz, iptv schweiz deutsch, iptv für smart tv schweiz, schweizer tv kanäle iptv",
  alternates: {
    canonical: "https://varodaticiptv.pro/de-ch/",
    languages: {
      "de-CH": "https://varodaticiptv.pro/de-ch/",
      en: "https://varodaticiptv.pro/",
    },
  },
  openGraph: {
    title: "Varodatic IPTV Schweiz — Gratis Testen 2026",
    description:
      "Premium IPTV Schweiz mit 26'000+ Live-Sendern, 4K, Sport und VOD. SRF, DAZN inklusive. Gratis Testversion verfügbar.",
    locale: "de_CH",
    alternateLocale: ["en_US"],
    url: "https://varodaticiptv.pro/de-ch/",
    siteName: "Varodatic IPTV",
    type: "website",
    images: [
      {
        url: "https://varodaticiptv.pro/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Varodatic IPTV Schweiz — Premium Streaming Service 4K",
      },
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Varodatic IPTV",
  url: "https://varodaticiptv.pro/de-ch",
  logo: "https://varodaticiptv.pro/logo.png",
  description: "Premium IPTV Service für die Schweiz mit über 26'000 Live-Sendern.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["German", "English", "French", "Italian"],
    contactOption: "TollFree",
  },
  sameAs: ["https://varodaticiptv.pro"],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Varodatic IPTV Schweiz",
  url: "https://varodaticiptv.pro/de-ch/",
  description:
    "Premium IPTV Service mit über 26'000 Live-Sendern, VOD-Inhalten in 4K, Sport und internationalem Entertainment für die Schweiz.",
  brand: { "@type": "Brand", name: "Varodatic" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "CHF",
    lowPrice: "35",
    highPrice: "69",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "Varodatic IPTV" },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    bestRating: "5",
    reviewCount: "1240",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist Varodatic IPTV Schweiz und wie funktioniert es?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Varodatic IPTV Schweiz ist ein Internet-TV-Service mit über 26'000 Live-Sendern, darunter alle wichtigen Schweizer Sender wie SRF 1, SRF 2, SRF info sowie internationale Sender wie DAZN, Sky Sport, Pro7 und SAT.1. Funktioniert über deine Internetverbindung auf jedem kompatiblen Gerät.",
      },
    },
    {
      "@type": "Question",
      name: "Sind Schweizer Sender wie SRF in Varodatic IPTV inklusive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, Varodatic IPTV Schweiz enthält SRF 1, SRF 2, SRF info, 3sat, sowie deutschsprachige Sender (ARD, ZDF, Pro7, SAT.1, RTL) und internationale Sport- und Unterhaltungskanäle in 4K-Qualität.",
      },
    },
    {
      "@type": "Question",
      name: "Gibt es eine kostenlose Testversion für die Schweiz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, wir bieten eine kostenlose Testversion ohne Kreditkarte. Kontaktiere uns per WhatsApp, um sie anzufordern und den Service vor dem Abonnieren zu testen.",
      },
    },
    {
      "@type": "Question",
      name: "Was kostet Varodatic IPTV in der Schweiz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Pakete beginnen ab CHF 35 für 3 Monate, CHF 49 für 6 Monate oder CHF 69 für 12 Monate. Alle Pakete ohne Vertrag oder Mindestlaufzeit.",
      },
    },
    {
      "@type": "Question",
      name: "Auf welchen Geräten funktioniert Varodatic IPTV Schweiz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kompatibel mit Samsung Smart TV, LG Smart TV, Amazon Firestick, Android TV, iOS, Android, Windows und Mac. Die Einrichtung dauert weniger als 5 Minuten.",
      },
    },
  ],
};

export default function DeChHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="flex flex-col">
        <DeHeroSection />
        <DeStatsBar />
        <DeFeaturesTeaserGrid />
        <DePricingTeaser />
        <DeHowVarodaticWorks />
        <DeCompatibilityGrid />
        <DeTestimonialsCarousel />
        <DeLatestBlogs />
        <DeFAQAccordion />
        <LocaleTickerBanner />
        <DeFinalCTABanner />
      </div>
    </>
  );
}
