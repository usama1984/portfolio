import React from "react";
import "./About.css";
import Me from "../../assets/about-me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { LuFolderClosed } from "react-icons/lu";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </article>

            {/* <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article> */}

            <article className="about__card">
              <LuFolderClosed className="about__icon" />
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>

          <p>
            Results-driven Web Designer & Developer with 5+ years of experience
            with a proven track record in developing modern Web Application and
            implementing On-Page SEO strategies to increase website traffic and
            enhance brand visibility. Experienced in collaborating with
            cross-functional teams and overseeing web projects from design to
            implementation. Strong Grip in Angular, React, TypeScript, HTML,
            CSS, WordPress, Shopify, Square Space, WIX, Photoshop, Illustrator,
            and SEO best practices.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
