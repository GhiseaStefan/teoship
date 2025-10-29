import Advantages from "../../components/Advantages/Advantages";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Avantaje',
  description: 'De ce sa alegi serviciul de fulfillment? Externalizeaza intregul proces logistic si bucura-te de avantajele solutiei teoship.ro.',
  openGraph: {
    title: 'Avantajele Serviciului de Fulfillment - Teoship',
    description: 'Economisirea costurilor, optimizarea timpului, protectie inclusa si eliminarea stresului operational.',
    url: 'https://teoship.ro/advantages',
  },
}

export default function AdvantagesPage() {
    return (
        <Advantages />
    );
}