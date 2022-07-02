import React from "react";
import "./AirdropOffer.scss";

const AirdropOffer = (props) => {
  return (
    <div className="airdrops-offer">
      <div className="airdrops-offer__container">
        <div className="airdrops-offer__image">
          <img
            src={require(`../../assets/img/${props.offer.image}`)}
            alt="offer-image"
          />
        </div>
        <h6 className="airdrops-offer__title">{props.offer.title}</h6>
        <p className="airdrops-offer__text">{props.offer.text}</p>
      </div>
    </div>
  );
};

export default AirdropOffer;
