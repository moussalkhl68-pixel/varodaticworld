import { MonitorPlay, Tv, Infinity, ShieldCheck, Zap, Globe, Ticket, CalendarDays } from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    { icon: <MonitorPlay className="w-8 h-8 text-primary" />, title: "26,000+ Live Channels", desc: "Enjoy an endless array of premium channels from over 115 countries. From local news to international sports networks and classic cinema, there is always something to watch." },
    { icon: <Tv className="w-8 h-8 text-primary" />, title: "Native 4K & FHD Quality", desc: "No more pixelation. Our adaptive bitrate technology ensures the highest possible resolution (up to 4K) based on your internet connection." },
    { icon: <Infinity className="w-8 h-8 text-primary" />, title: "Massive VOD Library", desc: "Access over 100,000 movies and TV series on demand. Our catalog is updated weekly with the latest releases directly from top streaming platforms." },
    { icon: <Zap className="w-8 h-8 text-primary" />, title: "AntiFreez Technology", desc: "Our proprietary AntiFreez tech relies on load-balanced servers across Europe and America to guarantee zero buffering during peak traffic events." },
    { icon: <ShieldCheck className="w-8 h-8 text-primary" />, title: "99.9% Uptime SLA", desc: "We run a redundant network infrastructure meaning if one server goes down, another instantly takes its place without you noticing." },
    { icon: <Ticket className="w-8 h-8 text-primary" />, title: "All Premium PPV Events", desc: "UFC, Boxing, WWE, and all major PPV events are included in all of our subscription packages at no additional cost to you." },
    { icon: <Globe className="w-8 h-8 text-primary" />, title: "No Geo-Restrictions", desc: "Watch exactly what you pay for from anywhere in the world. Whether you're at home in the US or vacationing in Europe, your subscription has no borders." },
    { icon: <CalendarDays className="w-8 h-8 text-primary" />, title: "7-Day Catch-Up TV", desc: "Missed your favorite show? Rewind up to 7 days on over 500 premium channels so you always stay caught up." },
  ];

  return (
    <section className="py-20 relative bg-black" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="glass p-8 rounded-2xl border-white/10 hover:border-primary/50 transition-colors group">
              <div className="bg-surface rounded-full w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(0,255,136,0.1)]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-muted leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
