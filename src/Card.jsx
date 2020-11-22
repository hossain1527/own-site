import React from "react";

const Card = (props) => {
  return (
    <React.Fragment>
      <div className="col-md-4 col-10 mx-auto">
        <div class="card">
          <a href={props.aLink} target="_blank">
            <img src={props.imgSrc} class="card-img-top" alt="skillImage" />
          </a>
          <div className="card-body">
            <h5 className="card-title font-weight-bold mb-4">{props.title}</h5>
            <p className="card-text">
              <img src={props.htmlImg} />
              <span className="ml-2">
                <img src={props.cssImg} />
              </span>
              <span className="ml-2">
                <img src={props.reactImg} />
              </span>
              <span className="ml-2">
                <img src={props.jsImg} />
              </span>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
