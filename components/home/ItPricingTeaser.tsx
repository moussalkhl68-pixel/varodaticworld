import { pricingData } from "@/lib/pricingData";
import { CheckCircle2 } from "lucide-react";

const durationLabels: Record<string, string> = {
  "3 Months": "3 Mesi",
  "6 Months": "6 Mesi",
  "12 Months": "12 Mesi",
};

const badgeLabels: Record<string, string> = {
  POPULAR: "POPOLARE",
  "BEST VALUE": "MIGLIOR VALORE",
};

export default function ItPricingTeaser() {
  const plans = pricingData.tiers["1_device"].plans;

  return (
    <section className="py-24 relative bg-black border-t border-white/10" id="pricing-teaser">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Prezzi Semplici, <span className="text-primary">Nessun Costo Nascosto.</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Accedi immediatamente a 26.000+ canali in diretta, film e serie in 4K. Annulla quando vuoi.
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
                    {badgeLabels[plan.badge] ?? plan.badge}
                  </span>
                </div>
              )}

              <h3 className="text-xl text-muted font-medium mb-4">
                {durationLabels[plan.duration] ?? plan.duration}
              </h3>

              <div className="mb-6">
                <div className="text-5xl font-heading font-bold text-white flex items-baseline gap-1">
                  {plan.price}<span className="text-3xl ml-1">CHF</span>
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {[
                  "1 Connessione",
                  "26.000+ Canali",
                  "4K / FHD / HD",
                  "VOD Incluso",
                  "Guida EPG",
                  "Supporto 24/7",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center text-sm text-white">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/447828708540?text=Ciao%2C%20voglio%20abbonarmi%20a%20Varodatic%20IPTV%20Svizzera"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 px-6 rounded-xl bg-primary text-black font-bold hover:opacity-90 transition-all duration-300"
              >
                Inizia Ora
              </a>
            </div>
          ))}
        </div>

        <div>
          <a
            href="/it-ch/pricing"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-white/10 text-white font-semibold hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            Vedi tutti i piani Varodatic IPTV →
          </a>
        </div>
      </div>
    </section>
  );
}
