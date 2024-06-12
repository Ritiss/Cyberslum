import { useEffect, useRef, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import styles from './index.module.scss'
import ModalLogin from "../../modals/ModalLogin"
import { HeaderNavigation } from '../../../data'
import Button from "../Button"
import { useAuth } from "../../../context/auth"

const setActive = ({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)
    const { isAuthenticated } = useAuth()

    useEffect(() => {
        document.body.classList.toggle('no-scroll', isMenuOpen || isModalOpen)
    }, [isMenuOpen, isModalOpen])

    const [isPlaying, setIsPlaying] = useState(() => {
        const saved = localStorage.getItem('isMusicMuted')
        return saved ? JSON.parse(saved) : false
    })

    const togglePlay = () => {
        setIsPlaying(!isPlaying)
    }

    useEffect(() => {
        const musicPlayer = document.getElementById('bgmusic')
        isPlaying ? musicPlayer.play() : musicPlayer.pause()
    }, [isPlaying])

    useEffect(() => {
        localStorage.setItem('isMusicMuted', JSON.stringify(isPlaying))
    }, [isPlaying])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        setIsSticky(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
        setIsSticky(false)
    }

    useEffect(() => {
        function handleScroll(event) {
            if (window.scrollY > 0) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        }

        document.addEventListener("scroll", handleScroll)
        window.addEventListener("load", handleScroll)
        return () => {
            document.removeEventListener("scroll", handleScroll)
            window.removeEventListener("load", handleScroll)
        }
    }, [isSticky])

    return (
        <>
            {isModalOpen && <ModalLogin closeModal={setIsModalOpen} />}
            <header className={`${styles.header} ${isSticky && 'sticky'}`}>
                <div className={styles.container}>
                    <section className={styles.logoSection}>
                        <Link to="/"><img src='/img/logo.png' alt="" /></Link>
                        <img src={isPlaying ? '/svg/music_on.svg' : '/svg/music_off.svg'} alt="" className={styles.musicButton} onClick={togglePlay} />
                    </section>
                    <div className={styles.burgerMenu} onClick={toggleMenu}>
                        <img src="/svg/menu.svg" alt="" />
                    </div>
                    <div className={`${styles.headerMenu} ${isMenuOpen ? styles.open : ''}`}>
                        {isAuthenticated ?
                            <NavLink key={"profile"} to='/profile' className={setActive} onClick={closeMenu}>Профиль</NavLink>
                            :
                            <Button onClick={() => setIsModalOpen(!isModalOpen)} className={styles.link}>Профиль</Button>
                        }
                        {HeaderNavigation.map((item, index) => (
                            <NavLink key={index} to={item.link} className={setActive} onClick={closeMenu}>{item.name}</NavLink>
                        ))}
                    </div>
                </div>
            </header>
            <audio id={'bgmusic'} src={`/sounds/LetYouDown.mp4`} loop />
        </>
    )
}