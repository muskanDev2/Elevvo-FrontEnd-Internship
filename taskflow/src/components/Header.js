import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header" data-aos="fade-down">
      <h1>TaskFlow</h1>
      <p>Organize your day, stress-free.</p>
      <button>Get Started</button>
    </header>
  );
};

export default Header;
