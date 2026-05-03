import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://varodaticiptv.pro"),
  alternates: {
    languages: {
      "it-CH": "https://varodatociptv.pro/it-ch/",
      "en": "https://varodatociptv.pro/",
      "x-default": "https://varodatociptv.pro/",
    },
  },
};

export default function ItChLayout({ children }: { children: React.ReactNode }) {
  return <div lang="it">{children}</div>;
}
