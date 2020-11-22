import React from "react";

function CardAward(props) {
  return (
    <div className="col-md-4 col-10 mx-auto">
      <div className="cardsAward">
        <div className="cardDet">
          <a href={props.openLink} target="_blank">
            <img src={props.imgSrc} alt="awardPic" className="cardImg" />
          </a>
          <div className="cardInfo">
            <span className="cardCategory">{props.title}</span>
            <h3 className="cardTitle">
              {props.name}
              {props.link}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardAward;
