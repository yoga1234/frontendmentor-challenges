import React from "react";

import "./AdviceGenerator.css";
import {
  iconDice,
  patternDividerDesktop,
  patternDividerMobile,
} from "./images";

function AdviceGenerator() {
  return (
    <div className="advice-container">
      <h3>Advice #117</h3>
      <p>
        "It is easy to sit up and take notice, what's difficult is getting up
        and taking action"
      </p>
      <picture>
        <source media="(min-width: 768px)" srcSet={patternDividerDesktop} />
        <source media="(max-width: 767px)" srcSet={patternDividerMobile} />
        <img src={patternDividerDesktop} alt="Pattern Divider" />
      </picture>
      <img src={iconDice} alt="Dice" />
    </div>
  );
}

export default AdviceGenerator;
