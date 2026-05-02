import { Tv, MonitorPlay, Smartphone, Monitor } from "lucide-react";
import Link from "next/link";
import CTAButton from "../shared/CTAButton";

export default function SetupGuides() {
  const guides = [
    { title: "Amazon Firestick", icon: <MonitorPlay className="w-8 h-8 text-primary" />, slug: "how-to-setup-varodatic-iptv-on-firestick" },
    { title: "Smart TV (Samsung/LG)", icon: <Tv className="w-8 h-8 text-primary" />, slug: "best-iptv-players-for-4k-streaming-in-2026" },
    { title: "Android & iOS", icon: <Smartphone className="w-8 h-8 text-primary" />, slug: "best-iptv-players-for-4k-streaming-in-2026" },
    { title: "Windows & Mac", icon: <Monitor className="w-8 h-8 text-primary" />, slug: "best-iptv-players-for-4k-streaming-in-2026" },
  ];

  return (
    <section className="py-20 bg-black" id="guides">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl font-heading font-semibold text-white mb-10 text-center">
          Quick Setup Guides
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide, i) => (
            <div key={i} className="glass p-8 rounded-2xl flex flex-col items-center text-center transition-transform hover:-translate-y-2 hover:border-primary/50">
              <div className="bg-surface rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                {guide.icon}
              </div>
              <h3 className="font-heading font-semibold text-white mb-4">{guide.title}</h3>
              <CTAButton href={`/blog/${guide.slug}`} variant="ghost" className="w-full text-xs">Read Guide</CTAButton>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
