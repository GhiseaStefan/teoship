import styles from "./Section2.module.css";

export default function Section2() {
    return (
        <div className={styles.section2}>
            <div className={styles.container}>
                {/* Left Block - Red Background */}
                <div className={styles.block}>
                    <div className={styles.smallHeading}>Ce oferim?</div>
                    <div className={styles.mainTitle}>Servicii complete de fulfillment</div>
                    <div className={styles.bodyText}>
                        <p>Receptie. Depozitare. Ambalare. Livrare.</p>
                        <p>Capacitate de depozitare de 19.000 m² si capacitatea de a gestiona peste 4.500 comenzi pe zi.</p>
                    </div>
                </div>

                {/* Middle Block - Light Grey Background */}
                <div className={styles.block}>
                    <div className={styles.smallHeading}>Ce obtii?</div>
                    <div className={styles.mainTitle}>Mai putin timp petrecut, mai putin efort, costuri mai mici</div>
                    <div className={styles.bodyText}>
                        <p>Poti sa te concentrezi pe clientii tai, sa iti extinzi portofoliul de produse si sa intri in noi segmente de piata (B2B, international).</p>
                    </div>
                </div>

                {/* Right Block - Light Grey Background */}
                <div className={styles.block}>
                    <div className={styles.smallHeading}>Ce extra oferim?</div>
                    <div className={styles.mainTitle}>Suport clienti si cross-marketing</div>
                    <div className={styles.bodyText}>
                        <p>Mentine relatii de top cu clientii si promoveaza-ti afacerea prin diverse campanii de marketing direct.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}