import type { Metadata } from "next";
import BlogGrid from "@/components/blog/BlogGrid";

export async function generateMetadata() {
  return {
    title: "Varodatic IPTV Blog — Setup Guides, Reviews & Tips",
    description: "Expert IPTV guides from Varodatic — Firestick setup, player reviews, streaming tips, and channel comparisons. Updated for 2026.",
    alternates: {
      canonical: "https://varodaticiptv.pro/blog",
    },
    openGraph: {
      title: "Varodatic IPTV Blog — Streaming Guides & Tips",
      description: "Latest updates, setup guides, and tips for the best streaming experience with Varodatic IPTV.",
      url: "https://varodaticiptv.pro/blog",
      images: [{ url: "https://varodaticiptv.pro/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default function BlogLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white drop-shadow-sm">
            Varodatic IPTV Blog — Setup Guides, Reviews and Streaming Tips
          </h1>
          <p className="text-lg md:text-xl text-muted/90 max-w-2xl mx-auto">
            Everything you need to know to get the most out of your Varodatic IPTV subscription.
          </p>
        </div>
      </section>

      <BlogGrid />
    </div>
  );
}
