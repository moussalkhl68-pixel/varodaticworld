import { Tv, MonitorPlay, Infinity, ShieldCheck, Smartphone, Zap } from "lucide-react";

export default function DeFeaturesTeaserGrid() {
  const features = [
    { icon: <MonitorPlay className="w-8 h-8 text-primary" />, title: "26'000+ Live-Sender", desc: "Schweizer Sender wie SRF 1, SRF 2, 3sat sowie internationale Sport-, Nachrichten- und Unterhaltungskanäle weltweit." },
    { icon: <Tv className="w-8 h-8 text-primary" />, title: "4K / FHD / HD Qualität", desc: "Ultra-HD-Streaming mit adaptiver Bitrate-Technologie für optimale Leistung bei jeder Verbindung." },
    { icon: <Infinity className="w-8 h-8 text-primary" />, title: "Video on Demand (VOD)", desc: "Über 80'000 Filme und Serien — täglich aktualisiert, ohne Aufpreis." },
    { icon: <Zap className="w-8 h-8 text-primary" />, title: "Kein Buffering", desc: "Hochleistungsserver für ein ruckelfreies Streaming-Erlebnis — auch bei PPV-Events." },
    { icon: <Smartphone className="w-8 h-8 text-primary" />, title: "Multi-Device Support", desc: "Funktioniert auf Firestick, Smart TV, Android, iOS und PC mit einem einzigen Abonnement." },
    { icon: <ShieldCheck className="w-8 h-8 text-primary" />, title: "99,9% Verfügbarkeit", desc: "Enterprise-Infrastruktur für ununterbrochenes Streaming zu jeder Tages- und Nachtzeit." },
  ];

  return (
    <section className="py-24 relative bg-background" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Warum <span className="text-primary">Varodatic IPTV Schweiz</span>?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Alles für ein Premium-Streaming-Erlebnis — globale Live-Sender, 4K-VOD und kein Buffering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="glass border border-white/5 bg-surface p-8 rounded-[24px] hover:border-primary/30 transition-colors group cursor-default">
              <div className="mb-6 group-hover:scale-110 transition-transform drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
