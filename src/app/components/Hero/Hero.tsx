import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../Hero/Hero.module.css"

function Hero() {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.information}>
          <div className={styles.intro}>
            <h1>Hello!</h1>
            <h1>
              I&#39;m <span className={styles.name1}>Muhammad Faizan</span>
            </h1>
            <h3>FullStack Web Developer.</h3>
          </div>
          <div className={styles.profile_picture}>
            <Image
              className={styles.picture}
              src="/images/done.png"
              alt="picture"
              height={1000}
              width={1000}
            />
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.section_information}>
          <div className={styles.section_picture}>
            <Image
              className={styles.picture}
              src="/images/picture1-.png"
              alt="picture"
              height={1000}
              width={1000}
            />
          </div>

          <div className={styles.section_infor}>
            <h1 className={styles.infor_h1}>Information</h1>
            <p className={styles.infor_pera}>
              Full Name: <span className={styles.name} > Muhammad Faizan Soomro</span>
            </p>
            <p className={styles.infor_pera}>
              Date of Bith: <span className={styles.name}> 23/July/2004</span>
            </p>
            <p className={styles.infor_pera}>
              Phone: <span className={styles.name}> 0340-6044-359</span>
            </p>
            <p className={styles.infor_pera}>
              Email: <span className={styles.name}> muhammadf4060@gmail.com</span>
            </p>
            <p className={styles.infor_pera}>
              Address: <span className={styles.name}> C/o R-505 Rafi Bunglow&#39;s Malir-15 Karachi
              </span>
            </p>

            <Link
              href="/images/faizan's_cv.pdf"
              download="Faizan's_CV.pdf"
              className={styles.download_btn}>
              Download CV
            </Link>
          </div>
        </div>

        <div className={styles.section_skills} id="skills">

        <h2 className={styles.he_2}>Skill Percentages</h2>

        <div className={styles.skill_container}>
          <div className={styles.skill_name}>HTML-5 90%</div>
          <div className={styles.progress_container}>
            <div className={styles.progress_bar_html_bar}>90%</div>
          </div>
        </div>

        <div className={styles.skill_container}>
          <div className={styles.skill_name}>CSS-3 80%</div>
          <div className={styles.progress_container}>
            <div className={styles.progress_bar_css_bar}>80%</div>
          </div>
        </div>

        <div className={styles.skill_container}>
          <div className={styles.skill_name}>JavaScript 70%</div>
          <div className={styles.progress_container}>
            <div className={styles.progress_bar_js_bar}>70%</div>
          </div>
        </div>

        <div className={styles.skill_container}>
          <div className={styles.skill_name}>TypeScript 70%</div>
          <div className={styles.progress_container}>
            <div className={styles.progress_bar_ts_bar}>70%</div>
          </div>
        </div>

        <div className={styles.skill_container}>
          <div className={styles.skill_name}>Python 30%</div>
          <div className={styles.progress_container}>
            <div className={styles.progress_bar_python_bar}>30%</div>
          </div>

        </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
