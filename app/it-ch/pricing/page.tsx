import type { Metadata } from "next";
import Link from "next/link";
import ItPricingHero from "@/components/pricing/ItPricingHero";
import ItPricingSection from "@/components/pricing/ItPricingSection";
import CTAButton from "@/components/shared/CTAButton";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Prezzi IPTV Svizzera 2026 — Piani Varodatic da CHF 35",
  description:
    "Abbonamento IPTV Svizzera da CHF 35 senza vincoli. Oltre 26.000 canali in diretta, 4K, sport e VOD. Attivazione immediata.",
  alternates: {
    canonical: "https://varodatociptv.pro/it-ch/pricing/",
    languages: {
      "it-CH": "https://varodatociptv.pro/it-ch/pricing/",
      en: "https://varodatociptv.pro/pricing/",
    },
  },
  openGraph: {
    locale: "it_CH",
    title: "Prezzi IPTV Svizzera 2026 — Piani Varodatic da CHF 35",
    description:
      "Piani IPTV Svizzera da CHF 35 senza vincoli. Oltre 26.000 canali, 4K, sport e VOD. Senza contratto.",
    url: "https://varodatociptv.pro/it-ch/pricing/",
    images: [{ url: "https://varodatociptv.pro/og-image.jpg", width: 1200, height: 630 }],
  },
};

const BILLING_FAQS = [
  {
    q: "C'è un contratto o un vincolo?",
    a: "No. Tutti i nostri piani funzionano con pagamento anticipato. Puoi annullare in qualsiasi momento senza commissioni né penali.",
  },
  {
    q: "Posso usare più dispositivi contemporaneamente?",
    a: "Sì. I nostri piani da 2 e 3 connessioni permettono lo streaming simultaneo su dispositivi diversi nella stessa casa.",
  },
  {
    q: "Quali metodi di pagamento accettate?",
    a: "Accettiamo Visa, MasterCard, Amex e PayPal a seconda della regione. Utilizziamo Stripe per pagamenti sicuri.",
  },
  {
    q: "Quanto tempo richiede l'attivazione?",
    a: "L'attivazione è immediata. Riceverai le tue credenziali e le istruzioni di configurazione via e-mail o WhatsApp non appena il pagamento è confermato.",
  },
  {
    q: "Funziona in tutta la Svizzera?",
    a: "Sì. Il servizio funziona in qualsiasi paese con una connessione internet superiore a 20 Mbps. Hai accesso alla stessa libreria con 26.000+ canali da qualsiasi parte del mondo.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Varodatic IPTV",
  url: "https://varodatociptv.pro/it-ch/",
  logo: "https://varodatociptv.pro/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["Italian", "German", "French", "English"],
  },
};

export default function ItChPricingPage() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Abbonamento Varodatic IPTV Svizzera",
    inLanguage: "it",
    image: `https://${siteConfig.brand.domain}/logo.png`,
    description: "Guarda oltre 26.000 canali in 4K con Varodatic IPTV Svizzera.",
    brand: { "@type": "Brand", name: "Varodatic IPTV" },
    offers: {
      "@type": "AggregateOffer",
      url: "https://varodatociptv.pro/it-ch/pricing/",
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
        author: { "@type": "Person", name: "Marco B." },
        reviewBody: "Varodatic IPTV funziona perfettamente sulla mia Smart TV. Nessun buffering, anche in 4K. Il miglior servizio IPTV che ho testato in Svizzera.",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Laura C." },
        reviewBody: "Oltre 26.000 canali e tutto funziona. La configurazione era semplice e il supporto ha risposto in minuti su WhatsApp.",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Roberto M." },
        reviewBody: "3 mesi con Varodatic IPTV. Il 99,9% di disponibilità è reale. Tutti i canali sport funzionano in HD senza problemi.",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen">
        <ItPricingHero />
        <ItPricingSection />

        <section className="py-20 bg-surface2 relative border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-semibold text-white mb-10 text-center">
              Domande Frequenti sull&apos;Abbonamento
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
              <p className="text-muted mb-6">Hai altre domande prima di abbonarti?</p>
              <CTAButton href="/support" variant="ghost">Contatta il Supporto</CTAButton>
            </div>
          </div>
        </section>

        <section className="py-10 bg-surface border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-muted mb-5">Prezzi nella tua lingua</p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <Link href="/pricing" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-muted hover:border-primary/40 hover:text-primary transition-colors">
                🇬🇧 Pricing (English)
              </Link>
              <Link href="/es/pricing" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-muted hover:border-primary/40 hover:text-primary transition-colors">
                🇪🇸 Precios España
              </Link>
              <Link href="/de-ch/pricing" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-muted hover:border-primary/40 hover:text-primary transition-colors">
                🇨🇭 Preise Schweiz (DE)
              </Link>
              <Link href="/fr-ch/pricing" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-muted hover:border-primary/40 hover:text-primary transition-colors">
                🇨🇭 Tarifs Suisse (FR)
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
