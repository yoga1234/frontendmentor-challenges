import React, { useState, useEffect } from "react";

import "./AdviceGenerator.css";
import {
  iconDice,
  patternDividerDesktop,
  patternDividerMobile,
} from "./images";
import { BackButton } from "../../components";

function AdviceGenerator() {
  const API_URL = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState(0);

  const fetchData = () => {
    setAdvice(0);
    setTimeout(async () => {
      const res = await fetch(API_URL);
      const data = await res.json();
      return setAdvice(data);
    }, 750);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <BackButton />
      <div className="advice-background">
        <div className="advice-container">
          <h3>Advice {advice === 0 ? "(Loading...)" : advice.slip.id}</h3>
          <p>{advice === 0 ? "(Loading...)" : advice.slip.advice}</p>
          <picture>
            <source media="(min-width: 768px)" srcSet={patternDividerDesktop} />
            <source media="(max-width: 767px)" srcSet={patternDividerMobile} />
            <img src={patternDividerDesktop} alt="Pattern Divider" />
          </picture>
          <div
            className={
              advice === 0 || null || undefined
                ? "dice-container disabled"
                : "dice-container"
            }
            onClick={advice === 0 ? () => {} : fetchData}
          >
            <img className="dice" src={iconDice} alt="Dice" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdviceGenerator;
