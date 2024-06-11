import { Link } from 'react-router-dom'
import { Offer } from '../../../../data'
import styles from './index.module.scss'

export default function Offers() {
    return (
        <>
            <div className={`${styles.container} ${styles.center}`}>
                <div className={`${styles.offer} ${styles.center}`}>
                    {Offer.map((item) => (
                        <Link to={item.link} target="_blank">
                            <div className={`${styles.offer_bg} ${styles.center}`}
                                style={{ backgroundImage: `url(${item.img})` }}>
                                <h5>{item.title}</h5>
                                <p>{item.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}