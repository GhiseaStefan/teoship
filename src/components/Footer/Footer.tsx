import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.mainContent}>
                {/* Logo Section */}
                <div className={styles.logoSection}>
                    <div className={styles.logoContainer}>
                        <div className={styles.logoIcon}>
                            <div className={styles.shipIcon}>🚢</div>
                        </div>
                        <span className={styles.logoText}>teoship.ro</span>
                    </div>
                </div>

                {/* Warehouse Section */}
                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Depozit</h3>
                    <div className={styles.address}>
                        <p>Str. Moara Domneasca nr 8, Hala V9,</p>
                        <p>Sat Afumati,</p>
                        <p>Judetul Ilfov,</p>
                        <p>077010, Romania</p>
                    </div>
                    <div className={styles.schedule}>
                        <p className={styles.scheduleTitle}>Program</p>
                        <p>L-V: 09:00 - 16:30</p>
                    </div>
                </div>

                {/* Contact Section */}
                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Contact</h3>
                    <div className={styles.contact}>
                        <p><a href="#" className={styles.link}>Formular de contact</a></p>
                        <p><a href="tel:+40770425221" className={styles.link}>+40 770 425 221</a></p>
                    </div>
                </div>

                {/* Services Section */}
                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Servicii</h3>
                    <div className={styles.services}>
                        <p>Fulfillment complet</p>
                        <p>Depozitare si livrare</p>
                        <p>Gestionare retururi</p>
                        <p>Suport tehnic</p>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className={styles.bottomSection}>
                <div className={styles.copyright}>
                    ©2025, teoship.ro. Toate drepturile rezervate.
                </div>
                <div className={styles.legalLinks}>
                    <a href="#" className={styles.link}>Politica Cookie</a>
                    <span className={styles.separator}> | </span>
                    <a href="#" className={styles.link}>Politica de confidentialitate</a>
                </div>
            </div>
        </footer>
    );
}