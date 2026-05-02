import { siteConfig } from "@/lib/siteConfig";

export default function PricingHero() {
  return (
    <section className="pt-32 pb-16 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white drop-shadow-sm">
          Varodatic IPTV Pricing — Simple Plans, No Contracts, Free Trial
        </h1>
        <p className="text-lg md:text-xl text-muted/90 mb-8 max-w-2xl mx-auto">
          Choose from 1, 2, or 3 simultaneous connections. Save up to 50% on multi-device plans and enjoy our full suite of 26,000+ channels and 4K quality.
        </p>
      </div>
    </section>
  );
}
