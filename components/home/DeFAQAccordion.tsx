"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function DeFAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Was ist Varodatic IPTV Schweiz und wie funktioniert es?", a: "Varodatic IPTV Schweiz ist ein Premium-Streaming-Service mit über 26'000 Live-Sendern — darunter SRF 1, SRF 2, SRF info, 3sat, Pro7, SAT.1, DAZN Schweiz und viele mehr — sowie einer umfangreichen VOD-Bibliothek und vollständigen Sportpaketen, alles über deine Internetverbindung." },
    { q: "Auf welchen Geräten funktioniert Varodatic IPTV?", a: "Kompatibel mit Amazon Firestick, Android TV, Samsung Smart TV, LG Smart TV, iOS, Android, Windows, Mac, MAG Box und Enigma2-Receivern. Die Einrichtung dauert auf jedem Gerät weniger als 5 Minuten." },
    { q: "Kann ich das Abonnement auf mehreren Geräten gleichzeitig nutzen?", a: "Ja, unsere Multi-Device-Pakete erlauben bis zu 3 gleichzeitige Verbindungen, damit die ganze Familie verschiedene Sender gleichzeitig schauen kann." },
    { q: "Welche Internetgeschwindigkeit benötige ich?", a: "Wir empfehlen mindestens 20 Mbps für flüssiges 4K/HD-Streaming ohne Buffering. Für SD-Qualität reichen 10 Mbps." },
    { q: "Gibt es eine kostenlose Testversion?", a: "Ja, wir bieten eine kostenlose Testversion ohne Kreditkarte an, damit du die Servicequalität vor dem Abonnement prüfen kannst. Kontaktiere uns per WhatsApp." },
    { q: "Sind Schweizer Sender wie SRF und 3sat inklusive?", a: "Ja. Varodatic IPTV Schweiz enthält alle wichtigen Schweizer Sender (SRF 1, SRF 2, SRF info, 3sat), deutschsprachige Sender (Pro7, SAT.1, RTL, ARD, ZDF) sowie internationale Sport- und Unterhaltungskanäle." },
    { q: "Wie lange dauert die Aktivierung?", a: "Die Aktivierung erfolgt praktisch sofort. Nach Zahlungsbestätigung erhältst du deine Zugangsdaten und Einrichtungsanleitung per E-Mail oder WhatsApp innerhalb von Minuten." },
    { q: "Was kostet Varodatic IPTV in der Schweiz?", a: "Die Pakete beginnen ab CHF 35 für 3 Monate, CHF 49 für 6 Monate oder CHF 69 für 12 Monate mit 1 Verbindung. Auch Pakete für 2 und 3 gleichzeitige Verbindungen mit Rabatt verfügbar. Ohne Vertrag oder Mindestlaufzeit." },
  ];

  return (
    <section className="py-24 relative bg-surface border-y border-white/10" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Häufig gestellte <span className="text-primary">Fragen</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Alles, was du wissen musst, bevor du Varodatic IPTV Schweiz gratis testest.
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
