"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../Footer/Footer.module.css"

function Footer() {
  return (
    <div className="foot">

        <h1 className={styles.footer_h1}>Social Account</h1>

        <div className={styles.grid}>
          <div className={styles.icons_div}>
            <Link href="https://web.facebook.com/faizan.soomro.963">
              <Image
                className={styles.icons}
                src="/images/facebook.svg"
                alt="facebook"
                height={30}
                width={30}
              />
            </Link>
          </div>

          <div className={styles.icons_div}>
            <Link href="https://x.com/muhammadf4060">
              <Image
                className={styles.icons}
                src="/images/twitter-x.svg"
                alt="twitter"
                height={30}
                width={30}
              />
            </Link>
          </div>

          <div className={styles.icons_div}>
            <Link href="https://www.instagram.com/fazii.963/">
              <Image
                className={styles.icons}
                src="/images/instagram.svg"
                alt="instagram"
                height={30}
                width={30}
              />
            </Link>
          </div>

          <div className={styles.icons_div}>
            <Link href="https://www.linkedin.com/in/muhammad-faizan-2541132b8">
              <Image
                className={styles.icons}
                src="/images/linkedin.svg"
                alt="linkedin"
                height={30}
                width={30}
              />
            </Link>
          </div>

          <div className={styles.icons_div}>
            <Link href="https://github.com/Faizan418">
              <Image
                className={styles.icons}
                src="/images/github.svg"
                alt="github"
                height={30}
                width={30}
              />
            </Link>
          </div>

          <div className={styles.icons_div}>
            <Link href="https://wa.me/+923406044359">
              <Image
                className={styles.icons}
                src="/images/whatsapp.svg"
                alt="whatsapp"
                height={30}
                width={30}
              />
            </Link>
          </div>

          <div className={styles.icons_div}>
            <Link href="https://www.tiktok.com/@faziiofficial00">
              <Image
                className={styles.icons}
                src="/images/tiktok.svg"
                alt="tiktok"
                height={30}
                width={30}
              />
            </Link>
          </div>

          <div className={styles.icons_div}>
            <Link href="https://discord.com/muhammadfaiz">
              <Image
                className={styles.icons}
                src="/images/discord.svg"
                alt="discord"
                height={30}
                width={30}
              />
            </Link>
          </div>

          <div className={styles.icons_div}>
            <Link href="mailto:muhammadf4060@gmail.com">
              <Image
                className={styles.icons}
                src="/images/envelope-at.svg"
                alt="email"
                height={30}
                width={30}
              />
            </Link>
          </div>

        </div>

        <h3 className={styles.last_tag}>
          &copy; 2024; portfolio <br />
          created by Muhammad Faizan.
        </h3>

    </div>
  );
}

export default Footer;
