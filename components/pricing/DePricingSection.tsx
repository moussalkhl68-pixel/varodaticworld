"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pricingData, DeviceTier } from "@/lib/pricingData";
import { CheckCircle2 } from "lucide-react";

const tierLabels: Record<string, string> = {
  "1 Connection": "1 Verbindung",
  "2 Connections": "2 Verbindungen",
  "3 Connections": "3 Verbindungen",
};

const durationLabels: Record<string, string> = {
  "3 Months": "3 Monate",
  "6 Months": "6 Monate",
  "12 Months": "12 Monate",
};

const badgeLabels: Record<string, string> = {
  POPULAR: "BELIEBT",
  "BEST VALUE": "BESTES ANGEBOT",
};

function formatSaving(saving: string | null): string | null {
  if (!saving) return null;
  const match = saving.match(/\$(\d+)/);
  if (match) return `Spare ${match[1]} CHF`;
  return saving;
}

export default function DePricingSection() {
  const [activeTier, setActiveTier] = useState<DeviceTier>("1_device");
  const tierKeys = Object.keys(pricingData.tiers) as DeviceTier[];

  return (
    <section className="py-24 relative" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-center mb-16">
          <div className="bg-surface2 p-1.5 rounded-full border border-white/10 inline-flex flex-col sm:flex-row shadow-2xl space-y-2 sm:space-y-0 relative">
            {tierKeys.map((tierKey) => {
              const isActive = activeTier === tierKey;
              return (
                <button
                  key={tierKey}
                  onClick={() => setActiveTier(tierKey)}
                  className={`relative px-8 py-3 rounded-full text-sm sm:text-base font-medium transition-colors z-10 ${
                    isActive ? "text-background" : "text-muted hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBadgeDe"
                      className="absolute inset-0 bg-primary rounded-full z-[-1]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {tierLabels[pricingData.tiers[tierKey].label] ?? pricingData.tiers[tierKey].label}
                </button>
              );
            })}
          </div>
        </div>

        {("note" in pricingData.tiers[activeTier]) &&
          (pricingData.tiers[activeTier] as { note?: string }).note && (
            <div className="text-center mb-8 relative top-[-2rem]">
              <span className="text-xs text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                Rabattierter Preis — Originalpreis durchgestrichen
              </span>
            </div>
          )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {pricingData.tiers[activeTier].plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative glass rounded-2xl p-8 flex flex-col ${
                  plan.badge === "POPULAR"
                    ? "border-primary shadow-[0_0_30px_rgba(0,255,136,0.1)] scale-105 z-10"
                    : ""
                }`}
              >
                {plan.badge && (
                  <div className="absolute top-0 right-8 transform -translate-y-1/2 flex gap-2">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full text-white uppercase ${
                        plan.badge === "POPULAR"
                          ? "bg-accent shadow-lg"
                          : "bg-primary text-background shadow-lg"
                      }`}
                    >
                      {badgeLabels[plan.badge] ?? plan.badge}
                    </span>
                  </div>
                )}
                {plan.saving && (
                  <div className="mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent text-white inline-block">
                      {formatSaving(plan.saving)}
                    </span>
                  </div>
                )}

                <h3 className="text-xl text-muted font-medium mb-4">
                  {durationLabels[plan.duration] ?? plan.duration}
                </h3>

                <div className="mb-6 h-[80px]">
                  {plan.original && (
                    <div className="text-muted/60 line-through text-sm font-semibold relative top-2">
                      {plan.original} CHF
                    </div>
                  )}
                  <div className="text-5xl font-heading font-bold text-white flex items-baseline gap-1">
                    {plan.price}<span className="text-3xl ml-1">CHF</span>
                  </div>
                </div>

                <div className="flex-1 space-y-4 mb-8">
                  {[
                    tierLabels[pricingData.tiers[activeTier].label] ?? pricingData.tiers[activeTier].label,
                    "26'000+ Sender",
                    "4K / FHD / HD",
                    "VOD inklusive",
                    "EPG-Programmführer",
                    "24/7 Support",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-white">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/447476603520?text=Hallo%2C%20ich%20m%C3%B6chte%20Varodatic%20IPTV%20Schweiz%20abonnieren"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 px-6 rounded-xl bg-primary text-black font-bold hover:opacity-90 transition-all duration-300"
                >
                  Jetzt starten
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-20 text-center glass rounded-2xl p-8 max-w-3xl mx-auto border-white/10">
          <p className="text-lg text-white mb-6">
            🎯 Nicht sicher? Starte deine{" "}
            <span className="font-bold text-primary">KOSTENLOSE Testversion</span> — Ohne Kreditkarte.
          </p>
          <a
            href="https://wa.me/447476603520?text=Hallo%2C%20ich%20m%C3%B6chte%20die%20kostenlose%20Testversion%20starten"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-black transition-all duration-300 mt-4"
          >
            Kostenlose Testversion starten
          </a>
        </div>
      </div>
    </section>
  );
}
