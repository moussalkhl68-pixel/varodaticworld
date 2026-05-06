import CTAButton from "../shared/CTAButton";
import { pricingData } from "@/lib/pricingData";
import { CheckCircle2 } from "lucide-react";

export default function PricingTeaser() {
  const plans = pricingData.tiers["1_device"].plans;

  return (
    <section className="py-24 relative bg-black border-t border-white/10" id="pricing-teaser">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Simple Plans, <span className="text-primary">No Hidden Fees.</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Get instant access to 26,000+ live channels, movies, and TV shows in 4K quality. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative glass rounded-2xl p-8 flex flex-col ${
                plan.badge === "POPULAR" ? "border-primary shadow-[0_0_30px_rgba(0,255,136,0.1)] scale-105 z-10" : ""
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2 flex gap-2">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full text-white uppercase ${
                    plan.badge === "POPULAR" ? "bg-accent shadow-lg" : "bg-primary text-background shadow-lg"
                  }`}>
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3 className="text-xl text-muted font-medium mb-4">{plan.duration}</h3>
              
              <div className="mb-6">
                <div className="text-5xl font-heading font-bold text-white flex items-baseline gap-1">
                  <span className="text-3xl">$</span>{plan.price}
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-8">
               {[
                  "1 Connection",
                  "26,000+ Channels",
                  "4K / FHD / HD",
                  "VOD Included",
                  "EPG TV Guide",
                  "24/7 Support"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center text-sm text-white">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/447828708540?text=Hello%2C%20I%20want%20to%20subscribe%20to%20Varodatic%20IPTV"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 px-6 rounded-xl bg-primary text-black font-bold hover:opacity-90 transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div>
          <CTAButton href="/pricing" variant="ghost" icon className="border-white/10">
            Explore all Varodatic IPTV plans →
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
