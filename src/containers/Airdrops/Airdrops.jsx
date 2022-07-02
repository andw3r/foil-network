import React from "react";
import "./Airdrops.scss";
import airdropsOfferData from "../../assets/data/airdropsOffer";
import AirdropOffer from "../../components/Airdrop-offer/AirdropOffer";

const Airdrops = () => {
  return (
    <section className="airdrops">
      <div className="airdrops__container container">
        <h3 className="airdrops__title">
          Completed Bounty Hunt &amp; Airdrops
        </h3>
        <div className="airdrops__wrapper">
          {airdropsOfferData.map((offer) => {
            return <AirdropOffer key={offer.id} offer={offer} />;
          })}
        </div>
        <button className="airdrops__button button--load-more">
          Load more
        </button>
      </div>
    </section>
  );
};

export default Airdrops;
