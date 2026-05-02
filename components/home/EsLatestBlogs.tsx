import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blogPosts";

const featured = blogPosts.slice(0, 3);

export default function EsLatestBlogs() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-2 rounded-full">
            Del Blog de Varodatic
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
            Publicaciones Recientes
          </h2>
          <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
            Guías, consejos y tutoriales de configuración para sacar el máximo partido a tu suscripción Varodatic IPTV.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
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

                <p className="text-[#A0A0A0] text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                  Leer Artículo
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block px-8 py-3 border-2 border-primary/40 text-primary font-semibold rounded-xl text-sm hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            Ver Todas las Guías →
          </Link>
        </div>

      </div>
    </section>
  );
}
