"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div>
      <header>
        <div className="information">
          <div className="intro">
            <h1>Hello!</h1>
            <h1>
              I'm <span className="name1">Muhammad Faizan</span>
            </h1>
            <h3>FullStack Web Developer.</h3>
          </div>
          <div className="profile-picture">
            <Image
              className="picture"
              src="/images/done.png"
              alt="picture"
              height={1000}
              width={1000}
            />
          </div>
        </div>
      </header>
      <section>
        <div className="section-information">
          <div className="section-picture">
            <Image
              className="picture"
              src="/images/picture1-.png"
              alt="picture"
              height={1000}
              width={1000}
            />
          </div>

          <div className="section-infor">
            <h1 className="infor-h1">Information</h1>
            <p className="infor-pera">
              Full Name: <span className="name"> Muhammad Faizan Soomro</span>
            </p>
            <p className="infor-pera">
              Date of Bith: <span className="name"> 23/July/2004</span>
            </p>
            <p className="infor-pera">
              Phone: <span className="name"> 0340-6044-359</span>
            </p>
            <p className="infor-pera">
              Email: <span className="name"> muhammadf4060@gmail.com</span>
            </p>
            <p className="infor-pera">
              Address:
              <span className="name">
                {" "}
                C/o R-505 Rafi Bunglow's Malir-15 Karachi
              </span>
            </p>

            <Link
              href="/images/faizan's_cv.pdf"
              download="Faizan's_CV.pdf"
              className="download-btn"
            >
              Download CV
            </Link>
          </div>
        </div>

        <section className="section-skills" id="skills"></section>

        <h2 className="he-2">Skill Percentages</h2>

        <div className="skill-container">
          <div className="skill-name">HTML-5 90%</div>
          <div className="progress-container">
            <div className="progress-bar html-bar">90%</div>
          </div>
        </div>

        <div className="skill-container">
          <div className="skill-name">CSS-3 80%</div>
          <div className="progress-container">
            <div className="progress-bar css-bar">80%</div>
          </div>
        </div>

        <div className="skill-container">
          <div className="skill-name">JavaScript 70%</div>
          <div className="progress-container">
            <div className="progress-bar js-bar">70%</div>
          </div>
        </div>

        <div className="skill-container">
          <div className="skill-name">TypeScript 70%</div>
          <div className="progress-container">
            <div className="progress-bar ts-bar">70%</div>
          </div>
        </div>

        <div className="skill-container">
          <div className="skill-name">Python 30%</div>
          <div className="progress-container ">
            <div className="progress-bar python-bar">30%</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
