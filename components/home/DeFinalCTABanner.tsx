export default function DeFinalCTABanner() {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-primary/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center glass rounded-[3rem] p-12 md:p-20 shadow-[0_0_50px_rgba(0,255,136,0.1)] border border-primary/20">
        <div className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
          Bereit für ein besseres <span className="text-primary">TV-Erlebnis?</span>
        </div>
        <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
          Kostenlose Testversion, ohne Kreditkarte. Schliess dich über 154.000 zufriedenen Kunden an und verpasse nie wieder ein Spiel.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/447476603520?text=Hallo%2C%20ich%20m%C3%B6chte%20Varodatic%20IPTV%20Schweiz%20kostenlos%20testen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-black transition-all duration-300 w-full sm:w-auto text-center"
          >
            Gratis Testen
          </a>
          <a
            href="/de-ch/pricing"
            className="inline-flex justify-center items-center px-8 py-4 text-lg rounded-xl border border-white/10 text-white font-semibold hover:bg-surface transition-all duration-300 w-full sm:w-auto"
          >
            Alle Pakete ansehen
          </a>
        </div>
      </div>
    </section>
  );
}
