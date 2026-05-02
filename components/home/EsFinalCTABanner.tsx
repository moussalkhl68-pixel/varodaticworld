import CTAButton from "../shared/CTAButton";

export default function EsFinalCTABanner() {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-primary/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center glass rounded-[3rem] p-12 md:p-20 shadow-[0_0_50px_rgba(0,255,136,0.1)] border border-primary/20">
        <div className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
          ¿Listo para Mejorar Tu <span className="text-primary">Experiencia de TV?</span>
        </div>
        <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
          Prueba gratuita, sin tarjeta de crédito. Únete a más de 154.000 clientes satisfechos hoy y nunca vuelvas a perderte un partido.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/447476603520?text=Hola%2C%20quiero%20iniciar%20la%20prueba%20gratuita%20de%20Varodatic%20IPTV"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-black transition-all duration-300 w-full sm:w-auto text-center"
          >
            Iniciar Prueba Gratis
          </a>
          <CTAButton href="/es/pricing" variant="ghost" className="px-8 py-4 text-lg w-full sm:w-auto">
            Ver Todos los Planes
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
