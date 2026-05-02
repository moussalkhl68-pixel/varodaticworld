"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function DeTestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev(); }, [emblaApi]);
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext(); }, [emblaApi]);

  const testimonials = [
    {
      name: "Thomas B.",
      role: "Sport-Fan",
      text: "Ich habe 3 verschiedene IPTV-Anbieter getestet, bevor ich Varodatic entdeckt habe. Der Unterschied ist enorm. Jedes Bundesliga-Spiel in 4K ohne Buffering. Ein unglaublicher Service.",
      rating: 5,
    },
    {
      name: "Sandra K.",
      role: "Kabellos-Nutzerin",
      text: "Die Einrichtung auf meinem Samsung Smart TV hat weniger als 5 Minuten gedauert. Die VOD-Bibliothek ist riesig und wird schneller aktualisiert als Netflix. Meine ganze Familie nutzt es auf 3 Geräten problemlos.",
      rating: 5,
    },
    {
      name: "Markus W.",
      role: "Power-User",
      text: "Die Stabilität ist unvergleichlich. Auch bei grossen PPV-Events mit hohem Traffic läuft der Server einwandfrei. Das WhatsApp-Support-Team ist auch fantastisch.",
      rating: 5,
    },
    {
      name: "Lukas F.",
      role: "Langzeit-Abonnent",
      text: "Ich habe mit dem Gratistest angefangen und sofort das 12-Monats-Paket gekauft. Halb so teuer wie mein altes Kabelabo, aber mit absolut allen Sendern der Welt. Jeden Rappen wert.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 relative bg-black border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              Gewählt von <span className="text-primary">+150.000 Nutzern.</span>
            </div>
            <p className="text-lg text-muted max-w-xl">
              Verlass dich nicht nur auf unser Wort. Entdecke, was unsere Community über ihr Streaming-Erlebnis sagt.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-background transition-colors focus:outline-none"
              aria-label="Vorheriges Testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-background transition-colors focus:outline-none"
              aria-label="Nächstes Testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing pb-8 -mx-4 px-4" ref={emblaRef}>
          <div className="flex gap-6 relative">
            {testimonials.map((t, i) => (
              <div key={i} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
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

      </div>
    </section>
  );
}
