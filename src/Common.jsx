import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <React.Fragment>
      <section className="d-flex align-items-center bg" id="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 id="main-caption">
                    <strong className="brand-name">Sammy</strong>
                  </h1>

                  <h2>{props.subName}</h2>

                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-start">
                      {props.btnName}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgSrc}
                    className="img-fluid animated"
                    alt="homeImg"
                    MyHomeImg
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Common;
