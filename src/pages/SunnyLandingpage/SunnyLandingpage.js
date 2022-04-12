import React from "react";
import {
  Navbar,
  HeroImage,
  BrandFeatures,
  ClientTestimonials,
} from "./components";

import "./SunnyLandingpage.css";

function SunnyLandingpage() {
  return (
    <div>
      <Navbar />
      <HeroImage />
      <BrandFeatures />
      <ClientTestimonials />
    </div>
  );
}

export default SunnyLandingpage;
