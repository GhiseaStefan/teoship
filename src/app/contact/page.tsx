import Contact from '../../components/Contact/Contact';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactează-ne pentru servicii de fulfillment! Completează formularul și trimite-ne întrebările tale. Echipa noastră te va contacta în cel mai scurt timp posibil.',
  openGraph: {
    title: 'Contact - Teoship Fulfillment',
    description: 'Contactează-ne pentru servicii de fulfillment. Completează formularul și trimite-ne întrebările tale.',
    url: 'https://teoship.ro/contact',
  },
}

export default function ContactPage() {
    return <Contact />; 
}