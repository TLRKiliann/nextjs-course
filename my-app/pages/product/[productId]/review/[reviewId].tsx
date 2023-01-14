import {useRouter} from 'next/router'

export default function Review() {
	const router = useRouter()
	const {productId, reviewId} = router.query
	return (
        <>
    		<h2>ProductId: {productId}</h2>
            <h2>ReviewId: {reviewId}</h2>
        </>
	)
}