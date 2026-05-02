"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import CTAButton from "../shared/CTAButton";

const esNavLinks = [
  { name: "Inicio", href: "/es" },
  { name: "Características", href: "/es#features" },
  { name: "Precios", href: "/es/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Soporte", href: "/es#faq" },
];

const deNavLinks = [
  { name: "Start", href: "/de-ch" },
  { name: "Funktionen", href: "/de-ch#features" },
  { name: "Preise", href: "/de-ch/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Support", href: "/de-ch#faq" },
];

const frNavLinks = [
  { name: "Accueil", href: "/fr-ch" },
  { name: "Fonctionnalités", href: "/fr-ch#features" },
  { name: "Tarifs", href: "/fr-ch/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Support", href: "/fr-ch#faq" },
];

const itNavLinks = [
  { name: "Home", href: "/it-ch" },
  { name: "Funzionalità", href: "/it-ch#features" },
  { name: "Prezzi", href: "/it-ch/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Supporto", href: "/it-ch#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isSpanish = pathname.startsWith("/es");
  const isGermanSwiss = pathname.startsWith("/de-ch");
  const isFrenchSwiss = pathname.startsWith("/fr-ch");
  const isItalianSwiss = pathname.startsWith("/it-ch");

  const navLinks = isSpanish
    ? esNavLinks
    : isGermanSwiss
    ? deNavLinks
    : isFrenchSwiss
    ? frNavLinks
    : isItalianSwiss
    ? itNavLinks
    : siteConfig.nav.links;

  const ctaLabel = isSpanish
    ? "Iniciar Prueba Gratis"
    : isGermanSwiss
    ? "Gratis Testen"
    : isFrenchSwiss
    ? "Essai Gratuit"
    : isItalianSwiss
    ? "Prova Gratuita"
    : siteConfig.nav.cta;

  const ctaHref = isSpanish
    ? "/es/pricing"
    : isGermanSwiss
    ? "/de-ch/pricing"
    : isFrenchSwiss
    ? "/fr-ch/pricing"
    : isItalianSwiss
    ? "/it-ch/pricing"
    : "/pricing";

  const logoHref = isSpanish
    ? "/es"
    : isGermanSwiss
    ? "/de-ch"
    : isFrenchSwiss
    ? "/fr-ch"
    : isItalianSwiss
    ? "/it-ch"
    : "/";

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href={logoHref} className="font-heading font-extrabold italic text-2xl tracking-tighter text-primary">
            VARODATIC
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <CTAButton href={ctaHref}>{ctaLabel}</CTAButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full glass border-b border-white/5 py-4 px-4 flex flex-col space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-white hover:text-primary transition-colors block"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10">
            <CTAButton href={ctaHref} className="w-full text-center">{ctaLabel}</CTAButton>
          </div>
        </div>
      )}
    </nav>
  );
}
