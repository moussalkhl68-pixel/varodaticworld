import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus T.",
    role: "Sports Enthusiast",
    text: "I've tried 4 different IPTV providers before finding Varodatic. The difference is night and day. Every single Premier League game in 4K with literally zero buffering. Incredible service.",
    rating: 5,
  },
  {
    name: "Sarah L.",
    role: "Cord Cutter",
    text: "Setting it up on my LG Smart TV took less than 5 minutes. The VOD library is massive and updated faster than Netflix. My whole family uses it across 3 devices without a hitch.",
    rating: 5,
  },
  {
    name: "Omar K.",
    role: "Tech Savvy User",
    text: "The stability is unmatched. Even during huge PPV events with heavy traffic, the server holds up perfectly. The support team on WhatsApp is also fantastic.",
    rating: 5,
  },
  {
    name: "Diego R.",
    role: "Long-term Subscriber",
    text: "I initially did the free trial and instantly bought the 12-month plan. Half the price of my old cable bill, but with literally every channel in the world. Totally worth it.",
    rating: 5,
  },
];

const doubled = [...testimonials, ...testimonials];

export default function TestimonialsCarousel() {
  return (
    <section className="py-24 relative bg-black border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
          Loved by <span className="text-primary">150K+ Users.</span>
        </div>
        <p className="text-lg text-muted max-w-xl">
          Don&apos;t just take our word for it. See what our community has to say about their streaming experience.
        </p>
      </div>

      <div className="reviews-outer">
        <div className="reviews-fade reviews-fade--left" />
        <div className="reviews-fade reviews-fade--right" />

        <div className="reviews-track">
          {doubled.map((t, i) => (
            <div key={i} className="reviews-card-wrapper">
              <div className="glass p-8 rounded-2xl h-full flex flex-col justify-between hover:border-primary/30 transition-colors duration-300">
                <div>
                  <div className="flex items-center gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg text-white/90 leading-relaxed mb-8 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-surface2 border border-white/10 flex flex-col items-center justify-center font-heading font-bold text-lg text-primary uppercase">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-white">{t.name}</div>
                    <div className="text-sm text-primary">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
