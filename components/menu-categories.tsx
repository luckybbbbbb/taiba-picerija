"use client"

import { useEffect, useRef, useState } from "react"
import { Pizza, Drumstick, Sandwich, UtensilsCrossed } from "lucide-react"

const menuSections = [
  {
    name: "Pice",
    icon: Pizza,
    items: [
      "Margherita — 350/450 RSD",
      "Capriccioza — 420/550 RSD",
      "Funghi — 420/550 RSD",
      "Vegeteriana — 420/550 RSD",
      "Chicken Pizza — 420/550 RSD",
      "Taiba Pizza — 450/570 RSD",
      "Tuna Pizza — 420/550 RSD",
      "Porodična Pizza (4 osobe) — 1800 RSD + Coca-Cola 2L",
    ],
  },
  {
    name: "Pohovana Piletina",
    icon: Drumstick,
    items: ["Pohovana piletina - hrskava i sočna, služi se sa prilogom"],
  },
  {
    name: "Sendviči & Tostade",
    icon: Sandwich,
    items: ["Topli Sendvič", "Tostada"],
  },
  {
    name: "Rolovano Belo",
    icon: UtensilsCrossed,
    items: ["Rolovano Belo - sa domaćim filom"],
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
      aria-label="Meni — pice, pohovana piletina, sendviči, tostade, rolovano belo"
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
            {"Naša Ponuda — Pice, Piletina, Sendviči i Više"}
          </h2>
          <p className="text-taiba-white/60 max-w-2xl mx-auto leading-relaxed">
            {"Izaberite između naših ukusnih pica (Margherita, Capriccioza, Funghi, Vegeteriana, Chicken, Taiba, Tuna), pohovane piletine, tostada, toplih sendviča i rolovaog belog. Besplatna dostava u Novom Pazaru — svaki dan od 11h do 23h."}
          </p>
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuSections.map((section, i) => {
            const Icon = section.icon
            return (
              <div
                key={section.name}
                className={`bg-taiba-white/5 border border-taiba-white/10 rounded-2xl p-6 md:p-8 hover:border-taiba-red/40 transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: visible ? `${i * 120}ms` : "0ms" }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-taiba-red/10 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-taiba-red" />
                </div>

                {/* Name */}
                <h3 className="text-taiba-white font-bold text-lg uppercase tracking-wider mb-4">
                  {section.name}
                </h3>

                {/* Items */}
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-taiba-red flex-shrink-0" />
                      <span className="text-taiba-white/60 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
