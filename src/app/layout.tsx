import styles from '../components/MyStyles.module.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <div className={styles.header}>
                    <p>Header</p>
                </div>
                {children}
                <div className={styles.footer}>
                    <p>Footer</p>
                </div>
            </body>
        </html>
    )
}