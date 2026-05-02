import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.varodaticiptv.pro"),
  alternates: {
    languages: {
      "de-CH": "https://varodatociptv.pro/de-ch/",
      "en": "https://varodatociptv.pro/",
      "x-default": "https://varodatociptv.pro/",
    },
  },
};

export default function DeChLayout({ children }: { children: React.ReactNode }) {
  return <div lang="de">{children}</div>;
}
