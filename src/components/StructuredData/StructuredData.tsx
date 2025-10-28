import Script from 'next/script'

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Teoship",
    "url": "https://teoship.ro",
    "logo": "https://teoship.ro/images/logo.png",
    "description": "Servicii complete de fulfillment pentru afacerile tale online. Depozitare, ambalare, livrare și gestionarea inventarului.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Str. Moara Domneasca nr 8, Hala V9",
      "addressLocality": "Sat Afumati",
      "addressRegion": "Judetul Ilfov",
      "postalCode": "077010",
      "addressCountry": "RO"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+40 770 425 221",
      "contactType": "customer service",
      "areaServed": "RO",
      "availableLanguage": ["Romanian", "English"]
    },
    "sameAs": [
      "https://www.facebook.com/teoship",
      "https://www.linkedin.com/company/teoship"
    ],
    "foundingDate": "2024",
    "numberOfEmployees": "10-50",
    "industry": "Logistics and Supply Chain"
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Servicii de Fulfillment",
    "description": "Servicii complete de fulfillment pentru e-commerce: depozitare, ambalare, livrare și gestionarea inventarului",
    "provider": {
      "@type": "Organization",
      "name": "Teoship"
    },
    "serviceType": "Fulfillment Services",
    "areaServed": {
      "@type": "Country",
      "name": "Romania"
    },
    "offers": {
      "@type": "Offer",
      "price": "1.55",
      "priceCurrency": "EUR",
      "description": "Cost fix transparent pentru comenzile standard"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Teoship",
    "url": "https://teoship.ro",
    "description": "Servicii de fulfillment pentru e-commerce",
    "publisher": {
      "@type": "Organization",
      "name": "Teoship"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://teoship.ro/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  )
}
