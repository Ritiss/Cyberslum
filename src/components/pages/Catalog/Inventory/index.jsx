import { Link } from "react-router-dom"
import styles from '../../../../pages/Catalog/index.module.scss'
import { CellsFirst, CellsSecond } from '../../../../data'

export default function Inventory() {
    return (
        <>
            <div className={`${styles.container} ${styles.center}`}>
                <div className={`${styles.catalog_section} ${styles.center}`}>
                    <div className={`${styles.catalog_section_block} ${styles.center} ${styles.first}`}>
                        {CellsFirst.map(item => (
                            <Link key={item.text} to={item.link} className={`${styles.cells} ${styles.center}`}>
                                <p>{item.text}</p>
                                <div className={`${styles.cell} ${styles.center}`}>
                                    <div className={styles.cell_before}/>
                                    <div className={styles.cell_after}/>
                                    <p>+</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className={`${styles.catalog_section_block} ${styles.center} ${styles.third}`}>
                        {CellsSecond.map(item => (
                            <Link key={item.text} to={item.link} className={`${styles.cells} ${styles.center}`}>
                                <p>{item.text}</p>
                                <div className={`${styles.cell} ${styles.center}`}>
                                    <div className={styles.cell_before}/>
                                    <div className={styles.cell_after}/>
                                    <p>+</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}