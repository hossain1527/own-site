import React from "react";
import { useEffect } from "react";
import imgAbout from "../src/images/15.jpg";
import c_img from "../src/images/c_img.png";
import php_img from "../src/images/php_img.png";
import python_img from "../src/images/python_img.jpg";
import react_img from "../src/images/react_img.png";

import Aos from "aos";
import "aos/dist/aos.css";

import Common from "./Common";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <React.Fragment>
      <Common
        name="Here I am, this is me.."
        imgSrc={imgAbout}
        btnName="Wanna catch"
        visit="/contact"
        subName="The coder, The Traveller 🌎"
      />

      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase" data-aos="fade-left">
              The Journey
            </h2>
            <h3 className="section-subheading text-muted" data-aos="fade-right">
              To chase my dream.
            </h3>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src={c_img}
                  alt="cImage"
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading" data-aos="zoom-in-up">
                  <h4 className="mainheading">
                    <mark className="markcom">It's My Tale</mark>
                  </h4>
                  <h4 className="subheading">The beginning</h4>
                </div>
                <div className="timeline-body">
                  <p
                    className="text-muted text-justify font-weight-bold"
                    data-aos="fade-up-left"
                  >
                    I swoed my dream as a developer turned me to complete my
                    bachelor in Computer Science. Programming was not easy
                    before; it was traditional but couldn't stop me search for
                    learnings. I've started with
                    <code>Pascal, C, C++, Java, Visua Basic</code>; tried to do
                    some projects like chessboard (critical calculations),
                    customized keyboard, kids game, DBMS oriented programs and
                    many more.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src={php_img}
                  alt="phpImage"
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading" data-aos="zoom-in-up">
                  <h4>
                    <mark className="markcom">New Era</mark>
                  </h4>
                  <h4 className="subheading">Coded with PHP</h4>
                </div>
                <div className="timeline-body">
                  <p
                    className="text-muted text-justify font-weight-bold"
                    data-aos="fade-up-right"
                  >
                    A new chapter with
                    <code>PHP, Java Script, Bootstrap HTML</code> and
                    <code> CSS</code> opened an enigma in the world of Web
                    development. Hands on with different frameworks including
                    <code> CodeIgniter, Laravel, Drupal</code> and
                    <code> Joomla</code>. It was an amazing journey.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src={python_img}
                  alt="pythongImage"
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading" data-aos="zoom-in-up">
                  <h4>
                    <mark className="markcom">
                      Touching <strong>Python</strong>
                    </mark>
                  </h4>
                  <h4 className="subheading">
                    High-level programming language
                  </h4>
                </div>
                <div className="timeline-body">
                  <p
                    className="text-muted text-justify font-weight-bold"
                    data-aos="fade-up-left"
                  >
                    In 2019, an extensive opportunity to get trained with
                    <code> Python</code> made me to travel Bangalore, India. A
                    comprehensive training with amazing sightseeing made the
                    whole tour a memorable keepsake. Subsequently received
                    another training on <code>Python</code>, and <code>R </code>
                    with the sound knowledge on Data Science - a concepet based
                    on mathematics, statistics and computer science.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src={react_img}
                  alt="reactImage"
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading" data-aos="zoom-in-up">
                  <h4>
                    <mark className="markcom">
                      Re-act on <strong>React</strong>
                    </mark>
                  </h4>
                  <h4 className="subheading">A leading edge</h4>
                </div>
                <div className="timeline-body">
                  <p
                    className="text-muted text-justify font-weight-bold"
                    data-aos="fade-up-right"
                  >
                    Facebook's extraordinary fabrication <code>React </code>
                    changed the whole web world and gives a new unique ways of
                    plotting, designing and acting on the web industry naturally
                    attracted me to change my views and overall direction of
                    handling web applications. It was a startling experience
                    playing with components, react-router, animation, Switch,
                    Hooks and many more. Great experience!
                  </p>
                  <p className="mt-5 ml-5 lasttext">To be continued...</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <center className="pb-2 mb-3">
        <a href="#navtop">
          <FontAwesomeIcon
            icon={faArrowAltCircleUp}
            size="3x"
            color="#007990"
          />
        </a>
      </center>
    </React.Fragment>
  );
}

export default About;
