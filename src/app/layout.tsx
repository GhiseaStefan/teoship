import './globals.css'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar/Navbar'
import ScrollUpButton from '../components/ScrollUpButton/ScrollUpButton'
import { LocaleProvider } from '../lib/LocaleContext'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link 
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700;800&display=swap" 
                    rel="stylesheet" 
                />
            </head>
            <body style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                minHeight: '100vh' 
            }}>
                <LocaleProvider>
                    <Navbar />
                    <main style={{ flex: 1 }}>
                        {children}
                    </main>
                    <Footer />
                    <ScrollUpButton />
                </LocaleProvider>
            </body>
        </html>
    )
}