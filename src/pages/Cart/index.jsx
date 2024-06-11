import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import styles from './index.module.scss'
import ModalLogin from "../../components/modals/ModalLogin"
import Button from "../../components/common/Button"
import { useAuth } from "../../context/auth"
import Offers from "../../components/pages/Cart/Offers"

export default function Cart() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [cart, setCart] = useState([])
    const { isAuthenticated } = useAuth()

    useEffect(() => {
        const savedCart = localStorage.getItem('cart')
        if (savedCart) {
            setCart(JSON.parse(savedCart))
        }
    }, [])

    const removeFromCart = (index) => {
        const newCart = cart.filter((_, i) => i !== index)
        setCart(newCart)
        localStorage.setItem('cart', JSON.stringify(newCart))
    }

    const updateQuantity = (index, amount) => {
        const newCart = [...cart]
        newCart[index].quantity += amount
        if (newCart[index].quantity <= 0) {
            newCart.splice(index, 1)
        }
        setCart(newCart)
        localStorage.setItem('cart', JSON.stringify(newCart))
    }

    const totalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0)
    }

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
                            {cart.length > 0 ?
                                <div className={`${styles.content_cart} ${styles.center}`}>
                                    {cart.map((item, index) => {
                                        return (
                                            <div key={index} className={`${styles.content_cart_cont} ${styles.center}`}>
                                                <div className={`${styles.product} ${styles.center}`}>
                                                    <div className={`${styles.product_image} ${styles.center}`}>
                                                        <div className={styles.product_image_block}>
                                                            <img src={item.img} alt="" className={styles.object_img} />
                                                        </div>
                                                    </div>
                                                    <div className={`${styles.product_text} ${styles.center}`}>
                                                        <p>{item.name}</p>
                                                    </div>
                                                    <div className={`${styles.product_price} ${styles.center}`}>
                                                        <p>{item.price * item.quantity}</p>
                                                    </div>
                                                    <div className={`${styles.product_count} ${styles.center}`}>
                                                        <Button onClick={() => updateQuantity(index, -1)} className={styles.product_count_but}>–</Button>
                                                        <p>{item.quantity}</p>
                                                        <Button onClick={() => updateQuantity(index, 1)} className={styles.product_count_but}>+</Button>
                                                    </div>
                                                    <div className={`${styles.product_delete} ${styles.center}`}>
                                                        <Button onClick={() => removeFromCart(index)} className={styles.trash}>
                                                            <img src="/svg/trash.svg" alt="" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                :
                                <div className={`${styles.empty_cart} ${styles.center}`}>
                                    <div className={`${styles.empty_cart_cont} ${styles.center}`}>
                                        <h3>Пусто</h3>
                                        <p>Воспользуйтесь
                                            <Link to='/catalog'> каталогом</Link>
                                        </p>
                                    </div>
                                </div>
                            }
                            <div className={`${styles.order} ${styles.center}`}>
                                <p>Общая стоимость: {totalPrice()}</p>
                                <div className={`${styles.order_button} ${styles.center}`} >
                                    {isAuthenticated ?
                                        <Link to="/order" className={styles.neon_button}>
                                            <span className={styles.letter_broken_first}>З</span>
                                            <span className={styles.flash}>аказ</span>
                                            <span className={styles.letter_broken}>а</span>
                                            <span className={styles.flash}>ть</span>
                                        </Link>
                                        :
                                        <Button onClick={() => setIsModalOpen(!isModalOpen)} className={styles.neon_button}>
                                            <span className={styles.letter_broken_first}>З</span>
                                            <span className={styles.flash}>аказ</span>
                                            <span className={styles.letter_broken}>а</span>
                                            <span className={styles.flash}>ть</span>
                                        </Button>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.cart_block_second} ${styles.center}`}>
                            <Offers />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
