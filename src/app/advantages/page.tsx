import Advantages from "../../components/Advantages/Advantages";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Avantaje',
  description: 'De ce să alegi serviciul de fulfillment? Externalizează întregul proces logistic și bucură-te de avantajele soluției teoship.ro.',
  openGraph: {
    title: 'Avantajele Serviciului de Fulfillment - Teoship',
    description: 'Economisirea costurilor, optimizarea timpului, protecție inclusă și eliminarea stresului operational.',
    url: 'https://teoship.ro/advantages',
  },
}

export default function AdvantagesPage() {
    return (
        <Advantages />
    );
}