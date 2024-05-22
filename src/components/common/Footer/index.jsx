import { useEffect, useState } from 'react'
import styles from './index.module.scss'

export default function Footer() {
    const [now, setNow] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => setNow(new Date()), 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <footer>
            <section>
                <span style={{color: '#fff'}}>{now.toLocaleTimeString()}</span>
            </section>
        </footer>
    )
}