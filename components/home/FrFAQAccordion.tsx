"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FrFAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Qu'est-ce que Varodatic IPTV Suisse et comment ça fonctionne ?", a: "Varodatic IPTV Suisse est un service de streaming premium avec plus de 26'000 chaînes en direct — RTS Un, RTS Deux, RTS Info, TF1, France 2, Canal+, beIN Sports — une vaste bibliothèque VOD et des packs sport complets, le tout via votre connexion internet." },
    { q: "Sur quels appareils fonctionne Varodatic IPTV ?", a: "Compatible avec Amazon Firestick, Android TV, Samsung Smart TV, LG Smart TV, iOS, Android, Windows, Mac, MAG Box et récepteurs Enigma2. L'installation prend moins de 5 minutes sur n'importe quel appareil." },
    { q: "Puis-je utiliser l'abonnement sur plusieurs appareils simultanément ?", a: "Oui, nos offres multi-appareils permettent jusqu'à 3 connexions simultanées pour que toute la famille puisse regarder différentes chaînes en même temps." },
    { q: "Quelle vitesse internet est nécessaire ?", a: "Nous recommandons un minimum de 20 Mbps pour un streaming 4K/HD fluide sans coupure. Pour la qualité SD, 10 Mbps suffisent." },
    { q: "Y a-t-il un essai gratuit disponible ?", a: "Oui, nous offrons un essai gratuit sans carte de crédit pour que vous puissiez vérifier la qualité du service avant de vous abonner. Contactez-nous par WhatsApp." },
    { q: "Les chaînes RTS et Canal+ sont-elles incluses ?", a: "Oui. Varodatic IPTV Suisse comprend toutes les chaînes suisses romandes (RTS Un, RTS Deux, RTS Info), françaises (TF1, France 2, Canal+) ainsi que les chaînes sport internationales." },
    { q: "Combien de temps prend l'activation ?", a: "L'activation est quasi instantanée. Après confirmation du paiement, vous recevez vos identifiants et instructions de configuration par e-mail ou WhatsApp en quelques minutes." },
    { q: "Quel est le prix de Varodatic IPTV en Suisse ?", a: "Les offres commencent à CHF 35 pour 3 mois, CHF 49 pour 6 mois ou CHF 69 pour 12 mois avec 1 connexion. Des offres 2 et 3 connexions avec réduction sont également disponibles. Sans engagement ni contrat." },
  ];

  return (
    <section className="py-24 relative bg-surface border-y border-white/10" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Questions <span className="text-primary">Fréquentes</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Tout ce que vous devez savoir avant de commencer votre essai gratuit Varodatic IPTV Suisse.
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
