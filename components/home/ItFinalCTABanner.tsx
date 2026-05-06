export default function ItFinalCTABanner() {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-primary/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center glass rounded-[3rem] p-12 md:p-20 shadow-[0_0_50px_rgba(0,255,136,0.1)] border border-primary/20">
        <div className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
          Pronto a Migliorare la tua <span className="text-primary">Esperienza TV?</span>
        </div>
        <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
          Prova gratuita, senza carta di credito. Unisciti a oltre 154.000 clienti soddisfatti e non perdere mai più una partita.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/447828708540?text=Ciao%2C%20voglio%20provare%20Varodatic%20IPTV%20Svizzera%20gratuitamente"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-black transition-all duration-300 w-full sm:w-auto text-center"
          >
            Prova Gratuita
          </a>
          <a
            href="/it-ch/pricing"
            className="inline-flex justify-center items-center px-8 py-4 text-lg rounded-xl border border-white/10 text-white font-semibold hover:bg-surface transition-all duration-300 w-full sm:w-auto"
          >
            Vedi Tutti i Piani
          </a>
        </div>
      </div>
    </section>
  );
}
