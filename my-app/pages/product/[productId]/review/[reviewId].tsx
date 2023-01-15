import {useRouter} from 'next/router'
import styles from '@/styles/Home.module.scss'

export default function Review() {

	const router = useRouter()
	const {productId, reviewId} = router.query

	const handleMainProduct = (): void => {
		console.log("Product click ok")
		router.push("/product")
	}

	return (
        <div className={styles.backgroundCol}>
    		<h2 className={styles.home}>ProductId: {productId}</h2>
            <h2 className={styles.home}>ReviewId: {reviewId}</h2>
			<button type="button" onClick={handleMainProduct} className={styles.button}>Go back to Product</button>
        </div>
	)
}