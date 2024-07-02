import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="Footer">
      <article>
        <ul className="socialmedia-footer">
          <li>
            <a
              href="https://www.linkedin.com/in/miranda--sanchez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/miranda-sanchez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </article>

      <article className="footer-bottom">
        <p>2024 &copy; Miranda Sánchez</p>
      </article>
    </footer>
  );
};

export default Footer;
