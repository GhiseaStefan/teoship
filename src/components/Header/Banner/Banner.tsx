'use client';

import styles from './Banner.module.css';
import { useTranslation } from '../../../lib/useTranslation';

export default function Banner() {
    const { t } = useTranslation();
    
    return (
        <div className={styles.banner}>
            <div className={styles.bannerContent}>
                <h1 className={styles.bannerTitle}>{t('banner.title')}</h1>
                <p className={styles.bannerSubtitle}>{t('banner.subtitle')}</p>
                <button className={styles.bannerButton}>{t('banner.button')}</button>
            </div>
        </div>
    );
}