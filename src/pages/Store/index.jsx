import styles from './index.module.scss'

export default function Store() {
    return (
        <>
            <div className={`${styles.store} ${styles.center}`}>
                <video src={`/videos/neon.mp4`} className={styles.video_bg} autoPlay loop muted />
                <section className={`${styles.container} ${styles.center}`}>
                    <div className={`${styles.store_bg} ${styles.center}`}>
                        <div>
                            
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}