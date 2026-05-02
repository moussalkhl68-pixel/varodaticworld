import { Tv, MonitorPlay, Infinity, ShieldCheck, Smartphone, Zap } from "lucide-react";

export default function ItFeaturesTeaserGrid() {
  const features = [
    { icon: <MonitorPlay className="w-8 h-8 text-primary" />, title: "26.000+ Canali in Diretta", desc: "Canali svizzeri italiani (RSI LA 1, RSI LA 2), italiani (Rai 1, Rai 2, Mediaset) e internazionali da tutto il mondo." },
    { icon: <Tv className="w-8 h-8 text-primary" />, title: "Qualità 4K / FHD / HD", desc: "Streaming Ultra HD con tecnologia bitrate adattivo per prestazioni ottimali su qualsiasi connessione." },
    { icon: <Infinity className="w-8 h-8 text-primary" />, title: "Video on Demand (VOD)", desc: "Oltre 80.000 film e serie aggiornati quotidianamente, senza costo aggiuntivo." },
    { icon: <Zap className="w-8 h-8 text-primary" />, title: "Nessun Buffering", desc: "Server ad alte prestazioni per un'esperienza di streaming fluida senza interruzioni." },
    { icon: <Smartphone className="w-8 h-8 text-primary" />, title: "Multi-Dispositivo", desc: "Funziona su Firestick, Smart TV, Android, iOS e PC con un singolo abbonamento." },
    { icon: <ShieldCheck className="w-8 h-8 text-primary" />, title: "99,9% di Disponibilità", desc: "Infrastruttura enterprise per una visione ininterrotta in qualsiasi momento." },
  ];

  return (
    <section className="py-24 relative bg-background" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Perché scegliere <span className="text-primary">Varodatic IPTV Svizzera</span>?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Tutto ciò che ti serve per un&apos;esperienza di streaming premium — canali mondiali in diretta, VOD in 4K e nessun buffering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="glass border border-white/5 bg-surface p-8 rounded-[24px] hover:border-primary/30 transition-colors group cursor-default">
              <div className="mb-6 group-hover:scale-110 transition-transform drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-muted leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
