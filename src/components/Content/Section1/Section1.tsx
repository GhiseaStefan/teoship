'use client';

import styles from "./Section1.module.css";
import { useTranslation } from "../../../lib/useTranslation";

export default function Section1() {
  const { t } = useTranslation();

  return (
    <div className={styles.section1}>
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
