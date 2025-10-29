import Content from '../components/Content/Content';
import Banner from '../components/Header/Banner/Banner';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Acasa',
  description: 'Servicii moderne de fulfillment pentru afacerile tale online. Solutii personalizate de fulfillment pentru cresterea afacerii tale cu tehnologie avansata si procese optimizate.',
  openGraph: {
    title: 'Teoship - Servicii de Fulfillment pentru E-commerce',
    description: 'Servicii moderne de fulfillment pentru afacerile tale online. Solutii personalizate pentru cresterea afacerii tale.',
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