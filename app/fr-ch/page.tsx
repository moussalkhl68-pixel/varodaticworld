import type { Metadata } from "next";
import FrHeroSection from "@/components/home/FrHeroSection";
import FrStatsBar from "@/components/home/FrStatsBar";
import FrFeaturesTeaserGrid from "@/components/home/FrFeaturesTeaserGrid";
import FrPricingTeaser from "@/components/home/FrPricingTeaser";
import FrHowVarodaticWorks from "@/components/home/FrHowVarodaticWorks";
import FrCompatibilityGrid from "@/components/home/FrCompatibilityGrid";
import FrTestimonialsCarousel from "@/components/home/FrTestimonialsCarousel";
import FrLatestBlogs from "@/components/home/FrLatestBlogs";
import FrFAQAccordion from "@/components/home/FrFAQAccordion";
import FrFinalCTABanner from "@/components/home/FrFinalCTABanner";
import LocaleTickerBanner from "@/components/seo/LocaleTickerBanner";

export const metadata: Metadata = {
  title: "Varodatic IPTV Suisse — Essai Gratuit 2026",
  description:
    "Abonnement IPTV Suisse Romande avec 26'000+ chaînes en direct en 4K. RTS, Canal+, TF1 inclus. Essai gratuit — activation instantanée. Dès CHF 35.",
  keywords:
    "varodatic iptv suisse, meilleur iptv suisse 2026, abonnement iptv suisse romande, iptv romand, iptv pour smart tv suisse, chaînes suisses iptv",
  alternates: {
    canonical: "https://varodaticiptv.pro/fr-ch/",
    languages: {
      "fr-CH": "https://varodaticiptv.pro/fr-ch/",
      en: "https://varodaticiptv.pro/",
    },
  },
  openGraph: {
    title: "Varodatic IPTV Suisse — Essai Gratuit 2026",
    description:
      "IPTV premium Suisse Romande avec 26'000+ chaînes en direct, 4K, sport et VOD. RTS, Canal+ inclus. Essai gratuit disponible.",
    locale: "fr_CH",
    alternateLocale: ["en_US"],
    url: "https://varodaticiptv.pro/fr-ch/",
    siteName: "Varodatic IPTV",
    type: "website",
    images: [
      {
        url: "https://varodaticiptv.pro/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Varodatic IPTV Suisse — Service de Streaming Premium 4K",
      },
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Varodatic IPTV",
  url: "https://varodaticiptv.pro/fr-ch",
  logo: "https://varodaticiptv.pro/logo.png",
  description: "Service IPTV premium pour la Suisse Romande avec plus de 26'000 chaînes en direct.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["French", "German", "Italian", "English"],
    contactOption: "TollFree",
  },
  sameAs: ["https://varodaticiptv.pro"],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Varodatic IPTV Suisse Romande",
  url: "https://varodaticiptv.pro/fr-ch/",
  description:
    "Service IPTV premium avec plus de 26'000 chaînes en direct, contenus VOD en 4K, sport et divertissement international pour la Suisse.",
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
      name: "Qu'est-ce que Varodatic IPTV Suisse et comment ça fonctionne ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Varodatic IPTV Suisse est un service de télévision par internet avec plus de 26'000 chaînes en direct, incluant toutes les chaînes suisses romandes comme RTS Un, RTS Deux, RTS Info ainsi que Canal+, TF1, beIN Sports et bien d'autres. Fonctionne via votre connexion internet sur n'importe quel appareil compatible.",
      },
    },
    {
      "@type": "Question",
      name: "Les chaînes RTS et Canal+ sont-elles incluses ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Varodatic IPTV Suisse comprend RTS Un, RTS Deux, RTS Info, ainsi que TF1, France 2, Canal+, beIN Sports et des centaines de chaînes sport et divertissement internationales en qualité 4K.",
      },
    },
    {
      "@type": "Question",
      name: "Y a-t-il un essai gratuit disponible pour la Suisse ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, nous offrons un essai gratuit sans carte de crédit. Contactez-nous par WhatsApp pour le demander et tester le service avant de vous abonner.",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le prix de Varodatic IPTV en Suisse ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les offres commencent à CHF 35 pour 3 mois, CHF 49 pour 6 mois ou CHF 69 pour 12 mois. Toutes les offres sans engagement ni contrat.",
      },
    },
    {
      "@type": "Question",
      name: "Sur quels appareils fonctionne Varodatic IPTV Suisse ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Compatible avec Samsung Smart TV, LG Smart TV, Amazon Firestick, Android TV, iOS, Android, Windows et Mac. L'installation prend moins de 5 minutes.",
      },
    },
  ],
};

export default function FrChHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="flex flex-col">
        <FrHeroSection />
        <FrStatsBar />
        <FrFeaturesTeaserGrid />
        <FrPricingTeaser />
        <FrHowVarodaticWorks />
        <FrCompatibilityGrid />
        <FrTestimonialsCarousel />
        <FrLatestBlogs />
        <FrFAQAccordion />
        <LocaleTickerBanner />
        <FrFinalCTABanner />
      </div>
    </>
  );
}
