import Head from 'next/head'
import Link from 'next/link'
//import Image from 'next/image'
//import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.backgroundCol}>
      <h1 className={styles.home}>Home page</h1>
      <Link href="/product" className={styles.home}>BlogProduct</Link>
      <Link href="/product/profile" className={styles.home}>Profile</Link>
      <Link href="/docs" className={styles.home}>Features & Concepts</Link>
      <Link href="/product/404" className={styles.home}>Error 404 Route</Link>
    </div>
  )
}