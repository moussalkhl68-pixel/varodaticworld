import type { Metadata } from "next";
import FeaturesHero from "@/components/features/FeaturesHero";
import FeaturesGrid from "@/components/features/FeaturesGrid";
import CompatibilityGrid from "@/components/home/CompatibilityGrid";
import ComparisonTable from "@/components/features/ComparisonTable";
import FinalCTABanner from "@/components/home/FinalCTABanner";
import { siteConfig } from "@/lib/siteConfig";

export async function generateMetadata() {
  return {
    title: "Varodatic IPTV Features — 4K Channels, VOD & 99.9% Uptime",
    description: "Discover all Varodatic IPTV features: 26,000+ live channels, 4K Ultra HD, Video on Demand, EPG TV guide, 5-device support and 24/7 live chat.",
    alternates: {
      canonical: "https://varodaticiptv.pro/features",
    },
    openGraph: {
      title: "Varodatic IPTV Features — 4K Quality & Instant Setup",
      description: "Explore the features of Varodatic IPTV. 26,000+ channels, 4K streaming, zero buffering, EPG, and 24/7 support.",
      url: "https://varodaticiptv.pro/features",
      images: [{ url: "https://varodaticiptv.pro/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default function FeaturesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Varodatic IPTV Platform",
    operatingSystem: "Android, iOS, Windows, Mac, Smart TV, Firestick",
    applicationCategory: "EntertainmentApplication",
    offers: {
      "@type": "Offer",
      price: "35.00",
      priceCurrency: "USD"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col">
        <FeaturesHero />
        <FeaturesGrid />
        <CompatibilityGrid />
        <ComparisonTable />
        <FinalCTABanner />
      </div>
    </>
  );
}
