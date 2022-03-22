import React from "react";
import { Link } from "react-router-dom";

import "./BackButton.css";

function BackButton() {
  return (
    <div className="backbtn-container">
      <Link to="/frontendmentor-challenges">
        <button>Back to list</button>
      </Link>
    </div>
  );
}

export default BackButton;
