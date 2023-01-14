import { useRouter } from 'next/router'

export default function Product() {
    const router = useRouter()
    const productId = router.query.productId
    return(
        <h2>Display by productId : {productId}</h2>
    )
}