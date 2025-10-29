import Privacy from "@/src/components/Privacy/Privacy";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politica de confidentialitate',
  description: 'Politica de confidentialitate cu privire la prelucrarea datelor cu caracter personal conform GDPR si legislatiei aplicabile.',
  openGraph: {
    title: 'Politica de confidentialitate - Teoship',
    description: 'Politica de confidentialitate cu privire la prelucrarea datelor cu caracter personal.',
    url: 'https://teoship.ro/privacy',
  },
}

export default function PrivacyPage() {
    return (
            <Privacy />
    );
}