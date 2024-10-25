"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks?.classList.toggle("active");
  }

  return (
    <div>
      <nav className="nav-bar">
        <div className="logoO">
          <a href="#">
            <Image
              className="logo"
              src="/images/perfect-logo.png"
              alt="picture"
              height={100}
              width={150}
            />
          </a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className="nav-links">
          <li className="li-a">
            <Link className="a-li" href="#">
              Home
            </Link>
          </li>
          <li className="li-a">
            <Link className="a-li" href="#about">
              About
            </Link>
          </li>
          <li className="li-a">
            <Link
              className="a-li"
              href="https://static-interactive-resume-nine.vercel.app/"
              target="_blank"
            >
              Resume
            </Link>
          </li>
          <li className="li-a">
            <a className="a-li" href="#skills">
              Skills
            </a>
          </li>
          <li className="li-a">
            <Link
              className="a-li"
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
