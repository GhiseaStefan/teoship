import './globals.css'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar/Navbar'

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
                <Navbar />
                <main style={{ flex: 1 }}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}