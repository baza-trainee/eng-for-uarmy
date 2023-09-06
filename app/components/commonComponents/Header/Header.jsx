import Link from "next/link"
import styles from './header.module.css'
const Header = () => {
    return <header>
        <nav className={styles.nav}>
            <Link href='/'>Home</Link>
            <Link href='/study'>Study</Link>
            <Link href='/ourTeam'>Our team</Link>
            <Link href='/contacts'>Contacts</Link>
    </nav>
    </header>
}
export default Header