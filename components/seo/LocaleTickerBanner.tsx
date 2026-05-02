import Link from "next/link";

const locales = [
  {
    code: "en",
    href: "/",
    hrefLang: "en",
    flagUrl: "https://flagcdn.com/w320/gb.png",
    language: "ENGLISH",
    region: "Global",
    title: "Varodatic IPTV",
    desc: "26,000+ channels · 4K · Free trial",
    accent: "#00ccff",
  },
  {
    code: "es",
    href: "/es",
    hrefLang: "es",
    flagUrl: "https://flagcdn.com/w320/es.png",
    language: "ESPAÑOL",
    region: "España",
    title: "Varodatic IPTV",
    desc: "26.000+ canales · 4K · Prueba gratis",
    accent: "#c60b1e",
  },
  {
    code: "de-ch",
    href: "/de-ch",
    hrefLang: "de-CH",
    flagUrl: "https://flagcdn.com/w320/ch.png",
    language: "DEUTSCH",
    region: "Schweiz",
    title: "Varodatic IPTV",
    desc: "26.000+ Sender · 4K · Kostenlos testen",
    accent: "#ff0000",
  },
  {
    code: "fr-ch",
    href: "/fr-ch",
    hrefLang: "fr-CH",
    flagUrl: "https://flagcdn.com/w320/ch.png",
    language: "FRANÇAIS",
    region: "Suisse",
    title: "Varodatic IPTV",
    desc: "26.000+ chaînes · 4K · Essai gratuit",
    accent: "#ff0000",
  },
  {
    code: "it-ch",
    href: "/it-ch",
    hrefLang: "it-CH",
    flagUrl: "https://flagcdn.com/w320/ch.png",
    language: "ITALIANO",
    region: "Svizzera",
    title: "Varodatic IPTV",
    desc: "26.000+ canali · 4K · Prova gratuita",
    accent: "#009246",
  },
];

const tripled = [...locales, ...locales, ...locales];

export default function LocaleTickerBanner() {
  return (
    <section className="ltb-section" aria-label="Available languages">

      {/* Hidden SEO links */}
      <div className="ltb-seo">
        {locales.map((l) => (
          <a key={l.code} href={l.href} hrefLang={l.hrefLang} rel="alternate">
            {l.title} {l.region}
          </a>
        ))}
      </div>

      <p className="ltb-heading">🌍 AVAILABLE IN YOUR LANGUAGE</p>

      <div className="ltb-outer">
        <div className="ltb-fade ltb-fade--l" />
        <div className="ltb-fade ltb-fade--r" />

        <div className="ltb-track">
          {tripled.map((locale, i) => (
            <Link
              key={`${locale.code}-${i}`}
              href={locale.href}
              lang={locale.hrefLang}
              className="ltb-card"
              style={{
                "--accent": locale.accent,
                "--flag": `url('${locale.flagUrl}')`,
              } as React.CSSProperties}
              aria-label={`${locale.title} ${locale.region}`}
            >
              {/* Flag as CSS background — most reliable method */}
              <div className="ltb-card__flag">
                <div className="ltb-card__flag-overlay" />
                <div className="ltb-card__badge">
                  <span className="ltb-card__lang">{locale.language}</span>
                  <span className="ltb-card__region">{locale.region}</span>
                </div>
              </div>

              {/* Card body */}
              <div className="ltb-card__body">
                <p className="ltb-card__title">{locale.title}</p>
                <p className="ltb-card__desc">{locale.desc}</p>
                <span className="ltb-card__cta">View pricing →</span>
              </div>

              {/* Bottom accent line */}
              <div className="ltb-card__bar" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
