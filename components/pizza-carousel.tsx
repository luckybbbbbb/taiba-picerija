"use client"

import Image from "next/image"
import { useEffect, useRef, useState, useCallback } from "react"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"

const pizzas = [
  {
    name: "MARGARITA",
    image: "/images/pizza-margherita.jpg",
    price: "",
    ingredients: "Pelat, mozzarella, bosiljak, maslinovo ulje",
  },
  {
    name: "KAPRIČOZA",
    image: "/images/pizza-capricciosa.jpg",
    price: "",
    ingredients: "Pelat, mozzarella, šunka, šampinjoni, masline",
  },
  {
    name: "FUNGI",
    image: "/images/pizza-prosciutto.jpg",
    price: "",
    ingredients: "Pelat, mozzarella, šampinjoni, maslinovo ulje",
  },
  {
    name: "PORODIČNA",
    image: "/images/pizza-quattro.jpg",
    price: "",
    ingredients: "Velika pizza za celu porodicu — pelat, mozzarella, šunka, šampinjoni",
  },
]

export function PizzaCarousel() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const checkScroll = useCallback(() => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener("scroll", checkScroll)
    checkScroll()
    return () => el.removeEventListener("scroll", checkScroll)
  }, [checkScroll])

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const amount = 320
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    })
  }

  return (
    <section
      ref={sectionRef}
      className="bg-taiba-dark py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`flex items-center justify-between mb-10 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-taiba-white uppercase tracking-wider">
            {"Naše Pice"}
          </h2>
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-12 h-12 rounded-full bg-taiba-red text-taiba-white flex items-center justify-center hover:bg-taiba-red-dark transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Prethodna"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-12 h-12 rounded-full bg-taiba-red text-taiba-white flex items-center justify-center hover:bg-taiba-red-dark transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Sledeća"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {pizzas.map((pizza, i) => (
            <div
              key={pizza.name}
              className={`flex-shrink-0 w-[280px] md:w-[300px] bg-taiba-black rounded-2xl overflow-hidden group snap-start transition-all duration-700 hover:scale-[1.03] ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: visible ? `${i * 100}ms` : "0ms" }}
            >
              {/* Pizza image */}
              <div className="relative p-6 pb-2">
                <div className="relative w-full aspect-square rounded-full overflow-hidden">
                  <Image
                    src={pizza.image}
                    alt={pizza.name}
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                </div>
                {/* Price badge */}
                {pizza.price && (
                  <div className="absolute top-4 right-4 bg-taiba-red text-taiba-white text-sm font-bold px-3 py-1.5 rounded-full">
                    {pizza.price} RSD
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6 pt-2 space-y-3">
                <h3 className="font-bold text-taiba-white text-lg uppercase tracking-wider">
                  {pizza.name}
                </h3>
                <p className="text-taiba-white/50 text-sm leading-relaxed line-clamp-2">
                  {pizza.ingredients}
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="#menu"
                    className="flex-1 bg-taiba-red text-taiba-white py-3 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-taiba-red-dark transition-colors text-center"
                  >
                    Poruči
                  </a>
                  <button
                    className="w-11 h-11 rounded-lg border border-taiba-white/20 flex items-center justify-center text-taiba-white/50 hover:text-taiba-red hover:border-taiba-red transition-colors"
                    aria-label={`Dodaj ${pizza.name} u listu želja`}
                  >
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile arrows */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-6">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-12 h-12 rounded-full bg-taiba-red text-taiba-white flex items-center justify-center hover:bg-taiba-red-dark transition-colors disabled:opacity-30"
            aria-label="Prethodna"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-12 h-12 rounded-full bg-taiba-red text-taiba-white flex items-center justify-center hover:bg-taiba-red-dark transition-colors disabled:opacity-30"
            aria-label="Sledeća"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
