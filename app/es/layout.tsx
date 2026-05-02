import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.varodaticiptv.pro"),
  alternates: {
    languages: {
      "en": "https://www.varodaticiptv.pro",
      "es": "https://www.varodaticiptv.pro/es",
      "x-default": "https://www.varodaticiptv.pro",
    },
  },
};

// Nested layout — renders inside the root layout's <main>.
// lang="es" on the wrapper div signals the content language to
// browsers, screen readers, and translation tools within this subtree.
export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <div lang="es">{children}</div>;
}
