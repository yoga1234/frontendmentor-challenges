import React from "react";
import {
  Navbar,
  HeroImage,
  BrandFeatures,
  ClientTestimonials,
  ImageSection,
  SunnyFooter,
} from "./components";

import "./SunnyLandingpage.css";

function SunnyLandingpage() {
  return (
    <div className="sunny-container">
      <Navbar />
      <HeroImage />
      <BrandFeatures />
      <ClientTestimonials />
      <ImageSection />
      <SunnyFooter />
    </div>
  );
}

export default SunnyLandingpage;
