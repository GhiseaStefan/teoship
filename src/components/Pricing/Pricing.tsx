'use client';

import { useState } from 'react';
import styles from "./Pricing.module.css";
import { useTranslation } from "../../lib/useTranslation";

type PricingTab = 'inOut' | 'storage' | 'processing';

export default function Pricing() {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState<PricingTab>('inOut');

    return (
        <div className={styles.pricing}>
            <div className={styles.pricingContainer}>
                <h1 className={styles.pricingTitle}>{t('section1.pricing.title')}</h1>
                <p className={styles.pricingVatNote}>{t('section1.pricing.vatNote')}</p>

                <div className={styles.tabsContainer}>
                    <button
                        className={`${styles.tab} ${activeTab === 'inOut' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('inOut')}
                    >
                        {t('section1.pricing.tabs.inOut')}
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === 'storage' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('storage')}
                    >
                        {t('section1.pricing.tabs.storage')}
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === 'processing' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('processing')}
                    >
                        {t('section1.pricing.tabs.processing')}
                    </button>
                </div>

                <div className={styles.pricingContent}>
                    {activeTab === 'inOut' && (
                        <div className={styles.pricingList}>
                            <div className={styles.pricingItem}>
                                <span className={styles.pricingLabel}>{t('section1.pricing.inOut.labeling')}</span>
                                <span className={styles.pricingValue}>0.04 {t('section1.pricing.currency.euro')}</span>
                            </div>
                            <div className={styles.pricingItem}>
                                <span className={styles.pricingLabel}>{t('section1.pricing.inOut.receptionPallet')}</span>
                                <span className={styles.pricingValue}>1.2 {t('section1.pricing.currency.euro')}/{t('section1.pricing.per.pallet')}</span>
                            </div>
                            <div className={styles.pricingItem}>
                                <span className={styles.pricingLabel}>{t('section1.pricing.inOut.receptionBox')}</span>
                                <span className={styles.pricingValue}>0.5 {t('section1.pricing.currency.euro')}/{t('section1.pricing.per.box')}</span>
                            </div>
                        </div>
                    )}

                    {activeTab === 'storage' && (
                        <div className={styles.pricingList}>
                            <div className={styles.pricingItem}>
                                <span className={styles.pricingLabel}>{t('section1.pricing.storage.pallet')}</span>
                                <span className={styles.pricingValue}>7 {t('section1.pricing.currency.euro')}/{t('section1.pricing.per.month')}</span>
                            </div>
                            <div className={styles.pricingItem}>
                                <span className={styles.pricingLabel}>{t('section1.pricing.storage.rack')}</span>
                                <span className={styles.pricingValue}>12 {t('section1.pricing.currency.euro')}/{t('section1.pricing.per.month')}</span>
                            </div>
                        </div>
                    )}

                    {activeTab === 'processing' && (
                        <div className={styles.pricingList}>
                            <div className={styles.pricingItem}>
                                <span className={styles.pricingLabel}>{t('section1.pricing.processing.package')}</span>
                                <span className={styles.pricingValue}>4.16 {t('section1.pricing.currency.lei')}/{t('section1.pricing.per.package')}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

