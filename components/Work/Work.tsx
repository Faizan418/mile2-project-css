import React from "react";
import styles from "../Work/Work.module.css";
import Image from "next/image";
import Link from "next/link";

function Work() {
  return (
    <div className={styles.bg_div}>
      <div className={styles.containar}>
        <div className={styles.tital_div}>
          <h1 className={styles.tital}>Work</h1>
        </div>

        <div className={styles.main}>
          <div className={styles.grid_containar}>
            <div className={styles.card}>
              <Image
                className={styles.img}
                src={"/images/project1.PNG"}
                alt="project-img"
                height={100}
                width={200}
              />
              <div className={styles.content}>
                <h1 className={styles.heading}>project 01</h1>
                <p className={styles.pera}>Resume Builder</p>
                <Link href={""}>
                  <button className={styles.live} type="button">
                    Live demo
                  </button>
                </Link>
              </div>
            </div>

            <div className={styles.card}>
              <Image
                className={styles.img}
                src={"/images/project2.PNG"}
                alt="project-img"
                height={100}
                width={200}
              />
              <div className={styles.content}>
                <h1 className={styles.heading}>project 02</h1>
                <p className={styles.pera}>Basic E-commerce website</p>
                <Link href={""}>
                  <button className={styles.live} type="button">
                    Live demo
                  </button>
                </Link>
              </div>
            </div>

            <div className={styles.card}>
              <Image
                className={styles.img}
                src={"/images/project3.PNG"}
                alt="project-img"
                height={100}
                width={200}
              />
              <div className={styles.content}>
                <h1 className={styles.heading}>project 03</h1>
                <p className={styles.pera}>Password Genrator</p>
                <Link href={""}>
                  <button className={styles.live} type="button">
                    Live demo
                  </button>
                </Link>
              </div>
            </div>

            <div className={styles.card}>
              <Image
                className={styles.img}
                src={"/images/project4.PNG"}
                alt="project-img"
                height={100}
                width={200}
              />
              <div className={styles.content}>
                <h1 className={styles.heading}>project 04</h1>
                <p className={styles.pera}>PAK-Wheel E-commerce website</p>
                <Link href={""}>
                  <button className={styles.live} type="button">
                    Live demo
                  </button>
                </Link>
              </div>
            </div>

            <div className={styles.card}>
              <Image
                className={styles.img}
                src={"/images/project5.PNG"}
                alt="project-img"
                height={100}
                width={200}
              />
              <div className={styles.content}>
                <h1 className={styles.heading}>project 05</h1>
                <p className={styles.pera}>Basic Ecommerce website</p>
                <Link href={""}>
                  <button className={styles.live} type="button">
                    Live demo
                  </button>
                </Link>
              </div>
            </div>

            <div className={styles.card}>
              <Image
                className={styles.img}
                src={"/images/project6.PNG"}
                alt="project-img"
                height={100}
                width={200}
              />
              <div className={styles.content}>
                <h1 className={styles.heading}>project 06</h1>
                <p className={styles.pera}>Quiz app with login/signup</p>
                <Link href={""}>
                  <button className={styles.live} type="button">
                    Live demo
                  </button>
                </Link>
              </div>
            </div>

            <div className={styles.card}>
              <Image
                className={styles.img}
                src={"/images/project7.PNG"}
                alt="project-img"
                height={100}
                width={200}
              />
              <div className={styles.content}>
                <h1 className={styles.heading}>project 07</h1>
                <p className={styles.pera}>Basic E-commerce website</p>
                <Link href={""}>
                  <button className={styles.live} type="button">
                    Live demo
                  </button>
                </Link>
              </div>
            </div>

            <div className={styles.card}>
              <Image
                className={styles.img}
                src={"/images/project8.PNG"}
                alt="project-img"
                height={100}
                width={200}
              />
              <div className={styles.content}>
                <h1 className={styles.heading}>project 08</h1>
                <p className={styles.pera}>Todos app</p>
                <Link href={""}>
                  <button className={styles.live} type="button">
                    Live demo
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
