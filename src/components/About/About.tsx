'use client';

import styles from './About.module.css';
import { useTranslation } from '../../lib/useTranslation';

export default function About() {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.textSection}>
                    <h1 className={styles.title}>{t('about.title')}</h1>
                    
                    <div className={styles.textContent}>
                        <p className={styles.paragraph}>{t('about.introduction')}</p>
                        
                        <p className={styles.paragraph}>{t('about.approach')}</p>
                        
                        <p className={styles.paragraph}>{t('about.technology')}</p>
                        
                        <p className={styles.paragraph}>{t('about.goal')}</p>
                        
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('about.vision.title')}</h2>
                            <p className={styles.paragraph}>{t('about.vision.description')}</p>
                        </div>
                        
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('about.mission.title')}</h2>
                            <p className={styles.paragraph}>{t('about.mission.description')}</p>
                        </div>
                    </div>
                </div>
                
                <div className={styles.illustrationSection}>
                    <div className={styles.imageContainer}>
                        <img 
                            src="/images/about-illustration.png" 
                            alt="Teoship fulfillment illustration"
                            className={styles.illustrationImage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}