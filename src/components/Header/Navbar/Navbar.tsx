'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslation } from '../../../lib/useTranslation';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isRootPage = pathname === '/';
    const { t, locale, changeLanguage } = useTranslation();

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

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div style={{ marginTop: isRootPage ? '0' : '80px' }}>
            <nav className={`${styles.navbar} ${shouldUseScrolledStyle ? styles.scrolled : ''}`}>
                <div className={styles.navbarContainer}>
                    {/* Logo */}
                    <div className={styles.navbarLogo}>
                        <a href="/" className={styles.logoLink}>
                            <div className={styles.logoContainer}>
                                <div className={styles.logoTextContainer}>
                                    <span>Teoship</span>
                                    <span className={styles.fulfillmentText}>Fulfillment</span>
                                </div>
                                <img src="/images/logo.png" alt="Teoship" />
                            </div>
                        </a>
                    </div>

                    {/* Hamburger Menu */}
                    <div
                        className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}
                        onClick={toggleMobileMenu}
                    >
                        <div className={styles.hamburgerLine}></div>
                        <div className={styles.hamburgerLine}></div>
                        <div className={styles.hamburgerLine}></div>
                    </div>

                    {/* Navigation Links */}
                    <div className={`${styles.navbarMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
                        <a href="/" className={`${styles.navbarLink} ${pathname === '/' ? styles.active : ''}`} onClick={closeMobileMenu}>{t('navbar.home')}</a>
                        <a href="/about" className={`${styles.navbarLink} ${pathname === '/about' ? styles.active : ''}`} onClick={closeMobileMenu}>{t('navbar.about')}</a>
                        <a href="/advantages" className={`${styles.navbarLink} ${pathname === '/advantages' ? styles.active : ''}`} onClick={closeMobileMenu}>{t('navbar.advantages')}</a>
                        <a href="/pricing" className={`${styles.navbarLink} ${pathname === '/pricing' ? styles.active : ''}`} onClick={closeMobileMenu}>{t('navbar.pricing')}</a>
                        <a href="/contact" className={`${styles.navbarLink} ${pathname === '/contact' ? styles.active : ''}`} onClick={closeMobileMenu}>{t('navbar.contact')}</a>
                    </div>

                    {/* Language Switcher */}
                    <div className={styles.languageSwitcher}>
                        <button
                            onClick={() => changeLanguage('ro')}
                            className={`${styles.langButton} ${locale === 'ro' ? styles.active : ''}`}
                        >
                            RO
                        </button>
                        <button
                            onClick={() => changeLanguage('en')}
                            className={`${styles.langButton} ${locale === 'en' ? styles.active : ''}`}
                        >
                            EN
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}