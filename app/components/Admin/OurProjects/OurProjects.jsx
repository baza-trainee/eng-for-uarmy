"use client";

import Image from "next/image";
import Link from "next/link";

import { SvgPencil } from "./SvgComponents/SvgComponents";
import dataProjects from "./data";

import styles from "./OurProjects.module.scss";

const OurProjects = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наші проєкти</h2>

        {dataProjects.map(({ id, title_ua, text_ua, src }) => (
          <div key={id} className={styles.box}>
            <div className={styles.thumb}>
              <Image
                className={styles.img}
                src={src}
                width={360}
                height={205}
                alt="photo about project"
                priority
              />
            </div>
            <div className={styles.textWrapper}>
              <h2 className={styles.subTitle}>{title_ua}</h2>
              <p className={styles.desc}>{text_ua}</p>
            </div>
            <Link
              className={styles.edit}
              href="/admin/our-projects/:id"
              // onClick={(e) => e.currentTarget.blur()}
            >
              <SvgPencil />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProjects;
