<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

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

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            FORCASTER
            
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                topic 1
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                topic 2
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}
>>>>>>> d1d17d87041d3917010490dc31b03c378bb7d0fe

export default Navbar;
