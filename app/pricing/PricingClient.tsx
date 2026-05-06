"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight, Shield, CreditCard, Smartphone } from "lucide-react";
import FAQAccordion from "@/components/home/FAQAccordion";

const plans = [
  {
    name: "Basic",
    monthly: 9.99,
    annual: 5.99,
    devices: 1,
    quality: "HD",
    popular: false,
    features: [
      { label: "1 Connection / Device", ok: true },
      { label: "HD Quality (720p)", ok: true },
      { label: "10,000+ Live Channels", ok: true },
      { label: "EPG TV Guide", ok: true },
      { label: "Email Support", ok: true },
      { label: "FHD / 4K Quality", ok: false },
      { label: "Video On Demand", ok: false },
      { label: "Multi-Screen", ok: false },
      { label: "24/7 Priority Support", ok: false },
    ],
  },
  {
    name: "Standard",
    monthly: 14.99,
    annual: 8.99,
    devices: 3,
    quality: "FHD",
    popular: true,
    features: [
      { label: "3 Connections / Devices", ok: true },
      { label: "FHD Quality (1080p)", ok: true },
      { label: "20,000+ Live Channels", ok: true },
      { label: "EPG TV Guide", ok: true },
      { label: "Video On Demand", ok: true },
      { label: "24/7 Priority Support", ok: true },
      { label: "Anti-Freeze Technology", ok: true },
      { label: "4K Ultra HD", ok: false },
      { label: "5-Screen Multi-View", ok: false },
    ],
  },
  {
    name: "Premium",
    monthly: 19.99,
    annual: 11.99,
    devices: 5,
    quality: "4K",
    popular: false,
    features: [
      { label: "5 Connections / Devices", ok: true },
      { label: "4K Ultra HD Quality", ok: true },
      { label: "26,000+ Live Channels", ok: true },
      { label: "EPG TV Guide", ok: true },
      { label: "80,000+ VOD Library", ok: true },
      { label: "24/7 VIP Support", ok: true },
      { label: "Anti-Freeze Technology", ok: true },
      { label: "Dedicated Server Access", ok: true },
      { label: "PPV Events Included", ok: true },
    ],
  },
];

const deviceTypes = ["Smart TV", "Android / iOS", "Windows / Mac", "FireStick", "MAG Box", "Other"];

