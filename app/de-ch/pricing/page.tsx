import type { Metadata } from "next";
import Link from "next/link";
import DePricingHero from "@/components/pricing/DePricingHero";
import DePricingSection from "@/components/pricing/DePricingSection";
import CTAButton from "@/components/shared/CTAButton";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "IPTV Preise Schweiz 2026 — Varodatic Pakete ab CHF 35",
  description:
    "IPTV Abonnement Schweiz ab CHF 35 ohne Vertrag. Über 26'000 Live-Sender, 4K, Sport und VOD. Sofortige Aktivierung.",
  alternates: {
    canonical: "https://varodatociptv.pro/de-ch/pricing/",
    languages: {
      "de-CH": "https://varodatociptv.pro/de-ch/pricing/",
      en: "https://varodatociptv.pro/pricing/",
    },
  },
  openGraph: {
    locale: "de_CH",
    title: "IPTV Preise Schweiz 2026 — Varodatic Pakete ab CHF 35",
    description:
      "IPTV Pakete Schweiz ab CHF 35 ohne Mindestlaufzeit. Über 26'000 Sender, 4K, Sport und VOD. Kein Vertrag.",
    url: "https://varodatociptv.pro/de-ch/pricing/",
    images: [{ url: "https://varodatociptv.pro/og-image.jpg", width: 1200, height: 630 }],
  },
};

const BILLING_FAQS = [
  {
    q: "Gibt es einen Vertrag oder eine Mindestlaufzeit?",
    a: "Nein. Alle unsere Pakete funktionieren auf Vorauszahlungsbasis. Du kannst jederzeit kündigen, ohne Gebühren oder Strafzahlungen.",
  },
  {
    q: "Kann ich mehrere Geräte gleichzeitig nutzen?",
    a: "Ja. Unsere 2- und 3-Verbindungs-Pakete erlauben simultanes Streaming auf verschiedenen Geräten im selben Haushalt.",
  },
  {
    q: "Welche Zahlungsmethoden akzeptiert ihr?",
    a: "Wir akzeptieren Visa, MasterCard, Amex und PayPal je nach Region. Wir nutzen Stripe für sichere Zahlungsabwicklung.",
  },
  {
    q: "Wie lange dauert die Aktivierung?",
    a: "Die Aktivierung erfolgt sofort. Du erhältst deine Zugangsdaten und Einrichtungsanleitung per E-Mail oder WhatsApp sobald die Zahlung bestätigt ist.",
  },
  {
    q: "Funktioniert es in der ganzen Schweiz?",
    a: "Ja. Der Service funktioniert in jedem Land mit einer Internetverbindung über 20 Mbps. Du hast Zugang zur gleichen Bibliothek mit 26'000+ Sendern von überall auf der Welt.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Varodatic IPTV",
  url: "https://varodatociptv.pro/de-ch/",
  logo: "https://varodatociptv.pro/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["German", "English", "French", "Italian"],
  },
};

export default function DeChPricingPage() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Varodatic IPTV Abonnement Schweiz",
    inLanguage: "de",
    image: `https://${siteConfig.brand.domain}/logo.png`,
    description: "Streame über 26'000 Sender in 4K mit Varodatic IPTV Schweiz.",
    brand: { "@type": "Brand", name: "Varodatic IPTV" },
    offers: {
      "@type": "AggregateOffer",
      url: "https://varodatociptv.pro/de-ch/pricing/",
      priceCurrency: "CHF",
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
        author: { "@type": "Person", name: "Thomas B." },
        reviewBody:
          "Varodatic IPTV funktioniert perfekt auf meinem Smart TV. Kein Buffering, sogar in 4K. Der beste IPTV-Service, den ich in der Schweiz getestet habe.",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Sandra K." },
        reviewBody:
          "Über 26'000 Sender und alles funktioniert. Die Einrichtung war einfach und der Support hat in Minuten per WhatsApp geantwortet.",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Markus W." },
        reviewBody:
          "Seit 3 Monaten bei Varodatic IPTV. Die 99,9% Verfügbarkeit stimmt. Alle Sportsender laufen einwandfrei in HD.",
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
        <DePricingHero />
        <DePricingSection />

        <section className="py-20 bg-surface2 relative border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-semibold text-white mb-10 text-center">
              Häufige Fragen zum Abonnement
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
              <p className="text-muted mb-6">Noch Fragen vor dem Abonnieren?</p>
              <CTAButton href="/support" variant="ghost">Support kontaktieren</CTAButton>
            </div>
          </div>
        </section>

        <section className="py-10 bg-surface border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-muted mb-5">Preise in deiner Sprache</p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <Link href="/pricing" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-muted hover:border-primary/40 hover:text-primary transition-colors">
                🇬🇧 Pricing (English)
              </Link>
              <Link href="/es/pricing" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-muted hover:border-primary/40 hover:text-primary transition-colors">
                🇪🇸 Precios España
              </Link>
              <Link href="/fr-ch/pricing" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-muted hover:border-primary/40 hover:text-primary transition-colors">
                🇨🇭 Tarifs Suisse (FR)
              </Link>
              <Link href="/it-ch/pricing" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-muted hover:border-primary/40 hover:text-primary transition-colors">
                🇨🇭 Prezzi Svizzera (IT)
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
