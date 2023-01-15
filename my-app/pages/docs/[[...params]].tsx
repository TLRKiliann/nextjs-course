import { useRouter } from 'next/router'
import Link from "next/link"
import styles from '@/styles/Home.module.scss'

export default function Parameters() {
	const router = useRouter()
	const {params = []} = router.query
    //console.log(params)
	if (params.length === 4) {
	    return (
            <>
                <h2>docs/params/ params: {params[0]} {params[1]} params: {params[2]} {params[3]}</h2>
                <Link href="/docs" className={styles.home}>Go Back</Link>
            </>
        )
    } else if (params.length === 2) {
        return (
            <>
                <h3>Params is equal to 1 params[0&1] => {params[0]} {params[1]}</h3>
                <Link href="/docs" className={styles.home}>Go Back</Link>            
            </>

        )
    }
    return (
        <div className={styles.columndisplayDocs}>
            <h2 className={styles.home}>Doc folder params !</h2>
            <Link href="/docs/features/1/concepts/1">
            First features 1 + concepts 1
            </Link>
            <Link href="/docs/features/2/concepts/2">
                Second features 2 + concepts 2
            </Link>
            <Link href="/docs/features/2/concepts/3">
                Third features 2 + concepts 3
            </Link>
            <Link href="/docs/features/2">
                Or just with one param !
            </Link>
            <Link href="/" className={styles.home}>Go Back to Home</Link>
        </div>
	)
}