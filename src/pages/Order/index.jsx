import { Link } from "react-router-dom"
import styles from './index.module.scss'

export default function Order() {
    return (
        <>
            <div className={`${styles.order} ${styles.center}`}>
                <video src={`/videos/apartment.mp4`} className={styles.video_bg} autoPlay loop muted />
                <section className={`${styles.order_bg} ${styles.center}`}>
                    <div className={`${styles.order_bg_profile} ${styles.order_bg_cont}`}>
                        <div className={`${styles.bg_number} ${styles.center}`}>
                            <div className={`${styles.step_number} ${styles.center}`}>
                                <p>1</p>
                            </div>
                            <h3>Покупатель</h3>
                        </div>
                        <div className={`${styles.bg_cont} ${styles.center}`}>
                            <Link to='/profile'>
                                <div className={`${styles.order_bg_profile_g_info} ${styles.center}`}>
                                    <div className={`${styles.avatar} ${styles.center}`}>
                                        <div className={`${styles.avatar_section} ${styles.center}`}>
                                            <img src="/img/cybercat.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className={`${styles.name} ${styles.center}`}>
                                        <p>Артемидьян</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className={`${styles.order_bg_address} ${styles.order_bg_cont}`}>
                        <div className={`${styles.bg_number} ${styles.center}`}>
                            <div className={`${styles.step_number} ${styles.center}`}>
                                <p>2</p>
                            </div>
                            <h3>Адрес получения</h3>
                        </div>
                        <div className={`${styles.bg_cont} ${styles.center}`}>
                            <div>
                                <a href="">Адрес</a>
                            </div>
                            <label htmlFor="adress"></label>
                            <select
                                id="adress"
                                className="control"
                            >
                                <option value="moscow">г. Москва</option>
                                <option value="tver">г. Тверь</option>
                                <option value="voroneg">г. Воронеж</option>
                            </select>
                        </div>
                    </div>

                    <div className={`${styles.order_bg_payment} ${styles.order_bg_cont}`}>
                        <div className={`${styles.bg_number} ${styles.center}`}>
                            <div className={`${styles.step_number} ${styles.center}`}>
                                <p>3</p>
                            </div>
                            <h3>Выберите способ оплаты</h3>
                        </div>
                        <div className={`${styles.bg_cont} ${styles.center}`}>
                            <div className={`${styles.bg_but} ${styles.center}`}>
                                <p>При получении</p>
                            </div>
                            <div className={`${styles.bg_form} ${styles.center}`}>
                                <form className={`${styles.radio} ${styles.center}`}>
                                    <div className={styles.radio_line}>
                                        <input
                                            type="radio"
                                            id="cash"
                                            value="cash"
                                            name="payment"
                                        />
                                        <label htmlFor="cash">Наличными</label>
                                    </div>
                                    <div className={styles.radio_line}>
                                        <input
                                            type="radio"
                                            id="card"
                                            value="card"
                                            name="payment"
                                        />
                                        <label htmlFor="card">Картой</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.order_bg_button} ${styles.order_bg_cont}`}>
                        <Link className={styles.neon_button}>
                            <span className={styles.letter_broken_first}>О</span>
                            <span className={styles.flash}>форм</span>
                            <span className={styles.letter_broken}>и</span>
                            <span className={styles.flash}>ть</span>
                        </Link>
                    </div>
                </section>
            </div>
        </>
    )
}