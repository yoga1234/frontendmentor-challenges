import React from "react";

import "./BrandFeatures.css";

function BrandFeatures() {
  return (
    <div className="brandfeature-container">
      <div className="brand-item-container">
        <div className="brand-item-text">
          <h3>Transform your brand</h3>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <button>LEARN MORE</button>
          <div className="btn-bottom"></div>
        </div>
        <div className="brand-item-image"></div>
      </div>
      <div className="brand-item-container">
        <div className="brand-item-text">
          <h3>Stand out to the right audience</h3>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywritters, we'll build and
            extends your brand in digital places.
          </p>
          <button>LEARN MORE</button>
          <div className="btn-bottom bottom-pink"></div>
        </div>
        <div className="brand-item-image"></div>
      </div>
      <div className="brand-item-container">
        <div className="brand-item-mixed">
          <h3>Graphic Design</h3>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential client's
            attention.
          </p>
        </div>
      </div>
      <div className="brand-item-container">
        <div className="brand-item-mixed">
          <h3>Photography</h3>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improves your business image.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BrandFeatures;
