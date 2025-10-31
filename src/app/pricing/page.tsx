import Pricing from '@/src/components/Pricing/Pricing';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Preturi',
    description: 'Preturi transparente pentru serviciile de fulfillment. Costuri clare si predictibile pentru toate serviciile noastre.',
    openGraph: {
        title: 'Preturi - Teoship Fulfillment',
        description: 'Preturi transparente pentru serviciile de fulfillment.',
        url: 'https://teoship.ro/pricing',
    },
}

export default function PricingPage() {
    return (
        <Pricing />
    );
}

