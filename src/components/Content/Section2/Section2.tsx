'use client';

import styles from "./Section2.module.css";
import { useTranslation } from "../../../lib/useTranslation";

export default function Section2() {
    const { t } = useTranslation();
    
    return (
        <div className={styles.section2}>
            <div className={styles.container}>
                {/* Left Block - Red Background */}
                <div className={styles.block}>
                    <div className={styles.smallHeading}>{t('section2.offer.heading')}</div>
                    <div className={styles.mainTitle}>{t('section2.offer.title')}</div>
                    <div className={styles.bodyText}>
                        <p>{t('section2.offer.description')}</p>
                        <p>{t('section2.offer.details')}</p>
                    </div>
                </div>

                {/* Middle Block - Light Grey Background */}
                <div className={styles.block}>
                    <div className={styles.smallHeading}>{t('section2.benefits.heading')}</div>
                    <div className={styles.mainTitle}>{t('section2.benefits.title')}</div>
                    <div className={styles.bodyText}>
                        <p>{t('section2.benefits.description')}</p>
                    </div>
                </div>

                {/* Right Block - Light Grey Background */}
                <div className={styles.block}>
                    <div className={styles.smallHeading}>{t('section2.extra.heading')}</div>
                    <div className={styles.mainTitle}>{t('section2.extra.title')}</div>
                    <div className={styles.bodyText}>
                        <p>{t('section2.extra.description')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}