"use client";

import Link from "next/link";

const allLocales = [
  {
    code: "en",
    flag: "🇬🇧",
    lang: "English",
    region: "Global",
    home: "/",
    pricing: "/pricing",
    headline: "Varodatic IPTV — Global",
    desc: "26,000+ channels · Free trial",
  },
  {
    code: "es",
    flag: "🇪🇸",
    lang: "Español",
    region: "España",
    home: "/es",
    pricing: "/es/pricing",
    headline: "Varodatic IPTV España",
    desc: "26.000+ canales · Prueba gratis",
  },
  {
    code: "de-ch",
    flag: "🇨🇭",
    lang: "Deutsch",
    region: "Schweiz",
    home: "/de-ch",
    pricing: "/de-ch/pricing",
    headline: "Varodatic IPTV Schweiz",
    desc: "26'000+ Sender · Gratis testen",
  },
  {
    code: "fr-ch",
    flag: "🇨🇭",
    lang: "Français",
    region: "Suisse",
    home: "/fr-ch",
    pricing: "/fr-ch/pricing",
    headline: "Varodatic IPTV Suisse",
    desc: "26'000+ chaînes · Essai gratuit",
  },
  {
    code: "it-ch",
    flag: "🇨🇭",
    lang: "Italiano",
    region: "Svizzera",
    home: "/it-ch",
    pricing: "/it-ch/pricing",
    headline: "Varodatic IPTV Svizzera",
    desc: "26.000+ canali · Prova gratuita",
  },
];

interface Props {
  currentLocale: string;
  label?: string;
}

export default function LocaleHubSection({ currentLocale, label = "Also available in" }: Props) {
  const items = [...allLocales, ...allLocales];

  return (
    <section className="py-14 bg-[#080808] border-t border-white/10 overflow-hidden relative">
      <style>{`
        @keyframes locale-ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .locale-ticker-track {
          animation: locale-ticker 32s linear infinite;
          will-change: transform;
        }
        .locale-ticker-wrap:hover .locale-ticker-track {
          animation-play-state: paused;
        }
      `}</style>

      {/* Label */}
      <div className="text-center mb-8 relative z-10">
        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-muted/50">
          {label}
        </span>
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#080808] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#080808] to-transparent z-10" />

      {/* Ticker */}
      <div className="locale-ticker-wrap overflow-hidden cursor-pointer">
        <div className="locale-ticker-track flex gap-4 w-max">
          {items.map((loc, i) => {
            const isCurrent = loc.code === currentLocale;
            return (
              <Link
                key={`${loc.code}-${i}`}
                href={loc.pricing}
                className={`
                  group flex-shrink-0 w-[260px] flex flex-col gap-3
                  rounded-2xl border px-5 py-4 transition-all duration-300
                  ${isCurrent
                    ? "border-primary/40 bg-primary/5 shadow-[0_0_20px_rgba(0,255,136,0.06)]"
                    : "border-white/8 bg-white/[0.02] hover:border-primary/30 hover:bg-white/[0.04] hover:shadow-[0_0_20px_rgba(0,255,136,0.06)]"
                  }
                `}
              >
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl leading-none">{loc.flag}</span>
                    <div>
                      <div className={`text-[11px] font-bold uppercase tracking-widest leading-none ${isCurrent ? "text-primary" : "text-white/60"}`}>
                        {loc.lang}
                      </div>
                      <div className="text-[10px] text-white/30 mt-0.5">{loc.region}</div>
                    </div>
                  </div>
                  {isCurrent && (
                    <span className="text-[9px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                      current
                    </span>
                  )}
                </div>

                {/* Headline */}
                <p className={`text-sm font-semibold leading-snug transition-colors duration-300 ${isCurrent ? "text-primary" : "text-white group-hover:text-primary"}`}>
                  {loc.headline}
                </p>

                {/* Desc + CTA row */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[11px] text-white/35">{loc.desc}</span>
                  <span className="text-[11px] font-bold text-primary/70 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200">
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
