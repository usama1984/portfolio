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
            Skilled in web design & development with 5+ years of experience in
            HTML5, CSS3, Bootstrap, Angular, TypeScript, JavaScript, WordPress,
            and Shopify. Passionate about creating the interactive UI/UX of
            modern web applications with Adobe Products (Photoshop and
            Illustrator) and many other graphic design applications.
            <br />I also have expertise in digital marketing, including SEO
            (Search Engine Optimization), social media management, and online
            advertising. These skills complement my technical abilities,
            enabling me to approach web projects with a comprehensive
            perspective.
            <br />
            Have the ability to work in a team with creative thinking and
            problem-solving skills. Strong arts and design professional with a
            Bachelor's Degree in Informational Technology from the Barani
            Institute of Information Technology. Seeking to be a challenging
            position in Web Industry experience, to deliver and to utilize my
            skills and abilities for the job. To develop and strive to keep the
            organization at the apex of my professional excellence.
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
