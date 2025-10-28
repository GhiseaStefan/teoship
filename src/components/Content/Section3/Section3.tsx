'use client';

import { useState } from "react";
import { useTranslation } from "../../../lib/useTranslation";
import styles from "./Section3.module.css";

export default function Section3() {
    const { t } = useTranslation();
    const [expandedQuestions, setExpandedQuestions] = useState<{[key: string]: boolean}>({
        fulfillment: true // Open by default
    });

    const toggleQuestion = (questionId: string) => {
        setExpandedQuestions(prev => {
            // If clicking the currently open question, close it
            if (prev[questionId]) {
                return { [questionId]: false };
            }
            // Otherwise, close all and open the clicked one
            return { [questionId]: true };
        });
    };

    return (
        <div className={styles.section3}>
            <div className={styles.container}>
                {/* Left Column - Warehouse Image */}
                <div className={styles.imageColumn}>
                    <div className={styles.imageContainer}>
                        <img 
                            src="/images/functionare.jpg" 
                            alt="Centru de fulfillment depozit" 
                            className={styles.warehouseImage}
                        />
                    </div>
                </div>

                {/* Right Column - Red Text Block */}
                <div className={styles.textColumn}>
                    <div className={styles.redBlock}>
                        <h2 className={styles.mainHeading}>
                            {t('section3.title')}
                        </h2>
                        
                        <div className={styles.questionItem}>
                            <span 
                                className={styles.expandIcon}
                                onClick={() => toggleQuestion('fulfillment')}
                            >
                                {expandedQuestions.fulfillment ? '−' : '+'}
                            </span>
                            <span className={styles.questionText}>{t('section3.questions.fulfillment.question')}</span>
                        </div>
                        {expandedQuestions.fulfillment && (
                            <div className={styles.expandedAnswer}>
                                {t('section3.questions.fulfillment.answer')}
                            </div>
                        )}

                        <div className={styles.questionItem}>
                            <span 
                                className={styles.expandIcon}
                                onClick={() => toggleQuestion('costs')}
                            >
                                {expandedQuestions.costs ? '−' : '+'}
                            </span>
                            <span className={styles.questionText}>{t('section3.questions.costs.question')}</span>
                        </div>
                        {expandedQuestions.costs && (
                            <div className={styles.expandedAnswer}>
                                {t('section3.questions.costs.answer')}
                            </div>
                        )}

                        <div className={styles.questionItem}>
                            <span 
                                className={styles.expandIcon}
                                onClick={() => toggleQuestion('importance')}
                            >
                                {expandedQuestions.importance ? '−' : '+'}
                            </span>
                            <span className={styles.questionText}>{t('section3.questions.importance.question')}</span>
                        </div>
                        {expandedQuestions.importance && (
                            <div className={styles.expandedAnswer}>
                                {t('section3.questions.importance.answer')}
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}