import React from "react";
import styles from "../Footer/Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.containar}>
      <div className={styles.bg_one}>
        <div className={styles.main}>
          <div className={styles.one}>
            <h1 className={styles.heading_one}>Want to work with me?</h1>
            <h2 className={styles.heading_two}>
              Always feel Free to Contact & Hire me.
            </h2>
          </div>
          <div className={styles.two}>
            <Link href={"mailto:muhammadf4060@gmail.com"}>
              <button className={styles.btn} type="button">
                Hire me
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.main2}>
        <div className={styles.last}>
          <h3> &copy;2024 Designed by Muhamad Faizan.</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
