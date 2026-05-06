import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blogPosts";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const post = blogPosts.find((post) => post.slug === p.slug);
  if (!post) return {};
  return {
    title: post.metaTitle || `${post.title} | Varodatic IPTV`,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: `https://varodaticiptv.pro/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url: `https://varodaticiptv.pro/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const p = await params;
  const post = blogPosts.find((post) => post.slug === p.slug);
  if (!post) notFound();

  const related = blogPosts.filter((bp) =>
    post.relatedArticles?.includes(bp.slug)
  );

  // ── Inject internal links by replacing **anchor text** markers ────────────
  const contentWithLinks = post.content
    // ── Internal link anchors ──────────────────────────────────────────────
    .replace(
      /\*\*Varodatic IPTV\*\*/g,
      `<a href="/" class="text-primary font-semibold hover:underline transition-colors">Varodatic IPTV</a>`
    )
    .replace(
      /\*\*Varodatic IPTV pricing plans\*\*/g,
      `<a href="/pricing" class="text-primary hover:underline transition-colors">Varodatic IPTV pricing plans</a>`
    )
    .replace(
      /\*\*how to set up IPTV on your Firestick\*\*/g,
      `<a href="/blog/setup-varodatic-iptv-firestick" class="text-primary hover:underline transition-colors">how to set up IPTV on your Firestick</a>`
    )
    .replace(
      /\*\*best IPTV players for 4K streaming\*\*/g,
      `<a href="/blog/best-iptv-players-4k-2026" class="text-primary hover:underline transition-colors">best IPTV players for 4K streaming</a>`
    )
    // ── Markdown tables ────────────────────────────────────────────────────
    .replace(
      /^\|(.+)\|\s*$/gm,
      (row) => {
        const isHeader = false;
        const cells = row.split("|").filter((c) => c.trim() !== "");
        const tdCells = cells
          .map((c) => `<td class="border border-white/10 px-4 py-2 text-[#A0A0A0] text-sm">${c.trim()}</td>`)
          .join("");
        return `<tr>${tdCells}</tr>`;
      }
    )
    .replace(
      /^\|[-| :]+\|\s*$/gm,
      ""
    )
    // wrap rows in table
    .replace(
      /(<tr>[\s\S]*?<\/tr>\s*)+/g,
      (match) => {
        const rows = match.trim().split("\n").filter(Boolean);
        if (rows.length === 0) return match;
        const [headerRow, ...bodyRows] = rows;
        const headerCells = headerRow
          .replace(/<td/g, "<th")
          .replace(/<\/td>/g, "</th>")
          .replace(/class="[^"]*"/g, `class="border border-white/10 px-4 py-2 text-white font-semibold text-sm"`);
        return `<div class="overflow-x-auto my-8"><table class="w-full border-collapse border border-white/10 rounded-xl overflow-hidden"><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows.join("")}</tbody></table></div>`;
      }
    )
    // ── Markdown → HTML ────────────────────────────────────────────────────
    .replace(
      /^## (.+)$/gm,
      `<h2 class="text-2xl font-bold text-white mt-12 mb-4 leading-snug">$1</h2>`
    )
    .replace(
      /^### (.+)$/gm,
      `<h3 class="text-xl font-bold text-white mt-8 mb-3">$1</h3>`
    )
    // Bold that hasn't been turned into a link yet
    .replace(
      /\*\*(.+?)\*\*/g,
      `<strong class="text-white font-semibold">$1</strong>`
    )
    .replace(/\*(.+?)\*/g, `<em class="italic">$1</em>`)
    // Ordered list items
    .replace(
      /^(\d+)\. (.+)$/gm,
      `<li class="ml-5 text-[#A0A0A0] mb-2 list-decimal">$2</li>`
    )
    // Unordered list items
    .replace(
      /^- (.+)$/gm,
      `<li class="ml-5 text-[#A0A0A0] mb-1 list-disc">$1</li>`
    )
    // Paragraphs: double newline = new paragraph
    .replace(
      /\n\n/g,
      `</p><p class="text-[#A0A0A0] leading-relaxed mb-5 text-[1.05rem]">`
    )
    // Remaining single newlines
    .replace(/\n/g, `<br/>`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: [{ "@type": "Organization", name: "Varodatic IPTV", url: `https://${siteConfig.brand.domain}` }],
    publisher: {
      "@type": "Organization",
      name: "Varodatic IPTV",
      logo: { "@type": "ImageObject", url: `https://${siteConfig.brand.domain}/logo.png` },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-black pt-28 pb-24">

        {/* ── Breadcrumb ───────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-8">
          <nav className="flex items-center gap-1 text-sm text-[#A0A0A0] flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span className="text-white truncate max-w-[220px] sm:max-w-full">{post.title}</span>
          </nav>
        </div>

        {/* ── Article Header ───────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            {post.tag}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-5 mb-5 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-[#A0A0A0] text-sm">
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* ── Hero Image ────────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-12">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 900px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* ── Article Body ─────────────────────────────────────────────── */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <div
            className="prose-custom"
            dangerouslySetInnerHTML={{
              __html: `<p class="text-[#A0A0A0] leading-relaxed mb-5 text-[1.05rem]">${contentWithLinks}</p>`,
            }}
          />

          {/* ── Mid-article CTA ──────────────────────────────────────── */}
          <div className="my-14 p-7 bg-[#0d0d0d] border border-primary/20 rounded-2xl text-center">
            <p className="text-white font-bold text-lg mb-2">Ready to start streaming?</p>
            <p className="text-[#A0A0A0] text-sm mb-5">
              Get access to 26,000+ channels with{" "}
              <Link href="/" className="text-primary hover:underline font-semibold">
                Varodatic IPTV
              </Link>
            </p>
            <a
              href="https://wa.me/447828708540?text=Hello%2C%20I%20want%20to%20start%20my%20free%20trial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-primary text-black font-bold rounded-xl hover:opacity-90 transition-all"
            >
              Start Free Trial
            </a>
          </div>

          {/* ── Related Articles ─────────────────────────────────────── */}
          {related.length > 0 && (
            <section className="mt-16 pt-10 border-t border-white/10">
              <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group flex flex-col bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300"
                  >
                    {/* card image */}
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                        {rel.tag}
                      </span>
                      <h3 className="text-white font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
                        {rel.title}
                      </h3>
                      <p className="text-[#A0A0A0] text-sm line-clamp-2 flex-1">{rel.excerpt}</p>
                      <span className="text-primary text-sm font-semibold mt-4 inline-flex items-center gap-1">
                        Read Article <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* ── Next Steps ───────────────────────────────────────────── */}
          <div className="mt-14 p-7 bg-surface2 border border-white/10 rounded-2xl">
            <h3 className="text-white font-bold text-lg mb-4">Ready to get started?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <Link href="/pricing" className="flex items-center gap-2 px-4 py-3 rounded-xl bg-primary/10 border border-primary/20 text-primary font-semibold hover:bg-primary/20 transition-colors">
                <span>💳</span> View Pricing Plans
              </Link>
              <Link href="/features" className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:border-primary/30 transition-colors">
                <span>⚡</span> Explore Features
              </Link>
              <Link href="/support" className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:border-primary/30 transition-colors">
                <span>💬</span> Setup Guides
              </Link>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-3 text-xs text-muted">
              <span>Also available in:</span>
              <Link href="/es" className="hover:text-primary transition-colors">🇪🇸 Español</Link>
              <Link href="/de-ch" className="hover:text-primary transition-colors">🇨🇭 Deutsch</Link>
              <Link href="/fr-ch" className="hover:text-primary transition-colors">🇨🇭 Français</Link>
              <Link href="/it-ch" className="hover:text-primary transition-colors">🇨🇭 Italiano</Link>
            </div>
          </div>

          {/* ── Back to Blog ──────────────────────────────────────────── */}
          <div className="mt-14 pt-8 border-t border-white/10">
            <Link
              href="/blog"
              className="text-sm font-medium text-white hover:text-primary inline-flex items-center gap-2 transition-colors"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
              Back to Blog
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
