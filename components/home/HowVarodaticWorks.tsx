import Link from "next/link";
import { ClipboardList, Zap, Tv } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <ClipboardList className="w-7 h-7 text-primary" />,
    title: "Choose Your Plan",
    desc: "Pick a 3, 6, or 12-month Varodatic IPTV plan. No contracts, no hidden fees — cancel anytime.",
    href: "/pricing",
    cta: "View Varodatic plans",
  },
  {
    number: "02",
    icon: <Zap className="w-7 h-7 text-primary" />,
    title: "Get Instant Access",
    desc: "Your login credentials are delivered instantly via WhatsApp or email. Setup takes under 2 minutes.",
    href: "https://wa.me/447476603520?text=Hello%2C%20I%20want%20to%20start%20the%20Varodatic%20free%20trial",
    cta: "Start free trial",
    external: true,
  },
  {
    number: "03",
    icon: <Tv className="w-7 h-7 text-primary" />,
    title: "Stream on Any Device",
    desc: "Launch your Varodatic stream on Firestick, Smart TV, Android, iOS, or PC — instantly, in 4K.",
    href: "/features",
    cta: "See supported devices",
  },
];

export default function HowVarodaticWorks() {
  return (
    <section
      className="py-24 relative bg-black border-t border-white/10"
      id="how-it-works"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            How <span className="text-primary">Varodatic</span> Works
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Three simple steps to unlimited premium streaming.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line on desktop */}
          <div className="hidden md:block absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative glass border border-white/5 hover:border-primary/30 rounded-2xl p-8 flex flex-col transition-all duration-300 group"
            >
              {/* Step number */}
              <span className="absolute top-5 right-6 text-5xl font-heading font-black text-white/5 select-none">
                {step.number}
              </span>

              {/* Icon */}
              <div className="mb-5 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-heading font-bold text-white mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
                {step.desc}
              </p>

              {/* CTA link */}
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
