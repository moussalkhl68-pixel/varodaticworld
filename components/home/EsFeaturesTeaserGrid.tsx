import { Tv, MonitorPlay, Infinity, ShieldCheck, Smartphone, Zap } from "lucide-react";

export default function EsFeaturesTeaserGrid() {
  const features = [
    { icon: <MonitorPlay className="w-8 h-8 text-primary" />, title: "26.000+ Canales en Vivo", desc: "Accede a canales de deportes, noticias y entretenimiento de todo el mundo, incluyendo España y Latinoamérica." },
    { icon: <Tv className="w-8 h-8 text-primary" />, title: "Calidad 4K / FHD / HD", desc: "Streaming Ultra HD con tecnología de tasa de bits adaptativa para un rendimiento óptimo en cualquier conexión." },
    { icon: <Infinity className="w-8 h-8 text-primary" />, title: "Vídeo Bajo Demanda (VOD)", desc: "Más de 80.000 películas y series actualizadas diariamente, sin coste adicional." },
    { icon: <Zap className="w-8 h-8 text-primary" />, title: "Sin Buffering", desc: "Servidores de alto rendimiento que garantizan una experiencia fluida sin cortes ni interrupciones." },
    { icon: <Smartphone className="w-8 h-8 text-primary" />, title: "Soporte Multidispositivo", desc: "Funciona en Firestick, Smart TV, Android, iOS y PC bajo una misma suscripción." },
    { icon: <ShieldCheck className="w-8 h-8 text-primary" />, title: "99,9% de Disponibilidad", desc: "Infraestructura de nivel empresarial para una visualización ininterrumpida en todo momento." },
  ];

  return (
    <section className="py-24 relative bg-background" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            ¿Por qué elegir <span className="text-primary">Varodatic IPTV</span>?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Todo lo que necesitas para una experiencia de streaming premium — canales en vivo globales, VOD en 4K y cero buffering.
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
