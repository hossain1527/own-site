import React from "react";
import { useEffect } from "react";
import Card from "./Card";
import ImageDatabase from "./ImageDatabase";

import imgTib from "./images/tib_logo.jpg";
import imgExcelr from "./images/excelr_logo.png";
import imgGoogle from "./images/google_logo.jpg";
import imgJohn from "./images/johnHopkins_logo.png";
import imgLondon from "./images/uniLondon_logo1.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowAltCircleUp,
  faGraduationCap,
  faKeyboard,
  faMapMarkerAlt,
  faSchool,
  faUniversity,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

import Aos from "aos";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <React.Fragment>
      <section className="page-section bg-light" id="services">
        <div className="container bg-light">
          <div className="text-center bg-light">
            <h2
              className="section-heading text-capitalize bg-light checkHeading"
              data-aos="fade-right"
            >
              Check on me
            </h2>
          </div>
          <div className="row text-center bg-light mt-5">
            <div className="col-md-4 bg-light">
              <a href="#mySkill">
                <FontAwesomeIcon icon={faKeyboard} size="6x" color="#007990" />
              </a>

              <h4 className="my-3 bg-light text-uppercase">Some Projects</h4>
            </div>

            <div className="col-md-4 bg-light">
              <a href="#myEdu">
                <FontAwesomeIcon
                  icon={faUniversity}
                  size="6x"
                  color="#3B3086"
                />
              </a>

              <h4 className="my-3 bg-light text-uppercase">Education</h4>
            </div>

            <div className="col-md-4 bg-light">
              <a href="#myTraining">
                <FontAwesomeIcon
                  icon={faUserGraduate}
                  size="6x"
                  color="#CD5C5C"
                />
              </a>

              <h4 className="my-3 bg-light text-uppercase">Training</h4>
            </div>
          </div>
        </div>
      </section>

      {/*************Skills section**************/}

      <div className="my-5" id="mySkill">
        <h1 className="text-center skillHeading" data-aos="fade-left">
          What I did
        </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4" data-aos="zoom-in-up">
              {ImageDatabase.map((item, index) => {
                return (
                  <Card
                    key={index}
                    imgSrc={item.imgSrc}
                    title={item.title}
                    aLink={item.aLink}
                    htmlImg={item.htmlImg}
                    cssImg={item.cssImg}
                    reactImg={item.reactImag}
                    jsImg={item.jsImag}
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

      {/* ***********Education section*************/}

      <div className="my-5" id="myEdu">
        <h1 className="text-center eduHeading" data-aos="fade-right">
          Where I studied
        </h1>
      </div>

      <div className="col-10 mx-auto test">
        <div class="row" data-aos="zoom-in">
          <div class="col-md-6 pt-4 pt-lg-0 edu-body">
            <div class="card degree">
              <div class="card-body body-class">
                <h5 class="card-title degree-name">
                  Bachelor in Computer Science
                </h5>
                <p class="card-text uni-class">Independent University</p>
                <center>
                  <FontAwesomeIcon icon={faSchool} size="3x" />
                </center>
              </div>
            </div>
          </div>
          <div class="col-md-6 pt-4 pt-lg-0 edu-body">
            <div class="card degree">
              <div class="card-body body-class">
                <h5 class="card-title degree-name">
                  Post Graduate in Management Studies
                </h5>
                <p class="card-text uni-class">Edexcel, United Kingdom</p>
                <center>
                  <FontAwesomeIcon icon={faGraduationCap} size="3x" />
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
      <center className="m-3">
        <a href="#navtop">
          <FontAwesomeIcon
            icon={faArrowAltCircleUp}
            size="3x"
            color="#007990"
          />
        </a>
      </center>

      {/* ***********Training section*************/}

      <div className="my-5" id="myTraining">
        <h1 className="text-center trainHeading" data-aos="fade-left">
          Where I learned
        </h1>
      </div>

      <div className="col-10 mx-auto">
        <div className="col-md-6 pt-4 pt-lg-0 mx-auto">
          <div className="card mb-3 cardTraining">
            <div className="row" data-aos="zoom-in">
              <div className="col-md-4">
                <img src={imgLondon} class="card-img img-usa" alt="jhLogo" />
              </div>
              <div className="col-md-8">
                <div className="card-body body-training">
                  <h5 className="card-title bg-light pt-4 ml-3">
                    Responsive Website Basics: Code with HTML, CSS, and
                    JavaScript - <strong> ongoing </strong>
                    <br />
                    <p className="mt-3 mb-2 ml-2 font-weight-bold">
                      University of London
                    </p>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-10 mx-auto">
        <div className="col-md-6 pt-4 pt-lg-0 mx-auto">
          <div className="card mb-3 cardTraining">
            <div className="row" data-aos="zoom-in">
              <div className="col-md-4">
                <img src={imgJohn} class="card-img img-usa" alt="jhLogo" />
              </div>
              <div className="col-md-8">
                <div className="card-body body-training">
                  <h5 className="card-title bg-light pt-4 ml-3">
                    Coursera Certificate - HTML, CSS and Javascript for Web
                    Developers
                    <br />
                    <p className="mt-3 mb-2 ml-2 font-weight-bold">
                      John Hopkins University
                    </p>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-10 mx-auto">
        <div className="col-md-6 pt-4 pt-lg-0 mx-auto">
          <div className="card mb-3 cardTraining">
            <div className="row" data-aos="zoom-in">
              <div className="col-md-4">
                <img src={imgTib} class="card-img img-india" alt="tibLogo" />
              </div>
              <div className="col-md-8">
                <div className="card-body body-training">
                  <h5 className="card-title bg-light pt-4 ml-2">
                    Certification on Python Programming
                    <br />
                    <p className="mt-3 mb-2 ml-2 font-weight-bold">
                      TIB Academy{" "}
                      <FontAwesomeIcon icon={faMapMarkerAlt} color="#2980B9" />{" "}
                      India
                    </p>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-10 mx-auto">
        <div className="col-md-6 pt-4 pt-lg-0 mx-auto">
          <div className="card mb-3 cardTraining">
            <div className="row" data-aos="zoom-in">
              <div className="col-md-4">
                <img
                  src={imgExcelr}
                  class="card-img img-malaysia"
                  alt="excelrLogo"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body body-training">
                  <h5 className="card-title bg-light pt-4 ml-2">
                    Certification Program in Data Science using Python and R
                    <br />
                    <p className="mt-3 mb-2 ml-2 font-weight-bold">
                      EXCELR{" "}
                      <FontAwesomeIcon icon={faMapMarkerAlt} color="#2980B9" />{" "}
                      Malaysia
                    </p>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-10 mx-auto">
        <div className="col-md-6 pt-4 pt-lg-0 mx-auto">
          <div className="card mb-3 cardTraining">
            <div className="row" data-aos="zoom-in">
              <div className="col-md-4">
                <img src={imgGoogle} class="card-img" alt="GoogleLogo" />
              </div>
              <div className="col-md-8">
                <div className="card-body body-training">
                  <h5 className="card-title bg-light pt-4 ml-2">
                    Google Licenses & Certifications on the Fundamental of
                    Digital Marketing
                    <br />
                    <p className="mt-3 mb-2 ml-2 font-weight-bold">Google</p>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default Service;
