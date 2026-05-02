import type { Metadata } from "next";
import Link from "next/link";
import EsPricingHero from "@/components/pricing/EsPricingHero";
import EsPricingSection from "@/components/pricing/EsPricingSection";
import CTAButton from "@/components/shared/CTAButton";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Precios IPTV Varodatic España 2026 — Planes desde 35€",
  description:
    "Elige tu plan IPTV en España. Desde 35€ sin permanencia. Más de 26.000 canales en vivo, 4K, deportes y VOD. Activación inmediata.",
  alternates: {
    canonical: "https://varodatociptv.pro/es/pricing",
    languages: {
      en: "https://varodatociptv.pro/pricing",
      es: "https://varodatociptv.pro/es/pricing",
    },
  },
  openGraph: {
    locale: "es_ES",
    title: "Precios IPTV Varodatic España 2026 — Planes desde 35€",
    description:
      "Planes IPTV en España desde 35€ sin permanencia. Más de 26.000 canales, 4K, deportes y VOD. Sin contrato.",
    url: "https://varodatociptv.pro/es/pricing",
    images: [
      {
        url: "https://varodatociptv.pro/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const BILLING_FAQS = [
  {
    q: "¿Hay algún contrato o permanencia?",
    a: "No. Todos nuestros planes funcionan con prepago. Puedes cancelar en cualquier momento sin comisiones ni penalizaciones por cancelación anticipada.",
  },
  {
    q: "¿Puedo usar varios dispositivos a la vez?",
    a: "Sí. Nuestros planes de 2 y 3 conexiones permiten la emisión simultánea en distintos dispositivos dentro del mismo hogar.",
  },
  {
    q: "¿Qué métodos de pago aceptáis?",
    a: "Aceptamos Visa, MasterCard, Amex y PayPal según tu región. Utilizamos Stripe para garantizar pagos seguros.",
  },
  {
    q: "¿Cuánto tarda la activación?",
    a: "La activación es inmediata. Recibirás tus credenciales e instrucciones de configuración por email o WhatsApp en cuanto se confirme el pago.",
  },
  {
    q: "¿Funciona en España y Latinoamérica?",
    a: "Sí. El servicio funciona en cualquier país con conexión a internet superior a 20 Mbps. Accedes a la misma biblioteca de 26.000+ canales desde cualquier lugar del mundo.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Varodatic IPTV",
  url: "https://varodatociptv.pro/es/",
  logo: "https://varodatociptv.pro/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["Spanish", "English"],
  },
};

export default function EsPricingPage() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Suscripción Varodatic IPTV",
    inLanguage: "es",
    image: `https://${siteConfig.brand.domain}/logo.png`,
    description: "Transmite más de 26.000 canales en 4K con Varodatic IPTV.",
    brand: {
      "@type": "Brand",
      name: "Varodatic IPTV",
    },
    offers: {
      "@type": "AggregateOffer",
      url: "https://varodatociptv.pro/es/pricing",
      priceCurrency: "EUR",
      lowPrice: "35.00",
      highPrice: "69.00",
      offerCount: "3",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1240",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Carlos M." },
        reviewBody:
          "Varodatic IPTV funciona perfecto en mi Smart TV. Sin cortes ni buffering, incluso en 4K. El mejor servicio IPTV que he probado en España.",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "María G." },
        reviewBody:
          "Más de 26.000 canales y todo funciona. La configuración fue sencilla y el soporte respondió en minutos por WhatsApp.",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Alejandro R." },
        reviewBody:
          "Llevo 3 meses con Varodatic IPTV. El 99,9% de disponibilidad es real. Todos los canales de deportes funcionan en HD sin problemas.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen">
        <EsPricingHero />
        <EsPricingSection />

        {/* Preguntas frecuentes sobre suscripción */}
        <section className="py-20 bg-surface2 relative border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-semibold text-white mb-10 text-center">
              Preguntas Frecuentes sobre Suscripción
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {BILLING_FAQS.map((faq) => (
                <div key={faq.q} className="glass p-6 rounded-xl">
                  <h4 className="font-semibold text-white mb-2">{faq.q}</h4>
                  <p className="text-muted text-sm">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted mb-6">
                ¿Tienes más preguntas antes de suscribirte?
              </p>
              <CTAButton href="/support" variant="ghost">
                Contactar Soporte
              </CTAButton>
            </div>
          </div>
        </section>

        {/* Locale pricing links */}
        <section className="py-10 bg-surface border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-muted mb-5">Precios en tu idioma</p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <Link href="/pricing" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-muted hover:border-primary/40 hover:text-primary transition-colors">
                🇬🇧 Pricing (English)
              </Link>
              <Link href="/de-ch/pricing" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-muted hover:border-primary/40 hover:text-primary transition-colors">
                🇨🇭 Preise Schweiz
              </Link>
              <Link href="/fr-ch/pricing" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-muted hover:border-primary/40 hover:text-primary transition-colors">
                🇨🇭 Tarifs Suisse
              </Link>
              <Link href="/it-ch/pricing" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-muted hover:border-primary/40 hover:text-primary transition-colors">
                🇨🇭 Prezzi Svizzera
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
