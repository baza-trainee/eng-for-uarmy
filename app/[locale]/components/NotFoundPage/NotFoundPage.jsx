"use client";

import { useEffect } from "react";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

import styles from "./not-found-page.module.scss";
import Image from "next/image";

import errorImg from "../../../../public//404/404.png";

import {
  ArrowLeftSvg,
  BorderBackSvg,
  BorderGoHomeFocusSvg,
} from "./SvgComponents/SvgComponents";

const NotFoundPage = ({ error }) => {
  const locale = useLocale();
  const t = useTranslations("404");

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* <h2 className={styles.title}> Not Found {error} </h2> */}
        <div className={styles.NotFoundWrapper}>
          <div className={styles.btnBackWrapper}>
            <BorderBackSvg />

            {/* redirect to HomePage */}
            <Link className={styles.btnBack} href={`/${locale}/team`}>
              <ArrowLeftSvg />
              Back
            </Link>
          </div>

          <div className={styles.errorWrapper}>
            <div className={styles.imgWrapper}>
              <Image src={errorImg} alt="Error 404" width={595} height={245} />
              <h4 className={styles.title}>Page not found</h4>
            </div>
          </div>
        </div>

        <div className={styles.descrWrapper}>
          <div className={styles.fourOrFour}>
            <span>four or four</span>
          </div>
          <p className={styles.descr}>
            We couldn't find the page you're looking for but that's 4.5.0 (all
            good).
          </p>
        </div>

        <div className={styles.btnGoHomeWrapper}>
          <BorderGoHomeFocusSvg />
          <Link href={`/${locale}/contact`} className={styles.goHome}>
            <p>Go on homepage</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;

// const Error = ({ error, reset }) => {
//   useEffect(() => {
//     // Log the error to an error reporting service
//     console.error(error);
//   }, [error]);

//   return (
//     <div>
//       <h2>Something went wrong!</h2>
//       <button
//         onClick={
//           // Attempt to recover by trying to re-render the segment
//           () => reset()
//         }
//       >
//         Try again
//       </button>
//     </div>
//   );
// };

// export default Error;
