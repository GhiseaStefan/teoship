'use client';

import styles from "./Footer.module.css";
import { useTranslation } from "../../lib/useTranslation";

export default function Footer() {
    const { t } = useTranslation();
    
    return (
        <footer className={styles.footer}>
            <div className={styles.mainContent}>
                {/* Logo Section */}
                <div className={styles.logoSection}>
                    <div className={styles.logoContainer}>
                        <div className={styles.logoIcon}>
                            <img src="/images/logo.png" alt="Teoship" className={styles.logoImage} />
                        </div>
                        <span className={styles.logoText}>teoship.ro</span>
                    </div>
                </div>

                {/* Warehouse Section */}
                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>{t('footer.warehouse.title')}</h3>
                    <div className={styles.address}>
                        {t('footer.warehouse.address').map((line: string, index: number) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                    <div className={styles.schedule}>
                        <p className={styles.scheduleTitle}>{t('footer.warehouse.schedule.title')}</p>
                        <p>{t('footer.warehouse.schedule.hours')}</p>
                    </div>
                </div>

                {/* Contact Section */}
                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>{t('footer.contact.title')}</h3>
                    <div className={styles.contact}>
                        <p><a href="#" className={styles.link}>{t('footer.contact.form')}</a></p>
                        <p><a href="tel:+40770425221" className={styles.link}>{t('footer.contact.phone')}</a></p>
                    </div>
                </div>

                {/* Services Section */}
                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>{t('footer.services.title')}</h3>
                    <div className={styles.services}>
                        {t('footer.services.list').map((service: string, index: number) => (
                            <p key={index}>{service}</p>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className={styles.bottomSection}>
                <div className={styles.copyright}>
                    {t('footer.bottom.copyright')}
                </div>
                <div className={styles.legalLinks}>
                    <a href="#" className={styles.link}>{t('footer.bottom.links.cookies')}</a>
                    <span className={styles.separator}> | </span>
                    <a href="#" className={styles.link}>{t('footer.bottom.links.privacy')}</a>
                </div>
            </div>
        </footer>
    );
}