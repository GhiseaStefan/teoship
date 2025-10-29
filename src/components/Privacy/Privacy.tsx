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
                    <h2 className={styles.privacySectionTitle}>{t('privacy.sections.definitions.title')}</h2>
                    <div className={styles.privacySectionContent}>
                        <p>{t('privacy.sections.definitions.content.teoship')}</p>
                        <p>{t('privacy.sections.definitions.content.seller')}</p>
                        <p>{t('privacy.sections.definitions.content.site')}</p>
                        <p>{t('privacy.sections.definitions.content.buyer')}</p>
                        <p>{t('privacy.sections.definitions.content.client')}</p>
                        <p>{t('privacy.sections.definitions.content.user')}</p>
                        <p>{t('privacy.sections.definitions.content.account')}</p>
                        <p>{t('privacy.sections.definitions.content.order')}</p>
                        <p>{t('privacy.sections.definitions.content.goods')}</p>
                        <p>{t('privacy.sections.definitions.content.campaign')}</p>
                        <p>{t('privacy.sections.definitions.content.contract')}</p>
                        <p>{t('privacy.sections.definitions.content.content')}</p>
                        <p>{t('privacy.sections.definitions.content.communications')}</p>
                        <p>{t('privacy.sections.definitions.content.transaction')}</p>
                    </div>
                </section>

                <section className={styles.privacySection}>
                    <h2 className={styles.privacySectionTitle}>{t('privacy.sections.documents.title')}</h2>
                    <div className={styles.privacySectionContent}>
                        <p>{t('privacy.sections.documents.content')}</p>
                    </div>
                </section>

                <section className={styles.privacySection}>
                    <h2 className={styles.privacySectionTitle}>{t('privacy.sections.policy.title')}</h2>
                    <div className={styles.privacySectionContent}>
                        {Array.isArray(t('privacy.sections.policy.content')) ? 
                            t('privacy.sections.policy.content').map((paragraph: string, index: number) => (
                                <p key={index}>{paragraph}</p>
                            )) : 
                            <p>{t('privacy.sections.policy.content')}</p>
                        }
                    </div>
                </section>

                <section className={styles.privacySection}>
                    <h2 className={styles.privacySectionTitle}>{t('privacy.sections.intellectual.title')}</h2>
                    <div className={styles.privacySectionContent}>
                        <p>{t('privacy.sections.intellectual.content')}</p>
                    </div>
                </section>

                <section className={styles.privacySection}>
                    <h2 className={styles.privacySectionTitle}>{t('privacy.sections.order.title')}</h2>
                    <div className={styles.privacySectionContent}>
                        {Array.isArray(t('privacy.sections.order.content')) ? 
                            t('privacy.sections.order.content').map((paragraph: string, index: number) => (
                                <p key={index}>{paragraph}</p>
                            )) : 
                            <p>{t('privacy.sections.order.content')}</p>
                        }
                        <div className={styles.privacyHighlight}>
                            <p><strong>{t('privacy.sections.order.highlight')}</strong></p>
                        </div>
                    </div>
                </section>

                <section className={styles.privacySection}>
                    <h2 className={styles.privacySectionTitle}>{t('privacy.sections.confidentiality.title')}</h2>
                    <div className={styles.privacySectionContent}>
                        <p>{t('privacy.sections.confidentiality.content')}</p>
                    </div>
                </section>

                <section className={styles.privacySection}>
                    <h2 className={styles.privacySectionTitle}>{t('privacy.sections.communications.title')}</h2>
                    <div className={styles.privacySectionContent}>
                        {Array.isArray(t('privacy.sections.communications.content')) ? 
                            t('privacy.sections.communications.content').map((paragraph: string, index: number) => (
                                <p key={index}>{paragraph}</p>
                            )) : 
                            <p>{t('privacy.sections.communications.content')}</p>
                        }
                    </div>
                </section>

                <section className={styles.privacySection}>
                    <h2 className={styles.privacySectionTitle}>{t('privacy.sections.delivery.title')}</h2>
                    <div className={styles.privacySectionContent}>
                        <p>{t('privacy.sections.delivery.content')}</p>
                    </div>
                </section>

                <section className={styles.privacySection}>
                    <h2 className={styles.privacySectionTitle}>{t('privacy.sections.responsibility.title')}</h2>
                    <div className={styles.privacySectionContent}>
                        <p>{t('privacy.sections.responsibility.content')}</p>
                    </div>
                </section>

                <section className={styles.privacySection}>
                    <h2 className={styles.privacySectionTitle}>{t('privacy.sections.cookies.title')}</h2>
                    <div className={styles.privacySectionContent}>
                        <p>{t('privacy.sections.cookies.content')}</p>
                    </div>
                </section>

                <section className={styles.privacySection}>
                    <h2 className={styles.privacySectionTitle}>{t('privacy.sections.force.title')}</h2>
                    <div className={styles.privacySectionContent}>
                        <p>{t('privacy.sections.force.content')}</p>
                    </div>
                </section>

                <section className={styles.privacySection}>
                    <h2 className={styles.privacySectionTitle}>{t('privacy.sections.jurisdiction.title')}</h2>
                    <div className={styles.privacySectionContent}>
                        <p>{t('privacy.sections.jurisdiction.content')}</p>
                    </div>
                </section>

                <section className={styles.privacySection}>
                    <h2 className={styles.privacySectionTitle}>{t('privacy.sections.returns.title')}</h2>
                    <div className={styles.privacySectionContent}>
                        <p>{t('privacy.sections.returns.content')}</p>
                        <ul className={styles.privacyList}>
                            {Array.isArray(t('privacy.sections.returns.procedure')) ? 
                                t('privacy.sections.returns.procedure').map((item: string, index: number) => (
                                    <li key={index}>{item}</li>
                                )) : 
                                <li>{t('privacy.sections.returns.procedure')}</li>
                            }
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
}