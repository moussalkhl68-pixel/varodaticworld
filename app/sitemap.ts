import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogPosts";
import { esBlogPosts } from "@/lib/esBlogPosts";

const BASE = "https://varodaticiptv.pro";

// Full hreflang mesh for home + pricing (all 5 locales exist)
const homeAlternates = {
  "x-default": `${BASE}/`,
  en:           `${BASE}/`,
  es:           `${BASE}/es/`,
  "de-CH":      `${BASE}/de-ch/`,
  "fr-CH":      `${BASE}/fr-ch/`,
  "it-CH":      `${BASE}/it-ch/`,
};

const pricingAlternates = {
  "x-default": `${BASE}/pricing/`,
  en:           `${BASE}/pricing/`,
  es:           `${BASE}/es/pricing/`,
  "de-CH":      `${BASE}/de-ch/pricing/`,
  "fr-CH":      `${BASE}/fr-ch/pricing/`,
  "it-CH":      `${BASE}/it-ch/pricing/`,
};

// Blog only has en + es (no Swiss blog pages)
const blogAlternates = {
  "x-default": `${BASE}/blog/`,
  en:           `${BASE}/blog/`,
  es:           `${BASE}/es/blog/`,
};

export default function sitemap(): MetadataRoute.Sitemap {
  // ── English canonical pages ──────────────────────────────────────────────
  const enPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: { languages: homeAlternates },
    },
    {
      url: `${BASE}/pricing/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: pricingAlternates },
    },
    {
      url: `${BASE}/blog/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: { languages: blogAlternates },
    },
  ];

  // ── English-only static pages ────────────────────────────────────────────
  const enOnlyPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/features/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { "x-default": `${BASE}/features/`, en: `${BASE}/features/` } },
    },
    {
      url: `${BASE}/support/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: { languages: { "x-default": `${BASE}/support/`, en: `${BASE}/support/` } },
    },
  ];

  // ── Spanish canonical pages ──────────────────────────────────────────────
  const esPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/es/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: { languages: homeAlternates },
    },
    {
      url: `${BASE}/es/pricing/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: pricingAlternates },
    },
    {
      url: `${BASE}/es/blog/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: { languages: blogAlternates },
    },
  ];

  // ── Swiss German canonical pages ─────────────────────────────────────────
  const deChPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/de-ch/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: { languages: homeAlternates },
    },
    {
      url: `${BASE}/de-ch/pricing/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: pricingAlternates },
    },
  ];

  // ── Swiss French canonical pages ─────────────────────────────────────────
  const frChPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/fr-ch/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: { languages: homeAlternates },
    },
    {
      url: `${BASE}/fr-ch/pricing/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: pricingAlternates },
    },
  ];

  // ── Swiss Italian canonical pages ────────────────────────────────────────
  const itChPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/it-ch/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: { languages: homeAlternates },
    },
    {
      url: `${BASE}/it-ch/pricing/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: pricingAlternates },
    },
  ];

  // ── Blog posts (English) ─────────────────────────────────────────────────
  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
    alternates: {
      languages: {
        "x-default": `${BASE}/blog/${post.slug}/`,
        en: `${BASE}/blog/${post.slug}/`,
      },
    },
  }));

  // ── Blog posts (Spanish) ─────────────────────────────────────────────────
  const esBlogPostPages: MetadataRoute.Sitemap = esBlogPosts.map((post) => ({
    url: `${BASE}/es/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
    alternates: {
      languages: {
        "x-default": `${BASE}/es/blog/${post.slug}/`,
        es: `${BASE}/es/blog/${post.slug}/`,
      },
    },
  }));

  return [
    ...enPages,
    ...enOnlyPages,
    ...esPages,
    ...deChPages,
    ...frChPages,
    ...itChPages,
    ...blogPostPages,
    ...esBlogPostPages,
  ];
}
