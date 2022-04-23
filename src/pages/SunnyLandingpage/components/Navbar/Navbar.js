import React, { useEffect } from "react";

import "./Navbar.css";
import { iconHamburger } from "../../images";

function Navbar() {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger-icon");
    const menuList = document.getElementById("menu-list");

    hamburger.addEventListener("click", () => {
      if (menuList.style.display === "block") {
        menuList.style.display = "none";
      } else {
        menuList.style.display = "block";
      }
    });
  }, []);
  return (
    <div className="navbar-container">
      <h2>sunnyside</h2>
      <div>
        <img
          className="hamburger-icon"
          src={iconHamburger}
          alt="hamburger icon"
          // onClick={menuClick}
        />
        <ul id="menu-list">
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
