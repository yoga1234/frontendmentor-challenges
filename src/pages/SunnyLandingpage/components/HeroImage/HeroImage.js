import React from "react";
import "font-awesome/css/font-awesome.min.css";

import "./HeroImage.css";
import {
  desktopImageHeader,
  mobileImageHeader,
  iconArrowDown,
} from "../../images";

function HeroImage() {
  return (
    <div className="hero-container">
      <div className="hero-text">WE ARE CREATIVES</div>
      <img className="hero-arrow-down" src={iconArrowDown} alt="arrow down" />
      <picture className="image-header">
        <source media="(min-width: 426px)" srcSet={desktopImageHeader} />
        <source media="(min-width: 425px)" srcSet={mobileImageHeader} />
        <img src={desktopImageHeader} alt="Lemon blue background" />
      </picture>
    </div>
  );
}

export default HeroImage;
