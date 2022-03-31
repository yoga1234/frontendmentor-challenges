import React from "react";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <h2>sunnyside</h2>
      <div>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
