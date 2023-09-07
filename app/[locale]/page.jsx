import styles from './page.module.css'
import PrimaryButton from './components/commonComponents/PrimaryButton/PrimaryButton'
export default function Home() {
  return (
    <main className={styles.main}>
      <h1>HomePage</h1>
      <PrimaryButton name='Start Studying' />
    </main>
  )
}


        // <div>
        //   <a
        //     href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        //     target="_blank"
        //     rel="noopener noreferrer"
        //   >
        //     By{' '}
        //     <Image
        //       src="/vercel.svg"
        //       alt="Vercel Logo"
        //       className={styles.vercelLogo}
        //       width={100}
        //       height={24}
        //       priority
        //     />
        //   </a>
        // </div>