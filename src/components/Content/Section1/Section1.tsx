'use client';

import { useState } from 'react';
import styles from "./Section1.module.css";
import { useTranslation } from "../../../lib/useTranslation";

type PricingTab = 'inOut' | 'storage' | 'processing';

export default function Section1() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<PricingTab>('inOut');

  return (
    <div className={styles.section1}>
      {/* Pricing Tabs Section */}
      <div className={styles.pricingContainer}>
        <h2 className={styles.pricingTitle}>{t('section1.pricing.title')}</h2>

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

      {/* Statistics Section */}
      <div className={styles.text}>
        <h2 className={styles.title}>
          {t('section1.title')}
        </h2>
        <p className={styles.subtitle}>
          {t('section1.subtitle')}
        </p>

        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#3396D3" />
                <path d="M2 17L12 22L22 17" stroke="#3396D3" strokeWidth="2" />
                <path d="M2 12L12 17L22 12" stroke="#3396D3" strokeWidth="2" />
              </svg>
            </div>
            <div className={styles.statNumber}>15+</div>
            <div className={styles.statDescription}>
              {t('section1.stats.deliveries')}
            </div>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M3 21H21" stroke="#3396D3" strokeWidth="2" />
                <path
                  d="M5 21V7L13 2L21 7V21"
                  stroke="#3396D3"
                  strokeWidth="2"
                />
                <path d="M9 9H15" stroke="#3396D3" strokeWidth="2" />
                <path d="M9 13H15" stroke="#3396D3" strokeWidth="2" />
                <path d="M9 17H15" stroke="#3396D3" strokeWidth="2" />
              </svg>
            </div>
            <div className={styles.statNumber}>8</div>
            <div className={styles.statDescription}>
              {t('section1.stats.centers')}
            </div>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#3396D3"
                  strokeWidth="2"
                />
                <path d="M12 6V12L16 14" stroke="#3396D3" strokeWidth="2" />
              </svg>
            </div>
            <div className={styles.statNumber}>95%</div>
            <div className={styles.statDescription}>{t('section1.stats.onTime')}</div>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#3396D3"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="6"
                  stroke="#3396D3"
                  strokeWidth="2"
                />
                <circle cx="12" cy="12" r="2" fill="#3396D3" />
              </svg>
            </div>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statDescription}>{t('section1.stats.accuracy')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
