import styles from '@/styles/Home.module.scss'

function PageNotFound() {
    return(
        <div className={styles.backgroundCol}>
            <h1 className={styles.home}>Error 404 - Page Not Found</h1>
        </div>
    )
}

export default PageNotFound