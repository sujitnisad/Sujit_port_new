import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Sujit</h1>
        <ul className="footer__list">
          <li>
            <a href="#About" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#Skills" className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#Home" className="footer__link">
              Home
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/sujit-kumar-4529ab20a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://auth.geeksforgeeks.org/user/sujitkumar56184/practice"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-arrow"></i>
          </a>
          <a
            href="https://github.com/sujitnisad"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Sujit Kumar. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
