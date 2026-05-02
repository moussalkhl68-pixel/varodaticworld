import { Tv, MonitorPlay, Infinity, ShieldCheck, Smartphone, Zap } from "lucide-react";

export default function FeaturesTeaserGrid() {
  const features = [
    { icon: <MonitorPlay className="w-8 h-8 text-primary" />, title: "26,000+ Live Channels", desc: "Access premium sports, news, and entertainment globally." },
    { icon: <Tv className="w-8 h-8 text-primary" />, title: "4K / FHD / HD Quality", desc: "Crystal clear streams with adaptive bitrate technology." },
    { icon: <Infinity className="w-8 h-8 text-primary" />, title: "Video On Demand (VOD)", desc: "80,000+ latest movies and series updated daily." },
    { icon: <Zap className="w-8 h-8 text-primary" />, title: "Zero Buffering", desc: "High-performance servers guarantee a smooth experience." },
    { icon: <Smartphone className="w-8 h-8 text-primary" />, title: "Multi-Device Support", desc: "Watch on Firestick, Smart TVs, Android, iOS, and PC." },
    { icon: <ShieldCheck className="w-8 h-8 text-primary" />, title: "99.9% Uptime", desc: "Enterprise-grade infrastructure for uninterrupted viewing." },
  ];

  return (
    <section className="py-24 relative bg-background" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Why Choose <span className="text-primary">Varodatic IPTV</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Everything you need for a premium streaming experience — from live global channels to 4K VOD and zero buffering.
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
