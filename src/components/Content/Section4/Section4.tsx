'use client';

import styles from "./Section4.module.css";
import { useTranslation } from "../../../lib/useTranslation";

export default function Section4() {
    const { t } = useTranslation();
    
    return (
        <div className={styles.section4}>
            <div className={styles.container}>
                {/* Row 1 */}
                <div className={styles.featureBlock}>
                    <div className={styles.iconContainer}>
                        <div className={styles.icon}>🌍</div>
                    </div>
                    <h3 className={styles.title}>{t('section4.features.crossBorder.title')}</h3>
                    <p className={styles.description}>{t('section4.features.crossBorder.description')}</p>
                </div>

                <div className={styles.featureBlock}>
                    <div className={styles.iconContainer}>
                        <div className={styles.icon}>📊</div>
                    </div>
                    <h3 className={styles.title}>{t('section4.features.scalable.title')}</h3>
                    <p className={styles.description}>{t('section4.features.scalable.description')}</p>
                </div>

                <div className={styles.featureBlock}>
                    <div className={styles.iconContainer}>
                        <div className={styles.icon}>📦</div>
                    </div>
                    <h3 className={styles.title}>{t('section4.features.inventory.title')}</h3>
                    <p className={styles.description}>{t('section4.features.inventory.description')}</p>
                </div>

                {/* Row 2 */}
                <div className={styles.featureBlock}>
                    <div className={styles.iconContainer}>
                        <div className={styles.icon}>📄</div>
                    </div>
                    <h3 className={styles.title}>{t('section4.features.invoicing.title')}</h3>
                    <p className={styles.description}>{t('section4.features.invoicing.description')}</p>
                </div>

                <div className={styles.featureBlock}>
                    <div className={styles.iconContainer}>
                        <div className={styles.icon}>📋</div>
                    </div>
                    <h3 className={styles.title}>{t('section4.features.pickPack.title')}</h3>
                    <p className={styles.description}>{t('section4.features.pickPack.description')}</p>
                </div>

                <div className={styles.featureBlock}>
                    <div className={styles.iconContainer}>
                        <div className={styles.icon}>🚛</div>
                    </div>
                    <h3 className={styles.title}>{t('section4.features.delivery.title')}</h3>
                    <p className={styles.description}>{t('section4.features.delivery.description')}</p>
                </div>
            </div>
        </div>
    );
}