import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Ingredients } from "@/components/ingredients"
import { MenuCategories } from "@/components/menu-categories"
import { OrderFeatures } from "@/components/order-features"
import { PizzaCarousel } from "@/components/pizza-carousel"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ingredients />
      <MenuCategories />
      <OrderFeatures />
      <PizzaCarousel />
      <Footer />
    </main>
  )
}
