import React from "react";
import { Link } from "react-router-dom";

import "./MainappCard.css";

function MainappCard(props) {
  return (
    <div className="mainapp-card">
      <div className="mainapp-card-left">{props.challenge.id}</div>
      <div className="mainapp-card-right">
        <h3>{props.challenge.name}</h3>
        <p>{props.challenge.description}</p>
        <Link to={"/frontendmentor-challenges/" + props.challenge.url}>
          <button>Open Challenge</button>
        </Link>
      </div>
    </div>
  );
}

export default MainappCard;
