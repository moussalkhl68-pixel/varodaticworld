import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://varodaticiptv.pro"),
  title: "Varodatic IPTV — 26 000+ Chaînes en 4K | Essai Gratuit",
  description: "Regardez plus de 26 000 chaînes en direct en 4K sans mise en mémoire tampon. Sports, films, séries et plus. Essai gratuit inclus. Activation instantanée.",
  alternates: {
    languages: {
      "fr-CH": "https://varodaticiptv.pro/fr-ch",
      "en": "https://varodaticiptv.pro",
      "x-default": "https://varodaticiptv.pro",
    },
  },
  openGraph: {
    title: 'Varodatic IPTV — 26 000+ Chaînes en 4K | Essai Gratuit',
    description: 'Regardez plus de 26 000 chaînes en direct en 4K sans mise en mémoire tampon. Sports, films, séries et plus. Essai gratuit inclus. Activation instantanée.',
    url: 'https://varodaticiptv.pro/fr-ch',
    siteName: 'Varodatic IPTV',
    type: 'website',
    locale: 'fr_CH',
    images: [
      {
        url: 'https://varodaticiptv.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Varodatic IPTV — 26 000+ Chaînes en 4K',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varodatic IPTV — 26 000+ Chaînes en 4K | Essai Gratuit',
    description: 'Plus de 26 000 chaînes en direct en 4K. Sans mise en mémoire tampon, essai gratuit, activation instantanée.',
    images: ['https://varodaticiptv.pro/og-image.png'],
    creator: '@varodaticiptv',
    site: '@varodaticiptv',
  },
};

export default function FrChLayout({ children }: { children: React.ReactNode }) {
  return <div lang="fr">{children}</div>;
}
