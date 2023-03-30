import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__brand">FORECASTER</div>
      <ul className="navbar__links">
        <li>
          <button className="navbar__button">Home</button>
        </li>
        <li>
          <button className="navbar__button">Sign In</button>
        </li>
        <li>
          <button className="navbar__button">Data Form</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
