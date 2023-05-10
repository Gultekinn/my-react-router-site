import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <div className="custom">
      <div className="custom__logo">
        <img
          src="https://preview.uideck.com/items/crypto/assets/img/logo.svg"
          alt=""
        />
      </div>
      <ul className="custom__navbar">
        <li>
          <Link className="custom__navbar__link" to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link className="custom__navbar__link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="custom__navbar__link" to="/service">
            Service
          </Link>
        </li>
        <li>
          <Link className="custom__navbar__link" to="/roadmap">
            Roadmap
          </Link>
        </li>
        <li>
          <Link className="custom__navbar__link" to="/team">
            Team
          </Link>
        </li>
        <li>
          <Link className="custom__navbar__link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
