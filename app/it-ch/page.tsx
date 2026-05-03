import type { Metadata } from "next";
import ItHeroSection from "@/components/home/ItHeroSection";
import ItStatsBar from "@/components/home/ItStatsBar";
import ItFeaturesTeaserGrid from "@/components/home/ItFeaturesTeaserGrid";
import ItPricingTeaser from "@/components/home/ItPricingTeaser";
import ItHowVarodaticWorks from "@/components/home/ItHowVarodaticWorks";
import ItCompatibilityGrid from "@/components/home/ItCompatibilityGrid";
import ItTestimonialsCarousel from "@/components/home/ItTestimonialsCarousel";
import ItLatestBlogs from "@/components/home/ItLatestBlogs";
import ItFAQAccordion from "@/components/home/ItFAQAccordion";
import ItFinalCTABanner from "@/components/home/ItFinalCTABanner";
import LocaleTickerBanner from "@/components/seo/LocaleTickerBanner";

export const metadata: Metadata = {
  title: "Varodatic IPTV Svizzera — Prova Gratuita 2026",
  description:
    "Abbonamento IPTV Svizzera con 26.000+ canali in diretta in 4K. RSI, Rai, DAZN inclusi. Prova gratuita — attivazione immediata. Da CHF 35.",
  keywords:
    "varodatic iptv svizzera, miglior iptv svizzera 2026, abbonamento iptv svizzera, iptv svizzero italiano, canali svizzeri iptv, iptv per smart tv svizzera",
  alternates: {
    canonical: "https://varodaticiptv.pro/it-ch/",
    languages: {
      "it-CH": "https://varodaticiptv.pro/it-ch/",
      en: "https://varodaticiptv.pro/",
    },
  },
  openGraph: {
    title: "Varodatic IPTV Svizzera — Prova Gratuita 2026",
    description:
      "IPTV premium Svizzera con 26.000+ canali in diretta, 4K, sport e VOD. RSI, Rai, DAZN inclusi. Prova gratuita disponibile.",
    locale: "it_CH",
    alternateLocale: ["en_US"],
    url: "https://varodaticiptv.pro/it-ch/",
    siteName: "Varodatic IPTV",
    type: "website",
    images: [
      {
        url: "https://varodaticiptv.pro/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Varodatic IPTV Svizzera — Servizio di Streaming Premium 4K",
      },
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Varodatic IPTV",
  url: "https://varodaticiptv.pro/it-ch",
  logo: "https://varodaticiptv.pro/logo.png",
  description: "Servizio IPTV premium per la Svizzera italiana con oltre 26.000 canali in diretta.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["Italian", "German", "French", "English"],
    contactOption: "TollFree",
  },
  sameAs: ["https://varodaticiptv.pro"],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Varodatic IPTV Svizzera",
  url: "https://varodaticiptv.pro/it-ch/",
  description:
    "Servizio IPTV premium con oltre 26.000 canali in diretta, contenuti VOD in 4K, sport e intrattenimento internazionale per la Svizzera.",
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
      name: "Cos'è Varodatic IPTV Svizzera e come funziona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Varodatic IPTV Svizzera è un servizio di televisione via internet con oltre 26.000 canali in diretta, inclusi RSI LA 1, RSI LA 2, Rai 1, Rai 2, Rai 3, Mediaset, DAZN e molti altri. Funziona tramite la tua connessione internet su qualsiasi dispositivo compatibile.",
      },
    },
    {
      "@type": "Question",
      name: "I canali RSI e Rai sono inclusi in Varodatic IPTV?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì, Varodatic IPTV Svizzera include RSI LA 1, RSI LA 2, RSI La 3, Rai 1, Rai 2, Rai 3, Mediaset, La7 e tutti i principali canali sport internazionali inclusa la Serie A in qualità 4K.",
      },
    },
    {
      "@type": "Question",
      name: "È disponibile una prova gratuita per la Svizzera?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì, offriamo una prova gratuita senza carta di credito. Contattaci su WhatsApp per richiederla e testare il servizio prima di abbonarti.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto costa Varodatic IPTV in Svizzera?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I piani partono da CHF 35 per 3 mesi, CHF 49 per 6 mesi o CHF 69 per 12 mesi. Tutti i piani senza vincoli né contratto.",
      },
    },
    {
      "@type": "Question",
      name: "Su quali dispositivi funziona Varodatic IPTV Svizzera?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Compatibile con Samsung Smart TV, LG Smart TV, Amazon Firestick, Android TV, iOS, Android, Windows e Mac. L'installazione richiede meno di 5 minuti.",
      },
    },
  ],
};

export default function ItChHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="flex flex-col">
        <ItHeroSection />
        <ItStatsBar />
        <ItFeaturesTeaserGrid />
        <ItPricingTeaser />
        <ItHowVarodaticWorks />
        <ItCompatibilityGrid />
        <ItTestimonialsCarousel />
        <ItLatestBlogs />
        <ItFAQAccordion />
        <LocaleTickerBanner />
        <ItFinalCTABanner />
      </div>
    </>
  );
}
