import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const siteUrl = 'https://taiba-picerija.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Taiba Picerija & Restaurant | Dostava Hrane Novi Pazar | Preko 20 Godina Tradicije',
    template: '%s | Taiba Picerija & Restaurant',
  },
  description:
    'Taiba Picerija & Restaurant — picerija sa tradicijom dužom od 20 godina u Novom Pazaru. Poručite online picu (Kaprićoza, Margarita, Fungi, Porodična), pohovanu piletinu, tostade, topli sendvič, rolovano belo. Ramazanski meni za iftar i sufur. Besplatna dostava!',
  keywords: [
    'Taiba Picerija',
    'Taiba Picerija Novi Pazar',
    'Taiba Restaurant',
    'picerija Novi Pazar',
    'pizza Novi Pazar',
    'dostava hrane Novi Pazar',
    'besplatna dostava pizza',
    'poruci pizzu online',
    'Kaprićoza pizza',
    'Margarita pizza',
    'Fungi pizza',
    'Porodična pizza',
    'pohovana piletina Novi Pazar',
    'tostada Novi Pazar',
    'topli sendvič Novi Pazar',
    'rolovano belo',
    'ramazanski meni',
    'iftar Novi Pazar',
    'sufur Novi Pazar',
    'hrana za iftar',
    'hrana za sufur',
    'ramazan hrana dostava',
    'restoran Novi Pazar',
    'hrana dostava Novi Pazar',
    'Veljka Vlahovića 12',
  ],
  authors: [{ name: 'Taiba Picerija & Restaurant' }],
  creator: 'Taiba Picerija & Restaurant',
  publisher: 'Taiba Picerija & Restaurant',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: siteUrl,
    siteName: 'Taiba Picerija & Restaurant',
    title: 'Taiba Picerija & Restaurant | Dostava Hrane Novi Pazar',
    description:
      'Poručite online picu, pohovanu piletinu, tostade i sendviče. Besplatna dostava u Novom Pazaru. Ramazanski meni — iftar i sufur. Preko 20 godina tradicije!',
    images: [
      {
        url: '/images/hero-pizza.jpg',
        width: 1200,
        height: 630,
        alt: 'Taiba Picerija — Najbolja pizza u Novom Pazaru',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taiba Picerija & Restaurant | Dostava Hrane Novi Pazar',
    description:
      'Poručite online picu, pohovanu piletinu, tostade i sendviče. Besplatna dostava. Ramazanski meni za iftar i sufur!',
    images: ['/images/hero-pizza.jpg'],
  },
  icons: {
    icon: '/images/taiba_transparent.png',
    apple: '/images/taiba_transparent.png',
  },
  category: 'restaurant',
  verification: {
    // Dodaj Google Search Console verification kod ovde kada ga dobiješ
    // google: 'TVOJ_GOOGLE_VERIFICATION_KOD',
  },
  other: {
    'geo.region': 'RS-00',
    'geo.placename': 'Novi Pazar',
    'geo.position': '43.1367;20.5122',
    'ICBM': '43.1367, 20.5122',
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KYD5SR2QR8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KYD5SR2QR8');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
