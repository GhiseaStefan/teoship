'use client';

import { useState, useEffect } from 'react';
import styles from './ScrollUpButton.module.css';

export default function ScrollUpButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    className={styles.scrollUpButton}
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    title="Scroll to top"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 4L4 12H8V20H16V12H20L12 4Z"
                            fill="currentColor"
                        />
                    </svg>
                </button>
            )}
        </>
    );
}
