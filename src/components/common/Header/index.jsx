import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import styles from './index.module.scss'
import ModalLogin from "../../modals/ModalLogin"
import { HeaderNavigation } from '../../../data'

const setActive = ({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link
const isAuth = false

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            {isModalOpen && <ModalLogin closeModal={setIsModalOpen} />}
            <div className={styles.header}>
                <div className={styles.container}>
                    <section className={styles.logoSection}>
                        <Link to="/"><img src='/img/logo.png' alt="" /></Link>
                        <img src='/svg/music_on.svg' alt="" className={styles.musicButton} />
                    </section>
                    <div className={styles.headerMenu}>
                        {isAuth ?
                            <NavLink to='/profile' className={setActive}>Профиль</NavLink>
                            :
                            <Link onClick={() => setIsModalOpen(true)} className={styles.link}>Профиль</Link>
                        }
                        {HeaderNavigation.map(item => (
                            <NavLink to={item.link} className={setActive}>{item.name}</NavLink>
                        ))}
                    </div>
                </div>
            </div>
            {/* <audio id={'bgmusic'} src={`/sounds/Majula.mp3`} loop /> */}
        </>
    )
}