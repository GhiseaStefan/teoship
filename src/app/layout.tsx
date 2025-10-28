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