function UpsellModal({ onClose, onAccept }: { onClose: () => void; onAccept: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="glass-card p-8 max-w-md w-full text-center"
      >
        <div className="w-16 h-16 rounded-full bg-[#00E5FF]/20 border border-[#00E5FF]/30 flex items-center justify-center mx-auto mb-5">
          <span className="text-3xl">💡</span>
        </div>
        <h3 className="font-heading font-bold text-2xl text-white mb-3">
          Save 40% with Annual Billing
        </h3>
        <p className="text-[#A0A0A0] mb-2">
          Switch to annual and save over{" "}
          <span className="text-[#00E5FF] font-bold">$48/year</span>.
        </p>
        <p className="text-[#A0A0A0] text-sm mb-8">
          That&apos;s like getting 5 months free.
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={onAccept}
            className="w-full bg-[#00E5FF] text-black font-heading font-bold py-3.5 rounded-full hover:bg-[#00b8cc] transition-colors shadow-[0_0_30px_rgba(0,229,255,0.3)]"
          >
            Yes — Switch to Annual →
          </button>
          <button
            onClick={onClose}
            className="w-full text-[#A0A0A0] text-sm hover:text-white transition-colors py-2"
          >
            No thanks, stay monthly
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PricingClient() {
  const [annual, setAnnual] = useState(false);
  const [showUpsell, setShowUpsell] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", device: "" });
  const [submitted, setSubmitted] = useState(false);

  const handlePlanSelect = () => {
    if (!annual) setShowUpsell(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <AnimatePresence>
        {showUpsell && (
          <UpsellModal
            onClose={() => setShowUpsell(false)}
            onAccept={() => { setAnnual(true); setShowUpsell(false); }}
          />
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-black pt-24 pb-20" suppressHydrationWarning>
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#00E5FF] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Transparent Pricing
            </span>
            <h1 className="font-heading font-extrabold text-5xl md:text-6xl text-white mb-5">
              Choose Your Plan
            </h1>
            <p className="text-[#A0A0A0] text-xl max-w-2xl mx-auto mb-10">
              All plans include a free trial. No credit card needed to get started.
            </p>
            {/* Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm font-medium ${!annual ? "text-white" : "text-[#A0A0A0]"}`}>Monthly</span>
              <button
                onClick={() => setAnnual(!annual)}
                className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${annual ? "bg-[#00E5FF]" : "bg-white/10"}`}
                aria-label="Toggle annual billing"
              >
                <motion.span
                  layout
                  className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md"
                  animate={{ x: annual ? 26 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
              <span className={`text-sm font-medium flex items-center gap-2 ${annual ? "text-white" : "text-[#A0A0A0]"}`}>
                Annual
                <span className="bg-[#FF00E5]/20 text-[#FF00E5] text-xs font-bold px-2 py-0.5 rounded-full border border-[#FF00E5]/30">
                  Save 40%
                </span>
              </span>
            </div>
          </motion.div>
        </div>

        {/* Plan cards */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              className={`relative rounded-2xl border p-7 flex flex-col ${
                plan.popular
                  ? "border-[#00E5FF]/40 bg-gradient-to-b from-[#111]/80 to-[#0a1a12]/80 shadow-[0_0_60px_rgba(0,229,255,0.12)]"
                  : "border-white/8 bg-[#111]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#FF00E5] text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                    ⭐ MOST POPULAR
                  </span>
                </div>
              )}
              <h2 className="font-heading font-bold text-xl text-white mb-1">{plan.name}</h2>
              <div className="flex items-baseline gap-1 mt-3 mb-1">
                <motion.span
                  key={`${plan.name}-${annual}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-heading font-extrabold text-5xl text-white"
                >
                  ${annual ? plan.annual : plan.monthly}
                </motion.span>
                <span className="text-[#A0A0A0] text-sm">/mo</span>
              </div>
              {annual && (
                <p className="text-[#00E5FF] text-xs mb-1">
                  Billed ${(plan.annual * 12).toFixed(2)}/yr — save ${((plan.monthly - plan.annual) * 12).toFixed(0)}
                </p>
              )}
              <p className="text-[#A0A0A0] text-sm mb-6">
                {plan.devices} device{plan.devices > 1 ? "s" : ""} · {plan.quality} Quality
              </p>
              <ul className="space-y-2.5 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f.label} className={`flex items-center gap-3 text-sm ${f.ok ? "text-white" : "text-[#A0A0A0]/40"}`}>
                    {f.ok
                      ? <Check className="w-4 h-4 text-[#00E5FF] flex-shrink-0" />
                      : <X className="w-4 h-4 text-red-500/50 flex-shrink-0" />
                    }
                    {f.label}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/447828708540?text=Hello%2C%20I%20want%20to%20subscribe%20to%20Varodatic%20IPTV"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 px-6 rounded-xl bg-primary text-black font-bold hover:opacity-90 transition-all duration-300"
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="max-w-4xl mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Shield, title: "Secure Payments", desc: "SSL encrypted. Your data is always safe." },
              { icon: CreditCard, title: "No Credit Card Needed", desc: "Start your free trial with just an email." },
              { icon: Smartphone, title: "Instant Activation", desc: "Get your credentials within 60 seconds." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-4 p-5 bg-[#111] rounded-xl border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#00E5FF]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm mb-1">{item.title}</p>
                    <p className="text-[#A0A0A0] text-xs">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trial signup form */}
        <div className="max-w-xl mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h2 className="font-heading font-bold text-2xl text-white mb-2 text-center">
              Start Your Free Trial
            </h2>
            <p className="text-[#A0A0A0] text-sm text-center mb-7">
              Free trial, full access. No card required.
            </p>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">You&apos;re in!</h3>
                <p className="text-[#A0A0A0] text-sm">Check your email for your trial credentials within 60 seconds.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="trial-name" className="block text-xs text-[#A0A0A0] mb-2 font-medium uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    id="trial-name"
                    type="text"
                    required
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[#A0A0A0]/50 focus:outline-none focus:border-[#00E5FF]/40 focus:ring-1 focus:ring-[#00E5FF]/20 transition-all text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="trial-email" className="block text-xs text-[#A0A0A0] mb-2 font-medium uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    id="trial-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[#A0A0A0]/50 focus:outline-none focus:border-[#00E5FF]/40 focus:ring-1 focus:ring-[#00E5FF]/20 transition-all text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="trial-device" className="block text-xs text-[#A0A0A0] mb-2 font-medium uppercase tracking-wide">
                    Primary Device
                  </label>
                  <select
                    id="trial-device"
                    required
                    value={formData.device}
                    onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00E5FF]/40 focus:ring-1 focus:ring-[#00E5FF]/20 transition-all text-sm"
                  >
                    <option value="" disabled>Select your device...</option>
                    {deviceTypes.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <a
                  href="https://wa.me/447828708540?text=Hello%2C%20I%20want%20to%20start%20the%20free%20trial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-black transition-all duration-300 text-center w-full"
                >
                  Start Free Trial
                </a>
                <p className="text-center text-xs text-[#A0A0A0]">
                  By signing up, you agree to our{" "}
                  <a href="#" className="text-[#00E5FF] hover:underline">Terms</a> and{" "}
                  <a href="#" className="text-[#00E5FF] hover:underline">Privacy Policy</a>.
                </p>
              </form>
            )}
          </motion.div>
        </div>

        <FAQAccordion />
      </div>
    </>
  );
}
