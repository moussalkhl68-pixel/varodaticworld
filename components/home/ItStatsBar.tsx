"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function ItStatsBar() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const stats = [
    { label: "Utenti Attivi", value: 154000, suffix: "+" },
    { label: "Canali in Diretta", value: 26000, suffix: "+" },
    { label: "Titoli VOD", value: 100000, suffix: "+" },
    { label: "Disponibilità", value: 99.9, suffix: "%" },
  ];

  return (
    <section className="py-20 relative bg-surface2 border-y border-white/10" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold text-white mb-2 tracking-tighter drop-shadow-sm flex justify-center items-center">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    separator="."
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                  />
                ) : (
                  "0"
                )}
                <span className="text-primary ml-1">{stat.suffix}</span>
              </div>
              <div className="text-sm md:text-base text-muted uppercase tracking-widest font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
