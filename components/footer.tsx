import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const infoLinks = [
  { label: "Početna", href: "#pocetna" },
  { label: "Poruči Online", href: "#menu" },
  { label: "O Nama", href: "#" },
  { label: "Kontakt", href: "#kontakt" },
]

const paymentMethods = [
  "Visa",
  "MasterCard",
  "Maestro",
  "AmEx",
  "PayPal",
  "Gotovina",
]

export function Footer() {
  return (
    <footer id="kontakt" aria-label="Kontakt informacije — Taiba Picerija Novi Pazar" className="bg-taiba-gray pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo */}
          <div className="space-y-4">
            <Image
              src="/images/taiba-logo.png"
              alt="Taiba Picerija & Restaurant — Logo — Dostava hrane Novi Pazar"
              width={120}
              height={112}
              className="h-16 w-auto"
            />
            <p className="text-taiba-white/50 text-sm leading-relaxed">
              {"Taiba Picerija & Restaurant - preko 20 godina u srcu Novog Pazara. Dostava pizza, pohovane piletine, tostada, toplih sendviča i rolovaog belog. Ramazanski meni za iftar i sufur."}
            </p>
          </div>

          {/* Info links */}
          <div>
            <h4 className="text-taiba-white font-bold uppercase tracking-wider text-sm mb-1">
              Informacije
            </h4>
            <div className="w-12 h-0.5 bg-taiba-red mb-6" />
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-taiba-white/60 hover:text-taiba-red text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-taiba-white font-bold uppercase tracking-wider text-sm mb-1">
              {"Kontaktirajte Nas!"}
            </h4>
            <div className="w-12 h-0.5 bg-taiba-red mb-6" />
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-taiba-red flex-shrink-0 mt-0.5" />
                <span className="text-taiba-white/60 text-sm">
                  {"Pon - Ned: 11:00 - 23:00"}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-taiba-red flex-shrink-0 mt-0.5" />
                <a href="https://www.google.com/maps/search/?api=1&query=Veljka+Vlahovića+12,+Novi+Pazar+36300" target="_blank" rel="noopener noreferrer" className="text-taiba-white/60 text-sm hover:text-taiba-red transition-colors">
                  {"Veljka Vlahovića 12, Novi Pazar 36300"}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-taiba-red flex-shrink-0 mt-0.5" />
                <a href="tel:+381636686820" className="text-taiba-white/60 text-sm hover:text-taiba-red transition-colors">
                  {"+381 63 66 86 20"}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-taiba-red flex-shrink-0 mt-0.5" />
                <a href="mailto:info@taiba.rs" className="text-taiba-white/60 text-sm hover:text-taiba-red transition-colors">
                  {"info@taiba.rs"}
                </a>
              </li>
            </ul>
          </div>

          {/* Payment */}
          <div>
            <h4 className="text-taiba-white font-bold uppercase tracking-wider text-sm mb-1">
              {"Plaćanje"}
            </h4>
            <div className="w-12 h-0.5 bg-taiba-red mb-6" />
            <div className="flex flex-wrap gap-2">
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  className="bg-taiba-white/10 text-taiba-white/70 text-xs font-medium px-3 py-2 rounded-md"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-taiba-white/10 pt-8 text-center">
          <p className="text-taiba-white/40 text-sm">
            {"© 2026 Taiba Café & Restaurant. Sva prava zadržana."}
          </p>
        </div>
      </div>
    </footer>
  )
}
