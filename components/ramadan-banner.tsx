"use client"

import { useEffect, useRef, useState } from "react"
import { Moon, Star, Check } from "lucide-react"

const menuItems = [
  {
    category: "Pice",
    items: ["Margherita", "Capriccioza", "Funghi", "Vegeteriana", "Chicken Pizza", "Taiba Pizza", "Tuna Pizza"],
  },
  {
    category: "Ostala Ponuda",
    items: ["Pohovana Piletina", "Tostada", "Rolovano Belo", "Topli Sendvič"],
  },
]

export function RamadanBanner() {
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
      id="ramazan"
      ref={sectionRef}
      aria-label="Ramazanski meni — iftar i sufur dostava Novi Pazar"
      className="relative bg-gradient-to-br from-taiba-black via-[#1a1a2e] to-taiba-black py-16 md:py-24 overflow-hidden"
    >
      {/* Decorative stars */}
      <div className="absolute top-6 left-10 text-yellow-400/20">
        <Star className="w-8 h-8" />
      </div>
      <div className="absolute top-12 right-16 text-yellow-400/15">
        <Star className="w-6 h-6" />
      </div>
      <div className="absolute bottom-8 left-1/4 text-yellow-400/10">
        <Star className="w-5 h-5" />
      </div>
      <div className="absolute top-1/3 right-8 text-yellow-400/10">
        <Moon className="w-7 h-7" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Announcement section */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Moon icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-yellow-400/10 flex items-center justify-center">
              <Moon className="w-10 h-10 text-yellow-400" />
            </div>
          </div>

          <p className="text-yellow-400 font-bold text-sm uppercase tracking-[0.3em] mb-4">
            Obaveštenje za Ramazan
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-taiba-white mb-6 text-balance">
            {"Ramazanski Meni — Iftar i Sufur Dostava u Novom Pazaru 🌙"}
          </h2>
          <p className="text-taiba-white/80 text-base md:text-lg mb-4">
            {"Od subote (21.02.) Taiba će raditi"}
          </p>

          <div className="space-y-3 mb-6 max-w-lg mx-auto">
            <p className="text-taiba-white text-lg md:text-xl font-semibold flex items-center justify-center gap-3">
              <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
              {"Primamo porudžbine za iftar do 15:00h"}
            </p>
            <p className="text-taiba-white text-lg md:text-xl font-semibold flex items-center justify-center gap-3">
              <Moon className="w-5 h-5 text-yellow-400 flex-shrink-0" />
              {"Takođe radimo i za sufur"}
            </p>
          </div>

          <p className="text-taiba-white/50 text-base md:text-lg italic">
            {"Dobro nam došli i neka vam je mubarek Ramazan! 🤍"}
          </p>
        </div>

        {/* Ramazanski Meni */}
        <div
          className={`transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-center text-xl md:text-2xl font-bold text-yellow-400 uppercase tracking-wider mb-10">
            Ramazanski Meni
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {menuItems.map((group) => (
              <div
                key={group.category}
                className="bg-taiba-white/5 border border-yellow-400/10 rounded-2xl p-6 md:p-8"
              >
                <h4 className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-5">
                  {group.category}
                </h4>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0" />
                      <span className="text-taiba-white text-base md:text-lg font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="tel:+381636686820"
              className="inline-block bg-yellow-400 text-taiba-black px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-yellow-300 transition-colors"
            >
              Poruči za Iftar
            </a>
            <a
              href="tel:+381636686820"
              className="inline-block border-2 border-yellow-400/30 text-yellow-400 px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:border-yellow-400 hover:bg-yellow-400/10 transition-colors"
            >
              Poruči za Sufur
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
