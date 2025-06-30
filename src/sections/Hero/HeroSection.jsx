import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <video autoPlay muted loop className="bg-video">
          <source src="/v1.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <h1>Redefining Careers, Empowering Students</h1>
        <p>Your journey from classroom to career begins here.</p>
        <a href="#contact" className="cta-button">
          Get Started
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
