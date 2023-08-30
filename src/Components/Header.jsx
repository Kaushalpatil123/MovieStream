import React from "react";
import "../Style.css";
import logo from "../Images/logo.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" />
        <input type="text" placeholder="Search" />
      </div>
    </>
  );
};

export default Header;
