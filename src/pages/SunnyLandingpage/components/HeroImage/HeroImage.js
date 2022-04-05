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
      <img src={iconArrowDown} alt="arrow down" />
      {/* <img src={imageHeaderDesktop} alt="header desktop" /> */}
      <picture>
        <source media="(min-width: 426px)" srcset={desktopImageHeader} />
        <source media="(min-width: 425px)" srcset={mobileImageHeader} />
        <img src={desktopImageHeader} alt="Lemon blue background" />
      </picture>
    </div>
  );
}

export default HeroImage;
