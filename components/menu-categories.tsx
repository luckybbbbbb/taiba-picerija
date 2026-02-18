"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const categories = [
  {
    name: "Pizze 32CM",
    image: "/images/category-pizza.jpg",
    label: "PORUČI",
  },
  {
    name: "Panino",
    image: "/images/category-panino.jpg",
    label: "PORUČI",
  },
  {
    name: "Dezerte",
    image: "/images/category-dessert.jpg",
    label: "PORUČI",
  },
]

export function MenuCategories() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="bg-taiba-black py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-taiba-white mb-4 text-balance">
            {"Poručite Online — Najbolje iz Taibe na Vašoj Adresi!"}
          </h2>
          <p className="text-taiba-white/60 max-w-2xl mx-auto leading-relaxed">
            {"Izaberite između autentičnih napuljskih pica, bogato punjenih calzone, ili slasnih italijanskih dezerta — dostavljamo direktno na vaša vrata u Novom Pazaru."}
          </p>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <a
              key={cat.name}
              href="#menu"
              className={`group flex flex-col items-center text-center transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: visible ? `${i * 150}ms` : "0ms" }}
            >
              {/* Label */}
              <span className="text-taiba-red font-bold text-sm uppercase tracking-wider mb-4">
                {cat.label}
              </span>

              {/* Circular image */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 ring-4 ring-taiba-red/20 group-hover:ring-taiba-red/50 group-hover:scale-105 transition-all duration-300">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover"
                  sizes="224px"
                />
              </div>

              {/* Name */}
              <h3 className="text-taiba-white font-bold text-xl uppercase tracking-wider group-hover:text-taiba-red transition-colors">
                {cat.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
