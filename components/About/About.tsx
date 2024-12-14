import React from "react";
import styles from "../About/About.module.css";
import Link from "next/link";
import Image from "next/image";

function About() {
  return (
    <div className={styles.containar}>
      <div className={styles.main}>
        <div className={styles.div_one}>
          <h1 className={styles.tital}>About Me</h1>
        </div>

        <div className={styles.div_two}>
          <div className={styles.about_div}>
            <div className={styles.about}>
              <h2>
                <b>Full Name: </b> Muhammad Faizan
              </h2>{" "}
              <br />
              <h2>
                <b>Father Name: </b> Ghulam Murtaza
              </h2>{" "}
              <br />
              <h2>
                <b>Phone: </b> +923-0406-044359
              </h2>{" "}
              <br />
              <h2>
                <b>Email: </b> muhammadf4060@gmail.com
              </h2>{" "}
              <br />
              <h2>
                <b>Address: </b> R-505 Rafi Bunglows, Malir-15, Karachi.
              </h2>
            </div>
          </div>

          <div className={styles.info_div}>
            <div className={styles.information}>
              <h1 className={styles.information_h1}>
                <b>Hello There!</b>
              </h1>
              <p className={styles.information_pera}>
                I&#39;m Student of Governor Sindh IT Initiative Cloud Computing
                Genrating AI Engineer. Web 3.0 and Metaverse Learning programing
                || TypeScript || JavaScript || Next.js || react || Database ||
                Python || Html and Css... <br />
                <br /> And I&#39;m Student of &apos;SMIT&apos; Enroll in Web and
                Mobile app Devlopment and Python Web Mestry... <br />
                <br /> And I have Certificate of Cyber Security Ethical
                Hacking...
                <br /> I&apos;m English Typing Master Speed 50 W-P-M ...
              </p>

              <div className={styles.icons_div}>
                <Link href={"https://x.com/muhammadf4060"} target="_blank">
                  <div className={styles.icon}>
                    <Image
                      src={"/images/twitter-x.svg"}
                      alt="twitter"
                      width={30}
                      height={30}
                    />
                  </div>
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/muhammad-faizan-2541132b8"}
                  target="_blank"
                >
                  <div className={styles.icon}>
                    <Image
                      src={"/images/linkedin.svg"}
                      alt="linkedin"
                      width={30}
                      height={30}
                    />
                  </div>
                </Link>
                <Link href={"https://wa.me/+923406044359"} target="_blank">
                  <div className={styles.icon}>
                    <Image
                      src={"/images/whatsapp.svg"}
                      alt="whatsapp"
                      width={30}
                      height={30}
                    />
                  </div>
                </Link>
                <Link
                  href={"https://www.instagram.com/fazii.963/"}
                  target="_blank"
                >
                  <div className={styles.icon}>
                    <Image
                      src={"/images/instagram.svg"}
                      alt="instagram"
                      width={30}
                      height={30}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
