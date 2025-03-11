import React from "react";
import { Link } from "react-router-dom";

const Header = ({ toggleTheme, theme }) => {
  return (
    <header>
        <button id = "mode" onClick={toggleTheme}>
        {theme === "light" ? "🌙 " : "☀️"}
      </button>
      <h1>
        <Link to="/" style={{ textDecoration: "none", color: "inherit"}}>
        Kehinde Imani
        </Link>
        </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
