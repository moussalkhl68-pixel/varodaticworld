import Link from "next/link";
import { ClipboardList, Zap, Tv } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <ClipboardList className="w-7 h-7 text-primary" />,
    title: "Scegli il tuo Piano",
    desc: "Seleziona un piano Varodatic IPTV da 3, 6 o 12 mesi. Nessun contratto, nessun costo nascosto — annulla quando vuoi.",
    href: "/it-ch/pricing",
    cta: "Vedi i piani Varodatic",
  },
  {
    number: "02",
    icon: <Zap className="w-7 h-7 text-primary" />,
    title: "Accesso Istantaneo",
    desc: "Le tue credenziali vengono consegnate istantaneamente tramite WhatsApp o e-mail. La configurazione richiede meno di 2 minuti.",
    href: "https://wa.me/447828708540?text=Ciao%2C%20voglio%20provare%20Varodatic%20IPTV%20Svizzera%20gratuitamente",
    cta: "Prova gratuita",
    external: true,
  },
  {
    number: "03",
    icon: <Tv className="w-7 h-7 text-primary" />,
    title: "Guarda su Qualsiasi Dispositivo",
    desc: "Avvia il tuo stream Varodatic su Firestick, Smart TV, Android, iOS o PC — istantaneamente, in qualità 4K.",
    href: "/features",
    cta: "Vedi i dispositivi compatibili",
  },
];

export default function ItHowVarodaticWorks() {
  return (
    <section className="py-24 relative bg-black border-t border-white/10" id="how-it-works">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Come funziona <span className="text-primary">Varodatic</span>?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Tre semplici passi per goderti lo streaming premium illimitato.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20" />

          {steps.map((step, i) => (
            <div key={i} className="relative glass border border-white/5 hover:border-primary/30 rounded-2xl p-8 flex flex-col transition-all duration-300 group">
              <span className="absolute top-5 right-6 text-5xl font-heading font-black text-white/5 select-none">{step.number}</span>
              <div className="mb-5 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-6 flex-1">{step.desc}</p>
              {step.external ? (
                <a href={step.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                  {step.cta} <span aria-hidden="true">→</span>
                </a>
              ) : (
                <Link href={step.href} className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                  {step.cta} <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
