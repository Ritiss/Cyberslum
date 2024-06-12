import { useEffect, useState } from 'react'
import styles from './index.module.scss'

export default function Footer() {

    return (
        <footer>
            <section className={`${styles.footer} ${styles.center}`}>
                <div className={`${styles.footer_block} ${styles.contacts} ${styles.center}`}>
                    <div className={`${styles.contacts_line} ${styles.center}`}>
                    <div className={`${styles.contacts_line_sec} ${styles.center}`}>
                            <h4>Почта</h4>
                            <a href="mailto:cyberslum@gmail.com">cyberslum@gmail.com</a>
                        </div>
                        <div className={`${styles.contacts_line_sec} ${styles.center}`}>
                            <h4>Телефон</h4>
                            <a href="tel:+79001111111">+7-900-111-11-11</a>
                        </div>
                        <div className={`${styles.contacts_line_sec} ${styles.center}`}>
                            <h4>Адрес</h4>
                            <a href=''>Проспект Неизбежности 1А</a>
                        </div>
                    </div>
                </div>
                <div className={`${styles.footer_block} ${styles.byR} ${styles.center}`}>
                    <p className={styles.copy}>
                        <span className={styles.copy_sign}>©</span>
                        <span> 2024 Cyberslum</span>
                    </p>
                    <p className={styles.creator}>Site by Ritis</p>
                </div>
            </section>
        </footer>
    )
}