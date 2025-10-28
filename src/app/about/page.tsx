import About from "@/src/components/About/About";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Despre Noi',
  description: 'Suntem o companie de logistică modernă, orientată pe tehnologie și inovatie, cu misiunea de a oferi soluții de calitate în domeniul transportului și depozitării.',
  openGraph: {
    title: 'Despre Teoship - Companie de Logistică Modernă',
    description: 'Companie de logistică modernă cu tehnologie avansată și soluții scalabile pentru e-commerce.',
    url: 'https://teoship.ro/about',
  },
}

export default function AboutPage() {
    return (
        <About />
    );
}