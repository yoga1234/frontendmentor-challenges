import React from "react";

import "./ImageSection.css";

import {
  desktopCone,
  desktopMilk,
  desktopOrangeBowl,
  desktopCubes,
  mobileCone,
  mobileMilk,
  mobileOrangeBowl,
  mobileCubes,
} from "../../images";

function ImageSection() {
  return (
    <div className="image-section-container">
      <picture>
        <source media="(min-width: 426px)" srcSet={desktopMilk} />
        <source media="(max-width: 425px)" srcset={mobileMilk} />
        <img src={desktopMilk} alt="four milk bottle" />
      </picture>
      <picture>
        <source media="(min-width: 426px)" srcSet={desktopOrangeBowl} />
        <source media="(max-width: 425px)" srcset={mobileOrangeBowl} />
        <img src={desktopOrangeBowl} alt="slice of orange on bowl" />
      </picture>
      <picture>
        <source media="(min-width: 426px)" srcSet={desktopCone} />
        <source media="(max-width: 425px)" srcset={mobileCone} />
        <img src={desktopCone} alt="ice cream cone" />
      </picture>
      <picture>
        <source media="(min-width: 426px)" srcSet={desktopCubes} />
        <source media="(max-width: 425px)" srcset={mobileCubes} />
        <img src={desktopCubes} alt="sugar cubes" />
      </picture>
    </div>
  );
}

export default ImageSection;
