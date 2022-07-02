import React, { useEffect, useState } from "react";

import "./NavBar.scss";
// images
import images from "../../assets/data/img";
// icons
import { BsMedium } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
// burger
import { HamburgerSpring } from "react-animated-burgers";

const NavBar = () => {
  // mobile nav
  const [mobileNavActive, setMobileNavActive] = useState(false);

  useEffect(() => {
    mobileNavActive
      ? document.body.classList.add("lock")
      : document.body.classList.remove("lock");
  });

  // menu items
  const menuItems = [
    "Foil",
    "Learn",
    "Blog",
    "Product",
    "Community",
    "Block Explorer",
    "Contact Us",
  ];

  // menu links
  const menuLinks = {
    mediumLink: "https://medium.com/",
    telegramLink: "https://telegram.org/",
    twitterLink: "https://twitter.com/",
  };

  // hide navbar
  const [hideNav, setHideNav] = useState(false);
  let prevScrollPos = window.pageYOffset;
  const controllNavBar = () => {
    let currentScroll = window.pageYOffset;
    prevScrollPos < currentScroll ? setHideNav(true) : setHideNav(false);

    prevScrollPos = currentScroll;
  };
  useEffect(() => {
    window.addEventListener("scroll", controllNavBar);
  }, []);

  return (
    <>
      <nav className={hideNav ? "nav hide" : "nav"}>
        <a className="nav__image" href="#">
          <img src={images.logo} alt="logo" />
        </a>
        <ul className="nav__menu">
          {menuItems.map((item) => (
            <li className="nav__item">
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>

        <div className="nav__profile">
          <div className="nav__social-medias">
            <a
              href={menuLinks.mediumLink}
              target="_blank"
              className="nav__link nav__link--medium"
            >
              <BsMedium />
            </a>

            <a
              href={menuLinks.telegramLink}
              target="_blank"
              className="nav__link nav__link nav__link--telegram"
            >
              <FaTelegramPlane />
            </a>

            <a
              href={menuLinks.twitterLink}
              target="_blank"
              className="nav__link nav__link--twitter"
            >
              <FaTwitter />
            </a>
          </div>

          <a href="#" className="nav__language">
            EN
          </a>
          <a href="#" className="nav__user">
            <img src={images.profilePic} />
          </a>
        </div>
        <div className="burger">
          <HamburgerSpring
            isActive={mobileNavActive}
            onClick={() => {
              setMobileNavActive(!mobileNavActive);
            }}
            barColor="#fff"
          />
        </div>
      </nav>
      <>
        <div className={mobileNavActive ? "mobile-nav active" : "mobile-nav"}>
          <ul className="mobile-nav__menu">
            {menuItems.map((item) => (
              <li className="mobile-nav__item">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>

          <div className="mobile-nav__profile">
            <div className="mobile-nav__social-medias">
              <a
                href={menuLinks.mediumLink}
                target="_blank"
                className="mobile-nav__link"
              >
                <BsMedium color="#F5F5F5" />
              </a>
              <a
                href={menuLinks.telegramLink}
                target="_blank"
                className="mobile-nav__link"
              >
                <FaTelegramPlane color="#F5F5F5" />
              </a>
              <a
                href={menuLinks.twitterLink}
                target="_blank"
                className="mobile-nav__link"
              >
                <FaTwitter color="#F5F5F5" />
              </a>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default NavBar;
