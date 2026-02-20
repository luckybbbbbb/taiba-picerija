import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { RamadanBanner } from "@/components/ramadan-banner"
import { MenuCategories } from "@/components/menu-categories"
import { OrderFeatures } from "@/components/order-features"
import { PizzaCarousel } from "@/components/pizza-carousel"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { JsonLd } from "@/components/json-ld"

export default function Home() {
  return (
    <>
      <JsonLd />
      <main>
        <Navbar />
        <Hero />
        <RamadanBanner />
        <MenuCategories />
        <OrderFeatures />
        <PizzaCarousel />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  )
}
