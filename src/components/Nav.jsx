import React from "react";
import logo from "../assets/Smart-Tech-cropped.png";

function Nav() {
  return (
    <nav id="nav">
      <div className="nav__container">
        <div className="nav__row">
          <div className="nav__wrapper">
            <figure className="logo__wrapper">
              <img className="logo" src={logo} alt="" />
            </figure>
            <ul className="nav__links--first">
              <li className="nav__list">Home</li>
              <li className="nav__list">Shop</li>
              <li className="nav__list">About</li>
            </ul>
            <ul className="nav__links--second">
              <li className="nav__list">Search</li>
              <li className="nav__list">Account</li>
              <li className="nav__list">Cart</li>
              <div className="nav__list">colorswticher</div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
