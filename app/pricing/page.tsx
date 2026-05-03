import type { Metadata } from "next";
import Link from "next/link";
import PricingHero from "@/components/pricing/PricingHero";
import PricingSection from "@/components/pricing/PricingSection";
import FAQAccordion from "@/components/home/FAQAccordion";
import CTAButton from "@/components/shared/CTAButton";
import { siteConfig } from "@/lib/siteConfig";

export async function generateMetadata() {
  return {
    title: "Varodatic IPTV Pricing — Flexible Plans | Free Trial",
    description: "Choose your Varodatic IPTV plan — 3, 6, or 12 months with 1 to 3 connections. No contracts, no hidden fees. Start your free trial today.",
    alternates: {
      canonical: "https://varodaticiptv.pro/pricing",
    },
    openGraph: {
      title: "Varodatic IPTV Pricing — Plans from $35 | Free Trial",
      description: "Flexible Varodatic IPTV plans. 3, 6 or 12 months. 1 to 3 connections. Cancel anytime.",
      url: "https://varodaticiptv.pro/pricing",
      images: [{ url: "https://varodaticiptv.pro/og-image.jpg", width: 1200, height: 630 }],
    },
  };
}

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Varodatic IPTV Subscription",
    image: `https://${siteConfig.brand.domain}/logo.png`,
    description: "Stream 26,000+ Channels in 4K with Varodatic IPTV.",
    brand: {
      "@type": "Brand",
      name: "Varodatic IPTV"
    },
    offers: {
      "@type": "AggregateOffer",
      url: `https://${siteConfig.brand.domain}/pricing`,
      priceCurrency: "USD",
      lowPrice: "35.00",
      highPrice: "69.00",
      offerCount: "3"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1240",
      bestRating: "5",
      worstRating: "1"
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        },
        author: {
          "@type": "Person",
          name: "James T."
        },
        reviewBody: "Varodatic IPTV works perfectly on my Firestick. No buffering at all, even in 4K. Best IPTV service I have tried."
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        },
        author: {
          "@type": "Person",
          name: "Sarah M."
        },
        reviewBody: "26,000 channels and everything works. Setup was easy and support replied in minutes via WhatsApp."
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        },
        author: {
          "@type": "Person",
          name: "Carlos R."
        },
        reviewBody: "Been using Varodatic IPTV for 3 months. 99.9% uptime is real. All sports channels work in HD."
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen">
        <PricingHero />
        <PricingSection />

        {/* Billing FAQ Section */}
        <section className="py-20 bg-surface2 relative border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-semibold text-white mb-10 text-center">
              Billing & Subscription FAQ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { q: "Is there a contract?", a: "No, all our plans run on a prepaid basis. You can cancel at any time with no hidden fees." },
                { q: "Can I use multiple devices?", a: "Yes, our 2-connection and 3-connection plans allow simultaneous streaming on different devices in the same household." },
                { q: "What payment methods do you accept?", a: "We accept Visa, MasterCard, Amex, and PayPal depending on your region. We use Stripe for secure processing." },
                { q: "How long does activation take?", a: "Activation is instant. Your credentials and setup instructions will be sent via email immediately post-payment." }
              ].map((faq, i) => (
                <div key={i} className="glass p-6 rounded-xl">
                  <h4 className="font-semibold text-white mb-2">{faq.q}</h4>
                  <p className="text-muted text-sm">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted mb-6">Still have questions before buying?</p>
              <CTAButton href="/support" variant="ghost">Contact Support</CTAButton>
            </div>
          </div>
        </section>

        {/* Locale pricing links */}
        <section className="py-10 bg-surface border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-muted mb-5">Pricing in your language</p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <Link href="/es/pricing" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-muted hover:border-primary/40 hover:text-primary transition-colors">
                🇪🇸 Precios España
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
