import React from "react";

import "./SunnyFooter.css";

import {
  iconFacebook,
  iconInstagram,
  iconPinterest,
  iconTwitter,
} from "../../images";

function SunnyFooter() {
  return (
    <div className="sunnyfooter-container">
      <h3>sunnyside</h3>
      <div className="footer-menu">
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
      </div>
      <div className="socmed-icons">
        <img src={iconFacebook} alt="facebook" />
        <img src={iconInstagram} alt="instagram" />
        <img src={iconTwitter} alt="twitter" />
        <img src={iconPinterest} alt="pinterest" />
      </div>
    </div>
  );
}

export default SunnyFooter;
