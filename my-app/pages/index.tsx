import Head from 'next/head'
import Link from 'next/link'
//import Image from 'next/image'
//import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <Link href="/product">BlogProduct</Link>
    </>
  )
}