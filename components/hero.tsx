"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const categories = [
  { label: "PICE", href: "#menu" },
  { label: "RAMAZANSKI MENU", href: "#ramazan" },
  { label: "CELA PONUDA", href: "#menu" },
]

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="pocetna"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col pt-[100px] md:pt-[140px] bg-taiba-black overflow-hidden"
    >
      {/* Category bar */}
      <div className="bg-taiba-red py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 md:gap-12 flex-wrap">
          {categories.map((cat) => (
            <a
              key={cat.label}
              href={cat.href}
              className="text-taiba-white font-bold text-xs md:text-sm tracking-wider uppercase hover:text-taiba-white/80 transition-colors"
            >
              {cat.label}
            </a>
          ))}
        </div>
      </div>

      {/* Hero content */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 md:py-20 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
        {/* Text side */}
        <div
          className={`flex-1 space-y-6 text-center lg:text-left transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-taiba-red font-bold text-sm md:text-base uppercase tracking-[0.2em]">
            Taiba Picerija — Već Preko 20 Godina Sa Vama
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-taiba-white leading-tight text-balance">
            {"Poručite Vašu Omiljenu Pizzu Online"}
          </h1>
          <p className="text-lg md:text-xl font-bold text-taiba-white">
            {"Taiba BESPLATNO Dostavlja na Vašu Adresu!"}
          </p>
          <p className="text-taiba-white/70 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
            {"Uživajte u najboljoj pici iz udobnosti svog doma! Taiba Café & Restaurant — picerija sa tradicijom dužom od 20 godina. Jednostavno poručite online. Dostavljamo svakog dana od 11h do 23h."}
          </p>
          <div>
            <a
              href="#menu"
              className="inline-block bg-taiba-red text-taiba-white px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-taiba-red-dark transition-colors"
            >
              Poruči Online
            </a>
          </div>
        </div>

        {/* Image side */}
        <div
          className={`flex-1 relative w-full max-w-md lg:max-w-lg xl:max-w-xl transition-all duration-700 delay-200 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl shadow-taiba-red/20">
            <Image
              src="/images/hero-pizza.jpg"
              alt="Taiba Picerija — Najbolja pizza u Novom Pazaru"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Decorative ring */}
          <div className="absolute inset-0 rounded-full border-2 border-taiba-red/20 scale-110" />
        </div>
      </div>
    </section>
  )
}
