import styles from "./Section5.module.css";

export default function Section5() {
    return (
        <div className={styles.section5}>
            <div className={styles.container}>
                {/* Left Column - Red Text Block */}
                <div className={styles.textColumn}>
                    <div className={styles.redBlock}>
                        <div className={styles.smallHeading}>Depozit impecabil</div>
                        <div className={styles.mainTitle}>Spatiu organizat si curat</div>
                        <div className={styles.bodyText}>
                            <p>Cu echipamente perfect adaptate, depozitul nostru este un mediu ideal pentru gestionarea diverselor marfuri.</p>
                            <p>Organizam eficient zonele de depozitare, adaptandu-le la nevoile specifice ale fiecarui tip de stoc.</p>
                            <p>Aceasta structura ne permite sa gestionam marfurile cu usurinta, asigurandu-ne ca fiecare articol este depozitat in locul potrivit.</p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Warehouse Image */}
                <div className={styles.imageColumn}>
                    <div className={styles.imageContainer}>
                        <img 
                            src="/images/functionare.jpg" 
                            alt="Centru de fulfillment depozit" 
                            className={styles.warehouseImage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
