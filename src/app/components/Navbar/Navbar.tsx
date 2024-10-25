"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../Navbar/Navbar.module.css"

function Navbar() {

  function toggleMenu() {
    const navLinks = document.querySelector(".nav_links");
    navLinks?.classList.toggle("active");
  }

  return (
    <div>
      <nav className={styles.nav_bar}>
        <div className={styles.logoO}>
          <a href="#">
            <Image
              className={styles.logo}
              src="/images/perfect-logo.png"
              alt="picture"
              height={100}
              width={150}
            />
          </a>
        </div>
        <div className={styles.hamburger}>
         <span onClick={toggleMenu}>&#9776;</span> 
        </div>
        <ul className={styles.nav_links}>
          <li className={styles.li_a}>
            <Link className={styles.a_li} href="#">
              Home
            </Link>
          </li>
          <li className={styles.li_a}>
            <Link className={styles.a_li} href="#about">
              About
            </Link>
          </li>
          <li className={styles.li_a}>
            <Link
              className={styles.a_li}
              href="https://static-interactive-resume-nine.vercel.app/"
              target="_blank"
            >
              Resume
            </Link>
          </li>
          <li className={styles.li_a}>
            <a className={styles.a_li} href="#skills">
              Skills
            </a>
          </li>
          <li className={styles.li_a}>
            <Link
              className={styles.a_li}
              href="https://project-list-kappa.vercel.app/"
              target="_blank"
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
