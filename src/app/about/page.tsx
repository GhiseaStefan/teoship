import About from "@/src/components/About/About";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Despre Noi',
  description: 'Suntem o companie de logistica moderna, orientata pe tehnologie si inovatie, cu misiunea de a oferi solutii de calitate in domeniul transportului si depozitarii.',
  openGraph: {
    title: 'Despre Teoship - Companie de Logistica Moderna',
    description: 'Companie de logistica moderna cu tehnologie avansata si solutii scalabile pentru e-commerce.',
    url: 'https://teoship.ro/about',
  },
}

export default function AboutPage() {
    return (
        <About />
    );
}