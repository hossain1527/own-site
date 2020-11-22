import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTrophy,
  faArrowAltCircleUp,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

import img17 from "./images/trav6.jpg";
import img18 from "./images/trav1.jpg";
import img19 from "./images/trav7.jpg";
import img20 from "./images/trav10.jpg";
import img21 from "./images/trav11.jpg";

import ImageDatabase from "./ImageDatabase";
import Card from "./Card";

import infoDatabase from "./infoDatabase";
import CardAward from "./CardAward";

const Achievements = () => {
  return (
    <React.Fragment>
      <section className="page-section bg-light" id="services">
        <div className="container bg-light">
          <div className="text-center bg-light">
            <h2
              className="section-heading text-capitalize bg-light checkHeading"
              data-aos="fade-right"
            >
              Other Side of Me
            </h2>
          </div>
          <div className="row text-center bg-light mt-5">
            <div className="col-md-6 bg-light">
              <a href="#mySkill">
                <FontAwesomeIcon icon={faTrophy} size="6x" color="#007990" />
              </a>

              <h4 className="my-3 bg-light text-uppercase">Achievements</h4>
            </div>

            <div className="col-md-6 bg-light">
              <a href="#myPassion">
                <FontAwesomeIcon icon={faCamera} size="6x" color="#CD5C5C" />
              </a>

              <h4 className="my-3 bg-light text-uppercase">Passion</h4>
            </div>
          </div>
        </div>
      </section>

      {/**************Desiginig of main body************/}

      <h1 className="main-heading">What I Got</h1>

      <div className="my-5" id="mySkill">
        <h3 className="text-center skillHeading" data-aos="fade-left">
          Awards
        </h3>
        <p className="text-center titleAward font-weight-bold">
          Received many awards & recognition. Some kept in the memory and some
          lost...
        </p>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-6 mx-auto">
            <div className="row gy-4" data-aos="zoom-in-up">
              {infoDatabase.map((info, index) => {
                return (
                  <CardAward
                    key={index}
                    imgSrc={info.imgSrc}
                    title={info.title}
                    name={info.name}
                    link={info.link}
                    openLink={info.openLink}
                  />
                );
              })}
              <center>
                <a href="#navtop">
                  <FontAwesomeIcon
                    icon={faArrowAltCircleUp}
                    size="3x"
                    color="#007990"
                  />
                </a>
              </center>
            </div>
          </div>
        </div>
      </div>

      {/************Designing of what I love************/}

      <section className="page-section" id="about">
        <div className="container" id="myPassion">
          <div className="text-center">
            <h2
              className="section-heading text-uppercase font-weight-bold"
              data-aos="fade-left"
              style={{ color: "#66033c" }}
            >
              What I Love
            </h2>
            <h3
              className="section-subheading text-muted font-weight-bold"
              data-aos="fade-right"
            >
              The real me is a travel maniac and fitness freak. Love both music
              and movies. Besides, I'm a travellig photographer
              <br /> where Adobe Photoshop, Lightroom and Camtasia is always my
              best friends.❤️ ❤️
            </h3>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-panel">
                <div className="timeline-heading" data-aos="zoom-in-up">
                  <h4 className="mainheading">
                    <mark className="markcom">Singapore</mark>
                  </h4>
                  <h4 className="subheading">Marina Bay Sands</h4>
                </div>
                <div className="timeline-body">
                  <p
                    className="text-muted text-justify"
                    data-aos="fade-up-left"
                  >
                    <img
                      src={img17}
                      style={{ width: "400px", height: "350px" }}
                    />
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-panel">
                <div className="timeline-heading" data-aos="zoom-in-up">
                  <h4>
                    <mark className="markcom">Indonesia</mark>
                  </h4>
                  <h4 className="subheading">Bali</h4>
                </div>
                <div className="timeline-body">
                  <p
                    className="text-muted text-justify"
                    data-aos="fade-up-right"
                  >
                    <img
                      src={img18}
                      style={{ width: "400px", height: "350px" }}
                    />
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-panel">
                <div className="timeline-heading" data-aos="zoom-in-up">
                  <h4>
                    <mark className="markcom">India</mark>
                  </h4>
                  <h4 className="subheading">Agra, Tajmahal</h4>
                </div>
                <div className="timeline-body">
                  <p
                    className="text-muted text-justify"
                    data-aos="fade-up-left"
                  >
                    <img
                      src={img19}
                      style={{ width: "400px", height: "350px" }}
                    />
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-panel">
                <div className="timeline-heading" data-aos="zoom-in-up">
                  <h4>
                    <mark className="markcom">Thailand</mark>
                  </h4>
                  <h4 className="subheading">Phi Phi Island</h4>
                </div>
                <div className="timeline-body">
                  <p
                    className="text-muted text-justify"
                    data-aos="fade-up-right"
                  >
                    <img
                      src={img20}
                      style={{ width: "400px", height: "350px" }}
                    />
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="timeline-panel">
                <div className="timeline-heading" data-aos="zoom-in-up">
                  <h4>
                    <mark className="markcom">Netherlands</mark>
                  </h4>
                  <h4 className="subheading">Amsterdam</h4>
                </div>
                <div className="timeline-body">
                  <p
                    className="text-muted text-justify"
                    data-aos="fade-up-left"
                  >
                    <img
                      src={img21}
                      style={{ width: "400px", height: "350px" }}
                    />
                  </p>
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
};
export default Achievements;
