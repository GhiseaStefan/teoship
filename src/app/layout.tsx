import './globals.css'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar/Navbar'
import ScrollUpButton from '../components/ScrollUpButton/ScrollUpButton'
import { LocaleProvider } from '../lib/LocaleContext'
import StructuredData from '../components/StructuredData/StructuredData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Teoship | Fulfillment',
    template: '%s | Teoship'
  },
  description: 'Servicii complete de fulfillment pentru afacerile tale online. Depozitare, ambalare, livrare si gestionarea inventarului. Solutii scalabile pentru e-commerce.',
  keywords: [
    'fulfillment',
    'e-commerce',
    'depozitare',
    'livrare',
    'logistica',
    'inventar',
    'ambalare',
    'pick pack',
    'servicii fulfillment',
    'depozit Romania'
  ],
  authors: [{ name: 'Teoship' }],
  creator: 'Teoship',
  publisher: 'Teoship',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://teoship.ro'),
  alternates: {
    canonical: '/',
    languages: {
      'ro-RO': '/ro',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://teoship.ro',
    siteName: 'Teoship',
    title: 'Teoship | Fulfillment',
    description: 'Servicii complete de fulfillment pentru afacerile tale online. Depozitare, ambalare, livrare si gestionarea inventarului.',
    images: [
      {
        url: '/images/banner.png',
        width: 1200,
        height: 630,
        alt: 'Teoship - Servicii de Fulfillment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teoship | Fulfillment',
    description: 'Servicii complete de fulfillment pentru afacerile tale online.',
    images: ['/images/banner.png'],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
        <StructuredData />
        <LocaleProvider>
          <Navbar />
          <main style={{ flex: 1 }}>
            {children}
          </main>
          <Footer />
          <ScrollUpButton />
        </LocaleProvider>
      </body>
    </html>
  )
}