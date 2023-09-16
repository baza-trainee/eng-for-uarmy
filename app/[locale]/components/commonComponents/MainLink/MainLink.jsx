import { useLocale } from "next-intl";
import Link from 'next/link';
import styles from "./MainLink.module.scss";

const MainLink = ({ path, children }) => {
    const locale = useLocale();

    return (
        <Link href={`/${locale}/${path}`} className={styles.mainLink}>
            {children}
        </Link>
    );
};

export default MainLink;