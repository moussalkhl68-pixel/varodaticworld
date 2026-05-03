import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://varodaticiptv.pro"),
  alternates: {
    languages: {
      "en": "https://varodaticiptv.pro",
      "es": "https://varodaticiptv.pro/es",
      "x-default": "https://varodaticiptv.pro",
    },
  },
};

// Nested layout — renders inside the root layout's <main>.
// lang="es" on the wrapper div signals the content language to
// browsers, screen readers, and translation tools within this subtree.
export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <div lang="es">{children}</div>;
}
