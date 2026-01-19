import React from "react";

const HeroContent = () => {
  return (
    <div className="hero-content">

      
      <h1>
        Smart Furniture Solutions <br />
        For Modern Institutions
      </h1>

      <p>
        Premium quality furniture designed for schools, offices, hospitals, hostels
        and corporate spaces manufactured with precision, delivered with reliability.
      </p>

      <div className="hero-proof">
        <div>
          <strong>2,500+</strong>
          <span>Projects Delivered</span>
        </div>
        <div>
          <strong>15+</strong>
          <span>Years Experience</span>
        </div>
        <div>
          <strong>120+</strong>
          <span>Trusted Clients</span>
        </div>
      </div>

      <div className="hero-actions">
        <a href="#offerings" className="btn-primary">
          View Product Range
        </a>
        <a href="#contact" className="btn-secondary">
          Talk to Expert
        </a>
      </div>

      <div className="trust-strip">
        ISO 9001 Certified • Pan India Delivery • End-to-End Solutions
      </div>

    </div>
  );
};

export default HeroContent;
