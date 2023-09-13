import Image from 'next/image';
import styles from './MediaList.module.scss'
import Link from 'next/link';

const MediaList = ({ list }) => {
    return <ul className={styles.mediaList}>
        {list.map(({ id, image, desc }) => {
            return <li className={styles.mediaCard} key={id}>
                <Image src={image} width={110} height={110} alt='media logo' />
                <div className={styles.mediaContent}>
                    <p className={styles.mediaDesc}>{desc}</p>
                    <Link className={styles.btnReadMore} href={'/'} onClick={(e) => e.currentTarget.blur()}>Read more</Link>
                </div>
            </li>
        }
        )}
    </ul>
}
export default MediaList;