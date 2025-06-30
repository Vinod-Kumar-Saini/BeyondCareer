import React from 'react';
import './ServiceSection.css'

function ServiceSection() {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-grid">
        <div className="service-card">Career Guidance</div>
        <div className="service-card">Internship Opportunities</div>
        <div className="service-card">Mentorship Programs</div>
        <div className="service-card">Community Engagement</div>
      </div>
    </section>
  );
}

export default ServiceSection;