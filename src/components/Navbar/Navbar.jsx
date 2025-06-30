import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="navbar">
      <div className="logo">Beyond Career</div>
      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
}

export default Navbar;
