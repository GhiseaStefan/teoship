import Cookies from '../../components/Cookies/Cookies';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politica Cookie',
  description: 'Documentul oficial care reglementeaza utilizarea cookie-urilor pe site-ul Teoship conform legislatiei aplicabile.',
  openGraph: {
    title: 'Politica Cookie - Teoship',
    description: 'Documentul oficial care reglementeaza utilizarea cookie-urilor pe site-ul Teoship.',
    url: 'https://teoship.ro/cookies',
  },
}

export default function CookiesPage() {
    return (
        <Cookies />
    );
}