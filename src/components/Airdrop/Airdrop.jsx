import React from "react";
import "./Airdrop.scss";

const Airdrop = (props) => {
  return (
    <div className="airdrop">
      <div className="airdrop__image">
        <img src={props.image} className="front-image" />
        <img src={props.image} className="background-blur-image" />
      </div>
      <div className="airdrop__text">
        <h3 className="airdrop__title">{props.title}</h3>
        <p className="airdrop__description">{props.desc}</p>
      </div>
    </div>
  );
};

export default Airdrop;
