import ElementRenderer, { pageRequests } from '@/components/element-renderer'
export const metadata = {
  title: 'Fami Restaurant | Cuisine réunionnaise à Belleville - Paris 20e',
  description:
    'Fami Restaurant – Recyclerie et tablerie conviviale à Belleville, Paris 20e. Dégustez une cuisine réunionnaise maison dans un cadre chaleureux et durable.',
  keywords: [
    'restaurant réunionnais Paris',
    'restaurant Belleville',
    'cuisine créole Paris 20',
    'recyclerie restaurant Paris',
    'restaurant durable Paris',
    'tablerie Belleville'
  ],
  alternates: { canonical: 'https://famirestaurant.com/' },
  openGraph: {
    title: 'Fami Restaurant | Cuisine réunionnaise à Belleville - Paris 20e',
    description:
      'Recyclerie et tablerie à Belleville, Paris 20e – Fami Restaurant propose une cuisine réunionnaise maison, responsable et conviviale.',
    url: 'https://famirestaurant.com/',
    siteName: 'Fami Restaurant',
    images: [
      {
        url: 'https://famirestaurant.com/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Fami Restaurant - Cuisine réunionnaise à Belleville'
      }
    ],
    locale: 'fr_FR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fami Restaurant | Cuisine réunionnaise à Belleville',
    description:
      'Recyclerie et tablerie conviviale à Paris 20e. Découvrez notre cuisine réunionnaise maison.',
    images: ['https://famirestaurant.com/opengraph-image.png']
  }
}

export default async function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Fami Restaurant',
    image: 'https://famirestaurant.com/opengraph-image.png',
    description:
      'Recyclerie et tablerie conviviale à Belleville, Paris 20e. Cuisine réunionnaise maison, locale et durable.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '9 bis rue de Tourtille',
      addressLocality: 'Paris',
      postalCode: '75020',
      addressCountry: 'FR'
    },
    telephone: '+33 1 23 45 67 89', // 🔁 remplace par ton vrai numéro
    servesCuisine: ['Réunionnaise', 'Créole'],
    priceRange: '€€',
    url: 'https://famirestaurant.com',
    areaServed: 'Belleville, Paris 20e',
    openingHours: ['Mo-Sa 12:00-14:30', 'Mo-Sa 19:00-23:00']
  }
  const page = await pageRequests.fetchBodyPage()

  if (!page) return <div>Data non trouvée</div>

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {page?.map((component: any, index: number) => {
        return <ElementRenderer component={component} key={index} />
      })}
    </main>
  )
}
