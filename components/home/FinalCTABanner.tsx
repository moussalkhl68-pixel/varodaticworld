import CTAButton from "../shared/CTAButton";
import { pricingData } from "@/lib/pricingData";

export default function FinalCTABanner() {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      {/* Background glow overlay */}
      <div className="absolute inset-0 bg-primary/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center glass rounded-[3rem] p-12 md:p-20 shadow-[0_0_50px_rgba(0,255,136,0.1)] border border-primary/20">
        <div className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
          Ready to Upgrade Your <span className="text-primary">TV Experience?</span>
        </div>
        <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
          {pricingData.trial}. Join 154,000+ happy customers today and never miss a game again.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/447828708540?text=Hello%2C%20I%20want%20to%20start%20the%20free%20trial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-black transition-all duration-300 w-full sm:w-auto text-center"
          >
            Start Free Trial
          </a>
          <CTAButton href="/pricing" variant="ghost" className="px-8 py-4 text-lg w-full sm:w-auto">
            View All Plans
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
