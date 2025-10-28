'use client';

import styles from "./Section1.module.css";
import { useTranslation } from "../../../lib/useTranslation";

export default function Section1() {
  const { t } = useTranslation();
  
  const logos = [
    {
      src: "https://cdn.prod.website-files.com/647371f04a4117524228d2e1/67b6fe703c5f02b91e108e5f_Vinted_logo-p-2000.png",
      alt: "Vinted",
    },
    {
      src: "https://cdn.prod.website-files.com/647371f04a4117524228d2e1/67b6ffdcb134c177ebf363a4_lakrids_by_bulow_logo_bc_1716910874__14291.webp",
      alt: "Lakrids",
    },
    {
      src: "https://cdn.prod.website-files.com/647371f04a4117524228d2e1/67332c53edb05d41a8a033d0_manuka.png",
      alt: "Manuka",
    },
    {
      src: "https://cdn.prod.website-files.com/647371f04a4117524228d2e1/659bfe65c489a49f48ef95f2_satvi-removebg-preview.png",
      alt: "Satvi",
    },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <div className={styles.section1}>
      {/* Logo Scrolling Section */}
      <div className={styles.logoContainer}>
        <div className={styles.logoScroll}>
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
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
            <div className={styles.statNumber}>7,000,000+</div>
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
            <div className={styles.statNumber}>12</div>
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
            <div className={styles.statNumber}>99.4%</div>
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
            <div className={styles.statNumber}>99.9%</div>
            <div className={styles.statDescription}>{t('section1.stats.accuracy')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
