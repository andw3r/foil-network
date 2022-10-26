import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import img from "../../assets/data/img";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "../../components/NavBar/NavBar";

const Header = () => {
  // gsap animation
  const cubeRef = useRef();
  const cubeRef2 = useRef();
  const cubeRef3 = useRef();
  const cubeRef4 = useRef();
  const cubeRef5 = useRef();
  const cubeRef6 = useRef();
  const cubeRef7 = useRef();

  const body = document.querySelector("body");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    window.addEventListener("load", () => {
      body.addEventListener("mousemove", (e) => {
        
      const xPos = e.clientX / window.innerWidth - 0.5;
      const yPos = e.clientY / window.innerHeight - 0.5;

        const modifier = (index) => index * 1.2 + 0.5;

        TweenLite.to(cubeRef, {
          duration: 1,
          x: xPos * 20 * modifier(1.3),
          y: yPos * 20 * modifier(1.3),
        });
        TweenLite.to(cubeRef2, {
          duration: 1,
          x: xPos * 20 * modifier(1),
          y: yPos * 20 * modifier(1),
        });
        TweenLite.to(cubeRef3, {
          duration: 1,
          x: xPos * 20 * modifier(2.7),
          y: yPos * 20 * modifier(2.7),
        });
        TweenLite.to(cubeRef4, {
          duration: 1,
          x: xPos * 20 * modifier(1.5),
          y: yPos * 20 * modifier(1.5),
        });
        TweenLite.to(cubeRef5, {
          duration: 1,
          x: xPos * 20 * modifier(0.5),
          y: yPos * 20 * modifier(0.5),
        });
        TweenLite.to(cubeRef6, {
          duration: 1,
          x: xPos * 20 * modifier(1),
          y: yPos * 20 * modifier(1),
        });
        TweenLite.to(cubeRef7, {
          duration: 1,
          x: xPos * 20 * modifier(0.8),
          y: yPos * 20 * modifier(0.8),
        });
      });
    });
  });

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__wrapper">
          <div className="header__inner">
            <h1 className="header__title">
              Foil.Network
              <br />
              <span className="header__gradient-text">
                Bounty Hunt &amp; Airdrop
              </span>
            </h1>

            <a href="#" className="header__button">
              Actual Airdrops
            </a>

            <p className="header__text">
              Earn FOIL by participating in the bounty campaign. The Blockchain
              Interactions crypto rewards event brings the important mission of
              scalability and sustainability of the FOIL elastic blockchain.
            </p>
          </div>
          <div className="header__hero-img">
            <img src={img.hero} alt="hero" />
          </div>
        </div>

        <div className="floating-images">
          <img
            src={img.bluredPurpleCube}
            className="floating-images__blured-purple-cube"
          />

          <img
            src={img.bluredBlueCube}
            className="floating-images__blured-blue-cube"
          />

          <img
            src={img.purpleCubeSM}
            className="floating-images__purple-cube--sm"
            ref={cubeRef}
          />

          <img
            src={img.purpleCubeSM}
            className="floating-images__purple-cube--sm-mobile"
            ref={cubeRef2}
          />

          <img
            src={img.blueCubeSM}
            className="floating-images__blue-cube--sm"
            ref={cubeRef3}
          />

          <img
            src={img.blueCubeSM}
            className="floating-images__blue-cube--sm-mobile"
            ref={cubeRef4}
          />

          <img
            src={img.purpleCubeMD}
            className="floating-images__purple-cube--md"
            ref={cubeRef5}
          />

          <img
            src={img.purpleCubeMD}
            className="floating-images__purple-cube--md-mobile"
            ref={cubeRef6}
          />

          <img
            src={img.blueCubeLG}
            className="floating-images__blue-cube--lg level-1"
            ref={cubeRef7}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
