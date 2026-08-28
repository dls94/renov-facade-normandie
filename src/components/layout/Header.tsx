"use client";

import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Prestations", href: "/prestations" },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/images/logo-renov-facade.png"
            alt="Renov'Façade Normandie"
            width={220}
            height={80}
            priority
            className="w-[220px] h-auto"
          />
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-zinc-700 transition-colors hover:text-[#f58213]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <Link
          href="tel:+33698452470"
          className="hidden items-center gap-2 rounded-full bg-[#f58213] px-5 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#d96f08] hover:shadow-md lg:flex"
        >
          <Phone className="h-4 w-4" />
          06 98 45 24 70
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-200 text-[#071522] lg:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="border-t border-zinc-200 bg-white px-4 py-5 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-zinc-100 py-4 text-base font-semibold text-zinc-800 transition-colors hover:text-[#f58213]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="tel:+33698452470"
              className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#f58213] px-5 py-4 font-bold text-white"
            >
              <Phone className="h-5 w-5" />
              06 98 45 24 70
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
