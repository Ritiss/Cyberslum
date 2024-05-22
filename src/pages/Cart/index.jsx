import { Link } from "react-router-dom"
import { useState } from "react"
import styles from './index.module.scss'
import ModalLogin from "../../components/modals/ModalLogin"
import Inventory from "../../components/pages/Catalog/Inventory"

const isAuth = false

export default function Cart() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            {isModalOpen && <ModalLogin closeModal={setIsModalOpen} />}
            <section className={`${styles.cart} ${styles.center}`}>
                <video src={`/videos/apartment.mp4`} className={styles.video_bg} autoPlay loop muted />
                <div className={`${styles.container} ${styles.center}`}>
                    <div className={`${styles.cart_block} ${styles.center}`}>
                        <div className={`${styles.cart_block_first} ${styles.center}`}>
                            <div className={`${styles.cart_name} ${styles.center}`}>
                                <h2>Корзина</h2>
                            </div>
                            <div className={`${styles.empty_cart} ${styles.center}`}>
                                <div className={`${styles.empty_cart_cont} ${styles.center}`}>
                                    <h3>Пусто</h3>
                                    <p>Воспользуйтесь
                                        <Link to='/catalog'> каталогом</Link>
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.order} ${styles.center}`}>
                                <div className={`${styles.order_button} ${styles.center}`} >
                                    {isAuth ?
                                        <Link to="/home" className={styles.neon_button}>
                                            <span className={styles.letter_broken_first}>З</span>
                                            <span className={styles.flash}>аказ</span>
                                            <span className={styles.letter_broken}>а</span>
                                            <span className={styles.flash}>ть</span>
                                        </Link>
                                        :
                                        <Link onClick={() => setIsModalOpen(true)} className={styles.neon_button}>
                                            <span className={styles.letter_broken_first}>З</span>
                                            <span className={styles.flash}>аказ</span>
                                            <span className={styles.letter_broken}>а</span>
                                            <span className={styles.flash}>ть</span>
                                        </Link>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.cart_block_second} ${styles.center}`}>
                            <Inventory />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}