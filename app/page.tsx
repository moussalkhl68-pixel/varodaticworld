import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import FeaturesTeaserGrid from "@/components/home/FeaturesTeaserGrid";
import PricingTeaser from "@/components/home/PricingTeaser";
import HowVarodaticWorks from "@/components/home/HowVarodaticWorks";
import CompatibilityGrid from "@/components/home/CompatibilityGrid";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import FAQAccordion from "@/components/home/FAQAccordion";
import LatestBlogs from "@/components/home/LatestBlogs";
import FinalCTABanner from "@/components/home/FinalCTABanner";
import LocaleTickerBanner from "@/components/seo/LocaleTickerBanner";
import { siteConfig } from "@/lib/siteConfig";

export async function generateMetadata() {
  return {
    title: "Varodatic IPTV — 26,000+ Channels in 4K | Free Trial",
    description: "Discover Varodatic IPTV with 26,000+ channels, 4K streaming, fast setup, and a free trial. Stream smarter with premium live TV and VOD.",
    alternates: {
      canonical: "https://varodaticiptv.pro",
    },
    openGraph: {
      title: "Varodatic IPTV — 26,000+ Channels in 4K | Free Trial",
      description: "Discover Varodatic IPTV with 26,000+ channels, 4K streaming, fast setup, and a free trial. Stream smarter with premium live TV and VOD.",
      url: "https://varodaticiptv.pro",
      images: [
        {
          url: "https://varodaticiptv.pro/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Varodatic IPTV — 4K Streaming Service",
        },
      ],
    },
  };
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.brand.name,
    url: `https://${siteConfig.brand.domain}`,
    description: "Discover Varodatic IPTV with 26,000+ channels, 4K streaming, fast setup, and a free trial. Stream smarter with premium live TV and VOD."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Varodatic IPTV?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Varodatic IPTV is a premium streaming service offering over 26,000 live channels, an extensive VOD library (movies & series), and comprehensive sports packages entirely over the internet."
        }
      },
      {
        "@type": "Question",
        "name": "What devices do you support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support a wide range of devices including Amazon Firestick, Android TV, Smart TVs (Samsung, LG), iOS, Android smartphones, Windows PC, Mac, MAG boxes, and Enigma2 devices."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="flex flex-col">
        <HeroSection />
        <StatsBar />
        <FeaturesTeaserGrid />
        <PricingTeaser />
        <HowVarodaticWorks />
        <CompatibilityGrid />
        <TestimonialsCarousel />
        <LatestBlogs />
        <FAQAccordion />
        <LocaleTickerBanner />
        <FinalCTABanner />
      </div>
    </>
  );
}
