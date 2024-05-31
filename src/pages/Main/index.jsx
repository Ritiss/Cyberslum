import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import styles from './index.module.scss'

export default function MainPage() {
    const [style, setStyle] = useState({});

    useEffect(() => {
        const scrollPage = () => {
            let translateY = window.scrollY / 2;
            setStyle({
                transform: `translateY(${translateY}px)`
            });
        };

        window.addEventListener('scroll', scrollPage, { passive: true });
        return () => window.removeEventListener('scroll', scrollPage);
    }, []);

    return (
        <>
            <section>
                <section className={styles.header}>
                    <div className={`${styles.navigation} ${styles.center}`}>
                        <div className={styles.nav_cont}>
                            <a href="">P</a>
                            <a href="">D</a>
                            <a href="">K</a>
                        </div>
                    </div>
                </section>

                {/* <section className={`${styles.canvas} ${styles.center}`}>
                    <div className={`${styles.layer} ${styles.layer_back}`}></div>
                    <div className={`${styles.layer_content}  ${styles.center}`}>
                        <img src="/img/logo.png" alt="" width={750} style={style} />
                    </div>
                    <div className={`${styles.layer} ${styles.layer_bridge}`}></div>
                    <div className={`${styles.layer} ${styles.layer_left_building}`}></div>
                    <div className={`${styles.layer} ${styles.layer_right_building}`}></div>
                    <div className={`${styles.layer} ${styles.layer_roof}`}></div>
                </section> */}
                <section className={styles.slum}>
                    <div className={`${styles.neon}  ${styles.center}`}>
                        <div className={styles.neon_block}>
                            <Link to="/home" className={`${styles.neon_button}  ${styles.center}`}>
                                <span className={styles.letter_broken_first}>С</span>
                                <span className={styles.flash}>yber</span>
                                <span className={styles.letter_broken}>s</span>
                                <span className={styles.flash}>lum</span>
                            </Link>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}