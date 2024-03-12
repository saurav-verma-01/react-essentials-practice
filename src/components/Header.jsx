import React from "react";
import headerLogo from "../assets/investment-calculator-logo.png";
const Header = () => {
  return (
    <header id="header">
      <img src={headerLogo} alt="investment-calculator-logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
