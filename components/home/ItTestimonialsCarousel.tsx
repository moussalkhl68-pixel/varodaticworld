import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marco B.",
    role: "Appassionato di Sport",
    text: "Ho testato 4 fornitori IPTV diversi prima di scoprire Varodatic. La differenza è abissale. Ogni partita di Serie A in 4K senza buffering. Un servizio incredibile.",
    rating: 5,
  },
  {
    name: "Laura C.",
    role: "Senza Cavo",
    text: "La configurazione sulla mia Smart TV LG mi ha impiegato meno di 5 minuti. La libreria VOD è enorme e si aggiorna più velocemente di Netflix. Tutta la mia famiglia la usa su 3 dispositivi senza problemi.",
    rating: 5,
  },
  {
    name: "Roberto M.",
    role: "Utente Esperto",
    text: "La stabilità non ha paragoni. Anche durante i grandi eventi PPV con molto traffico, il server regge perfettamente. Il team di supporto WhatsApp è anche fantastico.",
    rating: 5,
  },
  {
    name: "Giovanni F.",
    role: "Abbonato di Lunga Data",
    text: "Ho iniziato con la prova gratuita e ho subito acquistato il piano da 12 mesi. La metà del prezzo del mio vecchio abbonamento via cavo, ma con assolutamente tutti i canali del mondo. Vale ogni centesimo.",
    rating: 5,
  },
];

const doubled = [...testimonials, ...testimonials];

export default function ItTestimonialsCarousel() {
  return (
    <section className="py-24 relative bg-black border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
          Scelto da <span className="text-primary">+150.000 utenti.</span>
        </div>
        <p className="text-lg text-muted max-w-xl">
          Non fidarti solo delle nostre parole. Scopri cosa dice la nostra community sulla propria esperienza di streaming.
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
