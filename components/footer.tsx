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
    <footer id="kontakt" className="bg-taiba-gray pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo */}
          <div className="space-y-4">
            <div>
              <span className="text-taiba-white text-2xl font-bold tracking-tight">
                taiba
              </span>
              <div className="text-taiba-red text-[10px] font-bold tracking-[0.2em] uppercase">
                Picerija & Restaurant
              </div>
            </div>
            <p className="text-taiba-white/50 text-sm leading-relaxed">
              {"Autentična napuljska pizza u srcu Novog Pazara. Prava italijanska tradicija sa najboljim sastojcima."}
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
                  {"Pon — Ned: 11:00 — 23:00"}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-taiba-red flex-shrink-0 mt-0.5" />
                <span className="text-taiba-white/60 text-sm">
                  {"Novi Pazar, Srbija"}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-taiba-red flex-shrink-0 mt-0.5" />
                <a href="tel:+381000000000" className="text-taiba-white/60 text-sm hover:text-taiba-red transition-colors">
                  {"020 000 000"}
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
            {"© 2026 Taiba Picerija & Restaurant. Sva prava zadržana."}
          </p>
        </div>
      </div>
    </footer>
  )
}
