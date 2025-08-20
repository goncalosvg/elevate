import { NewTwitterIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <>
      <footer id={styles.footer}>
        <div className="wrapper fixed">
          <div className="w-full flex between">
            <ul className={styles.items}>
              <Link href="https://x.com/elevatet1">
                <li className={clsx(styles.item, styles.social)}>
                  <HugeiconsIcon
                    icon={NewTwitterIcon}
                    size={20}
                    className={styles.icon}
                    color="#ffffff"
                    strokeWidth={1.5}
                  />
                </li>
              </Link>
              <li className={styles.item}>
                <Link href="/">
                  <span className={styles.link}>elevatellcbiz@gmail.com</span>
                </Link>
              </li>
            </ul>
            <ul className={styles.items}>
              <li className={styles.item}>
                <Link href="/">
                  <span className={styles.link}>Refund Policy</span>
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/">
                  <span className={styles.link}>Privacy Policy</span>
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/">
                  <span className={styles.link}>Terms of Service</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Image
          width={1920}
          height={1080}
          className={styles.credit}
          src="/footer-credit.svg"
          alt=""
        />
      </footer>
    </>
  );
}
