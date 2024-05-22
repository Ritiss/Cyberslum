import { useState } from "react"
import { Link } from "react-router-dom"
import styles from './index.module.scss'
import Button from "../../components/common/Button"
import ModalLogin from "../../components/modals/ModalLogin"

export default function Registration() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            {isModalOpen && <ModalLogin closeModal={setIsModalOpen} />}
            <div className={`${styles.registr} ${styles.center}`}>
                <video src={`/videos/apartment.mp4`} className={styles.video_bg} autoPlay loop muted />
                <div className={`${styles.registr_section} ${styles.center}`}>
                    <div className={`${styles.registr_section_form} ${styles.center}`}>
                        <h3>Регистрация</h3>

                        <form className={styles.registr_section_form_bg}>
                            <label htmlFor="name">Ваше имя</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Введите имя"
                                required
                            />
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="example@gmail.com"
                                required
                            />
                            <label htmlFor="password">Пароль</label>
                            <input
                                type="password"
                                id="pass"
                                placeholder="Введите пароль"
                                required
                            />
                            <label htmlFor="password">Повторите пароль</label>
                            <input
                                type="password"
                                id="pass"
                                placeholder="Повторите пароль"
                                required
                            />
                            <div className={`${styles.buttons_section} ${styles.center}`}>
                                <Button className={`${styles.but} ${styles.reg_but}`}>Зарегистрироваться</Button>
                            </div>
                            <p className={styles.ready}>Уже есть аккаунт? 
                                <span>
                                    <Link onClick={() => setIsModalOpen(true)} className={styles.link}> Войти</Link>
                                </span>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}