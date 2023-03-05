import Head from 'next/head'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import logo from '@/assets/img/logo.png'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Primeira Igreja Batista de Beberibe</title>
        <meta name="description" content="Site da Primeira Igreja Batista de Beberibe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main}, ${montserrat.className}`}>
        <header className={styles.header}>
            <Image src={logo} alt="Primeira Igreja Batista de Beberibe" className={styles.logo}/>

            <div className={styles.headerLinks}>
                <a href="#home">Home</a>
                <a href="#ministerios">Ministérios</a>
                <a href="#dizimar">Dízimar</a>
                <a href="#cultos">Cultos</a>
            </div>
        </header>
      </main>
    </>
  )
}
