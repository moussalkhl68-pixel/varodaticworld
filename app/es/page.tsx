import type { Metadata } from "next";
import EsHeroSection from "@/components/home/EsHeroSection";
import EsStatsBar from "@/components/home/EsStatsBar";
import EsFeaturesTeaserGrid from "@/components/home/EsFeaturesTeaserGrid";
import EsPricingTeaser from "@/components/home/EsPricingTeaser";
import EsHowVarodaticWorks from "@/components/home/EsHowVarodaticWorks";
import EsCompatibilityGrid from "@/components/home/EsCompatibilityGrid";
import EsTestimonialsCarousel from "@/components/home/EsTestimonialsCarousel";
import EsLatestBlogs from "@/components/home/EsLatestBlogs";
import EsFAQAccordion from "@/components/home/EsFAQAccordion";
import EsFinalCTABanner from "@/components/home/EsFinalCTABanner";
import LocaleTickerBanner from "@/components/seo/LocaleTickerBanner";

export const metadata: Metadata = {
  title: "Varodatic IPTV España — Prueba Gratuita 2026",
  description:
    "Suscripción IPTV premium en España. Más de 26.000 canales en vivo, 4K, deportes, películas y series. Prueba gratuita disponible. Activación inmediata.",
  keywords:
    "varodatic iptv españa, iptv españa 2026, suscripcion iptv españa, canales iptv español, mejor iptv españa",
  alternates: {
    canonical: "https://varodaticiptv.pro/es/",
    languages: {
      en: "https://varodaticiptv.pro/",
      es: "https://varodaticiptv.pro/es/",
    },
  },
  openGraph: {
    title: "Varodatic IPTV España — Prueba Gratuita 2026",
    description:
      "Suscripción IPTV premium en España. Más de 26.000 canales en vivo, 4K, deportes, películas y series. Prueba gratuita disponible. Activación inmediata.",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    url: "https://varodaticiptv.pro/es/",
    siteName: "Varodatic IPTV",
    type: "website",
    images: [
      {
        url: "https://varodaticiptv.pro/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Varodatic IPTV España — Servicio de Streaming 4K",
      },
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Varodatic IPTV",
  url: "https://varodaticiptv.pro/es",
  logo: "https://varodaticiptv.pro/logo.png",
  description: "Servicio IPTV premium para España con más de 26.000 canales en vivo.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["Spanish", "English"],
    contactOption: "TollFree",
  },
  sameAs: ["https://varodaticiptv.pro"],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Varodatic IPTV España",
  url: "https://varodaticiptv.pro/es/",
  description:
    "Servicio IPTV premium con más de 26.000 canales en vivo, contenido VOD en 4K, deportes y entretenimiento internacional para España.",
  brand: { "@type": "Brand", name: "Varodatic" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
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
      name: "¿Qué es Varodatic IPTV y cómo funciona en España?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Varodatic IPTV es un servicio de televisión por internet que ofrece más de 26.000 canales en vivo, incluyendo todos los canales españoles principales como TVE, Antena 3, Telecinco, La Sexta, Movistar+ y DAZN España. Funciona a través de tu conexión a internet en cualquier dispositivo compatible.",
      },
    },
    {
      "@type": "Question",
      name: "¿Funciona Varodatic IPTV en España con Smart TV Samsung o LG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, Varodatic IPTV es compatible con Smart TV Samsung, LG, Sony, Android TV, Firestick, smartphones iOS y Android, tablets y ordenadores. La instalación tarda menos de 5 minutos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hay prueba gratuita disponible para España?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, ofrecemos una prueba gratuita sin necesidad de tarjeta de crédito. Contáctanos por WhatsApp para solicitarla y probar el servicio antes de suscribirte.",
      },
    },
    {
      "@type": "Question",
      name: "¿Incluye canales de deportes españoles como LaLiga y Champions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, incluimos todos los canales de deportes disponibles en España: DAZN, Movistar+ Deportes, beIN Sports, Eurosport y cobertura completa de LaLiga, Champions League, Premier League, NBA, Fórmula 1 y mucho más.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es el precio de Varodatic IPTV en España?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los planes empiezan desde 35€ por 3 meses, 49€ por 6 meses o 69€ por 12 meses. Todos los planes incluyen acceso completo sin permanencia ni contratos.",
      },
    },
  ],
};

export default function EsHomePage() {
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
        <EsHeroSection />
        <EsStatsBar />
        <EsFeaturesTeaserGrid />
        <EsPricingTeaser />
        <EsHowVarodaticWorks />
        <EsCompatibilityGrid />
        <EsTestimonialsCarousel />
        <EsLatestBlogs />
        <EsFAQAccordion />
        <LocaleTickerBanner />
        <EsFinalCTABanner />
      </div>
    </>
  );
}
