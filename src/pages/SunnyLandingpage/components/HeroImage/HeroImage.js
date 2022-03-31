import React from "react";
import "font-awesome/css/font-awesome.min.css";

import "./HeroImage.css";
import iconArrowDown from "../../images/icon-arrow-down.svg";
import imageHeaderDesktop from "../../images/desktop/image-header.jpg";

function HeroImage() {
  return (
    <div className="hero-container">
      <div className="hero-text">WE ARE CREATIVES</div>
      <img src={iconArrowDown} alt="arrow down" />
      <img src={imageHeaderDesktop} alt="header desktop" />
    </div>
  );
}

export default HeroImage;
