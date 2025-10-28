'use client';

import styles from './Advantages.module.css';
import { useTranslation } from '../../lib/useTranslation';

export default function Advantages() {
    const { t } = useTranslation();

    const advantages = [
        {
            key: 'reduceCosts',
            icon: '✂️',
            title: t('advantages.cards.reduceCosts.title'),
            description: t('advantages.cards.reduceCosts.description')
        },
        {
            key: 'saveTime',
            icon: '🕐',
            title: t('advantages.cards.saveTime.title'),
            description: t('advantages.cards.saveTime.description')
        },
        {
            key: 'insurance',
            icon: '📦',
            title: t('advantages.cards.insurance.title'),
            description: t('advantages.cards.insurance.description')
        },
        {
            key: 'noStress',
            icon: '🧘',
            title: t('advantages.cards.noStress.title'),
            description: t('advantages.cards.noStress.description')
        },
        {
            key: 'noDelays',
            icon: '⚡',
            title: t('advantages.cards.noDelays.title'),
            description: t('advantages.cards.noDelays.description')
        },
        {
            key: 'noConstraints',
            icon: '📈',
            title: t('advantages.cards.noConstraints.title'),
            description: t('advantages.cards.noConstraints.description')
        },
        {
            key: 'customerSupport',
            icon: '🎧',
            title: t('advantages.cards.customerSupport.title'),
            description: t('advantages.cards.customerSupport.description')
        },
        {
            key: 'businessSupport',
            icon: '🤝',
            title: t('advantages.cards.businessSupport.title'),
            description: t('advantages.cards.businessSupport.description')
        },
        {
            key: 'noDocuments',
            icon: '📋',
            title: t('advantages.cards.noDocuments.title'),
            description: t('advantages.cards.noDocuments.description')
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>{t('advantages.title')}</h1>
                <p className={styles.subtitle}>{t('advantages.subtitle')}</p>
            </div>
            
            <div className={styles.grid}>
                {advantages.map((advantage) => (
                    <div key={advantage.key} className={styles.card}>
                        <div className={styles.iconContainer}>
                            <span className={styles.icon}>{advantage.icon}</span>
                        </div>
                        <h3 className={styles.cardTitle}>{advantage.title}</h3>
                        <p className={styles.cardDescription}>{advantage.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}