import React from "react";
import { personalData, socialLinks } from "../assets/Data/personal";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>
              &copy; {currentYear} {personalData.name}. All rights reserved.
            </p>
          </div>
          <div className="footer-social">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
