import Link from 'next/link'

type ProductListProps = {
    productId: number
}

export default function ProductList({productId = 111}: ProductListProps) {
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
                Product (click me & go back, you go back to home page directly) {productId}
            </Link>
        </div>
    )
}