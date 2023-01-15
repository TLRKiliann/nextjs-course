import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.scss'

function ProgrammaticalyPush() {
    
    const router = useRouter()

    const handleClick = (): void => {
        console.log("Validate")
        router.push("/product")
        //or router.replace("/")
    }
    return(
        <div className={styles.backgroundCol}>
            <div className={styles.pseudoform}>
                <p className={styles.home}>You can validate your request.</p>
                <button type="button" onClick={handleClick} className={styles.button}>
                    Click
                </button>
            </div>
        </div>
    )
}

export default ProgrammaticalyPush