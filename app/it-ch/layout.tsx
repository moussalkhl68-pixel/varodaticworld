import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://varodaticiptv.pro"),
  title: "Varodatic IPTV — 26.000+ Canali in 4K | Prova Gratuita",
  description: "Guarda oltre 26.000 canali in diretta in 4K senza buffering. Sport, film, serie e altro ancora. Prova gratuita inclusa. Attivazione istantanea.",
  alternates: {
    languages: {
      "it-CH": "https://varodaticiptv.pro/it-ch",
      "en": "https://varodaticiptv.pro",
      "x-default": "https://varodaticiptv.pro",
    },
  },
  openGraph: {
    title: 'Varodatic IPTV — 26.000+ Canali in 4K | Prova Gratuita',
    description: 'Guarda oltre 26.000 canali in diretta in 4K senza buffering. Sport, film, serie e altro ancora. Prova gratuita inclusa. Attivazione istantanea.',
    url: 'https://varodaticiptv.pro/it-ch',
    siteName: 'Varodatic IPTV',
    type: 'website',
    locale: 'it_CH',
    images: [
      {
        url: 'https://varodaticiptv.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Varodatic IPTV — 26.000+ Canali in 4K',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varodatic IPTV — 26.000+ Canali in 4K | Prova Gratuita',
    description: 'Oltre 26.000 canali in diretta in 4K. Senza buffering, prova gratuita, attivazione istantanea.',
    images: ['https://varodaticiptv.pro/og-image.png'],
    creator: '@varodaticiptv',
    site: '@varodaticiptv',
  },
};

export default function ItChLayout({ children }: { children: React.ReactNode }) {
  return <div lang="it">{children}</div>;
}
