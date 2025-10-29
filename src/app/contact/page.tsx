import Contact from '../../components/Contact/Contact';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contacteaza-ne pentru servicii de fulfillment! Completeaza formularul si trimite-ne intrebarile tale. Echipa noastra te va contacta in cel mai scurt timp posibil.',
  openGraph: {
    title: 'Contact - Teoship Fulfillment',
    description: 'Contacteaza-ne pentru servicii de fulfillment. Completeaza formularul si trimite-ne intrebarile tale.',
    url: 'https://teoship.ro/contact',
  },
}

export default function ContactPage() {
    return <Contact />; 
}