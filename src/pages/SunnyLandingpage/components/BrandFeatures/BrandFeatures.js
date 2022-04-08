import React from "react";

import "./BrandFeatures.css";

import {
  desktopEgg,
  desktopGlass,
  desktopOrange,
  desktopCherry,
  mobileEgg,
  mobileGlass,
  mobileOrange,
  mobileCherry,
} from "../../images";

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
      <div className="brand-item-container container-yellow">
        <picture>
          <source media="(min-width: 426px)" srcset={desktopEgg} />
          <source media="(min-width: 425px)" srcset={mobileEgg} />
          <img src={desktopEgg} alt="egg with yellow background" />
        </picture>
      </div>
      <div className="brand-item-container container-pink">
        <source media="(min-width: 426px)" srcset={desktopGlass} />
        <source media="(min-width: 425px)" srcset={mobileGlass} />
        <img src={desktopGlass} alt="glass with pink background" />
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
      </div>
      <div className="brand-item-container">
        <div className="brand-item-image">
          <picture>
            <source media="(min-width: 426px)" srcset={desktopCherry} />
            <source media="(min-width: 425px)" srcset={mobileCherry} />
            <img src={desktopCherry} alt="cherry with greenish background" />
          </picture>
        </div>
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
        <div className="brand-item-image">
          <picture>
            <source media="(min-width: 426px)" srcset={desktopOrange} />
            <source media="(min-width: 425px)" srcset={mobileOrange} />
            <img src={desktopOrange} alt="orange with blue background" />
          </picture>
        </div>
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
