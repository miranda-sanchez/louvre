import React, { useState, useEffect } from "react";
import Nav from "./Nav";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clear the scroll event
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`Header ${isScrolled ? "scrolled" : ""}`}>
      <Nav></Nav>
    </header>
  );
};

export default Header;
