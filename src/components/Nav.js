import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import logo from "../img/LogoLouvre.png";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav>
      <Link to="/">
        <img id="logo" src={logo} alt="Louvre Museum logo" />
      </Link>
      <button
        className="mobile-nav-toggle-btn"
        aria-controls="primary-navigation"
        aria-expanded={isNavOpen}
        onClick={handleToggleNav}
      >
        {isNavOpen ? <MdClose /> : <MdMenu />}
        <span className="sr-only">Menu</span>
      </button>
      <ul
        id="primary-navigation"
        className={`primary-navigation ${isNavOpen ? "open" : ""}`}
      >
        <Link exact to="/">
          <li className="active">Home</li>
        </Link>
        <a href="#visit">
          <li className="active">Visit</li>
        </a>
        <a href="#exhibitions">
          <li className="active">Exhibitions</li>
        </a>
        <Link to="/tickets">
          <li className="active tickets">Tickets</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
