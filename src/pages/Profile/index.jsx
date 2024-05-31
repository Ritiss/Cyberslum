import styles from './index.module.scss'

export default function Profile() {
    return (
        <>
            <div className={`${styles.profile} ${styles.center}`}>
                <video src={`/videos/neon.mp4`} className={styles.video_bg} autoPlay loop muted />
                <div className={`${styles.profile_section} ${styles.center}`}>
                    <h3>Профиль</h3>
                    <div className={`${styles.profile_section_bg} ${styles.center}`}>
                        <div className={`${styles.profile_section_bg_img} ${styles.center}`}>
                            <div className={styles.avatar}>
                                <img src='/img/cybercat.jpg' alt="" />
                            </div>
                        </div>
                        <div className={`${styles.profile_section_bg_name} ${styles.center}`}>
                            <div className={`${styles.name} ${styles.center}`}>
                                <p>Кодовое имя</p>
                                <h4>eror 404</h4>
                            </div>
                            <div className={`${styles.email} ${styles.center}`}>
                                <p>Почта</p>
                                <h4>error404@gmail.com</h4>
                            </div>
                        </div>

                    </div>
                    <div className={styles.profile_section_order}>
                        <div className={styles.story}>
                            <h3>История заказов</h3>
                        </div>
                        <div className={styles.order_list}>
                            <div className={styles.order_list_check}>
                                <p>1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}