export const WHATSAPP_URL = "https://wa.me/447476603520";
export const WHATSAPP_MESSAGE_URL = 
  "https://wa.me/447476603520?text=Hello%2C%20I%27m%20interested%20in%20Varodatic%20IPTV";

export const siteConfig = {
  brand: {
    name: "Varodatic IPTV",
    tagline: "Stream 26,000+ Channels in 4K — Zero Buffering. Ever.",
    domain: "varodaticiptv.pro",
    language: "en",
    locale: "en_US"
  },
  site_type: "SaaS IPTV Subscription Landing Site",
  app_area_enabled: false,
  target_audience: [
    "Tech-savvy cord-cutters aged 25–55",
    "Sports fans and families",
    "Expats in Morocco and Europe",
    "Users seeking affordable 4K/HD global channels",
    "Multi-device users who value stability and no-contract plans"
  ],
  seo: {
    focus_keyword: "varodatic iptv",
    related_keywords: [
      "best iptv subscription 2026",
      "iptv 4k streaming service",
      "iptv provider no buffering",
      "buy iptv subscription online",
      "iptv 26000 channels",
      "iptv free trial",
      "iptv for firestick android smart tv",
      "iptv service morocco europe",
      "iptv monthly plan no contract",
      "iptv vod subscription",
      "stable iptv service 99.9 uptime",
      "cheap iptv subscription 2026",
      "iptv multi device support",
      "varodatic iptv review",
      "varodatic iptv pricing"
    ]
  },
  nav: {
    type: "sticky",
    links: [
      { name: "Home", href: "/" },
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Blog", href: "/blog" },
      { name: "Support", href: "/support" }
    ],
    cta: "Start Free Trial",
    mobile: "hamburger drawer",
    login_button: false
  },
  features: [
    "26,000+ Live Channels",
    "4K / FHD / HD Quality",
    "Video On Demand (VOD)",
    "Multi-Device Support (up to 3 connections)",
    "99.9% Server Uptime",
    "24/7 Live Support",
    "EPG TV Guide included",
    "Works on all major devices"
  ],
  integrations: {
    payments: "Stripe",
    analytics: "Google Analytics 4",
    support_chat: "WhatsApp + Telegram floating widget",
    cookie: "GDPR cookie banner"
  },
  performance_targets: {
    lcp: "< 2.5s",
    fid: "< 100ms",
    cls: "< 0.1",
    page_load: "< 2s"
  }
};
