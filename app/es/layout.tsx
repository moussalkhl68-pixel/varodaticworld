import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://varodaticiptv.pro"),
  title: "Varodatic IPTV — 26.000+ canales en 4K | Prueba gratuita",
  description: "Disfruta de más de 26.000 canales en vivo en 4K sin interrupciones. Deportes, películas, series y más. Prueba gratuita incluida. Activación instantánea.",
  alternates: {
    languages: {
      "en": "https://varodaticiptv.pro",
      "es": "https://varodaticiptv.pro/es",
      "x-default": "https://varodaticiptv.pro",
    },
  },
  openGraph: {
    title: 'Varodatic IPTV — 26.000+ canales en 4K | Prueba gratuita',
    description: 'Disfruta de más de 26.000 canales en vivo en 4K sin interrupciones. Deportes, películas, series y más. Prueba gratuita incluida. Activación instantánea.',
    url: 'https://varodaticiptv.pro/es',
    siteName: 'Varodatic IPTV',
    type: 'website',
    locale: 'es_ES',
    images: [
      {
        url: 'https://varodaticiptv.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Varodatic IPTV — 26.000+ canales en 4K',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varodatic IPTV — 26.000+ canales en 4K | Prueba gratuita',
    description: 'Más de 26.000 canales en vivo en 4K. Sin interrupciones, prueba gratuita, activación instantánea.',
    images: ['https://varodaticiptv.pro/og-image.png'],
    creator: '@varodaticiptv',
    site: '@varodaticiptv',
  },
};

// Nested layout — renders inside the root layout's <main>.
// lang="es" on the wrapper div signals the content language to
// browsers, screen readers, and translation tools within this subtree.
export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <div lang="es">{children}</div>;
}
