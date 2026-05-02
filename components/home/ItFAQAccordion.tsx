"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ItFAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Cos'è Varodatic IPTV Svizzera e come funziona?", a: "Varodatic IPTV Svizzera è un servizio di streaming premium con oltre 26.000 canali in diretta — RSI LA 1, RSI LA 2, Rai 1, Rai 2, Rai 3, Mediaset, DAZN — una vasta libreria VOD e pacchetti sportivi completi, tutto tramite la tua connessione internet." },
    { q: "Su quali dispositivi funziona Varodatic IPTV?", a: "Compatibile con Amazon Firestick, Android TV, Samsung Smart TV, LG Smart TV, iOS, Android, Windows, Mac, MAG Box e ricevitori Enigma2. L'installazione richiede meno di 5 minuti su qualsiasi dispositivo." },
    { q: "Posso usare l'abbonamento su più dispositivi contemporaneamente?", a: "Sì, i nostri piani multi-dispositivo permettono fino a 3 connessioni simultanee per far sì che tutta la famiglia possa guardare canali diversi nello stesso momento." },
    { q: "Quale velocità internet è necessaria?", a: "Consigliamo un minimo di 20 Mbps per uno streaming 4K/HD fluido senza buffering. Per la qualità SD, 10 Mbps sono sufficienti." },
    { q: "È disponibile una prova gratuita?", a: "Sì, offriamo una prova gratuita senza carta di credito per permetterti di verificare la qualità del servizio prima di abbonarti. Contattaci su WhatsApp." },
    { q: "I canali RSI e Rai sono inclusi?", a: "Sì. Varodatic IPTV Svizzera include RSI LA 1, RSI LA 2, RSI La 3 (canali svizzeri italiani), Rai 1, Rai 2, Rai 3, Mediaset, La7 e tutti i principali canali sport internazionali inclusa la Serie A." },
    { q: "Quanto tempo richiede l'attivazione?", a: "L'attivazione è praticamente immediata. Dopo la conferma del pagamento, ricevi le tue credenziali e le istruzioni di configurazione via e-mail o WhatsApp in pochi minuti." },
    { q: "Quanto costa Varodatic IPTV in Svizzera?", a: "I piani partono da CHF 35 per 3 mesi, CHF 49 per 6 mesi o CHF 69 per 12 mesi con 1 connessione. Disponibili anche piani per 2 e 3 connessioni simultanee con sconto. Senza contratto né vincoli." },
  ];

  return (
    <section className="py-24 relative bg-surface border-y border-white/10" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Domande <span className="text-primary">Frequenti</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Tutto quello che devi sapere prima di iniziare la tua prova gratuita Varodatic IPTV Svizzera.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`glass rounded-xl overflow-hidden transition-all duration-300 ${openIndex === i ? "border-primary/50" : "border-white/10"}`}>
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-surface2/50 hover:bg-surface2 transition-colors focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <h3 className="font-heading font-semibold text-lg text-white">{faq.q}</h3>
                <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 shrink-0 ml-4 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="p-6 pt-2 text-muted leading-relaxed">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
