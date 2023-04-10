import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            FORECASTOR
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="home" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="form" className="nav-links" onClick={closeMobileMenu}>
                INPUT FORM
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-links" onClick={closeMobileMenu}>
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="sign-up"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                SIGN UP
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="sign-in"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                SIGN IN
              </Link>
            </li>

            {/* <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li> */}
          </ul>
          {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
