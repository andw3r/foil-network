import React from "react";
import img from "../../assets/data/img";
import Airdrop from "../../components/Airdrop/Airdrop";
import "./Blockchain.scss";

const Blockchain = () => {
  return (
    <section className="blockchain">
      <div className="blockchain__container container">
        <div className="blockchain__inner">
          <div className="blockchain__image">
            <img src={img.blockchain} alt="blockchain" />
          </div>

          <div className="blockchain__text">
            <p className="blockchain__description">
              Test the FOIL NFT storage, send and receive encrypted messages,
              transactions and save NFT content over blockchain and bring the
              crypto benchmark tests of FOIL Network live! 1,250,000 FOIL are
              reserved for the crypto airdrop and bounty participants.
            </p>
            <h3 className="blockchain__title">
              Join FOIL Blockchain Interactions and earn FOIL crypto.
            </h3>
          </div>
        </div>
        <div className="blockchain__outer">
          <Airdrop
            image={img.airdrop1}
            title="Actuail Airdrop titile"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <Airdrop
            image={img.airdrop2}
            title="Actuail Airdrop titile"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
        </div>
      </div>
      <hr className="blockchain__line" />
    </section>
  );
};

export default Blockchain;
