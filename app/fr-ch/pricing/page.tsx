import type { Metadata } from "next";
import Link from "next/link";
import FrPricingHero from "@/components/pricing/FrPricingHero";
import FrPricingSection from "@/components/pricing/FrPricingSection";
import CTAButton from "@/components/shared/CTAButton";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Tarifs IPTV Suisse 2026 — Offres Varodatic dès CHF 35",
  description:
    "Abonnement IPTV Suisse Romande dès CHF 35 sans engagement. Plus de 26'000 chaînes en direct, 4K, sport et VOD. Activation instantanée.",
  alternates: {
    canonical: "https://varodaticiptv.pro/fr-ch/pricing/",
    languages: {
      "fr-CH": "https://varodaticiptv.pro/fr-ch/pricing/",
      en: "https://varodaticiptv.pro/pricing/",
    },
  },
  openGraph: {
    locale: "fr_CH",
    title: "Tarifs IPTV Suisse 2026 — Offres Varodatic dès CHF 35",
    description:
      "Offres IPTV Suisse dès CHF 35 sans engagement. Plus de 26'000 chaînes, 4K, sport et VOD. Sans contrat.",
    url: "https://varodaticiptv.pro/fr-ch/pricing/",
    images: [{ url: "https://varodaticiptv.pro/og-image.jpg", width: 1200, height: 630 }],
  },
};

const BILLING_FAQS = [
  {
    q: "Y a-t-il un contrat ou un engagement ?",
    a: "Non. Toutes nos offres fonctionnent en prépaiement. Vous pouvez résilier à tout moment sans frais ni pénalités.",
  },
  {
    q: "Puis-je utiliser plusieurs appareils simultanément ?",
    a: "Oui. Nos offres 2 et 3 connexions permettent le streaming simultané sur différents appareils dans le même foyer.",
  },
  {
    q: "Quels modes de paiement acceptez-vous ?",
    a: "Nous acceptons Visa, MasterCard, Amex et PayPal selon votre région. Nous utilisons Stripe pour des paiements sécurisés.",
  },
  {
    q: "Combien de temps prend l'activation ?",
    a: "L'activation est instantanée. Vous recevrez vos identifiants et instructions de configuration par e-mail ou WhatsApp dès confirmation du paiement.",
  },
  {
    q: "Fonctionne-t-il dans toute la Suisse ?",
    a: "Oui. Le service fonctionne dans n'importe quel pays avec une connexion internet supérieure à 20 Mbps. Vous accédez à la même bibliothèque de 26'000+ chaînes depuis n'importe où dans le monde.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Varodatic IPTV",
  url: "https://varodaticiptv.pro/fr-ch/",
  logo: "https://varodaticiptv.pro/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["French", "German", "Italian", "English"],
  },
};

export default function FrChPricingPage() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Abonnement Varodatic IPTV Suisse",
    inLanguage: "fr",
    image: `https://${siteConfig.brand.domain}/logo.png`,
    description: "Streamez plus de 26'000 chaînes en 4K avec Varodatic IPTV Suisse.",
    brand: { "@type": "Brand", name: "Varodatic IPTV" },
    offers: {
      "@type": "AggregateOffer",
      url: "https://varodaticiptv.pro/fr-ch/pricing/",
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
        author: { "@type": "Person", name: "Pierre M." },
        reviewBody: "Varodatic IPTV fonctionne parfaitement sur ma Smart TV. Pas de coupure, même en 4K. Le meilleur service IPTV que j'ai testé en Suisse.",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Marie-Claire D." },
        reviewBody: "Plus de 26'000 chaînes et tout fonctionne. La configuration était simple et le support a répondu en minutes par WhatsApp.",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Antoine R." },
        reviewBody: "3 mois avec Varodatic IPTV. Les 99,9% de disponibilité sont réels. Toutes les chaînes sport fonctionnent en HD sans problème.",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen">
        <FrPricingHero />
        <FrPricingSection />

        <section className="py-20 bg-surface2 relative border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-semibold text-white mb-10 text-center">
              Questions Fréquentes sur l&apos;Abonnement
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
              <p className="text-muted mb-6">D&apos;autres questions avant de vous abonner ?</p>
              <CTAButton href="/support" variant="ghost">Contacter le Support</CTAButton>
            </div>
          </div>
        </section>

        <section className="py-10 bg-surface border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-muted mb-5">Tarifs dans votre langue</p>
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
