export function JsonLd() {
  const restaurantSchema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Taiba Picerija & Restaurant',
    alternateName: 'Taiba Café & Restaurant',
    description:
      'Taiba Picerija & Restaurant — picerija sa tradicijom dužom od 20 godina u Novom Pazaru. Pice, pohovana piletina, tostade, topli sendviči, rolovano belo. Besplatna dostava. Ramazanski meni za iftar i sufur.',
    url: 'https://taiba-picerija.vercel.app',
    telephone: '+381636686820',
    email: 'info@taiba.rs',
    image: 'https://taiba-picerija.vercel.app/images/hero-pizza.jpg',
    logo: 'https://taiba-picerija.vercel.app/images/taiba-logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Veljka Vlahovića 12',
      addressLocality: 'Novi Pazar',
      postalCode: '36300',
      addressCountry: 'RS',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.1367,
      longitude: 20.5122,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '11:00',
        closes: '23:00',
      },
    ],
    servesCuisine: ['Pizza', 'Srpska kuhinja', 'Fast Food'],
    priceRange: '$$',
    paymentAccepted: 'Cash, Visa, MasterCard, Maestro, AmEx, PayPal',
    currenciesAccepted: 'RSD',
    acceptsReservations: false,
    hasDeliveryMethod: {
      '@type': 'DeliveryMethod',
      name: 'Besplatna dostava',
    },
    areaServed: {
      '@type': 'City',
      name: 'Novi Pazar',
    },
    sameAs: [],
    foundingDate: '2004',
    slogan: 'Taiba Picerija — Preko 20 Godina Tradicije',
  }

  const menuSchema = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: 'Taiba Picerija Meni',
    description: 'Kompletna ponuda Taiba Picerije u Novom Pazaru',
    hasMenuSection: [
      {
        '@type': 'MenuSection',
        name: 'Pice',
        description: 'Naše pice - preko 20 godina tradicije',
        hasMenuItem: [
          {
            '@type': 'MenuItem',
            name: 'Margherita',
            description: 'Pelat, trapist — 28cm: 350 RSD / 32cm: 450 RSD',
            suitableForDiet: 'https://schema.org/HalalDiet',
            offers: { '@type': 'Offer', price: '350', priceCurrency: 'RSD' },
          },
          {
            '@type': 'MenuItem',
            name: 'Capriccioza',
            description: 'Pelat, trapist, pršuta, pečurke — 28cm: 420 RSD / 32cm: 550 RSD',
            suitableForDiet: 'https://schema.org/HalalDiet',
            offers: { '@type': 'Offer', price: '420', priceCurrency: 'RSD' },
          },
          {
            '@type': 'MenuItem',
            name: 'Funghi',
            description: 'Pelat, trapist, pečurke — 28cm: 420 RSD / 32cm: 550 RSD',
            suitableForDiet: 'https://schema.org/HalalDiet',
            offers: { '@type': 'Offer', price: '420', priceCurrency: 'RSD' },
          },
          {
            '@type': 'MenuItem',
            name: 'Vegeteriana',
            description: 'Pelat, trapist, povrće — 28cm: 420 RSD / 32cm: 550 RSD',
            suitableForDiet: 'https://schema.org/HalalDiet',
            offers: { '@type': 'Offer', price: '420', priceCurrency: 'RSD' },
          },
          {
            '@type': 'MenuItem',
            name: 'Chicken Pizza',
            description: 'Pelat, trapist, piletina, pečurke, kukuruz — 28cm: 420 RSD / 32cm: 550 RSD',
            suitableForDiet: 'https://schema.org/HalalDiet',
            offers: { '@type': 'Offer', price: '420', priceCurrency: 'RSD' },
          },
          {
            '@type': 'MenuItem',
            name: 'Taiba Pizza',
            description: 'Pelat, trapist, pršuta, povrće — 28cm: 450 RSD / 32cm: 570 RSD',
            suitableForDiet: 'https://schema.org/HalalDiet',
            offers: { '@type': 'Offer', price: '450', priceCurrency: 'RSD' },
          },
          {
            '@type': 'MenuItem',
            name: 'Tuna Pizza',
            description: 'Pelat, trapist, tuna — 28cm: 420 RSD / 32cm: 550 RSD',
            suitableForDiet: 'https://schema.org/HalalDiet',
            offers: { '@type': 'Offer', price: '420', priceCurrency: 'RSD' },
          },
        ],
      },
      {
        '@type': 'MenuSection',
        name: 'Pohovana Piletina',
        description: 'Hrskava pohovana piletina sa prilogom',
        hasMenuItem: [
          {
            '@type': 'MenuItem',
            name: 'Pohovana Piletina',
            description: 'Hrskava pohovana piletina sa prilogom po izboru',
          },
        ],
      },
      {
        '@type': 'MenuSection',
        name: 'Sendviči i Tostade',
        description: 'Topli sendviči i hrskave tostade',
        hasMenuItem: [
          {
            '@type': 'MenuItem',
            name: 'Topli Sendvič',
            description: 'Topli sendvič sa raznim dodacima',
          },
          {
            '@type': 'MenuItem',
            name: 'Tostada',
            description: 'Hrskava tostada sa sirom i pršutom',
          },
        ],
      },
      {
        '@type': 'MenuSection',
        name: 'Rolovano Belo',
        description: 'Rolovano belo sa domaćim filom',
        hasMenuItem: [
          {
            '@type': 'MenuItem',
            name: 'Rolovano Belo',
            description: 'Rolovano belo meso sa domaćim filom',
          },
        ],
      },
    ],
  }

  const ramadanEventSchema = {
    '@context': 'https://schema.org',
    '@type': 'FoodEvent',
    name: 'Ramazanski Meni - Taiba Picerija',
    description:
      'Taiba Picerija nudi specijalni ramazanski meni za iftar i sufur. Poručite pice, pohovanu piletinu, tostade, topli sendvič i rolovano belo. Primamo porudžbine za iftar do 15:00h. Radimo i za sufur.',
    startDate: '2026-02-21',
    endDate: '2026-03-22',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Restaurant',
      name: 'Taiba Picerija & Restaurant',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Veljka Vlahovića 12',
        addressLocality: 'Novi Pazar',
        postalCode: '36300',
        addressCountry: 'RS',
      },
    },
    organizer: {
      '@type': 'Restaurant',
      name: 'Taiba Picerija & Restaurant',
      url: 'https://taiba-picerija.vercel.app',
    },
    offers: {
      '@type': 'Offer',
      description: 'Ramazanski meni — narudžbine za iftar i sufur',
      availability: 'https://schema.org/InStock',
    },
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://taiba-picerija.vercel.app/#business',
    name: 'Taiba Picerija & Restaurant',
    description:
      'Dostava hrane u Novom Pazaru. Pizza, pohovana piletina, tostade, topli sendviči, rolovano belo. Besplatna dostava. Ramazanski meni za iftar i sufur.',
    image: 'https://taiba-picerija.vercel.app/images/hero-pizza.jpg',
    telephone: '+381636686820',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Veljka Vlahovića 12',
      addressLocality: 'Novi Pazar',
      postalCode: '36300',
      addressCountry: 'RS',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.1367,
      longitude: 20.5122,
    },
    url: 'https://taiba-picerija.vercel.app',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '11:00',
        closes: '23:00',
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Početna',
        item: 'https://taiba-picerija.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Meni',
        item: 'https://taiba-picerija.vercel.app/#menu',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Ramazanski Meni',
        item: 'https://taiba-picerija.vercel.app/#ramazan',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Kontakt',
        item: 'https://taiba-picerija.vercel.app/#kontakt',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ramadanEventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
