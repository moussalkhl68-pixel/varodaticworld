import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blogPosts";

export default function BlogGrid() {
  return (
    <section className="py-24 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="glass p-6 rounded-2xl flex flex-col group hover:-translate-y-2 transition-transform duration-300 border-white/10 hover:border-primary/50 block"
            >
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="flex items-center text-primary text-sm font-semibold mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>

              <h3 className="font-heading font-bold text-white text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                {post.excerpt}
              </p>

              <div className="text-primary font-semibold text-sm flex items-center mt-auto">
                Read Article
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
