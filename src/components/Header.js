import React from "react";
import Nav from "./Nav";
import logo from "../img/LogoLouvre.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
        <img id="logo" src={logo} alt="Louvre Museum logo" />
      </Link>
      <Nav></Nav>
    </header>
  );
};

export default Header;
