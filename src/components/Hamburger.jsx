import React from "react";
import "../scss/hamburger.scss";

const Hamburger = (props) => {
  const hamburger = props.hamburger;
  
  return (
    <div className={hamburger ? "hamburger-menu" : "hamburger-menu hide"}>
      <ul>
        <li>Shop</li>
        <li>About</li>
        <li>Services</li>
        <li>Clients</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Hamburger;
