import Link from 'next/link'
import styles from '@/styles/Home.module.scss'

type ProductListProps = {
    productId: number
}

export default function ProductList({productId = 111}: ProductListProps) {
    return(
        <div className={styles.backgroundCol}>
            <div className={styles.columndisplay}>
                <Link href="/">
                    Home
                </Link>
                <Link href="/product/1">
                    First product
                </Link>
                <Link href="/product/2">
                    Second Product
                </Link>
                <Link href="/product/3">
                    Third product
                </Link>
                <Link href="/product/1/review/1">
                    First product + review 1
                </Link>
                <Link href="/product/2/review/2">
                    Second Product + review 2
                </Link>
                <Link href="/product/3/review/3">
                    Third product + review 3
                </Link>
                <Link href={`/product/${productId}`}>
                    Product (click me & go back, you go back to home page directly) {productId}
                </Link>
            </div>
        </div>
    )
}
//<Link href={`/product/${productId}`} replace>