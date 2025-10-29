'use client';

import styles from './Privacy.module.css';
import { useTranslation } from '@/src/lib/useTranslation';

export default function Privacy() {
    const { t } = useTranslation();

    return (
        <div className={styles.privacyContainer}>
            <header className={styles.privacyHeader}>
                <h1 className={styles.privacyTitle}>{t('privacy.title')}</h1>
                <p className={styles.privacySubtitle}>
                    {t('privacy.subtitle')}
                </p>
            </header>

            <main className={styles.privacyContent}>
                <section className={styles.privacySection}>
                    <h2 className={styles.privacySectionTitle}>{t('privacy.sections.introduction.title')}</h2>
                    <div className={styles.privacySectionContent}>
                        {Array.isArray(t('privacy.sections.introduction.content')) ? 
                            t('privacy.sections.introduction.content').map((paragraph: string, index: number) => (
                                <p key={index}>{paragraph}</p>
                            )) : 
                            <p>{t('privacy.sections.introduction.content')}</p>
                        }
                    </div>
                </section>

                <section className={styles.privacySection}>
                    <h2 className={styles.privacySectionTitle}>{t('privacy.sections.whoWeAre.title')}</h2>
                    <div className={styles.privacySectionContent}>
                        <p>{t('privacy.sections.whoWeAre.content')}</p>
                    </div>
                </section>

                <section className={styles.privacySection}>
                    <h2 className={styles.privacySectionTitle}>{t('privacy.sections.dataCategories.title')}</h2>
                    <div className={styles.privacySectionContent}>
                        {Array.isArray(t('privacy.sections.dataCategories.content')) ? 
                            t('privacy.sections.dataCategories.content').map((paragraph: string, index: number) => (
                                <p key={index}>{paragraph}</p>
                            )) : 
                            <p>{t('privacy.sections.dataCategories.content')}</p>
                        }
                    </div>
                </section>

                <section className={styles.privacySection}>
                    <h2 className={styles.privacySectionTitle}>{t('privacy.sections.purposes.title')}</h2>
                    <div className={styles.privacySectionContent}>
                        {Array.isArray(t('privacy.sections.purposes.content')) ? 
                            t('privacy.sections.purposes.content').map((paragraph: string, index: number) => (
                                <p key={index}>{paragraph}</p>
                            )) : 
                            <p>{t('privacy.sections.purposes.content')}</p>
                        }
                    </div>
                </section>

                <section className={styles.privacySection}>
                    <h2 className={styles.privacySectionTitle}>{t('privacy.sections.dataSharing.title')}</h2>
                    <div className={styles.privacySectionContent}>
                        <p>{t('privacy.sections.dataSharing.content')}</p>
                    </div>
                </section>

                <section className={styles.privacySection}>
                    <h2 className={styles.privacySectionTitle}>{t('privacy.sections.rights.title')}</h2>
                    <div className={styles.privacySectionContent}>
                        {Array.isArray(t('privacy.sections.rights.content')) ? 
                            t('privacy.sections.rights.content').map((paragraph: string, index: number) => (
                                <p key={index}>{paragraph}</p>
                            )) : 
                            <p>{t('privacy.sections.rights.content')}</p>
                        }
                    </div>
                </section>

                <section className={styles.privacySection}>
                    <h2 className={styles.privacySectionTitle}>{t('privacy.sections.cookies.title')}</h2>
                    <div className={styles.privacySectionContent}>
                        {Array.isArray(t('privacy.sections.cookies.content')) ? 
                            t('privacy.sections.cookies.content').map((paragraph: string, index: number) => (
                                <p key={index}>{paragraph}</p>
                            )) : 
                            <p>{t('privacy.sections.cookies.content')}</p>
                        }
                    </div>
                </section>
            </main>
        </div>
    );
}