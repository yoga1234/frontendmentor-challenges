import React from "react";

import "./MainappCard.css";

function MainappCard() {
  return (
    <div className="mainapp-card">
      <div className="mainapp-card-left">1</div>
      <div className="mainapp-card-right">
        <h3>The title goes here</h3>
        <p>The challenge description will goes here.</p>
        <button>Open Challenge</button>
      </div>
    </div>
  );
}

export default MainappCard;
