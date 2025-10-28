'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isRootPage = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            setIsScrolled(scrollTop > 10);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once to set initial state
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Apply scrolled style if scrolled on root page OR on any non-root page
    const shouldUseScrolledStyle = isRootPage ? isScrolled : true;

    return (
        <div style={{ marginTop: isRootPage ? '0' : '80px' }}>
            <nav className={`${styles.navbar} ${shouldUseScrolledStyle ? styles.scrolled : ''}`}>
                <div className={styles.navbarContainer}>
                    {/* Logo */}
                    <div className={styles.navbarLogo}>
                        <a href="/" className={styles.logoLink}>
                            <span>Teoship</span>
                        </a>
                    </div>

                    {/* Navigation Links */}
                    <div className={styles.navbarMenu}>
                        <a href="/" className={styles.navbarLink}>Acasa</a>
                        <a href="#about" className={styles.navbarLink}>Despre</a>
                        <a href="#services" className={styles.navbarLink}>Servicii</a>
                        <a href="/contact" className={styles.navbarLink}>Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}