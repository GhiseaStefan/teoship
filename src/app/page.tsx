import Content from '../components/Content/Content';
import Banner from '../components/Header/Banner/Banner';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Acasă',
  description: 'Servicii moderne de fulfillment pentru afacerile tale online. Soluții personalizate de fulfillment pentru creșterea afacerii tale cu tehnologie avansată și procese optimizate.',
  openGraph: {
    title: 'Teoship - Servicii de Fulfillment pentru E-commerce',
    description: 'Servicii moderne de fulfillment pentru afacerile tale online. Soluții personalizate pentru creșterea afacerii tale.',
    url: 'https://teoship.ro',
  },
}

export default function Home() {
    return (
        <div>
            <Banner />
            <Content />
        </div>
    );
}