"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState, useEffect } from "react";

export default function DeHeroSection() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] opacity-70 z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] opacity-70 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12">

        <div className="flex-1 text-left">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-surface/80 shadow-[0_0_15px_rgba(217,70,239,0.15)] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-white uppercase">Live: Bundesliga & Champions League 4K</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white mb-6 leading-tight"
          >
            Varodatic IPTV Schweiz — 26&apos;000+ Sender in 4K | Gratis Testen<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Kein Buffering. Niemals.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted text-lg max-w-xl mb-10 leading-relaxed"
          >
            Varodatic bietet dir Premium-IPTV mit über 26&apos;000 Live-Sendern — SRF 1, SRF 2, DAZN Schweiz, Sky Sport und viele mehr — 80&apos;000+ VOD-Titel und kristallklares 4K-Streaming. Kein Buffering, sofortige Aktivierung, gratis Testversion inklusive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/447476603520?text=Hallo%2C%20ich%20m%C3%B6chte%20Varodatic%20IPTV%20Schweiz%20kostenlos%20testen"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-trial-de"
              className="inline-flex justify-center items-center px-8 py-4 rounded-xl bg-primary text-black font-bold text-lg hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all duration-300 w-full sm:w-auto"
            >
              Gratis Testen
            </a>
            <a
              href="/de-ch/pricing"
              id="hero-cta-pricing-de"
              className="inline-flex justify-center items-center px-8 py-4 rounded-xl border border-white/10 bg-surface/50 text-white font-semibold text-lg hover:bg-surface transition-all duration-300 w-full sm:w-auto group"
            >
              <Play className="w-5 h-5 mr-2 text-primary group-hover:scale-110 transition-transform" />
              Pakete ansehen
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 w-full relative"
        >
          <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/images/premium-iptv-hero-new.png"
              alt="Varodatic IPTV Schweiz — Über 26'000 Live-Sender in 4K ohne Buffering"
              fill
              className="object-cover opacity-90 mix-blend-lighten"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="text-primary text-xs font-bold tracking-widest uppercase mb-1 block">Jetzt läuft</span>
              <div className="text-white text-2xl font-bold font-heading">The Protocol: Origins</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
