"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"

const ingredientPoints = [
  {
    title: "Preko 20 godina tradicije",
    description:
      "Taiba Picerija postoji više od dve decenije. Generacije zadovoljnih gostiju su naše najveće priznanje.",
  },
  {
    title: "Kvalitetni sastojci",
    description:
      "Koristimo samo najkvalitetnije sastojke — svež pelat, pravi sir i testo koje pravimo svaki dan.",
  },
  {
    title: "Besplatna dostava",
    description:
      "Dostavljamo besplatno na teritoriji celog Novog Pazara — svaki dan od 11h do 23h.",
  },
]

export function Ingredients() {
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
      ref={sectionRef}
      aria-label="O Taiba Piceriji — preko 20 godina tradicije u Novom Pazaru"
      className="bg-taiba-white py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Image side */}
        <div
          className={`flex-1 w-full max-w-md lg:max-w-lg transition-all duration-700 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/ingredients-pizza.jpg"
              alt="Taiba Picerija Novi Pazar — kvalitetni sastojci, sveže testo, preko 20 godina tradicije"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Text side */}
        <div
          className={`flex-1 space-y-8 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-taiba-black leading-tight text-balance">
            {"Taiba Picerija — Više od 20 Godina Ukusa i Tradicije!"}
          </h2>

          <div className="space-y-6">
            {ingredientPoints.map((point) => (
              <div key={point.title} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-taiba-red rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-taiba-white" />
                </div>
                <div>
                  <h3 className="font-bold text-taiba-black text-lg">{point.title}</h3>
                  <p className="text-taiba-black/60 leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#menu"
            className="inline-block bg-taiba-red text-taiba-white px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-taiba-red-dark transition-colors"
          >
            Poruči Online
          </a>
        </div>
      </div>
    </section>
  )
}
