import Link from 'next/link'

export default function ProductList({productId}) {
    return(
        <div>
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
            <Link href={`/product/${productId}`} replace>
                Product {productId}
            </Link>
        </div>
    )
}