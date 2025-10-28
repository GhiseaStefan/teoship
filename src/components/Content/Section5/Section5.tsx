'use client';

import styles from "./Section5.module.css";
import { useTranslation } from "../../../lib/useTranslation";

export default function Section5() {
    const { t } = useTranslation();
    
    return (
        <div className={styles.section5}>
            <div className={styles.container}>
                {/* Left Column - Red Text Block */}
                <div className={styles.textColumn}>
                    <div className={styles.redBlock}>
                        <div className={styles.smallHeading}>{t('section5.heading')}</div>
                        <div className={styles.mainTitle}>{t('section5.title')}</div>
                        <div className={styles.bodyText}>
                            {t('section5.description').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column - Warehouse Image */}
                <div className={styles.imageColumn}>
                    <div className={styles.imageContainer}>
                        <img 
                            src="/images/functionare2.png" 
                            alt="Centru de fulfillment depozit" 
                            className={styles.warehouseImage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
