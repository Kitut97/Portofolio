import React from "react";
import { personalData } from "../assets/Data/personal";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <span>{personalData.name.split(" ")[0]}</span>{" "}
          {/* Hanya nama pertama */}
        </div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
