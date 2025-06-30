// File: src/components/Footer.jsx
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">Beyond Career</div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-socials">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Beyond Career. All rights reserved.
        </div>

        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="instagram.svg"
            alt="Instagram"
            style={{ width: "40px", margin: "10px" }}
          />
        </a>

        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="linkedin.svg"
            alt="LinkedIn"
            style={{ width: "40px", margin: "10px" }}
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
