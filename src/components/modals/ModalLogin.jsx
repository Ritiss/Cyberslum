import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "../common/Button"
import styles from './ModalLogin.module.scss'

export default function ModalLogin({ closeModal }) {
    const [name, setName] = useState('')
    const [error, setError] = useState(false)

    function nameChange(event) {
        setName(event.target.value)
        setError(event.target.value.trim().length === 0)
    }

    return (
        <div className={`${styles.modal} ${styles.center}`}>
            <img src='/img/cat_shadow.png' alt="" className={styles.cat} />
            <div className={`${styles.modal_bg} ${styles.center}`}>
                <div className={styles.modal_bg_shadow}></div>
                <div className={`${styles.modal_bg_form} ${styles.center}`}>
                    <div className={styles.modal_bg_form_img}>
                    </div>
                    <div className={`${styles.modal_bg_form_text} ${styles.center}`}>
                        <div className={`${styles.close} ${styles.center}`}>
                            <div onClick={() => closeModal(false)} className={styles.close_button}>
                                <span>X</span>
                            </div>
                        </div>
                        <div className={`${styles.login_form} ${styles.center}`}>
                            <h3>Вход</h3>

                            <form className={styles.login_form_bg}>
                                <label htmlFor="email">E-mail</label>
                                <input
                                    type="email"
                                    id="name"
                                    placeholder="example@gmail.com"
                                    value={name}
                                    style={{
                                        borderColor: error ? 'rgba(255, 0, 0, 0.4)' : null,
                                        // записать во 2 главу: если у нас нет ничего в нейме, удалим пробелы(потому что в конченом итоге это просто строчка), 
                                        // дальше спросим длинну этого состояния, если в длине то-то есть, то ничего не будем добавлять, 
                                        // а иначе будем добавлять красный
                                    }}
                                    onChange={nameChange}
                                    required
                                />
                                <label htmlFor="password">Пароль</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="введите пароль"
                                    required
                                />

                                <div className={`${styles.buttons_section} ${styles.center}`}>
                                    <Button disabled={error} isActive={!error} className={`${styles.but} ${styles.enter_but}`}>Войти</Button>
                                    <Link to='/registry'><Button onClick={() => closeModal(false)} className={`${styles.but} ${styles.reg_but}`}>Регистрация</Button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}