import React from "react";
import "./Footer.scss";
import img from "../../assets/data/img";
import tags from "../../assets/data/tags";
import {
  FaLinkedinIn,
  FaTelegramPlane,
  FaDiscord,
  FaFacebookF,
  FaRedditAlien,
} from "react-icons/fa";
import { SiMedium, SiTwitter } from "react-icons/si";
import { AiFillGitlab } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__wrapper">
          <div className="footer__row">
            <div className="footer__col">
              <a href="#" className="footer__logo">
                <img src={img.footerLogo} />
              </a>

              <p className="footer__download-title">Download App</p>

              <div className="footer__download-imgs">
                <a href="#" className="footer__donload-link">
                  <img src={img.appstore} alt="appstore" />
                </a>
                <a href="#" className="footer__donload-link">
                  <img src={img.googleplay} alt="googleplay" />
                </a>
              </div>

              <img src={img.powered} className="footer__powered" />
            </div>
            <div className="footer__col">
              <h6 className="footer-col__title">FOIL</h6>
              <a href="#">Earn foil</a>
              <a href="#">Minning</a>
              <a href="#">Run FOILnodes</a>
              <a href="#">Bounties</a>
            </div>
            <div className="footer__col">
              <h6 className="footer-col__title">Resources</h6>
              <a href="#">Blog</a>
              <a href="#">Learn</a>
              <a href="#">Community</a>
              <a href="#">Product</a>
              <a href="#">Block Explorer</a>
            </div>
            <div className="footer__col">
              <h6 className="footer-col__title">Connect with us</h6>
              <div className="footer__links">
                <div className="footer__links-col">
                  <a href="#">
                    <span>
                      <FaLinkedinIn />
                    </span>
                    LinkedIn
                  </a>
                  <a href="#">
                    <span>
                      <SiMedium />
                    </span>
                    Medium
                  </a>
                  <a href="#">
                    <span>
                      <FaTelegramPlane />
                    </span>
                    Telegram
                  </a>
                  <a href="#">
                    <span>
                      <SiTwitter />
                    </span>
                    Twitter
                  </a>
                </div>
                <div className="footer__links-col">
                  <a href="#">
                    <span>
                      <FaDiscord />
                    </span>
                    Discord
                  </a>
                  <a href="#">
                    <span>
                      <FaFacebookF />
                    </span>
                    Facebook
                  </a>
                  <a href="#">
                    <span>
                      <AiFillGitlab />
                    </span>
                    Gitlab
                  </a>
                  <a href="#">
                    <span>
                      <FaRedditAlien />
                    </span>
                    Reddit
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__mobile-col">
            <p className="footer__download-title">Download App</p>

            <div className="download-imgs ">
              <a href="#" className="footer__donload-link">
                <img src={img.appstore} alt="appstore" />
              </a>
              <a href="#" className="footer__donload-link">
                <img src={img.googleplay} alt="googleplay" />
              </a>
            </div>

            <img src={img.powered} className="powered" />
          </div>
          <div className="footer__tags">
            {tags.map((tag) => {
              return <span className="tag">{tag}</span>;
            })}
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="copyright__container">
          <div className="copyright__text">
            <a href="#">Privacy policy </a>
            <a href="#">Terms &amp; Conditions</a>
          </div>

          <a href="" className="copyright__image">
            <img src={img.mon} alt="" />
          </a>

          <a href="#">
            &copy; 2021 FOILnetwork <sup>TM</sup>. All rights reserved.
          </a>
        </div>
      </div>
      <a href="#" className="footer__mobile-logo">
        <img src={img.footerLogo} />
      </a>
    </footer>
  );
};

export default Footer;
