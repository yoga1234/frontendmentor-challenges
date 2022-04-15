import React from "react";

import "./Navbar.css";
import { iconHamburger } from "../../images";

function Navbar() {
  return (
    <div className="navbar-container">
      <h2>sunnyside</h2>
      <div>
        <img
          className="hamburger-icon"
          src={iconHamburger}
          alt="hamburger icon"
        />
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
