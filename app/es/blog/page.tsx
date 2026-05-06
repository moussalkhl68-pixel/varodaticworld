import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { esBlogPosts } from "@/lib/esBlogPosts";
import CTAButton from "@/components/shared/CTAButton";

export const metadata: Metadata = {
  title: "Blog Varodatic IPTV España — Guías y Tutoriales 2026",
  description:
    "Guías expertas de Varodatic IPTV en español — instalación en Smart TV, configuración Firestick, IPTV vs cable y más. Actualizadas para 2026.",
  alternates: {
    canonical: "https://varodaticiptv.pro/es/blog/",
    languages: {
      en: "https://varodaticiptv.pro/blog/",
      es: "https://varodaticiptv.pro/es/blog/",
    },
  },
  openGraph: {
    locale: "es_ES",
    alternateLocale: ["en_US"],
    title: "Blog Varodatic IPTV España — Guías y Tutoriales 2026",
    description:
      "Guías expertas de instalación, comparativas de reproductores y trucos de streaming para tu suscripción Varodatic IPTV. Actualizadas para 2026.",
    url: "https://varodaticiptv.pro/es/blog/",
    images: [{ url: "https://varodaticiptv.pro/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function EsBlogPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Header */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-2 rounded-full">
            Blog en Español
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white drop-shadow-sm mt-4">
            Blog Varodatic IPTV — Guías y Tutoriales
          </h1>
          <p className="text-lg md:text-xl text-muted/90 max-w-2xl mx-auto">
            Todo lo que necesitas saber para sacar el máximo partido a tu suscripción Varodatic IPTV en España.
          </p>
        </div>
      </section>

      {/* Spanish blog posts */}
      {esBlogPosts.length > 0 && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-heading font-bold text-white mb-8">Artículos en Español</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {esBlogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/es/blog/${post.slug}`}
                  className="group block bg-[#111111] border border-white/08 rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-[0_0_30px_rgba(0,255,136,0.08)] transition-all duration-300"
                >
                  <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute top-3 left-3 text-xs font-bold uppercase tracking-widest text-black bg-primary px-3 py-1 rounded-full">
                      {post.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[#A0A0A0] text-xs mb-3">
                      <span>
                        {new Date(post.date).toLocaleDateString("es-ES", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-[#A0A0A0] text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                      Leer Artículo <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Spanish Support CTA */}
      <section className="py-16 bg-surface border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-heading font-bold text-white mb-4">
            ¿Necesitas ayuda en español?
          </h2>
          <p className="text-muted mb-8">
            Nuestro equipo de soporte responde por WhatsApp en cualquier momento del día.
            Configuración, problemas técnicos o dudas sobre tu suscripción — estamos aquí.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/447828708540?text=Hola%2C%20necesito%20ayuda%20con%20Varodatic%20IPTV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-8 py-3 rounded-xl bg-[#25D366] text-black font-bold hover:opacity-90 transition-all"
            >
              Contactar por WhatsApp
            </a>
            <CTAButton href="/es/pricing" variant="ghost">
              Ver Planes de Suscripción
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
