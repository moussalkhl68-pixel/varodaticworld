import type { Metadata } from "next";
import SupportHero from "@/components/support/SupportHero";
import SetupGuides from "@/components/support/SetupGuides";
import FAQAccordion from "@/components/home/FAQAccordion";
import ContactForm from "@/components/support/ContactForm";
import { siteConfig } from "@/lib/siteConfig";

export async function generateMetadata() {
  return {
    title: "Varodatic IPTV Support — Setup Help, FAQ & 24/7 Contact",
    description: "Get help with Varodatic IPTV. Device setup guides for Firestick, Android, Smart TV and iOS. FAQ and 24/7 support via WhatsApp and Telegram.",
    alternates: {
      canonical: "https://varodaticiptv.pro/support",
    },
    openGraph: {
      title: "Varodatic IPTV Support — 24/7 WhatsApp Assistance",
      description: "Need help? Contact Varodatic IPTV support via WhatsApp for instant activation, troubleshooting, or billing questions.",
      url: "https://varodaticiptv.pro/support",
      images: [{ url: "https://varodaticiptv.pro/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default function SupportPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does activation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Activation is virtually instant. Upon successful payment, you will receive an email with your login details and setup guides."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a free trial available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer a free trial with no credit card required so you can test our service quality before purchasing."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="flex flex-col">
        <SupportHero />
        <SetupGuides />
        <FAQAccordion />
        <ContactForm />
      </div>
    </>
  );
}
