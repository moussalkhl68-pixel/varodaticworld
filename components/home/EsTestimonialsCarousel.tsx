"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function EsTestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const testimonials = [
    {
      name: "Carlos M.",
      role: "Fan de Deportes",
      text: "He probado 4 proveedores IPTV distintos antes de descubrir Varodatic. La diferencia es abismal. Cada partido de LaLiga en 4K con cero buffering. Un servicio increíble.",
      rating: 5,
    },
    {
      name: "Laura S.",
      role: "Usuaria Sin Cable",
      text: "Configurarlo en mi Smart TV LG me llevó menos de 5 minutos. La biblioteca VOD es enorme y se actualiza más rápido que Netflix. Toda mi familia lo usa en 3 dispositivos sin ningún problema.",
      rating: 5,
    },
    {
      name: "Alejandro R.",
      role: "Usuario Avanzado",
      text: "La estabilidad no tiene comparación. Incluso durante eventos PPV con mucho tráfico, el servidor aguanta perfectamente. El equipo de soporte por WhatsApp también es fantástico.",
      rating: 5,
    },
    {
      name: "Diego F.",
      role: "Suscriptor de Larga Duración",
      text: "Empecé con la prueba gratuita y al instante compré el plan de 12 meses. La mitad de precio que mi antigua factura de cable, pero con absolutamente todos los canales del mundo. Vale cada céntimo.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 relative bg-black border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              Elegido por <span className="text-primary">+150.000 Usuarios.</span>
            </div>
            <p className="text-lg text-muted max-w-xl">
              No te quedes solo con nuestra palabra. Descubre lo que nuestra comunidad dice sobre su experiencia de streaming.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-background transition-colors focus:outline-none"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-background transition-colors focus:outline-none"
              aria-label="Testimonio siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing pb-8 -mx-4 px-4" ref={emblaRef}>
          <div className="flex gap-6 relative">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
              >
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
