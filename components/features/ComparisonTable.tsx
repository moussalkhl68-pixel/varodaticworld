import { CheckCircle2, XCircle } from "lucide-react";
import CTAButton from "../shared/CTAButton";

export default function ComparisonTable() {
  const rows = [
    { feature: "Live Channels", us: "26,000+", them: "5,000 - 10,000", cable: "200 - 500" },
    { feature: "4K / UHD Quality", us: true, them: false, cable: "Extra Fee" },
    { feature: "VOD Titles", us: "100,000+", them: "10,000+", cable: "Limited" },
    { feature: "PPV Events", us: "Included", them: "Extra Fee", cable: "$60+ per event" },
    { feature: "Multi-Device", us: "Up to 3", them: "1 Device Only", cable: "Requires Extra Box" },
    { feature: "No Buffering SLA", us: true, them: false, cable: true },
    { feature: "Setup Guarantees", us: "Instant", them: "24-48 Hours", cable: "Waiting for Technician" },
    { feature: "Contracts", us: "None", them: "Mixed", cable: "12 - 24 Months" },
  ];

  return (
    <section className="py-24 relative bg-surface2 border-t border-white/10" id="compare">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            See How We <span className="text-primary">Compare.</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Why pay more for less? See how Varodatic stacks up against regular IPTV providers and traditional cable.
          </p>
        </div>

        <div className="overflow-x-auto pb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4 border-b border-white/10 text-muted font-medium uppercase text-sm tracking-wider w-1/4">Features</th>
                <th className="p-4 border-b-2 border-primary bg-primary/10 rounded-t-xl text-primary font-heading font-bold text-xl text-center w-1/4">Varodatic IPTV</th>
                <th className="p-4 border-b border-white/10 text-white font-heading font-semibold text-lg text-center w-1/4">Other IPTVs</th>
                <th className="p-4 border-b border-white/10 text-white font-heading font-semibold text-lg text-center w-1/4">Traditional Cable</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="hover:bg-black/40 transition-colors">
                  <td className="p-4 border-b border-white/10 text-white font-medium">
                    {row.feature}
                  </td>
                  
                  {/* Us */}
                  <td className="p-4 border-b border-white/10 border-x border-primary/20 bg-primary/5 text-center font-semibold text-white">
                    {row.us === true ? (
                      <CheckCircle2 className="w-6 h-6 text-primary mx-auto" />
                    ) : (
                      <span className={row.us === "None" ? "text-primary" : ""}>{row.us}</span>
                    )}
                  </td>
                  
                  {/* Them */}
                  <td className="p-4 border-b border-white/10 text-center text-muted">
                    {row.them === true ? (
                      <CheckCircle2 className="w-6 h-6 text-muted mx-auto" />
                    ) : row.them === false ? (
                      <XCircle className="w-5 h-5 text-accent mx-auto" />
                    ) : (
                      row.them
                    )}
                  </td>
                  
                  {/* Cable */}
                  <td className="p-4 border-b border-white/10 text-center text-muted">
                    {row.cable === true ? (
                      <CheckCircle2 className="w-6 h-6 text-muted mx-auto" />
                    ) : (
                      row.cable
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="text-center mt-12">
          <CTAButton href="/pricing" icon className="px-8 py-4">
            Start Streaming Today
          </CTAButton>
        </div>

      </div>
    </section>
  );
}
