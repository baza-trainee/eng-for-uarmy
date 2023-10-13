import { useLocale } from "next-intl";
import Link from 'next/link';
import styles from "./MainLink.module.scss";

const MainLink = ({ path, url, children }) => {
    const locale = useLocale();

    return (
        <Link href={path ? `/${locale}/${path}` : url}
            className={styles.mainLink}>
            {children}
        </Link>
    );
};

export default MainLink;