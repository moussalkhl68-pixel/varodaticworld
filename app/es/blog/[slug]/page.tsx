import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { esBlogPosts } from "@/lib/esBlogPosts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return esBlogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const post = esBlogPosts.find((post) => post.slug === p.slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://varodaticiptv.pro/es/blog/${post.slug}/`,
      languages: post.hreflangEn
        ? { es: `https://varodaticiptv.pro/es/blog/${post.slug}/`, en: post.hreflangEn }
        : undefined,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://varodaticiptv.pro/es/blog/${post.slug}/`,
      locale: "es_ES",
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function EsBlogPostPage({ params }: Props) {
  const p = await params;
  const post = esBlogPosts.find((post) => post.slug === p.slug);
  if (!post) notFound();

  const contentWithLinks = post.content
    .replace(
      /\*\*Varodatic IPTV\*\*/g,
      `<a href="/es" class="text-primary font-semibold hover:underline transition-colors">Varodatic IPTV</a>`
    )
    .replace(
      /\*\*planes de Varodatic IPTV\*\*/g,
      `<a href="/es/pricing" class="text-primary hover:underline transition-colors">planes de Varodatic IPTV</a>`
    )
    .replace(
      /\*\*suscripción IPTV para España\*\*/g,
      `<a href="/es/pricing" class="text-primary hover:underline transition-colors">suscripción IPTV para España</a>`
    )
    // Tables
    .replace(
      /^\|(.+)\|\s*$/gm,
      (row) => {
        const cells = row.split("|").filter((c) => c.trim() !== "");
        const tdCells = cells
          .map((c) => `<td class="border border-white/10 px-4 py-2 text-[#A0A0A0] text-sm">${c.trim()}</td>`)
          .join("");
        return `<tr>${tdCells}</tr>`;
      }
    )
    .replace(/^\|[-| :]+\|\s*$/gm, "")
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
    // Headings
    .replace(/^## (.+)$/gm, `<h2 class="text-2xl font-bold text-white mt-12 mb-4 leading-snug">$1</h2>`)
    .replace(/^### (.+)$/gm, `<h3 class="text-xl font-bold text-white mt-8 mb-3">$1</h3>`)
    // Bold remaining
    .replace(/\*\*(.+?)\*\*/g, `<strong class="text-white font-semibold">$1</strong>`)
    .replace(/\*(.+?)\*/g, `<em class="italic">$1</em>`)
    // Lists
    .replace(/^(\d+)\. (.+)$/gm, `<li class="ml-5 text-[#A0A0A0] mb-2 list-decimal">$2</li>`)
    .replace(/^- (.+)$/gm, `<li class="ml-5 text-[#A0A0A0] mb-1 list-disc">$1</li>`)
    // Paragraphs
    .replace(/\n\n/g, `</p><p class="text-[#A0A0A0] leading-relaxed mb-5 text-[1.05rem]">`)
    .replace(/\n/g, `<br/>`);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "es",
    author: [{ "@type": "Organization", name: "Varodatic IPTV", url: "https://varodaticiptv.pro/es/" }],
    publisher: {
      "@type": "Organization",
      name: "Varodatic IPTV",
      logo: { "@type": "ImageObject", url: "https://varodaticiptv.pro/logo.png" },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Funciona IPTV en todas las Smart TV?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La mayoría de televisores Smart TV fabricados a partir de 2016 son compatibles con IPTV. Samsung Tizen y LG webOS requieren apps específicas de sus tiendas (SmartIPTV), mientras que Android TV permite instalar directamente TiviMate o IPTV Smarters Pro desde Google Play.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué velocidad de internet necesito para IPTV en Smart TV?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Se recomienda un mínimo de 25 Mbps para streaming Full HD estable y 40 Mbps para 4K sin buffering. Para la mejor experiencia, conecta el televisor directamente al router mediante cable Ethernet.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo ver LaLiga y Champions League en mi Smart TV con IPTV?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Varodatic IPTV incluye todos los canales deportivos disponibles en España — DAZN, Movistar+ Deportes y Fútbol, beIN Sports, Eurosport — con cobertura completa de LaLiga, Champions League, Premier League, NBA, Fórmula 1 y todos los eventos PPV sin coste adicional.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen bg-black pt-28 pb-24">

        {/* Breadcrumb */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-8">
          <nav className="flex items-center gap-1 text-sm text-[#A0A0A0] flex-wrap">
            <Link href="/es" className="hover:text-primary transition-colors">Inicio</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <Link href="/es/blog" className="hover:text-primary transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span className="text-white truncate max-w-[220px] sm:max-w-full">{post.title}</span>
          </nav>
        </div>

        {/* Article Header */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            {post.tag}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-5 mb-5 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-[#A0A0A0] text-sm">
            <span>
              {new Date(post.date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Hero Image */}
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

        {/* Article Body */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <div
            className="prose-custom"
            dangerouslySetInnerHTML={{
              __html: `<p class="text-[#A0A0A0] leading-relaxed mb-5 text-[1.05rem]">${contentWithLinks}</p>`,
            }}
          />

          {/* Mid-article CTA */}
          <div className="my-14 p-7 bg-[#0d0d0d] border border-primary/20 rounded-2xl text-center">
            <p className="text-white font-bold text-lg mb-2">¿Listo para empezar a ver televisión sin límites?</p>
            <p className="text-[#A0A0A0] text-sm mb-5">
              Accede a más de 26.000 canales con{" "}
              <Link href="/es" className="text-primary hover:underline font-semibold">
                Varodatic IPTV España
              </Link>
              {" "}— desde 35€ sin permanencia.
            </p>
            <a
              href="https://wa.me/447476603520?text=Hola%2C%20quiero%20iniciar%20la%20prueba%20gratuita%20de%20Varodatic%20IPTV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-primary text-black font-bold rounded-xl hover:opacity-90 transition-all"
            >
              Iniciar Prueba Gratuita
            </a>
          </div>

          {/* ── Próximos Pasos ───────────────────────────────────────── */}
          <div className="mt-14 p-7 bg-surface2 border border-white/10 rounded-2xl">
            <h3 className="text-white font-bold text-lg mb-4">¿Listo para empezar?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <Link href="/es/pricing" className="flex items-center gap-2 px-4 py-3 rounded-xl bg-primary/10 border border-primary/20 text-primary font-semibold hover:bg-primary/20 transition-colors">
                <span>💳</span> Ver Planes de Precios
              </Link>
              <Link href="/features" className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:border-primary/30 transition-colors">
                <span>⚡</span> Ver Características
              </Link>
              <Link href="/support" className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:border-primary/30 transition-colors">
                <span>💬</span> Guías de Configuración
              </Link>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-3 text-xs text-muted">
              <span>También disponible en:</span>
              <Link href="/" className="hover:text-primary transition-colors">🇬🇧 English</Link>
              <Link href="/de-ch" className="hover:text-primary transition-colors">🇨🇭 Deutsch</Link>
              <Link href="/fr-ch" className="hover:text-primary transition-colors">🇨🇭 Français</Link>
              <Link href="/it-ch" className="hover:text-primary transition-colors">🇨🇭 Italiano</Link>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-14 pt-8 border-t border-white/10">
            <Link
              href="/es/blog"
              className="text-sm font-medium text-white hover:text-primary inline-flex items-center gap-2 transition-colors"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
              Volver al Blog
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
