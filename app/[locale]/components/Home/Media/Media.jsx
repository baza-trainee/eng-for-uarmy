'use client'
import Link from "next/link";
import { useLocale } from "next-intl";
import styles from "./Media.module.scss";
import MediaList from "./MediaList";
import medias from "@/app/[locale]/libs/fakeMediaList";
import Image from "next/image";
const Media = () => {
    const locale = useLocale();

    return <section className={styles.section}>
        <div className={styles.mediaSection}>
            <h2>Медіа про ENG for UArmy</h2>
            <MediaList list={medias} />
            {/* <button type="button" id='unwrap'></button> */}
            <button type="button" id='wrap'><Image src='/arrowWrap.svg' width={110} height={110} alt='media logo'/></button>
            <Link Link href={`/${locale}/contact`}>Share our project with your audience</Link>
        </div>
    </section>
}
export default Media;