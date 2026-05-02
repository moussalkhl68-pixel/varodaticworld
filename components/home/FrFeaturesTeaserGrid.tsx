import { Tv, MonitorPlay, Infinity, ShieldCheck, Smartphone, Zap } from "lucide-react";

export default function FrFeaturesTeaserGrid() {
  const features = [
    { icon: <MonitorPlay className="w-8 h-8 text-primary" />, title: "26'000+ Chaînes en Direct", desc: "Chaînes suisses romandes (RTS Un, RTS Deux, RTS Info), françaises (TF1, France 2) et internationales du monde entier." },
    { icon: <Tv className="w-8 h-8 text-primary" />, title: "Qualité 4K / FHD / HD", desc: "Streaming Ultra HD avec technologie de débit adaptatif pour des performances optimales sur toute connexion." },
    { icon: <Infinity className="w-8 h-8 text-primary" />, title: "Vidéo à la Demande (VOD)", desc: "Plus de 80'000 films et séries mis à jour quotidiennement, sans coût supplémentaire." },
    { icon: <Zap className="w-8 h-8 text-primary" />, title: "Zéro Coupure", desc: "Serveurs haute performance garantissant une expérience fluide sans interruptions ni buffering." },
    { icon: <Smartphone className="w-8 h-8 text-primary" />, title: "Multi-Appareils", desc: "Fonctionne sur Firestick, Smart TV, Android, iOS et PC avec un seul abonnement." },
    { icon: <ShieldCheck className="w-8 h-8 text-primary" />, title: "99,9% de Disponibilité", desc: "Infrastructure de niveau entreprise pour un visionnage ininterrompu à tout moment." },
  ];

  return (
    <section className="py-24 relative bg-background" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Pourquoi choisir <span className="text-primary">Varodatic IPTV Suisse</span> ?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Tout ce qu&apos;il faut pour un streaming premium — chaînes mondiales en direct, VOD en 4K et zéro coupure.
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
