'use client';

import styles from './Cookies.module.css';
import { useTranslation } from '@/src/lib/useTranslation';

export default function Cookies() {
    const { t } = useTranslation();

    return (
        <div className={styles.cookiesContainer}>
            <header className={styles.cookiesHeader}>
                <h1 className={styles.cookiesTitle}>{t('cookies.title')}</h1>
                <p className={styles.cookiesSubtitle}>
                    {t('cookies.subtitle')}
                </p>
            </header>

            <main className={styles.cookiesContent}>
                <section className={styles.cookiesSection}>
                    <h2 className={styles.cookiesSectionTitle}>{t('cookies.sections.what.title')}</h2>
                    <div className={styles.cookiesSectionContent}>
                        <p>{t('cookies.sections.what.content')}</p>
                    </div>
                </section>

                <section className={styles.cookiesSection}>
                    <h2 className={styles.cookiesSectionTitle}>{t('cookies.sections.types.title')}</h2>
                    <div className={styles.cookiesSectionContent}>
                        {Array.isArray(t('cookies.sections.types.content')) ? 
                            t('cookies.sections.types.content').map((paragraph: string, index: number) => (
                                <p key={index}>{paragraph}</p>
                            )) : 
                            <p>{t('cookies.sections.types.content')}</p>
                        }
                    </div>
                </section>

                <section className={styles.cookiesSection}>
                    <h2 className={styles.cookiesSectionTitle}>{t('cookies.sections.essential.title')}</h2>
                    <div className={styles.cookiesSectionContent}>
                        <p>{t('cookies.sections.essential.content')}</p>
                    </div>
                </section>

                <section className={styles.cookiesSection}>
                    <h2 className={styles.cookiesSectionTitle}>{t('cookies.sections.analytics.title')}</h2>
                    <div className={styles.cookiesSectionContent}>
                        <p>{t('cookies.sections.analytics.content')}</p>
                    </div>
                </section>

                <section className={styles.cookiesSection}>
                    <h2 className={styles.cookiesSectionTitle}>{t('cookies.sections.marketing.title')}</h2>
                    <div className={styles.cookiesSectionContent}>
                        <p>{t('cookies.sections.marketing.content')}</p>
                    </div>
                </section>

                <section className={styles.cookiesSection}>
                    <h2 className={styles.cookiesSectionTitle}>{t('cookies.sections.thirdParty.title')}</h2>
                    <div className={styles.cookiesSectionContent}>
                        <p>{t('cookies.sections.thirdParty.content')}</p>
                    </div>
                </section>

                <section className={styles.cookiesSection}>
                    <h2 className={styles.cookiesSectionTitle}>{t('cookies.sections.management.title')}</h2>
                    <div className={styles.cookiesSectionContent}>
                        <p>{t('cookies.sections.management.content')}</p>
                        <ul className={styles.cookiesList}>
                            {Array.isArray(t('cookies.sections.management.steps')) ? 
                                t('cookies.sections.management.steps').map((item: string, index: number) => (
                                    <li key={index}>{item}</li>
                                )) : 
                                <li>{t('cookies.sections.management.steps')}</li>
                            }
                        </ul>
                    </div>
                </section>

                <section className={styles.cookiesSection}>
                    <h2 className={styles.cookiesSectionTitle}>{t('cookies.sections.duration.title')}</h2>
                    <div className={styles.cookiesSectionContent}>
                        <p>{t('cookies.sections.duration.content')}</p>
                    </div>
                </section>

                <section className={styles.cookiesSection}>
                    <h2 className={styles.cookiesSectionTitle}>{t('cookies.sections.updates.title')}</h2>
                    <div className={styles.cookiesSectionContent}>
                        <p>{t('cookies.sections.updates.content')}</p>
                    </div>
                </section>

                <section className={styles.cookiesSection}>
                    <h2 className={styles.cookiesSectionTitle}>{t('cookies.sections.contact.title')}</h2>
                    <div className={styles.cookiesSectionContent}>
                        <p>{t('cookies.sections.contact.content')}</p>
                    </div>
                </section>
            </main>
        </div>
    );
}
