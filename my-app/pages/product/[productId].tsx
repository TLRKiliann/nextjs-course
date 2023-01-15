import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.scss'

export default function Product() {
    const router = useRouter()
    const productId = router.query.productId

    const handleProduct = () => {
        console.log("Route to product")
        if (productId === "111") {
            router.replace("/")
        } else {
            router.push("/product")
        }
    }
    return(
        <div className={styles.backgroundCol}>
            <h2 className={styles.home}>Display by productId : {productId}</h2>
            <button type="button" onClick={handleProduct} className={styles.button}>Go back to product</button>
        </div>
    )
}