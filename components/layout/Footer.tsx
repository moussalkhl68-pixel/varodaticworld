"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { MessageCircle, Mail, Globe } from "lucide-react";
import { usePathname } from "next/navigation";

const localePages = [
  { code: "en", label: "English", flag: "🇬🇧", home: "/", pricing: "/pricing", blog: "/blog" },
  { code: "es", label: "Español", flag: "🇪🇸", home: "/es", pricing: "/es/pricing", blog: "/es/blog" },
  { code: "de-ch", label: "Deutsch (CH)", flag: "🇨🇭", home: "/de-ch", pricing: "/de-ch/pricing", blog: "/blog" },
  { code: "fr-ch", label: "Français (CH)", flag: "🇨🇭", home: "/fr-ch", pricing: "/fr-ch/pricing", blog: "/blog" },
  { code: "it-ch", label: "Italiano (CH)", flag: "🇨🇭", home: "/it-ch", pricing: "/it-ch/pricing", blog: "/blog" },
];

function getLocale(pathname: string) {
  if (pathname.startsWith("/de-ch")) return "de-ch";
  if (pathname.startsWith("/fr-ch")) return "fr-ch";
  if (pathname.startsWith("/it-ch")) return "it-ch";
  if (pathname.startsWith("/es")) return "es";
  return "en";
}

const i18n = {
  en: {
    pages: "Pages",
    resources: "Resources",
    languages: "Languages",
    contact: "Contact",
    copyright: "All rights reserved.",
    setupGuides: "Setup Guides",
    faq: "FAQ",
  },
  es: {
    pages: "Páginas",
    resources: "Recursos",
    languages: "Idiomas",
    contact: "Contacto",
    copyright: "Todos los derechos reservados.",
    setupGuides: "Guías de Configuración",
    faq: "Preguntas Frecuentes",
  },
  "de-ch": {
    pages: "Seiten",
    resources: "Ressourcen",
    languages: "Sprachen",
    contact: "Kontakt",
    copyright: "Alle Rechte vorbehalten.",
    setupGuides: "Einrichtungsanleitungen",
    faq: "Häufige Fragen",
  },
  "fr-ch": {
    pages: "Pages",
    resources: "Ressources",
    languages: "Langues",
    contact: "Contact",
    copyright: "Tous droits réservés.",
    setupGuides: "Guides d'installation",
    faq: "Questions fréquentes",
  },
  "it-ch": {
    pages: "Pagine",
    resources: "Risorse",
    languages: "Lingue",
    contact: "Contatto",
    copyright: "Tutti i diritti riservati.",
    setupGuides: "Guide di configurazione",
    faq: "Domande frequenti",
  },
};

const localeNavLinks: Record<string, { name: string; href: string }[]> = {
  en: siteConfig.nav.links,
  es: [
    { name: "Inicio", href: "/es" },
    { name: "Características", href: "/es#features" },
    { name: "Precios", href: "/es/pricing" },
    { name: "Blog", href: "/es/blog" },
    { name: "Soporte", href: "/support" },
  ],
  "de-ch": [
    { name: "Start", href: "/de-ch" },
    { name: "Funktionen", href: "/de-ch#features" },
    { name: "Preise", href: "/de-ch/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Support", href: "/support" },
  ],
  "fr-ch": [
    { name: "Accueil", href: "/fr-ch" },
    { name: "Fonctionnalités", href: "/fr-ch#features" },
    { name: "Tarifs", href: "/fr-ch/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Support", href: "/support" },
  ],
  "it-ch": [
    { name: "Home", href: "/it-ch" },
    { name: "Funzionalità", href: "/it-ch#features" },
    { name: "Prezzi", href: "/it-ch/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Supporto", href: "/support" },
  ],
};

export default function Footer() {
  const pathname = usePathname();
  const locale = getLocale(pathname);
  const t = i18n[locale];
  const navLinks = localeNavLinks[locale];
  const currentLocale = localePages.find((l) => l.code === locale)!;

  return (
    <footer className="bg-surface border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href={currentLocale.home} className="font-heading font-bold text-2xl tracking-tighter text-white inline-block mb-4">
              Varodatic<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted mb-6">{siteConfig.brand.tagline}</p>
            <p className="text-xs text-muted/70">
              © {new Date().getFullYear()} {siteConfig.brand.name}. {t.copyright}
            </p>
          </div>

          {/* Pages — locale-aware */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">{t.pages}</h4>
            <ul className="space-y-3 text-sm text-muted">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">{t.resources}</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <Link href="/support" className="hover:text-primary transition-colors">{t.setupGuides}</Link>
              </li>
              <li>
                <Link href="/support#faq" className="hover:text-primary transition-colors">{t.faq}</Link>
              </li>
              <li>
                <Link href={currentLocale.blog} className="hover:text-primary transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-primary transition-colors">Features</Link>
              </li>
            </ul>
          </div>

          {/* Languages — full locale mesh */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              {t.languages}
            </h4>
            <ul className="space-y-3 text-sm text-muted">
              {localePages.map((loc) => (
                <li key={loc.code}>
                  <Link
                    href={loc.home}
                    className={`hover:text-primary transition-colors flex items-center gap-2 ${loc.code === locale ? "text-primary font-semibold" : ""}`}
                  >
                    <span>{loc.flag}</span>
                    <span>{loc.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">{t.contact}</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li>
                <a
                  href="https://wa.me/447828708540"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A0A0A0] hover:text-[#25D366] transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  WhatsApp: +44 7828 708540
                </a>
              </li>
              <li>
                <a href="mailto:support@varodaticiptv.pro" className="flex items-center hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Support
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom locale bar — all pricing links */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted/60">
          {localePages.map((loc) => (
            <Link key={loc.code} href={loc.pricing} className="hover:text-primary transition-colors">
              {loc.flag} Pricing ({loc.label})
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
