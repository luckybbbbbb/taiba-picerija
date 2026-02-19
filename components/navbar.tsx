"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-taiba-black/95 backdrop-blur-sm border-b border-border">
      {/* Top bar with phone */}
      <div className="hidden md:flex items-center justify-between px-6 py-2 border-b border-border text-sm">
        <a
          href="tel:+381000000000"
          className="inline-flex items-center gap-2 bg-taiba-red text-taiba-white px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-taiba-red-dark transition-colors"
        >
          <Phone className="w-3 h-3" />
          {"Poruči Putem Telefona: +381 63 66 86 20"}
        </a>
        <div className="flex items-center gap-4">
          <a
            href="#menu"
            className="text-taiba-white/70 hover:text-taiba-white text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Poruči Online
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-taiba-white"
          aria-label="Meni"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Nav links (left on desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#pocetna" className="text-taiba-white/80 hover:text-taiba-red text-sm font-semibold uppercase tracking-wider transition-colors">
            Početna
          </a>
        </div>

        {/* Logo center */}
        <a href="#pocetna" className="flex items-center">
          <Image
            src="/images/taiba-logo.png"
            alt="Taiba Café & Restaurant"
            width={120}
            height={112}
            className="h-12 md:h-16 w-auto"
            priority
          />
        </a>

        {/* Nav links (right on desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#menu" className="text-taiba-white/80 hover:text-taiba-red text-sm font-semibold uppercase tracking-wider transition-colors">
            Poruči Online
          </a>
          <a href="#kontakt" className="text-taiba-white/80 hover:text-taiba-red text-sm font-semibold uppercase tracking-wider transition-colors">
            Kontakt
          </a>
        </div>

        {/* Mobile phone order */}
        <a href="tel:+381000000000" aria-label="Pozovi" className="md:hidden text-taiba-white">
          <Phone className="w-5 h-5" />
        </a>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-taiba-black border-t border-border px-6 py-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            <a
              href="#pocetna"
              onClick={() => setMobileMenuOpen(false)}
              className="text-taiba-white text-lg font-semibold uppercase tracking-wider hover:text-taiba-red transition-colors"
            >
              Početna
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="text-taiba-white text-lg font-semibold uppercase tracking-wider hover:text-taiba-red transition-colors"
            >
              Poruči Online
            </a>
            <a
              href="#kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="text-taiba-white text-lg font-semibold uppercase tracking-wider hover:text-taiba-red transition-colors"
            >
              Kontakt
            </a>
            <hr className="border-border" />
            <a
              href="tel:+381000000000"
              className="inline-flex items-center gap-2 bg-taiba-red text-taiba-white px-4 py-2 rounded-full text-sm font-semibold justify-center hover:bg-taiba-red-dark transition-colors"
            >
              <Phone className="w-4 h-4" />
              {"Poruči: 020 000 000"}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
