"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function EsFAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "¿Qué es Varodatic IPTV y cómo funciona en España?", a: "Varodatic IPTV es un servicio de streaming premium que ofrece más de 26.000 canales en vivo — incluyendo TVE, Antena 3, Telecinco, La Sexta, Movistar+ y DAZN España — una extensa biblioteca VOD y paquetes deportivos completos, todo a través de internet." },
    { q: "¿En qué dispositivos funciona Varodatic IPTV?", a: "Compatible con Amazon Firestick, Android TV, Smart TV Samsung y LG, iOS, Android, Windows, Mac, MAG Box y receptores Enigma2. La instalación tarda menos de 5 minutos en cualquier dispositivo." },
    { q: "¿Puedo usar la suscripción en varios dispositivos a la vez?", a: "Sí, nuestros planes multidispositivo permiten hasta 3 conexiones simultáneas para que toda la familia pueda ver canales distintos al mismo tiempo." },
    { q: "¿Qué velocidad de internet necesito?", a: "Recomendamos un mínimo de 20 Mbps para streaming 4K/HD fluido sin buffering. Para calidad SD, con 10 Mbps es suficiente." },
    { q: "¿Hay prueba gratuita disponible?", a: "Sí, ofrecemos una prueba gratuita sin necesidad de tarjeta de crédito para que puedas comprobar la calidad del servicio antes de suscribirte. Contáctanos por WhatsApp para solicitarla." },
    { q: "¿Incluye canales de deportes como LaLiga y Champions League?", a: "Sí. Incluimos todos los canales deportivos disponibles en España: DAZN, Movistar+ Deportes, beIN Sports, Eurosport y cobertura completa de LaLiga, Champions League, Premier League, NBA, Fórmula 1 y mucho más." },
    { q: "¿Cuánto tarda la activación?", a: "La activación es prácticamente inmediata. Tras confirmar el pago, recibirás tus datos de acceso e instrucciones de configuración por email o WhatsApp en cuestión de minutos." },
    { q: "¿Cuánto cuesta Varodatic IPTV en España?", a: "Los planes empiezan desde 35€ por 3 meses, 49€ por 6 meses o 69€ por 12 meses con 1 conexión. También disponemos de planes para 2 y 3 conexiones simultáneas con descuento. Sin permanencia ni contratos." },
  ];

  return (
    <section className="py-24 relative bg-surface border-y border-white/10" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Preguntas <span className="text-primary">Frecuentes</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Todo lo que necesitas saber antes de iniciar tu prueba gratuita de Varodatic IPTV.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`glass rounded-xl overflow-hidden transition-all duration-300 ${openIndex === i ? "border-primary/50" : "border-white/10"}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-surface2/50 hover:bg-surface2 transition-colors focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <h3 className="font-heading font-semibold text-lg text-white">
                  {faq.q}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform duration-300 shrink-0 ml-4 ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="p-6 pt-2 text-muted leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
