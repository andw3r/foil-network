import React from "react";
import img from "../../assets/data/img";
import "./Subscribe.scss";

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="subscribe__purple-cube">
        <img src={img.purpleCubeMD} />
      </div>
      <div className="subscribe__blue-cube">
        <img src={img.bluredBlueCube} />
      </div>

      <div className="subscribe__container container">
        <h3 className="subscribe__title">Subscribe to us and stay tuned!</h3>

        <form action="#" className="subscribe__form">
          <input
            type="email"
            placeholder="Enter your e-mail"
            className="subscribe__email"
          />
          <button type="submit" className="subscribe__button">
            <span>Send information</span>
            <div className="button-arrow"></div>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
