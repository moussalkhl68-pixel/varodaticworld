import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogPosts";
import { esBlogPosts } from "@/lib/esBlogPosts";

const BASE = "https://varodatociptv.pro";

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Bilingual static pages ───────────────────────────────────────────────
  const bilingualPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          en: `${BASE}/`,
          es: `${BASE}/es/`,
        },
      },
    },
    {
      url: `${BASE}/pricing/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${BASE}/pricing/`,
          es: `${BASE}/es/pricing/`,
        },
      },
    },
    {
      url: `${BASE}/blog/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${BASE}/blog/`,
          es: `${BASE}/es/blog/`,
        },
      },
    },
  ];

  // ── Spanish-only mirrors (canonical es URLs) ─────────────────────────────
  const esPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/es/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          es: `${BASE}/es/`,
          en: `${BASE}/`,
        },
      },
    },
    {
      url: `${BASE}/es/pricing/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          es: `${BASE}/es/pricing/`,
          en: `${BASE}/pricing/`,
        },
      },
    },
    {
      url: `${BASE}/es/blog/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          es: `${BASE}/es/blog/`,
          en: `${BASE}/blog/`,
        },
      },
    },
  ];

  // ── English-only static pages ────────────────────────────────────────────
  const enOnlyPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/features/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/support/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // ── Blog posts (English) ────────────────────────────────────────────────
  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // ── Blog posts (Spanish) ─────────────────────────────────────────────────
  const esBlogPostPages: MetadataRoute.Sitemap = esBlogPosts.map((post) => ({
    url: `${BASE}/es/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // ── Swiss German (/de-ch/) ───────────────────────────────────────────────
  const deChPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/de-ch/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: { languages: { "de-CH": `${BASE}/de-ch/`, en: `${BASE}/` } },
    },
    {
      url: `${BASE}/de-ch/pricing/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { "de-CH": `${BASE}/de-ch/pricing/`, en: `${BASE}/pricing/` } },
    },
  ];

  // ── Swiss French (/fr-ch/) ───────────────────────────────────────────────
  const frChPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/fr-ch/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: { languages: { "fr-CH": `${BASE}/fr-ch/`, en: `${BASE}/` } },
    },
    {
      url: `${BASE}/fr-ch/pricing/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { "fr-CH": `${BASE}/fr-ch/pricing/`, en: `${BASE}/pricing/` } },
    },
  ];

  // ── Swiss Italian (/it-ch/) ──────────────────────────────────────────────
  const itChPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/it-ch/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: { languages: { "it-CH": `${BASE}/it-ch/`, en: `${BASE}/` } },
    },
    {
      url: `${BASE}/it-ch/pricing/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { "it-CH": `${BASE}/it-ch/pricing/`, en: `${BASE}/pricing/` } },
    },
  ];

  return [...bilingualPages, ...esPages, ...enOnlyPages, ...blogPostPages, ...esBlogPostPages, ...deChPages, ...frChPages, ...itChPages];
}
