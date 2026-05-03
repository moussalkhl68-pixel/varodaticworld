import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://varodaticiptv.pro"),
  alternates: {
    languages: {
      "fr-CH": "https://varodatociptv.pro/fr-ch/",
      "en": "https://varodatociptv.pro/",
      "x-default": "https://varodatociptv.pro/",
    },
  },
};

export default function FrChLayout({ children }: { children: React.ReactNode }) {
  return <div lang="fr">{children}</div>;
}
