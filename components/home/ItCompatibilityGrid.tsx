export default function ItCompatibilityGrid() {
  const devices = [
    { name: "Smart TV", icon: "📺" },
    { name: "Android Box", icon: "🤖" },
    { name: "Amazon Firestick", icon: "🔥" },
    { name: "Apple TV", icon: "🍎" },
    { name: "Smartphones", icon: "📱" },
    { name: "Windows / Mac", icon: "💻" },
  ];

  return (
    <section className="py-24 relative bg-surface border-y border-white/10" id="dispositivi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Compatibile con <span className="text-primary">tutti i tuoi dispositivi.</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Che tu sia a casa sul grande schermo o in viaggio con lo smartphone, il tuo abbonamento Varodatic ti accompagna sempre. Collega fino a 3 dispositivi contemporaneamente con i nostri piani premium.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {devices.map((d, i) => (
            <div key={i} className="glass p-6 rounded-2xl flex flex-col items-center justify-center hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl mb-4 grayscale hover:grayscale-0 transition-all">{d.icon}</div>
              <h3 className="font-heading font-semibold text-white text-sm whitespace-nowrap">{d.name}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
