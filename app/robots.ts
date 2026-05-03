import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://varodaticiptv.pro/sitemap.xml",
    host: "https://varodaticiptv.pro",
  };
}
