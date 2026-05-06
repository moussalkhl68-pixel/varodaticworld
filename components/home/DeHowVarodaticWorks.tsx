import Link from "next/link";
import { ClipboardList, Zap, Tv } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <ClipboardList className="w-7 h-7 text-primary" />,
    title: "Paket wählen",
    desc: "Wähle ein Varodatic IPTV Paket für 3, 6 oder 12 Monate. Keine Verträge, keine versteckten Kosten — jederzeit kündbar.",
    href: "/de-ch/pricing",
    cta: "Varodatic Pakete ansehen",
  },
  {
    number: "02",
    icon: <Zap className="w-7 h-7 text-primary" />,
    title: "Sofort Zugang erhalten",
    desc: "Deine Zugangsdaten werden sofort per WhatsApp oder E-Mail geliefert. Die Einrichtung dauert weniger als 2 Minuten.",
    href: "https://wa.me/447828708540?text=Hallo%2C%20ich%20m%C3%B6chte%20Varodatic%20IPTV%20Schweiz%20kostenlos%20testen",
    cta: "Gratis testen",
    external: true,
  },
  {
    number: "03",
    icon: <Tv className="w-7 h-7 text-primary" />,
    title: "Auf jedem Gerät streamen",
    desc: "Starte deinen Varodatic-Stream auf Firestick, Smart TV, Android, iOS oder PC — sofort, in 4K-Qualität.",
    href: "/features",
    cta: "Kompatible Geräte ansehen",
  },
];

export default function DeHowVarodaticWorks() {
  return (
    <section className="py-24 relative bg-black border-t border-white/10" id="how-it-works">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Wie funktioniert <span className="text-primary">Varodatic</span>?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Drei einfache Schritte zu unbegrenztem Premium-Streaming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative glass border border-white/5 hover:border-primary/30 rounded-2xl p-8 flex flex-col transition-all duration-300 group"
            >
              <span className="absolute top-5 right-6 text-5xl font-heading font-black text-white/5 select-none">
                {step.number}
              </span>

              <div className="mb-5 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                {step.icon}
              </div>

              <h3 className="text-xl font-heading font-bold text-white mb-3">{step.title}</h3>

              <p className="text-muted text-sm leading-relaxed mb-6 flex-1">{step.desc}</p>

              {step.external ? (
                <a
                  href={step.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  {step.cta} <span aria-hidden="true">→</span>
                </a>
              ) : (
                <Link
                  href={step.href}
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  {step.cta} <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
