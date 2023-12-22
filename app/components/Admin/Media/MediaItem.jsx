import Link from 'next/link';
import styles from './Media.module.scss'
const MediaItem = ({ media: {ukDesc, logoURL, _id} }) => {
    return <li className={styles.mediaItem}>
        <div className={styles.logoBox}>
            <img className={styles.logo} src={logoURL} alt='logo'/>
        </div>
        <p className={styles.desc}>{ukDesc}</p>
        <div className={styles.btnBox}>
            <Link href={`/admin/media/${_id}`} className={styles.btn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
                    <path d="M0 0h40v40H0z" />
                    <path
                        className={styles.btnIcon}
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 33.336h15M27.5 5.832a3.535 3.535 0 1 1 5 5L11.667 31.666 5 33.332l1.667-6.666L27.5 5.832ZM25 8.336l5 5"
                    />
                </svg>
            </Link>
            <button type="button" className={styles.btn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="36" viewBox="0 0 32 36" fill="none">
                <path className={styles.btnIcon} d="M22.6667 7.66667V6.33333C22.6667 4.46649 22.6667 3.53307 22.3034 2.82003C21.9838 2.19282 21.4738 1.68289 20.8466 1.36331C20.1336 1 19.2002 1 17.3333 1H14.6667C12.7998 1 11.8664 1 11.1534 1.36331C10.5262 1.68289 10.0162 2.19282 9.69664 2.82003C9.33333 3.53307 9.33333 4.46649 9.33333 6.33333V7.66667M12.6667 16.8333V25.1667M19.3333 16.8333V25.1667M1 7.66667H31M27.6667 7.66667V26.3333C27.6667 29.1336 27.6667 30.5337 27.1217 31.6033C26.6423 32.5441 25.8774 33.309 24.9366 33.7884C23.8671 34.3333 22.4669 34.3333 19.6667 34.3333H12.3333C9.53307 34.3333 8.13294 34.3333 7.06338 33.7884C6.12257 33.309 5.35767 32.5441 4.8783 31.6033C4.33333 30.5337 4.33333 29.1336 4.33333 26.3333V7.66667" stroke="#231F20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </li>
}

export default MediaItem;
