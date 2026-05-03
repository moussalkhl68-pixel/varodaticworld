import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://varodaticiptv.pro"),
  title: "Varodatic IPTV — 26.000+ Sender in 4K | Kostenlose Testversion",
  description: "Streamen Sie über 26.000 Live-Sender in 4K ohne Pufferung. Sport, Filme, Serien und mehr. Inklusive kostenloser Testversion. Sofortige Aktivierung.",
  alternates: {
    languages: {
      "de-CH": "https://varodaticiptv.pro/de-ch",
      "en": "https://varodaticiptv.pro",
      "x-default": "https://varodaticiptv.pro",
    },
  },
  openGraph: {
    title: 'Varodatic IPTV — 26.000+ Sender in 4K | Kostenlose Testversion',
    description: 'Streamen Sie über 26.000 Live-Sender in 4K ohne Pufferung. Sport, Filme, Serien und mehr. Inklusive kostenloser Testversion. Sofortige Aktivierung.',
    url: 'https://varodaticiptv.pro/de-ch',
    siteName: 'Varodatic IPTV',
    type: 'website',
    locale: 'de_CH',
    images: [
      {
        url: 'https://varodaticiptv.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Varodatic IPTV — 26.000+ Sender in 4K',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varodatic IPTV — 26.000+ Sender in 4K | Kostenlose Testversion',
    description: 'Über 26.000 Live-Sender in 4K. Keine Pufferung, kostenlose Testversion, sofortige Aktivierung.',
    images: ['https://varodaticiptv.pro/og-image.png'],
    creator: '@varodaticiptv',
    site: '@varodaticiptv',
  },
};

export default function DeChLayout({ children }: { children: React.ReactNode }) {
  return <div lang="de">{children}</div>;
}
