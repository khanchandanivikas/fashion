import React from "react";
import { Slant as Hamburger } from "hamburger-react";
import "../scss/header.scss";

const Header = (props) => {
  const hamburger = props.hamburger;
  const toggleHamburger = props.toggleHamburger;

  return (
    <header className="header_container">
      <div className="bars" onClick={toggleHamburger}>
        <Hamburger size={20} toggled={hamburger} />
      </div>
      <h3>SPLASH</h3>
      <i class="fas fa-shopping-cart"></i>
    </header>
  );
};

export default Header;
