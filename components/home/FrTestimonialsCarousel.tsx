"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function FrTestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev(); }, [emblaApi]);
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext(); }, [emblaApi]);

  const testimonials = [
    {
      name: "Pierre M.",
      role: "Fan de Sport",
      text: "J'ai testé 4 fournisseurs IPTV avant de découvrir Varodatic. La différence est énorme. Chaque match de Ligue des Champions en 4K sans coupure. Un service incroyable.",
      rating: 5,
    },
    {
      name: "Marie-Claire D.",
      role: "Sans Câble",
      text: "La configuration sur ma Smart TV LG m'a pris moins de 5 minutes. La bibliothèque VOD est immense et mise à jour plus vite que Netflix. Toute ma famille l'utilise sur 3 appareils sans aucun problème.",
      rating: 5,
    },
    {
      name: "Antoine R.",
      role: "Utilisateur Avancé",
      text: "La stabilité est incomparable. Même lors des grands événements PPV, le serveur tient parfaitement. L'équipe support WhatsApp est aussi fantastique.",
      rating: 5,
    },
    {
      name: "Jean-François B.",
      role: "Abonné Longue Durée",
      text: "J'ai commencé par l'essai gratuit et j'ai immédiatement acheté l'abonnement 12 mois. Deux fois moins cher que mon ancien abonnement câble, mais avec absolument toutes les chaînes du monde. Ça vaut chaque centime.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 relative bg-black border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              Choisi par <span className="text-primary">+150.000 utilisateurs.</span>
            </div>
            <p className="text-lg text-muted max-w-xl">
              Ne vous fiez pas qu&apos;à notre parole. Découvrez ce que notre communauté dit de son expérience de streaming.
            </p>
          </div>
          <div className="flex gap-4">
            <button onClick={scrollPrev} className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-background transition-colors focus:outline-none" aria-label="Témoignage précédent">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={scrollNext} className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-background transition-colors focus:outline-none" aria-label="Témoignage suivant">
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
                      {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-5 h-5 fill-primary text-primary" />)}
                    </div>
                    <p className="text-lg text-white/90 leading-relaxed mb-8 italic">&ldquo;{t.text}&rdquo;</p>
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
