import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav>
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
        <a href="#about">
          <li className="active">About</li>
        </a>
        <li className="active">Projects</li>
        <Link to="/contact">
          <li className="active">Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
