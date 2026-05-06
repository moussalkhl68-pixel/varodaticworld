import CTAButton from "../shared/CTAButton";
import { pricingData } from "@/lib/pricingData";
import { CheckCircle2 } from "lucide-react";

const durationLabels: Record<string, string> = {
  "3 Months": "3 Meses",
  "6 Months": "6 Meses",
  "12 Months": "12 Meses",
};

const badgeLabels: Record<string, string> = {
  POPULAR: "POPULAR",
  "BEST VALUE": "MEJOR VALOR",
};

export default function EsPricingTeaser() {
  const plans = pricingData.tiers["1_device"].plans;

  return (
    <section className="py-24 relative bg-black border-t border-white/10" id="pricing-teaser">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Planes Simples, <span className="text-primary">Sin Costes Ocultos.</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Accede al instante a más de 26.000 canales en vivo, películas y series en calidad 4K. Cancela cuando quieras.
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
                  {plan.price}<span className="text-3xl ml-0.5">€</span>
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {[
                  "1 Conexión",
                  "26.000+ Canales",
                  "4K / FHD / HD",
                  "VOD Incluido",
                  "Guía EPG",
                  "Soporte 24/7",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center text-sm text-white">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/447828708540?text=Hola%2C%20quiero%20suscribirme%20a%20Varodatic%20IPTV"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 px-6 rounded-xl bg-primary text-black font-bold hover:opacity-90 transition-all duration-300"
              >
                Empezar Ahora
              </a>
            </div>
          ))}
        </div>

        <div>
          <CTAButton href="/es/pricing" variant="ghost" icon className="border-white/10">
            Ver todos los planes de Varodatic IPTV →
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
