"use client"

import { useEffect, useRef, useState } from "react"
import { Package, Truck } from "lucide-react"

export function OrderFeatures() {
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
    <section ref={sectionRef} className="bg-taiba-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Pickup */}
          <div
            className={`flex flex-col items-center text-center p-8 md:p-12 rounded-2xl bg-taiba-black transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="w-20 h-20 rounded-full bg-taiba-red/10 flex items-center justify-center mb-6">
              <Package className="w-10 h-10 text-taiba-red" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-taiba-white mb-3">
              {"Poručite Online Za Poneti!"}
            </h3>
            <p className="text-taiba-white/60 leading-relaxed mb-6 max-w-sm">
              {"Poručite vašu omiljenu pizzu online i preuzmite je u Taibi. Brzo, jednostavno i uvek sveže iz peći."}
            </p>
            <a
              href="#menu"
              className="inline-block bg-taiba-red text-taiba-white px-8 py-3 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-taiba-red-dark transition-colors"
            >
              Poruči Za Poneti
            </a>
          </div>

          {/* Delivery */}
          <div
            className={`flex flex-col items-center text-center p-8 md:p-12 rounded-2xl bg-taiba-black transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="w-20 h-20 rounded-full bg-taiba-red/10 flex items-center justify-center mb-6">
              <Truck className="w-10 h-10 text-taiba-red" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-taiba-white mb-3">
              {"Besplatna Dostava"}
            </h3>
            <p className="text-taiba-white/60 leading-relaxed mb-6 max-w-sm">
              {"Dostavljamo besplatno na teritoriji celog Novog Pazara. Vaša omiljena pizza stiže direktno na vaša vrata."}
            </p>
            <a
              href="#menu"
              className="inline-block bg-taiba-red text-taiba-white px-8 py-3 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-taiba-red-dark transition-colors"
            >
              Poruči Dostavu
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
