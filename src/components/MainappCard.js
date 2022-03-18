import React from "react";

import "./MainappCard.css";

function MainappCard(props) {
  return (
    <div className="mainapp-card">
      <div className="mainapp-card-left">1</div>
      <div className="mainapp-card-right">
        <h3>{props.challenge.name}</h3>
        <p>{props.challenge.description}</p>
        <button>Open Challenge</button>
      </div>
    </div>
  );
}

export default MainappCard;
