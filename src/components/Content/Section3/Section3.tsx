"use client";

import { useState } from "react";
import styles from "./Section3.module.css";

export default function Section3() {
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
                            Cele 3 intrebari importante la care trebuie sa stii raspunsurile:
                        </h2>
                        
                        <div className={styles.questionItem}>
                            <span 
                                className={styles.expandIcon}
                                onClick={() => toggleQuestion('fulfillment')}
                            >
                                {expandedQuestions.fulfillment ? '−' : '+'}
                            </span>
                            <span className={styles.questionText}>Ce este fulfillment-ul?</span>
                        </div>
                        {expandedQuestions.fulfillment && (
                            <div className={styles.expandedAnswer}>
                                Fulfillment-ul in e-commerce reprezinta procesul complet de primire, pregatire si livrare a comenzilor din magazinul tau online. Cuprinde totul de la gestionarea inventarului si procesarea comenzilor pana la ambalare, etichetare si livrarea finala catre clienti.
                            </div>
                        )}

                        <div className={styles.questionItem}>
                            <span 
                                className={styles.expandIcon}
                                onClick={() => toggleQuestion('costs')}
                            >
                                {expandedQuestions.costs ? '−' : '+'}
                            </span>
                            <span className={styles.questionText}>Cum reduceti costurile?</span>
                        </div>
                        {expandedQuestions.costs && (
                            <div className={styles.expandedAnswer}>
                                Prin externalizarea fulfillment-ului catre furnizori specializati, poti reduce semnificativ costurile operationale. Aceasta include eliminarea necesitatii de spatiu de depozit, reducerea costurilor cu forta de munca si beneficierea de tarife de livrare in vrac. In plus, eviti investitia initiala in tehnologia si infrastructura de fulfillment, in timp ce obtii acces la expertiza profesionala si solutii scalabile care cresc odata cu afacerea ta.
                            </div>
                        )}

                        <div className={styles.questionItem}>
                            <span 
                                className={styles.expandIcon}
                                onClick={() => toggleQuestion('importance')}
                            >
                                {expandedQuestions.importance ? '−' : '+'}
                            </span>
                            <span className={styles.questionText}>De ce este important?</span>
                        </div>
                        {expandedQuestions.importance && (
                            <div className={styles.expandedAnswer}>
                                Fulfillment-ul corespunzator este crucial pentru satisfactia clientilor si cresterea afacerii. Asigura livrarea la timp, reduce erorile de livrare si ofera clientilor informatii precise de urmarire. Un proces de fulfillment fiabil construieste increderea cu clientii, imbunatateste reputatia marcii tale si iti permite sa te concentrezi pe activitatile de baza ale afacerii precum dezvoltarea produselor si marketingul. De asemenea, permite o gestionare mai buna a inventarului si scalabilitate pe masura ce afacerea ta creste.
                            </div>
                        )}

                        <div className={styles.socialSection}>
                            <div className={styles.socialIcons}>
                                <div className={styles.socialIcon}>LinkedIn</div>
                                <div className={styles.socialIcon}>Facebook</div>
                            </div>
                            <div className={styles.followText}>Urmareste-ne</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}