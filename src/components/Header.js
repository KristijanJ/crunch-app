// PACKAGE
import React from "react";
import { Link } from "react-router-dom";

// STYLES
import "../assets/styles/global.css";
import "../assets/styles/header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <i className="fas fa-home"></i>
          <span>Crunch App</span>
        </Link>
        <div className="search_user">
          <i className="fas fa-search search"></i>
          <i className="far fa-user user"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
