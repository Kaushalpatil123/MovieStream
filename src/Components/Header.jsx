import React from "react";
import "../Style.css";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" />
        <input type="text" placeholder="Search" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Catagory">Catagory</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
