import styles from './Banner.module.css';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerContent}>
                <h1 className={styles.bannerTitle}>Bun venit la Teoship</h1>
                <p className={styles.bannerSubtitle}>Partenerul tau de incredere pentru livrari</p>
                <button className={styles.bannerButton}>Afla mai multe...</button>
            </div>
        </div>
    );
}