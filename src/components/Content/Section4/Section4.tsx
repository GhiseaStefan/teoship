import styles from "./Section4.module.css";

export default function Section4() {
    return (
        <div className={styles.section4}>
            <div className={styles.container}>
                {/* Row 1 */}
                <div className={styles.featureBlock}>
                    <div className={styles.iconContainer}>
                        <div className={styles.icon}>🌍</div>
                    </div>
                    <h3 className={styles.title}>Vanzari transfrontaliere</h3>
                    <p className={styles.description}>Solutia noastra de fulfillment transfrontalier iti permite sa vinzi in toata Europa cu usurinta, asigurand livrarea la timp si sigura a produselor tale catre clienti.</p>
                </div>

                <div className={styles.featureBlock}>
                    <div className={styles.iconContainer}>
                        <div className={styles.icon}>📊</div>
                    </div>
                    <h3 className={styles.title}>Tarifare scalabila</h3>
                    <p className={styles.description}>Cu un model de tarifare scalabil, platesti doar pentru serviciile de care are nevoie afacerea ta. Asta ne face o optiune rentabila indiferent cat de mare sau mica este compania ta.</p>
                </div>

                <div className={styles.featureBlock}>
                    <div className={styles.iconContainer}>
                        <div className={styles.icon}>📦</div>
                    </div>
                    <h3 className={styles.title}>Gestionarea inventarului</h3>
                    <p className={styles.description}>Iti simplificam lantul de aprovizionare prin primirea produselor direct de la furnizorul tau si iti permitem sa urmaresti inventarul intr-o singura locatie, primind actualizari instantanee despre disponibilitatea produselor pentru a evita lipsurile de stoc.</p>
                </div>

                {/* Row 2 */}
                <div className={styles.featureBlock}>
                    <div className={styles.iconContainer}>
                        <div className={styles.icon}>📄</div>
                    </div>
                    <h3 className={styles.title}>Emiterea facturilor si AWB</h3>
                    <p className={styles.description}>Oferim facturi personalizate pentru o experienta de marca fara cusaturi pentru clientii tai si emitem AWB pentru fiecare comanda, permitandu-ti si clientilor tai sa urmaresti toate expederile in timp real.</p>
                </div>

                <div className={styles.featureBlock}>
                    <div className={styles.iconContainer}>
                        <div className={styles.icon}>📋</div>
                    </div>
                    <h3 className={styles.title}>Pick & Pack</h3>
                    <p className={styles.description}>Comenzile sunt selectate si ambalate in cateva minute de la plasare, astfel incat produsele sa ajunga la clientii tai cat mai rapid si sigur posibil.</p>
                </div>

                <div className={styles.featureBlock}>
                    <div className={styles.iconContainer}>
                        <div className={styles.icon}>🚛</div>
                    </div>
                    <h3 className={styles.title}>Livrare si retururi</h3>
                    <p className={styles.description}>Ne ocupam de tot ce tine de curierat, de la negocierea tarifelor si livrarea la timp a comenzilor catre clientii tai pana la gestionarea recircularii articolelor returnate si oferirea unei adrese de retur pentru fiecare tara in care vinzi.</p>
                </div>
            </div>
        </div>
    );
}